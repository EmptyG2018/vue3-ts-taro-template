<template>
  <view class="action-btn">
    <view class="action-btn__icon"></view>
    <view class="action-btn__title"></view>
  </view>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    color: string;
    selectedColor: string;
    icon: string;
  }>(),
  {}
);
</script>
