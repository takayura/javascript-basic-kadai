var today = new Date();

var year = today.getFullYear();
var month = today.getMonth() + 1; // getMonthは0から始まるので、1を足す
var day = today.getDate(); // 正しい日付を取得するためにgetDateを使用

console.log(year + '年', month + '月', day + '日');
