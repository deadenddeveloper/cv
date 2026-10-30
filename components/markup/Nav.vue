<template>
	<nav data-test="main-nav" :aria-label="$t('legal.common.navigationLabel')" class="min-w-0">
		<ul class="flex flex-row lg:flex-col lg:space-y-4">
			<li
				v-for="section in sections"
				:key="section.name"
				:data-test="`goto-${section.name}`"
				class="flex-shrink-0"
			>
				<nuxt-link
					:to="{ path: localePath('index'), hash: `#${section.name}` }"
					:aria-label="$t(section.title)"
					v-tooltip="{ content: $t(section.title), placement: 'left' }"
					class="w-10 h-10 flex items-center justify-center rounded-full text-2xl transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 text-skin-accent hover:text-skin-accent-hover"
					@click.native="handleClick($event, section.name)"
					><fa-icon :icon="section.icon"
				/></nuxt-link>
			</li>
		</ul>
	</nav>
</template>
<script>
import sections from '~/data/sections';
export default {
	data: () => ({ sections }),
	methods: {
		handleClick(event, section) {
			if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0)
				return;
			const home = this.localePath('index');
			if (this.$route.path.replace(/\/$/, '') !== home.replace(/\/$/, '')) return;
			const element = document.getElementById(section);
			if (element) {
				event.preventDefault();
				window.scrollTo({
					top: Math.max(0, element.getBoundingClientRect().top + window.pageYOffset - 100),
					behavior: 'smooth'
				});
			}
		}
	}
};
</script>
