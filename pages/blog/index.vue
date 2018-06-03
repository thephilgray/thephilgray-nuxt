<template lang="pug">
  div
    BlogPostListing(:posts="posts")
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
    // eslint-disable-next-line
    console.log('fetching async data');

    const allPages = await app
      .$content('/blog')
      .query({ exclude: ['attributes', 'body'] })
      .getAll();
    return {
      posts: await app.$content('/blog').getOnly(0, 4),
      numberOfPages: Math.ceil(allPages.length / 5)
    };
  },
  methods: {
    tags(post) {
      // eslint-disable-next-line
      console.log(post);
      return post.tags.split(',').map(tag => tag.trim());
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
