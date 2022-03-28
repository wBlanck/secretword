import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { checkMatchingLetters } from "./context/AppActions";
import AppContext from "./context/AppContext";

const Input = ({ secretWord }) => {
  const { dispatch } = useContext(AppContext);

  const [currentGuess, setCurrentGuess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    //check if correct word
    if (currentGuess === secretWord) {
      dispatch({ type: "WINNER", payload: true });
    }

    dispatch({
      type: "ADD_GUESS",
      payload: {
        guessedWord: currentGuess,
        letterMatchCount: checkMatchingLetters(secretWord, currentGuess),
      },
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
