<template>
	<div class="nw-section__content__illustration relative">
	<img class="h-full" :src="require(`~/assets/images/illustration/${illustration.image}`)" :alt="illustration.alt || 'illustration image'">
		<div 
			class="absolute bottom-0 right-0 p-3 pl-2 cursor-pointer">
			<img src="~/assets/images/common/skinny-arrow-right-blue.svg" alt="Arrow Right">
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
			div {
				background-color: #f4f4f4;
				&::before {
					content: "";
					width: 0;
					position: absolute;
					height: 100%;
					bottom: 0px;
					left: -20px;
					border-bottom: 48px solid #f4f4f4;
					border-left: 20px solid transparent;
				}
			}
			&.empty {
				background-image: url("~assets/images/illustration/empty-illustration.png");
				background-size: cover;
				background-position: center center;
				max-width: 516px;
    			width: 100%;
			}
		}
</style>