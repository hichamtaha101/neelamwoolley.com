<template>
<div class="nw-button nw-button--shadow">
	<slot/>
	<div class="nw-button__shadow"/>
</div>
</template>

<style lang="postcss">
.nw-button--shadow {
	position: relative;

	&::after,
	.nw-button__shadow::after {
		content: "";
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		margin: -5px;
		border: 1px solid transparent;
		display: block;
		transition: border 0.2s ease-in-out;
		border-radius: 3px;
	}

	&:hover {
		background-color: white;
		color: var(--secondary-color-3);

		i {
			color: var(--secondary-color-3);
		}

		&::after {
			border: 1px solid white;
		}

		.nw-button__shadow {
			transform: translate(-15px, 15px);
			visibility: visible;

			&::after {
				border: 2px solid black;
			}
		}
	}

	.nw-button__shadow {
		background: black;
		visibility: hidden;
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: -1;
		transition: all 0.3s ease-in-out;
	}
}
</style>