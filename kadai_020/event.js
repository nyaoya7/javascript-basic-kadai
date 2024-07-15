// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
    // id=text(h2タグ)に入力された文字列を取得する
    const text = document.getElementById('text');
    // textの文字列を更新する
    text.textContent = 'ボタンをクリックしました';
});
  

