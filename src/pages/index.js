
/**
 * ignore components folder
 * 第四个参数：'lazy-once'
 */
const files = require.context('./', true, /^((?!components).)*\.vue$/)

let path = {}
try {
  path = files.keys().reduce((o, el) => {
    const arr = el.split('/')
    const len = arr.length
    if (len) {
      let name = arr[len - 1].replace('.vue', '')
      if (name === 'index') {
        if (!arr[len - 2]) throw new Error('请不要在pages文件下直接建vue文件')
        name = arr[len - 2]
      }
      if (o[name]) console.error(`请修改文件${el}，存在相同文件名${name}.vue`)
      o[name] = el
    }
    return o
  }, {})
} catch (e) {
  console.error(e)
}

/**
 * name: vue文件名 遇到index.vue取的是父级目录名
 */
function _import(name) {
  return async() => {
    const components = await files(path[name])
    return components.default
  }
}

export default _import
