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
    font-size: 24rpx;
    border-radius: 4rpx;
    border: 1rpx solid #fd3b68;
    color: #fd3b68;
    overflow: hidden;
    &--mini {
      font-size: 20rpx;
      .coupon-tag__row {
        width: 48rpx;
        height: 32rpx;
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
