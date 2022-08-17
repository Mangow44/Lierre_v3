<script>
	export let onClick = () => {};
	export let height = 2.5;
	export let width = 3;

	let animation = false;
</script>

<div
	id="burger"
	class="absolute top-2.5 left-3 cursor-pointer z-20"
	style="height:{height}rem;width:{width}rem;"
	on:click={() => {
		onClick();
		animation = !animation;
	}}
>
	<span class="bar bar-1 {animation ? 'anim-bar-1' : ''}" />
	<span class="bar bar-2 {animation ? 'anim-bar-2' : ''}" />
</div>

<style>
	#burger {
		mix-blend-mode: exclusion;
	}

	#burger .bar {
		display: block;
		height: 0.17rem;
		width: 100%;
		transition: 0.5s ease;
		background-color: #ffffff;
	}

	#burger .bar-1 {
		margin-top: 30%;
	}

	#burger .bar-2 {
		margin-top: 10%;
	}

	.anim-bar-1 {
		transform: translateY(3.9px) rotate(135deg);
	}

	.anim-bar-2 {
		transform: translateY(-3.9px) rotate(-135deg);
	}
</style>
