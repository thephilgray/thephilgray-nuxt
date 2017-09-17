<template lang="pug">
main
  header.latest-header
    p The latest posts from my Facebook and Twitter.
  article(v-if="latestPost", v-for="post in latestPost")
    a(:href="post.gsx$url.$t") {{post.gsx$handle.$t}}
    blockquote
      .sm-post(v-html="raw(post.gsx$value.$t)") 
    p {{post.gsx$date.$t}}
  div(v-else)
    .spinner      
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      posts: [],
      latestPost: []
    }
  },
  methods: {
    uglify(text) {
      const urlRegex = /(https?:\/\/[^\s]+)/g
      return text.replace(urlRegex, function(url) {
        return '<a class="sm-post__link" href="' + url + '" style="word-break:break-all;">' + url + '</a>'
      })
    },
    raw(text) {
      return `<h3>${this.uglify(text)}</h3>`
    }
  },
  async mounted() {
    const latest3 = await axios.get(`https://spreadsheets.google.com/feeds/list/18Cp7E1R8ZRWp-W4vQ1TbhbWLU8rB-jQ-DN9Tp2cur6c/od6/public/values?alt=json`)
      .then(res => res.data.feed.entry).then(p => p.slice(-3))
    this.latestPost.push(...latest3)
    this.latestPost.reverse()
  }
}
</script>
<style lang="scss" scoped>
article {
  background: #F8EFB6;
  text-align: center;
  padding: 1em;
  border: .25em solid #262427;
}

article+article {
  margin-top: 1em;
}

.latest-header {
  margin-bottom: 1em;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}

.fade-enter,
.fade-leave-to
/* .fade-leave-active below version 2.1.8 */

{
  opacity: 0;
}

// @media screen and (min-width: 320px) {
//   blockquote {
//     font-size: calc(16px + 6 * ((100vw - 320px) / 680));
//   }
// }
</style>
