import React from 'react'

const SearchBar = () => {
  return (
    <span className="relative ">
      <input
        type="text"
        className="w-full rounded-xl border-2 border-white bg-transparent py-3 pl-12 focus:outline-none"
      />
      <button className="absolute left-0 top-0 pl-4 pb-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </span>
  )
}

export default SearchBar
