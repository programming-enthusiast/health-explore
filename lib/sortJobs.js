const payload = (job, filteredItem) => {
  return {
    total_jobs_in_hospital: job.total_jobs_in_hospital,
    name: job.name,
    job_title: job.job_title,
    items: filteredItem,
  }
}

function orderBy(order, a, b) {
  if (order === "asc") {
    return a > b ? 1 : -1
  } else if (order === "desc") {
    return b > a ? 1 : -1
  }
}

function sortBy(sortType, order, records) {
  let array = records.filter((item) => item.items.length > 0)
  return array
    .map((job) => {
      let sortedItems = [
        ...job.items.sort((a, b) => {
          return orderBy(order, a[sortType], b[sortType])
        }),
      ];
      return payload(job, sortedItems)
    })
    .sort((a, b) => {
      return orderBy(order, a.items[0][sortType], b.items[0][sortType])
    })
}

function sortJobs(jobListings, location, role, department, education, experience) {
  if (!jobListings)
    return null

  let sortedJobListings = jobListings

  if (location && location !== '')
    sortedJobListings = sortBy("location", location, sortedJobListings)
  if (role && role !== '')
    sortedJobListings = sortBy("job_title", role, sortedJobListings)
  if (department && department !== '')
    sortedJobListings = sortBy("department", department, sortedJobListings)
  if (education && education !== '')
    sortedJobListings = sortBy("required_skills", education, sortedJobListings)
  if (experience && experience !== '')
    sortedJobListings = sortBy("experience", experience, sortedJobListings)

  return sortedJobListings
}

export default sortJobs