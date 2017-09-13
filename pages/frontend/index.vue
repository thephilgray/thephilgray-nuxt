<template lang="pug">
main
  h1 front-end
  p show some mockups, prototypes, process, etc
  flickity(ref="flickity", :options="flickityOptions")
    .carousel-cell test 1
    .carousel-cell test 2
</template>
<style>
  .carousel-cell{
    width: 100%;
    background: #000;
    color: #fff;
  }
</style>
<script>
export default {
  data() {
    return {
      flickityOptions: {
        initialIndex: 3,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true
        // any options from Flickity can be used
      }
    }
  },
  methods: {
    next() {
      this.$refs.flickity.next()
    },
    previous() {
      this.$refs.flickity.previous()
    }
  }
}
</script>
