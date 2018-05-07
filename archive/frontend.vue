<template lang="pug">
main
  h1 Front-end
  no-ssr  
    flickity(ref="flickity", :options="flickityOptions")
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

  h2 Responsive designs with modular CSS and JS.
  p Above are examples of some of the sites I've built in production.
</template>
<script>
export default {
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
  margin: 0 auto;
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
<script>
export default {
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
