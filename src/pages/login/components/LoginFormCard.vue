<template>
  <view :class="className('__login-form-card')">
    <view :class="className('__login-form-card__wrap')">
      <ActionBtn style="margin-bottom: 30px" color="#06AD56"
        >快捷登录</ActionBtn
      >
      <ActionBtn style="margin-bottom: 30px">手机号登录</ActionBtn>
    </view>
  </view>
</template>

<script setup lang="ts">
import { useClassName } from '@hooks/index';
import ActionBtn from './ActionBtn.vue';

const { className } = useClassName('_login-component');
</script>

<style lang="scss">
$module-prefix: '_login-component';
.#{$module-prefix} {
  &__login-form-card {
    padding-top: 85px;
    &__wrap {
      padding: 0 14px;
    }
  }
}
</style>
