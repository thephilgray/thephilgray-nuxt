<template lang="pug">
  div
    article(v-for="post in posts")
      h3 {{post.title}}
      p {{post.date | date}}
      p {{post.abstract}}
</template>

<script>
export default {
  async asyncData({ app }) {
    // eslint-disable-next-line
    console.log('fetching async data');
    return {
      posts: await app.$content('/blog').getAll()
    };
  }
};
</script>
