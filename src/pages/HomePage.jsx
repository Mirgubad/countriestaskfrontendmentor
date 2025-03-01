import React, {useState, useEffect} from "react"
import CustomAsyncSelect from "../components/inputs/CustomSelect"
import FlagCard from "../components/cards/FlagCard"
import CustomText from "../components/inputs/CustomText"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faSearch} from "@fortawesome/free-solid-svg-icons"
import data from "../constants/data.json"
import CustomPagination from "../components/pagination"

const ITEMS_PER_PAGE = 12

const filterCountriesByRegion = (inputValue) => {
  const uniqueRegions = [
    ...new Set(data.map((country) => country.region.toLowerCase())),
  ] // Get unique regions
  return uniqueRegions
    .filter((region) => region.includes(inputValue.toLowerCase()))
    .map((region) => ({
      label: region.charAt(0).toUpperCase() + region.slice(1), // Capitalize the first letter
      value: region,
    }))
}

const promiseOptions = (inputValue) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(filterCountriesByRegion(inputValue))
    }, 500)
  })

const HomePage = () => {
  const [page, setPage] = useState(1)
  const [searchText, setSearchText] = useState("")
  const [selectedRegion, setSelectedRegion] = useState("")
  const [filteredData, setFilteredData] = useState(data)
  const [currentData, setCurrentData] = useState([])

  useEffect(() => {
    let filtered = data.filter((country) =>
      country.name.toLowerCase().includes(searchText.toLowerCase())
    )

    if (selectedRegion) {
      filtered = filtered.filter((country) =>
        country.region.toLowerCase().includes(selectedRegion.toLowerCase())
      )
    }

    setFilteredData(filtered)
    setPage(1)
  }, [searchText, selectedRegion])

  useEffect(() => {
    const startIndex = (page - 1) * ITEMS_PER_PAGE
    const endIndex = startIndex + ITEMS_PER_PAGE
    setCurrentData(filteredData.slice(startIndex, endIndex))
  }, [page, filteredData])

  const handlePageChange = (event, value) => {
    setPage(value)
  }

  const handleSearchChange = (e) => {
    setSearchText(e.target.value)
  }

  const handleRegionChange = (selected) => {
    setSelectedRegion(selected ? selected.value : "")
  }

  return (
    <div>
      <div className="container">
        <div className="flex flex-wrap justify-between mb-15 mt-5 gap-5">
          <CustomText
            icon={<FontAwesomeIcon icon={faSearch} />}
            placeHolder="Search for a country..."
            onChange={handleSearchChange}
          />
          <CustomAsyncSelect
            placeholder="Filter by region"
            options={promiseOptions}
            onChange={handleRegionChange}
          />
        </div>

        <div className="custom-grid">
          {currentData.map((country) => (
            <FlagCard
              key={country.name}
              countryName={country.name}
              img={country.flag}
              capital={country.capital}
              population={country.population}
              region={country.region}
            />
          ))}
        </div>

        {filteredData.length > 0 ? (
          <div className="flex justify-center mt-10">
            <CustomPagination
              spacing={2}
              count={Math.ceil(filteredData.length / ITEMS_PER_PAGE)}
              page={page}
              onChange={handlePageChange}
            />
          </div>
        ) : (
          <p className="text-center mt-10">No countries found!</p>
        )}
      </div>
    </div>
  )
}

export default HomePage
