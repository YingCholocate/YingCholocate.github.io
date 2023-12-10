// import { useParams } from 'next/navigation'
import React from 'react'
// import { useQuery } from 'react-query'
import BlogPostsList from '~/components/BlogPostsList'
import { Container } from '~/components/ui/Container'
import { promises as fs } from 'fs'
export function generateStaticParams() {
  return [
    { slug: 'css' },
    { slug: 'docker' },
    { slug: 'projectleaning' },
    { slug: 'public' },
    { slug: '_posts' },
    { slug: 'react' },
    { slug: 'vue' }
  ]
}
export default async function LabelsPage({ params }: { params: { slug: string } }) {
  // const params = useParams()
  // const { slug } = params
  // const { data } = useQuery<{ app: string[] }>(
  //   ['blog'],
  //   () => fetch(`/api/tagBlogData/${slug}`).then((res) => res.json()),
  //   {
  //     refetchInterval: 5000
  //   }
  // )
  let filePath = ''

  if (process.env.NODE_ENV === 'development') {
    filePath = `public/tags/${params.slug}`
    // filePath = path.join(process.cwd(), `./public/tags/${params.slug}`)
  } else {
    filePath = `tags/${params.slug}`
    // filePath = path.join(process.cwd(), `tags/${params.slug}`)
  }

  const files = await fs.readdir(filePath)
  console.log('data', files)
  return (
    <Container>
      <BlogPostsList tags={files} />
    </Container>
  )
}
