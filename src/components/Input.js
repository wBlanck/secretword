import PropTypes from "prop-types";
import { useState } from "react";

const Input = ({ secretWord }) => {
  const [currentGuess, setCurrentGuess] = useState("");

  /*   const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentGuess("");
    console.log(currentGuess);
  }; */

  return (
    <div data-test="component-input">
      <form className="flex flex-col justify-around w-full gap-2">
        <input
          data-test="input-box"
          placeholder="Enter Guess..."
          value={currentGuess}
          onChange={(e) => setCurrentGuess(e.target.value)}
          type="text"
          className="font-semibold bg-[#03FFFB] rounded-md font-text py-1 px-2 placeholder:text-gray-200"
        />
        <button
          data-test="guess-button"
          className="bg-[#FC354C] rounded-md  font-text py-1 px-2 font-bold tracking-wide self-center"
          onClick={() => {
            setCurrentGuess("");
          }}>
          Guess
        </button>
      </form>
    </div>
  );
};

Input.propTypes = { secretWord: PropTypes.string.isRequired };

export default Input;
