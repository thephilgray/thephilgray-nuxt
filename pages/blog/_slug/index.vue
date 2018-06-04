<template lang="pug">
  BlogPost(:post="post", featured)
</template>

<script>
import BlogPost from '@/components/blogPost';
export default {
  components: {
    BlogPost
  },
  async asyncData({ app, route }) {
    // eslint-disable-next-line
    console.log('fetching async data');
    return {
      post: await app.$content('/blog').get(route.path)
    };
  },
  computed: {
    tags() {
      return this.post.tags.split(',').map(tag => tag.trim());
    }
  }
};
</script>

