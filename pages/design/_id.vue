<template>
	<div class="nw-page design relative z-30">
		<div class="fixed md:hidden left-0 w-full text-white bg-black p-6 z-20 cursor-pointer" @click="$router.push('/design')">
			<svg class="mr-4 inline-block mb-1" xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14">
				<path id="Path_35" data-name="Path 35" d="M169.252,587v14l-12-6.789Z" transform="translate(-157.252 -587)" fill="#fff"/>
			</svg>
			<div class="inline-block">Back to Projects</div>
		</div>
		<!-- Fixed Sidebar Section -->
		<div class="nw-project-sidebar relative md:fixed right-0 z-30 text-white w-full md:max-w-2xl">
			<div class="p-0 md:pl-3 md:pb-3">
				<div class="h-full px-3 py-12 md:p-11">
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
			<div class="hidden md:flex mt-6 ml-6 gap-4">
				<img 
				width="91px" 
				height="91px" 
				src="~/assets/images/designs/Dot Block grey.svg" 
				alt="Dot Block Grey" 
				v-for="n in 5"
				:key="n">
			</div>
		</div>
		<div class="nw-project-wrap text-white flex flex-col md:flex-row gap-4 relative m-auto">


			<!-- Main Project Content Section -->
			<div class="nw-project-content w-full" style="max-width: 950px;">
				<div class="items-center mb-20 mt-12 cursor-pointer hover:opacity-90 transition-opacity hidden md:flex" @click="$router.push('/design')">
					<svg class="mr-4" xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14">
						<path id="Path_35" data-name="Path 35" d="M169.252,587v14l-12-6.789Z" transform="translate(-157.252 -587)" fill="#fff"/>
					</svg>
					Back To Projects
				</div>
				<div class="mt-20 md:mt-0"/>
				<component :is="design.component" :design="design" />
				<div class="mt-20 text-2xl"><h2>Similar Projects</h2></div>
				<div class="py-12 gap-4 hidden xs:flex flex-wrap">
					<design-card :design="sp" v-for="(sp, spi) in similarProjects" :key="spi"/>
				</div>

				<VueSlickCarousel class="py-12 block xs:hidden overflow-hidden" v-bind="settings">
					<design-card :design="sp" v-for="(sp, spi) in similarProjects" :key="spi"/>
				</VueSlickCarousel>
			</div>


			<!-- Fixed Sidebar Block Section -->
			<div class="nw-project-sidebar-block hidden md:block ml-auto md:max-w-2xl w-full"></div>
		</div>
	</div>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel';
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
		VueSlickCarousel,
	},
	data() {
		return {
			activeView: 'desktop',
			settings: {
				dots: false,
				arrows: false,
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 2000,
				swipeToSlide: true,
				draggable: true,
			},
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
			padding-left: 15px;
			padding-right: 15px;
			max-width: var(--nw-max-width);
			background-color: var(--main-color);
		}
		&-sidebar {
			max-width: 675px;
			margin-top: -10px;
			@media (--lg) {
				max-width: 575px;
			}
			@media (--md) {
				margin-top: 0px;
				max-width: 100%;
			}
			>div:first-child {
				border: 10px solid #2D2932;
				min-height: 750px;
				>div {
					background: #2D2932;
				}
				@media (--lg) {
					min-height: auto;
				}
			}
		}
	}
}
</style>