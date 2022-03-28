import PropTypes from "prop-types";
import { useContext, useState } from "react";
import AppContext from "./context/AppContext";

const Input = ({ secretWord }) => {
  const { dispatch } = useContext(AppContext);

  const [currentGuess, setCurrentGuess] = useState("");

  // ["b","e","e","r"]
  // ["w","e","l","l"]

  const checkLettersMatched = () => {
    let secretW = [...secretWord];
    let correctLetters = [];

    currentGuess.split("").map((letter) => {
      console.log("current Letter: ", letter);
      secretW.filter((secretLetter) => {
        if (letter === secretLetter) {
          console.log("secretW at start of loop: ", secretW);
          const indexOf = secretW.indexOf(letter);
          console.log(secretW.indexOf(letter));

          console.log("after splice: ", secretW);
          correctLetters.push(letter);
        }
      });
    });
    console.log("matched: ", correctLetters);
    return correctLetters.length;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //check if correct word
    if (currentGuess === secretWord) {
      dispatch({ type: "WINNER", payload: true });
    }
    //check how many letters are correct
    console.log("length: ", checkLettersMatched());

    dispatch({
      type: "ADD_GUESS",
      payload: { guessedWord: "file", letterMatchCount: 2 },
    });

    setCurrentGuess("");
  };

  return (
    <div data-test="component-input">
      <form className="flex flex-col justify-around w-full gap-2">
        <input
          data-test="input-box"
          placeholder="Enter Guess..."
          value={currentGuess}
          onChange={(e) => setCurrentGuess(e.target.value)}
          type="text"
          className="px-2 py-1 font-semibold rounded-md bg-coloredGlass font-text placeholder:text-gray-200"
        />
        <button
          data-test="guess-button"
          className="bg-[#FC354C] rounded-md  font-text py-1 px-2 font-bold tracking-wide self-center"
          onClick={handleSubmit}>
          Guess
        </button>
      </form>
    </div>
  );
};

Input.propTypes = { secretWord: PropTypes.string.isRequired };

export default Input;
