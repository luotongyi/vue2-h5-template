# vue2-h5-template
基于 Vue2 + JavaScript + Vue-Cli4.0 + vant ui + sass + axios 封装 + vconsole 移动端调试，构建手机端模板脚手架

* 项目地址：[github](https://github.com/luotongyi/vue2-h5-template)

### Node 版本要求
`Vue CLI` 需要 Node.js 8.9 或更高版本 (推荐 12.xx)。

本示例 Node.js v12.22.10

### 项目结构
```js
vue2-h5-template -- UI 主目录  
├── public -- 静态资源  
├ ├── favicon.ico -- 图标  
├ ├── index.html -- 首页  
├ └── static -- 外部 js 文件  
├── src -- 源码目录  
├ ├── api -- 后端交互的接口目录  
├ ├ ├── index.js -- 后端交互的接口  
├ ├ └── modules -- 按业务区分的接口目录  
├ ├── assets -- 图片资源目录  
├ ├── components -- 封装的组件  
├ ├── pages -- 业务上的 vue 页面  
├ ├ ├── index.js -- 自动化匹配页面路由的 js  
├ ├ └── test -- 按业务区分的 demo 页面  
├ ├── route -- VUE 路由  
├ ├ ├── index -- 自动化导出路由管理  
├ ├ └── modules -- 按业务区分的路由目录  
├ ├── store -- VUEX  
├ ├ ├── index -- 自动化导出 store 状态管理 
├ ├ ├── getters.js -- 常用 state  
├ ├ └── modules -- 按业务区分的 store 目录
├ ├── styles -- 样式  
├ ├ ├── index.scss -- 基础样式统一导入管理 
├ ├ ├── base.scss -- 常用基础样式 
├ ├ └── pages -- 按业务区分的样式目录
├ ├── utils -- 工具包  
├ ├ ├── auth.js -- cookie 设置
├ ├ ├── request.js -- axios 封装
├ ├ ├── constants.js -- 常量
├ ├ ├── platform.js -- 浏览器、iOS、Android区分
├ ├ ├── prompt.js -- 提示语
├ ├ ├── request.js -- axios 封装
├ ├ ├── security.js -- 接口加解密
├ ├ ├── share.js -- 微信、小程序分享
├ ├ ├── utils.js -- 工具
├ ├ └── validate.js -- 正则  
├ ├── App.vue -- 根组件  
├ ├── main.js -- 入口 js  
├── .env.development -- 开发环境  
├── .env.production -- 生产环境  
├── .gitignore -- git 忽略  
├── babel.config.js -- barbel 配置入口  
├── package.json -- 依赖管理  
└── vue.config.js -- vue cli4 的 webpack 配置
```

### 启动项目

```bash
git clone https://github.com/luotongyi/vue2-h5-template.git

cd vue2-h5-template

npm install

npm run serve
```

### 项目配置介绍
`package.json` 里的 `scripts` 配置 `serve` `lint` `build`，通过 `--mode xxx` 来执行不同环境

- 通过 `npm run serve` 启动本地 , 执行 `development`
- 通过 `npm run build` 打包正式 , 执行 `production`
- 通过 `npm run lint` lint校验 

```js
"scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
}
```

&emsp;&emsp;以 `VUE_APP_` 开头的变量，在代码中可以通过 `process.env.VUE_APP_` 访问。  
&emsp;&emsp;比如,`VUE_APP_ENV = 'development'` 通过`process.env.VUE_APP_ENV` 访问。  
&emsp;&emsp;除了 `VUE_APP_*` 变量之外，在你的应用代码中始终可用的还有两个特殊的变量`NODE_ENV` 和`BASE_URL`
在项目根目录中新建`.env.*`

- .env.development 本地开发环境配置

```bash
NODE_ENV='development'
# must start with VUE_APP_
VUE_APP_ENV = 'development'

```

- .env.production 正式环境配置

```bash
 NODE_ENV='production'
# must start with VUE_APP_
VUE_APP_ENV = 'production'
```
