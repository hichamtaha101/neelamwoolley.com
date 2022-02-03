<template>
  <div class="header fixed-top">
    <div class="wrapper">
      <div class="logo">
        <a href="#home">Hicham Taha</a>
      </div>
		<navigation-items />
    </div>
  </div>
</template>
<script>
import NavigationItems from '~/components/NavigationItems.vue';
export default {
	components: { NavigationItems },
};
</script>

<style lang="postcss">
.header {
	background-color: white;
	border-width: 0px;
	box-shadow: 1px 1px 0px 0px #ececec;
	padding: 30px 15px;
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	z-index: 1030;

	.wrapper {
		display: flex;
		justify-content: space-between;
	}

	.logo {
		a { color: var(--main-color); }
		text-transform: uppercase;
		font-size: 16px;
		font-family: var(--font-header);
		letter-spacing: 1px;
	}
}
</style>
