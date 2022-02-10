<template>
  <div class="nw-page not-found">
    <div class="z-20 relative text-white flex items-center flex-col justify-center h-full">
		<img src="~/assets/images/common/error.svg" alt="Error Cog">
		<h1 class="mt-6 text-4xl">Oops, something went wrong!</h1>
      	<h3 class="mt-4 text-2xl font-light">Error Code 404 Page Not Found</h3>
		<div class="nw-button mt-6 text-center" @click="$router.push('/')">Return Home</div>
    </div>
  </div>
</template>