<template>
  <view class="info-form-checkbox-group">
    <slot></slot>
  </view>
</template>

<script setup lang="ts">
import { toRefs, provide } from 'vue';
import { CheckedsInject, OnChangeInject } from './InfoFormCheckboxGroup';
import type { CheckboxValue } from './InfoFormCheckbox';

/**
 * @title 填写资料表单复选框组合组件
 * @param modelValue 选中唯一键集合
 */
const props = withDefaults(
  defineProps<{
    modelValue: CheckboxValue[];
  }>(),
  {
    modelValue: () => [],
  }
);

const emits = defineEmits(['update:modelValue']);

const { modelValue: checkeds } = toRefs(props);

const onChange = (value: CheckboxValue) => {
  if (checkeds.value.includes(value)) {
    emits(
      'update:modelValue',
      checkeds.value.filter((item) => item !== value)
    );
    return;
  }
  emits('update:modelValue', [...checkeds.value, value]);
};

provide(CheckedsInject, checkeds);
provide(OnChangeInject, onChange);
</script>

<style lang="scss"></style>
