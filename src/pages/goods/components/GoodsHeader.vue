<template>
  <view :class="className('__goods-header')">
    <view :class="className('__goods-header__content')">
      <slot></slot>
    </view>
    <view :class="className('__goods-header__extra')">
      <slot name="extra"></slot>
    </view>
  </view>
</template>

<script setup lang="ts">
import { useClassName } from '@hooks/index';

const { className } = useClassName('_goods');
</script>

<style lang="scss">
$module-prefix: '_goods';

.#{$module-prefix} {
  &__goods-header {
    display: flex;
    justify-content: space-between;
    &__content {
      flex: 1;
      flex-shrink: 0;
      overflow: hidden;
    }
  }
}
</style>
