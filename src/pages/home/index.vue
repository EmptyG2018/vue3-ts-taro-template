<template>
  <view>{{ counterStore.count }} {{ loading }}</view>
</template>

<script setup lang="ts">
import { useCounterStore } from '@stores/index';
import { useLoad, useRouter } from '@tarojs/taro';
import { useVisible, useRequest } from '@hooks/index';
import { GetDemo } from '@services/index';

const counterStore = useCounterStore();

const router = useRouter();

const { visible } = useVisible();

const { loading } = useRequest<API.GetDemo>(GetDemo, {
  immediate: true,
  defaultParams: {
    hello: 'hello',
  },
  onBefore(params) {
    console.log(params);
  },
});

useLoad(() => {
  console.log(visible);
});
</script>
