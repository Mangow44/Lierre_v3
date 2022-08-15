<script>
	export let transition = false;
	export let hover = true;
	export let delay = 0;
	export let style = '';
	export let color = 'white';
</script>

<span
	class="block m-auto overflow-hidden
		{hover ? 'text-hover-effect' : ''}"
	style="transition: 0.3s ease;"
>
	<span
		class="block default-position 
			{transition ? 'sliding-text-anim' : ''}"
		style="color:{color};--delay:{delay}s;{style}"
	>
		<slot />
	</span>
</span>

<style>
	.default-position {
		transition: 0s;
		transform: translateY(120%);
	}

	.sliding-text-anim {
		transition: 0.7s ease-in;
		transition-delay: var(--delay);
		transform: translateY(0%);
	}

	.text-hover-effect:hover {
		cursor: pointer;
		transform: scale(1.2);
	}
</style>
