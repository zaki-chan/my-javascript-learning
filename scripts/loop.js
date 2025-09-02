const btn = document.querySelector("button");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

document.addEventListener("DOMContentLoaded",()=>{
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
})

function random(number){
    return Math.floor(Math.random()*number);
}

function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for(let i=0;i<100;i++){
        ctx.beginPath();
        ctx.fillStyle = "rgb(255 0 0 / 50%)";
        ctx.arc(
            random(canvas.width),
            random(canvas.height),
            random(50),
            0,
            2 * Math.PI,
        );
        ctx.fill();
    }
}

btn.addEventListener("click",draw);

const cats = ["Leopard","Serval","Jaguar","Tiger","Caracal","Lion"];

for(const cat of cats){
    console.log(cat);
}

function toUpper(string){
    return string.toUpperCase();
}

const upperCats = cats.map(toUpper);

console.log(upperCats);

function lCat(cat){
    return cat.startWith("L");
}

const filtered = cats.filter(lCat);

console.log(filtered);

const results = document.querySelector("#results");
function calculate(){
    for(let i=1;i<10;i++){
        const newResult = `${i} x ${i} = ${i * i}`;
        results.textContent += `${newResult}\n`;
    }
    results.textCOntent += "\n完了!\n\n";
}

const calculateBtn = document.querySelector("#calculate");
const clearBtn = document.querySelector("#clear");

calculateBtn.addEventListener("click",calculate);
clearBtn.addEventListener("click",()=>(results.textContent = ""));