import React from "react"

const CustomText = ({placeHolder, type, onChange, icon = null}) => {
  return (
    <div
      className="flex items-center gap-4
                 rounded shadow-md 
                 shadow-gray-200 text-gray-500
                 px-5 py-2 max-w-[400px] w-[100%]"
    >
      {icon && icon}
      <input
        className="border-none outline-none text-gray-500"
        type={type}
        onChange={onChange}
        placeholder={placeHolder}
      />
    </div>
  )
}

export default CustomText
