
// var canvas = document.getElementById('myCanvas');
// var ctx = canvas.getContext('2d');

// Event to trigger the game-- event at the bottom of the screen

var beginGame = function(){
	alert("you started");


	// Arrays
	var nflCities = ["atlanta", "baltimore", "boston", "buffalo", "chicago", "cincinatti", "cleveland", "dallas", "denver", "detroit", "indianapolis", "jacksonville", "kansascity", "miami", "greenbay", "minneapolis", "neworleans", "newyork", "losangeles", "philadelphia", "phoenix", "pittsburgh", "sanfrancisco", "seattle", "tampa", "washington", "houston"];
	var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	var cityToArray = [];

	// Choose a random word from the array
	var chosenCity = nflCities[Math.floor(Math.random() * nflCities.length)]


	// Separate letters and place into an array- Run it.

	var splitTheCity = function(){
		cityToArray = chosenCity.split('');
		return cityToArray;
	}
	splitTheCity()

	// Compare splitTheCity array against alphabet and remove letters from latter
	alphabet = alphabet.filter(function(val) {
	  return cityToArray.indexOf(val) == -1;
	});

	// accept user input from keyboard for guessing
	// each match removes letter from remaining alphabet array
	document.onkeyup = function(event) {
		var keyPress = event.key;
		console.log(keyPress);
		for (var i = 0; i < alphabet.length; i++) {
			if (alphabet[i] === keyPress) {
				alphabet.splice(i, 1);
				break
				
			}
			// console.log(alphabet);
		}
		for (var i = cityToArray.length -1; i >= 0; i--) {
			if (cityToArray[i] === keyPress) {
				cityToArray.splice(i, 1);
			}
			console.log(cityToArray);
		}
	}


	// console.log(alphabet)
	console.log(cityToArray)
}

document.getElementById("startGame").addEventListener("click", beginGame);

// splitTheCity()

