import http from './http.js' // 导入我们封装好的axios对象
import apis from './api.js'// 导入我们封装好的apis对象
import qs from 'qs'

// 获取分享信息/
export function getShareData(param) {
  console.log(param)
  return http.post(apis.getShareData, qs.stringify(param))
}

// 检查是否注册
export function checkExistence(param) {
  console.log(param)
  return http.post(apis.checkExistence, qs.stringify(param))
}

// 登陆
export function loginIn(param) {
  console.log(qs.stringify(param))
  return http.post(apis.login, qs.stringify(param))
}

// 注册
export function register(param) {
  console.log(qs.stringify(param))
  return http.post(apis.login, qs.stringify(param))
}

// 获取问题详情
export function getDetailIssues(param) {
  console.log(qs.stringify(param))
  return http.post(apis.getDetailIssues, qs.stringify(param))
}

// 获取零件详情
export function getPartDetailView(param) {
  console.log(qs.stringify(param))
  return http.post(apis.getPartDetailView, qs.stringify(param))
}
