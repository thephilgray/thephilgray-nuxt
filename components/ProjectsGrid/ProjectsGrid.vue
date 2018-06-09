<template lang="pug">
  v-container.pt-0
    v-layout(row)
      v-flex(xs12)
        masonry(:cols="{default: 2, 900: 2, 600: 1, 400: 1}" :gutter="{default: '30px', 600: '15px'}")
          Project(v-for="(project, index) in projects" :key="index" :project="project")

</template>
<script>
import Project from '@/components/ProjectsGrid/Project';
export default {
  components: {
    Project
  },
  props: {
    projects: {
      type: Array,
      default: () => []
    }
  }
};
</script>

