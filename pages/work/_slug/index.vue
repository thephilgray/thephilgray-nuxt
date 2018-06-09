<template lang="pug">
  section
    article
      v-jumbotron.mb-3(v-if="post.image" gradient="to top right, rgba(63,81,181, .7), rgba(25,32,72, .7)" :src="post.image" dark)
        v-container(fill-height)
          v-layout(align-center)
            v-flex(text-xs-center)
              h2 {{post.title}}
              h3 {{post.abstract}}
      v-jumbotron.mb-3(v-else gradient="to top right, rgba(63,81,181,1), rgba(25,32,72, 1)" dark)
        v-container(fill-height)
          v-layout(align-center)
            v-flex(text-xs-center)
              h2 {{post.title}}
              h3 {{post.abstract}}
      nuxtent-body.post(:body="post.body")
      PostTags(:tags="post.tags")
</template>

<script>
import PostTags from '@/components/postTags';
export default {
  components: { PostTags },
  async asyncData({ app, route }) {
    // query the content api for the post at the current route path
    return {
      post: await app.$content('/work').get(route.path)
    };
  }
};
</script>
<style lang="scss" scoped>
</style>
