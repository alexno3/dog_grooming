function generateRandomNumber(){
  return Math.floor(Math.random() * 10) +1;
}

const secretNumber = generateRandomNumber();

        function checkGuess() {
            // Get the user's guess from the input field
            const userGuess = parseInt(document.getElementById('guessInput').value);

            // Check if the guess is correct
            if (userGuess === secretNumber) {
                document.getElementById('message').innerHTML = 'Congratulations! You guessed right! The number was '+secretNumber+'!';
            } else {
                document.getElementById('message').innerHTML = 'Oops! Try again.';
            }
        }

// button animation script when clicked

document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    var button = document.getElementById('animatedButton');
  
    // Add a click event listener to the button
    button.addEventListener('click', function() {
      // Add the 'clicked' class to the button
      button.classList.add('clicked');
  
      // Remove the 'clicked' class after a short delay (adjust the delay as needed)
      setTimeout(function() {
        button.classList.remove('clicked');
      }, 100);
    });
  });

  // navbar page link stays hovered when pressed

  document.addEventListener('DOMContentLoaded', function() {
    // Get all the navbar links
    var navLinks = document.querySelectorAll('.nav-list a');
  
    // Add click event listeners to each link
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        // Remove the 'active' class from all links
        navLinks.forEach(function(link) {
          link.classList.remove('active');
        });
  
        // Add the 'active' class to the clicked link
        link.classList.add('active');
      });
    });
  });
  
  
  