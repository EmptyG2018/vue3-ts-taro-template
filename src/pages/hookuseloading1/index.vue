<template>
  <view class="main">
    <view v-if="loading">loading...</view>

    <nut-button @click="showLoading">加载</nut-button>
    <nut-button @click="hideLoading">取消</nut-button>
  </view>
</template>

<script setup lang="ts">
import Taro from '@tarojs/taro';
import { watch } from 'vue';
import { useLoading } from '@hooks/index';

const { loading, showLoading, hideLoading } = useLoading(true);

watch(
  loading,
  (now) => {
    now ? Taro.showLoading({ title: '正在加载' }) : Taro.hideLoading();
  },
  {
    immediate: true,
  }
);
</script>

<style lang="scss">
@import './index.scss';
</style>
