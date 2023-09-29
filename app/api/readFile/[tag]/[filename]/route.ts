import { NextResponse } from 'next/server'
import fs from 'fs'
type RouteSegment = { params: { filename: string; tag: string } }
export async function GET(req: Request, { params }: RouteSegment) {
  const files = await fs.promises.readFile(`./source/${params.tag}/${params.filename}`)
  return NextResponse.json({ app: files.toString() })
}
