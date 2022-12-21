<template>
  <nut-inputnumber v-bind="attrs" />
</template>

<script setup lang="ts">
import { useAttrs } from 'vue';

const attrs = useAttrs();
</script>

<style lang="scss">
.nut-inputnumber {
  background-color: #f2f2f2;
  border-radius: 9999px;
  .nut-icon {
    width: 26px;
  }
  .nut-inputnumber__text--readonly {
    width: 20px;
    margin: 0;
  }
}
</style>
