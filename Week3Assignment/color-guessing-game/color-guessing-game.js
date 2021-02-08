const COLORS_ARRAY = ['cyan', 'blue', 'magenta', 'orange', 'gold', 'yellow', 'red', 'gray', 'white', 'green'];

let totalIncorrectGuesses = 0;

    function runGame() {
      let numTries = 0;
      let guess = '';
      let correct = false;

      const targetIndex = Math.floor(Math.random() * COLORS_ARRAY.length);
      const target = COLORS_ARRAY[targetIndex];
      console.log(target);

      do {
        guess = prompt(`I am thinking of one of these colors:\n\n${COLORS_ARRAY.sort().join(", ")}\n\n What color am I thinking of?\n`);

        if (guess === null) {
          alert('You have chosen to exit the game. Thank you for playing!');
          return;
        }
        correct = checkGuess(guess, target);
        numTries++;

      } while (!correct);

      alert(`Congratulations! You have guessed the color!\n\nIt took you ${numTries} guesses in this game with ${totalIncorrectGuesses} total incorrect guesse(s).\n\nHit OK to see the color in the background.`)
      document.body.style.background = guess;
    }

    function checkGuess(guess, target) {
      let correct = false;
      guess = guess.toLowerCase();

      if (COLORS_ARRAY.indexOf(guess) === -1) {
        alert(`Sorry, I don't recognize your color.\n\nPlease try again.`);
        totalIncorrectGuesses++;
      } else if (COLORS_ARRAY.indexOf(guess) > COLORS_ARRAY.indexOf(target)) {
        alert(`Sorry, your guess is incorrect.\n\nHint: your color is alphabetically higher than mine.\n\nPlease try again.`);
        totalIncorrectGuesses++;
      } else if (COLORS_ARRAY.indexOf(guess) < COLORS_ARRAY.indexOf(target)) {
        alert(`Sorry, your guess is incorrect.\n\nHint: your color is alphabetically lower than mine.\n\nPlease try again.`);
        totalIncorrectGuesses++;
      } else {
        correct = true;
      }
      return correct;
    }


     
