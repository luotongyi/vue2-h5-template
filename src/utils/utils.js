
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
