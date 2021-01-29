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
//console.log(cards);

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

//document.getElementById("demo").innerHTML = cards;

var element0 = document.getElementById("1");
element0.innerHTML = cards[0];

var element1 = document.getElementById("2");
element1.innerHTML = cards[1];

var element2 = document.getElementById("3");
element2.innerHTML = cards[2];

var element3 = document.getElementById("4");
element3.innerHTML = cards[3];

var element4 = document.getElementById("5");
element4.innerHTML = cards[4];

var element5 = document.getElementById("6");
element5.innerHTML = cards[5];

var element6 = document.getElementById("7");
element6.innerHTML = cards[6];

var element7 = document.getElementById("8");
element7.innerHTML = cards[7];

var element8 = document.getElementById("9");
element8.innerHTML = cards[8];

var element9 = document.getElementById("10");
element9.innerHTML = cards[9];

var element10 = document.getElementById("11");
element10.innerHTML = cards[10];

var element11 = document.getElementById("12");
element11.innerHTML = cards[11];

var element12 = document.getElementById("13");
element12.innerHTML = cards[12];

var element13 = document.getElementById("14");
element13.innerHTML = cards[13];

var element14 = document.getElementById("15");
element14.innerHTML = cards[14];

var element15 = document.getElementById("16");
element15.innerHTML = cards[15];
