<template>
  <view :class="className('title')">{{ props.title }}</view>
</template>

<script setup lang="ts">
import { useClassName } from '@hooks/index';

const { className } = useClassName('_mx');

const props = withDefaults(
  defineProps<{
    title: string;
    msg: number;
  }>(),
  {
    title: '标题',
  }
);
</script>

<style lang="scss">
$module-prefix: '_mx';
.#{$module-prefix} {
  &__title {
    font-size: 40rpx;
    font-weight: 600;
    margin: 120rpx 0 60rpx 0;
  }
}
</style>
