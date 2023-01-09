<template>
  <view :class="className('__info-form-card')">
    <InfoFormHeader title="完善信息" style="margin-bottom: 20px">
      <template #desc>
        <text :class="className('__info-form-card__tips')"
          >以下带<text :class="className('__info-form-card__tips--active')"
            >*</text
          >为必填项</text
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
      <InfoFormCheckboxGroup
        v-model="checks"
        :class="className('__info-form-card__question__row')"
      >
        <view
          v-for="item in che"
          :key="item.value"
          :class="className('__info-form-card__question__col')"
        >
          <InfoFormCheckbox :label="item.label" :value="item.value" />
        </view>
      </InfoFormCheckboxGroup>
    </InfoFormItem>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useClassName } from '@hooks/index';
import InfoFormItem from './InfoFormItem.vue';
import InfoFormHeader from './InfoFormHeader.vue';
import InfoFormCell from './InfoFormCell.vue';
import InfoFormCheckboxGroup from './InfoFormCheckboxGroup.vue';
import InfoFormCheckbox from './InfoFormCheckbox.vue';

const { className } = useClassName('_login-component');

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
$module-prefix: '_login-component';
.#{$module-prefix} {
  &__info-form-card {
    border-radius: 6px;
    background-color: #fff;
    padding: 15px;
    &__tips {
      color: #9a9a9a;
      &--active {
        color: #fb424e;
      }
    }
    &__question {
      &__row {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
      }
      &__col {
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
}
</style>
