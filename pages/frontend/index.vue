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
      .carousel-cell
        .carousel-cell__content
          h3 Rapid Prototyping  
      .carousel-cell
        iframe(height='500', scrolling='no', title='vue-flashcards prototype-3', src='//codepen.io/phillipgray/embed/ZyZJeK/?height=548&theme-id=0&default-tab=result&embed-version=2', frameborder='no', allowtransparency='true', allowfullscreen='true', style='width: 100%;')
      .carousel-cell
        .carousel-cell__content
          h3 Reactive Programming       
      .carousel-cell
        iframe(height='500', scrolling='no', title='spaceInvaders()', src='//codepen.io/phillipgray/embed/ZJPXwe/?height=566&theme-id=0&default-tab=result&embed-version=2', frameborder='no', allowtransparency='true', allowfullscreen='true', style='width: 100%;')
      .carousel-cell
        iframe(height='500', scrolling='no', title='reactic-tac-no-framework', src='//codepen.io/phillipgray/embed/LjOqQa/?height=383&theme-id=0&default-tab=result&embed-version=2', frameborder='no', allowtransparency='true', allowfullscreen='true', style='width: 100%;')
  h2 Responsive designs with modular CSS and JS.
  p Above are examples of some of the sites I've built in production, followed by a couple interactive demos.
</template>
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
}

.carousel-cell__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
}

.carousel-cell-img {
  width: 100%;
  height: auto;
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
        autoPlay: true
      }
    }
  }
}
</script>
