import { createContext, useReducer } from "react";
import appReducer from "./AppReducer.js";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const initialState = {
    secretWord: "",
    guessedWords: [],
    success: false,
  };

  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
