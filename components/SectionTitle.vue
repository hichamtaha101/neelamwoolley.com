<template>
	<div :class="`nw-section__title text-white uppercase flex gap-4 justify-between items-center ${classNames}`">
		<div class="flex">
			<img src="~/assets/images/homepage/heading shapes.svg" alt="heading shape">
			<div class="pl-1">
				<h3 class="text-2xl font-light">{{ title }}</h3>
				<h2 class="text-3xl font-normal">{{ subTitle }}</h2>
			</div>
		</div>
		<div v-if="buttonText !== ''" class="nw-button" @click="$router.push( buttonLink )">
			<i v-if="buttonIconClassNames !== ''" :class="buttonIconClassNames"></i>
			{{ buttonText }}
		</div>
		<slot name="appendRight" />
	</div>
</template>
<script>
export default {
	props: {
		classNames: { type: String, required: false, default: '' },
		title: { type: String, required: true, default: '' },
		subTitle: { type: String, required: true, default: '' },
		buttonText: { type: String, required: false, default: '' },
		buttonLink: { type: String, required: false, default: '' },
		buttonIconClassNames: { type: String, required: false, default: '' },
	}
}
</script>