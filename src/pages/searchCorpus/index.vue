<template>
  <view class="searchCorpus">
    <!-- 搜索栏 -->
    <view class="search--bar">
      <view class="search--realize">
        <view class="search--icon">
          <nut-icon name="search2" size="17"></nut-icon>
        </view>
        <input type="text" placeholder="柏2熹对台梅西" class="realize--ipt" />
      </view>
    </view>
    <!-- 历史搜索 -->
    <view class="history__search">
      <view class="history__title">
        <p class="label">历史搜索</p>
        <nut-icon name="del2" color="#9A9A9A" size="14"></nut-icon>
      </view>
      <view class="history__area">
        <template v-for="item in list">
          <view class="history__area-label ellipsis">
            {{ item.label }}
          </view>
        </template>
      </view>
    </view>
    <!-- 热门搜索 -->
    <view class="history__search">
      <view class="history__title">
        <p class="label">热门搜索</p>
      </view>
      <view class="history__area">
        <template v-for="item in list">
          <view class="history__area-label ellipsis">
            {{ item.label }}
          </view>
        </template>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
const list = reactive([
  {
    label: '卸水',
  },
  {
    label: '什么移除',
  },
  {
    label: '除32134',
  },
  {
    label: '什么3移除',
  },
  {
    label: '什么3移除',
  },
  {
    label: '什么3移除',
  },
]);
</script>

<style lang="scss">
@import './index.scss';
</style>
