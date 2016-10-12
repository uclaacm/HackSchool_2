/*
	Checkpoint 2
*/

const dictionary = [
["T", "R", "E", "E", "H", "O", "U", "S", "E"],
  ["J","A","V","A","S","C","R","I","P","T"],
  ["W","E","B","D","E","S","I","G","N"],
  ["E","D","U","C","A","T","I","O","N"],
  ["C","H","O","C","O","L","A","T","E"],
  ["G","E","R","M","A","N","Y"],
  ["J", "E", "N", "N", "I", "F", "E", "R"]
]

// Math.random() gives you any decimal from 0 (inclusive) to 1 (exclusive)
// 	so take the full length of dictionary array to get every possible number
let random = Math.floor((Math.random()*(dictionary.length)));
console.log(random);

let chosen = dictionary[random]; // the array word to guess will be chosen from the 2d array above
let spaces = new Array(chosen.length);	// an array to hold underscored spaces
let count = 0;	// count # of wrong guesses

// every letter in the word is symbolized by an underscore in the guessfield
for (let i = 0; i < spaces.length; i++){
	spaces[i] = "_ ";
}

// prints the guessfield
function printspaces(){
	for (let i = 0; i < spaces.length; i++){
		let guess_space = document.getElementById("guess_space");	// must have an element node
		let text_node = document.createTextNode(spaces[i]);		// to create a text node to add into HTML
		guess_space.appendChild(text_node);			// append text node to element in HTML
	}
}


/*
	check letter if guessed correctly
*/
let checkletter = function() {
	let f = document.guess_form;		// form from HTML
	let b = f.elements["input_letter"];	// the "input_letter" element from the form
	let letter = b.value; 				// the letter provided by the user into "input_letter" element
	letter = letter.toUpperCase();		// turn letter to uppercase
	// TODO: create variable to check whether letter has been found

	// here, we check if the user's guessed letter is a letter in the word (chosen)
	// TODO: for loop through chosen
	for () {
		// if a character matches with the guessed letter
		// replace all matching blanks with the letter
	}

	for (let i = 0; i < chosen.length; i++){
		if(chosen[i] === letter){
			// TODO: found variable
			spaces[i] = letter + " ";	// TODO: replace spaces[i] with the letter found
		}
	}
	// TODO: empty out the input form

	let guess_space // TODO: delete the guessfield and replaces it with the new one
	// TODO: empty out element of guess_space
	// TODO: print spaces

	// TODO: What do we do when we guess a letter wrong?
	if () {	
		let wrong_letters // TODO: get wrong_letters id from HTML
		let text_node // TODO: create a text node consisting of space + letter to print on wrong letters
		// TODO: append the letter text into HTML of wrong_letters
		// TODO: increment count of wrong attempts

		let hangman // TODO: get hangmang element from HTML
		let image_url = "http://www.writteninpencil.de/Projekte/Hangman/hangman";
		// TODO: change the image src of hangman element in HTML
	}
}

function init(){
	printspaces();
}
// when window loads, run function init()
window.onload = init;


