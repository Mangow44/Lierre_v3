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
	class="fixed flex justify-center z-10 w-full
		menu-transition
		{displayMenu ? 'display-menu' : 'hide-menu'}"
	style="height:calc(100% + {screenWidth / 4}px);"
>
	<span
		id="menu-rect"
		class="absolute top-0 w-full"
		style="background-color: #0D0D0D;height:calc(100% - {screenWidth / 4}px);"
	/>
	<span
		id="menu-circle"
		class="absolute bottom-0 w-[110%] ellipse"
		style="background-color: #0D0D0D;height:{screenWidth / 2}px;"
	/>
</div>

<style>
	.menu-transition {
		transition: 1s ease;
	}

	.hide-menu {
		transform: translateY(-100%);
	}

	.display-menu {
		transform: translateY(0%);
	}

	.ellipse {
		border-radius: 50%;
	}
</style>
