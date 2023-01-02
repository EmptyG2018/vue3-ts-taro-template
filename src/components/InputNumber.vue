<template>
  <nut-inputnumber :class="className('__input-number')" v-bind="attrs" />
</template>

<script setup lang="ts">
import { useAttrs } from 'vue';
import { useClassName } from '@hooks/index';

const attrs = useAttrs();

const { className } = useClassName('_mx');
</script>

<style lang="scss">
$module-prefix: '_mx';
.#{$module-prefix} {
  &__input-number {
    background-color: #f2f2f2;
    border-radius: 9999px;
    .nut-inputnumber__icon {
      width: 26px;
    }
    .nut-inputnumber__text--readonly {
      width: 20px;
      margin: 0;
    }
  }
}
</style>
