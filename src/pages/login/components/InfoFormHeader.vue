<template>
  <view :class="className('__info-form-header')">
    <view :class="className('__info-form-header__title')">{{ title }}</view>
    <view :class="className('__info-form-header__desc')">
      <slot name="desc">{{ desc }}</slot>
    </view>
  </view>
</template>

<script setup lang="ts">
import { useClassName } from '@hooks/index';

const { className } = useClassName('_login');

/**
 * @title 填写资料表单标题组件
 * @param title 标题
 * @param desc 描述
 */

defineProps<{
  title: string;
  desc?: string;
}>();
</script>

<style lang="scss">
$module-prefix: '_login';
.#{$module-prefix} {
  &__info-form-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 14px;
    &__title {
      font-size: #2a2a2a;
      font-weight: 600;
      font-size: 14px;
    }
    &__desc {
      color: #9a9a9a;
      font-size: 12px;
    }
  }
}
</style>
