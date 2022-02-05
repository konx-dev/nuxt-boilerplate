require('dotenv').config();

export default {
  
  mode: 'universal',
  server: {
    port: process.env.SERVER_PORT,
    host: '127.0.0.1'
  },
  
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'boilerplate-nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/main.scss'
  ],
  
  // Global SCSS files
  styleResources: {
    scss: [
      'assets/scss/main.scss'
    ]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/global',
    '~/plugins/is-external',
    { src: '~/plugins/axe.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-analytics',
    '@nuxtjs/fontawesome',
    '@nuxtjs/google-fonts',
    'nuxt-svg-loader'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/apollo',
    '@nuxtjs/dayjs',
    '@nuxtjs/axios',
    '@nuxtjs/redirect-module'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  
  redirect: [
    // { from: '^/myoldurl', to: '/mynewurl' }
  ],
  
  // Generate static-site routes
  generate: {
    dir: 'pub',
    routes: []
  },
  
  // Google Analytics
  googleAnalytics: {
    id: 'XX-XXXXX-X'
  },
  
  // Fontawesome icon declarations (regular, light, solid and brands supported)
  fontawesome: {
    icons: {
      brands: ['faTwitter','faInstagram','faFacebook','faYoutube'],
    }
  },
  
  // Google fonts (see docs for declaring fonts: https://google-fonts.nuxtjs.org/)
  googleFonts: {
    display: 'swap', // 'auto' | 'block' | 'swap' | 'fallback' | 'optional'
    prefetch: true,
    preconnect: true,
    preload: true,
    families: {
      Roboto: true
    }
  },
  
  apollo: {
    errorHandler: '~/plugins/apollo-error-handler.js',
    clientConfigs: {
      default: '~/apollo/configs/craft.js'
    }
  },

  router: {
    extendRoutes (routes, resolve) {
      routes.push({
        path: '*',
        component: resolve(__dirname, 'pages/-catchall.vue')
      })
    }
  }
  
};
