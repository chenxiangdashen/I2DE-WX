import axios from 'axios'

// axios.interceptors.request.use(function (config) {
//   config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
// });

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

// axios.interceptors.request.use(config => {
//   config.setHeaders({
//     'Content-Type':'application/x-www-form-urlencoded'
//   })
//   return config
// })


export default axios
