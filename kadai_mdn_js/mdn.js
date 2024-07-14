var currentTime = new Date();

var year = currentTime.getFullYear();
var month = currentTime.getMonth() + 1;
var day = currentTime.getDate();

console.log(currentTime);
console.log(year + "年" + month + "月" + day + "日");