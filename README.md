├─node_modules                    依赖包
├─types                           类型声明文件
|   └─global.d.ts
├─.plop
|   ├─generator                   模板生成配置
|   └─template                    模板
├─config
|   ├─dev.js                      开发环境配置
|   ├─index.js                    通用配置
|   └─prod.js                     生产环境配置


├─app.config.ts                   项目入口配置
├─app.scss                        项目总通用样式
├─app.ts                          项目入口文件
├─index.html                      主页面
├─wx.config.ts                    项目自定义配置
├─utils                           通用工具
|   ├─index.ts
|   └─utils.ts
├─stores                          全局状态管理
|   └counter.ts
├─services
|    ├─index.ts
|    ├─request.ts                  请求封装
|    ├─typings.d.ts                定义接口类型文件
|    └─user.ts                      用户信息文件
├─pages
|   ├─index                        页面目录
|   |   ├─components               页面级组件
|   |   ├─hooks                    页面级hook
|   |   ├─index.config.ts          页面配置
|   |   ├─index.scss               页面样式
|   |   └-index.vue                页面入口组件
├─hooks
|   ├─index.ts
|   ├─useLoading.ts                加载状态
|   ├─usePage.ts
|   ├─usePaging.ts                 分页
|   ├─useRequest.ts                接口请求
|   ├─useToggle.ts                 切换状态
|   └─useVisible.ts                 显示状态
├─dicts                            字典字段
|   └─index.ts
├─components                       公用组件
|     └─Title.vue


├─.commitlintrc.json              commit提交规则配置
├─.editorconfig                   ide统一编码风格
├─.eslintignore                   语法检测过滤配置
├─.eslintrc.json                  语法检测配置
├─.gitignore                      git提交过滤
├─.prettierignore                 代码样式格式化过滤配置
├─.prettierrc.json                代码样式格式化配置
├─package.json                    包信息
├─plopfile.js                     生成模板入口脚本
├─README.md                       说明文档
├─tsconfig.json                   TS配置
