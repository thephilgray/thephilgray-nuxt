<template lang="pug">
    .widget
      PostTags(:tags="tags" :max="20" abridged)        
</template> 
<script>
import axios from "axios";
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
    const posts = await axios.get("/content-api/blog/");
    const projects = await axios.get("/content-api/projects/");
    const allPosts = await posts.data;
    const allProjects = await projects.data;

    const all = [...allPosts, ...allProjects];
    const map = all
      .map(item => item.tags.split(",").map(tag => tag.trim()))
      .reduce((acc, curr) => acc.concat(curr), [])
      .reduce((acc, curr) => {
        if (Object.keys(acc).indexOf(curr) == -1) {
          acc[curr] = 1;
        } else {
          acc[curr]++;
        }
        return acc;
      }, {});

    this.tags = Object.entries(map)
      .sort((a, b) => b[1] - a[1])
      .map(item => item[0])
      .join(",");
  }
};
</script>