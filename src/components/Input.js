import PropTypes from "prop-types";
import React from "react";

const Input = ({ secretWord }) => {
  const [currentGuess, setCurrentGuess] = React.useState("");

  return (
    <div data-test="component-input">
      <form>
        <input
          data-test="input-box"
          placeholder="Enter Guess..."
          value={currentGuess}
          onChange={(e) => setCurrentGuess(e.target.value)}
          type="text"
        />
        <button data-test="guess-button">Guess</button>
      </form>
    </div>
  );
};

Input.propTypes = { secretWord: PropTypes.string.isRequired };

export default Input;
