export default function(to, from, savedPosition) {
	const nuxt = window.$nuxt;
	if (to.path === from.path) {
		nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
	}
	return new Promise(resolve => {
		nuxt.$once('triggerScroll', () => {
			if (savedPosition) return resolve(savedPosition);
			if (to.hash && document.getElementById(to.hash.slice(1))) {
				return resolve({ selector: to.hash, offset: { x: 0, y: 100 }, behavior: 'smooth' });
			}
			resolve({ x: 0, y: 0 });
		});
	});
}
