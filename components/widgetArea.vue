<template lang="pug">
  aside.wiget-area
    div.widget--scroller
      header.widget-header
        img.avatar(src="~assets/avatar400x400.png")
      section.widget-content
        h3   Phil Gray
        p 
          em auteur du web
        footer.widget-footer
          p @thephilgray
          .socialFollow
            a.socialFollow__icon(href="https://twitter.com/thephilgray" alt="Follow me on Twitter") 
              i.icon-twitter
            a.socialFollow__icon(href="https://github.com/philgrayphilgray" alt="Follow me on Github")
              i.icon-github
</template> 
<style lang="scss" scoped>
.wiget-area {
  background-image: radial-gradient(circle at center, rgba(250, 207, 215, .5), #fff);
  text-align: center;
}

.widget--scroller {
  position: relative;
}

.widget-content {
  background: #C2EAE9;
  width: 100%;
  padding: 1em;
  box-shadow: 0px 1px 6px #262427;
}

.avatar {
  border-radius: 50%;
  margin: .5em 0;
}

.skills {
  list-style: none;
  margin: 1em 0;
  padding: 0;
}

footer {
  // padding: 1em 0;
}

.socialFollow {
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  width: 100%;
}

[class ^='icon-'] {
  display: inline-block;
  height: 1em;
  width: 1em;
  background-size: 100%;
}

.icon-twitter {
  background: url('~assets/icons/twitter.svg');
}

.icon-github {
  background: url('~assets/icons/github.svg');
}

.socialFollow__icon {
  padding: 1em;
  border-radius: 100%;
  width: 3.5em;
  height: 3.5em;
  i {
    font-size: 1.5em;
    color: #262427;
  }
}

.socialFollow__icon+.socialFollow__icon {
  margin-left: .5em;
}
</style>
