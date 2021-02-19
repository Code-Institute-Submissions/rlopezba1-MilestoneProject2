


// To flip the card when clicked, a class flip will be added to the element.
// all memory - card elements with document.querySelectorAll, 

const cards = document.querySelectorAll('.memory-card');

var winAudio = new Audio('assets/audio/02 Main Title_Rebel Blockade Runner.mp3');
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let matches = 0


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

// https://sweetalert.js.org/guides/

function gameFinished() {
    
    winAudio.play();
    clearInterval(add);
     swal({
            title: "You Win!!",
            text: "Do you want to try again? I am sure you will be faster!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
            })
            .then((willPlay) => {
            if (willPlay) {
                swal("Good! Go ahead young Jedi!", {
                icon: "success",
                });
                setInterval(function(){ location.reload(); }, 3000);
                
            } else {
                swal("Come back another day then !! Good Bye!", {
                button: false,    
                });
                setInterval(function(){ close(); }, 3000);
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

       
        //Dark Theme
        function myFunction() {
        var element = document.body;
        element.classList.toggle("dark-mode");
        }

        // Playing music function

      function Play()
        {
            var imperialMarch = document.getElementById("music");
            if(imperialMarch.paused)
            {
                imperialMarch.play();
               
            }
            else
            {
               imperialMarch.pause();
              
            }
        }
                      

       
        // timer and progress bar combination
        var i = 100;

        var input = document.getElementById("input"),
            add;

            function start() {
            add = setInterval(function() {
                 i--;
            if (i > 0) {
                $('.progress-bar').css('width', i + '%');
                input.value++;
            } else {
                swal("GAME OVER!", "You run out of time! the game will start again automatically", "error", {
                button: false,    
                });
                setInterval(function(){ location.reload(); }, 7000);
                clearInterval(add);
            }                
            }, 1000);
            }

            start();             

        