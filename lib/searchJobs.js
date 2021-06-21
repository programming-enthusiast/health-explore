function search(array, keyword) {
  const regExp = new RegExp(keyword,"gi");
  const check = obj => {
    if (obj !== null && typeof obj === "object") { return Object.values(obj).some(check) }
    if (Array.isArray(obj)) { return obj.some(check) }
    return (typeof obj === "string" || typeof obj === "number") && regExp.test(obj);
  }
  return array.filter(check);
}

function searchJobs(jobListings, keyword) {
  const result = []
  jobListings.forEach(listing => {
    const searchedJobs = search(listing.items, keyword)
    if (searchedJobs.length > 0) {
      listing.items = searchedJobs
      result.push(listing)
    }
  })

  return result
}

export default searchJobs