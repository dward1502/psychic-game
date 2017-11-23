//alphabet computer can pick from
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",]
var guessedLetters = [];
//var letters = ["a","b","c"]
//global variables defined
var wins = 0;
var losses = 0;
var guessLeft = 9;
//userGuess is what the user picks when pressing key
var userGuess = null;
// an array that will hold user's guesses for each round
var guessSoFar = [];
//computer picks a letter and stores it in computerLetter to be guessed
var computerLetter = letters[Math.floor(Math.random()* letters.length)];
//sends to console to check that data is being properly sent in the variables
console.log("Wins: " + wins + "Losses : " + losses + " GuessesLeft: " + guessLeft + "GuessesSoFar: " + guessSoFar + "Comp letter " + computerLetter);

//listens for events
document.onkeyup = function(event){

	//user presses key, it records it and saves to userGuess
	var userGuess = event.key;	

	//if computerLetter is same as userGuess record it as a win, then reset guessesLeft to 9 and empty guessSoFar array
	// have the computerLetter pick a new random letter
	if(userGuess == computerLetter){
		wins++;
		alert('You Win!! Correct letter is:  ' + computerLetter);
		guessLeft = 9;
		guessSoFar.length = 0;
		computerLetter = letters[Math.floor(Math.random()* letters.length)];
		console.log("Wins: " + wins + "Losses : " + losses + " GuessesLeft: " + guessLeft + "GuessesSoFar: " + guessSoFar + "Comp letter " + computerLetter);
	}

	//guessLeft equals 0 then record it as a loss and then reset guessesLeft and pick new random letter
	else if( guessLeft == 0){
		losses ++;
		console.log("You Lost!")
		guessLeft = 9;
		guessSoFar.length = 0;
		computerLetter = letters[Math.floor(Math.random()* letters.length)];
		console.log("Wins: " + wins + "Losses : " + losses + " GuessesLeft: " + guessLeft + "GuessesSoFar: " + guessSoFar + "Comp letter " + computerLetter);
	}
	else if (userGuess !== computerLetter){
		guessLeft--;		
		guessSoFar.push(userGuess);

	}

	//display progress to HTML

	var html = 		"<p><h1>The Psychic Game</h1></p>" + "<p><h4>Guess what letter I\'m thinking of</h4></p>" + 
					"<p><h4>Wins: " + wins + "</h4></p>" + "<p><h4>Losses: " + losses + 
					"</h4></p>" + "<p><h4>Guesses Left: " + guessLeft + "</h4></p>" +
					 "<p><h4>Your guesses so far: " + guessSoFar + "</h4></p>";

	//place html into game ID
	document.querySelector('#game').innerHTML = html;

}