<template>
  <view :class="className('__process-card')">
    <nut-row type="flex">
      <nut-col v-for="item in items" :key="item.key" :span="12">
        <view
          :class="{
            [className('__process-card__tab')]: true,
            [className('__process-card__tab--active')]: checkedSelected(item),
          }"
        >
          <view :class="className('__process-card__cell')">
            <nut-icon
              size="14"
              :name="item.icon"
              :color="checkedSelected(item) ? activeColor : undefined"
            ></nut-icon>
            <text :class="className('__process-card__title')">{{
              item.label
            }}</text>
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
import { useClassName } from '@hooks/index';
import type { ProcessKey, ProcessItem } from './ProcessCard';

const { className } = useClassName('_login');

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
$module-prefix: '_login';
.#{$module-prefix} {
  &__process-card {
    background-color: #fff;
    border-radius: 6px;
    overflow: hidden;
    &__tab {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #2a2a2a;
      padding: 16px 24px;
      font-size: 14px;
      &--active {
        color: v-bind(activeColor);
      }
    }
    &__cell {
      display: flex;
      align-items: center;
    }
    &__title {
      margin-left: 8px;
    }
  }
}
</style>
