'use client'

import { useEffect, useRef } from 'react'

// ── All locations sourced directly from page.js ────────────────────────────

const LOCATIONS = {
  golf: [
    {
      name: 'Kingsbarns Golf Links',
      coords: [56.2979, -2.6474],
      desc: 'Day 2 (Mon) · Fife · Links · Par 72 · Tee time 12:40 PM',
    },
    {
      name: 'Eden Course — St Andrews Links',
      coords: [56.3474, -2.8234],
      desc: 'Day 3 (Tue) · St Andrews · Links · Par 70 · Tee time 9:52 AM',
    },
    {
      name: 'Castle Course — St Andrews Links',
      coords: [56.3277, -2.7542],
      desc: 'Day 4 (Wed) · St Andrews · Links · Par 71 · Tee time 9:30 AM · Clifftop views over St Andrews Bay',
    },
    {
      name: 'The Old Course — St Andrews Links',
      coords: [56.3432, -2.8031],
      desc: 'Day 5 (Thu) · St Andrews · Links · Par 72 · The home of golf',
    },
  ],

  hotels: [
    {
      name: 'Hotel du Vin, St Andrews',
      coords: [56.3429, -2.7992],
      desc: 'Days 1–5 · Home base for the trip · 40 The Scores, St Andrews',
    },
    {
      name: 'W Hotel Edinburgh',
      coords: [55.9525, -3.1892],
      desc: 'Day 6 · 1 St Andrew Square, Edinburgh',
    },
  ],

  activities: [
    // St Andrews — from itinerary & St Andrews guide
    {
      name: 'St Andrews Cathedral',
      coords: [56.3394, -2.7940],
      desc: 'St Andrews · Once the largest church in Scotland · Climb St Rule\'s Tower for panoramic views · Free entry',
    },
    {
      name: 'St Andrews Castle',
      coords: [56.3415, -2.7943],
      desc: 'St Andrews · Bottle Dungeon & Siege Mine · 1546 siege tunnel you can walk through',
    },
    {
      name: 'West Sands Beach',
      coords: [56.3466, -2.8132],
      desc: 'St Andrews · Famous Chariots of Fire beach · Massive flat stretch of sand',
    },
    {
      name: 'The Fife Coastal Path',
      coords: [56.3370, -2.7793],
      desc: 'St Andrews · Rugged cliff views toward Maiden Rock · Fresh North Sea air',
    },
    {
      name: 'The Pier Walk',
      coords: [56.3400, -2.7882],
      desc: 'St Andrews Harbour · University student tradition · Great views of the Cathedral from the water',
    },
    {
      name: 'Topping & Company Booksellers',
      coords: [56.3400, -2.7966],
      desc: 'St Andrews · Floor-to-ceiling shelves with rolling ladders · Staff offer tea while you browse',
    },
    {
      name: 'Bouquiniste — Market Street',
      coords: [56.3402, -2.7958],
      desc: 'St Andrews · Tiny second-hand bookshop · Rare editions, old maps, and postcards',
    },
    // Edinburgh — from itinerary & Edinburgh guide
    {
      name: 'Edinburgh Castle',
      coords: [55.9486, -3.1999],
      desc: 'Edinburgh · Perched on Castle Rock · Catch the One O\'Clock Gun (daily except Sundays)',
    },
    {
      name: 'The Royal Mile',
      coords: [55.9497, -3.1888],
      desc: 'Edinburgh · Historic spine from the Castle to Holyroodhouse · Find the Heart of Midlothian mosaic',
    },
    {
      name: "Arthur's Seat",
      coords: [55.9445, -3.1616],
      desc: 'Edinburgh · Extinct volcano · 45–60 min hike · Best 360° views of Edinburgh and the sea',
    },
    {
      name: 'Armchair Books — West Port',
      coords: [55.9468, -3.1970],
      desc: 'Edinburgh · "Nearly alphabetized chaos" of second-hand books · Near the Grassmarket',
    },
    {
      name: "John Kay's Shop — Victoria Street",
      coords: [55.9479, -3.1944],
      desc: 'Edinburgh · Unique prints and Scottish interest books · One of the world\'s most photographed streets',
    },
  ],

  restaurants: [
    // St Andrews — itinerary & St Andrews food guide
    {
      name: 'Fisher & Donaldson — Church Street',
      coords: [56.3403, -2.7971],
      desc: 'St Andrews · Day 1 · Famous fudge doughnut · A St Andrews rite of passage',
    },
    {
      name: 'The Criterion',
      coords: [56.3383, -2.7978],
      desc: 'St Andrews · Day 1 dinner · Pies & pints in a historic cozy pub',
    },
    {
      name: 'North Point Café',
      coords: [56.3413, -2.7924],
      desc: 'St Andrews · Day 2 lunch · Smoked salmon bagels, Scottish pancakes, homemade soups',
    },
    {
      name: 'The Tailend',
      coords: [56.3400, -2.7985],
      desc: 'St Andrews · Day 2 dinner · Authentic fish & chips · Casual fresh seafood',
    },
    {
      name: 'The Cottage Kitchen',
      coords: [56.33995, -2.79635],
      desc: 'St Andrews · Day 3 lunch · Homemade sausage rolls, seasonal tarts, freshly baked scones',
    },
    {
      name: 'The Grange Inn',
      coords: [56.32062, -2.77977],
      desc: 'St Andrews · Day 3 dinner · Seasonal Fife larder menu · Venison, Arbroath smokies, local seafood',
    },
    {
      name: 'The Jigger Inn',
      coords: [56.3467, -2.8094],
      desc: 'St Andrews · Day 4 dinner · Classic 19th-century pub · Cozy fireplace · Steeped in Old Course history',
    },
    {
      name: "Forgan's",
      coords: [56.3401, -2.7975],
      desc: 'St Andrews · Day 5 celebration dinner · Great for groups · Rustic barn atmosphere · Ceilidh nights',
    },
    {
      name: 'Balgrove Larder',
      coords: [56.3497, -2.8245],
      desc: 'Near St Andrews · Farm shop & restaurant · Steak burgers, seasonal produce, great coffee',
    },
    // Edinburgh — itinerary & Edinburgh food guide
    {
      name: 'Oink',
      coords: [55.9480, -3.1936],
      desc: 'Edinburgh · Day 6 lunch · Scottish hog roast rolls with crackling, sage & onion stuffing, or haggis',
    },
    {
      name: "Makar's Mash Bar",
      coords: [55.9497, -3.1942],
      desc: 'Edinburgh · Lunch · Nine varieties of mashed tatties paired with slow-cooked lamb, sausage, or wild boar',
    },
    {
      name: 'The White Hart Inn',
      coords: [55.94750, -3.19680],
      desc: 'Edinburgh · Dinner · Fish & chips, steak pies, and haggis towers in a 500-year-old pub',
    },
    {
      name: 'Howies — Victoria Street',
      coords: [55.94888, -3.19344],
      desc: 'Edinburgh · Day 6 dinner · Seasonal Scottish produce · Glen Lyon venison, Loch Duart salmon, cranachan',
    },
  ],
}

function createIcon(L, emoji, colorClass) {
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

    if (!document.getElementById('leaflet-css')) {
      const link = document.createElement('link')
      link.id = 'leaflet-css'
      link.rel = 'stylesheet'
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
      document.head.appendChild(link)
    }

    function init() {
      const L = window.L
      const map = L.map(containerRef.current, { center: [56.18, -3.0], zoom: 9 })
      mapRef.current = map

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map)

      const icons = {
        golf:        createIcon(L, '⛳', 'marker-golf'),
        hotels:      createIcon(L, '🏨', 'marker-hotel'),
        activities:  createIcon(L, '🏰', 'marker-activity'),
        restaurants: createIcon(L, '🍽', 'marker-restaurant'),
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
        <span className="legend-item"><span className="legend-dot golf" /> Golf Courses</span>
        <span className="legend-item"><span className="legend-dot hotel" /> Hotels</span>
        <span className="legend-item"><span className="legend-dot activity" /> Sightseeing</span>
        <span className="legend-item"><span className="legend-dot restaurant" /> Restaurants &amp; Dining</span>
      </div>
      <div ref={containerRef} id="trip-map" />
    </div>
  )
}
