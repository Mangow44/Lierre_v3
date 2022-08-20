export const setupIntersectionWatcher = async (wclass) => {
	const watcher = document.querySelector(`.${wclass}`);

	const handleIntersect = (entries) => {
		// placer un tableau en paramètre, sa taille c'est l'index des images à récupérer
		if (entries[0].isIntersecting) {
			console.log('alimenter un foreach');
		}
	};

	new IntersectionObserver(handleIntersect).observe(watcher);
};
