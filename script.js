let humanChoice = undefined;
let computerChoice = undefined;
let humanScore = 0;
let computerScore = 0;

// get computer and human choice
const choicesContainer = document.querySelector('#choices');
choicesContainer.addEventListener('click', event => {
	let clickedButton = event.target.closest('button');
	if (!clickedButton) { return; }

	// get human choice
	humanChoice = clickedButton.id;

	// get computer choice
	computerChoice = getComputerChoice();


	playRound(humanChoice, computerChoice);
});


function playRound(humanChoice, computerChoice) {
	checkRoundWinner(humanChoice, computerChoice);
}


function checkRoundWinner(humanChoice, computerChoice) {
	if (humanChoice === computerChoice) { return; }

	if (humanChoice === 'rock') {
		computerChoice === 'paper' ? computerScore++ : humanScore++;
	}

	if (humanChoice === 'paper') {
		computerChoice === 'scissors' ? computerScore++ : humanScore++;
	}

	if (humanChoice === 'scissors') {
		computerChoice === 'rock' ? computerScore++ : humanScore++;
	}
}



function getComputerChoice() {
	let choice =  randomizer();

	if (choice === 1) { return 'rock'; }
	if (choice === 2) {return 'paper'; }
	if (choice === 3) {return 'scissors'; }
}


function randomizer() {
	return Math.floor(Math.random() * 3) + 1;
}