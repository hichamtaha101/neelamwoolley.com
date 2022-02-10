<template>
  <v-app>
	<app-header />
		<Nuxt />
	<app-footer />
  </v-app>
</template>

<script>
import AppFooter from '~/components/Footer.vue';
import AppHeader from '~/components/Header.vue';

export default {
	components: { AppFooter, AppHeader }
}
</script>
