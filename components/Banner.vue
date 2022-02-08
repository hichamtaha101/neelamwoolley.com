<template>
	<div class="nw-banner relative text-white" :style="imageUrl ? 'background-image: url(/illustration-banner.png)' : '' ">
		<div class="nw-banner__learn-more absolute">Scroll To Learn More <i class="fa fa-caret-down" /></div>
		<div class="nw-banner__title absolute text-2xl">
			<div class="flex">
				<div class="parallelogram-right"></div>
				<div><i class="fa fa-pencil opacity-50 mr-2"></i>Featured <b>{{ featuredText }}</b></div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		featuredText: { type: String, required: true, default: '' },
		imageUrl: { type: String, required: false, default: '' },
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
	height: 675px;
	border-bottom: 15px solid var(--secondary-color-3);
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	&__learn-more {
		bottom: 0px;
		padding: 15px;
		padding-left: 155px;
		background-color: var(--secondary-color-3);
		&::after {
			content: '';
			width: 0;
			position: absolute;
			height: 100%;
			bottom: 0px;
			right: -24px;
			border-bottom: 54px solid var(--secondary-color-3);
			border-right: 24px solid transparent;
		}
	}
	&__title {
		bottom: 0px;
		right: 0px;
		div {
			div:nth-child(1) {

			}
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
	}
}
</style>