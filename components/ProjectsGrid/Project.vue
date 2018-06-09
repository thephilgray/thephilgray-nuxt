<template lang="pug">
v-card.projectsGrid__item(tile)
    v-card-media(height="400px" :src="project.image")
        nuxt-link.projectsGrid__cardImageOverlay(:to="project.permalink" tag="v-container" fill-height fluid)
            v-layout(fill-height row wrap justify-center align-center)
                h4 {{project.title}}
                p {{project.abstract}}
                PostTags(:tags="project.tags" abridged :max="6")
</template>
<script>
import PostTags from '@/components/postTags';
export default {
  components: {
    PostTags
  },
  props: {
    project: {
      type: Object,
      default: () => {}
    }
  }
};
</script>
<style lang="scss" scoped>
.projectsGrid__item {
  margin: 2em 0;
  transition: transform 100ms cubic-bezier(0.17, 0.67, 0.34, 1.54);
  &:hover {
    transform: skewX(0.7deg) scale(1.1);
    cursor: pointer;
    color: #da795c;

    .projectsGrid__cardImageOverlay {
      background-image: linear-gradient(
        180deg,
        white 0%,
        rgba(194, 234, 233, 1) 100%
      );
    }
  }
}
.projectsGrid__cardImageOverlay {
  position: absolute;
  padding: 1em;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;

  background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.9) 0%,
    rgba(194, 234, 233, 1) 100%
  );

  background-attachment: scroll;
  background-position: left top;
  background-clip: border-box;
  background-origin: padding-box;
  background-size: auto auto;
  background-repeat: no-repeat;

  flex-wrap: wrap;

  background-blend-mode: normal;
  height: 100%;
}

h4,
p {
  width: 100%;
}
</style>
