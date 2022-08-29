
/**
 * 校验手机号
 * @param arg /^1[3456789]\d{9}$/
 * @returns {boolean}
 */
export function validMobile(arg) {
  const reg = /^1[3456789]\d{9}$/
  return reg.test(arg)
}

/**
 * 校验是否是数字
 * @param arg /^[\d]+$/
 * @returns {boolean}
 */
export function validNumber(arg) {
  const reg = /^[\d]+$/
  return reg.test(arg)
}

/**
 * 校验是否是小写字母
 * @param {string} arg
 * @returns {Boolean}
 */
export function validLowerCase(arg) {
  const reg = /^[a-z]+$/
  return reg.test(arg)
}

/**
 * 校验是否是大写字母
 * @param {string} arg
 * @returns {Boolean}
 */
export function validUpperCase(arg) {
  const reg = /^[A-Z]+$/
  return reg.test(arg)
}

/**
 * 校验是否是字母
 * @param {string} arg
 * @returns {Boolean}
 */
export function validAlphabets(arg) {
  const reg = /^[A-Za-z]+$/
  return reg.test(arg)
}

/**
 * 可以通过判断，确定使用 a 标签打开还是路由打开页面
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * 校验是否是合法的url
 * @param {string} url
 * @returns {Boolean}
 */
export function validURL(url) {
  // const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  const reg = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/
  return reg.test(url)
}

/**
 * 校验是否是合法的邮箱
 * @param {string} email
 * @returns {Boolean}
 */
export function validEmail(email) {
  const reg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
  return reg.test(email)
}

/**
 * 校验身份证：15位或者18位
 * @param arg
 * @returns {boolean}
 */
export function validIDCard(arg) {
  // 加了省市区校验
  // const reg = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/
  const reg = /^([a-zA-Z\d]{15}|[a-zA-Z\d]{18})$/
  return reg.test(arg)
}

/**
 * 校验是否是中文
 * @param arg
 * @returns {boolean}
 */
export function validCN(arg) {
  const reg = /^[\u4e00-\u9fa5]$/
  return reg.test(arg)
}
