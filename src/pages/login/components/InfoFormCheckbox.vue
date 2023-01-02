<template>
  <view
    :class="className('__info-form-checkbox')"
    @click="onChange && onChange(value)"
  >
    <view :class="className('__info-form-checkbox__label')">{{ label }}</view>
    <view :class="className('__info-form-checkbox__check')">
      <nut-icon
        name="checked"
        size="14"
        :color="checked ? '#FB424E' : '#CECFD0'"
      />
    </view>
  </view>
</template>

<script setup lang="ts">
import { Ref, inject, computed } from 'vue';
import { useClassName } from '@hooks/index';
import type { CheckboxValue } from './InfoFormCheckbox';
import { CheckedsInject, OnChangeInject } from './InfoFormCheckboxGroup';

const { className } = useClassName('_login');

/**
 * @title 填写资料表单复选框组件
 * @param label 标签
 * @param value 选中唯一键
 */
const props = defineProps<{
  label: string;
  value: CheckboxValue;
}>();

const checkeds = inject<Ref<CheckboxValue[]>>(CheckedsInject);

const onChange = inject<(value: CheckboxValue) => void>(OnChangeInject);

const checked = computed(() => checkeds?.value.includes(props.value));
</script>

<style lang="scss">
$module-prefix: '_login';
.#{$module-prefix} {
  &__info-form-checkbox {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 16px;
    background-color: #f3f5f7;
    border-radius: 6px;
    &__label {
      font-size: 14px;
      color: #2a2a2a;
    }
  }
}
</style>
