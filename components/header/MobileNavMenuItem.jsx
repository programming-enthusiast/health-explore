import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"

const MobileNavMenuItem = ({ path, title }) => {
  const router = useRouter()
  const currentPath = router.pathname

  return (
    <>
      <Link href={path} as={path} prefetch={false}>
        <a
          title={title}
          className={`${
            currentPath === path
              ? "block pl-3 pr-4 py-2 border-l-4 border-blue-500 text-base font-medium text-blue-700 bg-blue-50 focus:outline-none focus:text-blue-800 focus:bg-blue-100 focus:border-blue-700 transition duration-150 ease-in-out"
              : "block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
          }`}
        >
          {title}
        </a>
      </Link>
    </>
  )
}

export default MobileNavMenuItem