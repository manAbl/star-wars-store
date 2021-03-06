import pkg from './package'
require('dotenv').config()

export default {
  mode: 'universal',
  server: {
    port: process.env.PORT
  },

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
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src: 'https://www.gstatic.com/firebasejs/6.1.0/firebase-app.js'
      },
      {
        src: 'https://kit.fontawesome.com/6951ff9630.js'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#2b6adf',
    width: '4px'
  },
  loadingIndicator: {
    name: 'pulse',
    color: '#7475E8',
    background: 'white'
  },

  /*
   ** Global CSS
   */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '~/assets/scss/main.scss',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/firebase',
    '@/plugins/fontawesome',
    '@/plugins/axios'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/axios', '@nuxtjs/dotenv'],
  axios: {
    baseURL: 'https://swapi.co/api/'
  },

  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],

    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
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
