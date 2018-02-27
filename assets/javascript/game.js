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
  var yourScore = 0;

  // Generate a new random number between 19 and 120.
  var randomN = Math.floor(Math.random() * 121) + 18;

  

  // Here we created an on-click event that responds to button clicks of the crystal image.
  $(".img-fluid").on("click", function() {

    // Here we created code that selects a number 1 thru 12.
    // We'll set this number at the start of the "game".
    var numberOptions = Math.floor(Math.random() *13) + 0;
    //console.log(numberOptions);

    // We'll then increment the counter each time by the randomly selected number.
    counter += parseInt(numberOptions);
    console.log(counter);

    // Clicking the button triggers an alert message.
    alert("You clicked a crystal!");

    if (counter === randomN) {
      $("#status").append("You win!");
    }

    else if (counter > randomN) {
      $("#status").append("You lose!");
    }else{
      $("#yourScore").text(counter);
    }

  });

  // Assign random number to string
  $random.textContent = randomN;
  console.log($random);
  //$(.textContent = $yourScore;
  
  //console.log(#yourScore);
  

})