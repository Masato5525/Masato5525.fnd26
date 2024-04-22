    //id要素取得、代入
    const randomNum1 = document.getElementById("randomNum1");
    const randomNum2 = document.getElementById("randomNum2");
    //ランダムな数字生成（0～20）合計をsumに代入
    const num1 = Math.floor(Math.random() * 10) + 1; //0から1（0を含み1を含まない）でランダムな浮動小数点数に10かける（10は含まない）、+1にすることで0～10のランダムな数字を出せる
    const num2 = Math.floor(Math.random() * 10) + 1;
    const sum = num1 + num2;
    //表示
    randomNum1.textContent = num1;
    randomNum2.textContent = num2;

  function sumOfRandomNumber() {
    //正解画像指定、取得、代入
    const img1Url = "https://plusblog.jp/wp-content/uploads/2013/10/91.gif";
    const img1Element = document.createElement("img");
    img1Element.src = img1Url;
    //不正解画像指定、取得、代入
    const img2Url = "https://yogamachi.cl/img/990158.gif";
    const img2Element = document.createElement("img");
    img2Element.src = img2Url;
    //id(message)取得、代入
    const messageContainer = document.getElementById("message");
    //num1の値取得、代入
    const inputNum = Number(document.getElementById("sum").value);
       
    if(sum === inputNum) {
    messageContainer.innerHTML = "";
    const messageText = document.createElement("p");
    messageText.textContent = "正解！";
    messageContainer.appendChild(messageText);
    messageContainer.appendChild(img1Element);

    } else {
    messageContainer.innerHTML = "";
    const messageText = document.createElement("p");  
    messageText.textContent = "不正解！";
    messageContainer.appendChild(messageText);  
    messageContainer.appendChild(img2Element);
    }
}

//送信フォームの入力チェック
function nameCheck() {
    const nameDate = document.getElementById("nameDate").value.trim();
    const errorDate = document.getElementById("error");
    if (isNaN(parseInt(nameDate))) {
        // errorDate.textContent = "記入内容が無効です";
        errorDate.innerText = "名前入力確認できました。";
    } else {
        errorDate.innerText = "記入内容が無効です";
        alert("※記入内容が無効です!");
    }
}

//画像を表示されるようにしたいURLが無効になっている
function codeDisplay() {
    const imgUpp = document.getElementById("imgUpp");

    // const img1Url = "https://1drv.ms/i/c/983d8873c63c7a6a/Ea30GeeK8ApBnpO_OmaEC64BsYAH7yEAlCo2XeLK9nj1ow?e=c2duRC";
    const img1Url = "https://photos.onedrive.com/41365326-927d-4214-a798-8db5cd64e647";
    const img1Element = document.createElement("img");
    img1Element.src = img1Url;
    imgUpp.appendChild(img1Element);
    
    const img2Url = "https://1drv.ms/i/c/983d8873c63c7a6a/ERbzbt7rspxJqlaGGevaplQBq0sQ1ok5Sh35M_fD9Paq7g?e=EMNWJ2";
    const img2Element = document.createElement("img");
    img2Element.src = img2Url;
    imgUpp.appendChild(img2Element);
    
    
    const img3Url = "https://1drv.ms/i/c/983d8873c63c7a6a/ESnsAGNBu1FLpTl14JyxONYB0RUcAAVpePWK6qgLuybN6g?e=gBGQss";
    const img3Element = document.createElement("img");
    img3Element.src = img3Url;
    imgUpp.appendChild(img3Element);

}

//スクロール
document.getElementById("scrollButton").addEventListener("click", ()=> {
    const targetElement = document.getElementById("targetSection");
    targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
});
