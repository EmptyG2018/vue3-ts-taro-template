<template>
  <view class="main">
    <view v-if="visible">this is useVisible</view>

    <nut-button @click="show">显示</nut-button>
    <nut-button @click="hide">隐藏</nut-button>
  </view>
</template>

<script setup lang="ts">
import { useVisible } from '@hooks/index';

const { visible, show, hide } = useVisible(true);
</script>

<style lang="scss">
@import './index.scss';
</style>
