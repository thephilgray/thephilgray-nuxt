<template lang="pug">
.demos
    h2 Demos and Personal Projects
    div(v-for="project in filteredProjects")
        h3 {{project.lead}}
        p {{project.abstract}}
        transition(name="slide-fade" mode="in-out")
          nuxtent-body(v-if="active === project.title" :body="project.body")
        p
          strong Tags: 
          | {{project.tags}}        
        button.btn.btn--full-width(v-if="active !== project.title" @click="active = project.title") More
        hr
</template>
<script>
export default {
  async asyncData({ app }) {
    return {
      projects: await app.$content('/').getAll()
    };
  },
  data() {
    return {
      active: ''
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
