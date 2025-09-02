// change color
const btn = document.querySelector("button");

function random(number){
    return Math.floor(Math.random() * (number + 1));
}

function changeBackground(){
    const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
}
btn.addEventListener("click",changeBackground);

btn.removeEventListener("click",changeBackground);

btn.onclick = changeBackground;

// 引数eはイベントオブジェクト
function bgChange(e){
    const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    e.target.style.backgroundColor = rndCol;
    console.log(e);
}

btn.addEventListener("click",bgChange);

const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");
textBox.addEventListener("keydown",(event) =>{
    output.textContent = `"${event.key}"が押されました。`
});

const form = document.querySelector("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const para = document.querySelector("p");

form.addEventListener("submit",(e) =>{
    if(fname.value === "" || lname.value === ""){
        e.preventDefault();
        para.textContent = "You need to fill in both names!";
    }
})