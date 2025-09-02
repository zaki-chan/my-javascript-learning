// 段落作成
/*
function createParagraph() {
    const para = document.createElement("p");
    para.textContent = "ボタンが押されました!";
    document.body.appendChild(para);
}

// querySelectorAll():ページ上の全ての任意？の要素
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
    button.addEventListener("click", createParagraph);
}
*/

// 数当てゲーム
// let randomNumber = Math.floor(Math.random() * 100)+1;

// const guesses = document.querySelector(".guesses");
// const lastResult = document.querySelector(".lastResult");
// const lowOrHi = document.querySelector(".lowOrHi");

// const guessSubmit = document.querySelector(".guessSubmit");
// const guessField = document.querySelector(".guessField");

// let guessCount = 1;
// let resetButton;

// function checkGuess(){
//     const userGuess = Number(guessField.value);
//     if(guessCount === 1){
//         guesses.textContent = "Previous guesses:";
//     }
//     guesses.textContent = `${guesses.textContent} ${userGuess}`;

//     if(userGuess === randomNumber){
//         lastResult.textContent = "Congratulations! You got it right!";
//         lastResult.style.backgroundColor = "green";
//         lowOrHi.textContent = "";
//         setGameOver();
//     }else if(guessCount === 10){
//         lastResult.textContent = "!!!GAME OVER!!!";
//         lowOrHi.textContent = "";
//         setGameOver();
//     }else{
//         lastResult.textContent = "Wrong!";
//         lastResult.style.backgroundColor = "red";
//         if(userGuess < randomNumber){
//             lowOrHi.textContent = "Last guess was too low!";
//         }else if(userGuess > randomNumber){
//             lowOrHi.textContent = "Last guess was too high!";
//         }
//     }

//     guessCount++;
//     guessField.value = "";
//     guessField.focus();
// }

// function setGameOver(){
//     guessField.disabled = true;
//     guessSubmit.disabled = true;
//     resetButton = document.createElement("button");
//     resetButton.textContent = "Start new game";
//     document.body.append(resetButton);
//     resetButton.addEventListener("click",resetGame);
// }

// function resetGame() {
//     guessCount = 1;

//     const resetParas = document.querySelectorAll(".resultParas p");
//     for(const resetPara of resetParas){
//         resetPara.textContent = "";
//     }

//     resetButton.parentNode.removeChild(resetButton);

//     guessField.disabled = false;
//     guessSubmit.disabled = false;
//     guessField.value = "";
//     // カーソルを合わせる
//     guessField.focus();

//     lastResult.style.backgroundColor = "white";

//     randomNumber = Math.floor(Math.random() * 100) + 1;
// }

// 変数
const buttonA = document.querySelector("#button_A");
const headingA = document.querySelector("#heading_A");

let count = 1;

buttonA.onclick = () => {
    buttonA.textContent = "もう一度！";
    headingA.textContent = `${count} 回クリックしました`;
    count += 1;
}