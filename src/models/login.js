import request, {parseUrl} from '../utils/request'
import axios from 'axios';
import {getShareData} from '../utils/server'

export default {
  namespace: 'login',
  state: {
    visible: false,
    data:[],
  },
  reducers: {
    save(state, { payload: data }) {
      console.log(data)
      return { ...state, data }
    }
  },

  effects: {
    * query({search}, {put, call}) {
      const queryObj = yield call(getShareData, {});
      console.log('query ');
      console.log(queryObj);
      // getShareData(search).then(res=>{
      //   put({ type: 'save', payload: '123'})
      // })
      yield put({ type: 'save', payload: queryObj})
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
