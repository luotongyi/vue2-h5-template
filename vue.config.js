
'use strict'
const path = require('path')
// Gzip压缩需要的内容
// const CompressionPlugin = require('compression-webpack-plugin')
const port = process.env.port || 9999 // dev port

const cdn = {
  css: [],
  js: []
}

function resolve(dir) {
  return path.join(__dirname, dir)
}

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
  },
  chainWebpack(config) {
    // when there are many pages, it will cause too many meaningless requests
    config.plugins.delete('prefetch')
    config.plugins.delete('preload')

    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()

    // set preserveWhitespace
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.preserveWhitespace = true
        return options
      })
      .end()
    
    // https://webpack.js.org/configuration/devtool/#development
    config
      .when(process.env.NODE_ENV === 'development',
        config => config.devtool('cheap-source-map')
      )
    
    config
      .when(process.env.NODE_ENV !== 'development',
        config => {
          config
            .plugin('ScriptExtHtmlWebpackPlugin')
            .after('html')
            .use('script-ext-html-webpack-plugin', [{
            // `runtime` must same as runtimeChunk name. default is `runtime`
              inline: /runtime\..*\.js$/
            }])
            .end()
          config
            .optimization.splitChunks({
              chunks: 'all',
              cacheGroups: {
                libs: {
                  name: 'chunk-libs',
                  test: /[\\/]node_modules[\\/]/,
                  priority: 10,
                  chunks: 'initial' // only package third parties that are initially dependent
                },
                commons: {
                  name: 'chunk-commons',
                  test: resolve('src/components'), // can customize your rules
                  minChunks: 3, //  minimum common number
                  priority: 5,
                  reuseExistingChunk: true
                }
              }
            })
          config.optimization.runtimeChunk('single')
        }
      )

    if (process.env.NODE_ENV !== 'development') {
      config.plugin('html').tap(args => {
        args[0].cdn = cdn // 配置CDN列表
        return args
      })
    }
  }
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       // data V8-、 prependData V8、additionalData V10+
  //       additionalData: '@import "@/styles/index.scss"' // 全局引入
  //     }
  //   }
  // }
}
