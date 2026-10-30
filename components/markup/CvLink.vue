<template>
  <div class="text-center no-print">
    <a
      @click.prevent="handleClick"
      class="inline-block h-10 px-5 py-1.5 text-lg text-skin-inverted rounded-full bg-skin-accent hover:bg-skin-accent-hover focus:outline-none focus:ring-2"
      data-test="cv-download"
      href=""
    >
      <fa-icon icon="file-pdf" />
      <span>{{ $t('cv.download') }}</span>
    </a>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      window.print();
    }
  }
}
</script>
