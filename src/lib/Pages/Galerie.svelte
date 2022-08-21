<script>
	import { onMount } from 'svelte';
	import { pictures } from '$lib/Data/pictures';
	import PageContainer from '$lib/PageContainer/index.svelte';
	import Picture from '$lib/Picture/index.svelte';

	let picturesArray = [];

	onMount(() => {
		const watcher = document.querySelector('.intersection-watcher');

		const handleIntersect = (entries) => {
			if (entries[0].isIntersecting) {
				if (pictures[picturesArray.length])
					picturesArray = [...picturesArray, pictures[picturesArray.length]];
			}
		};

		new IntersectionObserver(handleIntersect).observe(watcher);
	});
</script>

<PageContainer id={'galerie'} flexDirection={'col'} style={'position:relative;min-height:40px;'}>
	{#each picturesArray as picture}
		<Picture {...picture} />
	{/each}

	{#if pictures[picturesArray.length]}
		<div class="intersection-watcher absolute bottom-0 w-full h-10" />
	{/if}
</PageContainer>
