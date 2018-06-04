<template lang="pug">
div
  .post( v-for="(post, i) in posts" :key="post.permalink")
      BlogPost(:post="post", :featured="i === 0 && !listOnly")
</template>
<script>
import BlogPost from '@/components/blogPost';
import PostTags from '@/components/postTags';
export default {
  components: {
    BlogPost,
    PostTags
  },
  props: {
    posts: {
      type: Array,
      default: () => []
    },
    listOnly: {
      type: Boolean,
      default: false
    }
  }
};
</script>


