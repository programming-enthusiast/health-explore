import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"
import SearchBar from "../components/SearchBar"
import FiltersCard from "../components/search/FiltersCard"
import JobList from "../components/job-list/JobList"
import useSWR from "swr"
import fetcher from "../lib/fetch"
import SortByContext, { SortByProvider } from "../components/contexts/SortByContext"



const GET_JOB_FILTERS = "/api/filters"
const GET_JOB_LISTINGS = "/api/jobs"

const Index = () => {

  const [search, setSearch] = useState(null)
  const [filter, setFilter] = useState(null)
  const [filterType, setFilterType] = useState(null)

  const { data: filters, error: filtersError, mutateFilters } = useSWR(GET_JOB_FILTERS, fetcher)

  let dataUrl = search && search !== '' ? `${GET_JOB_LISTINGS}?search=${encodeURIComponent(search)}` : GET_JOB_LISTINGS
  dataUrl = dataUrl + (filter && filterType ? (search ? '&' : '?') + 'filter=' + filter + '&filterType=' + encodeURIComponent(filterType) : '')
  const { data: jobListings, error: jobListingsError, mutate: mutateJobListings } = useSWR(dataUrl, fetcher)

  const handleSearch = (searchQuery) => {
    setSearch(searchQuery)
  }

  const handleJobTypeSelect = (filterType) => {
    setFilter('job_type')
    setFilterType(filterType)
  }

  const handleWorkScheduleSelect = (filterType) => {
    setFilter('work_schedule')
    setFilterType(filterType)
  }

  const handleDepartmentSelect = (filterType) => {
    setFilter('department')
    setFilterType(filterType)
  }

  const handleExperienceSelect = (filterType) => {
    setFilter('experience')
    setFilterType(filterType)
  }

  return (
    <div className="bg-gray-100 p-4">
      <SearchBar onSearch={handleSearch} keyword={search} />
      {/* Filters */}
      <div className="mt-4 flex flex-row gap-4">
        <div className="w-1/5 hidden lg:flex flex-col gap-4">
          <FiltersCard title="JOB TYPE" options={filters?.job_type} onSelect={handleJobTypeSelect} />
          <FiltersCard title="DEPARTMENT" options={filters?.department} onSelect={handleDepartmentSelect} />
          <FiltersCard title="Work Schedule" options={filters?.work_schedule} onSelect={handleWorkScheduleSelect} />
          <FiltersCard title="Experience" options={filters?.experience} onSelect={handleExperienceSelect} />
        </div>

        <div className="w-full">
          <SortByProvider>
            <JobList jobListings={jobListings}/>
          </SortByProvider>
        </div>
      </div>

    </div>
  )
}
export default Index
