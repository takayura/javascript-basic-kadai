
// HTML要素の取得
const button = document.getElementById('btn');
const text = document.getElementById('text');


// ボタンがクリックされた場合の処理を定義
button.addEventListener("click", () => {
  // テキストを書き換える
  text.textContent = "ボタンをクリックしました";
});

// ボタンがクリックされた時の処理
button.addEventListener('click', () => {
  // 2秒後に文章を書き換える
  setTimeout(() => {
    console.log('ボタンをクリックしました');
  }, 2000);
});