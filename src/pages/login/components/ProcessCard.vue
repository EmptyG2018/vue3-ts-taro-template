<template>
  <view class="process-card">
    <nut-row type="flex">
      <nut-col v-for="item in items" :key="item.key" :span="12">
        <view
          class="process-card-item"
          :class="{ 'process-card-item--active': checkedSelected(item) }"
        >
          <view class="process-card-cell">
            <nut-icon
              size="14"
              :name="item.icon"
              :color="checkedSelected(item) ? activeColor : undefined"
            ></nut-icon>
            <text class="process-card-title">{{ item.label }}</text>
          </view>
          <nut-icon
            size="14"
            name="arrow-right"
            :color="checkedSelected(item) ? activeColor : undefined"
          />
        </view>
      </nut-col>
    </nut-row>
  </view>
</template>

<script setup lang="ts">
import type { ProcessKey, ProcessItem } from './ProcessCard';

/**
 * @title 登录流程组件
 * @param activeColor 选中颜色
 * @param activeKey 选中唯一键
 * @param items 流程列表
 */
const props = withDefaults(
  defineProps<{
    activeColor: string;
    activeKey: ProcessKey;
    items: ProcessItem[];
  }>(),
  {
    activeKey: '',
  }
);

/**
 * @title 判断是否选中
 * @param record 当前流程数据
 */
const checkedSelected = (record: ProcessItem) => record.key === props.activeKey;
</script>

<style lang="scss">
.process-card {
  background-color: #fff;
  border-radius: 6px;
  overflow: hidden;
  .process-card-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #2a2a2a;
    padding: 16px 24px;
    font-size: 14px;
    &.process-card-item--active {
      color: v-bind(activeColor);
    }
    .process-card-cell {
      display: flex;
      align-items: center;
    }
    .process-card-title {
      margin-left: 8px;
    }
  }
}
</style>
