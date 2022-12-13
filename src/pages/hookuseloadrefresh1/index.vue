<template>
  <view v-if="loading">正在加载中</view>
  <view v-if="data1"
    >data1: {{ data1.key1 }}、{{ data1.key2 }}、{{ data1.key3 }}</view
  >
  <view v-if="data2"
    >data2: {{ data2.key1 }}、{{ data2.key2 }}、{{ data2.key3 }}</view
  >
  <view v-if="data3"
    >data3: {{ data3.key1 }}、{{ data3.key2 }}、{{ data3.key3 }}</view
  >
  <view v-if="error">请求失败</view>

  <nut-button @click="run">手动触发</nut-button>
  <nut-button @click="run({ pullDownRefresh: true })">下拉请求</nut-button>
</template>

<script setup lang="ts">
import { useRequest, useLoadRefresh } from '@hooks/index';
import { GetDemo } from '@services/index';

const { refresh: refresh1, data: data1 } = useRequest(GetDemo, {
  immediate: false,
  defaultParams: {
    keyword: 'demo1',
  },
});

const { refresh: refresh2, data: data2 } = useRequest(GetDemo, {
  immediate: false,
  defaultParams: {
    keyword: 'demo2',
  },
});

const { refresh: refresh3, data: data3 } = useRequest(GetDemo, {
  immediate: false,
  defaultParams: {
    keyword: 'demo3',
  },
});

const { run, loading, error } = useLoadRefresh(
  async () => {
    await refresh1();
    await refresh2();
    await refresh3();
  },
  {
    immediate: true,
  }
);
</script>

<style lang="scss">
@import './index.scss';
</style>
