import {login} from '../utils/server'
import {getPartDetailView , getPartComments} from '../utils/server'

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
    },

    getPartComments(state, {payload} ) {
      console.log(payload)
      if(payload.code===0){
        let commentData= payload.data;
        return { ...state, commentData ,}
      }
      return {...state}
    },
  },

  effects: {
    * queryDetailView({param}, {put, call}) {
      console.log(param)
      const queryObj = yield call( getPartDetailView, param);
      const queryObj2 = yield call( getPartComments, param);
      console.log(queryObj2)
      yield put({ type: 'getDetailPart', payload: queryObj.data})
    },


    * queryPartComments({param}, {put, call}) {
      console.log(param)
      const queryObj = yield call( getPartComments, param);
      console.log(queryObj)
      yield put({ type: 'getPartComments', payload: queryObj.data})
    },



  },
  subscriptions: {

  }

};
