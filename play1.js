/*
	Hangman Pseudocode for play.js
	Checkpoint 1

	Variable declaration, if-statement, for-loop, arrays
*/

/*
	Hangman has a database of words to be guessed.
	Let's call that a dictionary.
	2-D array of multiple 1-D arrays inside
*/
const dictionary = [[""]];		// TODO: fill in words

/*
	Let's randomly choose a word the user must guess to win the game.
	To make a random choice, we can program this with certain JS libraries (Math.random(), etc.)
*/
let random = // TODO: choose a random index from dictionary
let chosen = // TODO: the chosen array word from 2-D array (dictionary)
let spaces = new Array(chosen.length);	// an array to hold underscored spaces
let count = 0;					// count # of wrong guesses

/*
	Hangman has underscored blanks (spaces) that need to be filled in.
	Let's recreate those blanks with underscore characters ('_').
*/
for() {
	// TODO: fill in spaces array with "_ "
}
console.log(spaces);		// shows as array

/*
	Show underscored spaces on HTML webpage
*/
function printspaces(){
	for (){				// TODO: loop through spaces
		let guess_space // TODO: getElementById from "guess_space"
		let text_node // TODO: create a text node of each letter to add into HTML
		guess_space.appendChild(text_node);		// append text node to element in HTML
	}
}

// init function, like main function in C++
function init(){
	// TODO: fill in with print spaces
}

// TODO: when window loads, run function init()
