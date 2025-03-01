import "./App.css"
import CountryDetails from "./pages/CountryDetails"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import HomePage from "./pages/HomePage"
import MainLayout from "./layouts/MainLayout"
import { useTheme } from "./context/ThemeContext"
import { useEffect } from "react"

function App() {
  const {isDarkMode} = useTheme()

  // Apply the dark/light class to the body element whenever theme changes
  useEffect(() => {
    // Apply the theme class to the body based on the theme
    document.body.className = isDarkMode ? "dark" : "light"
  }, [isDarkMode]) // Re-run when `isDarkMode` changes
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="details/:countryName" element={<CountryDetails />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
