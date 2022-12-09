# 标题

> 描述内容





- [技术栈]()
- [规范标准]()
- [项目结构]()
- [npm脚本]()
- [代码调试]()
- [环境变量]()
- [别名引用]()







### 技术栈

目前该项目采用以下技术栈：

- #### [微信小程序官方开发文档](https://developers.weixin.qq.com/miniprogram/dev/framework/)



- #### [Taro](https://taro-docs.jd.com/docs/)

  ###### Taro 是一个开放式跨端跨框架解决方案，支持使用 React/Vue/Nerv 等框架来开发 微信 / 京东 / 百度 / 支付宝 / 字节跳动 / QQ / 飞书 小程序 / H5 / RN 等应用。



- #### [Vue3](https://cn.vuejs.org/)

  ###### Vue 3.0 是渐进式JavaScript 框架，易学易用，性能出色，适用场景丰富的 Web 前端框架。



- #### [TypeScript](https://www.tslang.cn/)

  ###### TypeScript 是一种基于 JavaScript 构建的强类型编程语言，可为您提供任何规模的更好工具。



- #### [SCSS](https://www.sass.hk/)

  ###### Sass 是一款强化 CSS 的辅助工具，它在 CSS 语法的基础上增加了变量 (variables)、嵌套 (nested rules)、混合 (mixins)、导入 (inline imports) 等高级功能，这些拓展令 CSS 更加强大与优雅。使用 Sass 以及 Sass 的样式库（如 Compass）有助于更好地组织管理样式文件，以及更高效地开发项目。



- #### [Nut-UI](https://nutui.jd.com/#/)

- ###### Nut-UI 是京东风格的轻量级移动端 Vue 组件库



- #### [Pinia](https://pinia.vuejs.org/)

  ###### Pinia 是拥有组合式 API 的 Vue 状态管理库，同时支持 Vue 2 和 Vue 3







### 规范标准

目前该项目采用以下规范标准：

- #### [vue 语法规范规则](https://vuejs.org/style-guide/rules-recommended.html)

- #### [Standard  js语法规范规则](https://standardjs.com/)

- #### [bem css样式命名规范](https://getbem.com/)







### 项目结构

![tree](.\docs\tree.png)







### npm 脚本

#### 安装依赖

```shell
# 使用 npm
npm install

# OR 使用 yarn
yarn
```



#### 开发环境运行

```shell
# 使用 npm
npm run dev:weapp

# OR 使用 yarn
yarn dev:weapp
```



#### 生产环境运行

```shell
# 使用 npm
npm run prd:weapp

# OR 使用 yarn
yarn prd:weapp
```



#### 开发环境打包

```shell
# 使用 npm
npm run build:dev:weapp

# OR 使用 yarn
yarn build:dev:weapp
```



#### 生产环境打包

```shell
# 使用 npm
npm run build:prd:weapp

# OR 使用 yarn
yarn build:prd:weapp
```



#### 代码检测

```shell
# 使用 npm
npm run lint:eslint

# OR 使用 yarn
yarn lint:eslint
```



#### 代码检查（仅限修改文件）

```shell
# 使用 npm
npm run lint:lint-staged

# OR 使用 yarn
yarn lint:lint-staged
```



#### 修复代码

```shell
# 使用 npm
npm run fix:eslint

# OR 使用 yarn
yarn fix:eslint
```



#### 格式化代码

```shell
# 使用 npm
npm run fix:prettier

# OR 使用 yarn
yarn fix:prettier
```



#### 安装 git hook 管理

```shell
# 使用 npm
npm run prepare

# OR 使用 yarn
yarn prepare
```



#### commit 提交（包含规范描述）

```shell
# 使用 npm
npm run commit

# OR 使用 yarn
yarn commit
```



#### 生成模板

```shell
# 使用 npm
npm run plop

# OR 使用 yarn
yarn plop
```



#### 升级依赖

```shell
# 使用 npm
npm run deps

# OR 使用 yarn
yarn deps
```









### 代码调试

在taro框架下开发vue 3.0项目时，已经支持vue devtools工具代码调试，但仍有xu'qiu







### 环境变量

在项目根目录中的`config`目录中包含**dev.js (开发环境)**、**prod.js (生产环境)**这两个文件中，在`defineConstants`字段可定义变量。**需要注意在定义变量需要`JSON.stringify`方法包裹使用**。案例见以下：

```javascript
// dev.js （开发环境）

module.exports = {
  env: {
    NODE_ENV: '"development"',
  },

  defineConstants: {
    REQUEST_URL: JSON.stringify('【生成环境】http://111.111.11.111:8080/'),
    PRODUCTION: JSON.stringify(true),
  },
  ...
};

```



可在代码直接使用

```javascript
// *.ts\vue

console.log(REQUEST_URL);
```

如有不清楚，也可访问官方提供的针对[环境变量](https://taro-docs.jd.com/docs/config-detail#env)的说明。






### 别名引用

通过别名引用配置可以简化很长的模块引用，也很好地解决vs code不能跳转相对应文件中，以减少开发者对路径问题的烦恼。

在项目根目录中的`config`目录中包含**index.js(通用环境)**这个文件中，在`alias`字段可定义路径别名。

```javascript
// index.js （通用环境）
const path = require('path');

module.exports = {
  ...
  alias: {
    '@': path.resolve(__dirname, '..', 'src'),
    '@components': path.resolve(__dirname, '..', 'src/components'),
    '@hooks': path.resolve(__dirname, '..', 'src/hooks'),
    '@services': path.resolve(__dirname, '..', 'src/services'),
    '@stores': path.resolve(__dirname, '..', 'src/stores'),
    '@utils': path.resolve(__dirname, '..', 'src/utils'),
  },
  ...
};

```



针对TS语法的项目中，同时**还需要配置TS别名，以更好地配置TS语法自动填充、语法检测、跳转等功能**，配置如下：

```json
// tsconfig.json （TS配置文件）

{
  ...
  "compilerOptions": {
    ...
    "paths": {
      "@/*": [
        "src/*"
      ],
      "@components/*": [
        "src/components/*"
      ],
      "@hooks/*": [
        "src/hooks/*"
      ],
      "@services/*": [
        "src/services/*"
      ],
      "@stores/*": [
        "src/stores/*"
      ],
      "@utils/*": [
        "src/utils/*"
      ],
      "@dicts/*": [
        "src/dicts/*"
      ]
    }
    ...
  }
  ...
}


```

该项目中，已配置`src`、`components`、`hooks`、`services`、`stores`、`utils`、`dicts`路径别名，已满足绝大部分的需求。



在代码使用

```vue
// index.vue （index组件）

...

<script setup lang="ts">
  import appConfig from '@/app.config';
  import { useVisible } from '@hooks/index';
  import { useCounterStore } from '@stores/counter';
  import { GetProfile } from '@services/index';
</script>

...
```

**注意在引入模块中，需要引入具体的文件，如`@hooks`，需改为`@hooks/index`，这样是为了语法规范，其次前者在ts别名中不能更好地识别。**在[规范标准]()中也会相关说明。

如有不清楚，也可访问官方提供的针对[路径别名](https://taro-docs.jd.com/docs/config-detail#alias)的说明。

