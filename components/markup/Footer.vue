<template>
	<footer class="text-center mt-24 pt-8 pb-8 no-print" data-test="site-footer">
		<div class="w-16 h-1 mx-auto rounded-full bg-skin-accent"></div>
		<nav :aria-label="$t('legal.common.footerLabel')" class="mt-6">
			<ul class="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
				<li v-for="page in pages" :key="page" class="min-w-0 max-w-full">
					<nuxt-link
						:to="localePath(page)"
						class="inline-block py-2 text-skin-accent underline break-words"
						:data-test="`footer-${page}`"
						>{{ $t(`legal.${page}.title`) }}</nuxt-link
					>
				</li>
			</ul>
		</nav>
		<div class="text-sm mt-4" v-html="$t('copyright')"></div>
	</footer>
</template>
<script>
export default { data: () => ({ pages: ['impressum', 'agb', 'datenschutz'] }) };
</script>
