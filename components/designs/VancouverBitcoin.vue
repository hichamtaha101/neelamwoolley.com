<template>
	<div>
		<div class="pt-20 text-2xl"><h2>UX/UI</h2></div>
		<div class="mt-6">
			<p>I was brought onto the project to refactor the UI/UX of the website with a focus on creating consistency with the content that already excited on the website.</p>
			<p>Below are some screenshots of some select pages from the prototype. Unfortunately I'm unable to share the full prototype at this time due to the sensitive nature of client work. But you can check out the fully developed site at <a href="https://vancouverbitcoin.com" target="_blank" class="underline pointer-cursor">vancouverbitcoin.com</a></p>
		</div>

		<div class="flex flex-col gap-6 mt-6">
			<design-image v-for="(i, index) in desktopImages" :key="index" :image="i" />
		</div>

		<div class="pt-20 text-2xl"><h2>Graphic Design</h2></div>
		<div class="pt-6">
			<p>The project had several pages that needed graphic design elements to bring them to life. Using the established brand colours, I created a set of consistently designed vector illustrations.</p>
			<p>All assets were mocked up using Adobe Photoshop and finalized in Adobe Illustrator.</p>
		</div>

		<div class="flex flex-col gap-6 mt-6">
			<design-image v-for="(i, index) in graphicImages" :key="`gi_${index}`" :image="i" />
		</div>
	</div>
</template>
<script>
import DesignImage from '~/components/DesignImage.vue';

export default {
	props: { 
		design: { 
			type: Object, 
			required: true, 
			default: () => ( {} ),
		}
	},
	components: { DesignImage },
	data() {
		return {
			desktopImages: [
				{ imagePath: 'vancouver-bitcoin/desktop/homepage.png', label: 'Homepage' },
				{ imagePath: 'vancouver-bitcoin/desktop/secondary-page.png', label: 'Secondary Page' },
				{ imagePath: 'vancouver-bitcoin/desktop/blog-listing.png', label: 'Blog Listing Page' },
				{ imagePath: 'vancouver-bitcoin/desktop/blog-post.png', label: 'Blog Post' },
			],
			graphicImages: [
				{ imagePath: 'vancouver-bitcoin/desktop/hero-image-texture.png', label: 'Hero Image Texture'},
				{ imagePath: 'vancouver-bitcoin/desktop/background-texture.png', label: 'Background Texture'}
			]
		}
	},
}
</script>