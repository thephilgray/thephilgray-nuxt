<template lang="pug">
    .widget
      PostTags(:tags="tags" :max="20" abridged)        
</template> 
<script>
import PostTags from "@/components/postTags";
export default {
  components: {
    PostTags
  },
  data() {
    return {
      tags: ""
    };
  },
  beforeMount: async function() {
    const posts = await fetch("http://localhost:3000/content-api/blog/");
    const projects = await fetch("http://localhost:3000/content-api/projects/");
    const allPosts = await posts.json();
    const allProjects = await projects.json();

    const all = [...allPosts, ...allProjects];
    const map = all
      .map(item => item.tags.split(",").map(tag => tag.trim()))
      .reduce((acc, curr) => acc.concat(curr), [])
      .reduce((acc, curr) => {
        if (Object.values(acc).indexOf(curr) == -1) {
          acc[curr] = 1;
        }
        acc[curr]++;
        return acc;
      }, {});

    this.tags = Object.entries(map)
      .filter((item, i, arr) => item[1] / arr.length > 0.025)
      .map(item => item[0])
      .join(",");
  }
};
</script>