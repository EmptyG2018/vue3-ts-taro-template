<template>
  <view class="login-form-card">
    <view class="container-wrap">
      <ActionBtn style="margin-bottom: 30px" color="#06AD56"
        >快捷登录</ActionBtn
      >
      <ActionBtn style="margin-bottom: 30px">手机号登录</ActionBtn>
    </view>
  </view>
</template>

<script setup lang="ts">
import ActionBtn from './ActionBtn.vue';
</script>

<style lang="scss">
.login-form-card {
  padding-top: 85px;
  .container-wrap {
    padding: 0 14px;
    .action-btn {
      border-radius: 6px;
    }
  }
}
</style>
