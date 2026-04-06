import { NextResponse } from 'next/server'
import crypto from 'crypto'

export async function POST(request) {
  const body = await request.json()
  const { password, timestamp, tags, folder, validateOnly } = body

  if (password !== process.env.UPLOAD_PASSWORD) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  if (validateOnly) {
    return NextResponse.json({ ok: true })
  }

  // Build Cloudinary signature — params sorted alphabetically, appended with API secret
  const params = {}
  if (folder) params.folder = folder
  if (tags) params.tags = tags
  if (timestamp) params.timestamp = timestamp

  const sortedParams = Object.keys(params)
    .sort()
    .map(k => `${k}=${params[k]}`)
    .join('&')

  const toSign = sortedParams + process.env.CLOUDINARY_API_SECRET
  const signature = crypto.createHash('sha1').update(toSign).digest('hex')

  return NextResponse.json({
    signature,
    timestamp,
    apiKey: process.env.CLOUDINARY_API_KEY,
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  })
}
