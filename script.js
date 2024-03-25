let stats = {
    wins: 0,
    losses: 0,
    ties: 0,
    rock: 0,
    paper: 0,
    scissors: 0,
}

let playAgain = true;

while (playAgain) {
    let choices = ["Rock", "Paper", "Scissors"];

    let userChoice = prompt("Rock, Paper, or Scissors?");
    if (userChoice === "Rock") {
        stats.rock ++;
    }

    else if (userChoice === "Paper") {
        stats.paper ++;
    }

    else if (userChoice === "Scissors") {
        stats.scissors ++;
    }
    
    console.log(userChoice);

    let rngChoice = Math.floor(Math.random() * 3);
    console.log(rngChoice);

    let cpuChoice = choices[rngChoice];
    console.log(cpuChoice);

    // prompted when i make an invalid choice
    if (!choices.includes(userChoice)) {
        window.alert("Invalid input, please choose again");
        userChoice = prompt("Rock, Paper, or Scissors?");
        console.log(userChoice);
    }
    // comparison between user and computer
    // rock beats scissors
    else if (userChoice === "Rock" && cpuChoice === "Scissors") {
        window.alert("You Win!");
        stats.wins ++;
    }

    // scissors beats paper
    else if (userChoice === "Scissors" && cpuChoice === "Paper") {
        window.alert("You Win!");
        stats.wins ++;
    }

    // paper beats rock
    else if (userChoice === "Paper" && cpuChoice === "Rock") {
        window.alert("You Win!");
        stats.wins ++;
    }

    // if two of the same variables are chosen = draw
    else if (userChoice === cpuChoice) {
        window.alert("Draw!");
        stats.ties ++;
    }
    // all losses
    else {
        window.alert("You Lose...")
        stats.losses ++;
    }

    console.log(stats);
    playAgain = confirm("Would you like to play again?");
}

window.alert(`Here are your stats!\nWins: ${stats.wins}\nTies: ${stats.ties}\nLosses: ${stats.losses}\nRock: ${stats.rock}\nPaper: ${stats.paper}\nScissors: ${stats.scissors}`);


// choice is confirmed
// generate computer choice (randomly)
// replay after you HOLD THIS L option
// track wins, ties, losses
// track stats for choices that user input into prompt