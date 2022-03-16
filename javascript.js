// computerPlay function returns Rock Paper or Scissors at random

function computerPlay() {

    // choose a random integer
    let randInt = getRandInt(0,3);

    // match randInt with corresponding rock, paper, or scissors value
    if (randInt == 0) {
        return "Rock";
    } else if (randInt == 1) {
        return "Paper";
    } else {
        return "Scissors";
    }

}

// getRandInt function is a helper for the computerPlay function--used to get a random number between a range of values
// source function from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

// playRound function takes user input and computerPlay input and returns string that declares winner of the round
function playRound(playerSelection, computerSelection) {
    // standardize inputs for boolean comparison
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    // compare input selection and decide who wins round
    if (playerSelection === computerSelection) {
        return `Draw! ${playerSelection} is equivalent to ${computerSelection}`;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You lose! ${playerSelection} doesn't beat ${computerSelection}`;
    }
}

// game function plays a 5 round game to keep score and reports the winner and loser at the end of the 5 round game
function game() {
    
    let playerScore = 0;
    let computerScore = 0;

    // for loop will be used to do a 5 round game and also keep score
    for (let i = 0; i < 5; i++) {
        // have the computer choose their input
        const computerSelection = computerPlay();
        // prompt user for their input
        const playerChoice = prompt("Rock, paper, or scissors?");
        // use player and computer choices and run a round of the game
        // save output into results in order to determine the winner of the round
        const results = playRound(playerChoice, computerSelection);

        // display results
        console.log(results);
        
        // the following conditional looks for keywords in the results output to determine the winner of the round and how to update the score accordingly
        if (results.search(/draw/i) === -1) {
            if (results.search(/win/i) !== -1) {
                playerScore += 1;
            } else {
                computerScore += 1;
            }
        } else {
            playerScore += 1;
            computerScore += 1;
        }

        // output the score count
        console.log(`Your score: ${playerScore}`);
        console.log(`Computer score: ${computerScore}`);
    }
    // determine the winner of the game
    if (playerScore > computerScore) {
        console.log(`You win!`);
    } else if (playerScore < computerScore) {
        console.log(`You lose!`);
    } else {
        console.log(`It's a draw!`);
    }
}

game();