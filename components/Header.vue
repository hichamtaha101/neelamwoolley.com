<template>
  <div class="header fixed flex justify-between items-center z-40 w-full">
	  <div class="logo text-2xl uppercase">
			<NuxtLink to="/">
			  	Neelam <span class="font-bold">Woolley</span>
			</NuxtLink>
		</div>
	  <div>
		  <div class="nav-items flex flex-wrap gap-16 uppercase">
		  	<div :class="`navigation-link cursor-pointer hover:opacity-80 transition-opacity`">
				<NuxtLink to="/design">
					Design
				</NuxtLink>
			  </div>
		  	<div :class="`navigation-link cursor-pointer hover:opacity-80 transition-opacity`">
				<NuxtLink to="/illustration">
					Illustration
				</NuxtLink>
			</div>
		  </div>
	  </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
	computed: mapGetters( ['activePage'] )
}
</script>

<style lang="postcss">
.header {
	height: 122px;
	background-color: var(--main-color);
	color: white;
	padding-left: 140px;
	padding-right: 140px;
	box-shadow: 0px 4px 7px #00000026;
	.nav-items {
		.nuxt-link-active { position: relative; }
		.nuxt-link-active::before {
			content: "";
			position: absolute;
			border-bottom: 3px solid var(--secondary-color-3);
			bottom: -12px;
			height: 3px;
			width: 100%;
		}
	}
}
</style>
