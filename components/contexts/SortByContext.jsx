import React, { useState } from "react"

const SortByContext = React.createContext({
    location: null,
    role: null,
    department: null,
    education: null,
    experience: null,
    setLocation: () => {},
    setRole: () => {},
    setDepartment: () => {},
    setEducation: () => {},
    setExperience: () => {}
})

export const SortByProvider = ({ children }) => {
  const [location, setLocation] = useState('')
  const [role, setRole] = useState('')
  const [department, setDepartment] = useState('')
  const [education, setEducation] = useState('')
  const [experience, setExperience] = useState('')

  let value = {
    location,
    role,
    department,
    education,
    experience,
    setLocation,
    setRole,
    setDepartment,
    setEducation,
    setExperience
  }

  return (
    <SortByContext.Provider value={value}>
      {children}
    </SortByContext.Provider>
  )
}

export default SortByContext
