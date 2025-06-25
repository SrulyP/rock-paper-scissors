
let humanScore = 0;
let computerScore = 0;

let humanSelection;
let computerSelection


// Set up the event listener to get the human choice
let playButtons = document.querySelectorAll('button');
playButtons.forEach((button) => {
    button.addEventListener("click", () => {
        humanSelection = (button.id);
        computerSelection = getComputerSelection();
        playRound(humanSelection, computerSelection);
    });
});


// Get the computer choice
function getComputerSelection() {
    let randomNum = Math.random();
    randomNum = randomNum.toFixed(3) ;
    let computerSelection;
    if (randomNum <= 0.333) {
        computerSelection = "rock";
    } else if (randomNum >= 0.666) {
        computerSelection = "scissors";
    } else {
        computerSelection = "paper";
    }
    return computerSelection;
};


// Play one round
function playRound(humanSelection, computerSelection) {

    document.getElementById("humanChoiceP").innerText = `You chose: ${humanSelection}`;
    document.getElementById("computerChoiceP").innerText = `Computer chose: ${computerSelection}`;


    // Ties
    if (humanSelection == "rock" && computerSelection == "rock") {
        document.getElementById("winner").innerText = `It's a tie! You both chose rock!`;    }
    else if (humanSelection == "paper" && computerSelection == "paper") {
        document.getElementById("winner").innerText = `It's a tie! You both chose paper!`;
    }
    else if (humanSelection == "scissors" && computerSelection == "scissors") {
        document.getElementById("winner").innerText = `It's a tie! You both chose scissors!`;
    }

    // Human wins
    else if (humanSelection == "paper" && computerSelection == "rock") {
        document.getElementById("winner").innerText = `You win this round, paper beats rock!`;
        humanScore += 1
    }
    else if (humanSelection == "scissors" && computerSelection == "paper") {
        document.getElementById("winner").innerText = `You win this round, scissors beats paper!`;
        humanScore += 1
    }
    else if (humanSelection == "rock" && computerSelection == "scissors") {
        document.getElementById("winner").innerText = `You win this round, rock beats scissors!`;
        humanScore += 1
    }

    // Computer wins
    else if (humanSelection == "rock" && computerSelection == "paper") {
        document.getElementById("winner").innerText = `You lose this round, paper beats rock!`;
        computerScore += 1
    }
    else if (humanSelection == "paper" && computerSelection == "scissors") {
        document.getElementById("winner").innerText = `You lose this round, scissors beats paper!`;
        computerScore += 1
    }
    else if (humanSelection == "scissors" && computerSelection == "rock") {
        document.getElementById("winner").innerText = `You lose this round, rock beats scissors!`;
        computerScore += 1
    }
    updateScoreDisplay();

    // Check if a player has reached 5 points, if yes reset the scores
    if (humanScore == 5) {
        resetScores();
        document.getElementById("winner").innerText = `Game Over: You win! You won 5 rounds!`;
        return

    } else if (computerScore == 5) {
        resetScores();
        document.getElementById("winner").innerText = `Game Over: You lost! The computer won 5 rounds and beat you!`;
        return
    }
}


// Reset the scores
function resetScores(){
    humanScore = 0;
    computerScore = 0;
    updateScoreDisplay();
    document.getElementById("humanChoiceP").innerText = `Choose an element: `;
    document.getElementById("computerChoiceP").innerText = ` `;
    document.getElementById("winner").innerText = ``;

}


function updateScoreDisplay() {
    document.getElementById('humanScore').textContent = humanScore;
    document.getElementById('computerScore').textContent = computerScore;
}

