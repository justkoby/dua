import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  MapPin,
  Award,
  Users,
  ChevronLeft,
  ChevronRight,
  X,
  Download,
  Share2,
} from 'lucide-react';
import './womens-conference.css';

const galleryPhotos = [
  {
    id: 1,
    src: '/images/events/dua-womens-conference-2026/delegates-group-wide.png',
    title: 'Continental Delegation Group Photograph',
    caption:
      'Delegates, party executives, parliamentarians and dignitaries assemble for the official DUA Women’s Conference 2026 photograph at Windhoek Country Club, Namibia.',
    aspect: 'wide',
  },
  {
    id: 2,
    src: '/images/events/dua-womens-conference-2026/samira-bawumia-keynote-podium.png',
    title: 'Keynote Address by H.E. Lady Samira Bawumia',
    caption:
      'Special Guest of Honour H.E. Lady Samira R. Bawumia addresses the plenary on women advancing from participation to real political decision-making power.',
    aspect: 'portrait',
  },
  {
    id: 3,
    src: '/images/events/dua-womens-conference-2026/samira-bawumia-and-louisa-atta-agyemang.png',
    title: 'DUA Chairperson with Special Guest of Honour',
    caption:
      'DUA Chairperson Md Louisa Atta-Agyemang and Special Guest of Honour H.E. Lady Samira Bawumia share a moment of continental solidarity.',
    aspect: 'standard',
  },
  {
    id: 4,
    src: '/images/events/dua-womens-conference-2026/conference-hall-audience-plenary.png',
    title: 'Plenary Assembly in Session',
    caption:
      'Delegates seated inside Oryx 2 Hall during high-level strategic deliberations on democratic governance, security and constitutionalism.',
    aspect: 'wide',
  },
  {
    id: 5,
    src: '/images/events/dua-womens-conference-2026/louisa-atta-agyemang-chairperson-address.png',
    title: 'Chairperson’s Official Address',
    caption:
      'Md Louisa Atta-Agyemang delivering her address emphasizing youth and women’s agency in safeguarding Africa’s center-right values.',
    aspect: 'standard',
  },
  {
    id: 6,
    src: '/images/events/dua-womens-conference-2026/mchenry-venaani-address-podium.png',
    title: 'Fraternal Remarks by Hon. McHenry Venaani',
    caption:
      'Hon. McHenry Venaani (DUA Vice Chairman & Leader of the Official Opposition in Namibia) addressing sister party delegates at the podium.',
    aspect: 'standard',
  },
  {
    id: 7,
    src: '/images/events/dua-womens-conference-2026/zhaklina-peshevska-keynote-podium.png',
    title: 'International Keynote by Hon. Zhaklina Peshevska',
    caption:
      'Hon. Zhaklina Peshevska, President of the Women’s Forum of VMRO-DPMNE (North Macedonia), bringing global centre-right solidarity to Windhoek.',
    aspect: 'standard',
  },
  {
    id: 8,
    src: '/images/events/dua-womens-conference-2026/holger-dix-remarks-podium.png',
    title: 'Partner Remarks by Dr Holger Dix (KAS)',
    caption:
      'Dr Holger Dix, Resident Representative of the Konrad-Adenauer-Stiftung Namibia/Angola, addressing the conference on sustainable democracy partnerships.',
    aspect: 'standard',
  },
  {
    id: 9,
    src: '/images/events/dua-womens-conference-2026/samira-bawumia-and-louisa-arrival.png',
    title: 'Arrival and Welcome of Dignitaries',
    caption:
      'DUA Chairperson Louisa Atta-Agyemang receives H.E. Lady Samira Bawumia upon arrival at the Windhoek Country Club and Resort.',
    aspect: 'standard',
  },
  {
    id: 10,
    src: '/images/events/dua-womens-conference-2026/delegates-listening-tables.png',
    title: 'Working Session & Interactive Discussions',
    caption:
      'Women leaders and delegates engaging actively during panel debate on sovereign defense against violent extremism and unconstitutional governance shifts.',
    aspect: 'wide',
  },
  {
    id: 11,
    src: '/images/events/dua-womens-conference-2026/louisa-atta-agyemang-and-holger-dix.png',
    title: 'Strategic Consultation with KAS',
    caption:
      'DUA Chairperson Louisa Atta-Agyemang and Dr Holger Dix reviewing joint programme outcomes and continental research priorities.',
    aspect: 'standard',
  },
  {
    id: 12,
    src: '/images/events/dua-womens-conference-2026/louisa-atta-agyemang-portrait-podium.webp',
    title: 'Closing Declarations and Mandate',
    caption:
      'Chairperson Louisa Atta-Agyemang summarizing conference resolutions and presenting the forward action plan for member parties.',
    aspect: 'portrait',
  },
];

