let card = [
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

let checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	  alert("You found a match!");
}    else {
	  alert("Sorry, try again.");
	}
};

let flipCard = function (cardId) {
	console.log("User flipped a " + card[cardId].rank);
	cardsInPlay.push(card[cardId].rank);
	if (cardsInPlay.length === 2) {
	checkForMatch();
}};

flipCard(0);
console.log(card[0].suit);
console.log(card[0].cardImage);
flipCard(3)
console.log(card[3].suit);
console.log(card[3].cardImage);

