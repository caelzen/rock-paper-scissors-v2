// Computer
let computerChoice = getComputerChoice();
let humanChoice = undefined;


// getHumanChoice
const choicesContainer = document.querySelector('#choices');
choicesContainer.addEventListener('click', event => {
	let clickedButton = event.target.closest('button');
	if (!clickedButton) { return; }

	humanChoice = clickedButton.id;	

	console.log(humanChoice);
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