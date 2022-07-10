let s = 0;
let playerSelection = prompt("What would you like to pick?: ");


dots = [document.getElementById("dot0"), document.getElementById("dot1"), 
document.getElementById("dot2"), document.getElementById("dot3"), 
document.getElementById("dot4"), document.getElementById("dot5"), 
document.getElementById("dot6"),]
compNum = ["Paper", "Rock", "Scissors"];
let computerPlay = () => {
    i = Math.floor(Math.random()*3);
}
computerPlay();
let computerSelection = compNum[i];
let playerWon = () => {
    console.log(`you won ${playerSelection} beats ${computerSelection}`);
    s++;
    console.log(s);  
}

let playerLost = () => {
console.log(`you lost ${computerSelection} beats ${playerSelection}`);
     s--;
     console.log(s);
    
}

let scoreGet = () => {
if (playerSelection[0].toUpperCase() == computerSelection[0]) {
  console.log("it's a draw")
} else if (playerSelection[0].toUpperCase() == "P") {
    if (computerSelection == "Rock") {
        playerWon()
    } else {
        playerLost()
    }
} else if (playerSelection[0].toUpperCase() == "R") {
    if (computerSelection == "Scissors") {
        playerWon()
    } else {
        playerLost()
    }
 } else if (playerSelection[0].toUpperCase() == "S") {
        if (computerSelection == "Paper") {
            playerWon()
        } else {
            playerLost()
        }
    }
}
scoreGet();
if (s == -3) {
    console.log("you lost");
} else if (s == 3) {
    console.log("you won");
}
