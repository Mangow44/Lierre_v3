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

	<SlidingContent
		animation={true}
		direction={-120}
		hover={false}
		delay={0.7}
		style={'position:absolute;bottom:1px;left:calc(50% - 4rem);height:auto;width:8rem;color:#FEBE63;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;'}
	>
		<div class="flex flex-col items-center hover:brightness-90 cursor-pointer">
			<p class="font-[morris] uppercase text-lg">explore</p>
			<img src="/pictures/scroll-down-5.svg" alt="scroll-down" class="w-7 h-auto" />
		</div>
	</SlidingContent>
</PageContainer>
