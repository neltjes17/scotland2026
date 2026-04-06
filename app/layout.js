import './globals.css'

export const metadata = {
  title: 'Scotland Golf Trip 2026',
  description: "The trip of a lifetime — 7 rounds across Scotland's finest links",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="site-nav">
          <a href="/" className="nav-brand">&#9971; Scotland 2026</a>
          <div className="nav-links">
            <a href="/" className="nav-link">Itinerary</a>
            <a href="/photos" className="nav-link">Photos</a>
            <a href="/upload" className="nav-link nav-link-upload">Upload</a>
          </div>
        </nav>
        {children}
        <footer className="site-footer">
          <p>Scotland Golf Trip 2026 &nbsp;&middot;&nbsp; <em>May your drives be long and your putts be true.</em></p>
        </footer>
      </body>
    </html>
  )
}
