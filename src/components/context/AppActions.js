export const checkMatchingLetters = (secretWord, guess) => {
  let secretArr = [...secretWord];
  let guessArr = [];
  let lettersMatched = 0;

  // remove duplicate letters from guessedWord
  guess
    .split("")
    .filter((letter) => !guessArr.includes(letter) && guessArr.push(letter));

  //take first letter in guessArr
  guessArr.map((guessedLetter) => {
    //check guessedLetter 1 by 1 through secretArr
    secretArr.map((secretLetter) => {
      if (guessedLetter === secretLetter) {
        // if matched add + 1 to lettersMatched
        lettersMatched++;
      }
    });
  });

  //return lettersMatched
  return lettersMatched;
};
