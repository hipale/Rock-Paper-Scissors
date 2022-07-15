let pp = 0;
let cp = 3;

let score = document.querySelector("#score");

dots = [document.getElementById("dot0"), document.getElementById("dot1"),
document.getElementById("dot2"), document.getElementById("dot3"),
document.getElementById("dot4"), document.getElementById("dot5"),
document.getElementById("dot6")];


let compButt = document.querySelector("#compButt");
let button = document.querySelector("#playButt");
let playerSelection;
button.addEventListener("click", playRound);

function playRound(e) {
    computerPlay()
    playerSelection = e.target.className;
    scoreGet() 
}
let computerSelection;

function computerPlay() {
    compNum = ["Paper", "Rock", "Scissors"];
    i = Math.floor(Math.random() * 3);
    computerSelection = compNum[i];
    compChoice()
}
computerPlay();

function scoreGet() {
    if (playerSelection == computerSelection) {
        div.innerHTML = "Draw";
        playGame()
    } else if (playerSelection == "Paper") {
        if (computerSelection == "Rock") {
            playerWon()
        } else {
            playerLost()
        }
    } else if (playerSelection == "Rock") {
        if (computerSelection == "Scissors") {
            playerWon()
        } else {
            playerLost()
        }
    } else if (playerSelection == "Scissors") {
        if (computerSelection == "Paper") {
            playerWon()
        } else {
            playerLost()
        }
    }
}

function playerWon() {
    if (pp < 2) {
        
        score = `you won ${playerSelection} beats ${computerSelection}`;
        
        console.log(pp + 1);
        playGame()
    } else {
        score = "you won";
        removeEvent()
    }
    addPP()
    createWinDiv()

}
function playerLost() {
    if (cp < 5) {
        createLoseDiv()
        console.log(cp - 2);
        playGame()
    } else {
        score = "you lost";
        removeEvent()
    }
    addCP()

}
function playGame() {
    setTimeout(() => {
        playerSelection;
        i;
    }, 2000)
}
function addPP() {
    dots[pp].style.opacity = "1";
    changeGreen()
    pp++;
}
function addCP() {
    dots[cp].style.opacity = "1";
    changeRed()
    cp++;
}
function changeGreen() {
    dots[pp].style.backgroundColor = "green";
};
function changeRed() {
    dots[cp].style.backgroundColor = "red";
};
function removeEvent() {
    button.removeEventListener("click", playRound);
};
function compChoice(e) {
if (compButt.className == computerSelection) {
    e.target.style.border = "2px solid red";
}
};

const scoreCont = document.querySelector("#scoreCont");
let div = document.createElement("div");
scoreCont.appendChild(div);

function createWinDiv() {
   div.innerHTML = `you won ${playerSelection} beats ${computerSelection}`;
}
function createLoseDiv() {
    div.innerHTML = `you lost ${computerSelection} beats ${playerSelection}`;
}