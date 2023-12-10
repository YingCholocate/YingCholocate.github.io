import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
type RouteSegment = { params: { filename: string; tag: string } }
export function generateStaticParams() {
  return [
    { tag: 'css' },
    { tag: 'docker' },
    { tag: 'projectleaning', filename: 'blog.md' },
    { tag: 'projectleaning', filename: 'project-learning.md' },
    { tag: 'projectleaning', filename: 'projectSetting.md' },
    { tag: '_posts', filename: 'clound-push.md' },
    { tag: '_posts', filename: 'Deploy.md' },
    { tag: '_posts', filename: 'hello-world.md' },
    { tag: '_posts', filename: 'project-learning.md' },
    { tag: '_posts', filename: 'projectSetting.md' },
    { tag: '_posts', filename: 'ToolArchiving.md' },
    { tag: '_posts', filename: 'PerformanceOptimization.md' },
    { tag: 'react' },
    { tag: 'vue' }
  ]
}
export async function GET(req: Request, { params }: RouteSegment) {
  // const prev = process.env.NEXT__posts_DOMAIN_ENV === 'dev' ? './_posts/tags' : './tags'

  let filePath = ''
  if (process.env.NODE_ENV === 'development') {
    // filePath = __dirname + `/_posts/tags/${params.tag}/${params.filename}`
    filePath = path.join(process.cwd(), `public/tags/${params.tag}/${params.filename}`)
  } else {
    // filePath = __dirname + `/tags/${params.tag}/${params.filename}`
    filePath = path.join(process.cwd(), `tags/${params.tag}/${params.filename}`)
  }

  const files = await fs.promises.readFile(filePath)
  return NextResponse.json({ app: files.toString() })
}
