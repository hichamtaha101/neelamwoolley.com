<template>
	<div class="nw-page illustration">
		<banner featured-text="Illustration" image-url="~/assets/images/illustration/dragon-header.png"/>

		<!-- Main Illustration Section -->
		<div class="nw-content-wrap z-20 relative">
			<div class="py-14" style="color: #777777"><i class="fa fa-info-circle mr-1" />Page Is Currently Under Construction and may lack functionality</div>
			<div class="nw-section-divider-title pb-1">Vector Content Below <i class="fa fa-caret-down ml-1" /></div>
			<div class="nw-section-divider" />

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
					<div 
					class="nw-section__content__illustration relative"
					v-for="( vii, viii ) in vi.images.slice(0, 3)"
					:key="`vii_${viii}`">
					<img class="h-full" :src="require(`~/assets/images/illustration/${vii.image}`)" :alt="vii.alt || 'illustration image'">
						<div 
							class="absolute bottom-0 right-0 p-3 pl-2 cursor-pointer">
							<img src="~/assets/images/common/arrow-right-regular-grey.svg" alt="Arrow Right">
						</div>
					</div>
					<div class="nw-section__content__illustration empty relative" v-for="vie in vi.images.length > 3 ? 0 : 3 - vi.images.length " :key="`vie_${vie}`" />
				</div>
			</div>

			<div class="nw-section-divider-title pb-1">Raster Content Below <i class="fa fa-caret-down ml-1" /></div>
			<div class="nw-section-divider" />

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
					<div
					class="nw-section__content__illustration relative" 
					v-for="( rii, riii ) in ri.images.slice(0, 3)" 
					:key="`ri_${riii}`">
					<img class="h-full" :src="require(`~/assets/images/illustration/${rii.image}`)" :alt="rii.alt || 'illustration image'">
						<div 
							class="absolute bottom-0 right-0 p-3 pl-2 cursor-pointer">
							<img src="~/assets/images/common/arrow-right-regular-grey.svg" alt="Arrow Right">
						</div>
					</div>
					<div class="nw-section__content__illustration empty relative" v-for="rie in ri.images.length > 3 ? 0 : 3 - ri.images.length " :key="`rie_${rie}`" />
				</div>
			</div>
		</div>

	</div>
</template>
<script>
import SectionTitle from '~/components/SectionTitle.vue';
import Banner from '~/components/Banner.vue';

export default {
	components: { SectionTitle, Banner },
	data() {
		return {
			vectorIllustrations: [
				{
					sectionTitle: 'Vector',
					sectionSubTitle: 'Crocodiles',
					images: [
						{ image: 'crocodile-1.png' },
						{ image: 'crocodile-2.png' },
						{ image: 'crocodile-3.png' },
					]
				},
				{
					sectionTitle: 'Vector',
					sectionSubTitle: 'Environments',
					images: [
						{ image: 'environment-1.png' },
						{ image: 'environment-2.png' },
						{ image: 'environment-3.png' },
					]
				}
			],
			rasterIllustrations: [
				{
					sectionTitle: 'Dragon',
					sectionSubTitle: 'Series',
					images: [
						{ image: 'dragon-1.png' },
						{ image: 'dragon-2.png' },
					]
				},
				{
					sectionTitle: 'Skull',
					sectionSubTitle: 'Series',
					images: [
						{ image: 'skull-girl-1.png' },
						{ image: 'skull-girl-2.png' },
					]
				},
				{
					sectionTitle: 'Line',
					sectionSubTitle: 'Drawings',
					images: [
						{ image: 'line-drawing-1.png' },
						{ image: 'line-drawing-2.png' },
					]
				},
				{
					sectionTitle: 'Traditional',
					sectionSubTitle: 'Line Drawings',
					images: [
						{ image: 'traditional-line-drawing-1.png' }
					]
				},
			]
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
