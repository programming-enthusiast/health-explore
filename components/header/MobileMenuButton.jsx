import React, { useState } from "react"

const MobileMenuButton = ({ isMobileMenuOpen, toggleMobileMenu }) => {
  return (
    <>
      {/* <!-- Mobile menu button --> */}
      <button
        className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
        aria-label="Main menu"
        aria-expanded="false"
        onClick={toggleMobileMenu}
      >
        {/* <!-- Icon when menu is closed. --> */}
        <svg
          className={`${isMobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        {/* <!-- Icon when menu is open. -->*/}
        <svg
          className={`${isMobileMenuOpen ? "block" : "hidden"} h-6 w-6`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </>
  )
}

export default MobileMenuButton