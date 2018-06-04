<template lang="pug">
  div
    article
      header
        h2(v-if="$route.path === post.permalink") {{post.title}}
        nuxt-link(v-else, :to="post.permalink" )
          h2 {{post.title}}
        p.date {{post.date | date}}
      p 
        em {{post.abstract}}
        span(v-if="!featured")
          nuxt-link(:to="post.permalink")
            strong   Read more >>
      nuxtent-body(v-if="featured", :body="post.body")
    PostTags(:tags="tags")
</template>

<script>
import PostTags from '@/components/postTags';
export default {
  components: {
    PostTags
  },
  props: {
    post: {
      type: Object,
      default: () => {}
    },
    featured: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    tags() {
      return this.post.tags.split(',').map(tag => tag.trim());
    }
  }
};
</script>

<style lang="scss" scoped>
.post {
  margin: 1em 0;
}
article header {
  display: flex;
  position: relative;
  // flex-wrap: wrap;
  align-items: center;

  h2 {
    flex: 3 0 80%;
  }
  .date {
    flex: 0 1 auto;
    text-align: right;
    margin: auto;
    margin-right: 0;
    border-bottom: 0.25em solid #262427;
  }
}
</style>