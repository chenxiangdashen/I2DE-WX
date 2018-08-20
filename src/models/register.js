
import {login} from '../utils/server'

export default {
  namespace: 'register',
  state: {
    data:[],
  },
  reducers: {

  },

  effects: {
    * register(data,{call}){
      const queryObj = yield call( login, data.value);
      console.log(queryObj)
    }
  },
  subscriptions: {


  },


};
