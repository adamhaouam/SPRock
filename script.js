/*
let rock = 0;
let scissors = 0;
let paper = 0;
*/

function getComputerChoice() {
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

function getHumanChoice() {
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

console.log(getHumanChoice());




