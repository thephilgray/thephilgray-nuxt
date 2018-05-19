<template lang="pug">
main
  header.latest-header
    p(style={"text-align": "center"}) The latest posts from @thephilgray
  article(v-for="post in latestPosts")
    a(v-if="post.gsx$url.$t", :href="post.gsx$url.$t") {{post.gsx$handle.$t}}
    blockquote.tweetText
      .sm-post(v-html="raw(post.gsx$value.$t)") 
    p {{post.gsx$date.$t}}
</template>
<script>
import twitter from 'twitter-text';
export default {
  async asyncData({ app }) {
    const posts = await app.$axios.$get(
      'https://spreadsheets.google.com/feeds/list/18Cp7E1R8ZRWp-W4vQ1TbhbWLU8rB-jQ-DN9Tp2cur6c/od6/public/values?alt=json'
    );
    const latestPosts = posts.feed.entry.slice(-3).reverse();
    return { latestPosts };
  },

  methods: {
    raw(text) {
      return `<h3>${twitter.autoLink(text)}</h3>`;
    }
  }
};
</script>
<style lang="scss" scoped>
article {
  background: #f8efb6;
  text-align: center;
  padding: 0.25em;
  border: 0.25em solid #262427;
}

.tweetText{
  word-wrap: break-word;
}

article + article {
  margin-top: 1em;
}

.latest-header {
  margin-bottom: 1em;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
