<template lang="pug">
main
  h1 Q&A
  article
    h2 Describe your background as a developer in a few sentences.
    p I’ve been developing web content with HTML, CSS, and JS on a daily basis for the past four years. In my professional career, I've built responsive microsites, themes, emails, and custom interactive features. My CSS is strong and I have a firm grasp on progressive enhancement and writing modular SASS following SMACSS/BEM guidelines. I'm also skilled at image editing and optimization, designing vector graphics and wireframes, and building prototypes. Outside of my day job, I focus on JavaScript, building SPAs and PWAs with the latest and most popular technologies and workflows.
  article
    h2 What is you preferred stack?
    p It depends a lot on hand-off requirements, but at a minimum, I use SASS + autoprefixer and vanilla JS or jQuery. For workflow setup, I prefer to use NodeJS, Git, and Gulp or Webpack. I prefer to write ES6 + Babel, and when it makes sense, I use a framework. My favorite is Vue, but I also like React and Angular. For a backend, I prefer Firebase, Mongo, or WP Rest API.
</template>
<style lang="scss" scoped>
article {
  max-width: 40em;
}

h2 {
  color: darken(#C2EAE9, 40%);
}

h2+p::first-letter {
  font-size: 2em;
  font-weight: bold;
}
</style>
