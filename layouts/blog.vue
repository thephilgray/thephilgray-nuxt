<template lang="pug">
  div
    BlogPostListing(:posts="currentPagePosts")
    PaginationControls(:numberOfPages="chunkedPosts.length", :currentPage="currentPage", :relativePath="relativePath")
</template>

<script>
import { chunk, sortBy, reverse } from 'lodash';

import BlogPostListing from '@/components/blogPostListing';
import PaginationControls from '@/components/paginationControls';
export default {
  components: {
    BlogPostListing,
    PaginationControls
  },
  props: {
    posts: {
      type: Array,
      default: () => []
    },

    currentPage: {
      type: Number,
      default: 1
    },
    relativePath: {
      type: String,
      default: '/blog/'
    }
  },
  computed: {
    chunkedPosts() {
      return chunk(reverse(sortBy(this.posts, post => post.date)), 5);
    },
    currentPagePosts() {
      return this.chunkedPosts[this.currentPage - 1];
    }
  }
};
</script>