'use strict'

/**
* 格式化时间
* @param {number|string} time - 字符串或者Date
* @param {string} formatStr - 需要返回时间格式；如：yyyy-MM-dd HH:mm:ss:SSS
* @return {string} - 返回格式化后时间
**/
export function format (time, formatStr = 'yyyy-MM-dd HH:mm:ss') {
  const date = new Date(time)

  function tf (i) {
    return (i < 10 ? '0' : '') + i
  }

  return formatStr.replace(/yyyy|MM|dd|HH|mm|ss|SSS/g, function (a) {
    let str = ''
    switch (a) {
      case 'yyyy':
        str = tf(date.getFullYear())
        break
      case 'MM':
        str = tf(date.getMonth() + 1)
        break
      case 'mm':
        str = tf(date.getMinutes())
        break
      case 'dd':
        str = tf(date.getDate())
        break
      case 'HH':
        str = tf(date.getHours())
        break
      case 'ss':
        str = tf(date.getSeconds())
        break
      case 'SSS':
        const sec = date.getMilliseconds()
        str = String(sec < 10 ? `00${sec}` : (sec > 99 ? sec : '0' + sec))
        break
    }
    return str
  })
}
