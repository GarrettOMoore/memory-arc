let card = ["queen", "queen", "king", "king"];
let cardsInPlay = [];

let checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	  alert("You found a match!");
} else {
	  alert("Sorry, try again.");
	}
};

let flipCard = function (cardId) {
	if (cardsInPlay.length === 2) {
	checkForMatch ();
}
	console.log("User flipped a " + card[cardId]);
	cardsInPlay.push(card[cardId]);
};

