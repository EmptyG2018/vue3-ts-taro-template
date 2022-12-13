<template>
  <view class="main">
    <view v-if="loading">loading...</view>
    <view v-if="msg">{{ msg }}</view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useLoading } from '@hooks/index';

const { loading, showLoading, hideLoading } = useLoading(true);
const msg = ref('');

const mockData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('hello world!');
    }, 1000);
  });
};

const run = async () => {
  showLoading();
  try {
    msg.value = (await mockData()) as string;
  } finally {
    hideLoading();
  }
};

run();
</script>

<style lang="scss">
@import './index.scss';
</style>
