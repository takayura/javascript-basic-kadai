// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
  console.groupCollapsed('クリックされました！');
});


// ボタン要素の取得
const button = document.getElementById("btn");

// テキスト要素の取得
const text = document.getElementById("text");

// ボタンがクリックされた場合の処理を定義
button.addEventListener("click", () => {
  // テキストを書き換える
  text.textContent = "ボタンをクリックしました";
});