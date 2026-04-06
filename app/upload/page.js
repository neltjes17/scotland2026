'use client'

import { useState, useRef } from 'react'

const TAGS = [
  { id: 'st-andrews', label: 'St Andrews' },
  { id: 'kingsbarns', label: 'Kingsbarns' },
  { id: 'eden-course', label: 'Eden Course' },
  { id: 'castle-course', label: 'Castle Course' },
  { id: 'old-course', label: 'Old Course' },
  { id: 'edinburgh', label: 'Edinburgh' },
  { id: 'birds', label: 'Birds & Wildlife' },
  { id: 'food', label: 'Food' },
  { id: 'scenery', label: 'Scenery' },
  { id: 'people', label: 'People' },
]

export default function UploadPage() {
  const [authenticated, setAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [selectedTags, setSelectedTags] = useState([])
  const [files, setFiles] = useState([])
  const [uploading, setUploading] = useState(false)
  const [progress, setProgress] = useState('')
  const [results, setResults] = useState([])
  const fileRef = useRef()

  const handlePasswordSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/sign-upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password, validateOnly: true }),
      })
      if (res.ok) {
        setAuthenticated(true)
        setPasswordError('')
      } else {
        setPasswordError('Incorrect password. Try again.')
      }
    } catch {
      setPasswordError('Something went wrong. Try again.')
    }
  }

  const toggleTag = (id) => {
    setSelectedTags(prev =>
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    )
  }

  const handleUpload = async () => {
    if (!files.length || !selectedTags.length) return

    setUploading(true)
    setResults([])
    const uploadResults = []

    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      setProgress(`Uploading ${i + 1} of ${files.length}: ${file.name}`)

      try {
        const timestamp = Math.round(Date.now() / 1000)
        const tags = selectedTags.join(',')

        const sigRes = await fetch('/api/sign-upload', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ password, timestamp, tags, folder: 'scotland2026' }),
        })

        if (!sigRes.ok) {
          uploadResults.push({ name: file.name, success: false, error: 'Auth failed' })
          continue
        }

        const { signature, apiKey, cloudName } = await sigRes.json()

        const formData = new FormData()
        formData.append('file', file)
        formData.append('api_key', apiKey)
        formData.append('timestamp', timestamp)
        formData.append('signature', signature)
        formData.append('folder', 'scotland2026')
        formData.append('tags', tags)

        const uploadRes = await fetch(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          { method: 'POST', body: formData }
        )

        if (uploadRes.ok) {
          uploadResults.push({ name: file.name, success: true })
        } else {
          const err = await uploadRes.json()
          uploadResults.push({ name: file.name, success: false, error: err.error?.message || 'Upload failed' })
        }
      } catch (err) {
        uploadResults.push({ name: file.name, success: false, error: err.message })
      }
    }

    setResults(uploadResults)
    setUploading(false)
    setProgress('')
    setFiles([])
    if (fileRef.current) fileRef.current.value = ''
  }

  if (!authenticated) {
    return (
      <main className="upload-page">
        <div className="upload-auth-card">
          <h1>Photo Upload</h1>
          <p>Enter the upload password to continue.</p>
          <form onSubmit={handlePasswordSubmit} className="auth-form">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="auth-input"
              autoFocus
            />
            {passwordError && <p className="auth-error">{passwordError}</p>}
            <button type="submit" className="btn-primary">Continue</button>
          </form>
        </div>
      </main>
    )
  }

  const successCount = results.filter(r => r.success).length
  const failCount = results.filter(r => !r.success).length

  return (
    <main className="upload-page">
      <div className="upload-container">
        <h1 className="upload-title">Upload Photos</h1>

        <div className="upload-section">
          <h2 className="upload-section-title">1. Select Photos</h2>
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => setFiles(Array.from(e.target.files))}
            className="file-input"
          />
          {files.length > 0 && (
            <p className="file-count">
              {files.length} photo{files.length !== 1 ? 's' : ''} selected
            </p>
          )}
        </div>

        <div className="upload-section">
          <h2 className="upload-section-title">2. Tag Photos</h2>
          <p className="upload-hint">Select all categories that apply to these photos</p>
          <div className="tag-grid">
            {TAGS.map(tag => (
              <button
                key={tag.id}
                type="button"
                onClick={() => toggleTag(tag.id)}
                className={`tag-btn ${selectedTags.includes(tag.id) ? 'tag-btn-active' : ''}`}
              >
                {tag.label}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleUpload}
          disabled={uploading || !files.length || !selectedTags.length}
          className="btn-primary"
        >
          {uploading
            ? progress
            : `Upload ${files.length || ''} Photo${files.length !== 1 ? 's' : ''}`
          }
        </button>

        {results.length > 0 && (
          <div className="upload-results">
            <h2 className="upload-section-title">
              Results &mdash; {successCount} uploaded{failCount > 0 ? `, ${failCount} failed` : ''}
            </h2>
            {results.map((r, i) => (
              <div key={i} className={`result-item ${r.success ? 'result-success' : 'result-error'}`}>
                <span>{r.name}</span>
                <span>{r.success ? 'Uploaded' : r.error}</span>
              </div>
            ))}
            <a href="/photos" className="btn-primary" style={{ textDecoration: 'none', textAlign: 'center', marginTop: '1rem', display: 'block' }}>
              View Gallery
            </a>
          </div>
        )}
      </div>
    </main>
  )
}
