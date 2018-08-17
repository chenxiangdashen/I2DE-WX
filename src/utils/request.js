import fetch from 'dva/fetch';

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => ({ data }))
    .catch(err => ({ err }));
}

export function parseUrl(url){
  if (url.indexOf("?") != -1) {
    url = url.substr(url.indexOf("?") + 1);
  }
  var paramsArr = url.match(/[^\?\=\&]*\=[^\?\=\&]*/g);
  var params = {};
  if (paramsArr != null) {
    for(let i in paramsArr){
      var kv = paramsArr[i].split("=");
      params[decodeURIComponent(kv[0])] = decodeURIComponent(kv[1]);
    };
  }
  return params;
}
