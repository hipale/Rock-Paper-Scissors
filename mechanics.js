let pp = 0;
let cp = 3;
let compChoicePic = document.querySelector("#buttPic");
compChoicePic.style.visibility = "hidden";
const scoreCont = document.querySelector("#scoreCont");
compEmoji = ["&#128209;", "&#128507;", "&#x2702;"]
compNum = ["Paper", "Rock", "Scissors"];
let button = document.querySelector("#playButt");
let playerSelection;
button.addEventListener("click", playRound);
let score = document.querySelector("#score");
dots = [document.getElementById("dot0"), document.getElementById("dot1"),
document.getElementById("dot2"), document.getElementById("dot3"),
document.getElementById("dot4"), document.getElementById("dot5"),
document.getElementById("dot6")];
let computerSelection;
let computerSelectionEmoji;
let restart = document.querySelector("#restart");
let endCont = document.querySelector("#endCont");
let endScreen = document.querySelector("#endScreen");

function showCompChoice() {
    compChoicePic.style.visibility = "visible";
compChoicePic.innerHTML = computerSelectionEmoji;
};

function playRound(e) {
    computerPlay()
    playerSelection = e.target.className;
    scoreGet() 
}


function computerPlay() {
    i = Math.floor(Math.random() * 3);
    computerSelection = compNum[i];
    computerSelectionEmoji = compEmoji[i];
}
computerPlay();

function scoreGet() {
    showCompChoice()
    if (playerSelection == computerSelection) {
        scoreCont.innerHTML = "Draw";
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
        console.log(pp + 1);
        playGame()
    } else {
        removeEvent()
        endScreen.innerHTML = "You Won";
    }
    addPP()
    createWinDiv()

}
function playerLost() {
    if (cp < 5) {
        console.log(cp - 2);
        playGame()
    } else {
        removeEvent()
        endScreen.innerHTML = "You lost";
    }
    addCP()
    createLoseDiv()
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
    dots[pp].style.backgroundColor = "#BBFFBB";
};
function changeRed() {
    dots[cp].style.backgroundColor = "#BBBBFF";
};
function removeEvent() {
   endCont.style.transform = "translate(0)";
    button.removeEventListener("click", playRound);
};

function createWinDiv() {
   scoreCont.innerHTML = `You won ${playerSelection} beats ${computerSelection}`;
}
function createLoseDiv() {  
    scoreCont.innerHTML = `You lost ${computerSelection} beats ${playerSelection}`;
}