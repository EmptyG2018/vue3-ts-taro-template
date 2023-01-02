<template>
  <view
    :class="{
      [className('__action-btn')]: true,
      [className('__action-btn--horizontal')]: direction === 'horizontal',
    }"
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

withDefaults(
  defineProps<{
    direction: 'horizontal' | 'vertical';
    selected: boolean;
    color: string;
    selectedColor: string;
    icon: string;
    iconSize: string | number;
    title: string;
  }>(),
  {
    direction: 'vertical',
  }
);
</script>

<style lang="scss">
$module-prefix: '_mx';
.#{$module-prefix} {
  &__action-btn {
    display: flex;
    background-color: red;
    &__action-btn__icon {
    }
  }
}
</style>
