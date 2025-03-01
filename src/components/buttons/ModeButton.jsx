import React from "react"

const ModeButton = ({title, icon, onClick}) => {
  return (
    <a
      onClick={onClick}
      className="flex justify-between items-center gap-3 cursor-pointer"
    >
      {icon}
      {title}
    </a>
  )
}

export default ModeButton
