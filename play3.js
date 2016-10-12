/*
	Checkpoint 3
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

// checks if the the letter provided by the user matches one or more of the letters in the word
let checkLetter = function(){
	let f = document.guess_form;		// form from HTML
	let b = f.elements["input_letter"];	// the "input_letter" element from the form
	let letter = b.value; 				// the letter provided by the user into "input_letter" element
	letter = letter.toUpperCase();
	let found = false;
	// here, we check if the user's guessed letter is a letter in the word (chosen)
	for (let i = 0; i < chosen.length; i++){
		if(chosen[i] === letter){
			found = true;
			spaces[i] = letter + " ";	// replace spaces[i] with the letter found
		}
	}
	b.value = "";		// empty out text input box for next round
	
	// deletes the guessfield and replaces it with the new one
	let guess_space = document.getElementById("guess_space");
	guess_space.innerHTML=""; 
	printspaces();
	
	// if a guessed letter is not in the word, the letter will be put on the "wrong letters"-list and hangman grows
	if(!found){
		let wrong_letters = document.getElementById("wrong_letters");	// get wrong_letters id from HTML
		let text_node = document.createTextNode(" " + letter);	// create a text node consisting of space + letter
		wrong_letters.appendChild(text_node);
		count++;	// increment count of wrong letters
		let hangman = document.getElementById("hangman");
		// change the image src of hangman element in HTML
    	hangman.src = "http://www.writteninpencil.de/Projekte/Hangman/hangman" + count + ".png";
	}

	// Now let's check whether the entire word has been guessed
	let word_found = true
	// TODO: for loop through the spaces to check whether there's at least a blank still left

	if(word_found) {
		window.alert("You win!");
	}

	// TODO: when you get through six wrong tries, you lose.
	if() {
		window.alert("Uh...I guess you're dead now.");
	}
}


function init(){
	printspaces();
}
// when window loads, run function init()
window.onload = init;

