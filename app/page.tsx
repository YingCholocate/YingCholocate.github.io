import React from 'react'
import '../styles/globals.css'
import BlogTag from '../components/BlogTag'
export default function Home() {
  return (
    <>
      <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
        <div className="flex flex-col gap-6 pt-6">
          <h2 className="flex items-center text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            <span className="ml-2">近期文章</span>
          </h2>
          <BlogTag />
        </div>
        <aside className="space-y-10 lg:sticky lg:top-8 lg:h-fit lg:pl-16 xl:pl-20">
          {/* <Newsletter /> */}
          {/* <Resume /> */}
        </aside>
      </div>
    </>
  )
}
