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
var score = 0;

var checkForMatch = function() {
	if(cardsInPlay[0].rank === cardsInPlay[1].rank) {
		alert("You found a match!");
		score++;
		document.querySelector('.score').textContent = score;
	} else {
		alert("Sorry, try again!");
	}
}

var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId]);
	
	this.setAttribute('src', cards[cardId].img);

	if(cardsInPlay.length === 2) {
		checkForMatch();
	}	
}

var createBoard = function() {
	var boardDivElement = document.getElementById('game-board');
	cardsInPlay = [];
	while (boardDivElement.hasChildNodes()) {
	    boardDivElement.removeChild(boardDivElement.lastChild);
	}
	for(var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		boardDivElement.appendChild(cardElement);
	}
}

document.querySelector('.reset').addEventListener('click', createBoard);

createBoard();