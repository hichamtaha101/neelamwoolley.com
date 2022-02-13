<template>
  <div class="header fixed z-40 w-full">
	  <div class="nw-wrapper h-full justify-center md:justify-between flex-col md:flex-row items-center gap-2 md:gap-0">
		<div class="logo text-2xl uppercase">
				<NuxtLink to="/">
				<div class="flex gap-2">
					<img style="max-width:28px;" src="~/assets/images/homepage/heading shapes.svg"> 
					<div>Neelam <span class="font-bold">Woolley</span></div>
				</div>
				</NuxtLink>
			</div>
		<div>
			<div class="nav-items flex flex-wrap gap-4 md:gap-16 uppercase">
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
	box-shadow: 0px 4px 7px #00000026;
	>div {
		display: flex;
	}
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
