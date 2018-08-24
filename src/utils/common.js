

//random color
export function getRandomColor(id){
  let cellColor = '';
  cellColor+=id;

  let hasCode = hashCode(cellColor) + '';

  let keys = hasCode.slice(hasCode.length-1);
  const colors = {
    _1:'#FF7E7E',
    _2:'#FFAD2E',
    _3:'#1D97FF',
    _4:'#1BCE95',
    _5:'#5E8BFF',
    _6:'#FF7E7E',
    _7:'#FFAD2E',
    _8:'#1D97FF',
    _9:'#1BCE95',
    _0:'#5E8BFF'
  };

  // let arr=['#bfd1f8','#a9dde8','#f8d1a2','#b2e59e','#f3c4c4']
  // let arr=['#FF7E7E','#FFAD2E','#1D97FF','#1BCE95','#5E8BFF'];
  return colors['_'+keys] || '#1D97FF';
}

export function getStateColor(data){
  const colors = {
    XST_WaitAssign:'#ff943d',
    XST_InAnswer:'#1bce95',
    XST_Confirmed:'#FF7E7E',
    XST_Closed:'#bbbbbb',
  }

  return colors[data.name] || '#1bce95';
}


//格式化 时间
export function formatDate(date , fmt) {

  if(!date){
    return date;
  }

  // date 不是 时间格式 先转成 时间格式
  if(!(date instanceof Date)){
    // parseDate 方法 必须是 '2017-01-03 这种格式的 '
    date = date.replace(/\//g,'-');
    date = parseDate(date)
  }

  if(date instanceof Date){
    let o = {
      "Y+" : date.getFullYear(),
      "M+" : date.getMonth()+1,                 //月份
      "d+" : date.getDate(),                    //日
      "h+" : date.getHours(),                   //小时
      "m+" : date.getMinutes(),                 //分
      "s+" : date.getSeconds(),                 //秒
      "q+" : Math.floor((date.getMonth()+3)/3), //季度
      "S"  : date.getMilliseconds()             //毫秒
    };
    if(/(y+)/.test(fmt))
      fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));
    for(let k in o)
      if(new RegExp("("+ k +")").test(fmt))
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
    return fmt;
  }

  return date;

}


export function parseDate(date) {
  let isoExp, parts;
  isoExp = /^\s*(\d{4})-(\d\d)-(\d\d)\s(\d\d):(\d\d):(\d\d)\s*$/;
  try {
    parts = isoExp.exec(date);
  } catch(e) {
    return null;
  }
  if (parts) {
    date = new Date(parts[1], parts[2] - 1, parts[3], parts[4], parts[5], parts[6]);
  } else {
    return null;
  }
  return date;
}



//字符串返回 hashCode
function hashCode(str) {
  let h = 0;
  let len = str.length;
  let t = 2147483648;
  for (let i = 0; i < len; i++) {
    h = 31 * h + str.charCodeAt(i);
    if(h > 2147483647) h %= t;//java int溢出则取模
  }
  return h;
}
