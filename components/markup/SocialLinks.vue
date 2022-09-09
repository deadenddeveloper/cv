<template>
  <div class="flex justify-around">
    <a
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

export default {
  data: () => ({
    links,
  }),
}
</script>
