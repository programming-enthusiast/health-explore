import { FILTERS } from "./constants"

function filterJobs(jobListings, filter, filterType) {
  if (!filter || !filterType || !FILTERS.includes(filter)) {
    return jobListings
  } else {
    const filteredListings = jobListings.map(listing => {
      const filteredItems = listing.items.filter((item) => {
        if (Array.isArray(item[filter])) {
          return item[filter]
            .map((item) => item.toLowerCase())
            .includes(filterType.toLowerCase());
        } else {
          return item[filter].toLowerCase() === filterType.toLowerCase();
        }
      })

      if (filteredItems?.length > 0)
        return {
          items: filteredItems,
          name: listing.name,
          job_title: listing.job_title,
          total_jobs_in_hospital: listing.total_jobs_in_hospital
        }
    })

    return filteredListings.filter(listing => listing ? true : false)
  }
}

export default filterJobs