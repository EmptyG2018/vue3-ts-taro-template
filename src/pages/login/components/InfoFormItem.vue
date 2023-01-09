<template>
  <view :class="className('__info-form-item')">
    <view
      :class="{
        [className('__info-form-item__required')]: true,
        [className('__info-form-item__required--no-required')]: !required,
      }"
    >
    </view>

    <view :class="className('__info-form-item__main')">
      <view v-if="label || desc" :class="className('__info-form-item__header')">
        <view :class="className('__info-form-item__header__label')">{{
          label
        }}</view>
        <view :class="className('__info-form-item__header__desc')">
          <slot name="desc">{{ desc }}</slot>
        </view>
      </view>
      <view :class="className('__info-form-item__content')">
        <slot></slot>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { useClassName } from '@hooks/index';

const { className } = useClassName('_login-component');

/**
 * @title 填写资料表单单选组件
 * @param required 必选项
 * @param label 标签
 * @param desc 描述
 */

defineProps<{
  required?: boolean;
  label?: string;
  desc?: string;
}>();
</script>

<style lang="scss">
$module-prefix: '_login-component';
.#{$module-prefix} {
  &__info-form-item {
    display: flex;
    &__required {
      width: 14px;
      min-height: 1px;
      color: #fb424e;
      &::after {
        content: '*';
        font-size: 14px;
      }
      &--no-required {
        color: transparent;
      }
    }
    &__main {
      flex: 1;
      flex-shrink: 0;
      overflow: hidden;
    }
    &__header {
      margin-bottom: 10px;
      &__label {
        font-size: 14px;
        color: #2a2a2a;
      }
      &__desc {
        color: #9a9a9a;
        font-size: 12px;
      }
    }
  }
}
</style>
