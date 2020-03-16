# 页面开发引导

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

## 开发建议

1. 新建模块
2. 配置Api
3. 编写Dao
4. 编写Model
5. 编写View
6. 配置Router
7. 阶段性测试
8. 编写Store
9. 编写Action
10. 编写Service
11. 测试交付

## Step1 新建模块

1. 在`src/`源代码目录下找到`crud-example`模板文件夹，复制一份
2. 修改模块文件夹名称，修改模块下`main.js`中的`MODULE_NAME`常量
3. 根据自己的情况，保留会`删除`main.js中`导入与注册httpEngine`的两行代码

## Step2 配置API

1. 在`src/${MODULE_NAME}/api/`目录下根据业务功能创建一个js文件
2. 参照现有的模板配置文件配置和后端约定好的接口规则
3. 新添加的配置文件汇总到index.js

## Step3 编写Dao

1. 在`src/${MODULE_NAME}/dao/`目录下根据业务功能创建一个js文件
2. 参照现有的模板代码文件调用Api，并进行数据的提取与返回（当然也可以对提交的数据进行转换）
3. 新添加的业务文件汇总到index.js

## Step4 编写Model

1. 在`src/${MODULE_NAME}/model/`目录下根据业务功能或表单数据创建Modle类或者Enums

## Step5 编写View

注：组件等价于类，采用`帕斯卡(大驼峰)`命名法命名

1. 在`src/${MODULE_NAME}/view/`目录下根据业务功能创建子文件夹xxx
2. 在`src/${MODULE_NAME}/view/${xxx}`目录下创建`Index.vue`业务功能入口页面组件

## Step6 配置Router

1. 在`src/${MODULE_NAME}/router/`目录下找到`index.js`
2. 参照模板，根据当前模块和业务功能配置`router`
3. 可以通过`redirect`属性配置某业务功能默认首页

## Step7 阶段性测试

1. 启动或保持开发服务: `npm run serve`
2. 使用浏览器访问页面测试是否生效: `例: localhost:7070/crud`

## Step8 编写Store

1. 在`src/${MODULE_NAME}/store/`目录下根据业务功能创建文件
2. 参照模板定义需要共享或缓存的状态(数据)
3. 这里有几个关键的东西需要关注，他们分别是：`state(类比组件data) getters(类比组件computed) types(mutations名称) mutations(唯一修改state的方法)`

## Step9 编写Action

1. 在`src/${MODULE_NAME}/action/`目录下根据业务功能创建文件
2. View中需要响应的事件，自己根据情况(很常见的情况是该操作是否关联Store数据)，在View中编写Methods进行处理，或者编写对应的Action进行处理
3. 在Action编写的处理逻辑要在View中调用，可使用`mapAction`函数提取指定模块下的Action到组件自身的methods中，当做自身methods调用即可。

## Step9 编写Service

1. 如果在编写View、Action、Dao逻辑时，发现有不同层可共享的业务逻辑，或者是需要大量编码的逻辑，可以写到`src/${MODULE_NAME}/service/`中。

## Step10 测试交付

1. 运行命令打包代码到dist目录下: `npm run build`。
2. 把打包好的代码部署到任意静态文件服务器(apache、nginx)即可。
3. 也可以使用持续集成(CI)技术实现一键打包部署。
