<template lang="pug">
  div
    p Page {{$route.params.page}} of {{numberOfPages}}
    hr
    article(v-for="post in posts")
      nuxt-link(:to="post.permalink")
        h3 {{post.title}}
      p.date {{post.date | date}}
      p {{post.abstract}}
    PaginationControls(:numberOfPages="numberOfPages", :currentPage="Number($route.params.page)")
</template>

<script>
import PaginationControls from '@/components/paginationControls';
export default {
  components: {
    PaginationControls
  },
  async asyncData({ app }) {
    // eslint-disable-next-line
    console.log('fetching async data');
    const { page } = app.context.route.params;

    const shiftIndex = currentIndex => (currentIndex += page * 2.5);
    const allPages = await app
      .$content('/blog')
      .query({ exclude: ['attributes', 'body'] })
      .getAll();
    return {
      posts: await app.$content('/blog').getOnly(shiftIndex(0), shiftIndex(4)),
      numberOfPages: Math.ceil(allPages.length / 5)
    };
  }
};
</script>
