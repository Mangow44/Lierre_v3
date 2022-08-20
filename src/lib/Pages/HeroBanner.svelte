<script>
	import PageContainer from '$lib/PageContainer/index.svelte';
	import Pulse from '$lib/Utils/Pulse.svelte';
	import SlidingContent from '$lib/Utils/SlidingContent.svelte';
</script>

<PageContainer
	id={'herobanner'}
	style={'background:linear-gradient(180deg, #C9D991 50%, #8AB793);position:relative;'}
>
	<img
		src="/pictures/banniere.png"
		alt="Lierre banniere"
		class="m-auto max-w-auto max-h-[100vh] 
            scaling-anim"
	/>

	<Pulse duration={5} delay={1.5} style={'position:absolute;bottom:3px;left:calc(50% - 1.25rem);'}>
		<SlidingContent
			animation={true}
			direction={-120}
			hover={false}
			delay={0.7}
			style={'color:#FEBE63;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;'}
		>
			<img
				src="/pictures/svg/scroll-down-6.svg"
				alt="scroll-down"
				class="w-10 h-auto cursor-pointer hover:brightness-90"
			/>
		</SlidingContent>
	</Pulse>
</PageContainer>
