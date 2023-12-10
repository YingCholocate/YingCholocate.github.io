import { NextResponse } from 'next/server'
import * as fs from 'fs'
import path from 'path'

export async function GET() {
  // 遍历文件夹获取tag值，路径在public下,build之后是在.next文件夹下的
  // const prev = process.env.NEXT_PUBLIC_DOMAIN_ENV === 'dev' ? './public/tags' : './tags'

  let filePath = ''
  if (process.env.NODE_ENV === 'development') {
    filePath = path.join(process.cwd(), 'public/tags')

    // filePath = './public/tags'
  } else {
    filePath = path.join(process.cwd(), 'tags')
    // filePath = 'tags'
  }
  console.log('filePath', filePath)
  try {
    const files = await fs.promises.readdir(filePath)
    return NextResponse.json({ app: files })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: error, success: false })
  }
}
