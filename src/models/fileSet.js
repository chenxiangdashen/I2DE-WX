import {login} from '../utils/server'
import {getPartDetailView} from '../utils/server'

export default {
  namespace: 'fileSet',
  state: {
  },
  reducers: {
    getDetailPart(state, {payload} ) {
      if(payload.code===0){
        let data= payload.data;
        let columns= payload.columns
          console.log({ ...state, data , columns});
        return { ...state, data ,columns}
      }
      return {...state}
    }
  },

  effects: {
    * queryDetailView({param}, {put, call}) {
      console.log(param)
      const queryObj = yield call( getPartDetailView, param);
      console.log(queryObj)
      yield put({ type: 'getDetailPart', payload: queryObj.data})
    },

  },
  subscriptions: {

  }

};
