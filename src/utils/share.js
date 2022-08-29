
/**
 * 微信右上角按钮分享配置
 * @param {*} 参数：imgUrl, link, desc, title
 */
export function wxShareConfig(params) {
  const { imgUrl, link, desc, title } = params
  window.document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
    /* eslint-disable */
    WeixinJSBridge.on('menu:share:appmessage', function(){
      WeixinJSBridge.invoke('sendAppMessage', {
        img_url: imgUrl,
        link: link,
        desc: desc,
        title: title,
        img_width: '120',
        img_height: '120'
      })
    })
    WeixinJSBridge.on('menu:share:timeline', function(){
      WeixinJSBridge.invoke('shareTimeline', {
        img_url: imgUrl,
        link: link,
        desc: desc,
        title: title,
        img_width: '120',
        img_height: '120'
      })
    })
  })
}

/**
 * 小程序原生分享
 * 通过H5把分享数据传给小程序
 */
export function miniProgramShareConfig(params) {
  const { imgUrl, link, desc, title  } = params
  // 约定的一些参数
  const url = encodeURIComponent(link)
  const path = `xxxx${url}` // 小程序的webview容器路径
  wx.miniProgram.postMessage({
    data: {
      desc: desc,
      share_img: imgUrl,
      share_title: title,
      share_path: path 
    }
  })
}
