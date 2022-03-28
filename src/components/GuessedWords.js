import PropTypes from "prop-types";

const GuessedWords = ({ guessedWords }) => {
  let contents;
  if (guessedWords.length === 0) {
    contents = (
      <span data-test="guess-instructions">Try to guess the secret word!</span>
    );
  } else {
    const guessedWordsRows = guessedWords.map((word, i) => (
      <tr
        data-test="guessed-word"
        key={i}
        className="flex justify-between tracking-wider">
        <td>{word.guessedWord}</td>
        <td>{word.letterMatchCount}</td>
      </tr>
    ));
    contents = (
      <div
        data-test="guessed-words"
        className="p-2 rounded-md bg-glass drop-shadow-xl">
        <table className="block w-full">
          <thead></thead>
          <tbody className="flex flex-col gap-2">{guessedWordsRows}</tbody>
        </table>
      </div>
    );
  }

  return <div data-test="component-guessed-words">{contents}</div>;
};

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default GuessedWords;
