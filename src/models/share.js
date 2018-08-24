import {parseUrl} from '../utils/request'

import {getShareData,checkExistence} from '../utils/server'
import { routerRedux } from 'dva/router';

import store from 'store';


import qs from 'qs'

export default {
  namespace: 'shares',
  state: {
    data:[],
  },
  reducers: {
    getShareData(state, { payload: data }) {
      if(data.code===0){
        data = data.data;
        return { ...state, data}
      }
      return {...state}
    }
  },

  effects: {
    * query({search}, {put, call}) {
      const queryObj = yield call( getShareData, parseUrl(search));
      store.set('shareData' , queryObj.data)
      yield put({ type: 'getShareData', payload: queryObj.data})
    },
    * checkExistence({data},{put,call ,select}){

      const queryObj = yield call( checkExistence, {objectType:'UserCellphone',objectValue:data.value});
      const {shares} = yield select();

      console.log(shares)
      let param = {
        objectID:shares.data.targetID,
        corpID:shares.data.targetCorp,
        type:shares.data.type,
        basePartID:shares.data.basePartID,
      }

      if(queryObj.data.code===0 && queryObj.data.data>0){
        param.cellphone = data.value
        yield put(routerRedux.push(`/login/${param.objectID}/${param.corpID}/${param.cellphone}/${param.type}/${param.basePartID}`));
        // if(param.type=='Part'){
        //   yield put(routerRedux.push(`/login/${param.objectID}/${param.corpID}/${param.cellphone}/${param.type}/${param.basePartID}`));
        // }else{
        //   yield put(routerRedux.push(`/login/${param.objectID}/${param.corpID}/${param.cellphone}/${param.type}`));
        // }


      }else{
        yield put(routerRedux.push('/register'));
      }
      console.log(queryObj.data)
      // yield put(routerRedux.push('/user'));
      // console.log(value)
    }

  },
  subscriptions: {
        setup({dispatch, history}) {
          history.listen(({pathname, search}) => {
            if (pathname === '/') {
              dispatch({type: 'query', search})
            }
          })
    }
  },


};
