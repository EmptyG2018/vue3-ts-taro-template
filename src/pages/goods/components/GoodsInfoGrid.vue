<template>
  <view :class="className('__goods-info-grid')">
    <nut-grid>
      <nut-grid-item v-for="item in items">
        <view class="goods-info-label">{{ item.label }}</view>
        <view class="goods-info-value">{{ item.value }}</view>
      </nut-grid-item>
    </nut-grid>
  </view>
</template>

<script setup lang="ts">
import { useClassName } from '@hooks/index';

const { className } = useClassName('_goods');

type Item = {
  label: string;
  value: string;
};

/**
 * @title 商品图片详情组件
 * @param items 商品轮播列表
 */
withDefaults(
  defineProps<{
    items: Item[];
  }>(),
  {
    items: () => [],
  }
);
</script>
