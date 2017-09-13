module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'thephilgray',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css'
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          'http://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic'
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FEBAC5' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend(config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
