<template lang="pug">
.projects
    h2 Case Studies
    h3 {{project.lead}}
    p {{project.abstract}}
    nuxtent-body(v-if="active === project.title" :body="project.body")
    p
      strong Tags: 
      | {{project.tags}}        
    button.btn.btn--full-width(v-if="active !== project.title" @click="active = project.title") More

        hr
</template>
<script>
export default {
  async asyncData({ app, route }) {
    const project = await app.$content('/work').get(route.path);
    return {
      project
    };
  },

  data() {
    return {
      active: ''
    };
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
