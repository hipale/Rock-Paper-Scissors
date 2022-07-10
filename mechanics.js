compNum = ["Paper", "Rock", "Scissors"];
let computerPlay = () => {
    i = Math.floor(Math.random()*3);
}

let playerWon = () => {
    console.log(`you won ${playerSelection} beats ${computerSelection}`);
}

let playerLost = () => {
console.log(`you lost ${computerSelection} beats ${playerSelection}`);
}

computerPlay();
let computerSelection = compNum[i];

let playerSelection = prompt("What would you like to pick?: ")

if (playerSelection == computerSelection) {
  console.log("it's a draw")
} else if (playerSelection[0] == "p" || playerSelection[0] == "P") {
    if (computerSelection == "Rock") {
        playerWon()
    } else {
        playerLost()
    }
} else if (playerSelection[0] == "r" || playerSelection[0] == "R") {
    if (computerSelection == "Scissors") {
        playerWon()
    } else {
        playerLost()
    }
 } else if (playerSelection[0] == "s" || playerSelection[0] == "S") {
        if (computerSelection == "Paper") {
            playerWon()
        } else {
            playerLost()
        }
    }

