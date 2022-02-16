<template>
<div class="nw-page homepage">

	<!-- Hero Section Overlay And Content -->
	<div class="hero-section-overlay absolute flex z-10 top-0 right-0">
		<img class="img-hero-path-13" src="~/assets/images/homepage/Path 13.svg" alt="Path 13">
		<img src="~/assets/images/homepage/Hero Shape 2.svg" alt="Hero Shape 2">
		<div class="absolute pl-24 h-full w-full flex justify-center items-center text-white text-lg z-10">
			<div style="max-width: 535px">
				<i class="fa fa-quote-left" /><br/>
				{{ quote }}
			</div>
		</div>
	</div>
	<div class="hero-section text-white font-light relative">
		<div class="nw-wrapper relative z-10" style="min-height: 661px">
			<div class="pt-12 xs:pt-24 uppercase hero-section__title">Neelam <span class="font-bold xs:font-normal">Woolley</span></div>
			<div class="text-xl xs:text-2xl flex mt-4 items-center hero-section__sub-title">
				<div class="flex items-center"><span>Web Designer and Illustrator</span></div>
				<img class="relative" src="~/assets/images/homepage/Path 11.svg" alt="Path 11">
			</div>
			<div class="flex flex-wrap items-center mt-12 xs:mt-40 gap-8">
				<div class="nw-button" @click="$router.push('/design')">
					<i class="fa fa-square mr-5" />
					View Design Work
				</div>
				<div class="nw-button" @click="$router.push('/illustration')">
					<i class="fa fa-square mr-5" />
					View Illustration Work
				</div>
			</div>
			<div class="hero-section__scroll-text absolute flex items-center">Scroll To Learn More <svg style="margin-bottom: 2px" class="ml-2" xmlns="http://www.w3.org/2000/svg" width="11" height="9" viewBox="0 0 11 9">
			<path id="Arrow_Down_Blue" data-name="Arrow Down Blue" d="M5.5,0,11,9H0Z" transform="translate(11 9) rotate(180)" fill="#2f69bb"/>
			</svg>
			</div>
			<img class="absolute right-4 z-10 bottom-4" src="~/assets/images/homepage/tes.png" alt="tes.png">
		</div>
		<div class="hero-section__sub-title--extended absolute" />
		<div class="hero-section__dot-matrix absolute" />
  	</div>
	  <div class="nw-content-wrap z-20 relative">

		<!-- Featured Design Section -->
		<div class="nw-section">
			<section-title title="Featured" sub-title="Web Designs" button-text="View All Projects" button-icon-class-names="fas fa-mouse mr-2" button-link="/design"/>
			<div class="nw-section__content flex flex-wrap gap-4 text-white">
				<design-card :design="fd" v-for="(fd, index) in featuredDesigns" :key="index" />
			</div>
		</div>
		<div class="nw-section-divider-title pb-1 flex justify-center md:justify-start">Scroll To Learn More <img src="~/assets/images/common/arrow-down-grey.svg" class="ml-2" alt="Arrow Down"></div>
		<div>
			<div class="nw-section-divider" />
		</div>


		<!-- Featured Illustration Section -->
		<div class="nw-section">
			<section-title title="Featured" sub-title="Illustration" button-text="View All Projects" button-icon-class-names="fa fa-pencil mr-2" button-link="/illustration"/>
			<div class="nw-section__content flex flex-wrap gap-4">
				<illustration-card
					v-for="( il, ilIndex ) in featuredIllustrations.slice(0, 3)"
					:illustration="il"
					:key="`il${ilIndex}`"/>
			</div>
	  	</div>
		<div class="nw-section-divider-title pb-1 flex justify-center md:justify-start">Scroll To Learn More <img src="~/assets/images/common/arrow-down-grey.svg" class="ml-2" alt="Arrow Down"></div>
		<div>
			<div class="nw-section-divider" />
		</div>
	
		<!-- About Myself Section -->
		<div class="flex pt-0 md:pt-20">
			<!-- Left Side -->
			<div class="pt-16 pb-14">
				<section-title title="A Little Bit" sub-title="About What I Do"/>
				<div class="mt-12 mb-4 text-white" style="max-width: 800px;">
					<p>Welcome to my Portfolio website. Here you'll find the most recent examples of my project work. My skills include, UI/UX Design, digital and traditional illustration, motion graphics and front end development. I specialize in creating high fidelity prototypes that are development ready.</p>
					<p class="mt-6">My Portfolio is a blend of all my strengths: UI/UX design, Graphic Design and Illustration. I hope you enjoy it as much as I did creating it. Below you will find links to my current featured projects.</p>
				</div>
				<div class="nw-button mt-12" @click="$router.push('/design')">
						<i class="fa fa-square mr-5" />
						View Design Work
				</div>
			</div>
			<!-- Right Side -->
			<div class="nw-section-rectangles--extended hidden md:block absolute right-0"/>
			<div class="nw-section-rectangles pl-4 ml-auto justify-end hidden md:flex">
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
import DesignCard from '~/components/DesignCard.vue';
import designs from '~/assets/js/designs';

