import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import NavMenuItem from "./NavMenuItem"

const NavMenu = () => {
  const router = useRouter()
  const currentPath = router.pathname

  return (
    <div className="hidden lg:ml-6 lg:flex xl:absolute xl:top-1/2 xl:left-1/2 xl:transform xl:-translate-x-2/4 xl:-translate-y-2/4">
      <NavMenuItem title="PROFILE" path="/profile" />
      <NavMenuItem title="JOBS" path="/" />
      <NavMenuItem title="PROFESSIONAL NETWORK" path="/professional_network" />
      <NavMenuItem title="LOUNGE" path="/lounge" />
      <NavMenuItem title="SALARY" path="/salary" />
    </div>
  )
}

export default NavMenu
