<template lang="pug">
.site
  siteHeader
  siteMain
    nuxt
  widgetArea
  siteFooter
</template>

<script>
import siteHeader from '@/components/siteHeader';
import siteMain from '@/components/siteMain';
import widgetArea from '@/components/widgetArea';
import siteFooter from '@/components/siteFooter';
export default {
  components: {
    siteHeader,
    siteMain,
    widgetArea,
    siteFooter
  }
};
</script>

<style lang="scss">
.site > * {
  margin: 0 0.25em 1em;
}

/** layout  **/

@media screen and (min-width: 900px) {
  .site > * {
    margin: 0 1em 1em;
  }

  .site {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-areas: 'header header' 'sidebar main' 'footer footer';
    grid-template-rows: 150px 3fr 50px;
    max-width: 1200px;
    min-height: 100vh;
    margin: 0 auto;
    color: #262427;
  }
  .site-header {
    grid-area: header;
  }
  .site-main {
    grid-area: main;
  }
  .wiget-area {
    grid-area: sidebar;
  }
  .site-footer {
    grid-area: footer;
  }
}

@media only screen and (min-width: 1200px) {
  .site {
    font-size: 120%;
  }
}
.page-enter-active,
.page-leave-active {
  transition: opacity 0.25s ease-out;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
