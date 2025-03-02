import React from "react"
import {useTheme} from "../../context/ThemeContext"

const CustomText = ({placeHolder, type, onChange, icon = null}) => {
  const {isDarkMode} = useTheme()

  return (
    <div
      className={`flex items-center gap-4
                 rounded shadow-md 
                ${
                  isDarkMode
                    ? " shadow-none text-white-500 bg-[#2b3743]"
                    : " shadow-gray-200 text-gray-500"
                }
                 px-5 py-2 max-w-[100%] w-[100%] md:max-w-[400px]
        `}
    >
      {icon && icon}
      <input
        className={`border-none outline-none ${
          isDarkMode ? "text-white-500  placeholder-white" : "text-gray-500"
        }`}
        type={type}
        onChange={onChange}
        placeholder={placeHolder}
      />
    </div>
  )
}

export default CustomText
