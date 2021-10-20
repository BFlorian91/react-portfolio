import { createContext, useReducer } from "react"

const INITIAL_STATE = {
  darkmode: true
}

export const ThemeContext = createContext(INITIAL_STATE)

const themeReducer = (state, action) => {
  switch (action.type) {
    case "LIGHTMODE":
      return { darkmode: false }
    case "DARKMODE":
      return { darkmode: true }
    default:
      return state
  }
}

export function ThemeProvider({ children }) {
  const [theme, dispatch] = useReducer(themeReducer, INITIAL_STATE)

  return <ThemeContext.Provider value={{ theme, dispatch }}>
    {children}
  </ThemeContext.Provider>
}