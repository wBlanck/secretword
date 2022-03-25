import "./App.css";
import Congrats from "./components/Congrats";
import GuessedWords from "./components/GuessedWords";

function App() {
  return (
    <div className="grid content-center justify-center h-screen w-screen text-center gradient-bg text-gray-100 font-text">
      <h1 className="text-4xl font-heading">
        <span className="text-6xl drop-shadow-xl ">Guess</span>
        <br /> The Secret Word!
      </h1>
      <Congrats success={true} />
      <GuessedWords
        guessedWords={[
          { guessedWord: "MoneyBucks", letterMatchCount: 0 },
          { guessedWord: "MoneyBucks", letterMatchCount: 5 },
          { guessedWord: "MoneyBucks", letterMatchCount: 5 },
          { guessedWord: "MoneyBucks", letterMatchCount: 5 },
          { guessedWord: "MoneyBucks", letterMatchCount: 5 },
        ]}
      />
    </div>
  );
}

export default App;
