<template>
  <div class="header fixed z-40 w-full">
	  <div class="nw-wrapper h-full justify-center xs:justify-between flex-col xs:flex-row items-center gap-2 xs:gap-0">
		<div class="logo text-2xl uppercase">
				<NuxtLink to="/">
				<div class="flex gap-2 py-6 px-4 sm:p-0">
					<img style="max-width:28px;" src="~/assets/images/homepage/heading shapes.svg"> 
					<div>Neelam <span class="font-bold">Woolley</span></div>
				</div>
				</NuxtLink>
			</div>
		<div class="nav-items-wrap">
			<div class="w-full nav-items flex flex-nowrap xs:flex-wrap gap-4 xs:gap-16 uppercase">
				<div :class="`p-3 cursor-pointer text-center xs:text-left w-full xs:w-auto hover:opacity-80 transition-opacity`">
					<NuxtLink to="/design">
						Design
					</NuxtLink>
				</div>
				<div :class="`p-3 cursor-pointer text-center xs:text-left w-full xs:w-auto hover:opacity-80 transition-opacity`">
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
	@media (--xs) {
		height: auto;
		.nw-wrapper { padding-left: 0px; padding-right: 0px;}
	}
	>div:first-child {
		display: flex;
	}
	.nav-items {
		&-wrap {
			@media (--xs) {
				width: 100%;
				display: flex;
				flex-grow: 1;
				border-top: 1px solid #707070;
			}
		}
		@media (--xs) {
			>div:first-child {
				border-right: 1px solid #707070;
			}
		}
		.nuxt-link-active { position: relative; }
		.nuxt-link-active::before {
			content: "";
			position: absolute;
			border-bottom: 3px solid var(--secondary-color-3);
			bottom: -14px;
			height: 3px;
			width: 100%;
		}
	}
}
</style>
