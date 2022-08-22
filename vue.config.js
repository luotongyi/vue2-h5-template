
'use strict'
const path = require('path')

// Gzip压缩需要的内容
// const CompressionPlugin = require('compression-webpack-plugin')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const port = process.env.port || 9999 // dev port

module.exports = {
  publicPath: '',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: true, //配置sorceMap
  devServer: {
    port: port,
    hot: true,
    open: true,
    overlay: {
      warnings: false,
      errors: true,
    },
    proxy: {
      // change xxx-api/login => mock/login
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      [process.env.VUE_APP_BASE_API]: {
        target: 'http://xxxxx/dev-api',
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: '',
        },
      },
    },
  },
  configureWebpack(config) {
    if (process.env.NODE_ENV !== 'development') {
      // 打包的时候开启gzip可以很大程度减少包的大小，非常适合于上线部署，需要nginx配合
      config.plugins.push(
        // new CompressionPlugin({
        //   test: /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i,
        //   threshold: 10240,
        //   deleteOriginalAssets: false,
        // }),
      )
    }
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    return {
      resolve: {
        alias: {
          '@': resolve('src')
        },
      },
    }
  }
}
