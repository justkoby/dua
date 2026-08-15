import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from 'bootstrap'
import useScrollAnimation from '../hooks/useScrollAnimation'
import GlobalNetwork from '../components/GlobalNetwork'
import { FeaturedNewsCard, SmallNewsCard } from '../components/NewsCard'
import { newsItems } from '../data/news'

const heroSlides = [
  { image: '/images/2.webp' },
  { image: '/images/4.webp' },
  { image: '/images/dua-conference-01.jpg' },
  { image: '/images/3.webp' },
  { image: '/images/7.webp' },
  { image: '/images/8.webp' },
]

const infoCards = [
  { num: '01', img: '/images/coorperation.png', alt: 'DUA Conference', title: 'Fostering Cooperation and Shared Values.', text: 'The DUA provides a platform for member parties to exchange ideas and coordinate on matters of policy and international relations.' },
  { num: '02', img: '/images/my-boss.png', alt: 'African Flags', title: 'A Commitment to Centre-Right Principles.', text: 'Our union is built on a foundation of promoting democracy, free enterprise, and individual liberty across the African continent.' },
  { num: '03', img: '/images/replace.png', alt: 'Voters in Africa', title: 'Strengthening Democratic Institutions.', text: 'We support our member parties in their efforts to build and sustain robust democratic systems in their respective nations.' },
]

export default function Home() {
  const scrollRef = useScrollAnimation()
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (carouselRef.current) {
      new Carousel(carouselRef.current, { interval: 5000, ride: 'carousel' })
    }
  }, [])

  return (
    <div ref={scrollRef}>
      <h1 className="visually-hidden">Democracy Union of Africa – Uniting Africa's Centre-Right Democratic Parties</h1>
      {/* Hero Carousel */}
      <div id="heroCarousel" className="carousel slide" ref={carouselRef}>
        <div className="carousel-inner">
          {heroSlides.map((slide, i) => (
            <div
              key={i}
              className={`carousel-item ${i === 0 ? 'active' : ''}`}
              style={{ backgroundImage: `url('${slide.image}')` }}
            ></div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>

      {/* Global Network & Partners */}
      <GlobalNetwork />

      {/* Who We Are Section */}
      <section id="about" className="who-we-are-section fade-in-section">
        <div className="container">
          <div className="section-title-container text-start">
            <h2 className="section-title">Who We Are</h2>
            <div className="title-break"></div>
            <p className="lead">
              The Democracy Union of Africa (DUA) is a continental alliance of over 25 center-right political parties drawn from every sub-region of Africa. As the African regional body of the International Democracy Union (IDU), we unite parties committed to democracy, individual liberty, market-driven economies, and accountable governance.
              <br /><br />
              More than a network, DUA is a fraternity of centre-right actors working to strengthen institutions, empower citizens, and defend freedom across the continent. From electoral integrity to youth and women's political participation, we champion the values that ensure democracy thrives and Africa prospers.
            </p>
          </div>
          <div className="row g-5">
            {infoCards.map((card) => (
              <div className="col-lg-4" key={card.num}>
                <div className="info-card" data-number={card.num}>
                  <div className="card-content">
                    <img src={card.img} className="img-fluid" alt={card.alt} />
                    <h4>{card.title}</h4>
                    <div className="info-break"></div>
                    <p>{card.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DUA Forum Section */}
      <section className="dua-forum-section fade-in-section text-center text-white">
        <div className="container">
          <p className="section-subtitle">DUA FORUM 2026</p>
          <img src="/images/DUA 2025 logo-1.png" alt="DUA Forum 2026" style={{ height: '240px' }} />
          <br /><br />
          <p className="lead col-lg-8 mx-auto">
            The DUA Forum is the flagship convening of the Democracy Union of Africa, bringing together leaders from over 25 political parties, policymakers, academics, and international partners to chart Africa's role in global politics, strengthen centre-right cooperation, and forge partnerships that advance democracy, economic freedom, and accountable governance across the continent.
          </p>
          <Link to="/register" className="btn btn-primary mt-4">Register Your Interest</Link>
        </div>
      </section>

      {/* Meet Leader Section */}
      <section className="meet-leader-section fade-in-section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="img-container">
                <img src="/images/Pic 2.webp" className="img-fluid rounded-3" alt="Louisa Atta-Agyemang, Chairperson of the Democracy Union of Africa" />
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="section-title mb-3">Message from the Chairperson</h2>
              <div className="title-break bg-primary" style={{ margin: '1.5rem 0' }}></div>
              <p>
                Welcome to the Democracy Union of Africa (DUA) - a continental alliance of center-right political parties united by a commitment to advancing democracy, individual liberty, and shared prosperity. In an era of profound global shifts, DUA stands as a platform where African voices are amplified, democratic institutions are strengthened, and solutions to our most pressing challenges; from economic transformation and youth empowerment to regional integration, are forged with vision and resolve.
                <br /><br />
                Our mission is not ours alone; it is a collective endeavour that calls upon leaders, civil society, academia, and the private sector, both within Africa and across the world, to join forces with us. By shaping policy, investing in capacity-building, and fostering dialogue across regions, together we can define an African democratic future rooted in freedom, dignity, and opportunity. At DUA, we believe democracy is not only a political system, but the driving force of innovation, growth, and justice. We invite you to walk this journey with us, to secure liberty, deepen democracy, and shape a brighter Africa for generations yet unborn.
              </p>
              <div className="signature">Louisa Atta-Agyemang</div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="next-event-section fade-in-section">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <p className="section-subtitle mb-1">CALENDAR</p>
              <h2 className="section-title">Upcoming Events</h2>
            </div>
            <a href="#" className="text-white">More Events <i className="bi bi-arrow-right"></i></a>
          </div>
          <ul className="nav nav-tabs event-tabs mb-4 border-0">
            <li className="nav-item">
              <a className="nav-link active" href="#">DUA Forum 2025 Highlights</a>
            </li>
          </ul>
          <div className="event-list">
            <div className="row event-row align-items-center">
              <div className="col-md-2">2025</div>
              <div className="col-md-4"><strong>DUA Forum 2025 Highlights</strong><br /><small>Navigating Africa's Strategic Position in a Multipolar World</small></div>
              <div className="col-md-4"><strong>Nairobi, Kenya</strong><br /><small>Conference Center</small></div>
              <div className="col-md-2 text-md-end">
                <Link to="/media" className="arrow-link">View Highlights <i className="bi bi-arrow-right"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="latest-section fade-in-section">
        <div className="container">
          <div className="latest-heading">
            <div>
              <p className="section-subtitle">LATEST FROM DUA</p>
              <h2 className="section-title">Statements, Press Releases &amp; Updates</h2>
              <p className="latest-desc">
                Follow DUA&rsquo;s latest positions, democratic interventions, programmes and activities across Africa.
              </p>
            </div>
            <Link to="/media" className="btn btn-primary btn-viewall">
              View All Updates <i className="bi bi-arrow-right ms-1"></i>
            </Link>
          </div>

          {/* Featured Story */}
          {(() => {
            const featured = newsItems.find((n) => n.featured)
            if (featured) return <FeaturedNewsCard item={featured} />
            return null
          })()}

          {/* Supporting Cards */}
          <div className="latest-cards">
            {newsItems.filter((n) => !n.featured).slice(0, 3).map((item) => (
              <SmallNewsCard item={item} key={item.slug} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section fade-in-section">
        <div className="container">
          <div className="row justify-content-start text-start">
            <div className="col-lg-8 cta-content">
              <h2 className="mb-4">Building a Brighter Future for Africa Together</h2>
              <Link to="/contact" className="btn btn-primary">Get Involved</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
