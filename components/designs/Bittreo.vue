<template>
	<div>
		<div class="pt-20 text-2xl"><h2>UX/UI</h2></div>
		<div class="mt-6">
			<p>I was initially brought into the project at a stage where a most of the work had already been developed without a designer and needed UX/UI refactoring. I have to remain fairly tight-lipped about the details of the platform but below are some screenshots of some select pages from the prototype showing the evolution of the product.</p>
		</div>
		<div class="flex flex-col gap-6 mt-2">
			<design-image v-for="(i, index) in desktopImages" :key="index" :image="i" :label-min-width="0" />
		</div>
		<div class="mt-6">
			<p>I am currently supporting the platform as an ongoing contract with Vancouver Bitcoin.</p>
		</div>

		<div class="pt-20 text-2xl"><h2>Graphic Design</h2></div>
		<div class="pt-6">
			<p>The project had several pages that needed graphic design elements to bring them to life. Using the established brand colours/identity, I created the pair of vector illustrations you see below.</p>
			<p>All assets were mocked up using Adobe Photoshop and finalized in Adobe Illustrator.</p>
		</div>
		<div class="flex flex-col gap-6 mt-2">
			<design-image v-for="(i, index) in graphicImages" :key="`gi_${index}`" :image="i" :label-min-width="0" />
		</div>
		<div class="mt-6">
			<p>I am currently supporting the platform as an ongoing contract with Vancouver Bitcoin.</p>
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
		},
	},
	data() {
		return {
			desktopImages: [
				{ imagePath: 'bittreo/desktop/uiux-2019.png', label: '2019' },
				{ imagePath: 'bittreo/desktop/uiux-2020.png', label: '2020' },
				{ imagePath: 'bittreo/desktop/uiux-2021.png', label: '2021' },
			],
			graphicImages: [
				{ imagePath: 'bittreo/desktop/gd-2019.png', label: '2019'},
				{ imagePath: 'bittreo/desktop/gd-2020.png', label: '2020'},
			]
		}
	}
}
</script>