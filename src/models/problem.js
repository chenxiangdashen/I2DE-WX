import {login} from '../utils/server'

export default {
  namespace: 'problem',
  state: {
    data: [],
  },
  reducers: {},

  effects: {
    * loigning(data, {call}) {
      const queryObj = yield call(login, data.value);
      console.log(queryObj)
    }
  },
  subscriptions: {
    setup({dispatch, history}) {
      history.listen((a) => {
        console.log(a)
      })
    },
  }

};
