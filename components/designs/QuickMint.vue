<template>
	<div>
		<div class="pt-20 text-2xl"><h2>UX/UI</h2></div>
		<div class="mt-6">
			<p>I was tasked with creating a prototype for the Quickmint NFT e-commerce website. Below are some select screenshots from the prototype. Unfortunately the product is being developed so I can't share the full prototype at this time.</p>
		</div>
		<div class="flex gap-3">
			<div @click="activeView = 'desktop'" :class="`nw-switch py-1 px-3 cursor-pointer text-sm ${activeView === 'desktop' ? 'active' : ''}`">Desktop Samples</div>
			<div @click="activeView = 'mobile'" :class="`nw-switch py-1 px-3 cursor-pointer text-sm ${activeView === 'mobile' ? 'active' : ''}`">Mobile Samples</div>
		</div>

		<div class="mt-6">
			<p>I am currently supporting the project as part of an ongoing contract with Quickmint.</p>
		</div>

		<div class="pt-20 text-2xl"><h2>Graphic Design</h2></div>
		<div class="pt-6">
			<p>Here you can see the shortlist of sample logos we went through before we landed on a solution that worked for the company. All assets were mocked up using Adobe photoshop and finalized in Adobe Illustrator.</p>
			<p>Overall they wanted something that would be visually scalable and easy to read at a glance.</p>
		</div>

		<div class="pt-20 text-2xl"><h2>NFT Series</h2></div>
		<div class="pt-6">
			<p>In Addition to my UX/Ui contributions to the Quickmint I was commission to do a series of Illustrations that could be used as monthly promotional NFT drops for their platform.</p>
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
			activeView: 'desktop'
		}
	}
}
</script>