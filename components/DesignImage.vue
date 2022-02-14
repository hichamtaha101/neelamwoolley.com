<template>
	<div class="relative nw-design-image">
		<img :src="require(`~/assets/images/designs/${image.imagePath}`)" :alt="image.label">
		<div class="absolute bottom-0 right-0 py-2 px-4 text-md md:text-xl text-left" :style="`min-width: ${labelMinWidth}px`">{{ image.label }}</div>
	</div>
</template>
<script>
export default {
	props: { 
		image: { type: Object, required: true, default: () => ({}) },
		labelMinWidth: { type: Number, required: false, default: 230 }
	},
}
</script>
<style lang="postcss">
.nw-design-image {
	>div:last-child {
		background-color: var(--secondary-color-3);
		@media (--md) {
			min-width: auto !important;
		}
		&::before {
			content: "";
			width: 0;
			position: absolute;
			height: 100%;
			bottom: 0px;
			left: -20px;
			border-bottom: 44px solid var(--secondary-color-3);
			border-left: 20px solid transparent;
			@media (--md) {
				border-bottom: 40px solid var(--secondary-color-3);
			}
		}
	}
}
</style>