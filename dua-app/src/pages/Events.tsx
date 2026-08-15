import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import useScrollAnimation from '../hooks/useScrollAnimation'

const upcoming = [
  {
    date: '2026',
    title: 'DUA Forum 2026',
    detail: 'The flagship convening of the Democracy Union of Africa.',
    location: 'Host city to be announced',
    tag: 'Upcoming',
  },
]

const highlights = [
  {
    date: '2025',
    title: 'DUA Forum 2025 Highlights',
    detail:
      '“Navigating Africa\u2019s Strategic Position in a Multipolar World” \u2014 leaders from over 25 political parties, policymakers and international partners convened in Nairobi, Kenya.',
    location: 'Nairobi, Kenya',
    tag: 'Highlights',
  },
]

export default function Events() {
  const scrollRef = useScrollAnimation()

  return (
    <div ref={scrollRef}>
      <PageHeader
        title="Events"
        subtitle="Flagship convenings, forums and programmes of the Democracy Union of Africa."
      />

      <section className="events-page-section fade-in-section">
        <div className="container">
          <h2 className="section-title mb-4">Upcoming</h2>
          <div className="event-list mb-5">
            {upcoming.map((e) => (
              <div className="row event-row align-items-center" key={e.title}>
                <div className="col-md-2"><strong>{e.date}</strong></div>
                <div className="col-md-4"><strong>{e.title}</strong><br /><small>{e.detail}</small></div>
                <div className="col-md-3"><strong>{e.location}</strong></div>
                <div className="col-md-3 text-md-end">
                  <span className="event-tag">{e.tag}</span>{' '}
                  <Link to="/register" className="btn btn-primary btn-sm ms-2">Register Interest</Link>
                </div>
              </div>
            ))}
          </div>

          <h2 className="section-title mb-4">Past Forums</h2>
          <div className="event-list">
            {highlights.map((e) => (
              <div className="row event-row align-items-center" key={e.title}>
                <div className="col-md-2"><strong>{e.date}</strong></div>
                <div className="col-md-5"><strong>{e.title}</strong><br /><small>{e.detail}</small></div>
                <div className="col-md-3"><strong>{e.location}</strong></div>
                <div className="col-md-2 text-md-end">
                  <Link to="/media" className="arrow-link">View Highlights <i className="bi bi-arrow-right"></i></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
