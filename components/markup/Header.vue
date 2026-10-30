<template>
	<header class="sticky top-0 bg-skin-base px-2 z-30 no-print">
		<div class="flex py-4 items-center justify-between">
			<div>
				<nuxt-link :to="localePath('index')" :aria-label="$t('go_home')"><markup-logo /></nuxt-link>
			</div>
			<div>
				<lang-switcher />
			</div>
		</div>
	</header>
</template>
