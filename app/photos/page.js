import cloudinary from 'cloudinary'

const cld = cloudinary.v2
cld.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

const TAGS = [
  { id: null, label: 'All Photos' },
  { id: 'st-andrews', label: 'St Andrews' },
  { id: 'kingsbarns', label: 'Kingsbarns' },
  { id: 'carnoustie', label: 'Carnoustie' },
  { id: 'royal-troon', label: 'Royal Troon' },
  { id: 'turnberry', label: 'Turnberry' },
  { id: 'north-berwick', label: 'North Berwick' },
  { id: 'haggs-castle', label: 'Haggs Castle' },
  { id: 'edinburgh', label: 'Edinburgh' },
  { id: 'birds', label: 'Birds & Wildlife' },
  { id: 'food', label: 'Food & Drink' },
  { id: 'scenery', label: 'Scenery' },
  { id: 'people', label: 'People' },
]

export const dynamic = 'force-dynamic'

async function getPhotos(tag) {
  try {
    if (tag) {
      const result = await cld.api.resources_by_tag(tag, {
        max_results: 200,
        tags: true,
        resource_type: 'image',
      })
      return result.resources || []
    } else {
      const result = await cld.api.resources({
        type: 'upload',
        prefix: 'scotland2026/',
        max_results: 200,
        tags: true,
        resource_type: 'image',
      })
      return result.resources || []
    }
  } catch {
    return []
  }
}

export default async function PhotosPage({ searchParams }) {
  const params = await searchParams
  const currentTag = params.tag || null
  const photos = await getPhotos(currentTag)

  return (
    <main className="photos-page">
      <div className="photos-hero">
        <h1 className="photos-hero-title">Trip Photos</h1>
        <p className="photos-hero-sub">
          {photos.length} photo{photos.length !== 1 ? 's' : ''}
          {currentTag ? ` tagged "${TAGS.find(t => t.id === currentTag)?.label || currentTag}"` : ''}
        </p>
      </div>

      <div className="photos-container">
        <div className="tag-filter">
          {TAGS.map(tag => (
            <a
              key={tag.id || 'all'}
              href={tag.id ? `/photos?tag=${tag.id}` : '/photos'}
              className={`filter-btn ${currentTag === tag.id ? 'filter-btn-active' : ''}`}
            >
              {tag.label}
            </a>
          ))}
        </div>

        {photos.length === 0 ? (
          <div className="photos-empty">
            <p>No photos yet &mdash; check back during the trip!</p>
          </div>
        ) : (
          <div className="photo-grid">
            {photos.map(photo => {
              const thumb = photo.secure_url.replace(
                '/upload/',
                '/upload/w_400,h_400,c_fill,q_auto,f_auto/'
              )
              return (
                <a
                  key={photo.public_id}
                  href={photo.secure_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="photo-card"
                >
                  <img src={thumb} alt="" loading="lazy" />
                </a>
              )
            })}
          </div>
        )}
      </div>
    </main>
  )
}
