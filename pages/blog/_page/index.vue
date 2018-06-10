<template lang="pug">
  div
    p Page {{$route.params.page}} of {{numberOfPages}}
    hr
    BlogPostListing(:posts="posts")
    PaginationControls(:numberOfPages="numberOfPages", :currentPage="Number($route.params.page)", relativePath="/blog/")
</template>

<script>
import BlogPostListing from '@/components/blogPostListing';
import PaginationControls from '@/components/paginationControls';
export default {
  components: {
    BlogPostListing,
    PaginationControls
  },
  async asyncData({ app, redirect }) {
    const { page } = app.context.route.params;

    const shiftIndex = currentIndex => (currentIndex += page * 2.5);
    const allPages = await app
      .$content('/blog')
      .query({ exclude: ['attributes', 'body'] })
      .getAll();

    const numberOfPages = Math.ceil(allPages.length / 5);

    // redirect to blog if user attempts to navigate to a page that does not exist
    if (page > numberOfPages) {
      redirect('/blog');
    }

    return {
      posts: await app.$content('/blog').getOnly(shiftIndex(0), shiftIndex(4)),
      numberOfPages
    };
  },
  head() {
    return {
      title: 'Blog: Page ' + this.$route.params.page
    };
  }
};
</script>
