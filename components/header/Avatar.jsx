import React from "react"

const Avatar = ({ name, number }) => {
  const firstName = name.split(' ')[0]
  const lastName = name.split(' ')[1]

  return (
    <div className="bg-blue-500 rounded-full w-10 h-10 flex relative">
      <span className="m-auto text-white text-xl">
        {firstName.charAt(0) + lastName.charAt(0)}
      </span>
      <div className="absolute rounded-full bg-red-600 text-xs text-white w-5 h-5 flex border-white border-2 -right-1 -top-1">
        <span className="m-auto">
          {number}
        </span>
      </div>
    </div>
  )
}


export default Avatar