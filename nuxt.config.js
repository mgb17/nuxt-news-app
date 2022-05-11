const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel: 'stylesheet', href: 'https://bootswatch.com/4/sketchy/bootstrap.min.css'}
    ],
    script : [
      // { src: 'https://cdn..'}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { 
      color: 'blue',
      height: '3px',
      failedColor: 'red'
  },

  /*
  ** Global CSS
  */
  css: [
    // "~/assets/style/bootstrap.min.css"
    "~assets/style/transition.css",
    "~assets/style/bootstrap.min.css"
  ],

  // dev: false,
  
  // env: {
  //   baseURL: "https://nuxt-blog-app-3ebfb-default-rtdb.europe-west1.firebasedatabase.app/posts.json"
  // },

  // router : {
  //   extendRoutes(routes, resolve) {
  //     routes.push({
  //       path: '/custom-route',
  //       component: resolve(__dirname, "pages/test.vue")
  //     })
  //   }
  // },

  transition: {
      name: "layout",
      mode: "out-in"
  },

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
      "~plugins/Components.js"
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    "@nuxtjs/axios"
  ],

  // axios: {

  // },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
