'use client'
import { useParams } from 'next/navigation'
import React from 'react'
import { useQuery } from 'react-query'
import BlogPostsList from '~/components/BlogPostsList'

export default function LabelsPage() {
  const params = useParams()
  const { slug } = params
  const { data } = useQuery<{ app: string[] }>(
    ['blog'],
    () => fetch(`/api/tagBlogData/${slug}`).then((res) => res.json()),
    {
      refetchInterval: 5000
    }
  )

  return (
    <div>
      <BlogPostsList tags={data?.app} />
    </div>
  )
}
