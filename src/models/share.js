// import request, {parseUrl} from '../utils/request'
// import axios from 'axios';
import {getShareData} from '../utils/server'

export default {
  namespace: 'shares',
  state: {
    visible: false,
    data:[],
  },
  reducers: {
    getShareData(state, { payload: data }) {
      console.log( { ...state, data })
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
      console.log('query ');
      console.log(queryObj);
      // getShareData(search).then(res=>{
      //   put({ type: 'save', payload: '123'})
      // })
      yield put({ type: 'getShareData', payload: queryObj.data})
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
