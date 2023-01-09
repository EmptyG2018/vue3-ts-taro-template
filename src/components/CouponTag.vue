<template>
  <view
    :class="[className('__coupon-tag'), className(`__coupon-tag--${size}`)]"
  >
    <view
      :class="[
        className('__coupon-tag__row'),
        className('__coupon-tag__prefix'),
      ]"
      >{{ prefix }}</view
    >
    <view
      :class="[
        className('__coupon-tag__row'),
        className('__coupon-tag__price'),
      ]"
      >{{ price }}元</view
    >
  </view>
</template>

<script setup lang="ts">
import { useClassName } from '@hooks/index';

const { className } = useClassName('_mx');

/**
 * @title 优惠劵标签组件
 * @param prefix 前缀
 * @param price 价格
 * @param size 尺寸
 */
withDefaults(
  defineProps<{
    prefix: string;
    price: number;
    size: 'mini' | 'small';
  }>(),
  {
    prefix: '劵',
    size: 'small',
  }
);
</script>

<style lang="scss">
$module-prefix: '_mx';
.#{$module-prefix} {
  &__coupon-tag {
    display: inline-block;
    font-size: 12px;
    border-radius: 2px;
    border: 1px solid #fd3b68;
    color: #fd3b68;
    overflow: hidden;
    &--mini {
      font-size: 10px;
      .#{$module-prefix}__coupon-tag__row {
        width: 24px;
        height: 16px;
      }
    }
    &__row {
      display: flex;
      float: left;
      align-items: center;
      justify-content: center;
      &:first-child {
        background-color: #ffd2d6;
      }
      &:last-child {
        background-color: #fff8f2;
      }
    }
  }
}
</style>
