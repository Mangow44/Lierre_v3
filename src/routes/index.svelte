<script>
	import PageContainer from '$lib/PageContainer/index.svelte';
	import SlidingContent from '$lib/Utils/SlidingContent.svelte';
</script>

<PageContainer
	style={'background:linear-gradient(180deg, #C9D991 50%, #8AB793);position:relative;'}
>
	<img
		src="/pictures/banniere.png"
		alt="Lierre banniere"
		class="m-auto max-w-auto max-h-[100%] 
            scaling-anim"
	/>

	<!-- TODO -->
	<SlidingContent
		animation={true}
		direction={-120}
		hover={false}
		delay={1}
		style={'position:absolute;top:0;left:0;'}
	>
		<p>explore</p>
	</SlidingContent>
</PageContainer>
