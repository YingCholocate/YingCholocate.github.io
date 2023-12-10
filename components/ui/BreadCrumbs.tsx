'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function BreadCrumbs() {
  const breadData = usePathname()
  const breadArr = breadData.split('/')

  return (
    <div className="text-sm breadcrumbs mx-auto max-w-2xl lg:max-w-5xl mt-24 md:mt-28">
      <ul>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="w-4 h-4 mr-2 stroke-current">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
          </svg>
          <Link href="/">Home</Link>
        </li>
        {breadArr.map((bread, index) => {
          return (
            bread && (
              <li key={index}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 mr-2 stroke-current">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                </svg>
                {bread === 'labels' ? <Link href={'/'}>{bread}</Link> : <Link href={'/labels/' + bread}>{bread}</Link>}
              </li>
            )
          )
        })}
      </ul>
    </div>
  )
}
