<template>
  <view :class="className('__goods-describe')">
    <view :class="className('__goods-describe__title')">{{ title }}</view>
    <view :class="className('__goods-describe__desc')">
      <slot name="desc">{{ desc }}</slot>
    </view>
  </view>
</template>

<script setup lang="ts">
import { useClassName } from '@hooks/index';

const { className } = useClassName('_goods');

/**
 * @title 商品描述组件
 * @param title 标题
 * @param desc 描述
 */
defineProps<{
  title: string;
  desc?: string;
}>();
</script>
