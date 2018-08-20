import http from './http.js' // 导入我们封装好的axios对象
import apis from './api.js'// 导入我们封装好的apis对象
import qs from 'qs'

// 获取分享信息/
export function getShareData(param){
  console.log(param)
  return http.post(apis.getShareData+param)
}

// 检查是否注册
export function checkExistence(param){
  console.log(param)
  return http.post(apis.checkExistence+param)
}

// 登陆
export function login(param){
  console.log(qs.stringify(param))
  return http.post(apis.login , qs.stringify(param))
}

// 登陆
export function register(param){
  console.log(qs.stringify(param))
  return http.post(apis.login , qs.stringify(param))
}
