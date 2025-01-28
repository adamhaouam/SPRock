/*
let rock = 0;
let scissors = 0;
let paper = 0;
*/


let humanScore = 0;
let computerScore = 0;

const scores = document.querySelector("#results");


function getComputerChoice() { //return between "rock", "paper" and "scissors"
    let roll = Math.random() * 3;
    if (roll < 1) {
        //rock += 1;
        return "rock";
    }
    else if (roll < 2) {
        //scissors += 1;
        return "scissors";
    }
    else {
        //paper += 1;
        return "paper";
    }
}

function getHumanChoice() { // Retrieves choice from user, only allows "rock", "paper" and "scissors"
    let valid = false;
    let answer = prompt("Scissors, paper or rock?").toLowerCase();
    while (true) {
        console.log(answer);
        if (answer == "rock" ||
            answer == "scissors" ||
            answer == "paper")
            return answer;
        else {
            answer = prompt("Not a valid answer, please try again.").toLowerCase();
        }
    }
}

function playRound(humanChoice = getHumanChoice(), computerChoice = getComputerChoice()) { //Requests choice, compares with computer choice, allocates win to score
    
    if (humanChoice == computerChoice) {
        scores.textContent = "Tie!";
    }
    else if (humanChoice == "rock") {
        if (computerChoice == "scissors") {
            humanScore += 1;
            scores.textContent = "You win! Rock beats scissors.";
        }
        else {
            computerScore += 1;
            scores.textContent = "You lose! Paper beats rock";
        }
    }
    else if (humanChoice == "scissors") {
        if (computerChoice == "paper") {
            humanScore += 1;
            scores.textContent = "You win! Scissors beats paper.";
        }
        else {
            computerScore += 1;
            scores.textContent = "You lose! Rock beats Scissors";
        }
    }
    else {
        if (computerChoice == "rock") {
            humanScore += 1;
            scores.textContent = "You win! Paper beats rock.";
        }
        else {
            computerScore += 1;
            scores.textContent = "You lose! Scissors beats paper";
        }
    }

    scores.appendChild(document.createElement('br'));
    let result = document.createTextNode(`\nYour score: ${humanScore} Computer score: ${computerScore}`);
    scores.appendChild(result);

} 


//const rockButton = document.querySelector("#rock");

const buttons = document.querySelectorAll("button");


buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.id, getComputerChoice());
  });
});



// for (let i = 0; i < 5; i++) {
//     playRound();
// }
// console.log(`Your score: ${humanScore}, PC score: ${computerScore}`);
