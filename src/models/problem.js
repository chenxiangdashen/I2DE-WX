import {login} from '../utils/server'
import {getDetailIssues} from '../utils/server'

export default {
  namespace: 'problem',
  state: {
  },
  reducers: {
    getDetailIssues(state, { payload: data }) {
      console.log(data);
      if(data.code===0){
        data = data.data;
        return { ...state, data}
      }
      return {...state}
    }
  },

  effects: {
    * query({param}, {put, call}) {
      console.log(param)
      const queryObj = yield call( getDetailIssues, param);
      console.log(queryObj)
      yield put({ type: 'getDetailIssues', payload: queryObj.data})
    },

  },
  subscriptions: {

  }

};
