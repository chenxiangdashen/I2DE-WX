import http from './http.js' // 导入我们封装好的axios对象
import apis from './api.js'// 导入我们封装好的apis对象


export function getShareData(){

  return http.post(apis.getShareData)

}
