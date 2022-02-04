import React from 'react'

type Props = {
  name: string
}

const NavItem = ({ name }: Props) => {
  return (
    <li className="flex cursor-pointer">
      {name}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </li>
  )
}

export default NavItem
