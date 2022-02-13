<template>
	<div>
		<div class="pt-20 text-2xl"><h2>UX/UI</h2></div>
		<div class="mt-6">
			<p>I was brought onto the project to design the UI/UX of OCIN's custom Shopify theme with a focus on creating consistency between the web design and the pre established brand image.</p>
			<p>Below are some screenshots of some select pages from the prototype. Unfortunately I'm unable to share the full prototype at this time due to the sensitive nature of client work. But you can check out the fully developed site at <a class="underline" href="https://ocin.co" target="_blank">OCIN.co</a>.</p>
		</div>

		<div class="flex flex-col gap-6 mt-6">
			<design-image v-for="(i, index) in desktopImages" :key="index" :image="i" />
		</div>
	</div>
</template>
<script>
import DesignImage from '~/components/DesignImage.vue';

export default {
	components: { DesignImage },
	data() {
		return {
			desktopImages: [
				{ imagePath: 'ocin/desktop/homepage.png', label: 'Homepage' },
				{ imagePath: 'ocin/desktop/navigation-menu.png', label: 'Navigation Menu' },
				{ imagePath: 'ocin/desktop/product-listing.png', label: 'Product Listings' },
				{ imagePath: 'ocin/desktop/product-details.png', label: 'Product Details' },
			]
		}
	},
	props: { 
		design: { 
			type: Object, 
			required: true, 
			default: () => ( {} ),
		}
	}
}
</script>