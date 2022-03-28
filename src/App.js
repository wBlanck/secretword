import { useContext, useEffect, useState } from "react";
import "./App.css";
import Congrats from "./components/Congrats";
import AppContext from "./components/context/AppContext";

import GuessedWords from "./components/GuessedWords";
import Input from "./components/Input";

function App() {
  const { success, guessedWords, secretWord, dispatch } =
    useContext(AppContext);

  useEffect(() => {
    dispatch({ type: "SET_SECRET_WORD", payload: "beer" });
  }, []);

  return (
    <div className="grid content-center justify-center w-screen h-screen gap-3 text-center text-gray-100 gradient-bg font-text">
      <h1 className="text-4xl font-heading">
        <span className="text-6xl drop-shadow-xl ">Guess</span>
        <br /> The Secret Word!
      </h1>
      <Congrats success={success} />
      <Input secretWord={secretWord} />
      <GuessedWords guessedWords={guessedWords} />
    </div>
  );
}

export default App;
