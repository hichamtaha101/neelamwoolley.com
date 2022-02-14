const postcss = require( './postcss.webpack.config' );

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'UI/UX Designer',
	titleTemplate: 'Neelam Woolley | %s',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Portfolio for UI/UX Designer Neelam Woolley' },
	  { name: 'author', content: 'Neelam Woolley'},
    ],
    link: [
		{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
		{ rel: 'stylesheet', href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" },
		{ rel: 'stylesheet', href: "https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,600,700" },
    ],
	script: []
  },
  target: 'static',

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
	//   '~assets/scss/main.scss'
	'~/assets/css/index.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
	[
		'@nuxtjs/vuetify',
		// { customVariables: ['~assets/scss/main.scss'] }
	],
	'@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
	postcss,
  }
}
