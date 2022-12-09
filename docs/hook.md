### 目录


- [useToggle](#useToggle)
- [useVisible](#useVisible)
- [usePaging](#usePaging)
- [useAsync](#useAsync)
- [useRequest](#useRequest)
- [useLoadRefresh](#useLoadRefresh)
- [useLoadDrop](#useLoadDrop)



### useToggle

用于在两个状态值间切换的 Hook。



**代码演示**

```vue
<template>
	<view>状态值：{{ state ? '开' : '关' }}</view>
	<button @click='off'>关</button>
	<button @click='on'>开</button>
</template>

<script setup lang="ts">
  import { useToggle } from '@hooks/index';
  const { state, on, off } = useToggle(false);
</script>
```



**API**

```typescript
const { state, on, off } = useToggle(defaultValue?: boolean);
```



**Params**

| 参数         | 说明                     | 类型    | 默认  |
| ------------ | ------------------------ | ------- | ----- |
| defaultValue | 可选项，传入默认的状态值 | boolean | false |



**Result**

| 参数  | 说明   | 类型         |
| :---- | ------ | ------------ |
| state | 状态值 | Ref<boolean> |
| on    | 开启   | () => void   |
| off   | 关闭   | () => void   |



#### useVisible

用于在显隐两种状态之间切换的Hook



**代码演示**

```vue
<template>
	<view v-if="visible">This is a good hook.</view>
</template>

<script setup lang="ts">
  import { useVisible } from '@hooks/index';
  const { visible, show, hide } = useVisible(false);
</script>
```



**API**

```typescript
const { visible, show, hide } = useVisible(defaultValue?: boolean);
```



**Params**

| 参数         | 说明                     | 类型    | 默认  |
| ------------ | ------------------------ | ------- | ----- |
| defaultValue | 可选项，传入默认的状态值 | boolean | false |



**Result**

| 参数    | 说明   | 类型         |
| :------ | ------ | ------------ |
| visible | 状态值 | Ref<boolean> |
| show    | 显示   | () => void   |
| hide    | 隐藏   | () => void   |



#### useAsync

用于处理异步任务的Hook



**代码演示**

```vue
<template>
  <view v-if="loading">loading...</view>
  <view v-if="data">
    <view v-for="item in data">{{ item.title }}</view>  
  </view>
  <view v-if="error">{{ error }}</view>
</template>

<script setup lang="ts">
  import { useAsync } from '@hooks/index';
  import { GetUsers } from '@services/index'; 
  const { data, loading, error, run } = useAsync(GetUsers, {
    immediate: true,
    onBefore(params) {
      console.log('params', params);
    },
    onSuccess(result) {
      console.log('result', result);
      console.log('params', params);
    },
    onError(error) {
      console.log('error', error);
    },
    onFinally(params, result, error) {
      console.log('result', result);
      console.log('params', params);
      console.log('error', error);
    },
  })
</script>
```



**API**

```typescript
const { visible, show, hide } = useAsync<T = any>(service: AsyncService<T>, option: AsyncOption<T>);
```



**AsyncService**

```
type AsyncService<T = any> = (params?: Records) => Promise<T>;
```



**AsyncOption**

```typescript
type AsyncOption<T = any> = {
  immediate?: boolean;
  onBefore?: (params?: Records) => void;
  onSuccess?: (result: T, params?: Records) => void;
  onError?: (error: any) => void;
  onFinally?: (
    params: Records | undefined,
    result: T | undefined,
    error: any
  ) => void;
};
```





#### useRequest

#### useLoadRefresh

#### useLoadDrop

#### usePaging

