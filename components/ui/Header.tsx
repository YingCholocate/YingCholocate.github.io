'use client'
import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <div>
      <ul className="menu menu-horizontal lg:menu-horizontal bg-base-200 rounded-box">
        {/* <li>
          <Link href="/">Home</Link>
        </li> */}

        <li>
          <Link href="/">Labels</Link>
        </li>
        <li>
          <Link href="/project">Project</Link>
        </li>
      </ul>
    </div>
  )
}
