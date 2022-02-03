<template>
  <v-app>
	<div class="app__wrapper">
		<app-header />
			<div class="app__content">
				<Nuxt />
			</div>
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

<style lang="scss">
.app__content{
	background: url('~assets/images/body-background.jpg');
}
</style>