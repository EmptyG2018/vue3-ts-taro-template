<template>
  <nut-button :class="className('__action-btn')" v-bind="attrs" block>
    <slot></slot>
  </nut-button>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue';
import { useClassName } from '@hooks/index';

const { className } = useClassName('_login');

const attrs = useAttrs();
</script>

<style lang="scss">
$module-prefix: '_login';
.#{$module-prefix} {
  &__action-btn {
    border-radius: 6px;
  }
}
</style>
