module.exports = {
  content: {
    page: '/_project',
    permalink: '/projects/:slug',
    isPost: false,
    generate: ['get', 'getAll']
  },
  api: {
    baseURL:
      process.env.NODE_ENV === 'production'
        ? 'http://www.thephilgray.com'
        : 'http://localhost:3000'
  }
};
