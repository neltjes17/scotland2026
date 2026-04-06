'use client'

import { useEffect, useRef } from 'react'

const LOCATIONS = {
  golf: [
    { name: 'North Berwick West Links', coords: [56.059, -2.719], desc: 'Day 2 · East Lothian · Links · Par 71' },
    { name: 'The Old Course, St Andrews', coords: [56.343, -2.803], desc: 'Day 3 · Fife · Links · Par 72 · Home of Golf' },
    { name: 'Carnoustie Championship Course', coords: [56.502, -2.717], desc: 'Day 4 · Angus · Links · Par 72 · "Car-nasty"' },
    { name: 'Kingsbarns Golf Links', coords: [56.277, -2.662], desc: 'Day 5 · Fife · Links · Par 72 · Clifftop sea views' },
    { name: 'Royal Troon Old Course', coords: [55.542, -4.667], desc: 'Day 6 · Ayrshire · Links · Par 71 · Open Championship venue' },
    { name: 'Trump Turnberry — Ailsa Course', coords: [55.318, -4.844], desc: 'Day 7 · Ayrshire · Links · Par 70 · The Crown Jewel' },
    { name: 'Haggs Castle Golf Club', coords: [55.827, -4.306], desc: 'Day 8 · Glasgow · Parkland · Par 72' },
  ],
  hotels: [
    { name: 'Hotel du Vin, St Andrews', coords: [56.340, -2.797], desc: 'Days 1–5 · Home base for the trip' },
    { name: 'W Hotel Edinburgh', coords: [55.953, -3.188], desc: 'Day 7 · Check in before return flight' },
  ],
  activities: [
    { name: 'St Andrews Cathedral', coords: [56.339, -2.793], desc: 'Day 1 · Ruins of Scotland\'s largest medieval church' },
    { name: 'Fife Coastal Path', coords: [56.335, -2.785], desc: 'Day 1 · Rugged cliff walks with North Sea views' },
    { name: 'Dirleton Castle', coords: [56.041, -2.776], desc: 'Day 2 · 13th-century castle ruin · East Lothian' },
    { name: 'Stirling Castle', coords: [56.124, -3.947], desc: 'Day 5 · En route from Fife to Ayrshire' },
    { name: 'Culzean Castle', coords: [55.352, -4.790], desc: 'Day 6 · Clifftop castle · Isle of Arran views' },
    { name: 'Edinburgh Castle', coords: [55.948, -3.200], desc: 'Day 7 · Perched on Castle Rock' },
    { name: 'Arthur\'s Seat', coords: [55.944, -3.162], desc: 'Day 7 · Extinct volcano · 360° views of Edinburgh' },
    { name: 'The Royal Mile', coords: [55.950, -3.190], desc: 'Day 7 · Historic spine of the Old Town' },
  ],
  restaurants: [
    { name: 'Fisher & Donaldson', coords: [56.341, -2.800], desc: 'Day 1 · St Andrews · Famous fudge doughnuts' },
    { name: 'The Criterion', coords: [56.340, -2.796], desc: 'Day 1 · Welcome dinner · Pies & pints' },
    { name: 'North Berwick Golf Club Clubhouse', coords: [56.060, -2.716], desc: 'Day 2 · Lunch with Firth of Forth views' },
    { name: 'The Grange Inn', coords: [56.338, -2.778], desc: 'Day 3 · Dinner · St Andrews' },
    { name: 'R&A Clubhouse, St Andrews', coords: [56.344, -2.802], desc: 'Day 3 · Post-round lunch' },
    { name: 'Carnoustie Golf Hotel', coords: [56.503, -2.718], desc: 'Day 4 · Lunch' },
    { name: 'North Point Café', coords: [56.277, -2.662], desc: 'Day 5 · Lunch after Kingsbarns' },
    { name: 'The Grand Tea Room, Turnberry', coords: [55.319, -4.843], desc: 'Day 7 · Lunch at Turnberry Hotel' },
    { name: 'Oink — Edinburgh', coords: [55.951, -3.192], desc: 'Day 7 · Lunch · Hog roast rolls' },
    { name: 'The White Hart Inn', coords: [55.948, -3.193], desc: 'Day 7 · Dinner · 500-year-old pub' },
  ],
}

function createMarker(L, emoji, colorClass) {
  return L.divIcon({
    html: `<div class="map-marker ${colorClass}">${emoji}</div>`,
    className: '',
    iconSize: [38, 38],
    iconAnchor: [19, 19],
    popupAnchor: [0, -22],
  })
}

export default function MapClient() {
  const containerRef = useRef(null)
  const mapRef = useRef(null)

  useEffect(() => {
    if (mapRef.current || !containerRef.current) return

    // Inject Leaflet CSS
    if (!document.getElementById('leaflet-css')) {
      const link = document.createElement('link')
      link.id = 'leaflet-css'
      link.rel = 'stylesheet'
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
      document.head.appendChild(link)
    }

    function init() {
      const L = window.L
      const map = L.map(containerRef.current, { center: [56.05, -3.9], zoom: 7 })
      mapRef.current = map

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map)

      const icons = {
        golf:       createMarker(L, '⛳', 'marker-golf'),
        hotels:     createMarker(L, '🏨', 'marker-hotel'),
        activities: createMarker(L, '🏰', 'marker-activity'),
        restaurants: createMarker(L, '🍽', 'marker-restaurant'),
      }

      Object.entries(LOCATIONS).forEach(([category, places]) => {
        places.forEach(({ name, coords, desc }) => {
          L.marker(coords, { icon: icons[category] })
            .addTo(map)
            .bindPopup(`<strong>${name}</strong><br><em>${desc}</em>`)
        })
      })
    }

    if (window.L) {
      init()
    } else {
      const script = document.createElement('script')
      script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
      script.onload = init
      document.head.appendChild(script)
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove()
        mapRef.current = null
      }
    }
  }, [])

  return (
    <div className="map-tab-panel">
      <div className="map-legend">
        <span className="legend-item"><span className="legend-dot golf" />  Golf Courses</span>
        <span className="legend-item"><span className="legend-dot hotel" />  Hotels</span>
        <span className="legend-item"><span className="legend-dot activity" />  Sightseeing</span>
        <span className="legend-item"><span className="legend-dot restaurant" />  Restaurants &amp; Dining</span>
      </div>
      <div ref={containerRef} id="trip-map" />
    </div>
  )
}
