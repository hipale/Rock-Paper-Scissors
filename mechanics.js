let pp = 0;
let cp = 3;
let playerSelection = prompt("What would you like to pick?: ");

dots = [document.getElementById("dot0"), document.getElementById("dot1"), 
document.getElementById("dot2"), document.getElementById("dot3"), 
document.getElementById("dot4"), document.getElementById("dot5"), 
document.getElementById("dot6")];

let computerSelection;
                 
function computerPlay() {
    compNum = ["Paper", "Rock", "Scissors"];   
    playWin = ["Scissors", "Paper", "Rock"];
    playLost = ["Rock", "Scissors", "Paper"];
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
    if (pp < 2) {
        console.log(`you won ${playWin[i]} beats ${computerSelection}`);
        console.log(pp+1); 
        playGame() } else {
            console.log("you won"); 
        }
        addPP()
        
    }
function playerLost()  {
    if (cp < 5) {
    console.log(`you lost ${computerSelection} beats ${playLost[i]}`);
         console.log(cp-2);
         playGame() } else {
            console.log("you lost");  
         }
         addCP()
         
    }
    function playGame() {
        setTimeout(() => {
        playerSelection = prompt("What would you like to pick?: ");
        computerPlay()
        scoreGet()
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
    }
    function changeRed() {
        dots[cp].style.backgroundColor = "red";
    }