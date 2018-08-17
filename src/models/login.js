import request,{parseUrl} from '../utils/request'


export default {
  namespace: 'login',
  state:  {
    shareObj: [],      // 存放用户列表
  },
  reducers: {

  },

  effects: {
    * query ({ payload = {} }, { call, put }) {
      // 获取用户列表，赋值给 userList
      // 使用 axios 或者 ajax 请求后台返回数据
      const result = request('')
      // 调用 reducers 中的 updateState 方法改变 state 中 userList 的值
    }
  },
  subscriptions: {
    setup ({dispatch, history}) {
      history.listen(( {pathname , search }) => {
        if(pathname=='/'){
          dispatch()
          console.log(parseUrl(search))
        }

      })
    }
  },


};
