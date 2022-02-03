<template>
  <div class="footer flex justify-center p-4 pt-24">
	<navigation-items />
  </div>
</template>
<script>
import NavigationItems from '~/components/NavigationItems.vue';
export default {
	components: { NavigationItems },
};
</script>

<style lang="postcss">
.footer {
	box-shadow: 1px 1px 1px 1px #d2d2d2;
}
</style>
