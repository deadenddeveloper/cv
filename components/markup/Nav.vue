<template>
  <div class="flex flex-row lg:flex-col space-y-0 lg:space-y-4">
    <div
      v-for="section in sections"
      :key="section.title"
      class="w-10 h-10 flex items-center justify-center rounded-full text-2xl transition-colors duration-200 cursor-pointer focus:outline-none text-skin-accent hover:text-skin-accent-hover"
      v-tooltip="{content: $t(section.title), placement: 'left'}"
      @click="$emit('goto', section.name)"
    >
      <fa-icon :icon="section.icon" />
    </div>
  </div>
</template>

<script>
import sections from '~/data/sections'

export default {
  data: () => ({
    sections,
  }),
}
</script>
