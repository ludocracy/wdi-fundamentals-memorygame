var cards = [
	{
		rank: "queen",
		suit: "hearts",
		img: "images/queen-of-hearts.png"
	}, 
	{
		rank: "queen",
		suit: "diamonds",
		img: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		img: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		img: "images/king-of-diamonds.png"
	}
];
var cardsInPlay = [];

var checkForMatch = function() {
	if(cardsInPlay[0].rank === cardsInPlay[1].rank) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again!");
	}
}

var flipCard = function(cardId) {
	cardsInPlay.push(cards[cardId]);
	console.log("User flipped " + cardsInPlay[0].rank);
	console.log(cardsInPlay[0].img);
	console.log(cardsInPlay[0].suit);
	

	if(cardsInPlay.length === 2) {
		checkForMatch();
	}	
}

flipCard(0);
flipCard(2);