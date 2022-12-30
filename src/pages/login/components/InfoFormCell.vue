<template>
  <view class="info-form-cell" @click="emits('click')">
    <view class="info-form-prefix">
      <nut-icon
        v-if="icon"
        class="prefix-icon"
        :name="icon"
        :color="iconColor"
        size="14"
      />
      <text class="info-form-title">{{ title }}</text>
    </view>
    <view class="info-form-extra">
      <slot name="extra">
        <text class="info-form-value">{{ value }}</text>
      </slot>
      <nut-icon
        v-if="arrow"
        class="suffix-icon"
        name="arrow-right"
        color="#DBDBDB"
        size="14"
      />
    </view>
  </view>
</template>

<script setup lang="ts">
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

const emits = defineEmits(['click']);
</script>

<style lang="scss">
.info-form-cell {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 12px;
  min-height: 22px;
  background-color: #f3f5f7;
  font-size: 14px;
  color: #2a2a2a;
  border-radius: 6px;
  .info-form-prefix {
    display: flex;
    align-items: center;
    .prefix-icon {
      margin-right: 4px;
    }
    .info-form-title {
      font-weight: 500;
    }
  }
  .info-form-extra {
    .info-form-value {
      color: #fb424e;
      font-weight: 500;
    }
    .suffix-icon {
      margin-left: 4px;
    }
  }
}
</style>
