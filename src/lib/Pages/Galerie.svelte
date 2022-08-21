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

		new IntersectionObserver(handleIntersect, { threshold: 0.01 }).observe(watcher);
	});
</script>

<PageContainer id={'galerie'} flexDirection={'col'} style={'min-height:40px;'}>
	{#each picturesArray as picture}
		<Picture {...picture} />
	{/each}

	<!-- mettre le footer dedans ou transformer le footer en intersection -->
	<div class="intersection-watcher bg-gray-900 w-full h-10" />
</PageContainer>
