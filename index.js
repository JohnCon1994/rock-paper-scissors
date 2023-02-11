//have the computer choose rock, paper, or scissors at random

const computerPlay = () => {
    const arrOfChoices = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random() * 3);
    const compChoice = arrOfChoices[randomNum];
    return compChoice;
}

//take player input and see who wins

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        return 'You tied!'
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        compScore++
        return 'You lose, paper covers rock!'
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        compScore++
        return 'You lose, scissors cuts paper!'
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        compScore++
        return 'You lose, rock crushes paper!'
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++
        return 'You win, rock crushes scissors!'
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++
        return 'You win, paper covers rock!'
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++
        return 'You win,  scissors cuts paper!'
    }
}

//make it play 5 rounds to declare a true winner

let playerScore = 0

let compScore = 0

const game = () => {
    for (let i = 0; i < 5; i++){
        const playerSelection = prompt('Please choose rock, paper, or scissors!').toLowerCase()
        const computerSelection = computerPlay()
        playRound(playerSelection, computerSelection)
    }

    if (playerScore > compScore) {
        return 'You win!'
    } else if (playerScore < compScore){
        return 'You lose...'
    } else {
        return 'You tied. Huh.'
    }
}

console.log(game());