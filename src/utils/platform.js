
const TERMINAL_PLATFORM = {
  PC: 0, // 电脑端
  IOS: 1, // 苹果端
  ANDROID: 2 // 安卓端
}

const WEB_CHANNEL = {
  NORMAL: 0, // 默认浏览器，全浏览器/没有浏览器
  MINI_PROGRAM: 1, // 小程序浏览器
  PUBLIC: 2, // 微信公众版浏览器
  QQ: 3, // QQ浏览器
  APP: 4, // APP浏览器
  ALIPAY: 5 // 支付宝
}

/**
 * 获取页面所在终端
 * 苹果、安卓、电脑
 */
export function checkTerminal() {
  const ua = window.navigator.userAgent.toLowerCase()
  // iOS的web终端
  const ios = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
  // Android的web终端
  const android = ua.indexOf('android') > -1 || ua.indexOf('Linux') > -1 || (ua.match(/android/i) === 'android' && ua.match(/iemobile/i) !== 'iemobile')
  // PC终端
  // const pc = !ios && !android
  if (ios) {
    return TERMINAL_PLATFORM.IOS
  } else if (android) {
    return TERMINAL_PLATFORM.ANDROID
  } else {
    return TERMINAL_PLATFORM.PC
  }
}

/**
 * 获取页面所在平台
 * QQ、微信小程序、微信公众号、默认（不区分）
 */
export function checkWebPlatform() {
  const ua = window.navigator.userAgent.toLowerCase()
  // QQ浏览器:QQ
  const qq = ua.match(/qq/i) === 'qq'
  let platform = ''
  if (ua.match(/xxxxx/i) === 'xxxxx') {
    platform = WEB_CHANNEL.APP
  } else if (ua.match(/micromessenger/i) === 'micromessenger') { // MicroMessenger
    // 判断是否是小程序打开还是微信公众号打开
    if (window.__wxjs_environment === 'miniprogram' || ua.match(/miniprogram/i) === 'miniprogram') {
      platform = WEB_CHANNEL.MINI_PROGRAM
    } else {
      platform = WEB_CHANNEL.PUBLIC
    }
  } else if (ua.match(/alipay/i) === 'alipay') {
    platform = WEB_CHANNEL.ALIPAY
  } else if (qq) {
    platform = WEB_CHANNEL.QQ
  } else {
    platform = WEB_CHANNEL.NORMAL
  }
  return platform
}

