<template lang="pug">
div
    div(v-for="project in projects")
        nuxtent-body(:body="project.body")
        hr
</template>
<script>
export default {
  async asyncData({ app }) {
    return {
      projects: await app.$content('/').getAll()
    };
  }
};
</script>
