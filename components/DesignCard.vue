<template>
	<div style="background: #282828" class="nw-design-card p-3 flex flex-col">
		<img v-if="design.imgRef" :src="require(`~/assets/images/designs/${design.imgRef}`)" :alt="design.imgAlt">
		<div class="uppercase mt-9">{{ design.title }}</div>
		<div class="pt-2 text-sm"><i class="fa fa-tag mr-1" style="color: #3069bb"/>{{ design.tag }}</div>
		<div class="pt-6 text-sm pb-4">{{ design.briefDescription }}</div>
		<div class="mt-6 nw-button nw-button--full-w items-center flex mt-auto" @click="$router.push(design.boxLink)">
			<svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" class="mr-4">
			<path id="Arrow-right" d="M157.252,587v14l12-6.789Z" transform="translate(-157.252 -587)" fill="#fff"/>
			</svg>

			View Project
		</div>
	</div>
</template>
<script>
export default {
	props: {
		design: { type: Object, required: true, default: () => ({}) }
	}
}
</script>
<style lang="postcss">
.nw-design-card {
	width: 100%;

	img {
		width: 100%;
	}
}
</style>