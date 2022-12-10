<template>
  <view class="main">
    <view v-if="loading">loading...</view>

    <view v-if="data">
      <view>user name: {{ profile.username }}</view>
      <view>user age: {{ profile.age }}</view>
      <view>user sex: {{ profile.sex }}</view>
      <view v-for="item in users">{{ item.nickname }}</view>
    </view>

    <nut-button @click="run">刷新</nut-button>
    <nut-button @click="run({ pullDownRefresh: true })"
      >刷新(下拉刷新)</nut-button
    >
  </view>
</template>

<script setup lang="ts">
import { useRequest, useLoadRefresh } from '@hooks/index';
import { GetProfile, GetUsers } from '@/services/index';

const {
  data: users,
  loading: userLoading,
  run: userAsync,
} = useRequest<API.UserItem[]>(GetUsers, {
  immediate: false,
});

const {
  data: profile,
  loading: profileLoading,
  run: profileAsync,
} = useRequest<API.UserProfile>(GetProfile, {
  immediate: false,
});

const { data, loading, run } = useLoadRefresh(
  async () => {
    await userAsync();
    await profileAsync();
  },
  { immediate: true }
);
</script>

<style lang="scss">
@import './index.scss';
</style>
