<template>
  <view
    :class="{
      [className('__safe-area')]: true,
      [className('__safe-area--top')]:
        position === 'both' || position === 'top',
      [className('__safe-area--bottom')]:
        position === 'both' || position === 'bottom',
    }"
  >
    <slot></slot>
  </view>
</template>

<script setup lang="ts">
import { useClassName } from '@hooks/index';

const { className } = useClassName('_mx');

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
$module-prefix: '_mx';
.#{$module-prefix} {
  &__safe-area {
    &--top {
      padding-top: constant(safe-area-inset-top);
      padding-top: env(safe-area-inset-top);
    }
    &--bottom {
      padding-bottom: constant(safe-area-inset-bottom);
      padding-bottom: env(safe-area-inset-bottom);
    }
  }
}
</style>
