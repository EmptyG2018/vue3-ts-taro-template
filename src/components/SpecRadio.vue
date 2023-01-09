<template>
  <view
    :class="{
      [className('__spec-radio')]: true,
      [className('__spec-radio--active')]: isChecked,
    }"
    @click="onChange && onChange(value)"
  >
    <view :class="className('__spec-radio__thumb')">
      <image :src="thumb" />
    </view>
    <view :class="className('__spec-radio__cell')">
      <view :class="className('__spec-radio__label')">{{ label }}</view>
      <view :class="className('__spec-radio__value')">{{ desc }}</view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { Ref, inject, computed } from 'vue';
import { useClassName } from '@hooks/index';
import type { RadioValue } from './SpecRadio';
import { CheckedInject, OnChangeInject } from './SpecRadioGroup';

const { className } = useClassName('_mx');

/**
 * @title 规格单选框组件
 * @param thumb 图片
 * @param label 标签
 * @param desc 描述
 * @param value 选中唯一键
 */
const props = defineProps<{
  thumb: string;
  label: string;
  desc: string;
  value: RadioValue;
}>();

const checked = inject<Ref<RadioValue>>(CheckedInject);

const onChange = inject<(value: RadioValue) => void>(OnChangeInject);

const isChecked = computed(() => checked?.value === props.value);
</script>

<style lang="scss">
$module-prefix: '_mx';
.#{$module-prefix} {
  &__spec-radio {
    display: flex;
    align-items: center;
    border: 1px solid #2a2a2a;
    border-radius: 6px;
    &--active {
      border-color: #fd3b68;
      color: #fd3b68;
    }
    &__thumb {
      width: 48px;
      height: 48px;
      image {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
    &__cell {
      margin-left: 15px;
    }
    &__label,
    &__value {
      font-size: 14px;
    }
    &__value {
      font-weight: 600;
    }
  }
}
</style>
