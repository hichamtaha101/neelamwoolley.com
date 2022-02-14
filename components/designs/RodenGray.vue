<template>
	<div>
		<div class="text-2xl"><h2>UX/UI</h2></div>
		<div class="mt-6">
			<p>I was brought onto the project to design the UI/UX of Roden Gray's custom Shopify theme with a focus on creating consistency between the web design and the pre established brand image.</p>
			<p>Below are some screenshots of some select pages from the prototype. Unfortunately I'm unable to share the full prototype at this time due to the sensitive nature of client work. But you can check out the fully developed site at <a href="https://rodengray.com" target="_blank" class="underline">rodengray.com</a>.</p>
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
				{ imagePath: 'roden-gray/desktop/homepage.png', label: 'Homepage' },
				{ imagePath: 'roden-gray/desktop/navigation-menu.png', label: 'Navigation Menu' },
				{ imagePath: 'roden-gray/desktop/product-listing-design.png', label: 'Product Listings Page (Designer)' },
				{ imagePath: 'roden-gray/desktop/product-listing-categories.png', label: 'Product Listings Page (Categories)' },
				{ imagePath: 'roden-gray/desktop/product-details.png', label: 'Product Details' },
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
