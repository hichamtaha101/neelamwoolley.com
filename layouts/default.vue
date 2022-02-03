<template>
  <v-app>
	<div class="portfolio">
		<app-header />
			<Nuxt />
		<app-footer />
	</div>
  </v-app>
</template>

<script>
import AppFooter from '~/components/Footer.vue';
import AppHeader from '~/components/Header.vue';

export default {
	components: { AppFooter, AppHeader }
}
</script>

<style lang="postcss">
</style>