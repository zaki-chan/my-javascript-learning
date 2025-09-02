// // 普通の関数
// function muFunction(){
//     alert("hello");
// }
// // 無名関数
// (function (){
//     alert("hello");
// });
// // 無名関数の例
// function logKey(event){
//     console.log(`"${event.key}"を押しました。`);
// }
// textBox.addEventListener("keydown",logKey);

// // アロー関数
// // function funcname(ipt) = {introduction}
// // === (function (ipt) = {introduction}) // 無名関数
// // === (ipt) => {introduction} //アロー関数
// textBox.addEventListener("keydown",(event)=>{
//     console.log(`"${event.key}"を押しました。`);
// });
// // 引数が1つなら引数のかっこは省略可能
// textBox.addEventListener("keydown",event =>{
//     console.log(`"${event.key}"を押しました。`);
// });
// // 関数がreturn文だけなら中かっこも省略できる
// const originals = [1,2,3];
// const doubled = originals.map(item => item * 2);

const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");

textBox.addEventListener("keydown",(event)=>{
    output.textContent = `"${event.key}"を押しました。`;
});