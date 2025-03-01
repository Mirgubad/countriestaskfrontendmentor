import {width} from "@fortawesome/free-regular-svg-icons/faAddressBook"
import React, {useState} from "react"
import AsyncSelect from "react-select/async"

const CustomAsyncSelect = ({placeholder, options, onChange}) => {
  const [selectedOption, setSelectedOption] = useState(null)

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "#fff",
      borderColor: "transparent",
      padding: "0.5rem",

      color: "black",
      borderRadius: "0.375rem",
      cursor: "pointer",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      "&:hover": {
        borderColor: "transparent",
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#3b82f6" : "#ffffff",
      color: state.isSelected ? "#ffffff" : "#374151",
      padding: "0.5rem",
      "&:hover": {
        backgroundColor: "#e5e7eb",
      },
    }),
    container: (provided) => ({
      ...provided,
      width: "100%",
      maxWidth:"260px"
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
