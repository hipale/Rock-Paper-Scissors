let pp = 0;
let cp = 3;

dots = [document.getElementById("dot0"), document.getElementById("dot1"),
document.getElementById("dot2"), document.getElementById("dot3"),
document.getElementById("dot4"), document.getElementById("dot5"),
document.getElementById("dot6")];

let button = document.querySelector("#playButt");
let playerSelection;
button.addEventListener("click", playRound);

function playRound(e) {
    playerSelection = e.target.className;
    scoreGet()
}
let computerSelection;

function computerPlay() {
    compNum = ["Paper", "Rock", "Scissors"];
    i = Math.floor(Math.random() * 3);
    computerSelection = compNum[i];
}
computerPlay();

function scoreGet() {
    if (playerSelection == computerSelection) {
        console.log("it's a draw")
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
        console.log(`you won ${playerSelection} beats ${computerSelection}`);
        console.log(pp + 1);
        playGame()
    } else {
        console.log("you won");
        removeE()
    }
    addPP()

}
function playerLost() {
    if (cp < 5) {
        console.log(`you lost ${computerSelection} beats ${playerSelection}`);
        console.log(cp - 2);
        playGame()
    } else {
        console.log("you lost");
        removeE()
    }
    addCP()

}
function playGame() {
    setTimeout(() => {
        computerPlay()
        playerSelection;
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
function removeE() {
    button.removeEventListener("click", playRound);
}