// Grab reference to my DOM Elements
var $newGameButton = document.getElementById('new-game-button');
var $random = document.getElementById('random');
var $yourScore = document.getElementById('yourScore');
var $status = document.getElementById('status');
var $wins = document.getElementById('wins');
var $losses = document.getElementById('losses');

$(document).ready(function () {

  // Create variables for game
  var randomNumber = "";

  // Generate a new random number between 19 and 120.
  var randomN = Math.floor(Math.random() * 121) + 18;

  // Assign random number to string
  $random.textContent = randomN;
  console.log($random);

  // Append randomNumber to window
  //$("#random").html(randomNumber);
 // console.log(randomNumber);

})