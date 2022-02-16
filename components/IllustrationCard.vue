<template>
	<div class="nw-section__content__illustration relative">
	<img class="h-full" :src="require(`~/assets/images/illustration/${illustration.image}`)" :alt="illustration.alt || 'illustration image'">
		<div class="arrow-wrapper">
			<div class="left-triangle left-triangle--right">
				<img class="arrow-image" src="~/assets/images/common/skinny-arrow-right-blue.svg" alt="Arrow Right">
				<div v-if="illustration.name" class="illustration-name left-triangle">{{ illustration.name }}</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: { illustration: { type: Object, required: true, default: () => ({})} }
}
</script>
<style lang="postcss">
.nw-section__content__illustration {
	max-width: 516px;
	background: #282828;
	background-position: center;
	overflow: hidden;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: rgba(0,0,0,0.75);
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
	}

	&:hover {

		&::before {
			opacity: 1;
		}

		.illustration-name {
			transform: translateX(30%);
		}
	}

	&.empty {
		background-image: url("~assets/images/illustration/empty-illustration.png");
		background-size: cover;
		background-position: center center;
		max-width: 516px;
		width: 100%;
	}

	.arrow-wrapper {
		@apply inline-flex absolute right-0 bottom-0 left-0 justify-end;
		height: 50px;
	}

	.left-triangle {
		&::before {
			content: "";
			width: 0;
			position: absolute;
			height: 100%;
			bottom: 0px;
			border-bottom: 48px solid #f4f4f4;
			border-left: 20px solid transparent;
		}

		&--right::before {
			right: 50px;
		}
	}

	.arrow-image {
		width: 50px;
		height: 50px;
		position: relative;
		background-color: #f4f4f4;
		z-index: 2;
		@apply p-3 pl-2;
	}

	.illustration-name {
		color: black;
		position: absolute;
		bottom: 0;
		top: 0;
		left: 0;
		right: 0;
		padding: 0 20px;
		transform: translateX(100%);
		transition: all 0.3s ease-in-out;
		background-color: #f4f4f4;
		z-index: 1;
		font-size: 20px;
		text-transform: uppercase;
		display: flex;
		align-items: center;

		&::before {
			left: -19.5px;
			border-bottom: 50px solid #f4f4f4;
			border-left: 20px solid transparent;
		}
	}
}
</style>