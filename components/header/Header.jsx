import React, { useState } from "react"
import NavMenu from "./NavMenu"
import Logo from "./Logo"
import MobileNavMenu from "./MobileNavMenu"
import MobileMenuButton from "./MobileMenuButton"
import Avatar from "./Avatar"

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="bg-white z-20 relative">
      <div className="mx-auto px-2 sm:px-6 lg:px-8 ">

        <div className="relative flex justify-between h-16">
          <div className="flex-grow-0 lg:flex-auto flex items-center sm:items-stretch sm:justify-start">
            <div className="flex items-center lg:hidden">
              <MobileMenuButton toggleMobileMenu={toggleMobileMenu} isMobileMenuOpen={isMobileMenuOpen} />
            </div>
            <div className="flex-shrink-0 flex items-center ml-2">
              {/* Normal Logo  */}
              <Logo/>
            </div>
            <NavMenu/>
          </div>

          <div className="flex items-center">
            <div className="ml-8 block lg:hidden">
              <Avatar name="Jimmy Yamamuro" number={2}/>
            </div>
            <span className="hidden lg:inline-flex rounded-md ml-3">
              <div>
                <button className="btn-white">CREATE JOB</button>
              </div>
              <div className="ml-8">
                <Avatar name="Jimmy Yamamuro" number={2}/>
              </div>
              <div className="flex ml-8">
                <a className="m-auto" href="#">
                  LOGOUT
                </a>
              </div>
            </span>
          </div>
        </div>
      </div>

      <div className={`${isMobileMenuOpen ? "block" : "hidden"} lg:hidden`}>
        <MobileNavMenu/>
      </div>
    </nav>
  )
}

export default Header
