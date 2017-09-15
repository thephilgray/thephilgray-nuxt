<template lang="pug">
main
  article
    h2 {{word}}
  article
    h2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero eligendi alias natus qui deleniti commodi officia dolores, possimus vel, magni aliquid ratione perspiciatis optio! Amet incidunt delectus commodi rerum consequuntur?
  
</template>
<script>
// import axios from 'axios'
export default {
  data() {
    return {
      word: 'word'
    }
  }
}
</script>

<style lang="scss" scoped>
article {
  background: #F8EFB6;
  text-align: center;
  padding: 1em;
}

article+article {
  margin-top: 1em;
}
</style>
