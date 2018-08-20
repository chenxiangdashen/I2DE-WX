// 集中管理路由，所有的接口地址：
//  1.整个应用用到了哪些接口一目了然
//  2.接口地址可能变化，方便管理

const prefix = '' // api地址前缀
export default ({
  // example api
  "getShareData": "/MobileApp/Share/Public/getShareData.do",
  "checkExistence": "/MobileApp/Common/Public/checkExistence.do",
  "login": "/MobileApp/Common/Public/login.do",
  "register": "/MobileApp/Common/Public/login.do",
})
