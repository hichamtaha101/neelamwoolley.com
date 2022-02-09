<template>
<div class="page homepage">

	<!-- Hero Section Overlay And Content -->
	<div class="hero-section-overlay absolute flex z-10 top-0 right-0">
		<img class="img-hero-path-13" src="~/assets/images/homepage/Path 13.svg" alt="Path 13">
		<img src="~/assets/images/homepage/Hero Shape 2.svg" alt="Hero Shape 2">

		<div class="absolute pl-24 h-full w-full flex justify-center items-center text-white text-lg">
			<div style="max-width: 535px">
				<i class="fa fa-quote-left" /><br/>
				{{ quote }}
			</div>
		</div>
	</div>
	<div class="hero-section text-white font-light relative">
		<div class="text-4xl pt-24 uppercase">Neelam Woolley</div>
		<div class="flex mt-4 relative hero-section__title">
			<div class="hero-section__title text-2xl flex items-center">Web Designer and Illustrator</div>
			<img class="img-hero-path-11" src="~/assets/images/homepage/Path 11.svg" alt="Path 11">
		</div>
		<div class="hero-section__dot-matrix flex items-center gap-8">
			<div class="nw-button" @click="$router.push('/design')">
				<i class="fa fa-square mr-5" />
				View Design Work
			</div>
			<div class="nw-button" @click="$router.push('/illustration')">
				<i class="fa fa-square mr-5" />
				View Illustration Work
			</div>
		</div>
		<div class="hero-section__scroll-text absolute">Scroll To Learn More <i class="fa fa-caret-down pl-1"></i></div>
		<img class="img-hero-tes" src="~/assets/images/homepage/tes.png" alt="tes.png">
  	</div>
	  <div class="nw-content-wrap z-20 relative">

		<!-- Featured Design Section -->
		<div class="nw-section">
			<section-title title="Featured" sub-title="Web Designs" button-text="View All Projects" button-icon-class-names="fas fa-mouse mr-2" button-link="/design"/>
			<div class="nw-section__content grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-7 text-white">
				<div class="nw-section__content__design p-3 flex flex-col" v-for="(wd, index) in webDesigns" :key="index">
					<!-- <img :src="wd.imgSrc" :alt="wd.imgAlt"> -->
					<div class="uppercase">{{ wd.title }}</div>
					<div class="pt-2 text-sm"><i class="fa fa-tag mr-1" style="color: #3069bb"/>{{ wd.tag }}</div>
					<div class="pt-6 text-sm pb-4">{{ wd.briefDescription }}</div>
					<div class="nw-button nw-button--full-w items-center flex mt-auto" @click="$router.push(wd.link)">
						<i class="fa fa-caret-right mr-4 text-xl" />
						View Project
					</div>
				</div>
			</div>
		</div>
		<div class="nw-section-divider-title pb-1">Scroll To Learn More <i class="fa fa-caret-down ml-1" /></div>
		<div class="nw-section-divider" />


		<!-- Featured Illustration Section -->
		<div class="nw-section">
			<section-title title="Featured" sub-title="Illustration" button-text="View All Projects" button-icon-class-names="fa fa-pencil mr-2" button-link="/illustration"/>
			<div class="nw-section__content grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-4">
				<div class="nw-section__content__illustration relative">
					<div 
						@click="$router.push('/illustration')" 
						class="absolute bottom-0 right-0 p-3 pl-2 cursor-pointer">
						<img src="~/assets/images/arrow-right-regular-grey.svg" alt="Arrow Right">
					</div>
				</div>
				<div class="nw-section__content__illustration relative">
					<div 
						@click="$router.push('/illustration')" 
						class="absolute bottom-0 right-0 p-3 pl-2 cursor-pointer">
						<img src="~/assets/images/arrow-right-regular-grey.svg" alt="Arrow Right">
					</div>
				</div>
				<div class="nw-section__content__illustration relative">
					<div
						@click="$router.push('/illustration')" 
						class="absolute bottom-0 right-0 p-3 pl-2 cursor-pointer">
						 <img src="~/assets/images/arrow-right-regular-grey.svg" alt="Arrow Right">
					</div>
				</div>
			</div>
	  	</div>
		<div class="nw-section-divider-title pb-1">Scroll To Learn More <i class="fa fa-caret-down ml-1" /></div>
		<div class="nw-section-divider" />
	
		<!-- About Myself Section -->
		<div class="flex pt-20">
			<!-- Left Side -->
			<div class="pt-16 pb-14">
				<section-title title="A Little Bit" sub-title="About What I Do"/>
				<div class="mt-12 text-white" style="max-width: 800px;">
					<p>Welcome to my Portfolio website. Here you'll find the most recent examples of my project work. My skills include, UI/UX Design, digital and traditional illustration, motion Graphics and front end development. I specialize in creating high fidelity prototypes that are development ready.</p>
					<p>My Portfolio is a blend of all my strengths: UI/UX design, Graphic Design and Illustration. I hope you enjoy it as much as I did creating it. Below you will find links to my current featured projects.</p>
				</div>
				<div class="nw-button mt-12" @click="$router.push('/design')">
						<i class="fa fa-square mr-5" />
						View Design Work
				</div>
			</div>
			<!-- Right Side -->
			<div class="nw-section-rectangles flex ml-4 justify-end">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
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
			quote: "I specialize in creating high fidelity prototypes that are development ready.",
			webDesigns: [
				{ 
					title: 'Quick Mint | Website', 
					tag: 'UI/UX Design | Graphic Design',
					briefDescription: 'UI/UX website design for the Quickmint NFT e-commerce website.',
					imgSrc: '~/assets/images/homepage/',
					imgAlt: 'Quickmint Thumbnail',
					link: '/design/quick-mint'
				},
				{ 
					title: 'Henesys Group | SAAS', 
					tag: 'UI/UX Design | Graphic Design',
					briefDescription: 'UX/UI Design for the Henesys Group SaaS.',
					imgSrc: '~/assets/images/homepage/',
					imgAlt: 'Henesys Group Thumbnail',
					link: '/design/henesys-group'
				},
				{ 
					title: 'Vancouver Bitcoin | Website', 
					tag: 'UI/UX Design | Graphic Design',
					briefDescription: 'UI/UX website design for a Vancouver based cryptocurrency brokerage firm.',
					imgSrc: '~/assets/images/homepage/',
					imgAlt: 'Vancouver Bitcoin Thumbnail',
					link: '/design/vancouver-bitcoin'
				},
				{ 
					title: 'Bittreo | Web Application', 
					tag: 'UI/UX Design | Graphic Design',
					briefDescription: 'UI/UX design for a web based crypto currency brokerage application.',
					imgSrc: '~/assets/images/homepage/',
					imgAlt: 'Bittreo Thumbnail',
					link: '/design/bittreo'
				},
			],
		}
	},
	mounted() {
		!['neelamwoolley.com', 'localhost'].includes( window.location.hostname ) && ( this.quote = 'I specialize in creating infidelity BBW hentai illustrations that are self-gratification worthy.' )
	}
};
</script>



