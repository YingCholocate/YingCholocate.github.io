import React from 'react'
import { Container } from '../../../../components/ui/Container'
import Markdown from 'react-markdown'
import { promises as fs } from 'fs'
export function generateStaticParams() {
  return [
    { tag: 'css' },
    { tag: 'docker' },
    { tag: 'projectleaning', slug: 'blog.md' },
    { tag: 'projectleaning', slug: 'project-learning.md' },
    { tag: 'projectleaning', slug: 'projectSetting.md' },
    { tag: '_posts', slug: 'clound-push.md' },
    { tag: '_posts', slug: 'Deploy.md' },
    { tag: '_posts', slug: 'hello-world.md' },
    { tag: '_posts', slug: 'project-learning.md' },
    { tag: '_posts', slug: 'projectSetting.md' },
    { tag: '_posts', slug: 'ToolArchiving.md' },
    { tag: '_posts', slug: 'PerformanceOptimization.md' },
    { tag: 'react' },
    { tag: 'vue' }
  ]
}
export default async function BlogPage({ params }: { params: { tag: string; slug: string } }) {
  // const param = useParams()
  // const { data } = useQuery<{ app: string }>(
  //   ['blog2'],
  //   () => fetch(`/api/readFile/${param.tag}/${param.slug}`).then((res) => res.json()),
  //   {
  //     refetchInterval: 5000
  //   }
  // )
  // const data2 = useQuery([], () => fetch(`/api/tagBlogData/${param.tag}`).then((res) => res.json()), {
  //   refetchInterval: 5000
  // })
  console.log('param', params)
  let filePath = ''
  let filePath2 = ''
  if (process.env.NODE_ENV === 'development') {
    filePath = `public/tags/${params.tag}/${params.slug}`
    filePath2 = `public/tags/${params.tag}`
  } else {
    filePath = `tags/${params.tag}/${params.slug}`
    filePath2 = `tags/${params.tag}`
  }
  const data = await fs.readFile(filePath)
  const data2 = await fs.readdir(filePath2)
  const fileIndex = data2.indexOf(params.slug)

  return (
    <Container className="mt-16 sm:mt-24">
      <div className="mt-12  sm:mt-20" id="reactmarkdown">
        <Markdown>{data.toString()}</Markdown>
        <div className="divider"></div>
        <div className="join my-5 w-full flex justify-between ">
          {fileIndex !== 0 && (
            <a
              href={`/blog/${params.tag}/${data2[fileIndex - 1]}`}
              className="btn btn-sm md:btn-md gap-2 normal-case lg:gap-3">
              <svg
                className="h-6 w-6 fill-current md:h-8 md:w-8"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24">
                <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"></path>
              </svg>
              <div className="flex flex-col items-start">
                <span className="text-base-content/50 hidden text-xs font-normal md:block">Prev</span>
                <span>{data2[fileIndex - 1]}</span>
              </div>
            </a>
          )}
          {fileIndex !== data2.length && (
            <a
              href={`/blog/${params.tag}/${data2[fileIndex + 1]}`}
              className="btn btn-neutral btn-sm md:btn-md gap-2 normal-case lg:gap-3">
              <div className="flex flex-col items-end">
                <span className="text-neutral-content/50 hidden text-xs font-normal md:block">Next</span>
                <span>{data2[fileIndex + 1]}</span>
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
          )}
        </div>
      </div>
    </Container>
  )
}
