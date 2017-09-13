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

<style lang="scss">
*,
*:before,
*:after {
  box-sizing: border-box;
}

body {
  font: 100%/1.6 "Lora", serif;
  font-weight: 400; // margin: 0 auto;
  padding: 2em;
  text-align: left;
  font-kerning: normal; // max-width: 45em;
}

p+p {
  text-indent: 1em;
}

// modular scale
h1 {
  font-size: 2.488em;
}

h2 {
  font-size: 2.074em;
}

h3 {
  font-size: 1.728em;
  margin: 0;
  line-height: 1.4;
}

h4 {
  font-size: 1.44em;
  margin: 0;
  line-height: 1.4;
}

h5 {
  font-size: 1.2em;
}

h6 {
  font-size: 1em;
}

h1 {
  margin-bottom: 0;
  letter-spacing: 0.1em;
}

span {
  font-variant-numeric: oldstyle-nums;
}

ul {
  margin: 0;
  padding: 0;
}

li li {
  margin-right: 1em;
}

.btn {
  padding: 0.5em;
  text-align: center;
  cursor: pointer;
  border: 1px solid #262427;
  transition: all .5s;
  &:hover {
    background: #262427;
    color: #fff;
  }
}

.btn--full-width {
  width: 100%;
}

.site>* {
  margin: 0 1em 1em;
}

















/** layout  **/

@media screen and (min-width: 768px) {
  .site {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-areas: "header header" "sidebar main" "footer footer";
    grid-template-rows: 150px 3fr 50px;
    max-width: 1200px;
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
