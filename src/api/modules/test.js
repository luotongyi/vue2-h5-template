
import request from '@/utils/request'
import api from '../index'

class TestApi {
  
  testGet(params) {
    return request({
      url: api.test.testApi,
      method: 'GET',
      params
    })
  }
  testPost(params) {
    return request({
      url: api.test.testApi,
      method: 'POST',
      data: params
    })
  }
}

export default new TestApi()
