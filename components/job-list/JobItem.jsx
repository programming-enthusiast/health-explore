import React, { useState } from "react"
import JobDetails from "./JobDetails"
import ReactTimeAgo from "react-time-ago"

const JobItem = ({ job }) => {
  const [isDetailsOpen, setDetailsOpen] = useState(false)

  const handleClick = () => {
    setDetailsOpen(!isDetailsOpen)
  }

  return (
    <div className="border-b">
      <div className="p-4 flex flex-col sm:flex-row justify-between cursor-pointer" onClick={handleClick}>
        <div className="flex flex-col">
          <div className="font-semibold">
            {job.job_title}
          </div>
          <div>
            {`${job.job_type} | $${job.salary_range[0]} - $${job.salary_range[1]} an hour | ${job.city}`}
          </div>
        </div>
        <div>
          <ReactTimeAgo date={new Date(job.created)} locale="en-US"/>
        </div>
      </div>
      <div>
        {
          isDetailsOpen && <JobDetails job={job}/>
        }
      </div>
    </div>
  )
}

export default JobItem