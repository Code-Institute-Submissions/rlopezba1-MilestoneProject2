let cards = new Array();

cards[0] = '<img src="img/deathStar.jpg"> ';
cards[1] = '<img src="img/deathStar.jpg"> ';
cards[2] = '<img src="img/spaceship.jpg">';
cards[3] = '<img src="img/spaceship.jpg">';
cards[4] = '<img src="img/millenium-falcon.jpg">';
cards[5] = '<img src="img/millenium-falcon.jpg">';
cards[6] = '<img src="img/fighter.jpg">'
cards[7] = '<img src="img/fighter.jpg">'
cards[8] = '<img src="img/stormtrooper.jpg">'
cards[9] = '<img src="img/stormtrooper.jpg">'
cards[10] = '<img src="img/camel.jpg">'
cards[11] = '<img src="img/camel.jpg">'
cards[12] = '<img src="img/darthVader.jpg">'
cards[13] = '<img src="img/darthVader.jpg">'
cards[14] = '<img src="img/swords.jpg">'
cards[15] = '<img src="img/swords.jpg">'

// https://javascript.info/array-methods

shuffle(cards);
console.log(cards);

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

document.getElementById("demo").innerHTML = cards;
