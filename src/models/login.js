
import {login} from '../utils/server'

export default {
  namespace: 'login',
  state: {
    data:[],
  },
  reducers: {

  },

  effects: {
    * loigning(data,{call}){
      const queryObj = yield call( login, data.value);


      console.log(queryObj)
    }
  },
  subscriptions: {


  },


};
