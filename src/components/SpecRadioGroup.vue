<template>
  <view class="spec-radio-group" :class="className('__spec-radio__group')">
    <slot></slot>
  </view>
</template>

<script setup lang="ts">
import { toRefs, provide } from 'vue';
import { useClassName } from '@hooks/index';
import { CheckedInject, OnChangeInject } from './SpecRadioGroup';
import type { RadioValue } from './SpecRadio';

const { className } = useClassName('_mx');

/**
 * @title 商品规格的单选框组合组件
 * @param modelValue 选中唯一键集合
 */
const props = defineProps<{
  modelValue: RadioValue;
}>();

const emits = defineEmits(['update:modelValue']);

const { modelValue: checked } = toRefs(props);

const onChange = (value: RadioValue) => {
  emits('update:modelValue', value);
};

provide(CheckedInject, checked);
provide(OnChangeInject, onChange);
</script>
