let humanChoice = undefined;
let computerChoice = undefined;
let humanScore = 0;
let computerScore = 0;
let humanWin = false;
let computerWin = false;
let roundCounter = 0;
let isGameOver = false;
let isHumanFinalWinner = undefined;

// UI
const humanScoreDisplay = document.querySelector('#human_score');
const computerScoreDisplay = document.querySelector('#computer_score');
const humanImageDisplay = document.querySelector('#human_img');
const computerImageDisplay = document.querySelector('#computer_img');
const humanChoiceDisplay = document.querySelector('#human');
const computerChoiceDisplay = document.querySelector('#computer');
const roundCounterDisplay = document.querySelector('#round_number');
const resultTextDisplay = document.querySelector('#result_description');
const choicesDisplay = document.querySelector('#choices');
const playAgainDisplay = document.querySelector('#play');


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
	updateRoundCounterUI();
	checkRoundWinner(humanChoice, computerChoice);
	updateChoicesUI(humanChoice, computerChoice)
	updateScoresUI(humanScore, computerScore);
	updateImagesUI(humanChoice, computerChoice);
	updateWinnerTextUI(humanWin, computerWin);
	removePopEffect();
	checkTotalScore();

	if (isGameOver) {
		showPlayAgainUI();
	}
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


function checkTotalScore() {
	if (humanScore === 2 || computerScore === 2) {
		if(humanScore === 2) {
			console.log("you won");
		} else {
			console.log("COMPUTER WON");
		}
		isGameOver = true;
		console.log("GAME OVER");
	}
}


function showPlayAgainUI() {
	playAgainDisplay.classList.remove('d_none');
	choicesDisplay.classList.add('d_none');
}

playAgainDisplay.addEventListener('click', event => {
	resetGame();
	playAgainDisplay.classList.add('d_none');
	choicesDisplay.classList.remove('d_none');
	console.log("playAgainDisplay Clicked");
});


function displayFinalWinner() {

}


function resetGame() {
	roundCounter = 0;
	humanScore = 0;
	computerScore = 0;
	humanWin = false;
	computerWin = false;
	isGameOver = false;

	// Reset UIs
	roundCounterDisplay.textContent = roundCounter;
	humanChoiceDisplay.textContent = '?';
	computerChoiceDisplay.textContent = '?';
	humanImageDisplay.setAttribute('src', `./images/human-question-mark.png`);
	computerImageDisplay.setAttribute('src', `./images/computer-question-mark.png`);
	humanScoreDisplay.textContent = humanScore;
	computerScoreDisplay.textContent = computerScore;
}


// UI updates
function updateChoicesUI(humanChoice, computerChoice) {
	humanChoiceDisplay.textContent = humanChoice;
	computerChoiceDisplay.textContent = computerChoice;
}

function updateScoresUI(humanScore, computerScore) {
	humanScoreDisplay.textContent = humanScore
	computerScoreDisplay.textContent = computerScore;
}


function updateImagesUI(humanChoice, computerChoice) {
	humanImageDisplay.setAttribute('src', `./images/human-${humanChoice}.png`);
	computerImageDisplay.setAttribute('src', `./images/computer-${computerChoice}.png`);
}


function updateWinnerTextUI(humanWin, computerWin) {
	resultTextDisplay.classList.remove('pop-win', 'pop-lose', 'pop-tie');

	if(humanWin === false && computerWin === false) {
		resultTextDisplay.textContent = '🤝 Tie!';
		resultTextDisplay.classList.add('pop-tie', 'pop-effect');
		return;
	}

	if(humanWin) {
		resultTextDisplay.textContent = '🔥 Point to You!';
		resultTextDisplay.classList.add('pop-win', 'pop-effect');
	} 

	if(computerWin) {
		resultTextDisplay.textContent = '🤖 Computer scores!';
		resultTextDisplay.classList.add('pop-lose', 'pop-effect');
	}

}


function updateRoundCounterUI() {
	roundCounter++;
	roundCounterDisplay.textContent = roundCounter;
}


function removePopEffect() {
	setTimeout(() => {
		resultTextDisplay.classList.remove('pop-effect');
	}, 300);
}