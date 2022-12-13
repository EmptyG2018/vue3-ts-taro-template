<template>
  <view>params: {{ params }}</view>
  <view v-if="loading">正在加载中</view>
  <view v-if="data"
    >data2: {{ data.key1 }}、{{ data.key2 }}、{{ data.key3 }}</view
  >
  <view v-if="error">请求失败</view>

  <nut-button @click="run({ keyword: '手动触发' })">手动触发</nut-button>
  <nut-button @click="refresh">刷新</nut-button>
</template>

<script setup lang="ts">
import { useRequest } from '@hooks/index';
import { GetDemo } from '@services/index';

const { refresh, run, data, loading, error, params } = useRequest(GetDemo, {
  immediate: false,
  defaultParams: {
    keyword: '',
  },
});
</script>

<style lang="scss">
@import './index.scss';
</style>
