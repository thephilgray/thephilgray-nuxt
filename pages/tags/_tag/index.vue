<template lang="pug">
div
  h2 Tag{{$route.params.tag ? '' : 's'}}: {{$route.params.tag}}
  hr
  section(v-if="tagProjects.length > 0")
    h3 Projects
    ProjectsGrid(:projects="tagProjects")
  hr(v-if="tagPosts.length > 0 && tagProjects.length > 0")
  section(v-if="tagPosts.length > 0")
    h3 Posts
    Blog(:posts="tagPosts", :currentPage="Number($route.params.page || 1)", :relativePath="'/tags/' + $route.params.tag + '/'")
  section(v-if="!$route.params.tag")
    PostTags(:tags="allTags")

</template>
<script>
import { slugFilter } from "@/lib/filters.js";
import Blog from "@/layouts/blog";
import ProjectsGrid from "@/components/ProjectsGrid/ProjectsGrid";
import PostTags from "@/components/postTags";
export default {
  components: {
    Blog,
    ProjectsGrid,
    PostTags
  },
  async asyncData({ app }) {
    const allPosts = await app.$content("/blog").getAll();
    const allWork = await app.$content("/projects").getAll();

    const { tag } = app.context.route.params;

    const tagDocs = docs =>
      docs.filter(doc =>
        doc.tags
          .split(",")
          .map(t => slugFilter(t))
          .includes(tag)
      );

    const allTags = [...allPosts, ...allWork]
      .reduce((acc, curr) => {
        const uniqueTags = curr.tags
          .split(", ")
          .filter(t => acc.indexOf(t) == -1);
        return [...acc, ...uniqueTags];
      }, [])
      .sort((a, b) => a.localeCompare(b))
      .join(",");

    return {
      tagPosts: tagDocs(allPosts),
      tagProjects: tagDocs(allWork),
      allTags
    };
  },
  head() {
    return {
      title: this.$route.params.tag
        ? "Phil Gray | Tag: " + this.$route.params.tag
        : "Phil Gray | All Tags"
    };
  }
};
</script>
