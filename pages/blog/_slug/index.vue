<template lang="pug">
  div
    article
      h2 {{post.title}}
      nuxtent-body(:body="post.body")
    PostTags(:tags="tags")
</template>

<script>
import PostTags from '@/components/postTags';
export default {
  components: {
    PostTags
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

