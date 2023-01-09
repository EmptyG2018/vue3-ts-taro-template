<template>
  <view :class="className('__info-form-cell')" @click="emits('click')">
    <view :class="className('__info-form-cell__prefix')">
      <nut-icon
        v-if="icon"
        :class="className('__info-form-cell__prefix__icon')"
        :name="icon"
        :color="iconColor"
        size="14"
      />
      <text :class="className('__info-form-cell__title')">{{ title }}</text>
    </view>
    <view :class="className('__info-form-cell__extra')">
      <slot name="extra">
        <text :class="className('__info-form-cell__value')">{{ value }}</text>
      </slot>
      <nut-icon
        v-if="arrow"
        :class="className('__info-form-cell__suffix-icon')"
        name="arrow-right"
        color="#DBDBDB"
        size="14"
      />
    </view>
  </view>
</template>

<script setup lang="ts">
import { useClassName } from '@hooks/index';

const { className } = useClassName('_login-component');

/**
 * @title 填写资料表单控件组件
 * @param icon 标题图标
 * @param iconColor 标题图标颜色
 * @param title 标题
 * @param value 表单内容
 * @param arrow 右箭头
 */
withDefaults(
  defineProps<{
    icon: string;
    iconColor: string;
    title: string;
    value: string;
    arrow: boolean;
  }>(),
  {
    icon: undefined,
    iconColor: undefined,
    value: undefined,
    arrow: true,
  }
);

/**
 * @title 自定义事件
 * @param click 点击
 */
const emits = defineEmits(['click']);
</script>

<style lang="scss">
$module-prefix: '_login-component';
.#{$module-prefix} {
  &__info-form-cell {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 12px;
    min-height: 22px;
    background-color: #f3f5f7;
    font-size: 14px;
    color: #2a2a2a;
    border-radius: 6px;
    &__prefix {
      display: flex;
      align-items: center;
      &__icon {
        margin-right: 4px;
      }
    }
    &__title {
      font-weight: 500;
    }
    &__value {
      color: #fb424e;
      font-weight: 500;
    }
    &__suffix-icon {
      margin-left: 4px;
    }
  }
}
</style>
