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
  var counter = 0;

  // Generate a new random number between 19 and 120.
  var randomN = Math.floor(Math.random() * 121) + 18;

  // Here we created an on-click event that responds to button clicks of the crystal image.
  $(".img-fluid").on("click", function() {

    // Clicking the button triggers an alert message.
    alert("You clicked a crystal!");

  });

  // Assign random number to string
  $random.textContent = randomN;
  console.log($random);

  

})