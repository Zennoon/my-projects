'use strict;'

const rock_paper_scissors_array = ["rock", "paper", "scissors"];
let number_of_wins, number_of_losses, number_of_ties;
function getPlayerSelection() {
    let playerSelection = prompt("Enter a move. \nOptions are Rock, Paper, or Scissors.").toLowerCase();
    if (rock_paper_scissors_array.includes(playerSelection)) {
        return playerSelection;
    }
    alert("Choose a proper option.")
    return getPlayerSelection();
}

function getComputerSelection() {
    const random_number = Math.floor(Math.random() * 3);
    return rock_paper_scissors_array[random_number];
}

function playRound(playerSelection, computerSelection) {
    let win = false;
    let loss = false;
    const playerSelectionIndex = rock_paper_scissors_array.indexOf(playerSelection);
    const computerSelectionIndex = rock_paper_scissors_array.indexOf(computerSelection);
    if (playerSelection === computerSelection) {
        number_of_ties++;
    }
    else if (playerSelectionIndex > computerSelectionIndex || computerSelectionIndex - playerSelectionIndex === 2) {
        win = true;
        number_of_wins++;
    }
    else {
        loss = true
        number_of_losses++;
    }
    console.log(`You played ${playerSelection}, the computer played ${computerSelection}`);
    return declareRoundWinner(win, loss);
}

const declareRoundWinner = (win, loss) => {
    if (win) {
        return "You Win!";
    }
    else if (loss) {
        return "You Lose!";
    }
    else {
        return "It's a tie!";
    }
}

const game = function() {
    number_of_wins = 0;
    number_of_losses = 0;
    number_of_ties = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = getPlayerSelection();
        let computerSelection = getComputerSelection();
        console.log(playRound(playerSelection, computerSelection));
    }
    winner = number_of_wins === number_of_losses? "It's a tie!" : number_of_wins > number_of_losses? `You win ${number_of_wins} to ${number_of_losses}` : `You lose ${number_of_wins} to ${number_of_losses}`;
    console.log("Final score: ", winner);
}

