<script>
	import { onMount } from 'svelte';
	import SlidingContent from '$lib/Utils/SlidingContent.svelte';

	export let displayMenu = false;

	let screenWidth = 0;

	onMount(() => {
		const updateScreenWidth = () => {
			screenWidth = window.innerWidth;
		};
		window.addEventListener('resize', updateScreenWidth);
		updateScreenWidth();
	});

	let content = [
		{ name: 'Galerie' },
		{ name: 'Projets' },
		{ name: 'À propos' },
		{ name: 'Contact' }
	];
</script>

<div
	id="menu"
	class="fixed flex justify-center z-10 w-full
		menu-transition
		{displayMenu ? 'display-menu' : 'hide-menu'}"
	style="height:calc(100% + {screenWidth / 4}px);"
>
	<div
		id="menu-rect"
		class="flex flex-col absolute top-0 w-full z-10"
		style="background-color: #0D0D0D;height:calc(100% - {screenWidth / 4}px);"
	>
		{#each content as c, i}
			<SlidingContent
				transition={displayMenu}
				delay={0.37 + i / content.length}
				style={'color:white;font-size:25px;text-transform:uppercase;font-family:morris,sans-serif;'}
			>
				<p>{c.name}</p>
			</SlidingContent>
		{/each}
	</div>
	<span
		id="menu-circle"
		class="absolute bottom-0 w-[110%] ellipse"
		style="background-color: #0D0D0D;height:{screenWidth / 2}px;"
	/>
</div>

<style>
	.menu-transition {
		transition: 0.8s ease;
	}

	.hide-menu {
		transform: translateY(-105%);
	}

	.display-menu {
		transform: translateY(0%);
	}

	.ellipse {
		border-radius: 50%;
	}
</style>
