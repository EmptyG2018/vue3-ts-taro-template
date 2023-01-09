<template>
  <view :class="className('__goods-coupon')">
    <view :class="className('__goods-coupon__content')">
      <slot></slot>
    </view>
    <view :class="className('__goods-coupon__suffix-icon')">
      <nut-icon v-if="arrow" name="arrow-right" color="#000" size="14" />
    </view>
  </view>
</template>

<script setup lang="ts">
import { useClassName } from '@hooks/index';

/**
 * @title 商品优惠劵展示组件
 * @param arrow 右箭头
 */
withDefaults(
  defineProps<{
    arrow: boolean;
  }>(),
  {
    arrow: true,
  }
);

const { className } = useClassName('_goods-component');
</script>

<style lang="scss">
$module-prefix: '_goods-component';
.#{$module-prefix} {
  &__goods-coupon {
    display: flex;
    align-items: center;
    &__content {
      flex: 1;
      flex-shrink: 0;
    }
    &__suffix-icon {
      width: 16px;
    }
  }
}
</style>
