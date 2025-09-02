const output = document.querySelector("#output");
function handleClick(e){
    output.textContent +=`${e.currentTarget.tagName} 要素をクリックしました\n`;
}

const container = document.querySelector("#container");
// container.addEventListener("click",handleClick)

const btn = document.querySelector("button");
// const box = document.querySelector("div");
// const video = document.querySelector("video");

// btn.addEventListener("click",()=>box.classList.remove("hidden"));
// video.addEventListener("click",(event)=>{
//     // イベントの伝搬を防げる
//     event.stopPropagation();
//     video.play()}
// );
// box.addEventListener("click",() => box.classList.add("hidden"));

document.body.addEventListener("click",handleClick,{capture:true});
container.addEventListener("click",handleClick,{capture:true});
btn.addEventListener("click",handleClick,{capture:true});
