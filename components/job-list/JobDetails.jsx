import React from "react"

const JobDetails = ({ job }) => {
  return (
    <>
      {/* Desktop UI */}
      <div className="p-4 hidden lg:flex flex-row">
        <div className="grid grid-cols-2 grid-rows-3-auto gap-y-2 flex-3">
          <div className="font-semibold">
            Department:
          </div>
          <div>
            {job.department.join(', ')}
          </div>
          <div className="font-semibold">
            Hours / shifts:
          </div>

          <div>
            {`${job.hours[0]} hours / ${job.work_schedule}`}
          </div>
          <div className="font-semibold">
            Summary
          </div>
          <div>
            {job.description}
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center gap-2">
          <button className="btn-blue ml-auto">Job Details</button>
          <button className="btn-white ml-auto">Save job</button>
        </div>
      </div>
      {/* Mobile UI */}
      <div className="p-4 flex flex-row lg:hidden">
        <div className="flex flex-col gap-y-2">
          <div>
            <div className="font-semibold">
              Department:
            </div>
            <div>
              {job.department.join(', ')}
            </div>
          </div>
          <div>
            <div className="font-semibold">
              Hours / shifts:
            </div>

            <div>
              {`${job.hours[0]} hours / ${job.work_schedule}`}
            </div>
          </div>
          <div>
            <div className="font-semibold">
              Summary
            </div>
            <div>
              {job.description}
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <button className="btn-blue">Job Details</button>
            <button className="btn-white">Save job</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default JobDetails