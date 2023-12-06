// function to generate random number

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





// script for contact page to disable input if not selected

function changeInput() {
  var otherPetCheckbox = document.getElementById("otherPet");
  var otherPetTextInput = document.getElementById("otherPetText");

  if (otherPetCheckbox.checked) {
      otherPetTextInput.removeAttribute("disabled");
  } else {
      otherPetTextInput.setAttribute("disabled", "diabled");
      otherPetTextInput.value = ""; // Clear the text when unchecked
  }
}

// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scroll events
function revealOnScroll() {
  const cards = document.querySelectorAll('.card');

  cards.forEach((card) => {
    if (isInViewport(card)) {
      card.style.opacity = 1;
      card.style.transform = 'translateX(0)';
    }
  });
}

// Attach the revealOnScroll function to the scroll event
document.addEventListener('scroll', revealOnScroll);

// Initial check in case some cards are already in the viewport when the page loads
window.addEventListener('load', revealOnScroll);
