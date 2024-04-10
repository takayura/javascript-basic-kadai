const today = new Date(2023, 7,22);
const year = today.getFullYear(); // 年を取得
const month = today.getMonth() + 1; // 月を取得（月は0から始まるため、+1する）
const day = today.getDate(); // 日を取得

console.log(`${year}年${month}月${day}日`);