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