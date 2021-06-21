import React from "react"

const HospitalLogo = ({ name }) => {
  return (
    <div className="hospital-logo">
      <span className="m-auto">{name.slice(0, 2).toUpperCase()}</span>
    </div>
  )
}

export default HospitalLogo