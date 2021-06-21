import React from "react"
import Link from "next/link"

const Footer = () => {
  return (
    <>
      <div className="bg-white text-black py-10 flex flex-col lg:flex-row">
        <div className="max-w-screen-xl flex flex-col flex-2 flex-row py-4 px-4 sm:px-6">
          <div className="w-full">
            <div className="text-2xl font-bold">
              About us
            </div>
            <p className="my-4">
              We are a team of nurses, doctors, technologists and
              executives dedicated to help nurses find jobs that they love.
            </p>
            <p>
              All copyrights reserved @2020 - Health Explore
            </p>
          </div>
        </div>
        <div className="max-w-screen-xl flex flex-col flex-1 flex-row py-4 px-4 sm:px-6">
          <div className="w-full">
            <div className="text-2xl font-bold">
              Sitemap
            </div>
            <p className="my-4">
              Nurses
            </p>
            <p className="my-4">
              Employers
            </p>
            <p className="my-4">
              Social networking
            </p>
            <p className="my-4">
              Jobs
            </p>
          </div>
        </div>
        <div className="max-w-screen-xl flex flex-col flex-1 flex-row py-4 px-4 sm:px-6">
          <div className="w-full">
            <div className="text-2xl font-bold">
              Sitemap
            </div>
            <p className="my-4">
              Nurses
            </p>
            <p className="my-4">
              Employers
            </p>
            <p className="my-4">
              Social networking
            </p>
            <p className="my-4">
              Jobs
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer