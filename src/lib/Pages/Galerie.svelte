<script>
	import { onMount } from 'svelte';
	import PageContainer from '$lib/PageContainer/index.svelte';

	let pictures = [];

	onMount(() => {
		const watcher = document.querySelector('.intersection-watcher');

		const handleIntersect = (entries) => {
			if (entries[0].isIntersecting) {
				pictures = [...pictures, 1];
			}
		};

		new IntersectionObserver(handleIntersect).observe(watcher);
	});
</script>

<PageContainer id={'galerie'} flexDirection={'col'}>
	{#each pictures as picture}
		<div class="w-full h-64 bg-black">OK</div>
	{/each}
	<div class="intersection-watcher mt-12 w-full h-12" />
</PageContainer>
