<template lang="pug">
div.paginationControls(v-if="numberOfPages > 1")
    .paginationControls__button(v-if="currentPage !== 1")
        nuxt-link(:to="previousPage") ← Previous 
    .paginationControls__pages
        span.paginationControls__pageNumber(v-for="page in numberOfPages")
            nuxt-link(:to="page > 1 ? relativePath + page : relativePath") {{page}}    
    .paginationControls__button(v-if="currentPage < numberOfPages")
        nuxt-link(:to="nextPage" ) Next →
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
    },
    relativePath: {
      type: String,
      default: '/blog/'
    }
  },
  computed: {
    previousPage() {
      return this.currentPage > 2
        ? `${this.relativePath}${Number(this.currentPage) - 1}`
        : this.relativePath;
    },
    nextPage() {
      return this.currentPage < this.numberOfPages
        ? `${this.relativePath}${Number(this.currentPage) + 1}`
        : this.relativePath;
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
