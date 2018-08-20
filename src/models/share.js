// import request, {parseUrl} from '../utils/request'
// import axios from 'axios';
import {getShareData,checkExistence} from '../utils/server'
import { routerRedux } from 'dva/router';

export default {
  namespace: 'shares',
  state: {
    visible: false,
    data:[],
  },
  reducers: {
    getShareData(state, { payload: data }) {
      if(data.code==0){
        data = data.data;
        return { ...state, data}
      }
      return {...state}
    }
  },

  effects: {
    * query({search}, {put, call}) {
      const queryObj = yield call( getShareData, search);
      yield put({ type: 'getShareData', payload: queryObj.data})
    },
    * checkExistence({value},{put,call}){
      const queryObj = yield call( checkExistence, '?objectType=UserCellphone&objectValue='+value);

      if(queryObj.data.code==0 && queryObj.data.data>0){
        yield put(routerRedux.push('/login'));
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
            if (pathname == '/') {
              dispatch({type: 'query', search})
            }
      })
    }
  },


};
