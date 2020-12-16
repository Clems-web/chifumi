let buttonRock = document.getElementById("rock");
let buttonPaper = document.getElementById("paper");
let buttonScissor = document.getElementById("scissor");
let versus = document.getElementById("versus");
let result = document.getElementById("result");
let win = document.getElementById("win");
let loss = document.getElementById("loss");
let numberLoss = 0;
let numberWin = 0;
const rock = buttonRock.innerHTML;
const paper = buttonPaper.innerHTML;
const scissor = buttonScissor.innerHTML;

let choices = [rock, paper, scissor];



buttonRock.addEventListener("click", function () {
    let computerChoice = choices[Math.round(Math.random()*2)];
    versus.innerHTML = rock + " VS " + computerChoice;

    if (rock === computerChoice) {
        result.innerHTML = "It's a tie !";
    }
    else if (versus.innerHTML === rock + " VS " + paper) {
        result.innerHTML = "You lose !";
        numberLoss++;
        loss.innerHTML = "Loss : " + numberLoss;
    }
    else if (versus.innerHTML === rock + " VS " + scissor) {
        result.innerHTML = "You win !";
        numberWin++;
        win.innerHTML = "Win : " + numberWin;
    }
});

buttonPaper.addEventListener("click", function () {
    let computerChoice = choices[Math.round(Math.random()*2)];
    versus.innerHTML = paper + " VS " + computerChoice;

    if (paper === computerChoice) {
        result.innerHTML = "It's a tie !"
    }
    else if (versus.innerHTML === paper + " VS " + scissor) {
        result.innerHTML = "You lose !";
        numberLoss++;
        loss.innerHTML = "Loss : " + numberLoss;
    }
    else if (versus.innerHTML === paper + " VS " + rock) {
        result.innerHTML = "You win !";
        numberWin++;
        win.innerHTML = "Win : " + numberWin;
    }
});

buttonScissor.addEventListener("click", function () {
    let computerChoice = choices[Math.round(Math.random()*2)];
    versus.innerHTML = scissor + " VS " + computerChoice;

    if (scissor === computerChoice) {
        result.innerHTML = "It's a tie !"
    }
    else if (versus.innerHTML === scissor + " VS " + rock) {
        result.innerHTML = "You lose !";
        numberLoss++;
        loss.innerHTML = "Loss : " + numberLoss;
    }
    else if (versus.innerHTML === scissor + " VS " + paper) {
        result.innerHTML = "You win !";
        numberWin++;
        win.innerHTML = "Win : " + numberWin;
    }
});

