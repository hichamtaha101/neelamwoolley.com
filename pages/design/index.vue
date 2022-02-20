<template>
	<div class="nw-page design">
		<banner featured-text="Design" image-path="designs/henesys-banner.png"/>

		<!-- Main Design Section -->
		<div class="nw-content-wrap z-20 relative ">
			<div class="nw-section" v-for="(d, index) in designs" :key="index">
				<section-title :title="d.sectionTitle" :sub-title="d.sectionSubTitle" >
					<template #appendRight>
						<img class="hidden md:block" width="69px" height="69px" src="~/assets/images/designs/Dot Block grey.svg" alt="Dot Block Grey" loading="lazy">
					</template>
				</section-title>
				<div class="py-4 pr-4 mt-12 nw-section__design flex justify-between gap-4">
					<div class="nw-section__design__content flex flex-col">
						<div>{{ d.boxTitle }}</div>
						<div class="pt-9"><i class="fa fa-tag mr-1" />{{ d.boxTag }}</div>
						<div />
						<div class="pb-4">{{ d.boxDescription }}</div>
						<div class="nw-button--inverse mt-auto ml-auto" @click="$router.push(d.boxLink)">
							<div class="flex items-center">
							<svg class="mr-4" xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14">
							<path d="M157.252,587v14l12-6.789Z" transform="translate(-157.252 -587)" fill="#2f69bb"/>
							</svg>
							<span>View Project</span>
							</div>
						</div>
					</div>
					<img v-if="d.boxImage" class="w-full" style="max-width: 793px" :src="require(`~/assets/images/designs/${d.boxImage}`)" :alt="d.boxImageAlt" loading="lazy">
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
	min-height: 481px;
	height: fit-content;
	background: transparent url('~/assets/images/designs/Design Background.svg') 100% 0% no-repeat padding-box;
	flex-direction: row;
	padding: 15px 15px 15px 0px;
	@media (--md) {
		background: none;
		flex-direction: column;
		padding: 0px;
	}
	&__content {
		max-width: 673px;
		width: 100%;
		min-height: 287px;
    	height: fit-content;
		padding: 18px;
		background-color: var(--secondary-color-3);
		box-shadow: 0px 4px 7px #00000040;
		border-radius: 3px;
		color: white;

		@media (--md) {
			max-width: 793px;
		}

		>div:nth-child(1) {
			padding: 4px 15px;
			background: white;
			border-radius: 3px;
			color: var(--secondary-color-3);
		}
		>div:nth-child(3) {
			@add-mixin dotted-line-styles var(--secondary-color-3), #ffffff;
			padding-bottom: 15px;
			margin-top: 15px;
			opacity: 0.5;
		}
	}
}
</style>