<template lang="pug">
  div
    article
      h2 {{post.title}}
      nuxtent-body(:body="post.body")
</template>

<script>
export default {
  async asyncData({ app, route }) {
    // eslint-disable-next-line
    console.log('fetching async data');
    return {
      post: await app.$content('/demos').get(route.path)
    };
  }
};
</script>
