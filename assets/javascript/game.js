
// var canvas = document.getElementById('myCanvas');
// var ctx = canvas.getContext('2d');



// the Function to derement remaining guesses
var startingNumber = 8;
var startingWins = 0;
var startingLosses = 0;
var emptyDiv;

var runDecrement = function(){
	startingNumber--;
	var guessTarget = document.getElementById("guessesCounter");
	guessTarget.innerHTML = startingNumber;
}

var runWins = function(){
	startingWins++;
	var postWins = document.getElementById("wins");
	postWins.innerHTML = startingWins;
	document.getElementById("guessesCounter").innerHTML = 8;
	document.getElementById("guessingBox").innerHTML = "";
	wrongLetter = "Wrong: ";
	startingNumber = 8;
	setTimeout(function() {alert("YOU WON! WOW!");}, 1000);
	setTimeout(function() {beginGame();}, 2000);
	}


var runLosses = function(){
	startingLosses++;
	var postLosses = document.getElementById("losses");
	postLosses.innerHTML = startingLosses;
	var resetWrong = function() {
		if (startingNumber === 0){
			startingNumber = 8;
			var guessTarget = document.getElementById("guessesCounter");
			guessTarget.innerHTML = startingNumber;
		}
	}
	document.getElementById("guessingBox").innerHTML = "";
	wrongLetter = "Wrong: ";
	resetWrong();
	alert("You lost. Yikes. You must be ashamed.");
	beginGame();
}

// the function to reveal guessed letters 
var wrongLetter = "Wrong: ";
var letterReveal = function(){
	var showLetters = document.getElementById("guessingBox");
	showLetters.innerHTML = wrongLetter;
}
// RECORD LOSSES
var checkEndGame = function(){
	if (startingNumber === 0) {
		runLosses();
	}
}

// Event to trigger the game-- event at the bottom of the screen
var beginGame = function(){

	// Arrays
	var nflCities = ["atlanta", "baltimore", "boston", "buffalo", 
					"chicago", "cincinatti", "cleveland", "dallas", 
					"denver", "detroit", "indianapolis", "jacksonville", 
					"kansascity", "miami", "greenbay", "minneapolis", 
					"neworleans", "newyork", "losangeles", "philadelphia", 
					"phoenix", "pittsburgh", "sanfrancisco", "seattle", 
					"tampa", "washington", "houston"];
	var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
					"k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
					"u", "v", "w", "x", "y", "z"];
	var cityToArray = [];

	// Choose a random word from the array and assigns it to variable
	var chosenCity = nflCities[Math.floor(Math.random() * nflCities.length)]


	// Separate letters and place into an array- Run it.
	var splitTheCity = function(){
		cityToArray = chosenCity.split('');
		return cityToArray;
	}
	splitTheCity()

	// Position UNDERSCORE Placeholder in HTML
	var placeHolder = [];
  	for (var i = 0; i < cityToArray.length; i++) {
            placeHolder.push("_");
        }
	document.getElementById("blanksBox").innerHTML = placeHolder.join(" ");


	// Compare new array against alphabet 
	// remove matching letters from alphabet
	alphabet = alphabet.filter(function(val) {
	  return cityToArray.indexOf(val) == -1;
	});

	// accept user input from keyboard
	// each match removes letter from remaining alphabet array or city array


	document.onkeyup = function(event) {
		var keyPress = event.key;
		console.log(keyPress);
		// INCORRECT GUESSES
		for (var i = 0; i < alphabet.length; i++) {
			if (alphabet[i] === keyPress) {
				alphabet.splice(i, 1);
				wrongLetter += keyPress + ", ";
				runDecrement();
				letterReveal();
				checkEndGame();
			}
			// console.log(alphabet);
		}
		// CORRECT GUESSES - FILL IN BLANKS
		for (var i = cityToArray.length -1; i >= 0; i--) {			
			if (cityToArray[i] === keyPress) {
				placeHolder[i] = keyPress;
				document.getElementById("blanksBox").innerHTML = placeHolder.join(" ");
				if (cityToArray.join() === placeHolder.join()){
					runWins();
				}

				}
			}
		}



	}


	// console.log(cityToArray)


document.getElementById("startGame").addEventListener("click", beginGame);

// splitTheCity()

