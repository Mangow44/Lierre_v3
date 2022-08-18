<script>
	export let transition = false;
	export let animation = false;
	export let hover = true;
	export let delay = 0;
	export let direction = 120;
	export let style = '';
</script>

<span
	class="block m-auto overflow-hidden
		{hover ? 'text-hover-effect' : ''}"
	style="transition: 0.3s ease;{style}"
>
	<span
		class="block default-position 
			{transition ? 'sliding-text-transi' : ''}
			{animation ? 'sliding-text-anim' : ''}"
		style="--direction:{direction}%;--delay:{delay}s;"
	>
		<slot />
	</span>
</span>

<style>
	.default-position {
		transition: 0s;
		transform: translateY(var(--direction));
	}

	.sliding-text-transi {
		transition: 0.4s ease;
		transition-delay: var(--delay);
		transform: translateY(0%);
	}

	.sliding-text-anim {
		animation: slidTextAnim 1s ease forwards;
		animation-delay: var(--delay);
	}

	.text-hover-effect:hover {
		cursor: pointer;
		transform: scale(1.2);
	}

	@keyframes slidTextAnim {
		0% {
			transform: translateY(var(--direction));
		}
		100% {
			transform: translateY(0%);
		}
	}
</style>
