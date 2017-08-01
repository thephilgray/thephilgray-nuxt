<template lang="pug">
.site
  siteHeader
  nuxt
  widgetArea
  siteFooter
</template>

<script>
import siteHeader from '@/components/siteHeader'
import siteMain from '@/components/siteMain'
import widgetArea from '@/components/widgetArea'
import siteFooter from '@/components/siteFooter'
export default {
  components: {
    siteHeader,
    siteMain,
    widgetArea,
    siteFooter
  }
}
</script>

<style>
  *, *:before, *:after {
  box-sizing: border-box;
}
  .site > * {
    margin: 1em;
  }
  
 /** layout  **/
  
  @media screen and (min-width: 480px){
     .site{
    display: grid;
grid-template-columns: 1fr 3fr;
grid-template-areas: "header header" "sidebar main" "footer footer";
grid-template-rows: 1fr 3fr 1fr;
max-width: 800px;
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
 
</style>
