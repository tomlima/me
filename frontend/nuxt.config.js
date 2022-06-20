export default {
  telemetry: false,
  head: {
    title: 'Tomlima',
    htmlAttrs: {
      lang: 'pt-BR'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Mais um blog sobre engenharia de software' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }]
  },
  styleResources: {
    scss: ['~/assets/scss/variables.scss']
  },
  publicRuntimeConfig: {
    ImagePathUlr: 'https://admin.tomlima.me', // Only for backend purposes
    strapiAPI: 'https://admin.tomlima.me/api/', // Only for backend purposes
  },
  axios: {
    baseURL: 'https://admin.tomlima.me/api/'
  },

  css: [
    '~/assets/scss/global.scss',
    '~/assets/css/normalize.css',
    'boxicons/css/boxicons.min.css'
  ],

  plugins: [
    { src: '~/plugins/image' }, // Only for backend purposes
  ],

  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],

  fontawesome: {
    icons: {
      solid: true,
      brands: true
    }
  },

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/markdownit',
    [
      'nuxt-lazy-load',
      {
        defaultImage: 'loading.gif'
      }
    ]
  ],
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    injected: true
  },
  buildModules: ['@nuxtjs/google-fonts'],
  googleFonts: {
    preload: true,
    families: {
      Montserrat: [100, 300, 400, 700],
      Poppins: [100, 300, 400, 700],
      Rubik: [400],
      Inconsolata: [100, 300, 400, 500, 700],
      'Indie+Flower': [400]
    }
  }
}
