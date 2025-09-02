const btn = document.querySelector("button");
const txt = document.querySelector("p");

btn.addEventListener("click",updateBtn);

function updateBtn(){
    if(btn.textContent === "起動する"){
        btn.textContent = "停止する";
        txt.textContent = "マシンが停止しました。";
    }else{
        btn.textContent = "起動する";
        txt.textContent = "マシンは停止中です。";
    }
}