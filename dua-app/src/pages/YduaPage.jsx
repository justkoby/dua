import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  MapPin,
  Users,
  Award,
  ShieldCheck,
  Globe2,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import './womens-conference.css';

const galleryPhotos = [
  {
    id: 1,
    src: '/images/events/ydua-lilongwe-2021/ydua-president-chakwera-delegation.png',
    title: 'H.E. Dr. Lazarus Chakwera with YDUA Executive Leadership',
    caption:
      'President of the Republic of Malawi, H.E. Dr. Lazarus McCarthy Chakwera, receiving the YDUA leadership delegation and award honour at the Presidential State House in Lilongwe.',
  },
  {
    id: 2,
    src: '/images/events/ydua-lilongwe-2021/president-lazarus-chakwera-keynote.png',
    title: 'Keynote Address by President Lazarus Chakwera',
    caption:
      'President Chakwera addressing young centre-right political leaders, parliamentarians, and youth activists from over 20 African nations.',
  },
  {
    id: 3,
    src: '/images/events/ydua-lilongwe-2021/ydua-executive-malawi-delegation.png',
    title: 'Continental Youth Delegation in Lilongwe',
    caption:
      'Elected youth chairs, party delegates, and international observers gathered for statutory sessions and policy working groups.',
  },
  {
    id: 4,
    src: '/images/events/ydua-lilongwe-2021/ydua-conference-podium-kas.png',
    title: 'Partnership Plenary with Konrad-Adenauer-Stiftung',
    caption:
      'Joint plenary discussions on rule of law, institutional integrity, and youthful political leadership supported by KAS and IYDU.',
  },
];

