<script>
	export let flexDirection = 'row';
	export let offsetTop = 0;
	export let offsetBot = 0;
	export let background = 'white';
</script>

<div
	class="{flexDirection == 'row' ? 'flex' : 'flex flex-col'} w-full"
	style="height:calc(100vh - {offsetTop + offsetBot}rem);
		background:{background};"
>
	<slot />
</div>
