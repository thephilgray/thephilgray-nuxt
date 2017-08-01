<template lang="pug">
header.site-header
    div.logo
      img(src="~assets/logo.png")
    nav.scroll
      nuxt-link(to="/latest") Latest
      nuxt-link(to="/frontend") Front-end
      nuxt-link(to="/resume") Resume
      nuxt-link(to="/music") Music
      nuxt-link(to="/qa") Q&A
</template>
<script>
export default {
}
</script>
<style scoped>
   .site-header {
    text-align: center;
     display: flex;
     align-items: center;
     margin-bottom: 3em;
}
.scroll{
    display: flex;
    flex-wrap: nowrap;
    overflow-y: auto;
      -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar; 
  }
  .scroll > *{
     flex: 0 0 auto;
    padding: 1em;
    font-size: 1.5em;
  }
  nav a {
    text-decoration: none;
    color: #262427;  
  }
</style>

