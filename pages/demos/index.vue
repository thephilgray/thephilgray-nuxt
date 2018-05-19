<template lang="pug">
.demos
    h2 Demos and Personal Projects
    div(v-for="project in filteredProjects")
        nuxtent-body(:body="project.body")
        hr
</template>
<script>
export default {
  async asyncData({ app }) {
    return {
      projects: await app.$content('/').getAll()
    };
  },

  head() {
    return {
      title: 'Demos and Personal Projects'
    };
  },
  computed: {
    filteredProjects() {
      return this.projects.filter(project => project.category === 'demo');
    }
  }
};
</script>
<style lang="scss" >
.demos img {
  max-width: 100%;
  height: auto;
}
</style>
