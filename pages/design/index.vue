<template>
	<div class="page design">
		<banner featured-text="Design"/>

		<!-- Main Design Section -->
		<div class="nw-content-wrap z-20 relative">
			<div class="nw-section" v-for="(d, index) in designs" :key="index">
				<section-title :title="d.sectionTitle" :sub-title="d.sectionSubTitle" >
					<template #appendRight>
						<img width="69px" height="69px" src="~/assets/images/design/Dot Block grey.svg" alt="Dot Block Grey">
					</template>
				</section-title>
				<div class="p-4 mt-12 nw-section__design flex justify-between">
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
					<!-- <div>Image</div> -->
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
			designs: [
				{ 
					sectionTitle: 'Website',
					sectionSubTitle: 'Quickmint',
					boxTitle: 'QUCIK MINT | NFT | WEBSITE',
					boxTag: 'UI/UX Design | Graphic Design | E-Commerce',
					boxDescription: 'UI/UX website design for the Quickmint NFT e-commerce website. Plus Logo/Branding Design and NFT Illustration series.',
					boxLink: '/design/quick-mint',
					boxImage: '',
				},
				{ 
					sectionTitle: 'Web Application',
					sectionSubTitle: 'HENESYS GROUP',
					boxTitle: 'HENESYS GROUP | SAAS',
					boxTag: 'UI/UX Design | Graphic Design | E-Commerce',
					boxDescription: 'UX/UI Design for the Henesys Group SaaS. Plus Graphic Design for web.',
					boxLink: '/design/henesys-group',
					boxImage: '',
				},
				{ 
					sectionTitle: 'Website',
					sectionSubTitle: 'GLADIATOR BIKES',
					boxTitle: 'GLADIATOR BIKES | WEBSITE',
					boxTag: 'UI/UX Design | Graphic Design | E-Commerce',
					boxDescription: 'UI/UX website design for a Vancouver based bicycle company.. Plus Logo/Branding Design.',
					boxLink: '/design/gladiator-bikes',
					boxImage: '',
				},
				{ 
					sectionTitle: 'Website',
					sectionSubTitle: 'SHAPESHIFTERS',
					boxTitle: 'SHAPESHIFTERS | WEBSITE',
					boxTag: 'UI/UX Design | Graphic DesigN',
					boxDescription: 'UI/UX website design for a Vancouver based Visual FX studio.. Plus Logo/Branding Design.',
					boxLink: '/design/shape-shifters',
					boxImage: '',
				},
				{ 
					sectionTitle: 'Website',
					sectionSubTitle: 'VANCOUVER BITCOIN',
					boxTitle: 'VANCOUVER BITCOIN | WEBSITE',
					boxTag: 'UI/UX Design | Graphic Design',
					boxDescription: 'UI/UX website design for a Vancouver based cryptocurrency brokerage firm. Plus Graphic Design for web.',
					boxLink: '/design/vancouver-bitcoin',
					boxImage: '',
				},
				{ 
					sectionTitle: 'Web Application',
					sectionSubTitle: 'BITTREO',
					boxTitle: 'BITTREO | BROKERAGE | WEB APPLICATION',
					boxTag: 'UI/UX Design | Graphic Design',
					boxDescription: 'UI/UX design for a web based crypto currency brokerage application. Plus Graphic Design for web.',
					boxLink: '/design/bittreo',
					boxImage: '',
				},
				{ 
					sectionTitle: 'Website',
					sectionSubTitle: 'OCIN | ECO SWIMWEAR',
					boxTitle: 'OCIN | ECO SWIMWEAR | WEBSITE',
					boxTag: 'UI/UX Design | E-Commerce',
					boxDescription: 'UI/UX design for an e-commerce website. Front end design for custom Shopify theme.',
					boxLink: '/design/eco-swimwear',
					boxImage: '',
				},
				{ 
					sectionTitle: 'Website',
					sectionSubTitle: 'RODEN GRAY',
					boxTitle: 'RODEN GRAY | DESIGNER MENSWEAR | WEBSITE',
					boxTag: 'UI Design | Web Design | E-Commerce',
					boxDescription: 'UI/UX design for an e-commerce website. Front end design for custom Shopify theme.',
					boxLink: '/design/roden-gray',
					boxImage: '',
				},
			]
		}
	}
}
</script>
<style lang="postcss">
.nw-section__design {
	height: 481px;
	background: transparent url('~/assets/images/design/Design Background.svg') 100% 0% no-repeat padding-box;
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
			    background-color: var(--secondary-color-3);
				background-image: linear-gradient(to right, #ffffff 33%, rgba(255,255,255,0) 0%);
				background-position: top;
				background-size: 8px 3px;
				background-repeat: repeat-x;
				height: 3px;
				padding-bottom: 15px;
				margin-top: 15px;
				opacity: 0.5;
		}
	}
}
</style>