const  rpsArray = ['rock','paper','scissors'];
const options = document.querySelectorAll("button");
let computerScore = document.getElementById("computerScore");
var userScore = document.getElementById("userScore");
var announcement = document.getElementById("announcement");
var userPlay = "";
userScore.value = 0;
computerScore.value = 0;


function computerOption() {
    return rpsArray[Math.floor(Math.random() * rpsArray.length)];
}

function scoreRecordUser() {
        userScore.value++;
        return userScore.innerText = userScore.value;
    } 

function scoreRecordComputer() {
        computerScore.value++;
        return computerScore.innerText = computerScore.value;
    }     

function restartScores() {
    computerScore.value = 0;
    computerScore.innerText = computerScore.value;
    userScore.value = 0;
    userScore.innerText = userScore.value;
}

function playRound(computerPlay,userPlay) {

    if (computerPlay === userPlay) {
        announcement.innerHTML = `A Draw! You both got ${userPlay}`;
    } else if ((computerPlay === "rock") && (userPlay === "scissors")) {
        announcement.innerHTML = "You Lose! Rock beats Scissors";
        scoreRecordComputer()
    } else if ((computerPlay === "paper") && (userPlay === "rock")) {
        announcement.innerHTML = "You Lose! Paper beats Rock";
        scoreRecordComputer()
    } else if ((computerPlay === "scissors") && (userPlay === "paper")) {
        announcement.innerHTML = "You Lose! Scissors beats Paper";
        scoreRecordComputer()
    } else if ((computerPlay === "rock") && (userPlay === "paper")) {
        announcement.innerHTML = "You Win! Paper beats Rock";
        scoreRecordUser();
    } else if ((computerPlay === "paper") && (userPlay === "scissors")) {
        announcement.innerHTML = "You Win! Scissors beats Paper";
        scoreRecordUser();
    } else if ((computerPlay === "scissors") && (userPlay === "rock")) {
        announcement.innerHTML = "You Win! Rock beats Scissors";
        scoreRecordUser();
    } else if (userPlay === "restart") {
        restartScores();
    }
    else {
        announcement.innerHTML = "Error";
    }
}

function game() {
        let computerItem = computerOption();
        return playRound(computerItem,userPlay);
    }

function scoreCheck() {
    if (computerScore.value === 5) {
        restartScores();}
    else if (userScore.value === 5) {
        restartScores();}
    }


function checkup() {
    if (computerScore.value === 5) {
        computerScore.innerText = 5;
        announcement.innerHTML = "Computer wins!";
        // restartScores();
    }
    else if (userScore.value === 5) {
        userScore.innerText = 5;
        announcement.innerHTML = "Congratulations, you won!";
        // restartScores();
    }
    else {}
    }
        

options.forEach((button) => {
    button.addEventListener('click', () => {
        userPlay = button.id;
        scoreCheck();
        game();
        checkup();

    })})
