import jobs from '../../data/jobs'
import searchJobs from '../../lib/searchJobs'
import filterJobs from '../../lib/filterJobs'

export default async (req, res) => {
  res.statusCode = 200
  const { search, filter, filterType } = req.query

  // @todo: implement filters and search
  // @todo: implement automated tests

  // this timeout emulates unstable network connection, do not remove this one
  // you need to figure out how to guarantee that client side will render
  // correct results even if server-side can't finish replies in the right order
  await new Promise((resolve) => setTimeout(resolve, 1000 * Math.random()))

  let jobListings = jobs

  if (search && search !== '')
    jobListings = searchJobs(jobListings, decodeURIComponent(search))

  if (filter && filterType) {
    jobListings = filterJobs(jobListings, filter, decodeURIComponent(filterType))
  }

  res.json(jobListings)
}
