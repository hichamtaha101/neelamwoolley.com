<template>
	<div>
		<div class="pt-20 text-2xl"><h2>UX/UI</h2></div>
		<div class="mt-6">
			<p>I was tasked with creating a prototype for the re-branded Shapshifters studio portfolio website. Below are some select screenshots from the prototype. Unfortunately im unable to share the full prototype at this time due to the sensitive nature of client work. But you can check out the fully developed site at <a class="underline" href="http://shapeshifterscreative.com/" target="_blank">shapeshifterscreative.com</a>.</p>
		</div>
		<div class="flex gap-3 mt-6">
			<div @click="activeView = 'desktop'" :class="`nw-switch py-1 px-3 cursor-pointer text-sm ${activeView === 'desktop' ? 'active' : ''}`">Desktop Samples</div>
			<div @click="activeView = 'mobile'" :class="`nw-switch py-1 px-3 cursor-pointer text-sm ${activeView === 'mobile' ? 'active' : ''}`">Mobile Samples</div>
		</div>
		<div class="flex flex-col gap-6 mt-6">
			<design-image v-for="(i, index) in viewImages[activeView]" :key="index" :image="i" />
		</div>

		<div class="pt-20 text-2xl"><h2>Graphic Design</h2></div>
		<div class="pt-6">
			<p>The client requested a Full Re-Branding of their VFX studio - previously known as VFX FOX. Initially they had conceived the brand as "shapeshift" which eventually evolved into "Shapeshifters".</p>
			<p>Here you can see the shortlist of sample logos we went through before we landed on a solution that worked for the company. All assets were mocked up using Adobe Photoshop and finalized in Adobe Illustrator.</p>
			<p>Overall they wanted something that would be visually scalable and easy to animate in a 3d space.</p>
		</div>
		<div class="grid grid-cols-2 gap-6 mt-6">
			<design-image v-for="(i, index) in graphicImages" :key="`gi_${index}`" :image="i" />
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
					{ imagePath: 'shape-shifters/desktop/project-listing-page.png', label: 'Project Listing Page' },
					{ imagePath: 'shape-shifters/desktop/project-description-page.png', label: 'Project Description Page' },
					{ imagePath: 'shape-shifters/desktop/career-listing.png', label: 'Career Listings Page' },
				],
				mobile: [
					{ imagePath: 'shape-shifters/mobile/project-listing-page.png', label: 'Project Listing Page'},
					{ imagePath: 'shape-shifters/mobile/project-description-page.png', label: 'Project Description Page'},
					{ imagePath: 'shape-shifters/mobile/career-listing.png', label: 'Career Listings Page'},
				]
			},
			graphicImages: [
				{ imagePath: 'shape-shifters/desktop/crystal-logo-sl.png', label: 'Logo Short List'},
				{ imagePath: 'shape-shifters/desktop/cube-logo-sl.png', label: 'Logo Short List'},
				{ imagePath: 'shape-shifters/desktop/logo-final-variants.png', label: 'Logo Final Variants'},
				{ imagePath: 'shape-shifters/desktop/logo-final-sl.png', label: 'Logo Final Short List'},
				{ imagePath: 'shape-shifters/desktop/logo-final.png', label: 'Logo Final'},
			]
		}
	}
}
</script>