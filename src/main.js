import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

import './styles/index.scss'

import vConsole from 'vconsole'

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line new-cap
  Vue.use(new vConsole())
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
