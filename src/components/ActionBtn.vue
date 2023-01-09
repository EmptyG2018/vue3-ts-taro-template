<template>
  <view
    :class="{
      [className('__action-btn')]: true,
      [className('__action-btn--active')]: selected,
      [className('__action-btn--horizontal')]: direction === 'horizontal',
    }"
    @click="emits('click')"
  >
    <view :class="className('__action-btn__icon')">
      <nut-icon
        :name="icon"
        :size="iconSize"
        :color="selected ? selectedColor : color"
      />
    </view>
    <view v-if="title" :class="className('__action-btn__title')">{{
      title
    }}</view>
  </view>
</template>

<script setup lang="ts">
import { useClassName } from '@hooks/index';

const { className } = useClassName('_mx');

/**
 * @title 图标按钮组合组件
 * @param direction 排序方向
 * @param selected 选中状态
 * @param color 颜色
 * @param selectedColor 选中颜色
 * @param icon 图标
 * @param iconSize 图标大小
 * @param title 标题
 * @param size 大小
 * @param gutter 间隔距离
 */
withDefaults(
  defineProps<{
    direction?: 'horizontal' | 'vertical';
    selected?: boolean;
    color?: string;
    selectedColor?: string;
    icon: string;
    iconSize?: number;
    title?: string;
    size?: number;
    gutter?: number;
  }>(),
  {
    direction: 'vertical',
    color: undefined,
    selectedColor: undefined,
    size: 14,
    gutter: 4,
    iconSize: 14,
    title: undefined,
  }
);

const emits = defineEmits(['click']);
</script>

<style lang="scss">
$module-prefix: '_mx';
.#{$module-prefix} {
  &__action-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: calc(v-bind(size) * 1px);
    color: v-bind(color);
    &--horizontal {
      flex-direction: row;
      .#{$module-prefix}__action-btn__title {
        margin: 0 0 0 calc(v-bind(gutter) * 1px);
      }
    }
    &--active {
      color: v-bind(selectedColor);
    }
    &__icon {
      display: inline-block;
      line-height: 1;
    }
    &__title {
      margin: calc(v-bind(gutter) * 1px) 0 0 0;
    }
  }
}
</style>
