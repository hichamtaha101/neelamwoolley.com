<template>
	<div>
		<div class="text-2xl"><h2>UX/UI</h2></div>
		<div class="mt-6">
			<p>I was tasked with creating a prototype for the Quickmint NFT e-commerce website. Below are some select screenshots from the prototype. Unfortunately the product is being developed so I can't share the full prototype at this time.</p>
		</div>
		<div class="flex gap-3 mt-6">
			<div @click="activeView = 'desktop'" :class="`nw-switch py-1 px-3 cursor-pointer text-sm ${activeView === 'desktop' ? 'active' : ''}`">Desktop Samples</div>
			<div @click="activeView = 'mobile'" :class="`nw-switch py-1 px-3 cursor-pointer text-sm ${activeView === 'mobile' ? 'active' : ''}`">Mobile Samples</div>
		</div>
		<div class="flex flex-col gap-6 mt-6">
			<design-image v-for="(i, index) in viewImages[activeView]" :key="index" :image="i" />
		</div>
		<div class="mt-6">
			<p>I am currently supporting the project as part of an ongoing contract with Quickmint.</p>
		</div>

		<div class="pt-20 text-2xl"><h2>Graphic Design</h2></div>
		<div class="pt-6">
			<p>Here you can see the shortlist of sample logos we went through before we landed on a solution that worked for the company. All assets were mocked up using Adobe photoshop and finalized in Adobe Illustrator.</p>
			<p>Overall they wanted something that would be visually scalable and easy to read at a glance.</p>
		</div>
		<div class="grid grid-cols-2 gap-6 mt-6">
			<design-image v-for="(i, index) in graphicImages" :key="`gi_${index}`" :image="i" />
		</div>

		<div class="pt-20 text-2xl"><h2>NFT Series</h2></div>
		<div class="pt-6">
			<p>In Addition to my UX/Ui contributions to the Quickmint I was commission to do a series of Illustrations that could be used as monthly promotional NFT drops for their platform.</p>
		</div>
		<div class="grid grid-cols-2 gap-6 mt-6">
			<design-image v-for="(i, index) in seriesGraphicImages" :key="`sgi_${index}`" :image="i" />
		</div>
	</div>
</template>
<script>
export default {
	props: { 
		design: { 
			type: Object, 
			required: true, 
			default: () => ( {} ),
		}
	},
	data() {
		return {
			activeView: 'desktop',
			viewImages: {
				desktop: [
					{ imagePath: 'quick-mint/desktop/product-listing-page.png', label: 'Product Listing Page' },
					{ imagePath: 'quick-mint/desktop/plp-filters.png', label: 'PLP - Filters' },
					{ imagePath: 'quick-mint/desktop/product-description-page.png', label: 'Product Description Page' },
				],
				mobile: [
					{ imagePath: 'quick-mint/mobile/product-listing-page.png', label: 'Product Listing Page'},
					{ imagePath: 'quick-mint/mobile/plp-filters.png', label: 'PLP - Filters'},
					{ imagePath: 'quick-mint/mobile/product-description-page.png', label: 'Product Description Page'},
				]
			},
			graphicImages: [
				{ imagePath: 'quick-mint/desktop/logo-sl.png', label: 'Logo Short List'},
				{ imagePath: 'quick-mint/desktop/logo-final.png', label: 'Logo Final'},
				{ imagePath: 'quick-mint/desktop/emblem-final.png', label: 'Emblem Final'},
			],
			seriesGraphicImages: [
				{ imagePath: 'quick-mint/desktop/december-2021.png', label: 'December 2021'},
				{ imagePath: 'quick-mint/desktop/november-2021.png', label: 'November 2021'},
				{ imagePath: 'quick-mint/desktop/october-2021.png', label: 'October 2021'},
				{ imagePath: 'quick-mint/desktop/september-2021.png', label: 'September 2021'},
				{ imagePath: 'quick-mint/desktop/august-2021.png', label: 'August 2021'},
				{ imagePath: 'quick-mint/desktop/july-2021.png', label: 'July 2021'},
				{ imagePath: 'quick-mint/desktop/june-2021.png', label: 'June 2021'},
				{ imagePath: 'quick-mint/desktop/may-2021.png', label: 'May 2021'},
				{ imagePath: 'quick-mint/desktop/april-2021.png', label: 'April 2021'},
			]
		}
	}
}
</script>