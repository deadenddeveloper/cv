<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  head() {
    let currentPage = this.$nuxt.$route.name ? this.$nuxt.$route.name.split('__')[0] : 'index';

    return {
      title: this.$t('meta.' + currentPage + '.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('meta.' + currentPage + '.description')
        }
      ]
    }
  }
}
</script>
