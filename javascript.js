// computerPlay function returns Rock Paper or Scissors at random

function computerPlay() {
    // choose Rock Paper or Scissors at random
    
}

// getRandInt function is a helper for the computerPlay function--used to get a random number between a range of values
// source function from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

// playRound function takes user input and computerPlay input and returns string that declares winner of the round

// game function plays a 5 round game to keep score and reports the winner and loser at the end of the 5 round game
