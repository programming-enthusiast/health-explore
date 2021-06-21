import React from "react"
import commaNumber from "comma-number"

const FiltersCard = ({ title, options, onSelect}) => {
  return (
    <div className="bg-white p-4 shadow-sm">
      <div className="text-lg font-semibold mb-2">
        {title}
      </div>
      <div>
        {
          options && options.map((option, index) => {
            return (
              <div key={index} className="my-2 cursor-pointer" onClick={() => onSelect(option.key)}>
                <span>
                  {option.key + '  '}
                </span>
                <span className="text-sm text-gray-400">
                  {commaNumber(option.doc_count)}
                </span>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default FiltersCard