<template>
  <view class="process-card">
    <nut-row>
      <nut-col v-for="item in items" :key="item.key" :span="12">
        <view
          class="process-card-item"
          :class="{ 'process-card-item--active': item.key === selectedKey }"
        >
          <nut-icon></nut-icon>
        </view>
      </nut-col>
      <nut-col :span="12"> <view class="process-card-item"> </view> </nut-col>
    </nut-row>
  </view>
</template>

<script setup lang="ts">
import type { ProcessKey, ProcessItem } from './ProcessCard';

withDefaults(
  defineProps<{
    selectedColor: string;
    selectedKey: ProcessKey;
    items: ProcessItem[];
  }>(),
  {
    selectedKey: '',
  }
);
</script>

<style lang="scss"></style>
