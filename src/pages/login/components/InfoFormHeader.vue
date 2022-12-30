<template>
  <view class="info-form-header">
    <view class="info-form-title">{{ title }}</view>
    <view class="info-form-desc">
      <slot name="desc">{{ desc }}</slot>
    </view>
  </view>
</template>

<script setup lang="ts">
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
.info-form-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 14px;
  .info-form-title {
    font-size: #2a2a2a;
    font-weight: 600;
    font-size: 14px;
  }
  .info-form-desc {
    color: #9a9a9a;
    font-size: 12px;
  }
}
</style>
