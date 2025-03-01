import React, {createContext, useContext, useState, useEffect} from "react"

const ThemeContext = createContext()

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider = ({children}) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const savedMode = localStorage.getItem("mode")
    if (savedMode === "dark") {
      setIsDarkMode(true)
    }
  }, [])

  const toggleMode = () => {
    const newMode = !isDarkMode ? "dark" : "light"
    setIsDarkMode(!isDarkMode)
    localStorage.setItem("mode", newMode)
  }

  return (
    <ThemeContext.Provider value={{isDarkMode, toggleMode}}>
      {children}
    </ThemeContext.Provider>
  )
}
