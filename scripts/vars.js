const buttonA = document.querySelector("button_A");
const headingA = document.querySelector("heading_A");

let count = 1;

button.onclick = () =>{
    buttonA.textContent = "もう一度";
    headingA.textContent = `${count} 回押されました`;
    count ++;
}