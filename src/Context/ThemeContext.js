import { createContext, useReducer } from "react"


const getThemePreference = JSON.parse(localStorage.getItem("theme-preference"))

let INITIAL_STATE = {
  darkmode: true
}

if (getThemePreference && getThemePreference.darkmode === true) {
  INITIAL_STATE = {
    darkmode: true
  }
} else if (getThemePreference && getThemePreference.darkmode === false) {
  INITIAL_STATE = {
    darkmode: false
  }
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

/**
 * It's a React component that takes in children and returns a context provider that has the theme
 * preference and dispatch function as its value
 * @returns The ThemeProvider component is being returned.
 */
export function ThemeProvider({ children }) {
  const [theme, dispatch] = useReducer(themeReducer, INITIAL_STATE)
  const themePreference = JSON.parse(localStorage.getItem("theme-preference"))

  localStorage.setItem("theme-preference", JSON.stringify(theme))

  return <ThemeContext.Provider value={{ themePreference, dispatch }}>
    {children}
  </ThemeContext.Provider>
}