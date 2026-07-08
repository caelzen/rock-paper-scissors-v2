let humanChoice = undefined;
let computerChoice = undefined;
let humanScore = 0;
let computerScore = 0;
let humanWin = false;
let computerWin = false;



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
	updateChoicesUI(humanChoice, computerChoice)
	updateScoresUI(humanScore, computerScore);
	updateImagesUI(humanChoice, computerChoice);
	updateWinnerTextUI(humanWin, computerWin);



}


function checkRoundWinner(humanChoice, computerChoice) {
	humanWin = false;
	computerWin = false;

	if (humanChoice === computerChoice) { 
		humanWin = false; computerWin = false; 
		return; 
	}
	
	if (humanChoice === 'rock') {
		if(computerChoice === 'paper') {
			computerScore++;
			computerWin = true;
		} else {
			humanScore++;
			humanWin = true;
		}
	}

	if (humanChoice === 'paper') {
		if(computerChoice === 'scissors') {
			computerScore++;
			computerWin = true;
		} else {
			humanScore++;
			humanWin = true;
		}
	}

	if (humanChoice === 'scissors') {
		if(computerChoice === 'rock') {
			computerScore++;
			computerWin = true;
		} else {
			humanScore++;
			humanWin = true;
		}
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


// UI updates
function updateChoicesUI(humanChoice, computerChoice) {
	const humanChoiceDisplay = document.querySelector('#human');
	const computerChoiceDisplay = document.querySelector('#computer');

	humanChoiceDisplay.textContent = humanChoice;
	computerChoiceDisplay.textContent = computerChoice;
}

function updateScoresUI(humanScore, computerScore) {
	const humanScoreDisplay = document.querySelector('#human_score');
	const computerScoreDisplay = document.querySelector('#computer_score');

	humanScoreDisplay.textContent = humanScore
	computerScoreDisplay.textContent = computerScore;
}


function updateImagesUI(humanChoice, computerChoice) {
	const humanImageDisplay = document.querySelector('#human_img');
	const computerImageDisplay = document.querySelector('#computer_img');


	humanImageDisplay.setAttribute('src', `./images/human-${humanChoice}.png`);
	computerImageDisplay.setAttribute('src', `./images/computer-${computerChoice}.png`);
}


function updateWinnerTextUI(humanWin, computerWin) {
	const resultTextDisplay = document.querySelector('#result_description');

	resultTextDisplay.classList.remove('pop-win', 'pop-lose', 'pop-tie');

	if(humanWin === false && computerWin === false) {
		resultTextDisplay.textContent = '🤝 Tie!';
		resultTextDisplay.classList.add('pop-tie', 'pop-effect');
		removePopEffect(resultTextDisplay);
		return;
	}

	if(humanWin) {
		resultTextDisplay.textContent = '🔥 Point to You!';
		resultTextDisplay.classList.add('pop-win', 'pop-effect');
		removePopEffect(resultTextDisplay);
	} 

	if(computerWin) {
		resultTextDisplay.textContent = '🤖 Computer scores!';
		resultTextDisplay.classList.add('pop-lose', 'pop-effect');
		removePopEffect(resultTextDisplay);
	}

}


function removePopEffect(resultTextDisplay) {
	setTimeout(() => {
		resultTextDisplay.classList.remove('pop-effect');
	}, 300);
}