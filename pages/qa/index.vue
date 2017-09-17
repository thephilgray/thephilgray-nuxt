<template lang="pug">
main
  h1 Q&A
  article
    h2 Describe your guiding design principles.
    p My work is guided by empathy for the user and a yearning for more harmonious and direct aesthetic expression.
    p I’ve wasted too much of my finite time on pointless, repetitive data entry tasks, tending to legacy systems, and waiting on broken-down bureaucracies. I understand this is quite common for most people and I also understand the complicated circumstances surrounding an organization’s decision to develop and continue using such unwieldy systems, but I don’t wish them on anyone. If I can accomplish one small thing, whether it makes the world a better place or not, it would be giving people a few seconds of their lives back.
    p I hope those extra few seconds are meaningful. I’m utilitarian if I need to be, but ultimately I’m a minimalist. I believe the mind is as important as the body, and that the psychological aspect of user experience should not be understated. The overall aesthetic should be modest, but every page should have something important that’s artistically crafted to elicit a strong emotional response. As with good music and art, users should be able to clearly recognize the emotional subtext, however simple or complex it is. The best tool for accomplishing this is storytelling.
    p I come from a humanities background. I was influenced by the 
      em auteur
      |  in cinema, or the concept of being a writer first and then a technician. Crafting a great user experience is the same as crafting a great story. A great story does not have to be long or complex. It can be told with just a few words or even a still image. It simply directs the user’s attention through a distilled human experience.
    p Finally, I’m guided by my own favorite experiences:
    ol
      li The experience of performing unconsciously on a stage in front of an audience.
      li The experience of suddenly feeling overwhelmingly connected with music or people or other living beings and the environment. The feeling of being in the right place at the right time, in the right rhythm, with the right people. The feeling of belonging and being a part of something much bigger and shared.
      li The experience of crafting something (a script, a song, a recording, a performance, a story, a concept, an application, or a certain tone or ambience) that gives others the opportunity to experience the above.
  article
    h2 Describe your programming background in a few sentences.
    p I’ve been self-studying web development with HTML, CSS, and JS for the past four years. I focused primarily on front-end design, and secondarily on learning the fundamentals of SPA development with popular JS frameworks. In recent months, however, my primary focus has shifted to really trying to learn and understand end-to-end JS and functional programming.
  article
    h2 What is your typical workflow for creating a site or app?
    p I start by gathering information. 
      em What are the required pages, sections, and features? Are there any existing versions of the site or supplemental documents? Is there any text or media that I can use as relevant placeholder content? 
      |  Next, I draft minimum requirements. If the product needs to be launched today, what is the bare minimum I need to do to provide an enhancement over what already exists. 
    p I begin with pen and paper thumbnail sketches and then move to a wireframing tool, though I don’t mockup everything just yet. I’ll often simultaneously start prototyping some actual features, components, and layouts, creating a series of reduced test cases, using whatever tool or environment makes the most sense. If I’m not sure how the UI should look but need to get a general sense of how the site or app logic should flow, I’ll use a CSS framework like Bootstrap or Foundation. If I need to work on layouts, I’ll start with a grid system or just vanilla flexbox or CSS grid. If I need to process a lot of graphics or icons and need livereload, I might start with a build system like Gulp. If I already know I’m going to use a JS framework, I’ll find a good starter package and just start building out components there. Generally, at this point, I want to keep everything portable and spend some time thinking about names for each item.
    p I’ll pick some of these materials for client presentation and review. For clients who are less sure or articulate about what they want, the best thing is to usually put together an opinionated, clickable static prototype, filling in a lot of the blanks and questions they can’t yet answer with real content. This can either be a quick throwaway website or it can be an actual early build.
    p Once everyone’s basically on the same page with regards to the design and features, I begin the scaffolding and integration work. I refer to BEM and SMACSS best practices to keep CSS modular and maintainable. With JS, I perform a lot of reduced test cases and progressive enhancements, hacking a few lines here and there towards a solution but not allowing scripts to bloat without first refactoring. I’m not yet a pure functional programmer, but I try write concise, reusable functions with minimal side-effects.
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
