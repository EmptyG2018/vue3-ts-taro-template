<template>
  <nut-button class="action-btn" v-bind="attrs" block>
    <slot></slot>
  </nut-button>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue';

const attrs = useAttrs();
</script>

<style lang="scss">
.action-btn {
  border-radius: 6px;
}
</style>
