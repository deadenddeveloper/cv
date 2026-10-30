<template>
	<div class="space-y-6 no-print">
		<section-header :title="$t('sections.hobbies')" icon="heart" />
		<div class="flex items-center space-x-4 text-skin-accent" aria-hidden="true">
			<fa-icon v-for="icon in icons" :key="icon" :icon="icon" />
		</div>
		<p class="text-base">{{ $t('hobbies.description') }}</p>
	</div>
</template>

<script>
export default {
	data: () => ({
		icons: ['futbol', 'music', 'gamepad', 'book-open', 'plane']
	})
};
</script>
