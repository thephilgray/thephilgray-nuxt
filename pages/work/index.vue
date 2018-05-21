<template lang="pug">
.projects
    h2 Case Studies
    carousel
    div(v-for="project in filteredProjects" :key="project.title")
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
