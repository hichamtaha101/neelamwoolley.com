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