export default function HomePage() {
  return (
    <>
      <header className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="hero-subtitle">The Trip of a Lifetime</p>
          <h1 className="hero-title">Scotland Golf 2026</h1>
          <p className="hero-dates">April 11 &ndash; April 19, 2026</p>
        </div>
      </header>

      <main className="container">
        <section className="trip-summary">
          <div className="summary-grid">
            <div className="summary-card">
              <span className="summary-icon">&#9971;</span>
              <span className="summary-number">7</span>
              <span className="summary-label">Rounds of Golf</span>
            </div>
            <div className="summary-card">
              <span className="summary-icon">&#9968;</span>
              <span className="summary-number">9</span>
              <span className="summary-label">Days in Scotland</span>
            </div>
            <div className="summary-card">
              <span className="summary-icon">&#127822;</span>
              <span className="summary-number">5</span>
              <span className="summary-label">Links Courses</span>
            </div>
            <div className="summary-card">
              <span className="summary-icon">&#127867;</span>
              <span className="summary-number">3</span>
              <span className="summary-label">Regions</span>
            </div>
          </div>
        </section>

        <section className="itinerary">
          <h2 className="section-title">Day by Day</h2>

          <div className="day-card travel-day" data-day="0">
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
                    <p>Departs 2:16 PM &middot; Arrives 3:59 PM &middot; 1h 43m &middot; American Eagle (operated for American Airlines) &middot; Basic Economy</p>
                  </div>
                </li>
                <li className="activity travel">
                  <span className="activity-icon">&#8987;</span>
                  <div>
                    <strong>Layover at Chicago O&apos;Hare (ORD)</strong>
                    <p>3h 06m connection &mdash; note: long connection</p>
                  </div>
                </li>
                <li className="activity travel">
                  <span className="activity-icon">&#9992;</span>
                  <div>
                    <strong>BA 298 &mdash; Chicago O&apos;Hare (ORD) &rarr; London Heathrow (LHR)</strong>
                    <p>Departs 7:05 PM &middot; Arrives 9:05 AM +1 &middot; 8h 00m &middot; British Airways &middot; Overnight flight &middot; Confirmation: A466Y6</p>
                  </div>
                </li>
                <li className="activity travel">
                  <span className="activity-icon">&#8987;</span>
                  <div>
                    <strong>Layover at London Heathrow (LHR)</strong>
                    <p>2h 40m connection</p>
                  </div>
                </li>
                <li className="activity travel">
                  <span className="activity-icon">&#9992;</span>
                  <div>
                    <strong>BA 1444 &mdash; London Heathrow (LHR) &rarr; Edinburgh (EDI)</strong>
                    <p>Departs 11:45 AM &middot; Arrives 1:10 PM &middot; 1h 25m &middot; British Airways &middot; Confirmation: A466Y6</p>
                  </div>
                </li>
                <li className="activity hotel">
                  <span className="activity-icon">&#127968;</span>
                  <div>
                    <strong>Arrive Edinburgh &mdash; check in &amp; settle</strong>
                    <p>Total travel time: 16h 54m &middot; Collect bags, pick up rental car</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="day-card" data-day="1">
            <div className="day-header">
              <div className="day-badge">Day 1</div>
              <div className="day-meta">
                <h3 className="day-title">Arrival &amp; Edinburgh</h3>
                <p className="day-date">Sunday, April 12, 2026</p>
              </div>
              <div className="day-location">
                <span className="location-pin">&#128205;</span> Edinburgh
              </div>
            </div>
            <div className="day-body">
              <ul className="day-activities">
                <li className="activity hotel">
                  <span className="activity-icon">&#127968;</span>
                  <div>
                    <strong>Check in &mdash; Edinburgh City Centre</strong>
                    <p>Hotel TBD</p>
                  </div>
                </li>
                <li className="activity food">
                  <span className="activity-icon">&#127869;</span>
                  <div>
                    <strong>Welcome Dinner</strong>
                    <p>Dinner in the Old Town &mdash; celebrate the start of the trip</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="day-card" data-day="2">
            <div className="day-header">
              <div className="day-badge">Day 2</div>
              <div className="day-meta">
                <h3 className="day-title">North Berwick</h3>
                <p className="day-date">Monday, April 13, 2026</p>
              </div>
              <div className="day-location">
                <span className="location-pin">&#128205;</span> East Lothian
              </div>
            </div>
            <div className="day-body">
              <ul className="day-activities">
                <li className="activity golf">
                  <span className="activity-icon">&#9971;</span>
                  <div>
                    <strong>North Berwick Golf Club &mdash; West Links</strong>
                    <p>Morning tee time &middot; One of the most iconic links courses in the world</p>
                  </div>
                </li>
                <li className="activity food">
                  <span className="activity-icon">&#127869;</span>
                  <div>
                    <strong>Lunch at the Clubhouse</strong>
                    <p>Post-round meal with views of the Firth of Forth</p>
                  </div>
                </li>
                <li className="activity sightseeing">
                  <span className="activity-icon">&#127964;</span>
                  <div>
                    <strong>Afternoon: Dirleton Castle</strong>
                    <p>Optional sightseeing at the 13th-century ruin nearby</p>
                  </div>
                </li>
                <li className="activity hotel">
                  <span className="activity-icon">&#127968;</span>
                  <div>
                    <strong>Drive north to St Andrews</strong>
                    <p>Check in and settle in for the next three nights</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="day-card highlight" data-day="3">
            <div className="day-header">
              <div className="day-badge special">Day 3</div>
              <div className="day-meta">
                <h3 className="day-title">St Andrews &mdash; The Old Course</h3>
                <p className="day-date">Tuesday, April 14, 2026</p>
              </div>
              <div className="day-location">
                <span className="location-pin">&#128205;</span> St Andrews, Fife
              </div>
            </div>
            <div className="day-body">
              <div className="highlight-banner">&#127942; Bucket List Round</div>
              <ul className="day-activities">
                <li className="activity golf">
                  <span className="activity-icon">&#9971;</span>
                  <div>
                    <strong>The Old Course &mdash; St Andrews Links</strong>
                    <p>Morning tee time &middot; The home of golf &middot; Par 72</p>
                  </div>
                </li>
                <li className="activity food">
                  <span className="activity-icon">&#127869;</span>
                  <div>
                    <strong>Lunch at the R&amp;A Clubhouse</strong>
                  </div>
                </li>
                <li className="activity sightseeing">
                  <span className="activity-icon">&#127964;</span>
                  <div>
                    <strong>Afternoon: St Andrews Cathedral &amp; Castle Ruins</strong>
                    <p>Explore the historic town on foot</p>
                  </div>
                </li>
                <li className="activity food">
                  <span className="activity-icon">&#127867;</span>
                  <div>
                    <strong>Evening: Whisky Tasting</strong>
                    <p>Private tasting at a local bar in St Andrews</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="day-card" data-day="4">
            <div className="day-header">
              <div className="day-badge">Day 4</div>
              <div className="day-meta">
                <h3 className="day-title">Carnoustie</h3>
                <p className="day-date">Wednesday, April 15, 2026</p>
              </div>
              <div className="day-location">
                <span className="location-pin">&#128205;</span> Angus
              </div>
            </div>
            <div className="day-body">
              <ul className="day-activities">
                <li className="activity golf">
                  <span className="activity-icon">&#9971;</span>
                  <div>
                    <strong>Carnoustie Golf Links &mdash; Championship Course</strong>
                    <p>Morning tee time &middot; Open Championship venue &middot; Known as &ldquo;Car-nasty&rdquo;</p>
                  </div>
                </li>
                <li className="activity food">
                  <span className="activity-icon">&#127869;</span>
                  <div>
                    <strong>Lunch at Carnoustie Golf Hotel</strong>
                  </div>
                </li>
                <li className="activity hotel">
                  <span className="activity-icon">&#127968;</span>
                  <div>
                    <strong>Return to St Andrews</strong>
                    <p>Relaxed evening, dinner in town</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="day-card" data-day="5">
            <div className="day-header">
              <div className="day-badge">Day 5</div>
              <div className="day-meta">
                <h3 className="day-title">Kingsbarns &amp; Drive West</h3>
                <p className="day-date">Thursday, April 16, 2026</p>
              </div>
              <div className="day-location">
                <span className="location-pin">&#128205;</span> Fife &rarr; Ayrshire
              </div>
            </div>
            <div className="day-body">
              <ul className="day-activities">
                <li className="activity golf">
                  <span className="activity-icon">&#9971;</span>
                  <div>
                    <strong>Kingsbarns Golf Links</strong>
                    <p>Morning tee time &middot; Stunning clifftop links with sea views</p>
                  </div>
                </li>
                <li className="activity travel">
                  <span className="activity-icon">&#128663;</span>
                  <div>
                    <strong>Drive to Ayrshire</strong>
                    <p>Afternoon drive across Scotland (~2.5 hrs) &middot; Stop at Stirling Castle en route</p>
                  </div>
                </li>
                <li className="activity hotel">
                  <span className="activity-icon">&#127968;</span>
                  <div>
                    <strong>Check in &mdash; Turnberry or Troon area</strong>
                    <p>Hotel TBD</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="day-card highlight" data-day="6">
            <div className="day-header">
              <div className="day-badge special">Day 6</div>
              <div className="day-meta">
                <h3 className="day-title">Royal Troon</h3>
                <p className="day-date">Friday, April 17, 2026</p>
              </div>
              <div className="day-location">
                <span className="location-pin">&#128205;</span> Troon, Ayrshire
              </div>
            </div>
            <div className="day-body">
              <div className="highlight-banner">&#127942; Open Championship Venue</div>
              <ul className="day-activities">
                <li className="activity golf">
                  <span className="activity-icon">&#9971;</span>
                  <div>
                    <strong>Royal Troon &mdash; Old Course</strong>
                    <p>Morning tee time &middot; Features the famous &ldquo;Postage Stamp&rdquo; 8th hole &middot; Par 71</p>
                  </div>
                </li>
                <li className="activity food">
                  <span className="activity-icon">&#127869;</span>
                  <div>
                    <strong>Clubhouse Lunch</strong>
                  </div>
                </li>
                <li className="activity sightseeing">
                  <span className="activity-icon">&#127964;</span>
                  <div>
                    <strong>Afternoon: Culzean Castle</strong>
                    <p>Clifftop castle with views of the Isle of Arran</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="day-card highlight" data-day="7">
            <div className="day-header">
              <div className="day-badge special">Day 7</div>
              <div className="day-meta">
                <h3 className="day-title">Turnberry &mdash; Ailsa Course</h3>
                <p className="day-date">Saturday, April 18, 2026</p>
              </div>
              <div className="day-location">
                <span className="location-pin">&#128205;</span> Turnberry, Ayrshire
              </div>
            </div>
            <div className="day-body">
              <div className="highlight-banner">&#127942; The Crown Jewel</div>
              <ul className="day-activities">
                <li className="activity golf">
                  <span className="activity-icon">&#9971;</span>
                  <div>
                    <strong>Trump Turnberry &mdash; Ailsa Course</strong>
                    <p>Morning tee time &middot; Lighthouse hole &middot; Stunning Ailsa Craig views &middot; Par 70</p>
                  </div>
                </li>
                <li className="activity food">
                  <span className="activity-icon">&#127869;</span>
                  <div>
                    <strong>Lunch at The Grand Tea Room, Turnberry Hotel</strong>
                  </div>
                </li>
                <li className="activity food">
                  <span className="activity-icon">&#127869;</span>
                  <div>
                    <strong>Celebration Dinner</strong>
                    <p>Group dinner &mdash; final night on the course road</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="day-card" data-day="8">
            <div className="day-header">
              <div className="day-badge">Day 8</div>
              <div className="day-meta">
                <h3 className="day-title">Glasgow &amp; Last Round</h3>
                <p className="day-date">Saturday, April 18, 2026</p>
              </div>
              <div className="day-location">
                <span className="location-pin">&#128205;</span> Glasgow
              </div>
            </div>
            <div className="day-body">
              <ul className="day-activities">
                <li className="activity travel">
                  <span className="activity-icon">&#128663;</span>
                  <div>
                    <strong>Drive to Glasgow</strong>
                    <p>Check in and drop bags</p>
                  </div>
                </li>
                <li className="activity golf">
                  <span className="activity-icon">&#9971;</span>
                  <div>
                    <strong>Haggs Castle Golf Club</strong>
                    <p>Afternoon round &middot; Parkland course in the heart of Glasgow</p>
                  </div>
                </li>
                <li className="activity food">
                  <span className="activity-icon">&#127869;</span>
                  <div>
                    <strong>Final Dinner in Glasgow</strong>
                    <p>Merchant City &mdash; celebrate the whole trip</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="day-card travel-day" data-day="return">
            <div className="day-header">
              <div className="day-badge">Return</div>
              <div className="day-meta">
                <h3 className="day-title">Departure &mdash; Edinburgh to Des Moines</h3>
                <p className="day-date">Sunday, April 19, 2026</p>
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

        <section className="courses-summary">
          <h2 className="section-title">Courses at a Glance</h2>
          <div className="courses-grid">
            <div className="course-card">
              <div className="course-rank">1</div>
              <div className="course-info">
                <h4>North Berwick West Links</h4>
                <p>East Lothian &middot; Links &middot; Par 71</p>
              </div>
            </div>
            <div className="course-card">
              <div className="course-rank">2</div>
              <div className="course-info">
                <h4>The Old Course, St Andrews</h4>
                <p>Fife &middot; Links &middot; Par 72</p>
              </div>
            </div>
            <div className="course-card">
              <div className="course-rank">3</div>
              <div className="course-info">
                <h4>Carnoustie Championship</h4>
                <p>Angus &middot; Links &middot; Par 72</p>
              </div>
            </div>
            <div className="course-card">
              <div className="course-rank">4</div>
              <div className="course-info">
                <h4>Kingsbarns Golf Links</h4>
                <p>Fife &middot; Links &middot; Par 72</p>
              </div>
            </div>
            <div className="course-card">
              <div className="course-rank">5</div>
              <div className="course-info">
                <h4>Royal Troon Old Course</h4>
                <p>Ayrshire &middot; Links &middot; Par 71</p>
              </div>
            </div>
            <div className="course-card">
              <div className="course-rank">6</div>
              <div className="course-info">
                <h4>Turnberry Ailsa Course</h4>
                <p>Ayrshire &middot; Links &middot; Par 70</p>
              </div>
            </div>
            <div className="course-card">
              <div className="course-rank">7</div>
              <div className="course-info">
                <h4>Haggs Castle</h4>
                <p>Glasgow &middot; Parkland &middot; Par 72</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
