// computerPlay function returns Rock Paper or Scissors at random

function computerPlay() {
    // choose a random integer
    let randInt = getRandInt(0,3);

    // match randInt with corresponding rock, paper, or scissors value
    if (randInt == 0) {
        let choice = "rock";
    } else if (randInt == 1) {
        let choice = "paper";
    } else {
        let choice = "scissors";
    }

    // return the choice
    return choice;

}

// getRandInt function is a helper for the computerPlay function--used to get a random number between a range of values
// source function from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandInt(min, max) {
    let min = Math.ceil(min);
    let max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

// playRound function takes user input and computerPlay input and returns string that declares winner of the round

// game function plays a 5 round game to keep score and reports the winner and loser at the end of the 5 round game
