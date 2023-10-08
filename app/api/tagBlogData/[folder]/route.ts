import { NextResponse } from 'next/server'
import * as fs from 'fs'
type RouteSegment = { params: { folder: string } }
export async function GET(req: Request, { params }: RouteSegment) {
  // 遍历文件夹获取tag值，路径在public下,build之后是在.next文件夹下的

  const files = await fs.promises.readdir(`./source/${params.folder}`)

  return NextResponse.json({ app: files })
}
