<template lang="pug">
  div
    BlogPostListing(:posts="posts.length > 1 ? posts : [posts]")
    PaginationControls(:numberOfPages="numberOfPages", :currentPage="Number(1)", relativePath="/blog/")
</template>

<script>
import BlogPostListing from "@/components/blogPostListing";
import PaginationControls from "@/components/paginationControls";

export default {
  components: {
    BlogPostListing,
    PaginationControls
  },
  async asyncData({ app }) {
    const allPosts = await app.$content("/blog").getAll();
    let posts = allPosts;
    let numberOfPages = 1;

    return {
      posts,
      numberOfPages
    };
  },

  head() {
    return {
      title: "Blog"
    };
  }
};
</script>
<style lang="scss" scoped>
</style>