const speakers = [
  {
    name: 'H.E. Lady Samira R. Bawumia',
    role: 'Special Guest of Honour & Keynote Speaker',
    affiliation: 'Second Lady of the Republic of Ghana · Global Ambassador',
    image: '/images/events/dua-womens-conference-2026/samira-bawumia-keynote-podium.png',
    quote:
      '“Democratic progress across Africa requires that women do not simply hold a seat at the table, but have the political power, resources and institutional mandate to shape our national destinies.”',
  },
  {
    name: 'Md Louisa Atta-Agyemang',
    role: 'Convener & Chairperson',
    affiliation: 'Democracy Union of Africa (DUA)',
    image: '/images/events/dua-womens-conference-2026/louisa-atta-agyemang-chairperson-address.png',
    quote:
      '“Our sister parties across the continent are united. We are building networks of resilient women who will lead governments, win elections, and defend constitutional order.”',
  },
  {
    name: 'Hon. McHenry Venaani',
    role: 'Host Leader & DUA Vice Chairman',
    affiliation: 'Leader of the Official Opposition in Namibia · President of PDM',
    image: '/images/events/dua-womens-conference-2026/mchenry-venaani-address-podium.png',
    quote:
      '“Centre-right politics must be synonymous with economic opportunity, equal dignity, and unyielding defense of freedom for every African citizen.”',
  },
  {
    name: 'Ms Tina Mercep',
    role: 'International Keynote Speaker',
    affiliation: 'Vice Chairman, International Democrat Union (IDU)',
    image: '/images/events/dua-womens-conference-2026/flyer-tina-mercep-keynote.webp',
    quote:
      '“The global centre-right family stands shoulder-to-shoulder with African women leaders championing freedom, rule of law, and multiparty democracy.”',
  },
  {
    name: 'Dr Holger Dix',
    role: 'Strategic Partner',
    affiliation: 'Resident Representative, Konrad-Adenauer-Stiftung Namibia/Angola',
    image: '/images/events/dua-womens-conference-2026/holger-dix-remarks-podium.png',
    quote:
      '“Sustainable democratic institutions rely on strong, principled political parties. Our partnership with DUA continues to build that vital continental capacity.”',
  },
  {
    name: 'Hon. Zhaklina Peshevska',
    role: 'Guest Speaker',
    affiliation: 'President, Women’s Forum of VMRO-DPMNE (North Macedonia)',
    image: '/images/events/dua-womens-conference-2026/zhaklina-peshevska-keynote-podium.png',
    quote:
      '“Cross-continental sisterhood among centre-right parties gives us the collective strength to overcome electoral barriers and inspire future generations.”',
  },
];

const panels = [
  {
    number: '01',
    title: 'Opening Plenary & Continental Strategic Alignment',
    theme: 'Women Working Together for Political Power, Progress and Prosperity',
    description:
      'Official opening statements from DUA Executive Officers, international sister unions, and partner foundations setting the conference agenda for political empowerment.',
  },
  {
    number: '02',
    title: 'High Level Panel 2: Holding the Line',
    theme: 'Centre-Right Women on Security, Sovereignty and the Fight Against Extremism',
    description:
      'A deep strategic examination of how women legislators and party executives confront cross-border terrorism, regional instability, and threats to sovereign constitutional order.',
  },
  {
    number: '03',
    title: 'High Level Panel 3: Women-Led Economic Development',
    theme: 'From Commitment to Action — Enterprise, Trade and Property Rights',
    description:
      'Action-oriented strategies to leverage the African Continental Free Trade Area (AfCFTA), dismantle bureaucratic barriers to women-owned businesses, and promote market-driven growth.',
  },
  {
    number: '04',
    title: 'DUA Woman of Courage Award 2026',
    theme: 'Honouring H.E. Ellen Johnson Sirleaf',
    description:
      'Conferment of DUA’s highest honor on Africa’s first elected female head of state and Nobel Peace Laureate, recognizing lifetime fortitude and institutional reform.',
  },
];

