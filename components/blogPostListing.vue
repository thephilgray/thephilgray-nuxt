<template lang="pug">
.posts
  template( v-for="(post, i) in posts")
      BlogPost(:post="post" :key="post.permalink")
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


