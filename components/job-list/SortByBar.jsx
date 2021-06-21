import React, { useContext } from "react"
import SortByItem from "./SortByItem"
import SortByContext, { SortByProvider } from "../contexts/SortByContext"

const sortingOptions = [
  "location",
  "role",
  "department",
  "education",
  "experience",
]
const SoryByBar = () => {

  const sortByContext = useContext(SortByContext);

  const handleSortyByItemChange = (option, state) => {
    if (option === 'location') sortByContext.setLocation(state)
    else if (option === 'role') sortByContext.setRole(state)
    else if (option === 'department') sortByContext.setDepartment(state)
    else if (option === 'education') sortByContext.setEducation(state)
    else if (option === 'experience') sortByContext.setExperience(state)
  }

  return (
    <div className="flex flex-row gap-4">
      <div className="text-gray-400">
        Sort by
      </div>
      {
        sortingOptions.map((option, index) => {
          return (
            <SortByItem sortOption={option} state={sortByContext[option]} onChange={(state) => handleSortyByItemChange(option, state)} key={index} />
          )
        })
      }
    </div>
  )
}

export default SoryByBar