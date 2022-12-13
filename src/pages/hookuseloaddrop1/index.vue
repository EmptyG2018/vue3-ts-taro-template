<template>
  <view v-if="loading">正在加载中</view>

  <view>1</view>
  <view>1</view>
  <view>1</view>
  <view>1</view>
  <view>1</view>
  <view>100</view>
  <view>1</view>
  <view>1</view>
  <view>100</view>
  <view>1</view>
  <view>1</view>
  <view>1</view>
  <view>1</view>
  <view>100</view>
  <view>1</view>
  <view>1</view>
  <view>1</view>
  <view>1</view>
  <view>100</view>
  <view>1</view>
  <view>1</view>
  <view>1</view>
  <view>1</view>
  <view>1</view>
  <view>1</view>
  <view>1</view>
  <view>1</view>
  <view>1</view>
  <view>1</view>
  <view>1</view>
  <view>1</view>
  <view>1</view>
  <view>100</view>
  <view>1</view>
  <view>1</view>
  <view>1</view>
  <view>1</view>
  <view>1</view>
  <view>1</view>
  <view>1</view>
  <view>1</view>
  <view>1</view>
  <view>1</view>
  <view>100</view>
  <view>1</view>
  <view>1</view>
  <view>1</view>
  <view>1</view>
  <view>1</view>
  <view>1</view>
</template>

<script setup lang="ts">
import { useRequest, useLoadDrop } from '@hooks/index';
import { GetDemo } from '@services/index';

const { refresh: refresh1, data: data1 } = useRequest(GetDemo, {
  immediate: false,
  defaultParams: {
    keyword: 'demo1',
  },
});

const { loading } = useLoadDrop(
  async () => {
    await refresh1();
  },
  {
    immediate: true,
    defaultParams: {
      keyword: '',
      type: '',
    },
    defaultPaging: {
      pageNum: 1,
      size: 16,
    },
    pagingOptions: {
      currentField: 'pageNum',
      sizeField: 'size',
    },
    onSuccess(result, params) {
      console.log('result', result);
      console.log('params', params);
    },
  }
);
</script>

<style lang="scss">
@import './index.scss';
</style>
