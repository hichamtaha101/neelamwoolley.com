<template>
<div class="page homepage">
	<div class="hero-section-overlay absolute flex z-0">
		<img class="img-hero-path-13" src="~/assets/images/homepage/Path 13.svg" alt="Path 13">
		<img src="~/assets/images/homepage/Hero Shape 2.svg" alt="Hero Shape 2">

		<div class="absolute pl-24 h-full w-full flex justify-center items-center text-white text-lg">
			<div style="max-width: 540px">
				<i class="fa fa-quote-left" /><br/>
				{{ quote }}
			</div>
		</div>
	</div>
	<div class="hero-section p-4 z-10 text-white font-light">
		<div class="text-4xl pt-24 uppercase">Neelam Woolley</div>
		<div class="flex mt-4 relative hero-section__title">
			<div class="hero-section__title text-2xl flex items-center">Web Designer and Illustrator</div>
			<img class="img-hero-path-11" src="~/assets/images/homepage/Path 11.svg" alt="Path 11">
		</div>
		<div class="hero-section__dot-matrix flex items-center gap-8">
			<div class="nw-button"><i class="fa fa-square mr-5" />View Design Work</div>
			<div class="nw-button"><i class="fa fa-square mr-5" />View Illustration Work</div>
		</div>
  	</div>
	<div class="homepage-section z-10 relative">
		in-progress
	</div>
</div>
</template>
<script>
// import { mapGetters } from 'vuex';

export default {
	data() {
		return {
			quote: "I specialize in creating high fidelity prototypes that are development ready."
		}
	},
	mounted() {
		!['neelamwoolley.com', 'localhost'].includes( window.location.hostname ) && ( this.quote = 'I specialize in creating infidelity BBW hentai illustrations that are self-gratification worthy.' )
	}
};
</script>
<style lang="postcss">
.hero-section-overlay {
	top: 0px;
	right: 0px;
}
.nw-button {
	padding: 12px 15px;
    min-width: 265px;
    color: white;
    background-color: var(--secondary-color-3);
    max-height: 47px;
    border-radius: 2px;
    transition: all 0.2s;
    cursor: pointer;
	&:hover {
		background-color: #285da7;
	}
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
}

.hero-section {
	padding-left: 140px;
	padding-right: 140px;
	border-bottom: 15px solid #2F69BB;
	min-height: 676px;
	background: transparent linear-gradient(270deg, var(--secondary-color-1) 0%, var(--secondary-color-2) 32%, var(--secondary-color-2) 58%, var(--secondary-color-1) 100%) 0% 0% no-repeat padding-box;
	>div {
		left: -140px;
		position: relative;	
		padding-left: 140px;
	}
	>img {
		left: -140px;
		position: relative;	
	}
	&__title {
		z-index: 100;
		position: relative;
		left: -140px;
		height: 59px;
		max-width: 710px;
		background: url(~/assets/images/homepage/Path 10.svg);
		background-size: cover;
		color: #333333;
		padding-left: 140px;
	}
	&__dot-matrix {
		margin-top: 80px;
		height: 239px;
		max-width: 790px;
		background: url(~/assets/images/homepage/Dot Matrix.svg);
		background-size: cover;
	}
}

.homepage {
	&-section {
		background-color: var(--main-color);
		padding: 78px 140px;
	}
}
</style>