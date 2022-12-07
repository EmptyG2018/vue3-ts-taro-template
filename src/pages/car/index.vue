<template>
  <view class="main">购物车</view>
</template>

<script setup lang="ts">
import { useLoad } from '@tarojs/taro';
import { ref, reactive } from 'vue';

type ValueProps = {
  title: string;
};

const label = ref<string>('this is ');

const value = reactive<ValueProps>({ title: '购物车' });

useLoad(() => {
  console.log(`loaded：${label.value}${value.title}`);
});
</script>

<style lang="scss">
@import './index.scss';
</style>
