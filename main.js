var movies = ["Saw", "Insidious", "Get Out", "Nope", "Candyman", "Zodiac", "Scream", "Omen", "Smile", "Us"];
var checkAns = movies*movies.length;
//Loads the Crossword
function initializeScreen(){
	var wordFrame = document.getElementById("letter");
	guessMovie = prepareletterArray();
	for ( var i = 0; i < guessMovie.length ; i++ ) {
		var row = wordFrame.insertRow(-1);
		var rowData = guessMovie[i];
		for(var j = 0 ; j < rowData.length ; j++){
			var cell = row.insertCell(-1);
			if(rowData[j] != 0){
				var txtID = String('txt' + '_' + i + '_' + j);
				cell.innerHTML = '<input type="text" class="inputBox" maxlength="1" style="text-transform: lowercase" ' + 'id="' + txtID + '" onfocus="textInputFocus(' + "'" + txtID + "'"+ ')">';
			}else{
				cell.style.backgroundColor  = "black";
			}
		}
	}
	addHint();
}
//Adds the hint numbers
function addHint(){
	document.getElementById("txt_0_4").placeholder = "1";
	document.getElementById("txt_2_6").placeholder = "2";
	document.getElementById("txt_3_1").placeholder = "3";
	document.getElementById("txt_3_9").placeholder = "4";
	document.getElementById("txt_6_2").placeholder = "5";
	document.getElementById("txt_9_0").placeholder = "6";
}
//Stores ID of the selected cell into movies
function textInputFocus(txtID123){
	movies = txtID123;
}
//Returns Array
function prepareletterArray(){
var items = [	[0, 0, 0, 0, 0, 0, 0, 0, 'G', 0, 'C'],
				['N', 0, 0, 'I', 0, 0, 0, 0, 'E', 0, 'A'],
				['O', 'M', 'E', 'N', 0, 0, 0, 0, 'T', 0, 'N'],
				['P', 0, 0, 'S', 'M', 'I', 'L', 'E', 0, 0, 'D'],
				['E', 0, 0, 'I', 0, 0, 0, 0, 'O', 0, 'Y'],
				[0, 'Z', 'O', 'D', 'I', 'A', 'C', 0, 'U', 0, 'M'],
				[0, 0, 0, 'I', 0, 0, 0, 0, 'T', 0, 'A'],
				['S', 0, 0, 'O', 0, 0, 'U', 'S', 0, 0, 'N'],
                ['A', 0, 0, 'U', 0, 0, 0, 0, 'G', 0, 'C'],
				['W', 0, 0, 'S', 'C', 'R', 'E', 'A', 'M', 0, 0],
				
			];
return items;
}
//Clear All Button
function clearAllClicked(){
	movies = '';
	var wordFrame = document.getElementById("letter");
	wordFrame.innerHTML = '';
    initializeScreen();
}
//Check button
function checkClicked(){
	for ( var i = 0; i < guessMovie.length ; i++ ) {
		var rowData = guessMovie[i];
		for(var j = 0 ; j < rowData.length ; j++){
			if(rowData[j] != 0){
				var selectedInputTextElement = document.getElementById('txt' + '_' + i + '_' + j);
				if(selectedInputTextElement.value != guessMovie[i][j]){
					selectedInputTextElement.style.backgroundColor = 'red';
					
				}else{
					selectedInputTextElement.style.backgroundColor = 'white';
				}
			}
		}
	}
}
//Clue Button
function clueClicked(){
	if (movies != null){
		var temp1 = movies;
		var token = temp1.split("_");
		var row = token[1];
		var column = token[2];
		document.getElementById(temp1).value = guessMovie[row][column];
		//checkClicked();
	}
}
//Solve Button
function solveClicked(checkAns){
	if (movies != null){
		var temp1 = movies;
		var token = temp1.split("_");
		var row = token[1];
		var column = token[2];
		
		// Print elements on top
		for(j = row; j >= 0; j--){
			if(guessMovie[j][column] != 0){
				document.getElementById('txt' + '_' + j + '_' + column).value = guessMovie[j][column];
				}else break;
		}
		// Print elements on right
		for(i = column; i< guessMovie[row].length; i++){
			if(guessMovie[row][i] != 0){
				document.getElementById('txt' + '_' + row + '_' + i).value = guessMovie[row][i];
				}else break;
		}
		
		// Print elements below
		for(m = row; m< guessMovie.length; m++){
			if(guessMovie[m][column] != 0){
				document.getElementById('txt' + '_' + m + '_' + column).value = guessMovie[m][column];
				}else break;
		}
		// Print elements on left
		for(k = column; k >= 0; k--){
			if(guessMovie[row][k] != 0){
				document.getElementById('txt' + '_' + row + '_' + k).value = guessMovie[row][k];
				}else break;
		}
		// Done!
		
	}
}
// const wordCubes = document.querySelectorAll(".wordCube");
// for (var i = 0; i < wordCubes.length; i=+99) {
// //     console.log(wordCubes[i]);
// // }
// const wordCube = document.createElement("div");
// // var object = Document.createObject("cube");
// wordCube.appendChild(".wordCube")

