<template lang="pug">
  div(v-if="tags")
    .post__tags(v-if="abridged")
      span.post__tag(v-for="tag in tagsArrayAbridged")
        nuxt-link(:to="'/tags/' + tag | slugify") {{tag}}
      span.post__tag(v-if="maxReached")
        span
          nuxt-link(:to="'/tags/'") more...
    .post__tags(v-else)    
      span.post__tag(v-for="tag in tagsArray")
        nuxt-link(:to="'/tags/' + tag | slugify") {{tag}}
</template>
<script>
export default {
  props: {
    tags: {
      type: String,
      default: ""
    },
    max: {
      type: Number,
      default: 6
    },
    abridged: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    tagsArray() {
      return this.tags.split(",").map(tag => tag.trim());
    },

    maxReached() {
      return this.tagsArray.length > this.max;
    },
    tagsArrayAbridged() {
      return this.maxReached
        ? this.tagsArray.slice(0, this.max - 1)
        : this.tagsArray;
    }
  }
};
</script>

<style lang="scss" scoped>
.post__tags {
  margin: 1em 0;
  display: flex;
  flex-wrap: wrap;
}
.post__tag {
  margin: 0.5em;
  border: 1px solid #262427;
  background: #fff;

  span {
    padding: 0 0.5em;
  }
  a {
    padding: 0 0.5em;
  }
}
</style>