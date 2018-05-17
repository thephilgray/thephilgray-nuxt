<template lang="pug">
main
  no-ssr
    .flickityContainer
      flickity(ref="flickity")
        .carousel-cell
          img.carousel-cell-img(src="https://d3sezit9y3vl9o.cloudfront.net/thepg/screens/eueiu_screen3.gif")
        .carousel-cell
          img.carousel-cell-img(src="https://d3sezit9y3vl9o.cloudfront.net/thepg/screens/encryption.gif")
        .carousel-cell
          img.carousel-cell-img(src="https://d3sezit9y3vl9o.cloudfront.net/thepg/screens/ckscreen.gif")
        .carousel-cell
          img.carousel-cell-img(src="https://d3sezit9y3vl9o.cloudfront.net/thepg/screens/tp.gif")
        .carousel-cell
          img.carousel-cell-img(src="https://d3sezit9y3vl9o.cloudfront.net/thepg/screens/eiu.gif")
    projects
</template>


<script>
import projects from '../../components/projects';
export default {
  components: {
    projects
  },
  data() {
    return {
      images: [
        'https://d3sezit9y3vl9o.cloudfront.net/thepg/screens/eueiu_screen3.gif',
        'https://d3sezit9y3vl9o.cloudfront.net/thepg/screens/encryption.gif',
        'https://d3sezit9y3vl9o.cloudfront.net/thepg/screens/ckscreen.gif',
        'https://d3sezit9y3vl9o.cloudfront.net/thepg/screens/tp.gif',
        'https://d3sezit9y3vl9o.cloudfront.net/thepg/screens/eiu.gif'
      ]
    };
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
