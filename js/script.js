function generateRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

const secretNumber = generateRandomNumber();

function checkGuess() {
  // Get the user's guess from the input field
  const userGuess = parseInt(document.getElementById('guessInput').value);

  // Check if the guess is correct
  if (userGuess === secretNumber) {
    document.getElementById('message').innerHTML = 'Congratulations! You guessed right! The number was ' + secretNumber + '!';
  } else if (userGuess < 0 || userGuess > 10) {
    document.getElementById('message').innerHTML = 'Please enter a number between 1 and 10.';
  } else {
    document.getElementById('message').innerHTML = 'Oops! Try again.';

  }
}

// button animation script when clicked

document.addEventListener('DOMContentLoaded', function () {
  // Get the button element
  var button = document.getElementById('animatedButton');

  // Add a click event listener to the button
  button.addEventListener('click', function () {
    // Add the 'clicked' class to the button
    button.classList.add('clicked');

    // Remove the 'clicked' class after a short delay (adjust the delay as needed)
    setTimeout(function () {
      button.classList.remove('clicked');
    }, 100);
  });
});

// Get the current page path
// Get the current page path
var currentPath = document.location.pathname;

// Get the navigation links
var galleryLink = document.getElementById('gallery');
var aboutLink = document.getElementById('about');
var contactLink = document.getElementById('contact');

// Check if the current path ends with the page name and add the "hover" class accordingly
if (currentPath.endsWith('/gallery.html')) {
  galleryLink.classList.add('hover');
} else if (currentPath.endsWith('/about.html')) {
  aboutLink.classList.add('hover');
} else if (currentPath.endsWith('/contact.html')) {
  contactLink.classList.add('hover');
}

// script for image overlay

function toggleActiveClass(clickedElement) {
  // Toggle the .active class on the clicked element
  clickedElement.classList.toggle('active');
}


