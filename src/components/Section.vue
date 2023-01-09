<template>
  <view :style="{ margin, padding }">
    <slot></slot>
  </view>
</template>

<script setup lang="ts">
/**
 * @title 块组件
 * @param padding 内边距
 * @param margin 外边距
 */
const props = defineProps<{
  padding?: number | number[];
  margin?: number | number[];
}>();

const unit = (items: number[]) =>
  items.map((item: number) => item + 'px').join(' ');

const padding = Array.isArray(props.padding)
  ? unit(props.padding.slice(0, 4))
  : props.padding
  ? unit([props.padding])
  : undefined;

const margin = Array.isArray(props.margin)
  ? unit(props.margin.slice(0, 4))
  : props.margin
  ? unit([props.margin])
  : undefined;
</script>
