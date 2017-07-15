var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[0];
var cardTwo = cards[1];
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);
for(var i = 0; i < cardsInPlay.length; i++) {
	console.log("User flipped " + cardsInPlay[i])
}

if(cardsInPlay.length === 2) {
	if(cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again!");
	}
}