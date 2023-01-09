<template>
  <view :class="className('__divider')">
    <view :class="className('__divider__line-pre')"></view>
    <view :class="className('__divider__inner')">{{ title }}</view>
    <view :class="className('__divider__line-next')"></view>
  </view>
</template>

<script setup lang="ts">
import { useClassName } from '@hooks/index';

/**
 * @title 分割线组件
 * @param title 标题
 */
defineProps<{
  title: string;
}>();

const { className } = useClassName('_mx');
</script>

<style lang="scss">
$module-prefix: '_mx';

.#{$module-prefix} {
  &__divider {
    display: flex;
    padding: 0;
    margin: 4px 0;
    border-top-width: 0;
    border-top-style: solid;
    border-top-color: #dedede;
    color: #2a2a2a;
    font-size: 14px;
    text-align: center;
    white-space: nowrap;
    &__line-pre,
    &__line-next {
      position: relative;
      top: 50%;
      width: 50%;
      border-top-width: 1px;
      border-top-style: inherit;
      border-top-color: inherit;
      transform: translateY(50%);
      &::after {
        position: absolute;
        content: '';
        display: block;
        width: 5px;
        height: 5px;
        background-color: #dedede;
        transform: rotate(45deg);
        top: -3px;
      }
    }
    &__line-pre {
      &::after {
        right: -3px;
      }
    }
    &__line-next {
      &::after {
        left: -3px;
      }
    }
    &__inner {
      display: inline-block;
      padding: 0 1em;
    }
  }
}
</style>
