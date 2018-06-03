<template lang="pug">
div.paginationControls
    .paginationControls__button
        nuxt-link(:to="previousPage" v-if="currentPage !== 1") ← Previous 
    .paginationControls__pages
        span.paginationControls__pageNumber(v-for="page in numberOfPages")
            nuxt-link(:to="page > 1 ? '/blog/' + page : '/blog'") {{page}}    
    .paginationControls__button
        nuxt-link(:to="nextPage" v-if="currentPage < numberOfPages") Next →
</template>

<script>
export default {
  props: {
    numberOfPages: {
      type: Number,
      default: 1
    },
    currentPage: {
      type: Number,
      default: 1
    }
  },
  computed: {
    previousPage() {
      return this.currentPage > 2
        ? `/blog/${Number(this.currentPage) - 1}`
        : '/blog';
    },
    nextPage() {
      return this.currentPage < this.numberOfPages
        ? `/blog/${Number(this.currentPage) + 1}`
        : '/blog/';
    }
  }
};
</script>

<style lang="scss" scoped>
.paginationControls {
  display: flex;
  align-items: center;
  position: relative;
  background: #f8efb6;
  text-align: center;
  padding: 0.25em;
  border: 1px solid #262427;
}
.paginationControls__pages {
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  flex: 2 1 50%;
  justify-content: center;
}
.paginationControls__pageNumber {
  margin: 0.5em;
  border: 1px solid #262427;
  background: #fff;
  a {
    padding: 0 0.5em;
  }
}
.paginationControls__button {
  background: #fff;
  margin: 0 0.5em;
  border: 1px solid #262427;
  a {
    padding: 0 0.5em;
  }
}
.nuxt-link-exact-active {
  text-decoration: none;
  color: black;
  font-weight: bold;
  &:hover {
    cursor: default;
  }
}
</style>
