import React from "react"
import {Link} from "react-router-dom"
import {useTheme} from "../../context/ThemeContext"

const FlagCard = ({img, countryName, population, region, capital}) => {
  const {isDarkMode} = useTheme()
  return (
    <article
      className={`rounded-lg shadow-md 
                 overflow-hidden
                ${isDarkMode ? "shadow-none bg-[#2b3743]" : "shadow-gray-200"}`}
    >
      <Link to={`/details/${countryName}`}>
        <div className="h-[200px]">
          <img
            className="w-[100%] h-[100%] object-cover"
            src={img}
            alt={countryName}
          />
        </div>
        <div className="p-5">
          <h2 className="text-lg pb-3"> {countryName}</h2>
          <p>
            <span className="font-bold">Population: </span>
            {population.toLocaleString("en-US")}
          </p>
          <p>
            <span className="font-bold">Region: </span>
            {region}
          </p>
          <p className="pb-5">
            <span className="font-bold ">Capital: </span>
            {capital}
          </p>
        </div>
      </Link>
    </article>
  )
}

export default FlagCard
