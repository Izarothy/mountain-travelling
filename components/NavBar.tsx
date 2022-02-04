import React from 'react'
import Link from 'next/link'

import NavItem from '@/components/NavItem'
const NavBar = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-8">
      <Link href="/">
        <span className="flex cursor-pointer gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <h2 className="text-xl font-bold">Alpine</h2>
        </span>
      </Link>
      <ul className="flex justify-between gap-6 rounded-lg bg-blue-200 bg-opacity-50 px-10 py-6 font-semibold uppercase">
        <NavItem name="Traveller type" />
        <NavItem name="Couple" />
        <NavItem name="Program" />
        <NavItem name="Mountaining" />
        <NavItem name="Set location" />
      </ul>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </nav>
  )
}

export default NavBar
