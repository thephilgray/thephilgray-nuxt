<template lang="pug">
Carousel(:images="images")
</template>
<script>
import Carousel from '@/components/carousel';
export default {
  components: {
    Carousel
  },
  data() {
    return {
      images: [
        'https://d3sezit9y3vl9o.cloudfront.net/thepg/screens/eueiu_screen3.gif',
        'https://d3sezit9y3vl9o.cloudfront.net/thepg/screens/encryption.gif',
        'https://d3sezit9y3vl9o.cloudfront.net/thepg/screens/eiu.gif'
      ]
    };
  }
};
</script>