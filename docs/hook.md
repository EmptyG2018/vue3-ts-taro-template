### 目录


- [useToggle](#useToggle)
- [useVisible](#useVisible)
- [useLoading](#useLoading)
- [usePaging](#usePaging)
- [useAsync](#useAsync)
- [useRequest](#useRequest)
- [useLoadPage](#useLoadPage)
- [useLoadRefresh](#useLoadRefresh)
- [useLoadDrop](#useLoadDrop)



### useToggle

用于两个开关状态之间切换的 Hook



**代码演示**

```vue
<template>
  <view>状态值：{{ state ? '开' : '关' }}</view>
  <button @click='off'>关</button>
  <button @click='on'>开</button>
  <button @click='reverse'>切换</button>
</template>

<script setup lang="ts">
import { useToggle } from '@hooks/index';
const { state, on, off, reverse } = useToggle(false);
</script>
```



**API**

```typescript
const { state, on, off, reverse } = useToggle(defaultValue?: boolean);
```



**Params**

| 参数         | 说明                     | 类型    | 默认  |
| ------------ | ------------------------ | ------- | ----- |
| defaultValue | 可选项，传入默认的状态值 | boolean | false |



**Result**

| 参数    | 说明     | 类型           |
| :------ | -------- | -------------- |
| state   | 状态值   | Ref\<boolean\> |
| on      | 开启     | () => void     |
| off     | 关闭     | () => void     |
| reverse | 相反切换 | () => void     |



### useVisible

用于显隐两种状态之间切换的Hook



**代码演示**

```vue
<template>
  <view v-if="visible">This is a good hook.</view>
</template>

<script setup lang="ts">
import { useVisible } from '@hooks/index';
const { visible, show, hide, reverse } = useVisible(false);
</script>
```



**API**

```typescript
const { visible, show, hide, reverse } = useVisible(defaultValue?: boolean);
```



**Params**

| 参数         | 说明                     | 类型    | 默认  |
| ------------ | ------------------------ | ------- | ----- |
| defaultValue | 可选项，传入默认的状态值 | boolean | false |



**Result**

| 参数    | 说明     | 类型           |
| :------ | -------- | -------------- |
| visible | 状态值   | Ref\<boolean\> |
| show    | 显示     | () => void     |
| hide    | 隐藏     | () => void     |
| reverse | 相反切换 | () => void     |



### useLoading

用于加载状态之间切换的Hook



**代码演示**

```vue
<template>
  <view v-if="loading">loading...</view>
  <button @click='hideLoading'>取消</button>
  <button @click='showLoading'>加载</button>
</template>

<script setup lang="ts">
import { useLoading } from '@hooks/index';
const { loading, showLoading, hideLoading } = useLoading(false);
</script>
```



**API**

```typescript
const { loading, showLoading, hideLoading } = useLoading(defaultValue?: boolean);
```



**Params**

| 参数         | 说明                     | 类型    | 默认  |
| ------------ | ------------------------ | ------- | ----- |
| defaultValue | 可选项，传入默认的状态值 | boolean | false |



**Result**

| 参数        | 说明   | 类型           |
| :---------- | ------ | -------------- |
| loading     | 状态值 | Ref\<boolean\> |
| showLoading | 加载   | () => void     |
| hideLoading | 隐藏   | () => void     |



### usePaging

用于处理分页的Hook



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

</script>
```





### useAsync

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

const delay = (timer = 1000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Math.random());
    }, timer);
  });
};

const { data, loading, error, run } = useAsync(
  async () => {
    await delay(100);
    await delay(200);
  },
  {
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
  }
);
</script>
```



**API**

```typescript
const { data, loading, error, run } = useAsync<T = any>(service: AsyncService<T>, option: AsyncOption<T>);
```



**Params**

```typescript
type Params = Record<string, any>;
```



**AsyncService**

```typescript
type AsyncService<T = any> = (params?: Params) => Promise<T>;
```



**AsyncOption**

```typescript
type AsyncOption<T = any> = {
  immediate?: boolean;
  onBefore?: (params?: Params) => void;
  onSuccess?: (result: T, params?: Params) => void;
  onError?: (error: any) => void;
  onFinally?: (
    params: Params | undefined,
    result: T | undefined,
    error: any
  ) => void;
};
```



**Result**

| 参数    | 说明                                        | 类型                                |
| :------ | ------------------------------------------- | ----------------------------------- |
| data    | 请求成功返回的数据                          | Ref\<T \| undefined\>               |
| loading | 加载状态                                    | Re\<boolean\>                       |
| error   | 请求错误返回的数据                          | Ref\<any\>                          |
| run     | 手动触发 service 执行，参数会传递给 service | (*params*?: Params) => Promise\<T\> |



**Params**

| 参数    | 说明                   | 类型                    | 默认 |
| ------- | ---------------------- | ----------------------- | ---- |
| service | 必选项，传入service    | AsyncService\<T = any\> | -    |
| options | 可选项，传入的配置选项 | AsyncOption\<T = any\>  | -    |



**Options**

| 参数      | 说明                       | 类型                                                         | 默认  |
| --------- | -------------------------- | ------------------------------------------------------------ | ----- |
| immediate | 可选项，传入默认的立即执行 | boolean                                                      | false |
| onBefore  | 可选项，传入请求前的操作   | (params?: Params) => void                                    | -     |
| onSuccess | 可选项，传入请求成功的操作 | (onSuccess: T, params?: Params) => void                      | -     |
| onError   | 可选项，传入请求错误的操作 | (error: any) => void                                         | -     |
| onFinally | 可选项，传入请求完成的操作 | (params: Params \| undefined,  result: T \| undefined, error: any) => void | -     |



### useRequest

用于处理服务请求的Hook



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
import { useRequest } from '@hooks/index';
import { GetUsers } from '@services/index';
const { data, loading, error } = useRequest<API.UserItem[]>(GetUsers, {
  immediate: true;
  defaultParams: {
  	current: 1,
    size: 24
  }
});
</script>
```



**API**

```typescript
const { data, params, loading, error, run, refresh } = useRequest<T = any>(service: AsyncService<T>, options: RequestOption<T>);
```



**RequestOption**

```typescript
type RequestOption<T = any> = AsyncOption<T> & {
  defaultParams?: Params;
};
```



**Result**

| 参数    | 说明                                    | 类型                       |
| :------ | --------------------------------------- | -------------------------- |
| ...     | 同上 `useAsync` result 参数一致         |                            |
| params  | 请求参数，可通过`defaultParams`默认设置 | Ref\<Params \| undefined\> |
| refresh | 刷新请求，不会覆盖参数                  | () => void                 |





**Params**

| 参数    | 说明                   | 类型                     | 默认 |
| ------- | ---------------------- | ------------------------ | ---- |
| service | 必选项，传入service    | AsyncService\<T = any\>  | -    |
| options | 可选项，传入的配置选项 | RequestOption\<T = any\> | -    |



**Options**

| 参数          | 说明                        | 类型                   | 默认 |
| :------------ | --------------------------- | ---------------------- | ---- |
| ...           | 同上 `AsyncOption` 参数一致 | AsyncOption\<T = any\> | -    |
| defaultParams | 可选项，传入默认的请求参数  | Params                 | -    |



### useLoadPage

用于处理分页请求的Hook



**代码演示**

```vue
<template>
  <view v-if="loading">loading...</view>
  <view v-if="data">
    <view v-for="item in data">{{ item.title }}</view>
  </view>
  <view v-if="error">{{ error }}</view>
  <button @click="prev">上一页</button>
  <button @click="next">下一页</button>
  <button @click="prev({ run: true })">上一页(请求)</button>
  <button @click="next({ run: true })">下一页(请求)</button>
</template>

<script setup lang="ts">
import { useLoadPage } from '@hooks/index';
import { GetUsers } from '@services/index';
const { data, loading, error, params, prev, next, paging } = useLoadPage<API.UserItem[]>(GetUsers, {
  immediate: true;
  defaultParams: {
  	current: 1,
    size: 24
  },
  defaultPaging: {
    pageNum: 1,
    size: 16,
  },
  pagingOption: {
    currentField: 'pageNum',
    sizeField: 'size',
  }
});
</script>
```



**API**

```typescript
const { data, params, paging, loading, error, run, next, prev, refresh } = useLoadPage<T = any>(service: AsyncService<T>, options: LoadPageOption<T>);
```



**LoadPageOption**

```typescript
type LoadPageOption<T = any> = RequestOption<T> & {
  defaultPaging?: Params;
  pagingOptions?: {
    currentField?: string;
    sizeField?: string;
  }
};
```



**PageOption**

```typescript
type PageOption= { run?: boolean };
```





**Result**

| 参数   | 说明                                              | 类型                             |
| :----- | ------------------------------------------------- | -------------------------------- |
| ...    | 同上 `useRequest` result 参数一致                 |                                  |
| paging | 分页参数                                          | Ref\<Params \| undefined\>       |
| next   | 下一页，传入`{ run: true }`分页请求，不传参仅分页 | (pageOpton?: PageOption) => void |
| prev   | 上一页，传入`{ run: true }`分页请求，不传参仅分页 | (pageOpton?: PageOption) => void |





**Params**

| 参数    | 说明                   | 类型                     | 默认 |
| ------- | ---------------------- | ------------------------ | ---- |
| service | 必选项，传入service    | AsyncService\<T = any\>  | -    |
| options | 可选项，传入的配置选项 | RequestOption\<T = any\> | -    |



**Options**

| 参数          | 说明                          | 类型                     | 默认 |
| :------------ | ----------------------------- | ------------------------ | ---- |
| ...           | 同上 `RequestOption` 参数一致 | RequestOption\<T = any\> | -    |
| defaultPaging | 可选项，传入默认的分页参数    | Params                   | -    |
| pagingOptions | 可选项，分页配置选项          | PagingOptions            | -    |



**Paging**

| 参数    | 说明                                                 | 类型 | 默认 |
| :------ | ---------------------------------------------------- | ---- | ---- |
| current | 可选项，分页当前索引，`currentField`可配置自定义字段 | any  | 1    |
| size    | 可选项，分页大小，`sizeField`可配置自定义字段        | any  | 16   |



**pagingOptions**

| 参数         | 说明                     | 类型   | 默认    |
| :----------- | ------------------------ | ------ | ------- |
| currentField | 可选项，分页当前索引字段 | string | current |
| sizeField    | 可选项，分页大小字段     | string | size    |



### useLoadRefresh

用于处理请求刷新的hook



**代码演示**

```vue
<template>
  <view v-if="loading">loading...</view>
  <view v-if="data">{{ data }}</view>
  <buttonn @click="run">刷新</buttonn>
  <buttonn @click="run({ pullDownRefresh: true })">触发下拉刷新</buttonn>
</template>

<script setup lang="ts">
import { useRequest, useLoadRefresh } from '@hooks/index';
import { GetUsers, GetProfile } from '@services/index';

const {
  data: users,
  loading: userLoading,
  run: userAsync
} = useRequest<API.UserItem[]>(GetUsers, {
  immediate: false
});

const {
  data: profile,
  loading: profileLoading,
  run: profileAsync
} = useRequest<API.UserProfile>(GetProfile, {
  immediate: false
});

const { data, loading, run } = useLoadRefresh(
  async () => {
    await userAsync();
    await profileAsync();
  },
  { immediate: true }
});
</script>
```



**API**

```typescript
const { data, loading, error, run } = useLoadRefresh<T = any>(service: AsyncService<T>, option: AsyncOption<T>);
```



**Result**

| 参数 | 说明                                        | 类型                                      |
| :--- | ------------------------------------------- | ----------------------------------------- |
| ...  | 同上 `useAsync` result 参数一致             |                                           |
| run  | 手动触发 service 执行，参数会传递给 service | (*runOption*?: RunOption) => Promise\<T\> |



**RunOption**

| 参数            | 说明     | 类型    | 默认  |
| :-------------- | -------- | ------- | ----- |
| pullDownRefresh | 下拉刷新 | boolean | false |



### useLoadDrop

将会持续更新...
