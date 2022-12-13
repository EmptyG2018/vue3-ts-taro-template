<template>
  <view>params: {{ params }}</view>
  <view>paging: {{ paging }}</view>
  <view v-if="loading">正在加载中</view>
  <view v-if="data"
    >data2: {{ data.key1 }}、{{ data.key2 }}、{{ data.key3 }}</view
  >
  <view v-if="error">请求失败</view>

  <nut-button @click="run({ keyword: '手动触发' })">手动触发</nut-button>
  <nut-button @click="refresh">刷新</nut-button>
  <nut-button @click="prev">上一页</nut-button>
  <nut-button @click="next">下一页</nut-button>
  <nut-button @click="prev({ run: true })">上一页(请求)</nut-button>
  <nut-button @click="next({ run: true })">下一页(请求)</nut-button>
</template>

<script setup lang="ts">
import { useLoadPage } from '@hooks/index';
import { GetDemo } from '@services/index';

const { refresh, next, prev, run, data, loading, error, params, paging } =
  useLoadPage(GetDemo, {
    immediate: true,
    defaultParams: {
      keyword: '',
    },
    defaultPaging: {
      current: 1,
      size: 16,
    },
    pagingOptions: {
      currentField: 'current',
      sizeField: 'size',
    },
  });
</script>

<style lang="scss">
@import './index.scss';
</style>
