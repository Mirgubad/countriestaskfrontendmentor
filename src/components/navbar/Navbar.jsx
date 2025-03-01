import React, {useState} from "react"
import ModeButton from "../buttons/ModeButton"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faMoon} from "@fortawesome/free-regular-svg-icons"

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false)

  const handleModeButtonClick = () => {
    setDarkMode(!darkMode)
    // Optionally, add a body class to toggle dark mode styles globally
    if (!darkMode) {
      document.body.classList.add("dark")
    } else {
      document.body.classList.remove("dark")
    }
  }

  return (
    <div
      className={`shadow-md ${
        darkMode ? "shadow-gray-700" : "shadow-gray-300"
      } dark:bg-gray-800 dark:text-white`}
    >
      <div className="container flex justify-between p-4">
        <h2 className="text-l sm:text-3xl font-bold">Where in the world?</h2>
        <ModeButton
          onClick={handleModeButtonClick}
          icon={<FontAwesomeIcon icon={faMoon} />}
          title={darkMode ? "Light Mode" : "Dark Mode"}
        />
      </div>
    </div>
  )
}

export default Navbar
