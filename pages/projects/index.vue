<template lang="pug">
.demos
  h2 Work, Demos, and Personal Projects
  ProjectsGrid(:projects="projects")
          
</template>
<script>
import ProjectsGrid from '@/components/ProjectsGrid/ProjectsGrid';
export default {
  components: {
    ProjectsGrid
  },
  async asyncData({ app }) {
    return {
      projects: await app.$content('/projects').getAll()
    };
  },

  head() {
    return {
      title: 'Work, Demos, and Personal Projects'
    };
  }
};
</script>
<style lang="scss" >
.demos img {
  max-width: 100%;
  height: auto;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(10px);
  opacity: 0;
}
</style>
