<template>
  <view :class="className('__goods-pictures')">
    <image
      v-for="item in items"
      :class="className('__goods-picture')"
      :src="item"
    />
  </view>
</template>

<script setup lang="ts">
import { useClassName } from '@hooks/index';

const { className } = useClassName('_goods');

/**
 * @title 商品图片详情组件
 * @param items 商品轮播列表
 */
withDefaults(
  defineProps<{
    items: string[];
  }>(),
  {
    items: () => [],
  }
);
</script>

<style lang="scss">
$module-prefix: '_goods';

.#{$module-prefix} {
  &__goods-picture {
    display: block;
    width: 100%;
    max-width: 100%;
    margin: 0;
  }
}
</style>
