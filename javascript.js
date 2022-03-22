// computerPlay function returns Rock Paper or Scissors at random

function computerPlay() {

    // choose a random integer
    let randInt = getRandInt(0, 3);

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
        playerScore += 1;
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore += 1;
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore += 1;
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        computerScore += 1;
        return `You lose! ${playerSelection} doesn't beat ${computerSelection}`;
    }
}

// game function plays a 5 round game to keep score and reports the winner and loser at the end of the 5 round game
/*
function game() {




    let playerScore = 0;
    let computerScore = 0;


    // for loop will be used to do a 5 round game and also keep score
    for (let i = 0; i < 5; i++) {

        let buttonChoice;

        // have the computer choose their input
        const computerSelection = computerPlay();
        // prompt user for their input

        //const playerChoice = prompt("Rock, paper, or scissors?");


        // use player and computer choices and run a round of the game
        // save output into results in order to determine the winner of the round
        // // const results = playRound(playerChoice, computerSelection);

        // display results
        // // console.log(results);
        roundResults.textContent = `${playRound(buttonChoice, computerPlay())}`;

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
        // console.log(`Your score: ${playerScore}`);
        // console.log(`Computer score: ${computerScore}`);
        playerResults.textContent = `Your score: ${playerScore}`;
        computerResults.textContent = `Computer score: ${computerScore}`

    }
    // determine the winner of the game
    if (playerScore > computerScore) {
        // console.log(`You win!`);
        winner.textContent = `You Win!`;
    } else if (playerScore < computerScore) {
        // console.log(`You lose!`);
        winner.textContent = `You Lose!`;
    } else {
        // console.log(`It's a draw!`);
        winner.textContent = `It's a draw!`;
    }
}

*/

// create a container for the buttons
const body = document.querySelector('body');
const container = document.createElement('div');

container.classList.add('container');
// container.textContent = 'container';

body.append(container);

// create buttons
const rockButton = document.createElement('button');
const paperButton = document.createElement('button');
const scissorsButton = document.createElement('button');

// create class names for buttons
rockButton.classList.add('rock');
paperButton.classList.add('paper');
scissorsButton.classList.add('scissors');

// add text to buttons
rockButton.textContent = 'Rock';
paperButton.textContent = 'Paper';
scissorsButton.textContent = 'Scissors';

// append buttons onto container
container.append(rockButton, paperButton, scissorsButton);

// put buttons in a node list called buttons
const buttons = document.querySelectorAll('button');


/*
rockButton.addEventListener('click', () => {
    console.log('rockBUTTON');
})
*/

// add a div for displaying results and change console.logs into DOM methods
const displayInfo = document.createElement('div');
// add elements for displaying certain info
const roundResults = document.createElement('h1');
const playerResults = document.createElement('h1');
const computerResults = document.createElement('h1');
const score = document.createElement('h1');
const winner = document.createElement('h2');

// append
// displayInfo.append(roundResults);
// displayInfo.append(playerResults);
// displayInfo.append(computerResults);
// displayInfo.append(score);
// displayInfo.append(winner);

container.append(displayInfo);
container.append(winner);
container.append(roundResults);
container.append(playerResults);
container.append(computerResults);
container.append(score);




// iterate through each button on the webpage
buttons.forEach((button) => {

    // when button is clicked, play a round of RPS and output to results div
    button.addEventListener('click', () => {
        // save click info for usage
        // buttonChoice = button.className;



        displayInfo.textContent = `${playRound(button.className, computerPlay())}`;

        playerResults.textContent = `Player Score: ${playerScore}`;
        computerResults.textContent = `Computer Score: ${computerScore}`;

        if (playerScore === 5 || computerScore === 5) {
            if (playerScore > computerScore) {
                winner.textContent = `You Win!`;
            } else {
                winner.textContent = `You Lose!`;
            }
            playerScore = 0;
            computerScore = 0;
        }




    });
});

// declare global vars that can be accessed everywhere
let playerScore = 0;
let computerScore = 0;

