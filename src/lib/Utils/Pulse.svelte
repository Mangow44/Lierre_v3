<script>
	export let duration = 0;
	export let delay = 0;
	export let style = '';
</script>

<span class="m-auto pulse-anim" style="--duration:{duration}s;--delay:{delay}s;{style}">
	<slot />
</span>

<style>
	.pulse-anim {
		animation: pulse var(--duration) ease infinite;
		animation-delay: var(--delay);
	}

	@keyframes pulse {
		0% {
			transform: scale(1);
		}
		25% {
			transform: scale(1.1);
		}
		50% {
			transform: scale(0.8);
		}
		75% {
			transform: scale(1.1);
		}
		100% {
			transform: scale(1);
		}
	}
</style>
