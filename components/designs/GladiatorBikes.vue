<template>
	<div>
		<div class="pt-20 text-2xl"><h2>UX/UI</h2></div>
		<div class="mt-6">
			<p>A client of Henesys Group - This was a pilot project for launching the front-end website solution side of Henesys's SaaS. I was hired as the Graphic Designer responsible for the brand and the UI/UX designer for the e-commerce website. Unfortunately im unable to share the full prototype at this time due to the sensitive nature of client work. But you can check out the fully developed site at <a class="underline" href="https://gladiatorbikes.ca" target="_blank">gladiatorbikes.ca</a>.</p>
		</div>
		<div class="flex flex-col gap-6 mt-2">
			<design-image v-for="(i, index) in desktopImages" :key="index" :image="i" />
		</div>

		<div class="pt-20 text-2xl"><h2>Graphic Design</h2></div>
		<div class="pt-6">
			<p>I created the logo for the Gladiator Bikes Brand and assisted in the product layout for final production.</p>
			<p>Here you can see the shortlist of sample logos we went through before we landed on a solution that worked for the company. Overall they wanted something that would be visually scalable and would work in several colour variations.</p>
			<p>The ultimately client decided on an abstract mark with the addition of an optional wordmark.</p>
		</div>
		<div class="grid grid-cols-2 gap-6 mt-2">
			<design-image v-for="(i, index) in graphicImages" :key="`gi_${index}`" :image="i" />
		</div>

		<div class="pt-20 text-2xl"><h2>Graphic Design</h2></div>
		<div class="pt-6">
			<p>In addition to the main branding, they requested sub-branding for a resale product they would be listing on their website. The request was for something that was centered around the brand name “Luminous”.</p>
			<p>Here you can see the shortlist of sample logos we went through before we landed on a solution that worked for the company. Overall they wanted something that would be in line with the primary logo but distinct enough to stand on its own. I ended up tying the two together through the use of the wordmark.</p>
		</div>
		<div class="grid grid-cols-2 gap-6 mt-2">
			<design-image v-for="(i, index) in logoGraphicImages" :key="`lgi_${index}`" :image="i" />
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
				{ imagePath: 'gladiator-bikes/desktop/product-listing-page.png', label: 'Product Listing Page' },
				{ imagePath: 'gladiator-bikes/desktop/filters.png', label: 'PLP - Filters' },
				{ imagePath: 'gladiator-bikes/desktop/product-description-page.png', label: 'Product Description Page' },
				{ imagePath: 'gladiator-bikes/desktop/checkout-form.png', label: 'Checkout Form' },
			],
			graphicImages: [
				{ imagePath: 'gladiator-bikes/desktop/logo-short-list.png', label: 'Logo Short List'},
				{ imagePath: 'gladiator-bikes/desktop/logo-final-variant.png', label: 'Logo Final Variants'},
				{ imagePath: 'gladiator-bikes/desktop/logo-short-list-2.png', label: 'Logo Short List'},
				{ imagePath: 'gladiator-bikes/desktop/product-layouts.png', label: 'Production Layout(s)'},
			],
			logoGraphicImages: [
				{ imagePath: 'gladiator-bikes/desktop/logo-final-luminous-short-list.png', label: 'Logo Short List'},
				{ imagePath: 'gladiator-bikes/desktop/logo-final-luminous.png', label: 'Logo Final'},
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