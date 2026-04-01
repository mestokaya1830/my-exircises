const session = require('express-session')
const MemoryStore = require('memorystore')(session)
module.exports = {
  head: {
    title: 'bet',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },

  css: [
    '~/assets/css/fontawesome-all.min.css',
    '~/assets/css/main.css',
    '~/assets/css/mobile.css',
    '~/assets/css/print.css'
  ],

  plugins: [
    '~/plugins/socket.io',
    '~/plugins/vue2-filters',
    '~/plugins/vueprint',
    '~/plugins/vuemoment',
    '~/plugins/global.js'
  ],

  components: true,

  buildModules: [
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],

  axios: {
    baseURL: '/',
  },

  pwa: {
    manifest: {
      name:"gasvet",
      short_name:'gasvet',
      lang: 'en',
      useWebmanifestExtension: false
    },
    icon: {
      filename: 'icon.png',
    }
  },

  build: {
    loaders: {
      vue: {
        transformAssetUrls: {
          audio: 'src'
        }
      }
    },
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      })
    }
  },
  serverMiddleware: [
    session({
      secret: 'super-secret-key',
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 24 * 60 * 60 * 1000 },
      httpOnly: true,
      secure: true,
      store: new MemoryStore({
        checkPeriod: 86400000
      })
    }),
    '~/api'
  ]
}
