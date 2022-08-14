<script>
	import { onMount } from 'svelte';

	export let displayMenu = false;

	let screenWidth = 0;

	onMount(() => {
		const updateScreenWidth = () => {
			screenWidth = window.innerWidth;
		};
		window.addEventListener('resize', updateScreenWidth);
		updateScreenWidth();
	});
</script>

<div
	id="menu"
	class="fixed flex justify-center z-10 w-full h-full
		menu-transition
		{displayMenu ? 'display-menu' : 'hide-menu'}"
>
	<span
		id="menu-rect"
		class="absolute top-0 w-full"
		style="background-color: #0D0D0D;height:calc(100% - {screenWidth / 2}px);"
	/>
	<span
		id="menu-circle"
		class="absolute mx-auto bottom-0 w-full rounded-full"
		style="background-color: #0D0D0D;height:{screenWidth}px;"
	/>
</div>

<style>
	.menu-transition {
		transition: 1.1s ease;
	}

	.hide-menu {
		transform: translateY(-100%);
	}

	.display-menu {
		transform: translateY(0%);
	}
</style>
