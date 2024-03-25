let R = "Rock";

let P = "Paper";

let S = "Scissors";

let userChoice = prompt("Rock, Paper, or Scissors?");
console.log(userChoice);

let rngChoice = Math.floor(Math.random() * 3);
console.log(rngChoice);

let choices = ["Rock", "Paper", "Scissors"];

let cpuChoice = choices[rngChoice];
console.log(cpuChoice);

let stats = {
    wins: 0,
    losses: 0,
    ties: 0,
}

// prompted when i make an invalid choice
while (!choices.includes(userChoice)) {
    window.alert("Invalid input, please choose again");
    userChoice = prompt("Rock, Paper, or Scissors?");
    console.log(userChoice);
}

// comparison between user and computer
// rock beats scissors
if (userChoice === "Rock" && cpuChoice === "Scissors") {
    window.alert("You Win!");
    stats.wins = stats.wins + 1;
}

// scissors beats paper
else if (userChoice === "Scissors" && cpuChoice === "Paper") {
    window.alert("You Win!");
    stats.wins = stats.wins + 1;
}

// paper beats rock
else if (userChoice === "Paper" && cpuChoice === "Rock") {
    window.alert("You Win!");
    stats.wins = stats.wins + 1;
}

// if two of the same variables are chosen = draw
else if (userChoice === cpuChoice) {
    window.alert("Draw!");
    stats.ties = stats.ties + 1;
}
// all losses
else {
    window.alert("You Lose...")
    stats.losses = stats.losses + 1;
}



// choice is confirmed

// generate computer choice (randomly)

// replay after you HOLD THIS L option

// track wins, ties, losses

// track stats for choices that user input into prompt