// const wordCubes = document.querySelectorAll(".wordCube");
// for (var i = 0; i < wordCubes.length; i=+99) {
// //     console.log(wordCubes[i]);
// // }
// const wordCube = document.createElement("div");
// // var object = Document.createObject("cube");
// wordCube.appendChild(".wordCube")

var inputs = document.querySelectorAll("input.letter");

for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("input", function() {
    var allValues = "";
    for (var j = 1; j <= 11; j++) {
      allValues += document.getElementById("" + j).getElementsByTagName("input")[0].value;
    }
    if (allValues === "Insidious") {
      for (var k = 1; k <= 11; k++) {
        document.getElementById("" + k).getElementsByTagName("input")[0].style.color = "black";
      }
    } else {
      for (var k = 1; k <= 11; k++) {
        document.getElementById("" + k).getElementsByTagName("input")[0].style.color = "red";
      }
    }
  });
}