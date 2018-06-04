<template lang="pug">
div
  h2 Tag: {{$route.params.tag}}
  hr
  Blog(:posts="tagPosts", :currentPage="Number($route.params.page || 1)", :relativePath="'/blog/tags/' + $route.params.tag + '/'")
</template>
<script>
import { slugFilter } from '@/lib/filters.js';
import Blog from '@/layouts/blog';
export default {
  components: {
    Blog
  },
  async asyncData({ app }) {
    // eslint-disable-next-line
    console.log(app.$content);
    const allDocs = await app.$content('/blog').getAll();
    const { tag } = app.context.route.params;

    const tagPosts = allDocs.filter(doc =>
      doc.tags
        .split(',')
        .map(tag => slugFilter(tag))
        .includes(tag)
    );

    return {
      tagPosts
    };
  }
};
</script>
