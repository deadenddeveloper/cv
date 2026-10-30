<template>
	<article class="legal-copy space-y-8" data-test="legal-page">
		<header>
			<h2 class="text-3xl lg:text-4xl text-skin-accent break-words">{{ document.title }}</h2>
			<p class="mt-4 text-sm">{{ $t('legal.common.updated', { date: '30.10.2026' }) }}</p>
		</header>
		<p>{{ document.intro }}</p>
		<section v-if="page !== 'agb'" class="space-y-3">
			<h3 class="text-xl text-skin-accent font-semibold">{{ document.contactTitle }}</h3>
			<markup-legal-contact />
		</section>
		<section v-for="section in document.sections" :key="section.title" class="space-y-3">
			<h3 class="text-xl text-skin-accent font-semibold">{{ section.title }}</h3>
			<p v-for="paragraph in section.paragraphs" :key="paragraph">{{ paragraph }}</p>
			<ul v-if="section.links" class="space-y-2">
				<li v-for="link in section.links" :key="link.href">
					<a :href="link.href" rel="noopener noreferrer" class="text-skin-accent underline">{{
						link.label
					}}</a>
				</li>
			</ul>
		</section>
	</article>
</template>
<script>
export default {
	props: {
		page: {
			type: String,
			required: true,
			validator: value => ['impressum', 'agb', 'datenschutz'].includes(value)
		}
	},
	computed: {
		document() {
			return this.$t(`legal.${this.page}`);
		}
	}
};
</script>
<style scoped>
.legal-copy {
	overflow-wrap: anywhere;
	line-height: 1.75;
}
</style>
