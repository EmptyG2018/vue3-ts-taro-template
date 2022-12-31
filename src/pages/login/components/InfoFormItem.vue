<template>
  <view class="info-form-item">
    <view
      class="info-form-item-required"
      :class="{ 'info-form-item-required--no-required': !required }"
    >
    </view>

    <view class="info-form-item-main">
      <view v-if="label || desc" class="info-form-item-header">
        <view class="info-form-item-label">{{ label }}</view>
        <view class="info-form-item-desc">
          <slot name="desc">{{ desc }}</slot>
        </view>
      </view>
      <view class="info-form-item-content">
        <slot></slot>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
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
.info-form-item {
  display: flex;
  .info-form-item-required {
    width: 14px;
    min-height: 1px;
    color: #fb424e;
    &::after {
      content: '*';
      font-size: 14px;
    }
    &.info-form-item-required--no-required {
      color: transparent;
    }
  }
  .info-form-item-main {
    flex: 1;
    flex-shrink: 0;
    overflow: hidden;
    .info-form-item-header {
      margin-bottom: 10px;
      .info-form-item-label {
        font-size: 14px;
        color: #2a2a2a;
      }
      .info-form-item-desc {
        color: #9a9a9a;
        font-size: 12px;
      }
    }
  }
}
</style>
