<template>
	<div>
		<div class="text-2xl"><h2>UX/UI</h2></div>
		<div class="mt-6">
			<p>Lead Designer for Henesys Group's SaaS, I can't get too detailed about the product, but essentially it's a web-based platform for businesses looking to manage large-scale inventories, track sales and customers, and manage shipping solutions. My roles include UI/UX and Graphic Design.</p>
			<p>I was initially brought into the project at a stage where a lot of the work had already been developed without a designer and needed UX/UI refactoring. Again i can't say much about product features specifically but below are some screenshots of some select pages from the prototype.</p>
		</div>
		<div class="flex flex-col gap-6 mt-6">
			<design-image v-for="(i, index) in desktopImages" :key="index" :image="i" />
		</div>
		<div class="mt-6">
			<p>I am currently supporting the platform as an ongoing contract with Henesys.</p>
		</div>

		<div class="pt-20 text-2xl"><h2>Graphic Design</h2></div>
		<div class="pt-6">
			<p>I created the logo for the Henesys Group and the branding. In this case, the branding and graphical style were established first, and then the logo was decided on after we had a consistent set of styling rules in place.</p>
			<p>The project had several pages that needed graphic design elements to bring them to life. Using the established brand colours, I created a set of consistently designed vector illustrations.</p>
			<p>All assets were mocked up using Adobe Photoshop and finalized in Adobe Illustrator.</p>
		</div>
		<div class="flex flex-col gap-6 mt-6">
			<design-image v-for="(i, index) in graphicImages" :key="`gi_${index}`" :image="i" :label-min-width="0" />
		</div>

		<div class="pt-20 text-2xl"><h2>Graphic Design</h2></div>
		<div class="pt-6">
			<p>Here you can see the long list of sample logos we went through before we landed on a solution that worked for the company.</p>
			<p>Overall they wanted something simple and recognizable that would be legible at all sizes. This is why they ended up going with lettermark.</p>
		</div>

		<div class="grid grid-cols-2 gap-6 mt-6">
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
				{ imagePath: 'henesys-group/desktop/receivables.png', label: 'Receivables' },
				{ imagePath: 'henesys-group/desktop/orders.png', label: 'Orders' },
				{ imagePath: 'henesys-group/desktop/filters.png', label: 'Orders - Filters' },
			],
			graphicImages: [
				{ imagePath: 'henesys-group/desktop/login.png', label: 'Login'},
				{ imagePath: 'henesys-group/desktop/500.png', label: '500'},
				{ imagePath: 'henesys-group/desktop/440.png', label: '440'},
				{ imagePath: 'henesys-group/desktop/401.png', label: '401'},
				{ imagePath: 'henesys-group/desktop/404.png', label: '404'},
				{ imagePath: 'henesys-group/desktop/403.png', label: '403'},
			],
			logoGraphicImages: [
				{ imagePath: 'henesys-group/desktop/logo-sl.png', label: 'Logo Short List'},
				{ imagePath: 'henesys-group/desktop/logo-final.png', label: 'Logo Final'},
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