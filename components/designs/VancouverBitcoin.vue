<template>
	<div>
		<div class="pt-20 text-2xl"><h2>UX/UI</h2></div>
		<div class="mt-6">
			<p>I was brought onto the project to refactor the UI/UX of the website with a focus on creating consistency with the content that already excited on the website.</p>
			<p>Below are some screenshots of some select pages from the prototype. Unfortunately I'm unable to share the full prototype at this time due to the sensitive nature of client work. But you can check out the fully developed site at <a href="https://vancouverbitcoin.com" target="_blank" class="underline pointer-cursor">vancouverbitcoin.com</a></p>
		</div>
		<div class="nw-project-images pt-6 gap-6 flex flex-col">
		</div>

		<div class="pt-20 text-2xl"><h2>Graphic Design</h2></div>
		<div class="pt-6">
			<p>The project had several pages that needed graphic design elements to bring them to life. Using the established brand colours, I created a set of consistently designed vector illustrations.</p>
			<p>All assets were mocked up using Adobe Photoshop and finalized in Adobe Illustrator.</p>
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
}
</script>