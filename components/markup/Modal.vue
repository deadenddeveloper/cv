<template>
  <transition name="pop" appear>
    <div
      v-if="modalOpened"
      class="z-50 fixed p-10 top-0 left-0 w-full h-full bg-black bg-opacity-90"
    >
      <div
        @click="closeModal"
        class="absolute top-1 right-1 text-2xl w-10 h-10 flex items-center justify-center cursor-pointer"
      >
        <fa-icon icon="times" />
      </div>

      <portal-target class="h-full w-full" name="modal-content" />
    </div>
  </transition>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  computed: {
    modalOpened() {
      return this.$store.state.modal.opened
    }
  },
  methods: {
    ...mapMutations({
      closeModal: 'modal/close',
    })
  },
}
</script>

<style>
.pop-enter-active,
.pop-leave-active {
  transition: transform 0.4s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.4s linear;
}

.pop-enter,
.pop-leave-to {
  opacity: 0;
  transform: scale(0.3) translateY(-50%);
}
</style>
