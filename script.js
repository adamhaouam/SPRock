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



