<template>
	<div class="container mx-auto px-4 page-shell">
		<markup-header />
		<div class="page-columns">
			<aside class="min-w-0" data-test="profile-sidebar">
				<div class="profile-content text-center space-y-8">
					<img
						:src="require('~/assets/img/me.webp')"
						width="180"
						height="180"
						class="inline-block rounded-full"
						alt="Roman Meyer"
					/>
					<h1 class="text-skin-accent text-4xl">{{ $t('name') }}</h1>
					<h2 class="text-2xl">{{ $t('post') }}</h2>
					<p class="text-sm" data-test="availability">{{ $t('availability') }}</p>
					<markup-social-links />
					<cv-link v-if="isHome" />
					<nuxt-link
						v-else
						:to="localePath('index')"
						class="inline-block text-skin-accent underline no-print"
						>{{ $t('legal.common.backToCv') }}</nuxt-link
					>
				</div>
			</aside>
			<main class="min-w-0 mt-3 lg:mt-0">
				<slot />
				<markup-footer />
			</main>
			<div class="section-sidebar bg-skin-base border-skin-base no-print">
				<markup-nav />
				<back-to-top />
			</div>
		</div>
		<markup-modal />
	</div>
</template>

<script>
import CvLink from '~/components/markup/CvLink.vue';
export default {
	components: { CvLink },
	computed: {
		isHome() {
			return this.$route.path.replace(/\/$/, '') === this.localePath('index').replace(/\/$/, '');
		}
	}
};
</script>

<style scoped>
.page-shell {
	padding-bottom: calc(5rem + env(safe-area-inset-bottom, 0px));
}
.page-columns {
	min-width: 0;
}
.profile-content {
	padding: 0.5rem 0 3rem;
}
.section-sidebar {
	position: fixed;
	z-index: 30;
	bottom: 0;
	left: 0;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-top-width: 1px;
	padding: 0.25rem 0 max(0.25rem, env(safe-area-inset-bottom, 0px));
}
@media (min-width: 1024px) {
	.page-shell {
		padding-bottom: 0;
	}
	.page-columns {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(0, 2fr) 3rem;
		gap: 2rem;
		align-items: start;
	}
	.profile-content {
		position: sticky;
		top: 6rem;
		padding: 0.5rem 0 2rem;
	}
	aside {
		align-self: stretch;
	}
	.section-sidebar {
		position: sticky;
		top: 6rem;
		left: auto;
		bottom: auto;
		width: 3rem;
		height: calc(100vh - 6rem);
		flex-direction: column;
		border-top: 0;
		padding: 0 0 1rem;
	}
}
@media print {
	.page-shell {
		padding-bottom: 0;
	}
}
</style>
