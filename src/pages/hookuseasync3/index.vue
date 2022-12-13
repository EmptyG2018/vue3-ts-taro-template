<template>
  <view class="main"> {{ loading ? '正在请求中' : '完成请求' }} </view>
  <view v-if="data1"
    >data1: {{ data1.key1 }}、{{ data1.key2 }}、{{ data1.key3 }}</view
  >
  <view v-if="data2"
    >data2: {{ data2.key1 }}、{{ data2.key2 }}、{{ data2.key3 }}</view
  >
</template>

<script setup lang="ts">
import { useAsync, useRequest } from '@hooks/index';
import { GetDemo } from '@services/index';

const { refresh: refresh1, data: data1 } = useRequest(GetDemo, {
  immediate: false,
  defaultParams: {
    keyword: '',
  },
});

const { refresh: refresh2, data: data2 } = useRequest(GetDemo, {
  immediate: false,
  defaultParams: {
    keyword: '',
  },
});

const { loading } = useAsync(
  async () => {
    await refresh1();
    await refresh2();
  },
  {
    immediate: true,
  }
);
</script>

<style lang="scss">
@import './index.scss';
</style>
