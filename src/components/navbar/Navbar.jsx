import React, {useState} from "react"
import ModeButton from "../buttons/ModeButton"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faMoon} from "@fortawesome/free-regular-svg-icons"
import {faSun} from "@fortawesome/free-regular-svg-icons"

import {useTheme} from "../../context/ThemeContext"
const Navbar = () => {
  const {isDarkMode, toggleMode} = useTheme()
  return (
    <div
      className={`shadow-md ${
        isDarkMode ? "shadow-none bg-[#2b3743]" : "shadow-gray-300"
      } dark:bg-gray-800 dark:text-white`}
    >
      <div className="container flex justify-between p-4">
        <h2 className="text-l sm:text-3xl font-bold">Where in the world?</h2>
        <ModeButton
          onClick={toggleMode}
          icon={<FontAwesomeIcon icon={isDarkMode ? faMoon : faSun} />}
          title={isDarkMode ? "Dark Mode" : "Light Mode"}
        />
      </div>
    </div>
  )
}

export default Navbar
