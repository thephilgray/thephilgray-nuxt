<template lang="pug">
    .post__tags
      span.post__tag(v-for="tag in tags")
        nuxt-link(:to="'/blog/tags/' + tag | slugify") {{tag}} 
</template>
<script>
export default {
  props: {
    tags: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped>
.post__tags {
  margin: 1em 0;
}
.post__tag {
  margin: 0 0.5em;
  border: 1px solid #262427;
  background: #fff;
  a {
    padding: 0 0.5em;
  }
}
</style>