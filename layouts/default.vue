<template>
  <div>
    <client-only>
      <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WWVQR63" height="0" width="0" style="display:none;visibility:hidden"></iframe>
      </noscript>
    </client-only>

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
      ],
      bodyAttrs: {
        class: this.isModalOpened ? 'overflow-hidden' : ''
      },
    }
  },
  computed: {
    isModalOpened () {
      return this.$store.state.modal.opened
    }
  },
}
</script>
