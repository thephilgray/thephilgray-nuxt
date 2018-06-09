<template lang="pug">
  .post
    article
      header
        h2.post__title(v-if="$route.path === post.permalink") {{post.title}}
        nuxt-link.post__title(v-else, :to="post.permalink" )
          h2 {{post.title}}
        p.date {{post.date | date}}
      p 
        em {{post.abstract}}
        span(v-if="!featured")
          nuxt-link(:to="post.permalink")
            strong   Read more >>
      nuxtent-body.post__body(v-if="featured", :body="post.body")
    PostTags(:tags="post.tags")
    hr
    //- BlogComments(v-if="featured && $route.path === post.permalink && ")
</template>

<script>
// import BlogComments from '@/components/blogComments';
import PostTags from '@/components/postTags';
export default {
  components: {
    // BlogComments,
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
  flex-wrap: wrap;
  align-items: center;

  .post__title {
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