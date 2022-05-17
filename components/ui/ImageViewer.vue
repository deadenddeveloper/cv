<template>
  <button
    @click="openModal"
    class="focus:outline-none focus:ring-0"
  >
    <slot></slot>

    <portal to="modal-content">
      <div class="h-full w-full flex items-center justify-center">
        <fa-icon icon="spinner" class="absolute z-0 top-1/2 left-1/2 text-3xl text-skin-accent animate-spin" />
        <img class="z-50 max-h-full max-w-full" :src="src" alt="" />
      </div>
    </portal>
  </button>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: {
    src: String,
  },
  methods: {
    ...mapMutations({
      openModal: 'modal/open',
    })
  },
}
</script>
