<template lang="pug">
  div
    BlogPostListing(:posts="posts.length > 1 ? posts : [posts]")
    PaginationControls(:numberOfPages="numberOfPages", :currentPage="Number(1)", relativePath="/blog/")
</template>

<script>
import BlogPostListing from '@/components/blogPostListing';
import PaginationControls from '@/components/paginationControls';

export default {
  components: {
    BlogPostListing,
    PaginationControls
  },
  async asyncData({ app }) {
    const allPosts = await app
      .$content('/blog')
      .query({ exclude: ['attributes', 'body'] })
      .getAll();
    return {
      posts: await app.$content('/blog').getOnly(0, 4),
      numberOfPages: Math.ceil(allPosts.length / 5)
    };
  }
};
</script>
<style lang="scss" scoped>
</style>
