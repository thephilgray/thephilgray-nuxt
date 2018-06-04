<template lang="pug">
    .blogPost__comments
        vue-disqus(shortname="thephilgray", :identifier="$route.path", :url="'http://thephilgray.com/' + $route.path")
</template>
<script>
</script>
