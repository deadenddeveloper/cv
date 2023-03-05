<template>
  <div data-test="lang-switcher">
    <nuxt-link
      @click.native="() => gtmPushLangChange(locale.code)"
      v-for="locale in availableLocales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
      class="inline-block ml-2 rounded opacity-50 hover:opacity-100 focus:outline-none focus:ring-2 ring-blue-500"
      :class="{'opacity-100': currentLocale === locale}"
      :aria-label="locale.name"
      v-tooltip="locale.name"
    >
      <img
        class="inline rounded w-6 h-6"
        height="24"
        width="24"
        :alt="locale.name"
        :src="require(`~/assets/img/flags/${locale.code}.webp`)"
      />
    </nuxt-link>
  </div>
</template>

<script>
import { gtmPushLangChange } from "~/utils/gtm";

export default {
  methods: {
    gtmPushLangChange
  },
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
