<template>
  <view class="title">{{ props.title }}</view>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = withDefaults(
  defineProps<{
    title: string;
  }>(),
  {
    title: '标题',
  }
);
</script>

<style lang="scss">
.title {
  font-size: 40rpx;
  font-weight: 600;
  margin: 120rpx 0 60rpx 0;
}
</style>
