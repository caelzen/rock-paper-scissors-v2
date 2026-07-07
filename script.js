let computerChoice = undefined;
let humanChoice = undefined;

// get computer and human choice
const choicesContainer = document.querySelector('#choices');
choicesContainer.addEventListener('click', event => {
	let clickedButton = event.target.closest('button');
	if (!clickedButton) { return; }

	// get human choice
	humanChoice = clickedButton.id;

	// get computer choice
	computerChoice = getComputerChoice();
});


function getComputerChoice() {
	let choice =  randomizer();

	if (choice === 1) { return 'rock'; }
	if (choice === 2) {return 'paper'; }
	if (choice === 3) {return 'scissors'; }
}


function randomizer() {
	return Math.floor(Math.random() * 3) + 1;
}