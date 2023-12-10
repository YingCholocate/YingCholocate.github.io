import { NextRequest, NextResponse } from 'next/server'
import * as fs from 'fs'
import path from 'path'
export function generateStaticParams() {
  return [
    { folder: 'css' },
    { folder: 'docker' },
    { folder: 'projectleaning' },
    { folder: 'public' },
    { folder: '_posts' },
    { folder: 'react' },
    { folder: 'vue' }
  ]
}
type RouteSegment = { params: { folder: string } }
export const dynamic = 'force-static'
export async function GET(req: NextRequest, { params }: RouteSegment) {
  // 遍历文件夹获取tag值，路径在public下,build之后是在.next文件夹下的
  let filePath = ''

  if (process.env.NODE_ENV === 'development') {
    // filePath = __dirname + `/public/tags/${params.folder}`
    filePath = path.join(process.cwd(), `public/tags/${params.folder}`)
  } else {
    // filePath = __dirname + `/tags/${params.folder}`
    filePath = path.join(process.cwd(), `public/tags/${params.folder}`)
  }

  const files = await fs.promises.readdir(filePath)

  return NextResponse.json({ app: files })
}
