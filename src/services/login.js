import request from '../utils/request';

export function query() {
  return request('/api/MobileApp/Share/Public/getShareData.do');
}
