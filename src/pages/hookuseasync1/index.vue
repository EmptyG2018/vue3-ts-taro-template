<template>
  <view class="main"> {{ loading ? '正在处理异步' : '已处理完成' }} </view>
  <nut-button @click="run">手动触发</nut-button>
</template>

<script setup lang="ts">
import { useAsync } from '@hooks/index';
import { delay } from '@utils/index';

const delayFn = async () => {
  await delay(1000);
  return true;
};

const asyncValidateField = async () => {
  await delay(1000);
  return true;
};

const { run, loading } = useAsync(
  async () => {
    await delayFn();
    await asyncValidateField();
  },
  {
    immediate: true,
    onBefore(params) {
      console.log('onBefore', params);
    },
    onSuccess(result) {
      console.log('success', result);
    },
    onError(error) {
      console.log('error', error);
    },
    onFinally(params, result, error) {
      console.log('finally', params, result, error);
    },
  }
);
</script>

<style lang="scss">
@import './index.scss';
</style>
