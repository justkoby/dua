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
} from 'lucide-react';
import './womens-conference.css';

const galleryPhotos = [
  {
    id: 1,
    src: '/images/events/dua-forum-johannesburg-2023/dua-forum-johannesburg-2023-poster.png',
    title: 'Official DUA Forum Johannesburg 2023 Poster',
    caption:
      'Official conference identity for the 2023 DUA Annual Forum held at Radisson Hotel, Johannesburg, South Africa under the theme “Discovering New Dimensions of Cooperation”.',
  },
  {
    id: 2,
    src: '/images/events/dua-forum-johannesburg-2023/nana-akufo-addo-special-guest.png',
    title: 'Special Guest of Honour: H.E. Dr. Nana Addo Dankwa Akufo-Addo',
    caption:
      'President of the Republic of Ghana who delivered the high-level opening remarks to continental delegates and party leaders in Johannesburg.',
  },
  {
    id: 3,
    src: '/images/2.webp',
    title: 'Continental Delegation Assembly',
    caption:
      'Party chairpersons, Secretaries-General, and parliamentary delegates convened for statutory and policy deliberations.',
  },
  {
    id: 4,
    src: '/images/4.webp',
    title: 'Strategic Working Sessions on Continental Cooperation',
    caption:
      'Panels addressing inter-party solidarity, democratic stability, and economic integration in Africa.',
  },
];

