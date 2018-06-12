<template lang="pug">
  v-container.pt-0
    v-layout(row wrap)
      v-flex(xs12)
        .text-xs-center
          transition-group(name="badges" mode="out-in")
            v-chip(v-for="category in categories" v-model="projectsObj[category].selected" close :color="categoryColor(category)" :text-color="categoryColor(category) === 'orange' ? 'white' : 'black'" :key="category")
              v-avatar
                v-badge {{projectsObj[category].items.length}}
              | {{category}}
          v-btn(v-if="filteredCategories.length < categories.length" @click="setProjectsObj") Reset
    v-layout(row)
      v-flex(xs12)
        masonry(v-if="filteredProjects.length > 0" :cols="{default: 2, 900: 2, 600: 1, 400: 1}" :gutter="{default: '30px', 600: '15px'}")
          transition-group(name="project-list" mode="out-in")
            Project(v-for="(project, index) in filteredProjects" :key="index" :project="project" :color="categoryColor(project.category)")
        p(v-else) Nothing to display.

</template>
<script>
import { uniq } from 'lodash';
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
  },
  data() {
    return {
      projectsObj: null,
      numberOfCategories: 0
    };
  },
  computed: {
    filteredProjects() {
      return Object.values(this.projectsObj)
        .filter(category => category.selected)
        .reduce((acc, curr) => {
          acc.push(...curr.items);
          return acc;
        }, []);
    },
    categories() {
      return Object.keys(this.projectsObj);
    },
    filteredCategories() {
      return uniq(this.filteredProjects.map(project => project.category));
    }
  },
  created() {
    this.setProjectsObj();
  },
  methods: {
    setProjectsObj() {
      this.projectsObj = this.projects.reduce((acc, curr) => {
        // if there is no category in the current iteration, set category to 'Uncategorized'
        // if the accumulator does not contain a key for the current cateogry
        const key = curr.category ? curr.category : 'uncategorized';
        if (!acc[key]) acc[key] = { items: [], selected: true };
        acc[key].items.push(curr);
        return acc;
      }, {});
      this.numberOfCategories = Object.keys(this.projectsObj).length;
    },
    categoryColor(category) {
      const colors = {
        demo: 'orange',
        work: 'blue',
        personal: 'pink',
        uncategorized: 'blue'
      };
      return colors[category] || 'blue';
    }
  }
};
</script>

<style lang="scss" scoped>
.chip.orange {
  background: #df7c5b !important;
}
.chip.blue {
  background: rgba(194, 234, 233, 1) !important;
}

.chip.pink {
  background: rgba(250, 207, 215, 1) !important;
}

.badges-item {
  display: inline-block;
  margin-right: 10px;
  opacity: 1;
}

.badges-enter-active,
.badges-leave-active {
  transition: transform 200ms cubic-bezier(0.17, 0.67, 0.34, 1.54);
}
.badges-enter,
.badges-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.project-list-item {
  display: block;
  margin-right: 10px;
  opacity: 1;
}

.project-list-item-enter-active,
.project-list-item-leave-active {
  transition: transform 200ms cubic-bezier(0.17, 0.67, 0.34, 1.54);
}
.project-list-item-enter,
.project-list-item-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
