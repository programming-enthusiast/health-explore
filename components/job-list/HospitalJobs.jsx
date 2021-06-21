import React, { useState } from "react"
import HospitalLogo from "./HospitalLogo"
import JobItem from "./JobItem"

const HospitalJobs = ({ jobListing }) => {
  const [isJobsOpen, setJobsOpen] = useState(false)

  const handleClick = () => {
    setJobsOpen(!isJobsOpen)
  }

  return (
    <>
      <div className="border-b p-4 flex flex-row flex-start cursor-pointer" onClick={handleClick}>
        <HospitalLogo name={jobListing.name}/>
        <div className="my-auto ml-4">
          <span>
          {
            jobListing && `${jobListing.items.length} jobs for ${jobListing.name}`
          }
          </span>
        </div>

      </div>
      {
        isJobsOpen &&
          <div>
            {
              jobListing.items.map((item, index) => {
                return (
                  <JobItem job={item} key={index}/>
                )
              })
            }
          </div>
      }
    </>
  )
}

export default HospitalJobs