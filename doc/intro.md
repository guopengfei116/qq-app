# 项目说明

## 开发环境要求

1. node >= 10.x
2. npm >= 5.x

## 目录结构简介

```text
├── build              构建脚本目录
│ ├── build.sh           生产环境构建脚本
│ ├── environment.sh     独立部署环境安装脚本
│ ├── server.sh          独立部署脚本
├── doc                文档目录
│ ├── guide.md           开发引导
├── public             公开访问目录
│ ├── favicon.ico        站点图标(自行替换)
│ ├── index.html         站点入口
├── qq                 框架能力目录
│ ├── qq-core            核心类库
│ ├── qq-runtime         运行时
│ ├── qq-ui              提供UI组件
│ ├── qq-guide           示例与引导
├── src                项目源代码目录
│ ├── crud-example       增删查改示例模块
│ │ ├── action             响应View事件，串联View、Dao、Store，职责类似Controller
│ │ ├── api                Web接口配置
│ │ │ ├── engine             自定义引擎配置(配置不同模块或类型接口的公共部分)
│ │ │ ├── index.js           汇总Api配置，在模块根main.js中注册(不包含engine，engine要单独注册)
│ │ ├── assets             静态资源
│ │ │ ├── font               字体库
│ │ │ ├── img                图片资源
│ │ │ ├── style              样式文件
│ │ ├── dao                数据持久层，在这里进行WebAPI调用或数据持久化API，处理数据的提取或转换逻辑
│ │ │ ├── index.js           汇总dao文件，将来使用的时候可统一导入路径(觉得无所谓，也可以不汇总)
│ │ ├── model              数据模型，为了规范、约定不同层或组件间的数据模型
│ │ ├── router             页面路由配置，关联View
│ │ │ ├── index.js           汇总路由配置，在模块根main.js中注册
│ │ ├── service            模块公共业务逻辑，通常供View、Action、Dao使用
│ │ ├── store              数据缓存层，保存项目运行时的全局状态，可夸页面与组件使用
│ │ │ ├── index.js           汇总store，在模块根main.js中注册
│ │ ├── view               视图组件，主要编写ui与交互，部分业务交互也可以调用action解耦实现
│ │ ├── main.js            注册模块到项目
│ ├── plugins            全局插件按照
│ │ ├── element.js         按需安装Element组件库
│ │ ├── filter.js          过滤器安装
│ ├── App.jsx            项目根组件
│ ├── main.js            项目运行入口
├── .browserslistrc    要兼容的目标浏览器配置
├── .commitlintrc.js   Git提交规范配置
├── .editorconfig      编辑器配置
├── .env               全局环境变量
├── .env.development   开发环境变量
├── .env.production    部署环境变量
├── .env.test          测试环境变量
├── .eslintignore.js   Eslint忽略配置
├── .eslintrc.js       Eslint规则配置
├── .gitattributes     Git属性配置
├── .gitignore         Git忽略文件配置
├── .npmrc             Npm配置
├── babel.config.js    Babel编译器配置
├── jest.config.js     Jest测试框架配置
├── jsconfig.json      Js语法提示配置
├── CHANGELOG.md       Git日志
├── package-lock.json  项目依赖版本锁定文件
├── package.json       项目描述文件
├── postcss.config.js  Postcss配置
├── README.md          项目说明文档
├── vue.config.js      Vue-Cli配置
```
