<template>
  <div class="flex justify-around" data-test="social-links">
    <a
      @click="() => gtmPushSocialLink(link.url)"
      v-for="link in links"
      :key="link.name"
      v-tooltip="link.name"
      :aria-label="link.name"
      :href="link.url"
      target="_blank"
      class="w-10 h-10 flex items-center justify-center rounded-full text-2xl transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 text-skin-accent hover:text-skin-accent-hover"
    >
      <fa-icon :icon="['fab', link.icon]" />
    </a>
  </div>
</template>

<script>
import links from '~/data/links'
import { gtmPushSocialLink } from "~/utils/gtm";

export default {
  data: () => ({
    links,
  }),
  methods: {
    gtmPushSocialLink,
  },
}
</script>
