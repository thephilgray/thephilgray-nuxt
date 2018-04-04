<template lang="pug">
main
  header.latest-header
    p(style={"text-align": "center"}) The latest posts from my Facebook and Twitter.
  div(v-if="!latestPost.length > 0")
    .icon-wrapper
      svg.icon.icon-spinner
        use(xlink:href='#icon-spinner')
    symbol#icon-spinner(viewbox='0 0 32 32' preserveAspectRatio="none")
      title spinner
      path(d='M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 8c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8zM25.546 25.546c-2.55 2.55-5.94 3.954-9.546 3.954s-6.996-1.404-9.546-3.954-3.954-5.94-3.954-9.546c0-3.606 1.404-6.996 3.954-9.546l2.121 2.121c0 0 0 0 0 0-4.094 4.094-4.094 10.755 0 14.849 1.983 1.983 4.62 3.075 7.425 3.075s5.441-1.092 7.425-3.075c4.094-4.094 4.094-10.755 0-14.849l2.121-2.121c2.55 2.55 3.954 5.94 3.954 9.546s-1.404 6.996-3.954 9.546z')
  article(v-else, v-for="post in latestPost")
    a(v-if="post.gsx$url.$t", :href="post.gsx$url.$t") {{post.gsx$handle.$t}}
    p(v-else) Facebook
    blockquote
      .sm-post(v-html="raw(post.gsx$value.$t)") 
    p {{post.gsx$date.$t}}
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
  padding: .25em;
  border: .25em solid #262427;
}

article+article {
  margin-top: 1em;
}

.latest-header {
  margin-bottom: 1em;
}

.icon-wrapper{
  display: flex;
  justify-content: center;
}

.icon-spinner{
  display: inline-block;
  width: 32px;
  height: 32px;
  animation: .8s linear infinite spin;
}

@keyframes spin {
  0%{
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg);
  }
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
