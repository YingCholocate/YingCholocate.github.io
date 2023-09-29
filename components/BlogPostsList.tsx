import { useParams, useRouter } from 'next/navigation'
import React from 'react'

export default function BlogPostsList(props: { tags: string[] }) {
  const { tags } = props

  const router = useRouter()
  const params = useParams()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const seeRenderView = (e: { target: any }) => {
    router.push(`/blog/${params.slug}/${e.target.innerHTML}`)
  }

  return (
    <div>
      <ul className="steps steps-vertical" onClick={seeRenderView} style={{ cursor: 'pointer' }}>
        {tags &&
          tags.map((tag, index) => {
            if (index === 1) {
              return (
                <li key={tag} className="step step-primary">
                  {tag}
                </li>
              )
            } else {
              return (
                <li key={tag} className="step step-primary">
                  {tag}
                </li>
              )
            }
          })}
      </ul>
    </div>
  )
}