export default function WomensConferencePage() {
  const [activePhotoIndex, setActivePhotoIndex] = useState(null);

  useEffect(() => {
    document.title = 'DUA Women’s Conference 2026 · Windhoek, Namibia — Democracy Union of Africa';
  }, []);

  useEffect(() => {
    const onKeyDown = e => {
      if (activePhotoIndex === null) return;
      if (e.key === 'Escape') setActivePhotoIndex(null);
      if (e.key === 'ArrowRight') setActivePhotoIndex((activePhotoIndex + 1) % galleryPhotos.length);
      if (e.key === 'ArrowLeft') setActivePhotoIndex((activePhotoIndex - 1 + galleryPhotos.length) % galleryPhotos.length);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activePhotoIndex]);

  const activePhoto = activePhotoIndex !== null ? galleryPhotos[activePhotoIndex] : null;

  return (
    <div className="fa-inner-page womens-conference-page">
      {/* Hero Banner with strong real conference photo and dark overlay */}
      <section className="wc-hero">
        <div className="wc-hero-backdrop">
          <img
            src="/images/events/dua-womens-conference-2026/delegates-group-wide.png"
            alt="DUA Women’s Conference 2026 Delegation assembled in Windhoek, Namibia"
            fetchPriority="high"
          />
        </div>
        <div className="wc-hero-overlay" />
        <div className="container wc-hero-content">
          <a className="wc-back-link" href="/events/">
            <ArrowLeft size={16} aria-hidden="true" />
            <span>All Events &amp; Convenings</span>
          </a>
          <p className="wc-eyebrow">CONCLUDED LANDMARK CONFERENCE · WINDHOEK, NAMIBIA</p>
          <h1 className="wc-title">
            DUA Women’s Conference 2026
          </h1>
          <p className="wc-theme">
            “Women Working Together for Political Power, Progress and Prosperity”
          </p>
          <div className="wc-meta-chips">
            <span className="wc-chip">
              <CalendarDays size={16} aria-hidden="true" />
              25 – 28 October 2026
            </span>
            <span className="wc-chip">
              <MapPin size={16} aria-hidden="true" />
              Oryx 2 Hall, Windhoek Country Club, Namibia
            </span>
            <span className="wc-chip">
              <Users size={16} aria-hidden="true" />
              25+ Member Parties Represented
            </span>
          </div>
          <div className="wc-hero-actions">
            <a className="button gold" href="#gallery">
              View Conference Gallery <ArrowUpRight size={18} />
            </a>
            <a className="button light" href="#resolutions">
              Read Windhoek Resolutions <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Conference Overview & Special Guest Feature */}
      <section className="wc-overview section-pad container">
        <div className="wc-overview-grid">
          <div className="wc-overview-copy">
            <span className="eyebrow">EXECUTIVE SUMMARY</span>
            <h2>
              Advancing from political presence to sovereign leadership.
            </h2>
            <p className="lead">
              Hosted in Windhoek, Namibia from 25 to 28 October 2026, the DUA Women’s Conference united women party executives, members of parliament, youth leaders, and global partners across Africa’s center-right political movement.
            </p>
            <p>
              Under the convening leadership of DUA Chairperson Md Louisa Atta-Agyemang and in collaboration with local host Popular Democratic Movement (PDM) led by Hon. McHenry Venaani, delegates deliberated on concrete pathways to expand women’s electoral success, reinforce constitutional governance, and dismantle systemic economic barriers.
            </p>
            <div className="wc-stats-bar">
              <div>
                <strong>25+</strong>
                <span>Sister Parties</span>
              </div>
              <div>
                <strong>4</strong>
                <span>Days of Deliberations</span>
              </div>
              <div>
                <strong>3</strong>
                <span>Adopted Country Resolutions</span>
              </div>
            </div>
          </div>
          <div className="wc-guest-card">
            <div className="wc-guest-image">
              <img
                src="/images/events/dua-womens-conference-2026/samira-bawumia-keynote-podium.png"
                alt="H.E. Lady Samira Bawumia speaking at the podium"
                loading="lazy"
              />
              <span className="wc-guest-badge">Special Guest of Honour</span>
            </div>
            <div className="wc-guest-body">
              <span className="eyebrow">KEYNOTE DELIVERED</span>
              <h3>H.E. Lady Samira R. Bawumia</h3>
              <p className="wc-guest-affil">Second Lady of the Republic of Ghana · Global Democratic Ambassador</p>
              <blockquote>
                “When centre-right women unite across borders, we hold the line for constitutional democracy, dignity, and real economic sovereignty for our communities.”
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Speaker Highlights Section */}
      <section className="wc-speakers-section section-pad">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">VOICES OF LEADERSHIP</p>
              <h2>Keynote Speakers &amp; International Dignitaries.</h2>
            </div>
            <p>
              Distinguished women leaders, party presidents and international partners who addressed the 2026 Windhoek assembly.
            </p>
          </div>
          <div className="wc-speakers-grid">
            {speakers.map((s, idx) => (
              <div className="wc-speaker-card" key={idx}>
                <div className="wc-speaker-photo">
                  <img src={s.image} alt={s.name} loading="lazy" />
                </div>
                <div className="wc-speaker-info">
                  <span className="wc-speaker-role">{s.role}</span>
                  <h3>{s.name}</h3>
                  <p className="wc-speaker-affil">{s.affiliation}</p>
                  <p className="wc-speaker-quote">{s.quote}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Panels & Session Highlights */}
      <section className="wc-panels-section section-pad container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">STRATEGIC SESSIONS</p>
            <h2>High-Level Panels &amp; Deliberations.</h2>
          </div>
          <p>
            Rigorous programmatic working sessions addressing security, economic empowerment, and governance.
          </p>
        </div>
        <div className="wc-panels-grid">
          {panels.map(p => (
            <div className="wc-panel-card" key={p.number}>
              <span className="wc-panel-num">{p.number}</span>
              <span className="eyebrow">{p.theme}</span>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Woman of Courage Award Feature */}
      <section className="wc-award-section container">
        <div className="wc-award-box">
          <div className="wc-award-copy">
            <div className="wc-award-tag">
              <Award size={18} aria-hidden="true" />
              <span>DUA WOMAN OF COURAGE AWARD 2026</span>
            </div>
            <h2>Conferred on H.E. Ellen Johnson Sirleaf</h2>
            <p className="lead">
              Africa’s first democratically elected female President, Nobel Peace Prize Laureate, and relentless advocate for constitutional governance.
            </p>
            <p>
              The Democracy Union of Africa honoured President Sirleaf for her trailblazing courage, post-conflict democratic rebuilding in Liberia, and enduring inspiration to generations of African women entering public leadership.
            </p>
          </div>
          <div className="wc-award-visual">
            <img
              src="/images/events/dua-womens-conference-2026/flyer-woman-of-courage-ellen-johnson-sirleaf.webp"
              alt="DUA Woman of Courage Award 2026 - H.E. Ellen Johnson Sirleaf"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Conference Photo Gallery with Lightbox */}
      <section className="wc-gallery-section section-pad" id="gallery">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">OFFICIAL PHOTOGRAPHY</p>
              <h2>Conference Moments &amp; Gallery.</h2>
            </div>
            <p>
              Select any image to open the high-resolution lightbox viewer. Authentic conference moments from Windhoek.
            </p>
          </div>
          <div className="wc-gallery-grid">
            {galleryPhotos.map((photo, index) => (
              <button
                type="button"
                className={`wc-gallery-item wc-gallery-item--${photo.aspect}`}
                key={photo.id}
                onClick={() => setActivePhotoIndex(index)}
                aria-label={`View full image: ${photo.title}`}
              >
                <img src={photo.src} alt={photo.title} loading="lazy" />
                <div className="wc-gallery-caption-overlay">
                  <strong>{photo.title}</strong>
                  <span>Click to view</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          className="wc-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.title}
          onClick={e => {
            if (e.target === e.currentTarget) setActivePhotoIndex(null);
          }}
        >
          <div className="wc-lightbox-container">
            <div className="wc-lightbox-header">
              <div>
                <span className="eyebrow">
                  PHOTO {activePhotoIndex + 1} OF {galleryPhotos.length}
                </span>
                <h3>{activePhoto.title}</h3>
              </div>
              <button
                type="button"
                className="wc-lightbox-close"
                onClick={() => setActivePhotoIndex(null)}
                aria-label="Close photo viewer"
              >
                <X size={22} />
              </button>
            </div>
            <div className="wc-lightbox-stage">
              <button
                type="button"
                className="wc-lightbox-nav prev"
                onClick={e => {
                  e.stopPropagation();
                  setActivePhotoIndex((activePhotoIndex - 1 + galleryPhotos.length) % galleryPhotos.length);
                }}
                aria-label="Previous photo"
              >
                <ChevronLeft size={28} />
              </button>
              <img src={activePhoto.src} alt={activePhoto.title} />
              <button
                type="button"
                className="wc-lightbox-nav next"
                onClick={e => {
                  e.stopPropagation();
                  setActivePhotoIndex((activePhotoIndex + 1) % galleryPhotos.length);
                }}
                aria-label="Next photo"
              >
                <ChevronRight size={28} />
              </button>
            </div>
            <div className="wc-lightbox-footer">
              <p>{activePhoto.caption}</p>
            </div>
          </div>
        </div>
      )}

      {/* Adopted Resolutions & Related News */}
      <section className="wc-resolutions-section section-pad container" id="resolutions">
        <div className="section-heading">
          <div>
            <p className="eyebrow">ADOPTED RESOLUTIONS · WINDHOEK 2026</p>
            <h2>Official Publications &amp; Action Plan.</h2>
          </div>
          <a className="text-link" href="/policy-briefs/">
            Browse all publications <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="wc-resolutions-grid">
          <div className="wc-res-card">
            <span className="eyebrow">RES-2026-01 · TANZANIA</span>
            <h3>Tundu Lissu Politically Motivated Treason Case</h3>
            <p>
              Endorsed by DUA Vice Chairman Deogratias Munishi demanding the immediate release of opposition leader Tundu Lissu and over 65 detained CHADEMA members.
            </p>
            <div className="wc-res-actions">
              <a className="button gold" href="/news/resolution-tanzania-tundu-lissu-2026/">
                Read Full Resolution <ArrowUpRight size={16} />
              </a>
              <a className="text-link" href="/publications/Tanzania R6.docx" download="Tanzania R6.docx">
                Download .docx <Download size={15} />
              </a>
            </div>
          </div>
          <div className="wc-res-card">
            <span className="eyebrow">RES-2026-02 · IVORY COAST</span>
            <h3>Political Persecution &amp; Electoral Deterioration</h3>
            <p>
              Endorsed by the DUA Board demanding verified safety guarantees for PDCI-RDA leader Hon. Tidjane Thiam and unconditional release of 750+ detained opposition members.
            </p>
            <div className="wc-res-actions">
              <a className="button gold" href="/news/resolution-ivory-coast-2026/">
                Read Full Resolution <ArrowUpRight size={16} />
              </a>
              <a className="text-link" href="/publications/[v2] Ivory Coast 26.docx" download="[v2] Ivory Coast 26.docx">
                Download .docx <Download size={15} />
              </a>
            </div>
          </div>
          <div className="wc-res-card">
            <span className="eyebrow">RES-2026-03 · UGANDA</span>
            <h3>Continued Detention of Dr Kizza Besigye</h3>
            <p>
              Calling on Ugandan authorities to drop fabricated treason charges against former DUA Chairman Dr Kizza Besigye and end abductions of opposition leaders.
            </p>
            <div className="wc-res-actions">
              <a className="button gold" href="/news/resolution-uganda-besigye-2026/">
                Read Full Resolution <ArrowUpRight size={16} />
              </a>
              <a className="text-link" href="/publications/[v2] Uganda.docx" download="[v2] Uganda.docx">
                Download .docx <Download size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Events Navigation */}
      <section className="container wc-footer-nav">
        <a className="text-link" href="/events/">
          <ArrowLeft size={16} aria-hidden="true" /> Back to all DUA Events &amp; Forums
        </a>
      </section>
    </div>
  );
}
