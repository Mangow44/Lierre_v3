<script>
	export let flexDirection = 'row';
	export let offsetTop = 0;
	export let offsetBot = 0;
	export let style = '';
	export let id = '';
</script>

<section
	{id}
	class="{flexDirection == 'row' ? 'flex' : 'flex flex-col'} w-full"
	style="min-height:calc(100vh - {offsetTop + offsetBot}rem);{style}"
>
	<slot />
</section>
