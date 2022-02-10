<template>
	<div style="background: #282828" class="nw-design-card p-3 flex flex-col">
		<img v-if="design.imgRef" :src="require(`~/assets/images/design/${design.imgRef}`)" :alt="design.imgAlt">
		<div class="uppercase mt-9">{{ design.title }}</div>
		<div class="pt-2 text-sm"><i class="fa fa-tag mr-1" style="color: #3069bb"/>{{ design.tag }}</div>
		<div class="pt-6 text-sm pb-4">{{ design.briefDescription }}</div>
		<div class="nw-button nw-button--full-w items-center flex mt-auto" @click="$router.push(design.link)">
			<i class="fa fa-caret-right mr-4 text-xl" />
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