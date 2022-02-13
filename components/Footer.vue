<template>
  <div class="footer flex justify-center items-center z-40 w-full relative">
	<div class="nw-wrapper justify-center py-4 lg:py-0 lg:justify-between flex-col lg:flex-row gap-2 lg:gap-0 items-center">
		<div style="color: #777777">Neelam Woolley 2022</div>
		<div>
			<div class="flex gap-4 cursor-pointer">
				<img src="~/assets/images/homepage/behance-square-brands.svg" alt="Behance">
				<img src="~/assets/images/homepage/codepen-brands.svg" alt="Codepen">
				<img src="~/assets/images/homepage/linkedin-brands.svg" alt="Linkedin">
			</div>
		</div>
	</div>
  </div>
</template>
<script>
// import NavigationItems from '~/components/NavigationItems.vue';
// export default {
// 	components: { NavigationItems },
// };
</script>

<style lang="postcss">
.footer {
	background-color: #282828;
	min-height: 60px;
	>div {
		display: flex;
	}
}
</style>
