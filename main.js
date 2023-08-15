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

var movies = ["Saw", "Insidious", "Get Out", "Nope", "Candyman", "Zodiac", "Scream", "Omen", "Smile", "Us"];
var filmLetter = ["S", "A", "W", "I", "N", "D", "O", "U", "G", "E", "T", "C", "Y", "M", "Z", "R", "L"];

function submitButton() {
    var wordPlay = inputWord.value;
    if (wordPlay === movies[0]) {
        l35.innerHTML = filmLetter[0];
        l40.innerHTML = filmLetter[1];
        l42.innerHTML = filmLetter[2];
    }
}
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