<template>
  <div
    class="flex align-top text-skin-inverted px-6 py-2 border-0 rounded relative mb-4"
    :class="`bg-skin-${type}`"
    role="alert"
  >
    <span class="text-xl inline-block mr-5">
      <fa-icon v-if="icon" :icon="icon" />
      <fa-icon v-if="!icon" :icon="defaultIcon" />
    </span>
    <span class="inline-block"><slot></slot></span>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'info',
      validator: function (value) {
        return ['info', 'success', 'warning', 'danger'].indexOf(value) !== -1
      }
    },
    icon: String,
  },
  computed: {
    defaultIcon() {
      return {
        info: 'info-circle',
        success: 'check',
        warning: 'exclamation-circle',
        danger: 'skull-crossbones',
      }[this.type];
    },
  }
}
</script>
