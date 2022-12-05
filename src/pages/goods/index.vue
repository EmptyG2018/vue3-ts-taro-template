<template>
  <view class="main">商城详情</view>
</template>

<script setup lang="ts">
import { useLoad } from '@tarojs/taro';
import { ref, reactive } from 'vue';

type ValueProps = {
  title: string;
};

const label = ref<string>('this is ');

const value = reactive<ValueProps>({ title: '商城详情' });

useLoad(() => {
  console.log(`loaded：${label.value}${value.title}`);
});
</script>

<style lang="scss">
@import './index.scss';
</style>
