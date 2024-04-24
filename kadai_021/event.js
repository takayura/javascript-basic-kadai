
// HTML要素の取得
const button = document.getElementById('btn');
const text = document.getElementById('text');


// ボタンがクリックされた場合の処理を定義
button.addEventListener("click", () => {
  // テキストを書き換える
  text.textContent = "ボタンをクリックしました";

  // 2秒後に文章をコンソールに出力する
  setTimeout(() => {
    console.log("ボタンをクリックしました");
  }, 2000);
});