
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/**
 * 自动化导出路由模块
 * import export
 */
const files = require.context('./modules', false, /\.js$/)
const routes = [].concat(...files.keys().map(el => files(el).default))

const router = new VueRouter({
  // mode: 'history', // require service support
  // base: '/dist',
  scrollBehavior: () => ({ y: 0 }),
  routes
})

const whiteList = [
  '/test/testPage'
]

router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  // set title while route changes
  if (to.meta && to.meta.title) {
    document.title = to.meta.title || 'vue2-h5-template'
  }
  if (whiteList.indexOf(to.path) !== -1) {
    next()
  } else {
    // 路由权限控制、url参数处理、sessoion信息、store等内容处理
    next()
  }
})

export default router
