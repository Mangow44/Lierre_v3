<script>
	import Menu from '$lib/Menu/index.svelte';
	import Burger from '$lib/Burger/index.svelte';
	import '../app.css';

	let displayMenu = false;
</script>

<Menu {displayMenu} />
<Burger onClick={() => (displayMenu = !displayMenu)} />
<slot />
