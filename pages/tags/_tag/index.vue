<template lang="pug">
div
  h2 Tag: {{$route.params.tag}}
  hr
  section(v-if="tagProjects.length > 0")
    h3 Projects
    ProjectsGrid(:projects="tagProjects")
  hr(v-if="tagPosts.length > 0 && tagProjects.length > 0")
  section(v-if="tagPosts.length > 0")
    h3 Posts
    Blog(:posts="tagPosts", :currentPage="Number($route.params.page || 1)", :relativePath="'/tags/' + $route.params.tag + '/'")
</template>
<script>
import { slugFilter } from '@/lib/filters.js';
import Blog from '@/layouts/blog';
import ProjectsGrid from '@/components/ProjectsGrid/ProjectsGrid';
export default {
  components: {
    Blog,
    ProjectsGrid
  },
  async asyncData({ app }) {
    const allPosts = await app.$content('/blog').getAll();
    const allWork = await app.$content('/projects').getAll();

    const { tag } = app.context.route.params;

    const tagDocs = docs =>
      docs.filter(doc =>
        doc.tags
          .split(',')
          .map(tag => slugFilter(tag))
          .includes(tag)
      );

    return {
      tagPosts: tagDocs(allPosts),
      tagProjects: tagDocs(allWork)
    };
  },
  head() {
    return {
      title: 'Tag: ' + this.$route.params.tag
    };
  }
};
</script>
