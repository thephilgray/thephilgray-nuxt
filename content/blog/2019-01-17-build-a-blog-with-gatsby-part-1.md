---
title: 'Build a Blog with Gatsby, Part 1'
tags: 'Gatsby, React, Node, JavaScript, GraphQL'
abstract: >-
  I decided to rebuild my site with Gatsby and Netlify. The first post describes
  basic setup and getting the blog up functionality and running.
published: true
---

The repo for this project can be found here: [https://github.com/thephilgray/thephilgray-gatsby](https://github.com/thephilgray/thephilgray-gatsby)

## Scaffold the Project

```bash
npm i -g gatsby-cli
gatsby new <project-name>
```

## Setup a Blog

Create the `posts` directory in `src/posts` and include a markdown file with `yaml` frontmatter:

```md
---
title: EPUB Dev Testing and Debugging
tags: EPUB, E-books, Node, JavaScript, Testing, Cypress, CLI, Android, Mobile
slug: epub-dev-testing-and-debugging
date: 2019-01-11
---

### EPUB Dev Testing

For the past five years or so, many of us have become accustomed to developing websites and web apps using powerful build tools that speed up our workflow and allow us to focus on really interesting features and design decisions without needing to sacrifice performance and usability.
```

Assuming `gatsby-source-filesystem` is installed, add an object to the `plugins` array in `gatsby-config.js` for each directory of files you want to expose as a collection.

This object must `resolve` to the plugin `gatsby-source-filesystem` and should include an `options` object which includes a `name` and `path` for the directory of files it reads and exposes to the graphql api.

There can be multiple instances of this plugin. For instance, in the example below derrived from the current default template which already included `gatsby-source-filesystem` configured to expose the `images` directory, I've added a new instance which also exposes the `posts` directory.

```js
plugins: [
  `gatsby-plugin-react-helmet`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`
    }
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `posts`,
      path: `${__dirname}/src/posts`
    }
  }
];
```

Install `gatsby-transformer-remark`

```bash
npm i --save gatsby-transformer-remark
```

Add `gatsby-transformer-remark` to the `plugins` array in `gatsby-config.js`

```js
plugins: [
  // ....other plugins
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `posts`,
      path: `${__dirname}/src/posts`
    }
  },
  `gatsby-transformer-remark`
];
```

Restart `gatsby develop` so that the `posts` directory is read. You do not need to restart for new values and files, but you do for new config properties and new yaml fields to register.

Query the markdown data at `http://localhost:8000/___graphql`

```graphql
query BLOG_POST_LISTING {
  allMarkdownRemark(
    limit: 5
    sort: { order: DESC, fields: [frontmatter___date] }
  ) {
    edges {
      node {
        frontmatter {
          title
          slug
          date(formatString: "MMMM DD, YYYY")
          tags
        }
        excerpt
        id
      }
    }
  }
}
```

Explore the docs for more fields, filters, and sorting.

There are two ways to access the `graphql` data from inside a component:

- using the `StaticQuery` component
- using a page query

Since the `StaticQuery` component can be used in any component and because our query does not rely on variables (via `pageContext`), it's a good choice for the `BlogPostListing` component.

Pass a function to the `StaticQuery` component's `render` prop from which we can destructure the `allMarkdownRemark` object from `data` and map over it.

```js
import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import BlogPostListingItem from './BlogPostListingItem';

const BLOG_POST_LISTING = graphql`
  query BLOG_POST_LISTING {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: { draft: { ne: true } }
        fileAbsolutePath: { regex: "/posts/" }
      }
    ) {
      edges {
        node {
          frontmatter {
            title
            slug
            date(formatString: "MMMM DD, YYYY")
            tags
            abstract
          }
          excerpt
          id
        }
      }
    }
  }
`;

const BlogPostListing = () => (
  <StaticQuery
    query={BLOG_POST_LISTING}
    render={({ allMarkdownRemark }) =>
      allMarkdownRemark.edges.map(({ node }) => (
        <BlogPostListingItem post={node} key={node.id} />
      ))
    }
  />
);

export default BlogPostListing;
```

Here's the code for `BlogPostListingItem.js`:

