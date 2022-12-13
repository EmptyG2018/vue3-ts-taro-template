<template>
  <view>params: {{ params }}</view>
  <view v-if="loading">正在加载中</view>
  <view v-if="data"
    >data2: {{ data.key1 }}、{{ data.key2 }}、{{ data.key3 }}</view
  >
  <view v-if="error">请求失败</view>

  <nut-button @click="reqeust">手动触发</nut-button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useLoading, useRequest } from '@hooks/index';
import { GetDemo } from '@services/index';

const { loading, showLoading, hideLoading } = useLoading(false);
const data = ref();
const error = ref();

const { run, params } = useRequest(GetDemo, {
  immediate: false,
  defaultParams: {
    keyword: '',
  },
});

const reqeust = async () => {
  data.value = undefined;
  error.value = undefined;
  showLoading();
  try {
    data.value = await run({ keyword: '不建议使用自定义请求' });
  } catch (err) {
    error.value = err;
  } finally {
    hideLoading();
  }
};

reqeust();
</script>

<style lang="scss">
@import './index.scss';
</style>
