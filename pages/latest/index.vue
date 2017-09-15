<template lang="pug">
main
  article(v-if="latestPost")
    h2 {{latestPost}}
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      posts: [],
      latestPost: ''
    }
  },
  async mounted() {
    this.latestPost = await axios.get(`https://spreadsheets.google.com/feeds/list/18Cp7E1R8ZRWp-W4vQ1TbhbWLU8rB-jQ-DN9Tp2cur6c/od6/public/values?alt=json`).then(res => res.data.feed.entry).then(p => p.slice(-1).pop().gsx$value.$t)
  }
}
</script>
<style lang="scss" scoped>
article {
  background: #F8EFB6;
  text-align: center;
  padding: 1em;
}

article+article {
  margin-top: 1em;
}
</style>
