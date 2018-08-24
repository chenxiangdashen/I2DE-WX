import {loginIn} from '../utils/server'
import {routerRedux} from 'dva/router';
import {parseUrl} from '../utils/request'
import qs from 'qs'

export default {
  namespace: 'login',
  state: {
  },
  reducers: {

  },

  effects: {

    * loigning({commitData}, {call, put}) {
      let param=commitData.param;
      const {data} = yield call(loginIn, commitData.value);
      console.log(param)
      if (data.code === 0) {

        if(param.type=='Part'){
          yield put(routerRedux.push(`/fileSet/${param.objectID}/${param.cropID}/${param.basePartID}`));
        }else if(param.type=='Issues'){
          yield put(routerRedux.push(`/problem/${param.objectID}/${param.cropID}`));
        }
        //
      }

    }
  },
  subscriptions: {


  },
};
