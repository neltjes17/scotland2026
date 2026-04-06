'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'

const TripMap = dynamic(() => import('./map/MapClient'), { ssr: false })

export default function HomePage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('itinerary')
  const [activeSaTab, setActiveSaTab] = useState('food')
  const [activeEdinTab, setActiveEdinTab] = useState('food')

  const handleTabClick = (tab) => {
    if (tab === 'gallery') {
      router.push('/photos')
    } else {
      setActiveTab(tab)
    }
  }

  return (
    <>
      <header className="hero">
        <div className="hero-content">
          <p className="hero-subtitle">The Trip of a Lifetime</p>
          <h1 className="hero-title">Scotland Golf 2026</h1>
          <p className="hero-dates">April 11 &ndash; April 18, 2026</p>
        </div>
      </header>

      <nav className="tab-nav">
        <div className="tab-nav-inner">
          {[
            { id: 'itinerary', label: 'Itinerary' },
            { id: 'courses', label: 'Courses at a Glance' },
            { id: 'standrews', label: 'St. Andrews' },
            { id: 'edinburgh', label: 'Edinburgh' },
            { id: 'gallery', label: 'Photos' },
            { id: 'map', label: 'Map' },
          ].map(tab => (
            <button
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      <main className="container">

        {/* ── Itinerary Tab ── */}
        <div className={`tab-panel ${activeTab === 'itinerary' ? 'active' : ''}`}>
          <section className="itinerary">
            <h2 className="section-title">Day by Day</h2>

            {/* Travel Day */}
            <div className="day-card travel-day">
              <div className="day-header">
                <div className="day-badge">Travel</div>
                <div className="day-meta">
                  <h3 className="day-title">Departure &mdash; DSM to Edinburgh</h3>
                  <p className="day-date">Saturday, April 11 &rarr; Sunday, April 12, 2026</p>
                </div>
                <div className="day-location">
                  <span className="location-pin">&#128205;</span> DSM &middot; ORD &middot; LHR &middot; EDI
                </div>
              </div>
              <div className="day-body">
                <ul className="day-activities">
                  <li className="activity travel">
                    <span className="activity-icon">&#9992;</span>
                    <div>
                      <strong>AA 4114 &mdash; Des Moines (DSM) &rarr; Chicago O&apos;Hare (ORD)</strong>
                      <p>Departs 2:16 PM &middot; Arrives 3:59 PM &middot; 1h 43m &middot; American Eagle &middot; Basic Economy</p>
                    </div>
                  </li>
                  <li className="activity travel">
                    <span className="activity-icon">&#8987;</span>
                    <div>
                      <strong>Layover at Chicago O&apos;Hare (ORD)</strong>
                      <p>3h 06m connection &mdash; long connection</p>
                    </div>
                  </li>
                  <li className="activity travel">
                    <span className="activity-icon">&#9992;</span>
                    <div>
                      <strong>BA 298 &mdash; Chicago O&apos;Hare (ORD) &rarr; London Heathrow (LHR)</strong>
                      <p>Departs 7:05 PM &middot; Arrives 9:05 AM +1 &middot; 8h 00m &middot; British Airways &middot; Overnight &middot; Confirmation: A466Y6 &middot; ETA: 2021-2509-0628-9551</p>
                    </div>
                  </li>
                  <li className="activity travel">
                    <span className="activity-icon">&#8987;</span>
                    <div>
                      <strong>Layover at London Heathrow (LHR)</strong>
                      <p>2h 40m connection &middot; UK ETA: 2021-2509-0628-9551</p>
                    </div>
                  </li>
                  <li className="activity travel">
                    <span className="activity-icon">&#9992;</span>
                    <div>
                      <strong>BA 1444 &mdash; London Heathrow (LHR) &rarr; Edinburgh (EDI)</strong>
                      <p>Departs 11:45 AM &middot; Arrives 1:10 PM &middot; 1h 25m &middot; British Airways &middot; Confirmation: A466Y6</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Day 1 */}
            <div className="day-card">
              <div className="day-header">
                <div className="day-badge">Day 1</div>
                <div className="day-meta">
                  <h3 className="day-title">Arrival &mdash; Drive to St Andrews</h3>
                  <p className="day-date">Sunday, April 12, 2026</p>
                </div>
                <div className="day-location">
                  <span className="location-pin">&#128205;</span> St Andrews, Fife
                </div>
              </div>
              <div className="day-body">
                <ul className="day-activities">
                  <li className="activity travel">
                    <span className="activity-icon">&#128663;</span>
                    <div>
                      <strong>Arrive Edinburgh (EDI) &middot; Pick up rental car &middot; Drive to St Andrews</strong>
                      <p>Total travel time: 16h 54m &middot; ~1h 15m drive to St Andrews</p>
                    </div>
                  </li>
                  <li className="activity hotel">
                    <span className="activity-icon">&#127968;</span>
                    <div>
                      <strong>Check in &mdash; <a href="https://www.hotelduvin.com/locations/st-andrews/" target="_blank" rel="noopener">Hotel du Vin, St Andrews</a></strong>
                      <p>Home base for the trip &middot; Staying through Thursday</p>
                    </div>
                  </li>
                  <li className="activity food">
                    <span className="activity-icon">&#127869;</span>
                    <div>
                      <strong>Fisher &amp; Donaldson &mdash; Church Street</strong>
                      <p>St Andrews rite of passage &middot; Grab a famous fudge doughnut</p>
                    </div>
                  </li>
                  <li className="activity sightseeing">
                    <span className="activity-icon">&#127964;</span>
                    <div>
                      <strong>St. Andrews Cathedral</strong>
                      <p>Once the largest church in Scotland &middot; Hauntingly beautiful ruins &middot; Climb St. Rule&apos;s Tower for a panoramic view &middot; Grounds open and free</p>
                    </div>
                  </li>
                  <li className="activity sightseeing">
                    <span className="activity-icon">&#127754;</span>
                    <div>
                      <strong>The Fife Coastal Path</strong>
                      <p>The stretch from St. Andrews toward Maiden Rock offers rugged cliff views and fresh North Sea air</p>
                    </div>
                  </li>
                  <li className="activity food">
                    <span className="activity-icon">&#127869;</span>
                    <div>
                      <strong>Welcome Dinner &mdash; The Criterion</strong>
                      <p>Pies &amp; pints in a historic cozy pub &mdash; perfect after a long travel day</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Day 2 */}
            <div className="day-card">
              <div className="day-header">
                <div className="day-badge">Day 2</div>
                <div className="day-meta">
                  <h3 className="day-title">Kingsbarns</h3>
                  <p className="day-date">Monday, April 13, 2026</p>
                </div>
                <div className="day-location">
                  <span className="location-pin">&#128205;</span> Fife
                </div>
              </div>
              <div className="day-body">
                <ul className="day-activities">
                  <li className="activity golf">
                    <img className="activity-thumb" src="https://images.squarespace-cdn.com/content/v1/6710e3464bdab217a2de96d7/764d4a70-dca6-40c2-93e0-f8044f44456c/Kingsbarns+Clubhouse+%26+Gorse.jpg" alt="Kingsbarns Golf Links" />
                    <div>
                      <strong><a href="https://www.kingsbarns.com/" target="_blank" rel="noopener">Kingsbarns Golf Links</a></strong>
                      <p>Tee time 12:40 PM &middot; Stunning clifftop links with sea views &middot; Par 72</p>
                    </div>
                  </li>
                  <li className="activity food">
                    <span className="activity-icon">&#127869;</span>
                    <div>
                      <strong>Lunch &mdash; North Point Caf&eacute;</strong>
                      <p>Smoked salmon bagels, Scottish pancakes, and hearty homemade soups</p>
                    </div>
                  </li>
                  <li className="activity hotel">
                    <span className="activity-icon">&#127968;</span>
                    <div>
                      <strong>Return to <a href="https://www.hotelduvin.com/locations/st-andrews/" target="_blank" rel="noopener">Hotel du Vin, St Andrews</a></strong>
                      <p>~15 min drive</p>
                    </div>
                  </li>
                  <li className="activity food">
                    <span className="activity-icon">&#127869;</span>
                    <div>
                      <strong>Dinner &mdash; The Tailend</strong>
                      <p>Authentic fish &amp; chips &middot; Casual fresh seafood in the heart of St Andrews</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Day 3 */}
            <div className="day-card">
              <div className="day-header">
                <div className="day-badge">Day 3</div>
                <div className="day-meta">
                  <h3 className="day-title">Eden Course</h3>
                  <p className="day-date">Tuesday, April 14, 2026</p>
                </div>
                <div className="day-location">
                  <span className="location-pin">&#128205;</span> St Andrews, Fife
                </div>
              </div>
              <div className="day-body">
                <ul className="day-activities">
                  <li className="activity golf">
                    <img className="activity-thumb" src="https://d23jngptvnttd7.cloudfront.net/2023/07/04142559/Fife_St-Andrews-Eden_Eden-Select__01.jpg" alt="Eden Course, St Andrews" />
                    <div>
                      <strong><a href="https://standrews.com/golf/courses/eden-course" target="_blank" rel="noopener">Eden Course &mdash; St Andrews Links</a></strong>
                      <p>Tee time 9:52 AM &middot; Scenic parkland-style links &middot; Par 70</p>
                    </div>
                  </li>
                  <li className="activity food">
                    <span className="activity-icon">&#127869;</span>
                    <div>
                      <strong>Lunch &mdash; The Cottage Kitchen</strong>
                      <p>Massive homemade sausage rolls, seasonal tarts, and freshly baked scones</p>
                    </div>
                  </li>
                  <li className="activity hotel">
                    <span className="activity-icon">&#127968;</span>
                    <div>
                      <strong>Return to <a href="https://www.hotelduvin.com/locations/st-andrews/" target="_blank" rel="noopener">Hotel du Vin, St Andrews</a></strong>
                    </div>
                  </li>
                  <li className="activity food">
                    <span className="activity-icon">&#127869;</span>
                    <div>
                      <strong>Dinner &mdash; The Grange Inn</strong>
                      <p>Seasonal Fife larder menu &middot; Roasted loin of venison, fresh Arbroath smokies, and local seafood</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Day 4 */}
            <div className="day-card">
              <div className="day-header">
                <div className="day-badge">Day 4</div>
                <div className="day-meta">
                  <h3 className="day-title">Castle Course</h3>
                  <p className="day-date">Wednesday, April 15, 2026</p>
                </div>
                <div className="day-location">
                  <span className="location-pin">&#128205;</span> St Andrews, Fife
                </div>
              </div>
              <div className="day-body">
                <ul className="day-activities">
                  <li className="activity golf">
                    <img className="activity-thumb" src="https://cdn.prod.website-files.com/6818ac255d9368ac975e4a9c/683052dd125541eb1bbe5f90_St_Andrews_Castle_course_0544.jpg" alt="Castle Course, St Andrews" />
                    <div>
                      <strong><a href="https://www.standrews.com/golf/courses/the-castle-course" target="_blank" rel="noopener">Castle Course &mdash; St Andrews Links</a></strong>
                      <p>Tee time 9:30 AM &middot; Clifftop views over St Andrews Bay &middot; Par 71</p>
                    </div>
                  </li>
                  <li className="activity hotel">
                    <span className="activity-icon">&#127968;</span>
                    <div>
                      <strong>Return to <a href="https://www.hotelduvin.com/locations/st-andrews/" target="_blank" rel="noopener">Hotel du Vin, St Andrews</a></strong>
                    </div>
                  </li>
                  <li className="activity food">
                    <span className="activity-icon">&#127869;</span>
                    <div>
                      <strong>Dinner &mdash; The Jigger Inn</strong>
                      <p>Classic 19th-century pub &middot; Cozy fireplace &middot; Steeped in Old Course history</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Day 5 */}
            <div className="day-card highlight">
              <div className="day-header">
                <div className="day-badge special">Day 5</div>
                <div className="day-meta">
                  <h3 className="day-title">The Old Course</h3>
                  <p className="day-date">Thursday, April 16, 2026</p>
                </div>
                <div className="day-location">
                  <span className="location-pin">&#128205;</span> St Andrews, Fife
                </div>
              </div>
              <div className="day-body">
                <div className="highlight-banner">&#127942; Bucket List Round</div>
                <ul className="day-activities">
                  <li className="activity golf">
                    <img className="activity-thumb" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/31/5e/34/welcome-to-the-old-course.jpg?w=900&h=500&s=1" alt="The Old Course, St Andrews" />
                    <div>
                      <strong><a href="https://standrews.com/golf/courses/old-course" target="_blank" rel="noopener">The Old Course &mdash; St Andrews Links</a></strong>
                      <p>Tee time TBD &middot; The home of golf &middot; Par 72</p>
                    </div>
                  </li>
                  <li className="activity hotel">
                    <span className="activity-icon">&#127968;</span>
                    <div>
                      <strong>Return to <a href="https://www.hotelduvin.com/locations/st-andrews/" target="_blank" rel="noopener">Hotel du Vin, St Andrews</a></strong>
                      <p>Last night in St Andrews &mdash; check out tomorrow</p>
                    </div>
                  </li>
                  <li className="activity food">
                    <span className="activity-icon">&#127869;</span>
                    <div>
                      <strong>Celebration Dinner &mdash; Forgan&apos;s</strong>
                      <p>Last night in St Andrews &middot; Great for groups &middot; Rustic barn atmosphere &middot; Known for Ceilidh nights</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Day 6 */}
            <div className="day-card">
              <div className="day-header">
                <div className="day-badge">Day 6</div>
                <div className="day-meta">
                  <h3 className="day-title">Drive to Edinburgh</h3>
                  <p className="day-date">Friday, April 17, 2026</p>
                </div>
                <div className="day-location">
                  <span className="location-pin">&#128205;</span> St Andrews &rarr; Edinburgh
                </div>
              </div>
              <div className="day-body">
                <ul className="day-activities">
                  <li className="activity travel">
                    <span className="activity-icon">&#128663;</span>
                    <div>
                      <strong>Check out of Hotel du Vin &middot; Drive to Edinburgh</strong>
                      <p>~1h 15m &middot; Easy morning drive</p>
                    </div>
                  </li>
                  <li className="activity hotel">
                    <span className="activity-icon">&#127968;</span>
                    <div>
                      <strong>Check in &mdash; <a href="https://www.marriott.com/en-us/hotels/ediwh-w-edinburgh/photos/" target="_blank" rel="noopener">W Hotel Edinburgh</a></strong>
                    </div>
                  </li>
                  <li className="activity food">
                    <span className="activity-icon">&#127869;</span>
                    <div>
                      <strong>Lunch &mdash; Oink</strong>
                      <p>Traditional Scottish hog roast rolls with crackling, sage &amp; onion stuffing, or haggis</p>
                    </div>
                  </li>
                  <li className="activity sightseeing">
                    <span className="activity-icon">&#127964;</span>
                    <div>
                      <strong>Edinburgh Castle</strong>
                      <p>Perched on Castle Rock &middot; Try to catch the One O&apos;Clock Gun (fired daily except Sundays)</p>
                    </div>
                  </li>
                  <li className="activity sightseeing">
                    <span className="activity-icon">&#128218;</span>
                    <div>
                      <strong>Armchair Books &mdash; West Port</strong>
                      <p>&ldquo;Nearly alphabetized chaos&rdquo; of second-hand books &middot; Perfect stop near the Grassmarket after the Castle</p>
                    </div>
                  </li>
                  <li className="activity food">
                    <span className="activity-icon">&#127869;</span>
                    <div>
                      <strong>Dinner &mdash; Howies (Victoria Street)</strong>
                      <p>Seasonal Scottish produce &middot; Glen Lyon venison, Loch Duart salmon, cranachan for dessert</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Return */}
            <div className="day-card travel-day">
              <div className="day-header">
                <div className="day-badge">Return</div>
                <div className="day-meta">
                  <h3 className="day-title">Departure &mdash; Edinburgh to Des Moines</h3>
                  <p className="day-date">Saturday, April 18, 2026</p>
                </div>
                <div className="day-location">
                  <span className="location-pin">&#128205;</span> EDI &middot; JFK &middot; ORD &middot; DSM
                </div>
              </div>
              <div className="day-body">
                <ul className="day-activities">
                  <li className="activity travel">
                    <span className="activity-icon">&#9992;</span>
                    <div>
                      <strong>AA 83 &mdash; Edinburgh (EDI) &rarr; New York JFK</strong>
                      <p>Departs 10:30 AM &middot; Arrives 1:11 PM &middot; 7h 41m &middot; American Airlines &middot; Basic Economy</p>
                    </div>
                  </li>
                  <li className="activity travel">
                    <span className="activity-icon">&#8987;</span>
                    <div>
                      <strong>Layover at New York JFK</strong>
                      <p>1h 48m connection</p>
                    </div>
                  </li>
                  <li className="activity travel">
                    <span className="activity-icon">&#9992;</span>
                    <div>
                      <strong>AA 4470 &mdash; New York JFK &rarr; Chicago O&apos;Hare (ORD)</strong>
                      <p>Departs 2:59 PM &middot; Arrives 5:04 PM &middot; 3h 05m &middot; Republic Airways (American Eagle) &middot; Basic Economy</p>
                    </div>
                  </li>
                  <li className="activity travel">
                    <span className="activity-icon">&#8987;</span>
                    <div>
                      <strong>Layover at Chicago O&apos;Hare (ORD)</strong>
                      <p>53m connection &mdash; short connection, be prompt!</p>
                    </div>
                  </li>
                  <li className="activity travel">
                    <span className="activity-icon">&#9992;</span>
                    <div>
                      <strong>AA 4121 &mdash; Chicago O&apos;Hare (ORD) &rarr; Des Moines (DSM)</strong>
                      <p>Departs 5:57 PM &middot; Arrives 7:33 PM &middot; 1h 36m &middot; Envoy Air (American Eagle) &middot; Basic Economy</p>
                    </div>
                  </li>
                  <li className="activity travel">
                    <span className="activity-icon">&#127968;</span>
                    <div>
                      <strong>Home! Total travel time: 15h 03m</strong>
                      <p>Until next time, Scotland.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

          </section>
        </div>

        {/* ── Courses Tab ── */}
        <div className={`tab-panel ${activeTab === 'courses' ? 'active' : ''}`}>
          <section className="courses-summary">
            <h2 className="section-title">Courses at a Glance</h2>
            <div className="courses-grid">
              <div className="course-card">
                <img className="course-img" src="https://images.squarespace-cdn.com/content/v1/6710e3464bdab217a2de96d7/764d4a70-dca6-40c2-93e0-f8044f44456c/Kingsbarns+Clubhouse+%26+Gorse.jpg" alt="Kingsbarns Golf Links" />
                <div className="course-card-body">
                  <div className="course-rank">Mon</div>
                  <div className="course-info">
                    <h4><a href="https://www.kingsbarns.com/" target="_blank" rel="noopener">Kingsbarns Golf Links</a></h4>
                    <p>Fife &middot; Links &middot; Par 72 &middot; Tee time 9:50 AM</p>
                  </div>
                </div>
              </div>
              <div className="course-card">
                <img className="course-img" src="https://d23jngptvnttd7.cloudfront.net/2023/07/04142559/Fife_St-Andrews-Eden_Eden-Select__01.jpg" alt="Eden Course, St Andrews" />
                <div className="course-card-body">
                  <div className="course-rank">Tue</div>
                  <div className="course-info">
                    <h4><a href="https://standrews.com/golf/courses/eden-course" target="_blank" rel="noopener">Eden Course &mdash; St Andrews Links</a></h4>
                    <p>Fife &middot; Links &middot; Par 70 &middot; Tee time 9:52 AM</p>
                  </div>
                </div>
              </div>
              <div className="course-card">
                <img className="course-img" src="https://cdn.prod.website-files.com/6818ac255d9368ac975e4a9c/683052dd125541eb1bbe5f90_St_Andrews_Castle_course_0544.jpg" alt="Castle Course, St Andrews" />
                <div className="course-card-body">
                  <div className="course-rank">Wed</div>
                  <div className="course-info">
                    <h4><a href="https://www.standrews.com/golf/courses/the-castle-course" target="_blank" rel="noopener">Castle Course &mdash; St Andrews Links</a></h4>
                    <p>Fife &middot; Links &middot; Par 71 &middot; Tee time 9:30 AM</p>
                  </div>
                </div>
              </div>
              <div className="course-card">
                <img className="course-img" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/31/5e/34/welcome-to-the-old-course.jpg?w=900&h=500&s=1" alt="The Old Course, St Andrews" />
                <div className="course-card-body">
                  <div className="course-rank">Thu</div>
                  <div className="course-info">
                    <h4><a href="https://standrews.com/golf/courses/old-course" target="_blank" rel="noopener">The Old Course &mdash; St Andrews Links</a></h4>
                    <p>Fife &middot; Links &middot; Par 72 &middot; Tee time TBD</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* ── St. Andrews Tab ── */}
        <div className={`tab-panel ${activeTab === 'standrews' ? 'active' : ''}`}>
          <section className="guide-section">
            <h2 className="section-title">St. Andrews Guide</h2>
            <div className="inner-tabs">
              <button className={`inner-tab-btn ${activeSaTab === 'food' ? 'active' : ''}`} onClick={() => setActiveSaTab('food')}>Food</button>
              <button className={`inner-tab-btn ${activeSaTab === 'activities' ? 'active' : ''}`} onClick={() => setActiveSaTab('activities')}>Activities</button>
            </div>

            <div className={`inner-tab-panel ${activeSaTab === 'food' ? 'active' : ''}`}>
              <div className="guide-group">
                <h3 className="guide-group-title">&#9749; Snacks &amp; Treats</h3>
                <ul className="guide-list">
                  <li className="guide-item">
                    <div className="guide-item-header">
                      <strong>Fisher &amp; Donaldson &mdash; Church Street</strong>
                      <span className="guide-tag">Must-Do</span>
                    </div>
                    <p>A St Andrews rite of passage &mdash; grab a famous fudge doughnut</p>
                  </li>
                </ul>
              </div>
              <div className="guide-group">
                <h3 className="guide-group-title">&#127860; Lunch</h3>
                <ul className="guide-list">
                  <li className="guide-item">
                    <div className="guide-item-header">
                      <strong>North Point Caf&eacute;</strong>
                      <span className="guide-tag">Day 2</span>
                    </div>
                    <p>Smoked salmon bagels, Scottish pancakes, and hearty homemade soups</p>
                  </li>
                  <li className="guide-item">
                    <div className="guide-item-header">
                      <strong>The Cottage Kitchen</strong>
                      <span className="guide-tag">Day 3</span>
                    </div>
                    <p>Massive homemade sausage rolls, seasonal tarts, and freshly baked scones</p>
                  </li>
                </ul>
              </div>
              <div className="guide-group">
                <h3 className="guide-group-title">&#127869; Dinner</h3>
                <ul className="guide-list">
                  <li className="guide-item">
                    <div className="guide-item-header">
                      <strong>The Criterion</strong>
                      <span className="guide-tag">Day 1</span>
                    </div>
                    <p>Pies &amp; pints in a historic cozy pub &mdash; perfect after a long travel day</p>
                  </li>
                  <li className="guide-item">
                    <div className="guide-item-header">
                      <strong>The Tailend</strong>
                      <span className="guide-tag">Day 2</span>
                    </div>
                    <p>Authentic fish &amp; chips &middot; Casual fresh seafood in the heart of St Andrews</p>
                  </li>
                  <li className="guide-item">
                    <div className="guide-item-header">
                      <strong>The Grange Inn</strong>
                      <span className="guide-tag">Day 3</span>
                    </div>
                    <p>Seasonal Fife larder menu &middot; Roasted loin of venison, fresh Arbroath smokies, and local seafood</p>
                  </li>
                  <li className="guide-item">
                    <div className="guide-item-header">
                      <strong>The Jigger Inn</strong>
                      <span className="guide-tag">Day 4</span>
                    </div>
                    <p>Classic 19th-century pub &middot; Cozy fireplace &middot; Steeped in Old Course history</p>
                  </li>
                  <li className="guide-item">
                    <div className="guide-item-header">
                      <strong>Forgan&apos;s</strong>
                      <span className="guide-tag">Day 5</span>
                    </div>
                    <p>Great for groups &middot; Rustic barn atmosphere &middot; Known for Ceilidh nights</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className={`inner-tab-panel ${activeSaTab === 'activities' ? 'active' : ''}`}>
              <div className="guide-group">
                <h3 className="guide-group-title">&#128218; Bookshops</h3>
                <ul className="guide-list">
                  <li className="guide-item">
                    <div className="guide-item-header">
                      <strong>Topping &amp; Company Booksellers</strong>
                    </div>
                    <p>One of the most beautiful bookshops in the UK &middot; Huge floor-to-ceiling shelves with rolling ladders &middot; Staff will often offer you a pot of tea while you browse</p>
                  </li>
                  <li className="guide-item">
                    <div className="guide-item-header">
                      <strong>Bouquiniste &mdash; Market Street</strong>
                    </div>
                    <p>Tiny, wonderful second-hand bookshop &middot; Rare editions, old maps, and postcards &middot; Very &ldquo;old world&rdquo; and perfect for a quiet hunt</p>
                  </li>
                </ul>
              </div>
              <div className="guide-group">
                <h3 className="guide-group-title">&#127963; Medieval Ruins</h3>
                <ul className="guide-list">
                  <li className="guide-item">
                    <div className="guide-item-header">
                      <strong>St. Andrews Cathedral</strong>
                    </div>
                    <p>Once the largest church in Scotland &middot; Hauntingly beautiful ruins &middot; Climb St. Rule&apos;s Tower for a panoramic view &middot; Grounds open and free</p>
                  </li>
                  <li className="guide-item">
                    <div className="guide-item-header">
                      <strong>St. Andrews Castle</strong>
                    </div>
                    <p>Check out the Bottle Dungeon and the Siege Mine &middot; The mine is a tunnel dug during the 1546 siege &mdash; you can walk through it (not for the claustrophobic!)</p>
                  </li>
                </ul>
              </div>
              <div className="guide-group">
                <h3 className="guide-group-title">&#127754; Coastal Walks &amp; Beaches</h3>
                <ul className="guide-list">
                  <li className="guide-item">
                    <div className="guide-item-header">
                      <strong>West Sands Beach</strong>
                    </div>
                    <p>Famous for the opening scene of Chariots of Fire &middot; Massive, flat stretch of sand perfect for a long walk</p>
                  </li>
                  <li className="guide-item">
                    <div className="guide-item-header">
                      <strong>The Fife Coastal Path</strong>
                    </div>
                    <p>You don&apos;t have to do all 117 miles! &middot; The stretch from St. Andrews out toward Maiden Rock offers rugged cliff views and fresh North Sea air</p>
                  </li>
                  <li className="guide-item">
                    <div className="guide-item-header">
                      <strong>The Pier Walk</strong>
                    </div>
                    <p>A University student tradition &mdash; walk the harbor pier in a red gown &middot; Short, iconic, and gives a great perspective of the Cathedral from the water</p>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* ── Edinburgh Tab ── */}
        <div className={`tab-panel ${activeTab === 'edinburgh' ? 'active' : ''}`}>
          <section className="guide-section">
            <h2 className="section-title">Edinburgh Guide</h2>
            <div className="inner-tabs">
              <button className={`inner-tab-btn ${activeEdinTab === 'food' ? 'active' : ''}`} onClick={() => setActiveEdinTab('food')}>Food</button>
              <button className={`inner-tab-btn ${activeEdinTab === 'activities' ? 'active' : ''}`} onClick={() => setActiveEdinTab('activities')}>Activities</button>
            </div>

            <div className={`inner-tab-panel ${activeEdinTab === 'food' ? 'active' : ''}`}>
              <div className="guide-group">
                <h3 className="guide-group-title">&#127860; Lunch</h3>
                <ul className="guide-list">
                  <li className="guide-item">
                    <div className="guide-item-header">
                      <strong>Oink</strong>
                    </div>
                    <p>Traditional Scottish hog roast rolls with crackling, sage &amp; onion stuffing, or haggis</p>
                  </li>
                  <li className="guide-item">
                    <div className="guide-item-header">
                      <strong>Makar&apos;s Mash Bar</strong>
                    </div>
                    <p>Nine varieties of mashed tatties paired with mains like slow-cooked lamb, beef sausage, or wild boar</p>
                  </li>
                </ul>
              </div>
              <div className="guide-group">
                <h3 className="guide-group-title">&#127869; Dinner</h3>
                <ul className="guide-list">
                  <li className="guide-item">
                    <div className="guide-item-header">
                      <strong>The White Hart Inn</strong>
                    </div>
                    <p>Fish &amp; chips, steak pies, and haggis towers in a 500-year-old pub setting</p>
                  </li>
                  <li className="guide-item">
                    <div className="guide-item-header">
                      <strong>Howies &mdash; Victoria Street</strong>
                    </div>
                    <p>Seasonal Scottish produce &middot; Glen Lyon venison, Loch Duart salmon, cranachan for dessert</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className={`inner-tab-panel ${activeEdinTab === 'activities' ? 'active' : ''}`}>
              <div className="guide-group">
                <h3 className="guide-group-title">&#127964; Activities</h3>
                <ul className="guide-list">
                  <li className="guide-item">
                    <div className="guide-item-header">
                      <strong>Edinburgh Castle</strong>
                    </div>
                    <p>Perched on Castle Rock &mdash; non-negotiable for first-timers &middot; Try to catch the One O&apos;Clock Gun (fired daily except Sundays)</p>
                  </li>
                  <li className="guide-item">
                    <div className="guide-item-header">
                      <strong>The Royal Mile</strong>
                    </div>
                    <p>Historic spine from the Castle to the Palace of Holyroodhouse &middot; Look for the Heart of Midlothian mosaic near St. Giles&apos; Cathedral &mdash; locals spit on it for luck</p>
                  </li>
                  <li className="guide-item">
                    <div className="guide-item-header">
                      <strong>Arthur&apos;s Seat</strong>
                    </div>
                    <p>Extinct volcano in the city center &middot; 45&ndash;60 min hike to the top &middot; Best 360&deg; views of Edinburgh and the sea</p>
                  </li>
                </ul>
              </div>
              <div className="guide-group">
                <h3 className="guide-group-title">&#128218; Book Stores</h3>
                <ul className="guide-list">
                  <li className="guide-item">
                    <div className="guide-item-header">
                      <strong>Armchair Books &mdash; West Port</strong>
                    </div>
                    <p>Quintessential Edinburgh bookshop &middot; &ldquo;Nearly alphabetized chaos&rdquo; of second-hand books &middot; Perfect stop after the Castle near the Grassmarket</p>
                  </li>
                  <li className="guide-item">
                    <div className="guide-item-header">
                      <strong>John Kay&apos;s Shop &mdash; Victoria Street</strong>
                    </div>
                    <p>Tiny and charming on one of the world&apos;s most photographed streets &middot; Unique prints and Scottish interest books</p>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* ── Map Tab ── */}
        <div className={`tab-panel ${activeTab === 'map' ? 'active' : ''}`}>
          {activeTab === 'map' && <TripMap />}
        </div>

      </main>
    </>
  )
}
