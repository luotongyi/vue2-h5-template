
import Vue from 'vue';
import Vuex from 'vuex';

import getters from './getters'

Vue.use(Vuex)

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const files = require.context('./modules', false, /\.js$/)

const modules = files.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = files(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

/**
 * 自动化导出store状态管理
 */
const store = new Vuex.Store({
  modules,
  getters
})

export default store
