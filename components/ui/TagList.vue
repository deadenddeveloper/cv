<template>
  <div class="space-x-2">
      <span
        v-for="tag in tags"
        :key="tag"
        class="text-sm bg-skin-accent text-skin-inverted px-2 py-0.5 rounded-full whitespace-nowrap"
      >{{ tag }}</span>
  </div>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      default: [],
    },
  },
}
</script>
