<template lang="pug">
header.main-header
  h1.main-header__name Phil Gray
  Media(:query="{print:true}")
    p.main-header__title
      a(href="http://thephilgray.com") thephilgray.com
      br
      |
      a(href="mailto:thephilgray@gmail.com") thephilgray@gmail.com
</template>

<script>
import Media from "vue-media";
export default {
  components: {
    Media
  }
};
</script>

<style lang="scss">
span {
  font-variant-numeric: oldstyle-nums;
}
p span {
  word-wrap: auto;
}
p,
li {
  font-size: 1.2em;
  line-height: 1.6;
}

p,
li {
  margin-top: 16px;
  margin-bottom: 16px;
}

li {
  text-indent: 0.5em;
  margin-left: 2em;
}

h1 {
  letter-spacing: 0.1em;
}

h1 {
  margin: 0;
}
p {
  font-size: 1.2em;
  line-height: 1.2;
}

li {
  margin: 0;
  text-indent: 0.5em;
  margin-left: 2em;
}

a {
  text-decoration: none;
  color: #35468d;
  &:hover {
    color: #da795c;
  }
}

img {
  max-width: 100%;
}

// modular scale

h1 {
  font-size: 2.488em;
}
.main-header__title {
  text-align: right;
}

.main-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-wrap: wrap;
}

.main-header__name {
  padding-right: 1em;
}

@media print {
  .icons,
  .skills-item__icon,
  .skills-item__graphic {
    display: none;
  }
}
</style>