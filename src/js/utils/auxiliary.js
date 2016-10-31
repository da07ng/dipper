function formatTime(timestamp) {
  var data = new Date(timestamp);
  return data.getFullYear() + '年' + (data.getMonth() + 1) + '月' + data.getDate() + '日';
}

export { formatTime }