<template>
  <view class="info-form-card">
    <InfoFormHeader title="完善信息" style="margin-bottom: 20px">
      <template #desc>
        <text class="tips"
          >以下带<text class="tip-active">*</text>为必填项</text
        >
      </template>
    </InfoFormHeader>

    <InfoFormItem required style="margin-bottom: 20px">
      <InfoFormCell title="出生日期" value="1994-02-07" @click="handleClick" />
    </InfoFormItem>
    <InfoFormItem style="margin-bottom: 20px">
      <InfoFormCell title="皮肤肤质" value="油性皮肤" @click="handleClick" />
    </InfoFormItem>
    <InfoFormItem
      required
      label="请选择您希望改善的问题"
      style="margin-bottom: 20px"
    >
      <InfoFormCheckboxGroup v-model="checks" class="question-group">
        <view v-for="item in che" :key="item.value" class="question-item">
          <InfoFormCheckbox :label="item.label" :value="item.value" />
        </view>
      </InfoFormCheckboxGroup>
    </InfoFormItem>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import InfoFormItem from './InfoFormItem.vue';
import InfoFormHeader from './InfoFormHeader.vue';
import InfoFormCell from './InfoFormCell.vue';
import InfoFormCheckboxGroup from './InfoFormCheckboxGroup.vue';
import InfoFormCheckbox from './InfoFormCheckbox.vue';

const checks = ref([1, 2, 3]);

const che = [
  {
    value: 1,
    label: '痘痘',
  },
  {
    value: 2,
    label: '皮肤暗沉',
  },
  {
    value: 3,
    label: '敏感',
  },
  {
    value: 4,
    label: '痘印',
  },
  {
    value: 5,
    label: '雀斑',
  },
  {
    value: 6,
    label: '黑头',
  },
  {
    value: 7,
    label: '内分泌失调',
  },
  {
    value: 8,
    label: '美妆',
  },
];

const handleClick = () => {
  console.log('this is cell.');
};
</script>

<style lang="scss">
.info-form-card {
  border-radius: 6px;
  background-color: #fff;
  padding: 15px;
  .tips {
    color: #9a9a9a;
    .tip-active {
      color: #fb424e;
    }
  }
  .question-group {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    .question-item {
      box-sizing: border-box;
      width: 50%;
      margin-bottom: 14rpx;
      &:nth-child(odd) {
        padding-right: 7px;
      }
      &:nth-child(even) {
        padding-left: 7px;
      }
    }
  }
}
</style>