<style lang="postcss">
@define-mixin hero-section-position {
	left: -140px;
	padding-left: 140px;
	position: relative;
	z-index: 10;
}

.img {
	&-hero-path-13 {
		right: 625px;
		position: absolute;
		top: 0;
	}
	&-hero-path-11{
		position: relative;
		left: 35px;
	}
	&-hero-tes {
		position: absolute;
		right: 170px;
		bottom: 5px;
		z-index: 10;
	}
}

.hero-section {
	padding-left: 140px;
	padding-right: 140px;
	border-bottom: 15px solid var(--secondary-color-3);
	min-height: 676px;
	background: transparent linear-gradient(270deg, var(--secondary-color-1) 0%, var(--secondary-color-2) 32%, var(--secondary-color-2) 58%, var(--secondary-color-1) 100%) 0% 0% no-repeat padding-box;
	&__title {
		height: 59px;
		max-width: 710px;
		background: url(~/assets/images/homepage/Path 10.svg);
		background-size: cover;
		color: #333333;
		@add-mixin hero-section-position;
	}
	&__dot-matrix {
		margin-top: 80px;
		height: 239px;
		max-width: 790px;
		background: url(~/assets/images/homepage/Dot Matrix.svg);
		background-size: cover;
		@add-mixin hero-section-position;
	}
	&__scroll-text {
		color: var(--secondary-color-3);
		bottom: 0px;
	}
}

.homepage {
	.nw {
		&-content-wrap > div:last-child { padding-right: 0px; }
		&-section-rectangles {
			>div:nth-child(1) { 
				max-width: 20px;
				width: 100%;
				background-color: var(--secondary-color-3);
				margin-right: 18px;
			}
			>div:nth-child(2) {
				max-width: 40px;
				width: 100%;
				background-color: var(--secondary-color-3);
				margin-right: 18px;
			}
			>div:nth-child(3) { 
				max-width: 209px;
				width: 100%;
				background-color: var(--secondary-color-3); 
			}
			>div:nth-child(4) { 
				max-width: 509px;
				width: 100%;
				background-color: #3d73c0 
			}
		}
		&-section__content__illustration {
			&:nth-child(1) {
				background-image: url(~/assets/images/homepage/Skull girl 2.png);
				background-position: center top;
			}
			&:nth-child(2) {
				background-image: url(~/assets/images/homepage/DRAWING_2jpg-Recovered.png);
				background-position: center top;
			}
			&:nth-child(3) {
				background-image: url(~/assets/images/homepage/Doodle 13 - Kistune.png);
				background-position: center top;
			}
		}
	}
}
</style>