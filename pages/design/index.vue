<template>
	<div class="nw-page design">
		<banner featured-text="Design" image-path="designs/henesys-banner.png"/>

		<!-- Main Design Section -->
		<div class="nw-content-wrap z-20 relative">
			<div class="nw-section" v-for="(d, index) in designs" :key="index">
				<section-title :title="d.sectionTitle" :sub-title="d.sectionSubTitle" >
					<template #appendRight>
						<img width="69px" height="69px" src="~/assets/images/designs/Dot Block grey.svg" alt="Dot Block Grey">
					</template>
				</section-title>
				<div class="p-4 mt-12 nw-section__design flex justify-between gap-4">
					<div class="nw-section__design__content flex flex-col">
						<div>{{ d.boxTitle }}</div>
						<div class="pt-9"><i class="fa fa-tag mr-1" />{{ d.boxTag }}</div>
						<div />
						<div>{{ d.boxDescription }}</div>
						<div class="nw-button--inverse mt-auto ml-auto" @click="$router.push(d.boxLink)">
							<i class="fa fa-caret-right mr-4 text-xl" />
							<span class="relative" style="bottom: 2px;">View Project</span>
						</div>
					</div>
					<img v-if="d.boxImage" :src="require(`~/assets/images/designs/${d.boxImage}`)" :alt="d.boxImageAlt">
				</div>
	  		</div>
		</div>
	</div>
</template>
<script>
import SectionTitle from '~/components/SectionTitle.vue';
import Banner from '~/components/Banner.vue';
import designs from '~/assets/js/designs';

export default {
	components: { SectionTitle, Banner },
	data() { return { designs } },
	// Page specific SEO.
	head() {
		return {
			title: 'Design',
			meta: [{
				hid: 'description',
				name: 'description',
				content: 'Directory of UI/UX designs developed by Neelam Woolley throughout the years.',
			}],
		};
	},
}
</script>
<style lang="postcss">
.nw-section__design {
	height: 481px;
	background: transparent url('~/assets/images/designs/Design Background.svg') 100% 0% no-repeat padding-box;
	&__content {
		max-width: 673px;
		width: 100%;
		height: 287px;
		padding: 18px;
		background-color: var(--secondary-color-3);
		box-shadow: 0px 4px 7px #00000040;
		border-radius: 3px;
		color: white;

		div:nth-child(1) {
			padding: 4px 15px;
			background: white;
			border-radius: 3px;
			color: var(--secondary-color-3);
		}
		div:nth-child(3) {
			@add-mixin dotted-line-styles var(--secondary-color-3), #ffffff;
			padding-bottom: 15px;
			margin-top: 15px;
			opacity: 0.5;
		}
	}
}
</style>