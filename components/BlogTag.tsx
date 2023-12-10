'use client'
import React from 'react'
import TagIcon from './ui/TagIcon'
import { useQuery } from 'react-query'
import { useRouter } from 'next/navigation'

export default function BlogTag() {
  const router = useRouter()
  // 遍历文件夹查看有多少个标签，或返回数据
  const { data } = useQuery<{ app: string[] }>('tag', () => fetch('/api/tagData').then((res) => res.json()), {
    refetchInterval: 5000
  })

  const navigateToTagDetail = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, tag: string) => {
    e.preventDefault()
    router.push(`/labels/${tag}`)
  }
  return (
    <div className="grid grid-cols-4 gap-1 lg:grid-cols-6">
      {data?.app?.map((tag) => (
        <div className="flex space-x-3 cursor-pointer m-2 " key={tag} onClick={(e) => navigateToTagDetail(e, tag)}>
          <TagIcon />
          <span>{tag}</span>
        </div>
      ))}
    </div>
  )
}
