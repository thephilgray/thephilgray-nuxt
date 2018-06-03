<template lang="pug">
div
  article.post(v-for="(post, i) in posts" :key="post.permalink")
      nuxt-link(:to="post.permalink")
        h3 {{post.title}}
      p.date {{post.date | date}}
      p {{post.abstract}}
      PostTags(:tags="tags(post)")
</template>
<script>
import PostTags from '@/components/postTags';
export default {
  components: {
    PostTags
  },
  props: {
    posts: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    tags(post) {
      return post.tags.split(',').map(tag => tag.trim());
    }
  }
};
</script>

<style lang="scss" scoped>
.post {
  margin: 1em 0;
}
</style>
