function generateRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

const secretNumber = generateRandomNumber();

function checkGuess() {
  // get user guess
  const userGuess = parseInt(document.getElementById('guessInput').value);

  // if statement to check guess
  if (userGuess === secretNumber) {
    document.getElementById('message').innerHTML = 'Congratulations! You guessed right! The number was ' + secretNumber + '!';
  } else if (userGuess < 0 || userGuess > 10) {
    document.getElementById('message').innerHTML = 'Please enter a number between 1 and 10.';
  } else {
    document.getElementById('message').innerHTML = 'Oops! Try again.';

  }
}

// button animation script when clicked for index.html js game

document.addEventListener('DOMContentLoaded', function () {
  
  var button = document.getElementById('animatedButton');

  button.addEventListener('click', function () {
    button.classList.add('clicked');

    setTimeout(function () {
      button.classList.remove('clicked');
    }, 100);
  });
});

// get the current path
var currentPath = document.location.pathname;

// get the nav links
var galleryLink = document.getElementById('gallery');
var aboutLink = document.getElementById('about');
var contactLink = document.getElementById('contact');

// if statement, check if current path ends with any of the nav items, then add hover class to it
if (currentPath.endsWith('/gallery.html')) {
  galleryLink.classList.add('hover');
} else if (currentPath.endsWith('/about.html')) {
  aboutLink.classList.add('hover');
} else if (currentPath.endsWith('/contact.html')) {
  contactLink.classList.add('hover');
}

// script for image overlay based on toggle

function toggleActiveClass(clickedElement) {
  clickedElement.classList.toggle('active');
}


