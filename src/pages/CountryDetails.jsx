import React from "react"
import {useParams} from "react-router-dom"
import CustomButton from "../components/buttons/CustomButton"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowLeftLong} from "@fortawesome/free-solid-svg-icons"
import data from "../constants/data.json" // Import data from local JSON

const CountryDetails = () => {
  // Extract countryName from URL params
  const {countryName} = useParams()

  // Find the country data from the imported JSON based on countryName
  const countryData = data.find(
    (country) => country.name.toLowerCase() === countryName.toLowerCase()
  )

  if (!countryData) {
    return <div>Country not found!</div>
  }

  const {
    flag,
    name,
    nativeName,
    subregion,
    topLevelDomain,
    population,
    region,
    capital,
    borders,
    languages,
    currencies,
  } = countryData
  const languageNames = languages.map((language) => language.name).join(", ")

  return (
    <div className="container mx-auto p-5">
      <div className="details-top my-5">
        <CustomButton
          title="Back"
          icon={<FontAwesomeIcon icon={faArrowLeftLong} />}
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-20 mt-10 items-center">
        <div className="w-full max-w-[550px] max-h-[370px]">
          <img
            src={flag}
            alt={`Flag of ${name}`}
            className="w-full h-auto  shadow-md"
          />
        </div>
        <div className="w-full sm:w-2/3 my-3">
          <h1 className="text-3xl font-bold ">{name}</h1>
          <div className="flex justify-between gap-20 py-20">
            <div>
              <p className="text-xl my-2">
                <strong className="font-bold">Native Name: </strong>
                {nativeName}
              </p>
              <p className="text-xl my-2">
                <strong className="font-bold">Population: </strong>
                {population.toLocaleString("en-US")}
              </p>
              <p className="text-xl my-2">
                <strong className="font-bold">Region: </strong>
                {region}
              </p>
              <p className="text-xl my-2">
                <strong className="font-bold">Sub Region: </strong>
                {subregion}
              </p>
              {capital && (
                <p className="text-xl my-2">
                  <strong className="font-bold">Capital: </strong>
                  {capital}
                </p>
              )}
            </div>
            <div>
              <p className="text-xl my-2">
                <strong className="font-bold">Top Level Domain: </strong>
                {topLevelDomain}
              </p>

              {currencies && (
                <p className="text-xl my-2">
                  <strong className="font-bold">Currencies: </strong>
                  {Object.values(currencies)
                    .map((currency) => currency.name)
                    .join(", ")}
                </p>
              )}
              <p className="text-xl my-2">
                <strong className="font-bold">Languages: </strong>
                {languageNames}
              </p>
            </div>
          </div>
          {borders && (
            <div className="flex text-xl my-2 items-center">
              <strong className="font-bold">Border Countries: </strong>
              <div className="flex gap-2 ml-3">
                {borders?.map((border) => (
                  <div className="rounded border border-gray-300 px-2 py-1">
                    {" "}
                    {border}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CountryDetails