```js
import React from 'react';
import { Link } from 'gatsby';

const BlogPostListingItem = ({ post }) => (
  <div>
    <article>
      <div>
        <Link to={`blog/${post.frontmatter.slug}`}>
          <h2>{post.frontmatter.title}</h2>
        </Link>
        <p>{post.frontmatter.date}</p>
      </div>
      <main>
        <p>
          <em>
            {post.frontmatter.abstract
              ? post.frontmatter.abstract
              : post.excerpt}
          </em>
        </p>
      </main>
      <aside>
        {post.frontmatter.tags.split(', ').map((tag, i) => (
          <span>{tag + (i < tag.length - 1 ? ',' : '')}</span>
        ))}{' '}
      </aside>
    </article>
    <hr />
  </div>
);

export default BlogPostListingItem;
```

Create the blog page in `src/pages/blog.js`

```js
import React from 'react';
import BlogPostListing from '../components/BlogPostListing';

export default function blog() {
  return (
    <>
      <BlogPostListing />
    </>
  );
}
```

Now, if you navigate to `http://localhost:8000/blog`, you should see a list of all the blog posts.

However, we haven't created the pages for the actual blogposts yet, so clicking the links will fail.

Create the `BlogPost` component inside of `src/components/`.

Since this will actually be rendered as a page component, and since we'll want to be able pass an id variable to determine the specific blogpost to query for, we should use Gatsby's page query in this case.

The query will be something like this:

```graphql
query PostQuery($id: String!) {
  markdownRemark(id: { eq: $id }) {
    frontmatter {
      title
      date(formatString: "MMMM Do, YYYY")
      slug
      tags
      abstract
    }
    html
  }
}
```

The page component file must export the query as `query`. By doing this, Gatsby will expose the query `data` to the default component's `props`.

We can set the body of the post by creating an element with the attribute `dangerouslySetInnerHTML` and setting the queried html as the value to `__html`.

```js
import React from 'react';
import { graphql } from 'gatsby';

export default function BlogPost({ data }) {
  const { markdownRemark } = data;
  return (
    <article>
      <header>
        <h1>{markdownRemark.frontmatter.title}</h1>
        <p>{markdownRemark.frontmatter.date}</p>
      </header>
      <p>
        <em>{markdownRemark.frontmatter.abstract}</em>
      </p>
      <hr />
      <main dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
      <aside>
        {post.frontmatter.tags.split(', ').map((tag, i) => (
          <span>{tag + (i < tag.length - 1 ? ',' : '')}</span>
        ))}{' '}
      </aside>
      <hr />
    </article>
  );
}

export const query = graphql`
  query PostQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        slug
        tags
        abstract
      }
      html
    }
  }
`;
```

But where do we create the routes for blogposts and how do we tell Gatsby to render them with this component?

Gatsby creates actual pages for each route and we can tell it how to create the pages by creating a hook in `gatsby-node.js`.

Export a `createPages` function, destructuring `graphql` and `actions` from its parameter.

Return a new `Promise` in which you pass a `graphql` query to the `graphql` function. This function returns a promise. Chain `then` to it, destructuring `data` and `errors` in the callback parameters.

Return `reject(errors)` if there are `errors`.

Loop over `data.posts.edges` with `forEach`.

For each edge, execute `createPage`, passing in an object with the `path`, `component` to render (`./src/components/BlogPost.js` in this case), and optionally, the `context`. It's inside of `context` that we'll pass the post's `id` which will be used by page query (`PostQuery`) to query for each specific post.

Finally, call `resolve()` to resolve the promise.

```js
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    graphql(`
      query {
        blogposts: allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: {
            frontmatter: { draft: { ne: true } }
            fileAbsolutePath: { regex: "/posts/" }
          }
        ) {
          edges {
            node {
              frontmatter {
                slug
              }
              id
            }
          }
        }
      }
    `).then(({ data, errors }) => {
      if (errors) {
        return reject(errors);
      }

      data.blogposts.edges.forEach(({ node }) => {
        const { slug } = node.frontmatter;
        const relativePath = `/blog/${slug}`;
        createPage({
          path: relativePath,
          component: path.resolve('./src/components/BlogPost.js'),
          context: {
            id: node.id
          }
        });
      });
      resolve();
    });
  });
};
```

Rerun `gatsby develop`. This time, it will build all the pages. Go to the blog page, click on a link. This should navigate you to `blog/` + the post `slug`, where you should be able to see the markdown rendered as HTML.

In the next post on this series, I might explore handling multiple post types with `gatsby-transformer-remark`, parsing tags, implementing page transitions with `gatsby-plugin-layout`, pagination, deploying to `Netlify`, and setting up `Netlify CMS`.
