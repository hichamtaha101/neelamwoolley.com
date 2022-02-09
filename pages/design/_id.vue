<template>
	<div class="page design relative z-30">
		<div class="nw-project-wrap text-white flex gap-4 relative">

			<!-- Main Project Content Section -->
			<div class="nw-project-content">
				<div class="flex items-center pt-12 cursor-pointer hover:opacity-90 transition-opacity" @click="$router.push('/design')">
					<svg class="mr-4 rotate-90" xmlns="http://www.w3.org/2000/svg" width="11" height="9" viewBox="0 0 11 9">
						<path id="Polygon_2" data-name="Polygon 2" d="M5.5,0,11,9H0Z" transform="translate(11 9) rotate(180)" fill="#fff"/>
					</svg>
					Back To Projects
				</div>
				<div class="pt-20 text-2xl">
					<h2>UX/UI</h2>
				</div>
				<div class="pt-12">
					<p>I was brought onto the project to refactor the UI/UX of the website with a focus on creating consistency with the content that already excited on the website.</p>
					<p>Below are some screenshots of some select pages from the prototype. Unfortunately I'm unable to share the full prototype at this time due to the sensitive nature of client work. But you can check out the fully developed site at <a href="https://vancouverbitcoin.com" target="_blank" class="underline pointer-cursor">vancouverbitcoin.com</a></p>
				</div>
				<div class="flex gap-3">
					<div @click="activeView = 'desktop'" :class="`nw-switch py-1 px-3 cursor-pointer text-sm ${activeView === 'desktop' ? 'active' : ''}`">Desktop Samples</div>
					<div @click="activeView = 'mobile'" :class="`nw-switch py-1 px-3 cursor-pointer text-sm ${activeView === 'mobile' ? 'active' : ''}`">Mobile Samples</div>
				</div>
				<div class="nw-project-images pt-6 gap-6 flex flex-col">
					<div></div>
					<div></div>
				</div>

				<div class="pt-20 text-2xl"><h2>Graphic Design</h2></div>
				<div class="pt12">
					<p>The project had several pages that needed graphic design elements to bring them to life. Using the established brand colours, I created a set of consistently designed vector illustrations.</p>
					<p>All assets were mocked up using Adobe Photoshop and finalized in Adobe Illustrator.</p>
				</div>

				<div class="pt-20 text-2xl"><h2>Similar Projects</h2></div>
				<div class="py-12 grid gap-6 md:grid-cols-2 sm:grid-cols-1">
					<design-card :design="{ title: '', tag: '', briefDescription: '', link: '', imgSrc: '', imgAlt: '' }" />
					<design-card :design="{ title: '', tag: '', briefDescription: '', link: '', imgSrc: '', imgAlt: '' }" />
				</div>
			</div>


			<!-- Fixed Sidebar Section -->
			<div class="nw-project-sidebar-block ml-auto"></div>
			<div class="nw-project-sidebar fixed right-0">
				<div class="pl-3 pb-3">
					<div class="h-full py-11 px-12">
						<section-title title="WEB APPLICATION" subTitle="VANCOUVER BITCOIN"/>
						
						<div class="nw-section-divider-title pb-1 mt-12">PROTOTYPE URL</div>
						<div class="nw-project-divider" />

						<div class="nw-project-nda-locked w-full bg-black mt-7 py-2 px-8 relative">
							<i class="fa fa-lock text-black absolute top-0 left-1 z-20 text-xs"></i>
							NDA Locked
						</div>

						<div class="nw-section-divider-title pb-1 mt-7">PROTOTYPE DIMENSIONS</div>
						<div class="nw-project-divider" />

						<div class="flex mt-7">
							<div class="w-32">Desktop</div>
							<div><b>1920x1080</b></div>
						</div>
						<div class="flex">
							<div class="w-32">Mobile</div>
							<div><b>N/A</b></div>
						</div>

						<div class="nw-section-divider-title pb-1 mt-7">PROGRAMS</div>
						<div class="nw-project-divider" />

						<div class="flex gap-4 mt-7">
							<img src="~/assets/images/photoshop-icon.png" alt="Photoshop">
							<img src="~/assets/images/illustrator-icon.png" alt="Illustrator">
							<img src="~/assets/images/xd-icon.png" alt="XD">
						</div>

						<div class="nw-section-divider-title pb-1 mt-7">OVERVIEW</div>
						<div class="nw-project-divider" />
						<p class="mt-6">Lead Designer for Vancouver Bitcoin's website initiative. I was hired to redesign their existing website under a new set of branding guidelines.</p>
					</div>
				</div>
				<div class="mt-6 ml-6 flex gap-4">
					<img 
					width="91px" 
					height="91px" 
					src="~/assets/images/design/Dot Block grey.svg" 
					alt="Dot Block Grey" 
					v-for="n in 5"
					:key="n">
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import SectionTitle from '~/components/SectionTitle.vue';
import DesignCard from '~/components/DesignCard.vue';

export default {
	components: { SectionTitle, DesignCard },
	data() {
		return {
			activeView: 'desktop'
		}
	}
}
</script>
<style lang="postcss">
.nw {
	&-switch {
		border: 1px solid white;
		border-radius: 3px;
		color: white;
		transition: all 0.2s;
		&:hover, &.active {
			color: var(--main-color);
			background: white;
		}
	}
	&-project {
		&-divider {
			@add-mixin dotted-line-styles var(--main-color);
		}
		&-nda-locked {
			border-radius: 3px;
			border: 5px solid #FFFFFF;
			&::after {
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				width: 0;
				height: 0;
				border-top: 30px solid white;
				border-right: 30px solid transparent;
			}
		}

		&-images {
			>div {
				height: 535px;
			}
		}
		&-wrap {
			padding-left: 140px;
			background-color: var(--main-color);
		}
		&-content {
			max-width: 950px; 
			width: 100%
		}
		&-sidebar {
			&-block {
				max-width: 676px;
				width: 100%;
			}
			margin-top: -10px;
			max-width: 676px;
			width: 100%;
			>div:first-child {
				border: 10px solid #2D2932;
				height: 750px;
				>div {
					background: #2D2932;
				}
			}
		}
	}
}
</style>