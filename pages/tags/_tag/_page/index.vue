<template lang="pug">
div
  h2 Tag: {{$route.params.tag}}
  p Page {{$route.params.page}} of {{numberOfPages}}
  hr
  Blog(:posts="tagPosts", :currentPage="Number($route.params.page || 1)", :relativePath="'/tags/' + $route.params.tag + '/'")
</template>
<script>
import { slugFilter } from '@/lib/filters.js';

import Blog from '@/layouts/blog';
export default {
  components: {
    Blog
  },
  async asyncData({ app }) {
    const allDocs = await app.$content('/blog').getAll();
    const { tag } = app.context.route.params;

    const tagPosts = allDocs.filter(doc =>
      doc.tags
        .split(',')
        .map(tag => slugFilter(tag))
        .includes(tag)
    );

    return {
      tagPosts,
      numberOfPages: Math.ceil(allDocs.length / 5)
    };
  }
};
</script>
