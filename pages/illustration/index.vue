<template>
	<div class="nw-page illustration">
		<banner featured-text="Illustration" image-path="illustration/dragon-banner.png"/>

		<!-- Main Illustration Section -->
		<div class="nw-content-wrap z-20 relative">
			<div class="py-14" style="color: #777777"><i class="fa fa-info-circle mr-1" />Page Is Currently Under Construction and may lack functionality</div>
			<div class="nw-section-divider-title pb-1 flex items-center">Vector Content Below <svg class="ml-2" style="margin-bottom: 2px;" xmlns="http://www.w3.org/2000/svg" width="11" height="9" viewBox="0 0 11 9">
			<path data-name="Arrow Down" d="M5.5,0,11,9H0Z" transform="translate(11 9) rotate(180)" fill="#777"/>
			</svg>
			</div>
			<div>
				<div class="nw-section-divider" />
			</div>

			<!-- Vector -->
			<div class="nw-section" v-for="(vi, index) in vectorIllustrations" :key="`vi_${index}`">
				<section-title :title="vi.sectionTitle" :sub-title="vi.sectionSubTitle" >
					<template #appendRight>
						<div class="flex gap-7 justify-end">
							<img 
							width="69px" 
							height="69px" 
							src="~/assets/images/designs/Dot Block grey.svg" 
							alt="Dot Block Grey" 
							v-for="n in index + 1"
							:key="`vi_${n}_dot`">
						</div>
					</template>
				</section-title>

				<div class="nw-section__content grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-4">
					<illustration-card
					v-for="( vii, viii ) in vi.images.slice(0, 3)"
					:illustration="vii"
					:key="`vii_${viii}`"/>
					<div class="nw-section__content__illustration empty relative" v-for="vie in vi.images.length > 3 ? 0 : 3 - vi.images.length " :key="`vie_${vie}`" />
				</div>
			</div>

			<div class="nw-section-divider-title pb-1 flex items-center">Raster Content Below <svg class="ml-2" style="margin-bottom: 2px;" xmlns="http://www.w3.org/2000/svg" width="11" height="9" viewBox="0 0 11 9">
			<path data-name="Arrow Down" d="M5.5,0,11,9H0Z" transform="translate(11 9) rotate(180)" fill="#777"/>
			</svg>
			</div>
			<div>
				<div class="nw-section-divider" />
			</div>

			<!-- Raster -->
			<div class="nw-section" v-for="(ri, index) in rasterIllustrations" :key="`ri_${index}`">
				<section-title :title="ri.sectionTitle" :sub-title="ri.sectionSubTitle" >
					<template #appendRight>
						<div class="flex gap-7 justify-end">
							<img 
							width="69px" 
							height="69px" 
							src="~/assets/images/designs/Dot Block grey.svg" 
							alt="Dot Block Grey" 
							v-for="n in index + vectorIllustrations.length + 1"
							:key="`ri_${n}_dot`">
						</div>
					</template>
				</section-title>
				<div class="nw-section__content grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-4">
					<illustration-card
					v-for="( rii, riii ) in ri.images.slice(0, 3)" 
					:illustration="rii"
					:key="`ri_${riii}`" />
					<div class="nw-section__content__illustration empty relative" v-for="rie in ri.images.length > 3 ? 0 : 3 - ri.images.length " :key="`rie_${rie}`" />
				</div>
			</div>
		</div>

	</div>
</template>
<script>
import SectionTitle from '~/components/SectionTitle.vue';
import Banner from '~/components/Banner.vue';
import illustrations from '~/assets/js/illustrations';

export default {
	components: { SectionTitle, Banner },
	data() {
		return {
			vectorIllustrations: illustrations.filter( i => i.type === 'vector' ),
			rasterIllustrations: illustrations.filter( i => i.type === 'raster' ),
		}
	},
	head() {
		return {
			title: 'Illustration',
			// Page specific SEO.
			meta: [{
				hid: 'description',
				name: 'description',
				content: 'Directory of UI/UX illustrations developed by Neelam Woolley throughout the years.',
			}],
		};
	},
}
</script>
