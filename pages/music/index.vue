<template lang="pug">
main
  h1 Music
  p Music is a magical medicine for the soul. For me, it is both the past and the future. The past because there was once a time when making music was my only ambition. The future because I believe that time will come again; and music will also someday play a more prominent role in the immersive experience of browsing the web.
  p Writing and performing a song is a lot like building a website. It is easy on the surface. But in actual practice, it is an incredibly iterative process that requires tremendous patience and humility.
  p Below are samples of my music: first a selection of my older singer-songwriter songs, and then some more recent mostly instrumental sketches.
  div
    iframe(width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/1786282&amp;auto_play=false&amp;hide_related=false&amp;show_comments=false&amp;show_user=true&amp;show_reposts=false&amp;visual=true")
    iframe(width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/14221609&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true")
</template>
<style lang="scss" scoped>
iframe+iframe {
  margin-top: 1em;
}
</style>
