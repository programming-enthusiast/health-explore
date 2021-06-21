import React, { useContext } from "react"
import SortByBar from "./SortByBar"
import HospitalJobs from "./HospitalJobs"
import commaNumber from "comma-number"
import SortByContext, { SortByProvider } from "../contexts/SortByContext"
import sortJobs from "../../lib/sortJobs"


const JobList = ({ jobListings }) => {

  const { location, role, department, education, experience } = useContext(SortByContext);

  const sortedJobListings = sortJobs(jobListings, location, role, department, education, experience)


  let numJobs = 0
  if (sortedJobListings) {
    sortedJobListings.forEach(listing => {
      numJobs += listing?.items?.length
    })
  }

  return (
    <div className="bg-white p-4">
      <div className="flex flex-row justify-between">
        <div>
          <span className="text-lg font-semibold">{commaNumber(numJobs) + ' '}</span><span>job postings</span>
        </div>
        <div className="hidden lg:block">
          <SortByBar/>
        </div>
      </div>
      <div className="flex flex-col gap-6 mt-4 lg:mt-8">
      {
        sortedJobListings && sortedJobListings.map((listing, index) => {
          return (
            <HospitalJobs key={index} jobListing={listing}/>
          )
        })
      }
      </div>
    </div>
  )
}

export default JobList