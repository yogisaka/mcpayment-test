export default {
  env: {
    baseUrl: 'http://localhost:3000',
    apiUrl: 'https://recipe-puppy.p.rapidapi.com',
    apiKey: '72a318d19fmshd236488140a30b0p19e750jsn7bb2902fdafd',
    apiHost: 'recipe-puppy.p.rapidapi.com',
  },
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Recipe',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'List of Recipes APP',
      },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      {
        name: 'msapplication-TileImage',
        content: '/images/logo/ms-icon-144x144.png',
      },
      { property: 'og:title', content: 'Recipe' },
      { property: 'og:type', content: 'Website' },
      { property: 'og:image', content: '/images/logo/ms-icon-144x144.png' },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:title',
        content: 'Recipe',
      },
      {
        name: 'twitter:image',
        content: '/images/logo/ms-icon-144x144.png',
      },
      { name: 'theme-color', content: '#e0004f' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/images/logo/favicon.ico' },
      { rel: 'shortcut icon', href: '/images/logo/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        size: '57x57',
        href: '/images/logo/apple-icon-57x57.png',
      },
      {
        rel: 'apple-touch-icon',
        size: '60x60',
        href: '/images/logo/apple-icon-60x60.png',
      },
      {
        rel: 'apple-touch-icon',
        size: '72x72',
        href: '/images/logo/apple-icon-72x72.png',
      },
      {
        rel: 'apple-touch-icon',
        size: '76x76',
        href: '/images/logo/apple-icon-76x76.png',
      },
      {
        rel: 'apple-touch-icon',
        size: '114x114',
        href: '/images/logo/apple-icon-114x114.png',
      },
      {
        rel: 'apple-touch-icon',
        size: '120x120',
        href: '/images/logo/apple-icon-120x120.png',
      },
      {
        rel: 'apple-touch-icon',
        size: '144x144',
        href: '/images/logo/apple-icon-144x144.png',
      },
      {
        rel: 'apple-touch-icon',
        size: '152x152',
        href: '/images/logo/apple-icon-152x152.png',
      },
      {
        rel: 'apple-touch-icon',
        size: '180x180',
        href: '/images/logo/apple-icon-180x180.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        size: '192x192',
        href: '/images/logo/android-icon-192x192.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        size: '96x96',
        href: '/images/logo/favicon-96x96.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        size: '32x32',
        href: '/images/logo/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        size: '16x16',
        href: '/images/logo/favicon-16x16.png',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/styles/style.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // pwa config
  pwa: {
    meta: {
      title: 'Recipe',
      author: 'Yogi Saka',
      description: 'List of Recipes APP',
      lang: 'en',
    },
    manifest: {
      name: 'Recipe',
      short_name: 'Recipe',
      lang: 'en',
      description: 'List of Recipes APP',
      display: 'standalone',
      background_color: '#e0004f',
      theme_color: '#e0004f',
      icons: [
        {
          src: '/images/logo/android-icon-36x36.png',
          sizes: '36x36',
          type: 'image/png',
          density: '0.75',
        },
        {
          src: '/images/logo/android-icon-48x48.png',
          sizes: '48x48',
          type: 'image/png',
          density: '1.0',
        },
        {
          src: '/images/logo/android-icon-72x72.png',
          sizes: '72x72',
          type: 'image/png',
          density: '1.5',
        },
        {
          src: '/images/logo/android-icon-96x96.png',
          sizes: '96x96',
          type: 'image/png',
          density: '2.0',
        },
        {
          src: '/images/logo/android-icon-144x144.png',
          sizes: '144x144',
          type: 'image/png',
          density: '3.0',
        },
        {
          src: '/images/logo/android-icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
          density: '4.0',
        },
        {
          src: '/images/logo/android-icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          density: '4.0',
        },
      ],
    },
  },
  loading: {
    color: '#005ef5',
    description: '',
    height: '2px',
    throttle: 0,
  },
  loadingIndicator: {
    name: 'pulse',
    color: '#fff',
    background: '#e0004f',
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    proxy: true,
    headers: {
      common: {
        'x-rapidapi-host': 'recipe-puppy.p.rapidapi.com',
        'x-rapidapi-key': '72a318d19fmshd236488140a30b0p19e750jsn7bb2902fdafd',
        useQueryString: true,
      },
    },
  },
  proxy: {
    '/api': {
      target: 'https://recipe-puppy.p.rapidapi.com/',
      pathRewrite: {
        '^/api': '',
      },
    },
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
  generate: {
    fallback: true,
  },
}
