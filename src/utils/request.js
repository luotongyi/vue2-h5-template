
import axios from 'axios'

// create an axios instance
axios.defaults.withCredentials = true
const CancelToken = axios.CancelToken
const source = CancelToken.source()

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 30000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  (config) => {
    // set common request headers
    configCommonHeaders(config)
    // config encrypted request
    // configEncryptedRequest(config)
    config.cancelToken = source.token // 全局添加cancelToken
    // formData请求
    // configFormDataRequest(config)
    return config
  },
  (error) => {
    // do something with request error
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response) => {
    const res = response.data
    // 获取正常数据，xxxx是与后端约定的成功code
    if (res.respCode && res.respCode !== 'xxxx') {
      return Promise.reject(res)
    }
    return res
  },
  (error) => {
    // 获取状态码
    const status = error.response ? error.response.status : ''
    // 获取错误信息
    let errorMsg = error.message
    const errorData = error.response ? error.response.data : {}
    if (status === 500) {
      if (process.env.NODE_ENV === 'development') {
        console.log('response with error : ' + errorMsg) // for debug
      }
      errorMsg = '服务器开小差了~'
    }
    // 弹框提示错误信息
    // / TODO

    return Promise.reject(errorData)
  }
)

function configCommonHeaders(config) {
  if (!config.headers['Content-Type']) {
    config.headers['Content-Type'] = 'application/json'
  }
  return config
}

// function configFormDataRequest(config) {
//   if (config.url === '/xxxx') {
//     config.processData = false
//     config.mimeType = 'multipart/form-data'
//     config.contentType = false
//   }
//   return config
// }

export default service
