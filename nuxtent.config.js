module.exports = {
  content: [
    [
      'work',
      {
        page: '/work/_slug',
        permalink: '/work/:slug',
        isPost: false,
        generate: ['get', 'getAll']
      }
    ],
    [
      'demos',
      {
        page: '/demos/_slug',
        permalink: '/demos/:slug',
        isPost: false,
        generate: ['get', 'getAll']
      }
    ],
    [
      'blog',
      {
        page: '/blog/_slug',
        permalink: '/blog/:year/:month/:day/:slug',
        isPost: true,
        generate: ['get', 'getAll']
      }
    ]
  ],
  api: {
    baseURL:
      process.env.NODE_ENV === 'production'
        ? 'http://www.thephilgray.com'
        : 'http://localhost:3000'
  }
};
