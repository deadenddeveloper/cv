<template>
  <div class="relative inline-block" :style="`height: ${height}px; width: ${width}px`">
    <transition name="fade">
      <img
        v-show="currentSrc && !loaded"
        v-bind="$attrs"
        :width="width"
        :height="height"
        :src="currentSrc"
        class="absolute t-0 l-0"
      />
    </transition>
    <transition name="fade">
      <img
        v-show="loaded"
        v-bind="$attrs"
        :width="width"
        :height="height"
        :src="src"
        @load="loaded = true"
        class="absolute t-0 l-0"
      />
    </transition>
  </div>
</template>

<script>
import { blurhashToBase64 } from "@/utils/image";

export default {
  data: () => ({
    loaded: false,
    currentSrc: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=',
  }),

  props: {
    blurhash: String,
    width: Number,
    height: Number,
    src: String,
  },

  mounted() {
    this.currentSrc = blurhashToBase64(this.blurhash, this.width, this.height)
  },
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
