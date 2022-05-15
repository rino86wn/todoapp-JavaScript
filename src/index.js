import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

//未完了要素から指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストに追加する
const createIncompleteList = (text) => {
  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //li生成
  const li = document.createElement("li");
  li.innerText = text;

  //button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerHTML = "完了";

  completeButton.addEventListener("click", () => {
    //押された完了ボタンの親タグ（ｄｉｖ）を未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);

    //完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    //TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerHTML;

    //div以下を初期化
    addTarget.textContent = null;

    //liタグを生成
    const li = document.createElement("li");
    li.innerHTML = text;

    //buttonタグ生成
    const backButton = document.createElement("button");
    backButton.innerHTML = "戻す";
    backButton.addEventListener("click", () => {
      //押された戻すボタンの親タグ（div）を完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      //テキストを取得
      const text = deleteTarget.firstChild.innerHTML;
      createIncompleteList(text);
    });

    //divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    console.log(addTarget);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ（ｄｉｖ）を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
