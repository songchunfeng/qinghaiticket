import axios from 'axios'
import { Message } from 'element-ui'

axios.interceptors.request.use(function (config) {
  // 发请求前做的一些处理，数据转化，配置请求头，设置token,设置loading等，根据需求去添加
//   config.data = JSON.stringify(config.data) //数据转化,也可以使用qs转换
//   config.headers = {
//     'Content-Type': 'application/x-www-form-urlencoded' // 配置请求头
//   }
//   // 注意使用token的时候需要引入cookie方法或者用本地localStorage等方法，推荐js-cookie
//   const token = getCookie('名称')//这里取token之前，你肯定需要先拿到token,存一下
//   if (token) {
//     config.params = { 'token': token } // 如果要求携带在参数中
//     config.headers.token = token //如果要求携带在请求头中
//    }
  return config
}, function (error) {
  // 对请求失败做处理
  return Promise.reject(error)
})
axios.interceptors.response.use(function (response) {
  return response
}, function (err) {
  if (err && err.response) {
    switch (err.response.status) {
      case 400: err.message = '请求错误(400)'; break
      case 401: err.message = '未授权，请重新登录(401)'; break
      case 403: err.message = '拒绝访问(403)'; break
      case 404: err.message = '请求出错(404)'; break
      case 408: err.message = '请求超时(408)'; break
      case 500: err.message = '服务器错误(500)'; break
      case 501: err.message = '服务未实现(501)'; break
      case 502: err.message = '网络错误(502)'; break
      case 503: err.message = '服务不可用(503)'; break
      case 504: err.message = '网络超时(504)'; break
      case 505: err.message = 'HTTP版本不受支持(505)'; break
      default: err.message = `连接出错(${err.response.status})!`
    }
  } else {
    if (err && err.message.includes('timeout')) { // 判断请求异常信息中是否含有超时timeout字符串
      err.message = '网络连接超时' // reject这个错误信息
    } else {
      err.message = '连接服务器失败!'
    }
  }
  Message.error(err.message)
  return Promise.reject(err)
})
export default axios
