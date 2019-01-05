let cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}];

let cardsInPlay = [];

let points = 0;

let shuffle = function (array) {
  var currentIndex = array.length;
  var temporaryValue;
  var randomIndex;

 while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

let resetGame = function () {
	for (let i = 0; i < cards.length; i++) {
		document.getElementsByTagName('img')[i].setAttribute('src', 'images/back.png');
		shuffle(cards);
	}
	cardsInPlay = [];
}

let refreshButton = document.querySelector('.refresh');
	refreshButton.addEventListener('click', resetGame);

let createBoard = function () {
	for (let i = 0; i < cards.length; i ++) {
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

let checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	  points += 1;
	  let scoreUpdate = document.getElementById('lblScore');
		scoreUpdate.innerHTML = points;	
	  alert("You found a match!");
}    else {
	  alert("Sorry, try again.");
	}
};

let flipCard = function () {
	let cardId = this.getAttribute('data-id');
	console.log("User flipped a " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
	checkForMatch();
}};

createBoard();

