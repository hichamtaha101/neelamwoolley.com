<template>
	<div class="page design relative z-30">
		<div class="nw-project-wrap text-white flex relative">
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
					<p>Below are some screenshots of some select pages from the prototype. Unfortunately I'm unable to share the full prototype at this time due to the sensitive nature of client work. But you can check out the fully developed site at vancouverbitcoin.com</p>
				</div>
				<div class="flex gap-3">
					<div @click="activeView = 'desktop'" :class="`nw-switch py-1 px-3 cursor-pointer text-sm ${activeView === 'desktop' ? 'active' : ''}`">Desktop Samples</div>
					<div @click="activeView = 'mobile'" :class="`nw-switch py-1 px-3 cursor-pointer text-sm ${activeView === 'mobile' ? 'active' : ''}`">Mobile Samples</div>
				</div>
				<div class="nw-project-images pt-6 gap-6 flex flex-col">
					<div></div>
					<div></div>
				</div>
			</div>
			<div class="nw-project-sidebar-block ml-auto"></div>
			<div class="nw-project-sidebar fixed right-0 pl-3 pb-3">
				<div class="h-full py-11 px-12">
					<section-title title="WEB APPLICATION" subTitle="VANCOUVER BITCOIN"/>
					
					<div class="nw-section-divider-title uppercase pb-1 pt-12">Prototype URL</div>
					<div class="nw-project-divider" />
					<div class="nw-project-nda-locked w-full bg-black mt-6 py-2 px-8">NDA Locked</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import SectionTitle from '~/components/SectionTitle.vue';

export default {
	components: { SectionTitle },
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
			height: 750px;
			border: 10px solid #2D2932;
			>div {
				background: #2D2932;
			}
		}
	}
}
</style>