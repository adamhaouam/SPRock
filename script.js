/*
let rock = 0;
let scissors = 0;
let paper = 0;
*/


let humanScore = 0;
let computerScore = 0;


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

function playRound(humanChoice, computerChoice) { //Requests choice, compares with computer choice, allocates win to score
    humanChoice = getHumanChoice();
    //humanChoice = "rock";
    computerChoice = getComputerChoice();
    if (humanChoice == computerChoice) {
        console.log("Tie!");
    }
    else if (humanChoice == "rock") {
        if (computerChoice == "scissors") {
            humanScore += 1;
            console.log("You win! Rock beats scissors.");
        }
        else {
            computerScore += 1;
            console.log("You lose! Paper beats rock");
        }
    }
    else if (humanChoice == "scissors") {
        if (computerChoice == "paper") {
            humanScore += 1;
            console.log("You win! Scissors beats paper.");
        }
        else {
            computerScore += 1;
            console.log("You lose! Rock beats Scissors");
        }
    }
    else {
        if (computerChoice == "rock") {
            humanScore += 1;
            console.log("You win! Paper beats rock.");
        }
        else {
            computerScore += 1;
            console.log("You lose! Scissors beats paper");
        }
    }
} 


/* TESTING

for (let i = 0; i < 10000; i++) {
    playRound();
}
console.log(`Your score: ${humanScore}, PC score: ${computerScore}`);
*/