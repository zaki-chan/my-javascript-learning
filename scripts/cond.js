// const select = document.querySelector("select");
// const para = document.querySelector("p");

// // addEventListener(type,listener,options/userCapture)
// // type:なんか色々ある
// select.addEventListener("change",setWeather);

// function setWeather(){
//     const choice = select.value;

//     if(choice === "sunny"){
//         para.textContent = "今日はとてもいい天気です。半ズボンをはいて、砂浜や公園に出かけ、アイスクリームを食べましょう！";
//     }else if(choice === "rainy"){
//         para.textContent = "外は雨が降っています。レインコートと傘を忘れないようにして、できる限り室内で過ごしましょう。";
//     }else if(choice === "snowing"){
//         para.textContent = "雪が降ってとても寒いです！室内でホットチョコレートを飲むか、雪だるまを作るのがよいでしょう。";
//     }else if(choice === "overcast"){
//         para.textContent = "雨は降っていませんが、空はとても暗くなっています。万が一に備えレインコートを持っていきましょう。";
//     }else{
//         para.textContent = "";
//     }
// }

// let cheese = "チェダー";

// if(cheese){
//     console.log("やった！チーズトーストを作るチーズがあるよ。");
// }else{
//     console.log("今日はチーズトーストのチーズがないよ。");
// }

// // 三項演算子
// isBirthday = true;
// const greeting = isBirthday ? "happy birthday" : "good morning";

// 実例
const select = document.querySelector("select");
const html = document.querySelector("html");
document.body.style.padding = "10px";

function update(bgColor,textColor){
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
}

select.addEventListener("change",() =>
    select.value === "black"
        ? update("black","white")
        : update("white","black"),
);