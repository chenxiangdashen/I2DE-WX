import axios from 'axios'
import store from 'store';


function getXtoken() {
  let sid = store.get('sid');
  let tid = store.get('tid');
  return {sid: sid, tid: tid}
}


axios.interceptors.request.use(
  config => {
    console.log(config)
    var xtoken = getXtoken(config)

    config.headers['tid'] = xtoken.tid
    config.headers['sid'] = xtoken.sid
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';

    return config
  }, function (error) {
    return Promise.reject(error)
  }
)


axios.interceptors.response.use(function (response) {
    // token 已过期，重定向到登录页面
    if (response.data.code == 4) {
      localStorage.clear()
    }


    if(response.headers.tid || response.headers.sid){
      store.set('sid', response.headers.sid)
      store.set('tid', response.headers.tid)
    }

    console.log(response)
    return response
  }, function (error) {
    // Do something with response error
    return Promise.reject(error)
  }
)


export default axios
