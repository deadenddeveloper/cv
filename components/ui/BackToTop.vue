<template>
  <div
    class="w-10 h-10 flex items-center justify-center rounded-full text-2xl transition-colors duration-200 cursor-pointer focus:outline-none text-skin-accent hover:text-skin-accent-hover no-print"
    @click="backToTop"
    v-tooltip="$t('back_to_top')"
    data-test="back-to-top"
  >
    <fa-icon icon="chevron-up" />
  </div>
</template>

<script>
export default {
  methods: {
    backToTop () {
      window.scroll({top: 0, left: 0, behavior: 'smooth'});
    },
  },
}
</script>
