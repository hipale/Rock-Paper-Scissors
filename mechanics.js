let s = 0;
let playerSelection = prompt("What would you like to pick?: ");

dots = [document.getElementById("dot0"), document.getElementById("dot1"), 
document.getElementById("dot2"), document.getElementById("dot3"), 
document.getElementById("dot4"), document.getElementById("dot5"), 
document.getElementById("dot6"),]

let computerSelection;
                 
function computerPlay() {   
    compNum = ["Paper", "Rock", "Scissors"];      
    i = Math.floor(Math.random()*3);
computerSelection = compNum[i];
}
computerPlay();



function scoreGet () {
    if (playerSelection[0].toUpperCase() == computerSelection[0]) {
      console.log("it's a draw")
      playGame()
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
    scoreGet()
function playerWon() {
    if (s < 2) {
        console.log(`you won ${playerSelection} beats ${computerSelection}`);
        s++;
        console.log(s); 
        playGame() } else {
            console.log("you won");
        }
    }
function playerLost()  {
    if (s > -2) {
    console.log(`you lost ${computerSelection} beats ${playerSelection}`);
         s--;
         console.log(s); 
         playGame() } else {
            console.log("you lost");
         }

    }
    function playGame() {
        setTimeout(() => {
        playerSelection = prompt("What would you like to pick?: ");
        computerPlay()
        scoreGet()
    }, 1000)
    }         
    