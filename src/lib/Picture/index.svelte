<script>
	import PageContainer from '$lib/PageContainer/index.svelte';

	export let src = '';
	export let alt = '';
	export let color = '';
</script>

<PageContainer id={alt} style={`background: ${color};`}>
	<img class="max-w-auto max-h-[100vh] m-auto fade-anim" {src} {alt} />
</PageContainer>

<style>
	.fade-anim {
		opacity: 0;
		animation: fade-in 1s ease forwards;
		animation-delay: 0.5s;
	}

	@keyframes fade-in {
		100% {
			opacity: 1;
		}
	}
</style>
