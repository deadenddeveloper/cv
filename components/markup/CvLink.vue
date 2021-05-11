<template>
  <div class="text-center">
    <a
      class="inline-block h-10 px-5 py-1.5 text-lg text-skin-inverted rounded-full bg-skin-accent hover:bg-skin-accent-hover focus:outline-none focus:ring-2"
      :download="`romanbobrik_${currentLocale.code}.pdf`"
      target="_blank"
      :href="`cv/romanbobrik_${currentLocale.code}.pdf`"
    >
      <fa-icon icon="file-pdf" />
      <span>{{ $t('cv.download') }}</span>
    </a>
  </div>
</template>

<script>
export default {
  computed: {
    currentLocale() {
      return this.$i18n.locales.filter(i => i.code === this.$i18n.locale)[0];
    },
  }
}
</script>
