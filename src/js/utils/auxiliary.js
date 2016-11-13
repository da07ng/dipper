function formatTime(timestamp) {
  let data = new Date(timestamp);
  return data.getFullYear() + '年' + (data.getMonth() + 1) + '月' + data.getDate() + '日';
}

function subString(str, n) {
  let r = /[^\x00-\xff]/g;
  if (str.replace(r, "mm").length <= n) {
    return str;
  }
  let m = Math.floor(n / 2);
  for (let i = m; i < str.length; i++) {
    if (str.substr(0, i).replace(r, "mm").length >= n) {
      return str.substr(0, i) + "...";
    }
  }
  return str;
}

function getQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}

export {
  formatTime,
  subString,
  getQueryString
}