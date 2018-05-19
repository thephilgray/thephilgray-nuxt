<template lang="pug">
.projects
    h2 Case Studies
    carousel
    div(v-for="project in filteredProjects")
        nuxtent-body(:body="project.body")
        hr
</template>
<script>
import carousel from '~/components/carousel';
export default {
  async asyncData({ app }) {
    return {
      projects: await app.$content('/').getAll()
    };
  },
  components: {
    carousel
  },
  head() {
    return {
      title: 'Work: Case Studies'
    };
  },
  computed: {
    filteredProjects() {
      return this.projects.filter(project => project.category === 'work');
    }
  }
};
</script>
<style lang="scss" >
.projects img {
  max-width: 100%;
  height: auto;
}
</style>
