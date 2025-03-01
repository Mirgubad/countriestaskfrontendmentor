import React, {useState} from "react"
import AsyncSelect from "react-select/async"
import {useTheme} from "../../context/ThemeContext"

const CustomAsyncSelect = ({placeholder, options, onChange}) => {
  const [selectedOption, setSelectedOption] = useState(null)
  const {isDarkMode} = useTheme()

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: isDarkMode ? "#2b3743" : "#fff", // Dark mode background
      borderColor: isDarkMode ? "#374151" : "#e5e7eb", // Border color based on dark mode
      padding: "0.5rem",
      color: isDarkMode ? "#fff" : "#333", // Text color based on dark mode
      borderRadius: "0.375rem",
      cursor: "pointer",
      boxShadow: isDarkMode
        ? "0 4px 6px rgba(0, 0, 0, 0.3)"
        : "0 4px 6px rgba(0, 0, 0, 0.1)", // Darker shadow for dark mode
      "&:hover": {
        borderColor: isDarkMode ? "#3b82f6" : "#3b82f6", // Highlight border color on hover
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "#3b82f6" // Blue background for selected option
        : isDarkMode
        ? "#374151" // Dark mode background for non-selected options
        : "#ffffff", // Light mode background for non-selected options
      color: state.isSelected
        ? "#ffffff" // White text when selected
        : isDarkMode
        ? "#fff" // Light text for dark mode when not selected
        : "#374151", // Dark text for light mode when not selected
      padding: "0.5rem",
      "&:hover": {
        backgroundColor: isDarkMode ? "#4b5563" : "#f3f4f6", // Light hover background for dark mode
        color: isDarkMode ? "#ffffff" : "#333", // Change text color on hover
      },
    }),
    container: (provided) => ({
      ...provided,
      width: "100%",
      maxWidth: "260px", // Max width for the container
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: isDarkMode ? "#2b3743" : "#fff", // Dropdown background
      color: isDarkMode ? "#fff" : "#333", // Dropdown text color
    }),
    menuList: (provided) => ({
      ...provided,
      backgroundColor: isDarkMode ? "#2b3743" : "#fff", // List background color
      color: isDarkMode ? "#fff" : "#333", // List item text color
    }),
    // Targeting the singleValue class here
    singleValue: (provided) => ({
      ...provided,
      color: isDarkMode ? "#fff" : "#333", // Text color of selected value
    }),
    placeholder: (provided) => ({
      ...provided,
      color: isDarkMode ? "#fff" : "#333", // Text color of selected value
    }),
  }

  const handleChange = (selected) => {
    setSelectedOption(selected)
    onChange(selected) // Pass selected option to parent component
  }

  return (
    <AsyncSelect
      placeholder={placeholder}
      cacheOptions
      defaultOptions
      onChange={handleChange}
      loadOptions={options}
      styles={customStyles}
      value={selectedOption}
      isClearable={true} // Enable reset button (X icon)
    />
  )
}

export default CustomAsyncSelect
