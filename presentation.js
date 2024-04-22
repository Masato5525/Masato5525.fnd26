
//テストパスした関数
// function addNumbers() {
//   const num1 = Number(document.getElementById("num1").value);
//   const num2 = Number(document.getElementById("num2").value);
//   const sum = num1 + num2;
//   console.log(sum);
//   if (sum === 2) {
//     return document.getElementById("message").innerHTML = "正解！"; 
//   } else {
//     return document.getElementById("message").innerHTML = "不正解！";
//   }
// }

//timer(時間がある時に)
// let seconds = 0; //秒を更新
// let timer; //後でタイマーを設定する際に値を代入するために宣言

// function startTimer() {
//     timer = setInterval(updateTimer, 1000); //タイマーが実行されるたびに実行される関数、1000ミリ秒＝1秒
// }

// function updateTimer() {
//     seconds++;

// }




// function addNumbers() {
//     const num1 = Number(document.getElementById("num1").value);
//     const num2 = Number(document.getElementById("num2").value);
//     const sum = num1 + num2;
//     const img1Url = "https://plusblog.jp/wp-content/uploads/2013/10/91.gif";
//     const img1Element = document.createElement("img");
//     img1Element.src = img1Url; //HTML要素内で画像ビデオ音声などを指定するために使用されるプロパティ
//     //指定されたソースがブラウザによって読み込まれ、その要素で表示されるか再生される
//     const img2Url = "https://yogamachi.cl/img/990158.gif";
//     const img2Element = document.createElement("img");
//     img2Element.src = img2Url;

//     const messageContainer = document.getElementById("message");

//     // console.log(sum);
//     if (sum === 2) {
//     //   document.getElementById("message").innerHTML = imgElement;
    
//     //画像の上に正解を表示させるようにしていたが
//     //画像が出てこなくなった、どうやらmessageContainerに新しい子要素pを
//     //用意する必要があるそうだ
//     //一応つくりおえた、テストを行い、エラー起これば直していく
//     messageContainer.innerHTML = "";
//     const messageText = document.createElement("p");
//     messageText.textContent = "正解！";
//     messageContainer.appendChild(messageText);
//     messageContainer.appendChild(img1Element);


//     // document.getElementById("message").innerHTML = "正解";
//     // document.getElementById("message").appendChild(overlayText);
//     // document.getElementById("message").appendChild(img1Element);
//     } else {
//     messageContainer.innerHTML = "";
//     const messageText = document.createElement("p");  
//     //   document.getElementById("message").innerHTML = "不正解";
//     messageText.textContent = "不正解！";
//     messageContainer.appendChild(messageText);  
//     messageContainer.appendChild(img2Element);
//     }
//   }

// function randomNumber () { ボタンを押すと数字が更新されるようにしたい
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
    // sumOfRandomNumber(sum);
// }
    // 星の配列を定義
    // stars = ["☆", "☆", "☆", "☆", "☆"];
 

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
    // const inputNum2 = Number(document.getElementById("num2").value);
    // const sumInputNum = inputNum1 + inputNum2

    //星の配列を取得、表示
    // staletrElement.textContent = stars.join("");
    
    // const starElement = document.getElementById("star");
    // starElement.textContent = stars.join("");

    if(sum === inputNum) {
    messageContainer.innerHTML = "";
    const messageText = document.createElement("p");
    messageText.textContent = "正解！";
    messageContainer.appendChild(messageText);
    messageContainer.appendChild(img1Element);

    // stars.pop();
    // stars.unshift("★");
    // starElement.textContent = stars.join(""); //星の配列を再度更新し表示
    
    // starElement.textContent = stars.join("");
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

// 入力値のチェックはすべて一度サーバー側にデータを送り、
// サーバー側でチェックをかける必要があります。
// ユーザーの操作性も悪くなるため、
// ページ内の入力データで問題ないチェックはJavaScriptに任せた方が効率的です。

// スプレッドシートの自動集計
// 自動転記・メールやSNSとの連携
// 簡単なWebアプリケーションの作成
// 例えば、スプレッドシートでまとめたデータをもとに自動で
// 図やグラフを作成したり、
// 設定した定型文を自動転記したりすることができます。1つずつの短縮時間は短いかもしれません。
// しかし、積み重なれば大幅な作業効率アップにつながります。



// document.getElementById("randomButton").addEventListener("click", function() {
//    randomNumber();
// })

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

//スクロールが機能しない原因不明、時間もないので諦めます
document.getElementById("scrollButton").addEventListener("click", ()=> {
    const targetElement = document.getElementById("targetSection");
    targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
});

// document.getElementById("scrollButton").addEventListener("click", () => {
//     const targetElement = document.getElementById("targetSection");
//     if (targetElement) {
//         targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
//     } else {
//         console.log("targetSection not found");
//     }
// });
