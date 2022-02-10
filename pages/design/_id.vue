<template>
	<div class="nw-page design relative z-30">
		<div class="nw-project-wrap text-white flex gap-4 relative">

			<!-- Main Project Content Section -->
			<div class="nw-project-content">
				<div class="flex items-center pt-12 cursor-pointer hover:opacity-90 transition-opacity" @click="$router.push('/design')">
					<svg class="mr-4 rotate-90" xmlns="http://www.w3.org/2000/svg" width="11" height="9" viewBox="0 0 11 9">
						<path id="Polygon_2" data-name="Polygon 2" d="M5.5,0,11,9H0Z" transform="translate(11 9) rotate(180)" fill="#fff"/>
					</svg>
					Back To Projects
				</div>
				<component :is="design.component" :design="design" />
				<div class="pt-20 text-2xl"><h2>Similar Projects</h2></div>
				<div class="py-12 gap-6 flex flex-wrap">
					<design-card :design="sp" v-for="(sp, spi) in similarProjects" :key="spi"/>
				</div>
			</div>


			<!-- Fixed Sidebar Section -->
			<div class="nw-project-sidebar-block ml-auto"></div>
			<div class="nw-project-sidebar fixed right-0">
				<div class="pl-3 pb-3">
					<div class="h-full py-11 px-12">
						<section-title :title="design.sectionTitle" :subTitle="design.sectionSubTitle"/>
						
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
							<div><b>{{ design.desktopRes }}</b></div>
						</div>
						<div class="flex">
							<div class="w-32">Mobile</div>
							<div><b>{{ design.mobileRes }}</b></div>
						</div>

						<div class="nw-section-divider-title pb-1 mt-7">PROGRAMS</div>
						<div class="nw-project-divider" />

						<div class="flex gap-4 mt-7">
							<img :src="require(`~/assets/images/common/${img.file}`)" :alt="img.alt" v-for="( img, imgi ) in design.icons" :key="`img_icon_${imgi}`">
						</div>

						<div class="nw-section-divider-title pb-1 mt-7">OVERVIEW</div>
						<div class="nw-project-divider" />
						<p class="mt-6">{{ design.overview }}</p>
					</div>
				</div>
				<div class="mt-6 ml-6 flex gap-4">
					<img 
					width="91px" 
					height="91px" 
					src="~/assets/images/designs/Dot Block grey.svg" 
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
import designs from '~/assets/js/designs';

import Bittreo from '~/components/designs/Bittreo.vue';
import GladiatorBikes from '~/components/designs/GladiatorBikes.vue';
import HenesysGroup from '~/components/designs/HenesysGroup.vue';
import Ocin from '~/components/designs/Ocin.vue';
import QuickMint from '~/components/designs/QuickMint.vue';
import RodenGray from '~/components/designs/RodenGray.vue';
import ShapeShifters from '~/components/designs/ShapeShifters.vue';
import VancouverBitcoin from '~/components/designs/VancouverBitcoin.vue';

export default {
	components: { 
		SectionTitle,
		DesignCard,
		Bittreo,
		GladiatorBikes,
		HenesysGroup,
		Ocin,
		QuickMint,
		RodenGray,
		ShapeShifters,
		VancouverBitcoin,
	},
	data() {
		return {
			activeView: 'desktop'
		}
	},
	// Simulate Server-Side Request.
	asyncData( { req, params, redirect } ) {
		return new Promise( async ( resolve ) => {
			if ( params.id in designs ) {
				const design = designs[params.id];
				const similarProjects = design.similarProjects.filter( sp => sp in designs ).map( sp => designs[sp] );
				resolve( { design, similarProjects } );
			} else {
				redirect('/404'); // Cannot find page.
				resolve();
			}
		} );
	},
	// Page specific SEO.
	head() {
		return {
			title: this.design.title,
			meta: [{
				hid: 'description',
				name: 'description',
				content: this.design.briefDescription,
			}],
		};
	},

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