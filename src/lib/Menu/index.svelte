<script>
	export let displayMenu = false;
</script>

<img
	class="fixed z-10 h-[150%] w-full 
        object-cover menu-transition
        {displayMenu ? 'display-menu' : 'hide-menu'}"
	src="/svg/menu.svg"
	alt="menu svg"
/>

<style>
	.menu-transition {
		transition: 1.1s ease;
	}

	.hide-menu {
		transform: translateY(-100%);
	}

	.display-menu {
		transform: translateY(-10%);
	}
</style>
