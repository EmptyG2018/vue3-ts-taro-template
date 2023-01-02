<template>
  <view :class="className('__container')">
    <view
      :class="className('__container__wrap')"
      :style="{
        padding: `${verticalGutter || 0}px ${horizontalGutter || 0}px`,
      }"
    >
      <slot></slot>
    </view>
  </view>
</template>

<script setup lang="ts">
import { useClassName } from '@hooks/index';

const { className } = useClassName('_mx');

/**
 * @title 容器组件
 * @param gutter 间隔距离
 */
const props = withDefaults(
  defineProps<{
    gutter: number | number[];
  }>(),
  {
    gutter: 0,
  }
);

const gutters = Array.isArray(props.gutter)
  ? props.gutter
  : [props.gutter, undefined];

const horizontalGutter =
  gutters[0] != null && gutters[0] > 0 ? gutters[0] : undefined;

const verticalGutter = gutters[1];
</script>
