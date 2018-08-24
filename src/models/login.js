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
      if (data.code === 0) {
        yield put(routerRedux.push(`/problem/${param.objectID}/${param.cropID}`));
      }

    }
  },
  subscriptions: {


  },
};
