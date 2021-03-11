// Some code is from external source as free code camp (more info in readme file)
// To flip the card when clicked, a class flip will be added to the element.
// all memory - card elements with document.querySelectorAll, 

const cards = document.querySelectorAll('.memory-card');

let winAudio = new Audio('assets/audio/main_title_rebel_blockade_runner.mp3');
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let matches = 0;
let i = 100;
let input = document.getElementById("input");
let add;
let imperialMarch = document.getElementById("music");
let iconMusic = document.getElementById("icon");

function flipCard() {

	//  lockBoard variable: When the player clicks the second card, 
	//  lockBoard will set to true and the condition if (lockBoard) return;
	//   will prevent any card flipping before the cards are hidden or match
	if (lockBoard) return;

	// the player can click twice on the same card. The matching condition would evaluate to true, removing the event listener from that card.
	// To prevent, it check if the current clicked card is equal to the firstCard and return if positive.

	if (this === firstCard) return;

	this.classList.add('flip');

	if (!hasFlippedCard) {
		// first click
		hasFlippedCard = true;
		firstCard = this;

		return;
	}
	// second click
	hasFlippedCard = false;
	secondCard = this;

	checkForMatch();
}

function checkForMatch() {
	// if cards match go to disableCards function
	if (firstCard.dataset.starwars === secondCard.dataset.starwars) {
		matches = matches + 1;
		if (matches == 8) {
			gameFinished();
		}
		disableCards();
	} else {
		// if cards don't match go to unflipCards function
		unFlipCards();
	}
}

// The library sweetalert has been used to create alert windows at the end of the game
function gameFinished() {
    imperialMarch.pause();
	winAudio.play();
	clearInterval(add);
	swal({
			title: "You Win!!",
			text: "Do you want to try again?",
			icon: "warning",
			buttons: true,
			dangerMode: true,
		})
		.then((willPlay) => {
			if (willPlay) {
				swal("Good! Go ahead young Jedi!", {
					icon: "success",
					button: false,
				});
				setInterval(function () {
					location.reload();
				}, 3000);

			} else {
				swal("May the Force be with you !! Good Bye!", {
					button: true,
				});
				setInterval(function () {
					pauseGame();					
				}, 3000);

			}
		});

}

function disableCards() {
	// it's a match!!
	firstCard.removeEventListener('click', flipCard);
	secondCard.removeEventListener('click', flipCard);

	resetBoard();
}

function unFlipCards() {
	lockBoard = true;

	// not a match!!
	setTimeout(() => {
		firstCard.classList.remove('flip');
		secondCard.classList.remove('flip');

		resetBoard();
	}, 1500);
}


// The firstCard and secondCard variables need to 
// be reset after each round.
// place the hasFlippedCard = false; and lockBoard = false. 

function resetBoard() {
	hasFlippedCard = false;
	lockBoard = false;
	firstCard = null;
	secondCard = null;
}


// There is 12 cards in the game, it will iterate through them, generate a random number between 0 and 11 and assign it to the flex-item order property.
// to invoke the shuffle function, by  the Immediately Invoked Function Expression (IIFE), which means it will execute itself right after its declaration

(function shuffle() {
	cards.forEach(card => {
		let randomPos = Math.floor(Math.random() * 12);
		card.style.order = randomPos;
	});
})();


// This function change the theme to Dark mode when is called 
function myFunction() {
	let element = document.body;
	element.classList.toggle("dark-mode");
}

// This function play the music when the button is clickedPlaying music function

function Play() {	
	if (imperialMarch.paused) {
		imperialMarch.play();
		iconMusic.innerHTML = "Music Off";

	} else {
		imperialMarch.pause();
		iconMusic.innerHTML = "Music On";
	}
}

// This function start the timer and progress bar in combination. 


function start() {	
	lockBoard = false;
	add = setInterval(function () {
		i--;
		if (i > 0) {
			$('.progress-bar').css('width', i + '%');
			input.value++;


		} else {
			swal("GAME OVER!", "You run out of time!", "error", {
				button: false,
			});
			setInterval(function () {
				location.reload();
			}, 7000);
			clearInterval(add);
		}
	}, 1000);
}


// Function that lock the cards when the game is paused and stop the time

function pauseGame() {
	clearInterval(add);
	lockBoard = true;
}

function uniqueButton() {
	let unique = document.getElementById("unique");
	if (unique.innerHTML === "Pause Time") {
		unique.innerHTML = "Start Time";
		pauseGame();
	} else {
		unique.innerHTML = "Pause Time";
		start();
	}
}

function reStart() {
    cards.forEach(card => card.addEventListener('click', flipCard));

	start();
	$("#reStart").click(function () {
		location.reload();
	});
	let stopButton = document.getElementById("reStart");
	if (stopButton.innerHTML === "Finish Game") {
		stopButton.innerHTML = "Start Game";

	} else {
		stopButton.innerHTML = "Finish Game";
	}
}