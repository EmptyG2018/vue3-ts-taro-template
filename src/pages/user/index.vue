<template>
  <view class="header-top"> </view>
  <view class="nav-card"> </view>
  <view class="nav-grid"> </view>

  <view class="popularize"> </view>
</template>

<script setup lang="ts">
import {
  useToggle,
  useRequest,
  useLoadRefresh,
  useLoadDrop,
  useDebounce,
} from '@/hooks';
import { GetDemo } from '@/services';
</script>

<style lang="scss">
@import './index.scss';
</style>
