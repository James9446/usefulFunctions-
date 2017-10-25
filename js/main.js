a// Random Number Genorator
function getRandomNumber(upper) {
	if (isNaN(upper)) {
		console.log("The argument \"" + upper + "\" that you entered into the getRandomNumber() function is not a number.")
	} else {
		var randomNumber = Math.floor(Math.random() * upper) + 1;
		return randomNumber;
	}
}


// Random Ranged Number Generator with upper AND lower parameters
// The numbers given as arguments are included as possible outcomes for the function
function getRandomRangedNumber(lower, upper) {
	if (isNaN(lower) || isNaN(upper)) {
		console.log("One or more of your arguments is not a number")
	} else if (lower >= upper) {
		console.log("For getRandomRangedNumber() function to work please enter a number for the first argument that is lower than the second argument.");
	} else {
		var randomNumber = Math.floor(Math.random() * ((upper + 1) - lower)) + (lower - 1) + 1;
		return randomNumber;
	}
}

// Random color generator
function randomColor() {
	var red = Math.floor(Math.random() * 256 );
	var green = Math.floor(Math.random() * 256 );
	var blue = Math.floor(Math.random() * 256 );
	var rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
	return rgbColor;
}


// Rare item generator
function getItemScarcity () {
	var itemScarcity;
	if (getRandomNumber(1000) > 950) {
		return itemScarcity = "Legendary item";
	} else if (getRandomNumber(1000) > 850){
		return itemScarcity = "Epic item";
	} else if (getRandomNumber(1000) > 700){
		return itemScarcity = "Rare item";
	} else if (getRandomNumber(1000) > 550){
		return itemScarcity = "Uncommon item";
	} else {
		return itemScarcity = "Common item";
	}
}

// Thisfunction takes a list of non-negative integers and strings 
// and returns a new list with the strings filtered out.
function filter_list(l) {
  return l.filter(function(v) {return typeof v == 'number'})
}

// Babylonian Square Root Method
// The longer you set the for loop the run the greater the accuracy 

function computeSquareRoot(num) {
  var guess = num / 2;
  var num2;
  var average;
  for (i = 0; i < 10; i++) {
  	num2 = num / guess;
  	average = (num2 + guess) / 2;
  	num2 = guess;
  	guess = average;
  	// console.log("num2 " + num2);
  	// console.log("guess " + guess);
  	// console.log("average " + average);
  	// console.log("----end of loop")
  }
  return guess.toFixed(8);
}

console.log(computeSquareRoot(200));

// Print function - better than document.write ;)
// index.html needs a div with id="output"
// You need to set message equal to a string with html opening and closing tags. It can have other variables of course and often uses += to keep adding stuff
// This process is from treehouse
// An example can be found in codify/week11/projects/week11-car-object-challenge

function print(message) {
	var outputDiv = document.getElementById('output')
	outputDiv.innerHTML = message;
}

