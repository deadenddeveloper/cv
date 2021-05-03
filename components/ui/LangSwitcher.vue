<template>
  <div>
    <nuxt-link
      v-for="locale in availableLocales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
      class="inline-block ml-2 rounded border opacity-50 hover:opacity-100 focus:outline-none focus:ring-2"
      :class="{'opacity-100': currentLocale === locale}"
    >
      <img
        class="inline w-6 h-6"
        :src="require(`~/assets/img/flags/${locale.code}.png`)"
        :title="locale.name"
      />
    </nuxt-link>
  </div>
</template>

<script>
export default {
  computed: {
    currentLocale() {
      return this.$i18n.locales.filter(i => i.code === this.$i18n.locale)[0];
    },
    availableLocales() {
      return this.$i18n.locales;
    }
  }
}
</script>
