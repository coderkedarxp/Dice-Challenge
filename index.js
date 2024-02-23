var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// images/dice6.png

var randomediceImage = "images/dice" + randomNumber1 + ".png";

// below [0] means first index element among all the elements
// change src by randomimage

document.querySelectorAll("img")[0].setAttribute("src", randomediceImage);

// Do the same things for the other image

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomediceImage2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomediceImage2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 wins";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 wins";
} else {
  document.querySelector("h1").innerHTML = "This is a draw";
}
