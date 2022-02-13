<template>
	<div class="nw-banner relative text-white"> 
		<img :src="require(`~/assets/images/${imagePath}`)" alt="Banner Image" class="fixed w-full">
		<img :src="require(`~/assets/images/${imagePath}`)" alt="Banner Image" class="invisible w-full"> <!-- Need this for img dimensions to push parent -->
		<div class="nw-banner__overlay opacity-60 absolute bottom-0" />
		<div class="nw-banner__border-bottom w-full absolute bottom-0 hidden lg:block" />
		<div class="nw-banner__learn-more absolute bottom-0 items-center hidden lg:flex">Scroll To Learn More <svg style="margin-bottom: 2px" class="ml-2" xmlns="http://www.w3.org/2000/svg" width="11" height="9" viewBox="0 0 11 9">
		<path id="Polygon_2" data-name="Polygon 2" d="M5.5,0,11,9H0Z" transform="translate(11 9) rotate(180)" fill="#fff"/>
		</svg>
		</div>
		<div class="nw-banner__title absolute text-2xl hidden lg:block">
			<div class="flex">
				<div class="parallelogram-right"></div>
				<div><i class="fa fa-pencil opacity-50 mr-2"></i>Featured <b>{{ featuredText }}</b></div>
			</div>
		</div>
		<div class="nw-banner__title--mobile absolute text-lg block lg:hidden text-center p-1 w-full">
			Featured <b>{{ featuredText }}</b>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		featuredText: { type: String, required: true, default: '' },
		imagePath: { type: String, required: false, default: '' },
	}
}
</script>
<style lang="postcss">
.parallelogram-right {
	width: 25px;
    height: 62px;
    position: absolute;
    left: -55px;
    transform: skew(-25deg);
    background: var(--secondary-color-3);
}
.nw-banner {
	&__border-bottom {
		border-bottom: 15px solid var(--secondary-color-3);
	}
	&__overlay {
		background: transparent linear-gradient(180deg, #000000A6 0%, #000000 100%) 0% 0% no-repeat padding-box;
		width: 100%;
		height: 100%;
	}
	&__learn-more {
		padding: 15px;
		padding-left: 155px;
		background-color: var(--secondary-color-3);
		&::after {
			content: '';
			width: 0;
			position: absolute;
			height: 100%;
			top: 0;
			right: -24px;
			border-bottom: 54px solid var(--secondary-color-3);
			border-right: 24px solid transparent;
		}
	}
	&__title {
		bottom: 0px;
		right: 0px;
		div {
			div:nth-child(2) {
				padding: 15px;
				padding-right: 185px;
				padding-left: 30px;
				background-color: var(--secondary-color-3);
				&::before {
					content: '';
					width: 0;
					position: absolute;
					height: 100%;
					bottom: 0px;
					left: -29px;
					border-bottom: 62px solid var(--secondary-color-3);
					border-left: 29px solid transparent;
				}
			}
		}
		&--mobile {
			bottom: 0px;
			background-color: var(--secondary-color-3);
		}
	}
}
</style>