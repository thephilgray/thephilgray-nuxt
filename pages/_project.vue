<template lang="pug">
    div
      h2 {{project.title}}
      nuxtent-body(:body="project.body")
</template>

<script>
export default {
  async asyncData({ app, route }) {
    return {
      project: await app.$content('/').get(route.path)
    };
  }
};
</script>
