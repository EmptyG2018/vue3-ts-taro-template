<template>
  <view class="main"> {{ loading ? '正在请求中' : '完成请求' }} </view>
  <view v-if="data"
    >data: {{ data.key1 }}、{{ data.key2 }}、{{ data.key3 }}</view
  >
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAsync } from '@hooks/index';
import { GetDemo } from '@services/index';

const data = ref();

const { loading } = useAsync(
  async () => {
    data.value = await GetDemo();
  },
  {
    immediate: true,
  }
);
</script>

<style lang="scss">
@import './index.scss';
</style>
