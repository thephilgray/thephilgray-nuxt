<template lang="pug">
div 
  .flickityContainer
    keep-alive
      no-ssr
        flickity(ref="flickity")
          .carousel-cell(v-for="image in images")
            img.carousel-cell-img(:src="image")
</template>


<script>
export default {
  props: {
    images: {
      type: Array,
      default: () => [
        'https://d3sezit9y3vl9o.cloudfront.net/thepg/screens/eueiu_screen3.gif'
      ]
    }
  }
};
</script>

<style scoped lang="scss">
iframe {
  max-width: 75%;
  margin: auto;
}

.flickityContainer {
  padding-bottom: 2em;
}

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
  height: 200px;
}

@media screen and (min-width: 1200px) {
  .carousel-cell {
    height: 500px;
  }
}

.carousel-cell__content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-cell-img {
  width: 100%;
  height: auto;
  display: block;
}
</style>
