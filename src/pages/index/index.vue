<template>
  <view class="index">
    {{ msg }}
  </view>
</template>

<script setup>
import { ref } from "vue";

const msg = ref('wwwww');

</script>

<style lang="scss">
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