// var inputs = document.querySelectorAll("input.letter");
// var allValues = "";

// for (var i = 0; i < inputs.length; i++) {
//   inputs[i].addEventListener("input", function() {
//     for (var j = 1; j <= 11; j++) {
//       allValues += document.getElementById("" + j).getElementsByTagName("input")[0].value;
//     }
//     if (allValues === "Insidious") {
//       for (var k = 1; k <= 11; k++) {
//         document.getElementById("" + k).getElementsByTagName("input")[0].style.color = "black";
//       }
//     } else {
//       for (var k = 1; k <= 11; k++) {
//         document.getElementById("" + k).getElementsByTagName("input")[0].style.color = "red";
//       }
//     }
//   });
// }

// var movies = ["Saw", "Insidious", "Get Out", "Nope", "Candyman", "Zodiac", "Scream", "Omen", "Smile", "Us"];
// var filmLetter = ["S", "A", "W", "I", "N", "D", "O", "U", "G", "E", "T", "C", "Y", "M", "Z", "R", "L"];


// //function submitButton() {
//     var wordPlay = inputWord.value;
//     if (wordPlay == movies[0]) {
//         l35.innerHTML = filmLetter[0];
//         l40.innerHTML = filmLetter[1];
//         l42.innerHTML = filmLetter[2];
//     }
// }
//for (let i=0; i < movies.length; i++) {
//     console.log(movies[i]);
// }

// // Try to generate a random index within the range of the array length
// let randomFilm = Math.random()*movies.length;

// // Assigning the randomly selected movie to chosenFilm
// chosenWord = movies[randomFilm];

// console.log(chosenFilm);

//gameplay
  // Use Math.random() to randomly select a word from the gameWords Array and THEN assign it to chosenWord
// var Movie = movies[Math.random()*movies.length];
// const guessMovie = Array.movies({ length: 100 }, (_, i) => {
//     return i + 1;
//     });
    
//     console.log(Math.random()*movies.length);

// Wait for the document to be fully loaded
// document.addEventListener("DOMContentLoaded", function() {
//     // Get references to the input elements
//     var letterInputs = document.querySelectorAll(".letter");
    
//     // Attach event listeners to each input element
//     letterInputs.forEach(function(input) {
//         input.addEventListener("input", function() {
//             // Your logic to handle input changes goes here
//             // For example, you could validate the input against the correct letter,
//             // or check if the whole word is filled correctly
//         });
//     });
    
//     // Handle the form submission to start the game
//     var playerForm = document.getElementById("playerNames");
//     playerForm.addEventListener("submit", function(event) {
//         event.preventDefault();
        
//         // Your logic to start the game with player names goes here
//         // For example, you could show the crossword puzzle and display player names
//     });
    
//     // Add any other event listeners or logic you need for your crossword puzzle
    
//     // You can define functions here to organize your code better

// });

//   //set up cubes - probably should be a function
//   function wordCubes () {


//   }

//   function setUpGame (word){
//     // write a for loop that makes a cube for every letter in chosenWord
    
//   }

//   setUpGame(chosenWord) // invoking or calling the funtion using the variable chosenWord

// //   function checkWord(userWord, otherWord){
//     // compare the values inside of the cubes to chosenWord
//     // if they are a match, game is over and the user won
//     // else the game continues
//     function checkWord(inputElement, correctLetter) {
//         var enteredText = inputElement.value.trim().toLowerCase();
        
//         if (enteredText === correctLetter.toLowerCase()) {
//             inputElement.classList.add("correct");
//             inputElement.classList.remove("incorrect");
//         } else {
//             inputElement.classList.remove("correct");
//             inputElement.classList.add("incorrect");
//         }
//     }
  

//   function gameOver(){
//     // if the user won, do one thing
//     // else do another thing
//   }
// //reset
// document.getElementById("reset").addEventListener(
//     "click", 
//     () => {
//     }
//   );