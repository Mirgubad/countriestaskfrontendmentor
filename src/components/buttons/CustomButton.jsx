import React from "react"
import {useTheme} from "../../context/ThemeContext" // Assuming you have a ThemeContext
import {useNavigate} from "react-router-dom" // Import useNavigate

const CustomButton = ({title, icon, back = false}) => {
  const {isDarkMode} = useTheme() // Get the dark mode state from your context
  const navigate = useNavigate() // Initialize navigate hook

  // Back function: either go back in history or navigate to the specified path
  const handleBack = () => {
    if (back) {
      navigate(-1) // Go back to the previous page
    } else {
      navigate("/") // You can define a specific path, for example: navigate('/home')
    }
  }

  return (
    <a
      onClick={handleBack} // Handle the click for navigating back
      className={`cursor-pointer inline-flex items-center px-8 py-3 rounded-md font-semibold transition-all 
        ${
          isDarkMode
            ? "bg-[#2b3743] text-white hover:bg-gray-600"
            : "bg-gray-200 text-black hover:bg-gray-300"
        }`}
    >
      <span className="mr-2">{icon}</span>
      {title}
    </a>
  )
}

export default CustomButton
