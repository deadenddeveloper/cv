<template>
  <h3 class="text-center lg:text-left text-4xl text-skin-accent">
    <fa-icon :icon="icon" />
    <span>{{ title }}</span>
  </h3>
</template>

<script>
export default {
  props: {
    title: String,
    icon: String,
  },
}
</script>
