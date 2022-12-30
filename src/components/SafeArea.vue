<template>
  <view
    class="safe-area"
    :class="{
      'safe-area--top': position === 'both' || position === 'top',
      'safe-area--bottom': position === 'both' || position === 'bottom',
    }"
  >
    <slot></slot>
  </view>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    position?: 'top' | 'bottom' | 'both';
  }>(),
  {
    position: 'both',
  }
);
</script>

<style lang="scss">
.safe-area {
  &.safe-area--top {
    padding-top: constant(safe-area-inset-top);
    padding-top: env(safe-area-inset-top);
  }
  &.safe-area--bottom {
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
  }
}
</style>
