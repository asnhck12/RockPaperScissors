const  rpsArray = ['rock','paper','scissors'];

function computerPlays(item) {
    return item[Math.floor(Math.random() * item.length)];
}

function playRound(computerPlay,userPlay) {

    if (computerPlay.toLowerCase() === userPlay.toLowerCase()) {
        console.log(`A Draw! You both got ${userPlay}`);
    } else if ((computerPlay.toLowerCase() === "rock") && (userPlay.toLowerCase() === "scissors")) {
        console.log("You Lose! Rock beats Scissors");
    } else if ((computerPlay.toLowerCase() === "paper") && (userPlay.toLowerCase() === "rock")) {
        console.log("You Lose! Paper beats Rock");
    } else if ((computerPlay.toLowerCase() === "scissors") && (userPlay.toLowerCase() === "paper")) {
        console.log("You Lose! Scissors beats Paper");
    } else if ((computerPlay.toLowerCase() === "rock") && (userPlay.toLowerCase() === "paper")) {
        console.log("You Win! Paper beats Rock");
    } else if ((computerPlay.toLowerCase() === "paper") && (userPlay.toLowerCase() === "scissors")) {
        console.log("You Win! Scissors beats Paper");
    } else if ((computerPlay.toLowerCase() === "scissors") && (userPlay.toLowerCase() === "rock")) {
        console.log("You Win! Rock beats Scissors");
    } else {
        console.log("Error");
    }
}

function game() {
    let userItem = prompt("Please type in rock, paper or scissors");
    let computerItem = computerPlays(rpsArray);
    return playRound(computerItem,userItem);
}

for (let i=0; i < 5; i++) {
    game();
}
    