export default function JohannesburgForumPage() {
  const [activePhotoIndex, setActivePhotoIndex] = useState(null);

  useEffect(() => {
    document.title =
      'DUA Forum Johannesburg 2023 — Democracy Union of Africa';
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
            <span>All Events &amp; Annual Forums</span>
          </a>

          <div className="wc-hero-grid">
            <div className="wc-hero-copy">
              <span className="wc-pill">
                <span className="wc-pill-dot" />
                CONCLUDED HISTORICAL FORUM · 2023
              </span>
              <h1>DUA Forum Johannesburg 2023</h1>
              <p className="wc-theme">
                “Discovering New Dimensions of Cooperation: A Collective Responsibility Towards Africa’s Development”
              </p>
              <p className="wc-lead">
                Held at the Radisson Hotel in Johannesburg, South Africa from 26 to 30 April 2023, the flagship DUA Annual Forum convened centre-right party chairpersons, heads of state, parliamentarians and international foundations to advance continental solidarity and institutional resilience.
              </p>

              <div className="wc-meta-strip">
                <div className="wc-meta-item">
                  <CalendarDays size={18} />
                  <div>
                    <strong>26 – 30 April 2023</strong>
                    <span>5-Day Continental Forum</span>
                  </div>
                </div>
                <div className="wc-meta-item">
                  <MapPin size={18} />
                  <div>
                    <strong>Radisson Hotel</strong>
                    <span>Johannesburg, South Africa</span>
                  </div>
                </div>
                <div className="wc-meta-item">
                  <Users size={18} />
                  <div>
                    <strong>25+ Member Parties</strong>
                    <span>West, East, Central &amp; Southern Africa</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="wc-hero-visual">
              <div className="wc-hero-image-wrapper">
                <img
                  src="/images/events/dua-forum-johannesburg-2023/dua-forum-johannesburg-2023-poster.png"
                  alt="Democrat Union of Africa Forum Johannesburg 2023"
                  fetchPriority="high"
                />
                <div className="wc-hero-badge">
                  <span>JOHANNESBURG 2023</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Guest of Honour */}
      <section className="wc-award-section container" style={{ marginTop: '50px' }}>
        <div className="wc-award-box">
          <div className="wc-award-copy">
            <div className="wc-award-tag">
              <Award size={18} aria-hidden="true" />
              <span>SPECIAL GUEST OF HONOUR</span>
            </div>
            <h2>H.E. Dr. Nana Addo Dankwa Akufo-Addo</h2>
            <p className="lead">
              President of the Republic of Ghana
            </p>
            <p>
              President Nana Akufo-Addo delivered the opening keynote remarks to the assembly of African centre-right leaders, emphasizing the indispensable relationship between democratic accountability, the rule of law, and rapid economic modernization under the African Continental Free Trade Area (AfCFTA).
            </p>
            <blockquote style={{ borderLeft: '3px solid var(--sea-blue)', paddingLeft: '16px', margin: '18px 0 0', fontStyle: 'italic', color: '#cbd5e1', fontSize: '14px' }}>
              “Africa’s sustainable future will not be delivered by authoritarian shortcuts. It will be built by strong democratic institutions, vibrant markets that unleash the enterprise of our young people, and genuine inter-party cooperation.”
            </blockquote>
          </div>
          <div className="wc-award-visual">
            <img
              src="/images/events/dua-forum-johannesburg-2023/nana-akufo-addo-special-guest.png"
              alt="H.E. Dr. Nana Addo Dankwa Akufo-Addo, President of Ghana"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Strategic Focus Areas */}
      <section className="wc-highlights-section section-pad">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">KEY DELIBERATIONS &amp; THEMES</p>
              <h2>New Dimensions of Cooperation.</h2>
            </div>
            <p>
              How the 2023 Johannesburg Forum strengthened inter-party bonds across the continent.
            </p>
          </div>

          <div className="wc-highlights-grid">
            <div className="wc-highlight-card">
              <div className="wc-highlight-icon">
                <ShieldCheck size={26} />
              </div>
              <h3>Defending Multiparty Democracy</h3>
              <p>
                Deliberations on safeguarding constitutionalism, judicial independence, and presidential term limits amid democratic backsliding in parts of West and Central Africa.
              </p>
            </div>

            <div className="wc-highlight-card">
              <div className="wc-highlight-icon">
                <Globe2 size={26} />
              </div>
              <h3>AfCFTA &amp; Private Enterprise</h3>
              <p>
                Examining practical policy roadmaps for centre-right governing and opposition parties to remove non-tariff trade barriers, boost intra-African investment, and foster digital entrepreneurship.
              </p>
            </div>

            <div className="wc-highlight-card">
              <div className="wc-highlight-icon">
                <Users size={26} />
              </div>
              <h3>Youth &amp; Women’s Representation</h3>
              <p>
                Coordinating with the Young Democrat Union of Africa (YDUA) and the International Women’s Democracy Union (IWDU) to institutionalize campaign academies and leadership quotas across member parties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="wc-gallery-section section-pad" id="gallery">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">HISTORICAL ARCHIVE</p>
              <h2>Forum Materials &amp; Gallery.</h2>
            </div>
            <p>Official identity and verified records from the Johannesburg 2023 convening.</p>
          </div>

          <div className="wc-gallery-grid">
            {galleryPhotos.map((photo, index) => (
              <button
                type="button"
                className="wc-gallery-item wc-gallery-item--standard"
                key={photo.id}
                onClick={() => setActivePhotoIndex(index)}
                aria-label={`View full image: ${photo.title}`}
              >
                <img src={photo.src} alt={photo.title} loading="lazy" />
                <div className="wc-gallery-caption-overlay">
                  <strong>{photo.title}</strong>
                  <span>Click to view in lightbox</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activePhotoIndex !== null && (
        <div
          className="wc-lightbox"
          role="dialog"
          aria-modal="true"
          onClick={() => setActivePhotoIndex(null)}
        >
          <button
            type="button"
            className="wc-lightbox-close"
            onClick={() => setActivePhotoIndex(null)}
            aria-label="Close photo viewer"
          >
            <X size={26} />
          </button>
          <button
            type="button"
            className="wc-lightbox-nav prev"
            onClick={(e) => {
              e.stopPropagation();
              prevPhoto();
            }}
            aria-label="Previous photo"
          >
            <ChevronLeft size={28} />
          </button>
          <div
            className="wc-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryPhotos[activePhotoIndex].src}
              alt={galleryPhotos[activePhotoIndex].title}
            />
            <div className="wc-lightbox-caption">
              <h3>{galleryPhotos[activePhotoIndex].title}</h3>
              <p>{galleryPhotos[activePhotoIndex].caption}</p>
            </div>
          </div>
          <button
            type="button"
            className="wc-lightbox-nav next"
            onClick={(e) => {
              e.stopPropagation();
              nextPhoto();
            }}
            aria-label="Next photo"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}

      {/* Concluding CTA */}
      <section className="wc-cta-section container" style={{ paddingBlock: '40px 80px' }}>
        <div className="wc-cta-box">
          <div>
            <span className="eyebrow">LOOKING AHEAD</span>
            <h2>Continue exploring DUA Forums &amp; Convenings.</h2>
            <p>
              Browse our upcoming DUA Forum 2026, past forums in Nairobi and Accra, or the latest adopted country resolutions.
            </p>
          </div>
          <div className="wc-cta-actions">
            <a className="button gold" href="/events/">
              All Events &amp; Forums <ArrowUpRight size={18} />
            </a>
            <a className="button light" href="/policy-briefs/">
              Browse Resolutions (.docx) <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