export default function YduaPage() {
  const [activePhotoIndex, setActivePhotoIndex] = useState(null);

  useEffect(() => {
    document.title =
      'Young Democrat Union of Africa (YDUA) Forum 2021 — Lilongwe, Malawi';
  }, []);

  const nextPhoto = () => {
    setActivePhotoIndex((prev) => (prev + 1) % galleryPhotos.length);
  };

  const prevPhoto = () => {
    setActivePhotoIndex(
      (prev) => (prev - 1 + galleryPhotos.length) % galleryPhotos.length
    );
  };

  return (
    <div className="wc-page fa-inner-page">
      {/* Hero Section */}
      <section className="wc-hero">
        <div className="container">
          <a className="wc-back-link" href="/events/">
            <ArrowLeft size={16} />
            <span>All Events &amp; Concluded Forums</span>
          </a>

          <div className="wc-hero-grid">
            <div className="wc-hero-copy">
              <span className="wc-pill">
                <span className="wc-pill-dot" />
                CONCLUDED HISTORICAL FORUM · LILONGWE, MALAWI (2021)
              </span>

              <h1>
                Empowering Africa&rsquo;s Next Generation of Democratic Leaders.
              </h1>

              <p className="wc-hero-lead">
                Held in Lilongwe, Malawi in October 2021, the Young Democrat Union of
                Africa (YDUA) Annual Forum brought together emerging leaders,
                young legislators, and party executives from across the continent,
                headlined by the President of Malawi, H.E. Dr. Lazarus McCarthy Chakwera.
              </p>

              <div className="wc-key-details">
                <div className="wc-detail-item">
                  <CalendarDays size={18} className="wc-detail-icon" />
                  <div>
                    <strong>Dates</strong>
                    <span>14–17 October 2021</span>
                  </div>
                </div>
                <div className="wc-detail-item">
                  <MapPin size={18} className="wc-detail-icon" />
                  <div>
                    <strong>Location</strong>
                    <span>Lilongwe, Republic of Malawi</span>
                  </div>
                </div>
                <div className="wc-detail-item">
                  <Award size={18} className="wc-detail-icon" />
                  <div>
                    <strong>Keynote &amp; Honouree</strong>
                    <span>H.E. Dr. Lazarus McCarthy Chakwera</span>
                  </div>
                </div>
                <div className="wc-detail-item">
                  <Globe2 size={18} className="wc-detail-icon" />
                  <div>
                    <strong>Strategic Partners</strong>
                    <span>KAS &amp; International Young Democrat Union (IYDU)</span>
                  </div>
                </div>
              </div>

              <div className="wc-hero-ctas">
                <a className="button gold" href="#gallery">
                  View Conference Gallery <ArrowUpRight size={18} />
                </a>
                <a
                  className="wc-secondary-link"
                  href="/programmes/"
                >
                  Explore DUA Youth Academy &rarr;
                </a>
              </div>
            </div>

            <div className="wc-hero-visual">
              <div className="wc-hero-image-wrap">
                <img
                  src="/images/events/ydua-lilongwe-2021/ydua-president-chakwera-delegation.png"
                  alt="President Lazarus Chakwera with YDUA Delegation"
                  className="wc-hero-image"
                  fetchPriority="high"
                />
                <div className="wc-hero-badge">
                  <Award size={20} />
                  <div>
                    <strong>African Democrat of the Year</strong>
                    <span>Presented to President Chakwera</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Award Story */}
      <section className="wc-section wc-section--light">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 48,
              alignItems: 'center',
            }}
            className="ydua-feature-grid"
          >
            <div style={{ borderRadius: 12, overflow: 'hidden', boxShadow: '0 20px 40px rgba(7,30,48,0.1)' }}>
              <img
                src="/images/events/ydua-lilongwe-2021/president-lazarus-chakwera-keynote.png"
                alt="President Chakwera Keynote Address"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
            <div>
              <span className="wc-pill" style={{ marginBottom: 16 }}>
                <Sparkles size={14} style={{ color: 'var(--gold, #C5A059)' }} />
                PRESIDENTIAL KEYNOTE &amp; DEMOCRACY HONOUR
              </span>
              <h2 style={{ fontSize: '2rem', lineHeight: 1.25, color: 'var(--navy, #11244D)', marginBottom: 20 }}>
                Recognising Democratic Stewardship and Constitutional Resilience
              </h2>
              <p style={{ color: 'var(--text-muted, #4b5d6e)', fontSize: 16, lineHeight: 1.7, marginBottom: 16 }}>
                The highlight of the 2021 Lilongwe convening was the presentation of the
                <strong> African Democrat of the Year Award</strong> to President Lazarus McCarthy Chakwera.
                YDUA delegates recognised his steadfast commitment to the rule of law, institutional independence,
                and his peaceful accession to power following the historic court-ordered election reruns in Malawi.
              </p>
              <p style={{ color: 'var(--text-muted, #4b5d6e)', fontSize: 16, lineHeight: 1.7, marginBottom: 24 }}>
                In his keynote address, President Chakwera urged Africa’s youth not to view politics merely as a route
                to power, but as a solemn patriotic duty to build equitable economies, safeguard democratic norms,
                and strengthen regional cooperation.
              </p>
              <div
                style={{
                  padding: '16px 20px',
                  background: 'rgba(39, 182, 232, 0.08)',
                  borderLeft: '4px solid var(--sea-blue, #27B6E8)',
                  borderRadius: 6,
                  fontStyle: 'italic',
                  color: 'var(--navy, #11244D)',
                  fontSize: 15,
                }}
              >
                &ldquo;Africa’s future depends on young leaders who possess the discipline of principle,
                the humility to serve, and the courage to defend constitutional democracy.&rdquo;
                <div style={{ fontStyle: 'normal', fontWeight: 600, marginTop: 8, fontSize: 13, color: 'var(--navy)' }}>
                  — H.E. Dr. Lazarus McCarthy Chakwera, Lilongwe 2021
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Pillars / Outcomes */}
      <section className="wc-section">
        <div className="container">
          <div className="wc-section-header">
            <span className="eyebrow">STRATEGIC FOCUS AREAS</span>
            <h2>Lilongwe Resolutions &amp; Working Tracks</h2>
            <p className="wc-section-sub">
              Deliberations by young centre-right delegates and youth wing leaders.
            </p>
          </div>

          <div className="wc-pillars-grid">
            <div className="wc-pillar-card">
              <span className="wc-pillar-num">01</span>
              <h3>Youth Parliamentary Representation</h3>
              <p>
                Developing concrete policy pathways and campaign finance reform to lower the barrier
                for young candidates seeking elected office across DUA member parties.
              </p>
            </div>

            <div className="wc-pillar-card">
              <span className="wc-pillar-num">02</span>
              <h3>Rule of Law &amp; Electoral Integrity</h3>
              <p>
                Studying the landmark Malawian constitutional experience to share best practices in legal
                electoral challenges, judicial independence, and non-violent civic defence.
              </p>
            </div>

            <div className="wc-pillar-card">
              <span className="wc-pillar-num">03</span>
              <h3>Free Markets &amp; Entrepreneurship</h3>
              <p>
                Advocating for AfCFTA youth provisions, digital market access, deregulation, and property
                rights protection for young entrepreneurs driving continental innovation.
              </p>
            </div>

            <div className="wc-pillar-card">
              <span className="wc-pillar-num">04</span>
              <h3>Global Centre-Right Solidarity</h3>
              <p>
                Strengthening ties between African youth organisations and global counterparts via the
                International Young Democrat Union (IYDU) and Konrad-Adenauer-Stiftung.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="wc-section wc-section--light" id="gallery">
        <div className="container">
          <div className="wc-section-header">
            <span className="eyebrow">OFFICIAL PHOTOGRAPHY</span>
            <h2>Lilongwe 2021 Photo Gallery</h2>
            <p className="wc-section-sub">
              Archival moments from the high-level presidential meeting, plenary assemblies, and delegation sessions.
            </p>
          </div>

          <div className="wc-gallery-grid">
            {galleryPhotos.map((photo, index) => (
              <div
                key={photo.id}
                className="wc-gallery-item"
                onClick={() => setActivePhotoIndex(index)}
              >
                <div className="wc-gallery-thumb-wrap">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="wc-gallery-thumb"
                    loading="lazy"
                  />
                  <div className="wc-gallery-overlay">
                    <span>View Image</span>
                  </div>
                </div>
                <div className="wc-gallery-meta">
                  <h4>{photo.title}</h4>
                  <p>{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activePhotoIndex !== null && (
        <div className="wc-modal" onClick={() => setActivePhotoIndex(null)}>
          <div
            className="wc-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="wc-modal-close"
              onClick={() => setActivePhotoIndex(null)}
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            <button
              className="wc-modal-prev"
              onClick={prevPhoto}
              aria-label="Previous image"
            >
              <ChevronLeft size={32} />
            </button>

            <button
              className="wc-modal-next"
              onClick={nextPhoto}
              aria-label="Next image"
            >
              <ChevronRight size={32} />
            </button>

            <div className="wc-modal-image-wrap">
              <img
                src={galleryPhotos[activePhotoIndex].src}
                alt={galleryPhotos[activePhotoIndex].title}
                className="wc-modal-image"
              />
            </div>

            <div className="wc-modal-caption">
              <h3>{galleryPhotos[activePhotoIndex].title}</h3>
              <p>{galleryPhotos[activePhotoIndex].caption}</p>
              <span className="wc-modal-counter">
                {activePhotoIndex + 1} of {galleryPhotos.length}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* About YDUA & Secretariat Note */}
      <section className="wc-section">
        <div className="container">
          <div
            style={{
              background: 'var(--navy, #11244D)',
              color: '#fff',
              borderRadius: 16,
              padding: '48px 40px',
              display: 'grid',
              gridTemplateColumns: '1.4fr 1fr',
              gap: 40,
              alignItems: 'center',
            }}
          >
            <div>
              <span className="eyebrow" style={{ color: 'var(--sea-blue, #27B6E8)' }}>
                YOUTH ORGANISATION
              </span>
              <h2 style={{ color: '#fff', marginTop: 8, marginBottom: 16, fontSize: '1.85rem' }}>
                About the Young Democrat Union of Africa
              </h2>
              <p style={{ color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.7, fontSize: 16 }}>
                The Young Democrat Union of Africa (YDUA) serves as the official continental youth organ
                of the Democracy Union of Africa. YDUA mobilises, trains, and networks young centre-right
                politicians, activists, and parliamentarians from over 20 African member parties, connecting
                them with the International Young Democrat Union (IYDU) and international democratic foundations.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <a
                className="button gold"
                href="/contact/?topic=ydua"
                style={{ textAlign: 'center', justifyContent: 'center' }}
              >
                Connect with YDUA <ArrowUpRight size={18} />
              </a>
              <a
                href="/events/"
                style={{
                  color: 'rgba(255, 255, 255, 0.85)',
                  textDecoration: 'none',
                  fontSize: 14,
                  textAlign: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 6,
                }}
              >
                <span>Browse other DUA convenings</span> &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
