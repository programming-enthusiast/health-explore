import React from "react"
import { useRouter } from "next/router"
import NavMenuItem from "./MobileNavMenuItem"

const MobileNavMenu = () => {
  const router = useRouter()
  const currentPath = router.pathname

  return (
    <>
      <div className="pt-2 pb-4">
        <NavMenuItem title="PROFILE" path="/profile" />
        <NavMenuItem title="JOBS" path="/" />
        <NavMenuItem title="PROFESSIONAL NETWORK" path="/professional_network" />
        <NavMenuItem title="LOUNGE" path="/lounge" />
        <NavMenuItem title="SALARY" path="/salary" />
      </div>
      <div className="pt-4 pb-3 border-t border-gray-200">
      </div>
    </>
  )
}

export default MobileNavMenu
