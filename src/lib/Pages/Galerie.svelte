<script>
	import { onMount } from 'svelte';
	import PageContainer from '$lib/PageContainer/index.svelte';
	import { setupIntersectionWatcher } from '$lib/Utils/setupIntersectionWatcher';

	onMount(() => {
		setupIntersectionWatcher('intersection-watcher');
	});
</script>

<PageContainer id={'galerie'}>
	<div class="intersection-watcher mt-12 w-full h-12 bg-red-400" />
</PageContainer>
