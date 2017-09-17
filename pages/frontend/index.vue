<template lang="pug">
main
  h1 Front-end
  no-ssr  
    flickity(ref="flickity", :options="flickityOptions")
      .carousel-cell
        img.carousel-cell-img(src="~assets/screens/eueiu_screen3.gif")
      .carousel-cell
        img.carousel-cell-img(src="~assets/screens/encryption.gif")
      .carousel-cell
        img.carousel-cell-img(src="~assets/screens/ckscreen.gif")
      .carousel-cell
        img.carousel-cell-img(src="~assets/screens/tp.gif")
      .carousel-cell
        img.carousel-cell-img(src="~assets/screens/eiu.gif")
  h2 Intricate responsive designs with modular CSS and JS.
  p Above are examples of some of the sites I've built in production.
</template>
<style scoped lang="scss">
.carousel {
  width: 100%;
  margin: 0 auto;
}

.carousel-cell {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel-cell-img {
  width: 100%;
  height: auto;
  padding: 1em;
  display: block;
}

.fadefrontend-enter-active,
.fadefrontend-leave-active {
  transition: opacity .5s;
}

.fadefrontend-enter,
.fadefrontend-leave-to {
  opacity: 0;
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
        autoPlay: true,
        imagesLoaded: true
      }
    }
  }
}
</script>
