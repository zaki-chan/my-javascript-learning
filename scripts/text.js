const button = document.querySelector("button");

function greet(){
    const name = prompt("あなたの名前は?");
    const greeting = document.querySelector("#greeting");
    greeting.textContent = `${name}さん、こんにちは。初めまして！`;
}

button.addEventListener("click",greet);


// 文字列のメソッド
const browserType = "mozilla";
// 部分文字列の検査
// includes
if(browserType.includes("zilla")){
    console.log("Found zilla!");
}else{
    console.log("No zilla here!");
}
// startsWith,endsWith
if(browserType.startsWith("zilla")){
    console.log("Found zilla!");
}else{
    console.log(("No zilla here!"));
}

if(browserType.endsWith("zilla")){
    console.log("Found zilla!");
}else{
    console.log(("No zilla here!"));
}
// 部分文字列の位置
// indexOf
const tagline = "MDN - Resources for developers, by developers";
console.log(tagline.indexOf("developers")); // 20
console.log(tagline.indexOf("x")); //-1

const firstOccurrence = tagline.indexOf("developers");
const secondOccurrence = tagline.indexOf("developers", firstOccurrence + 1);

console.log(firstOccurrence); // 20
console.log(secondOccurrence); // 35

// 部分文字列の抽出
console.log(browserType.slice(1,4));

// 大文字小文字
const radData = "My NaMe Is MuD";
console.log(radData.toLowerCase());
console.log(radData.toUpperCase());

// 置き換え
// はじめに登場した場所だけ
const updated = browserType.replace("moz","van");
// 全て置き換え
let quote = "To be or not to be";
quote = quote.replaceAll("be","code");

console.log(quote);