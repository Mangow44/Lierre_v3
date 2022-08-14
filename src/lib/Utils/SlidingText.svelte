<script>
	export let content = '';
	export let transition = false;
	export let delay = 0;
	export let style = '';
	export let color = 'white';
</script>

<span class="block m-auto overflow-hidden">
	<span
		class="block default-position {transition ? 'sliding-text-anim' : ''}"
		style="color:{color};--delay:{delay}s;{style}"
	>
		{content}
	</span>
</span>

<style>
	.default-position {
		transition: 0.5s ease-out;
		transform: translateY(120%);
	}

	.sliding-text-anim {
		transition: 0.5s ease-in;
		transition-delay: var(--delay);
		transform: translateY(0%);
	}
</style>
