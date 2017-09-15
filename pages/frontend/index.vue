<template lang="pug">
main
  h1 front-end
  p show some mockups, prototypes, process, etc
  flickity(ref="flickity", :options="flickityOptions")
    .carousel-cell
      img(src="~assets/screens/sp2.png")
</template>
<style scoped lang="scss">
.carousel-cell {
  width: 100%;
  img {
    max-width: 100%;
  }
}
</style>
<script>
export default {
  data() {
    return {
      flickityOptions: {
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true,
        autoPlay: true
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
