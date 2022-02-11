<template>
<div class="nw-page homepage">

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
			<div class="nw-section__content grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 gap-7 text-white">
				<design-card :design="fd" v-for="(fd, index) in featuredDesigns" :key="index" />
			</div>
		</div>
		<div class="nw-section-divider-title pb-1">Scroll To Learn More <i class="fa fa-caret-down ml-1" /></div>
		<div class="nw-section-divider" />


		<!-- Featured Illustration Section -->
		<div class="nw-section">
			<section-title title="Featured" sub-title="Illustration" button-text="View All Projects" button-icon-class-names="fa fa-pencil mr-2" button-link="/illustration"/>
			<div class="nw-section__content grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-4">
				<div class="nw-section__content__illustration relative">
					<img class="h-full" :src="require(`~/assets/images/illustration/skull-girl-1.png`)" :alt="'illustration image'">
					<div 
						@click="$router.push('/illustration')" 
						class="absolute bottom-0 right-0 p-3 pl-2 cursor-pointer">
						<img src="~/assets/images/common/arrow-right-regular-grey.svg" alt="Arrow Right">
					</div>
				</div>
				<div class="nw-section__content__illustration relative">
					<img class="h-full" :src="require(`~/assets/images/illustration/dragon-1.png`)" :alt="'illustration image'">
					<div 
						@click="$router.push('/illustration')" 
						class="absolute bottom-0 right-0 p-3 pl-2 cursor-pointer">
						<img src="~/assets/images/common/arrow-right-regular-grey.svg" alt="Arrow Right">
					</div>
				</div>
				<div class="nw-section__content__illustration relative">
					<img class="h-full" :src="require(`~/assets/images/illustration/line-drawing-2.png`)" :alt="'illustration image'">
					<div
						@click="$router.push('/illustration')" 
						class="absolute bottom-0 right-0 p-3 pl-2 cursor-pointer">
						 <img src="~/assets/images/common/arrow-right-regular-grey.svg" alt="Arrow Right">
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
					<p>Welcome to my Portfolio website. Here you'll find the most recent examples of my project work. My skills include, UI/UX Design, digital and traditional illustration, motion graphics and front end development. I specialize in creating high fidelity prototypes that are development ready.</p>
					<p>My Portfolio is a blend of all my strengths: UI/UX design, Graphic Design and Illustration. I hope you enjoy it as much as I did creating it. Below you will find links to my current featured projects.</p>
				</div>
				<div class="nw-button mt-12" @click="$router.push('/design')">
						<i class="fa fa-square mr-5" />
						View Design Work
				</div>
			</div>
			<!-- Right Side -->
			<div class="nw-section-rectangles flex ml-auto justify-end">
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
		}
	},
	mounted() {
		!!window.location.hostname.match( /neelamwoolley|localhost/gi ) === false && ( this.quote = 'I specialize in creating infidelity BBW hentai illustrations that are self-gratification worthy.' )
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