export default {
	components: { SectionTitle, DesignCard },
	data() {
		return {
			quote: "I specialize in creating high fidelity prototypes that are development ready.",
			featuredDesigns: Object.values( designs ).filter( d => !!d.featured === true ),
			featuredIllustrations: [
				{ image: 'skull-girl-1.png' },
				{ image: 'dragon-1.png' },
				{ image: 'line-drawing-2.png' },
			]
		}
	}
};
</script>
<style lang="postcss">
.img {
	&-hero-path-13 {
		right: 625px;
		position: absolute;
		top: 0;
	}
}

.hero-section {
	border-bottom: 15px solid var(--secondary-color-3);
	min-height: 676px;
	background: transparent linear-gradient(270deg, var(--secondary-color-1) 0%, var(--secondary-color-2) 32%, var(--secondary-color-2) 58%, var(--secondary-color-1) 100%) 0% 0% no-repeat padding-box;
	&__title {
		font-size: 42px;
		@media (--xs) {
			font-size: 32px;
		}
	}
	&__sub-title {
		>div:first-child {
			color: #333333;
			height: 59px;
			background-color: white;
			max-width: 550px;
			width: 100%;
    		transform: skew(-24deg);
			span {
				transform: skew(24deg); /* un-skew text. */
			}
		}
		&--extended {
			top: 175px;
			height: 59px;
			width: 25%;
			background: white;
			@media (--xs) {
				top: 112px;
			}
		}
	}
	&__dot-matrix {
		background: url(~/assets/images/homepage/Dot Matrix.svg);
		top: 310px;
		width: 100%;
		height: 229px;
		max-width: 790px;
		background-size: cover;
	}
	&__scroll-text {
		color: var(--secondary-color-3);
		bottom: 0px;
	}
	&-overlay {
		@media (max-width: 1520px) {
			display: none;
		}
	}
	.nw-button {
		@media (--xs) {
			max-width: 100%;
		}
	}
}

.homepage {
	.nw {
		&-content-wrap > div:last-child { padding-right: 0px; }
		&-section-rectangles {
			&--extended {
				width: 25%;
				height: 478px;
				background-color: #3d73c0;
			}
			>div:nth-child(1) { 
				width: 20px;
				background-color: var(--secondary-color-3);
				margin-right: 18px;
			}
			>div:nth-child(2) {
				width: 40px;
				background-color: var(--secondary-color-3);
				margin-right: 18px;
			}
			>div:nth-child(3) { 
				width: 209px;
				background-color: var(--secondary-color-3); 
			}
			>div:nth-child(4) { 
				width: 509px;
				background-color: #3d73c0 
			}
		}
	}
}
</style>