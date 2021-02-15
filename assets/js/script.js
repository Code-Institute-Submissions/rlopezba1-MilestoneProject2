// To flip the card when clicked, a class flip will be added to the element.
// all memory - card elements with document.querySelectorAll, 

const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;


function flipCard() {

//  declaring a lockBoard variable: When the player clicks the second card, 
//  lockBoard will be set to true and the condition if (lockBoard) return;
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
    // do cards match?
    let isMatch = firstCard.dataset.starwars === secondCard.dataset.starwars;

    isMatch ? disableCards() : unFlipCards();

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


// The firstCard and secondCard variables need to be reset after each round.
// place the hasFlippedCard = false; and lockBoard = false. The es6 destructuring assignment [var1, var2] = ['value1', 'value2']

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}


// There is 12 cards in the game, it will iterate through them, generate a random number between 0 and 11 and assign it to the flex-item order property.
// to invoke the shuffle function, by  the Immediately Invoked Function Expression (IIFE), which means it will execute itself right after its declaration

(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    })
})();


cards.forEach(card => card.addEventListener('click', flipCard));

// Playing music function

        var myMusic = document.getElementById("music");
        function play() {
            myMusic.play();
        }

        function pause() {
            myMusic.pause();
        }

        //Progress Bar 

        var i = 100;

        var counterBack = setInterval(function () {
            i--;
            if (i > 0) {
                $('.progress-bar').css('width', i + '%');
            } else {
                alert("GAME OVER YOUNG JEDI");
                document.location.reload();
                clearInterval(counterBack);
            }

        }, 1000);

        //Dark Theme
        function myFunction() {
        var element = document.body;
        element.classList.toggle("dark-mode");
        }