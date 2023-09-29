'use client'
import React from 'react'
import { Container } from '../../../../components/ui/Container'
import Markdown from 'react-markdown'
import { useQuery } from 'react-query'
import { useParams } from 'next/navigation'

export default function BlogPage() {
  const param = useParams()
  const { data } = useQuery<{ app: string }>(
    ['blog2'],
    () => fetch(`/api/readFile/${param.tag}/${param.slug}`).then((res) => res.json()),
    {
      refetchInterval: 5000
    }
  )

  return (
    <Container className="mt-16 sm:mt-24">
      <div className="mt-12  sm:mt-20" id="reactmarkdown">
        <Markdown>{data?.app}</Markdown>
        <div className="divider"></div>
        <div className="join my-5 w-full flex justify-between ">
          <a href="/blog/project/projectSetting.md/" className="btn btn-sm md:btn-md gap-2 normal-case lg:gap-3">
            <svg
              className="h-6 w-6 fill-current md:h-8 md:w-8"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24">
              <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"></path>
            </svg>{' '}
            <div className="flex flex-col items-start">
              <span className="text-base-content/50 hidden text-xs font-normal md:block">Prev</span>{' '}
              <span>projectSetting</span>
            </div>
          </a>
          <a href="/components/button/" className="btn btn-neutral btn-sm md:btn-md gap-2 normal-case lg:gap-3">
            <div className="flex flex-col items-end">
              <span className="text-neutral-content/50 hidden text-xs font-normal md:block">Next</span>{' '}
              <span>Button</span>
            </div>
            <svg
              className="h-6 w-6 fill-current md:h-8 md:w-8"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24">
              <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path>
            </svg>
          </a>
        </div>
      </div>
    </Container>
  )
}
