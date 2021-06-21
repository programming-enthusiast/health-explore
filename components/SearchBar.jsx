import React, { useState, useEffect } from "react"

const SearchBar = ({ onSearch, keyword }) => {

  const [searchQuery, setSearchQuery] = useState(keyword)

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(searchQuery)
  }

  useEffect(() => {
    setSearchQuery(keyword)
  }, [keyword])

  return (
    <div className="flex-grow flex">
      <div className="w-full">
        <label htmlFor="searchq" className="sr-only">
          Search
        </label>
        <div className="mt-1 flex">
          <div className="relative flex items-stretch flex-grow focus-within:z-10">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <form onSubmit={handleSubmit} className="w-full">
              <input
                type="text"
                name="searchq"
                id="searchq"
                className="border h-14 focus:ring-blue-500 focus:border-blue-500 block w-full rounded-md shadow-sm py-2 pl-10 sm:text-sm border-gray-300"
                placeholder="Search for any job, title, keywords or company"
                onChange={(e) => setSearchQuery(e.target.value)}
                value={searchQuery}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchBar