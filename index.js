let playerScore = 0;
let computerScore = 0;
let winner = "";



function getComputerChoice() {
    const num = getRanNum();
    if(num == 1) {
        return "rock";
    } else if(num == 2) {
        return "paper";
    } else if(num == 3) {
        return "scissors";
    }
}



function getRanNum() {
    return Math.floor(Math.random() * 3) + 1
}


function playRound(playerSelection, computerSelection = getComputerChoice()) {
    playerSelection = prompt("Rock, Paper or Scissors??");
    const player = playerSelection.toLowerCase();


    if(player == "rock" && computerSelection == "paper") {
        console.log("%cYou Lose! Paper beats Rock", "color: white; background-color: red; font-size: 15px; padding: 10px; border-radius: 10px");
        winner = "computer";
        computerScore++;
    } else if (player == "rock" && computerSelection == "scissors") {
        console.log("%cYou Win! Rock beats Scissors", "color: white; background-color: green; font-size: 15px; padding: 10px; border-radius: 10px");
        winner = "player";
        playerScore++;
    } else if (player == "paper" && computerSelection == "rock") {
        console.log("%cYou Win! Paper beats rock", "color: white; background-color: green; font-size: 15px; padding: 10px; border-radius: 10px");
        winner = "player";
        playerScore++;
    } else if (player == "paper" && computerSelection == "scissors") {
        console.log("%cYou Lose! Scissors beats Paper", "color: white; background-color: red; font-size: 15px; padding: 10px; border-radius: 10px");
        winner = "computer";
        computerScore++;
    } else if (player == "scissors" && computerSelection == "rock") {
        console.log("%cYou Lose! Rock beats Scissors", "color: white; background-color: red; font-size: 15px; padding: 10px; border-radius: 10px");
        winner = "computer";
        computerScore++;
    } else if (player == "scissors" && computerSelection == "paper") {
        console.log("%cYou Win! Paper beats Scissors", "color: white; background-color: green; font-size: 15px; padding: 10px; border-radius: 10px");
        winner = "player";
        playerScore++;
    } else {
        console.log("%cIt is a draw!", "color: purple; background-color: white; font-size: 15px; padding: 10px; border-radius: 10px");
    }

    return winner;
}

function game() {
    playerScore = 0;
    computerScore = 0;
    winner = "";

    for(let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}: FIGHT!!`);
        playRound();
    }

    if(playerScore > computerScore) {
        console.log(`Score: ${playerScore} : ${computerScore}`);
        console.log(`%cYou won!! %cYou're a Legend 🙌`, "display: inline-block; margin-right: 10px; color: green; background-color: white; padding: 20px; font-size: 16px; border: 3px solid green; border-radius: 10px", "font-weight: 800; color: brown; background-color: white; padding: 20px; font-size: 16px; border: 3px solid yellow; border-radius: 10px");
    } else if (computerScore > playerScore) {
        console.log(`Score: ${playerScore} : ${computerScore}`);
       console.log(`%cShame on you! %cYou couldn't even beat a computer 😭`, "display: inline-block; margin-right: 10px; color: red; background-color: white; padding: 20px; font-size: 16px; border: 3px solid red; border-radius: 10px", "font-weight: 800; color: white; background-color: brown; padding: 20px; font-size: 16px; border: 3px solid brown; border-radius: 10px")
    } else if (computerScore == playerScore) {
        console.log(`Score: ${playerScore} : ${computerScore}`);
        console.log("%cYou try sha, It's a draw 😥", "color: white; background-color: purple; padding: 20px; font-size: 16px; border: 3px solid purple; border-radius: 10px");
    }

    return "Game Over";

}





