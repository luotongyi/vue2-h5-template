
/**
 * 去掉收尾+中间的空格
 * @returns 没有空格的string
 */
export function cleanAllSpace(str) {
  const rst = str || ''
  const result = rst.replace(/^[\s\r\n]+|[\s\r\n]+$/g, '')
  return result
}

/**
 * 去掉收尾空格
 * @returns 没有空格的string
 */
export function trimSpace(str) {
  const rst = str || ''
  const result = rst.trim()
  return result
}

/**
* 清除所有缓存的localStorage/Vuex同步数据
*/
export function clearAllCache() {
  // localStorage.clear()
  // store.dispatch('clearAllCache')
}

/**
* 通过vuex缓存数据
* @param {String} key
* @param {Object} info
*/
export function setVuexStorage(key, info) {
  // const cacheInfo = {}
  // if (key && (info || Object.keys(info).length !== 0)) {
  //   if (typeof info === 'string' || info instanceof String) {
  //     localStorage.setItem(key, info)
  //   } else {
  //     localStorage.setItem(key, JSON.stringify(info))
  //   }
  //   cacheInfo[key] = info
  //   store.dispatch('setCaches', cacheInfo)
  // }
}

/**
* 获取vuex缓存的信息
* @param {string} key
*/
export function getVuexStorage(key) {
  // if (key) {
  //   let info = null
  //   const cacheInfo = store.state.cache.caches[key]
  //   if (!cacheInfo || Object.keys(cacheInfo).length === 0) {
  //     const obj = localStorage.getItem(key)
  //     info = JSON.parse(obj)
  //   } else {
  //     info = cacheInfo
  //   }
  //   return info
  // }
}
