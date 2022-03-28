const AppReducer = (state, action) => {
  switch (action.type) {
    case "SET_SECRET_WORD":
      return {
        ...state,
        secretWord: action.payload,
      };
    case "ADD_GUESS":
      return {
        ...state,
        guessedWords: [...state.guessedWords, action.payload],
      };
    case "WINNER":
      return {
        ...state,
        success: action.payload,
      };
  }
};

export default AppReducer;
