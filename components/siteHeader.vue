<template lang="pug">
header.site-header
    div.logo
      nuxt-link(to="/")
        img(src="~assets/logo.svg")
    nav.scroll
      nuxt-link(to="/" exact) Latest
      nuxt-link(to="/frontend") Front-end
      nuxt-link(to="/resume") Resume
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
  flex-wrap: wrap;
  align-items: center;
}

@media screen and (min-width: 480px) {
  .site-header {
    flex-wrap: nowrap;
  }
}

nav .nuxt-link-active {
  border-bottom: .75em solid #C2EAE9;
  transform: skewX(-10deg);
}

.logo {
  margin-right: 1em;
  width: 100%;
}

@media screen and (min-width: 480px) {
  .logo {
    width: auto;
  }
}

.scroll {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  background-attachment: local, local, scroll, scroll;
}

.scroll>* {
  flex: 0 0 auto;
  padding: 0 1em;
  font-size: 1.5em;
}

nav a {
  text-decoration: none;
  color: #262427;
}

@media print {
  .site-header {
    display: none;
  }
}
</style>

