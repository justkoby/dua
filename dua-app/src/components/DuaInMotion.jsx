import React, { useRef } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight, Play, Instagram } from 'lucide-react';

const reelsData = [
  {
    id: 'De_QAJKRqgI',
    url: 'https://www.instagram.com/reel/De_QAJKRqgI/',
    tag: 'Keynote Address',
    title: 'H.E. Lady Samira Bawumia delivers landmark address at DUA Women’s Conference 2026',
    thumbnail: '/images/reels/reel-samira-bawumia.png',
  },
  {
    id: 'DQoywcCDPiW',
    url: 'https://www.instagram.com/reel/DQoywcCDPiW/',
    tag: 'Strategic Diplomacy',
    title: 'DUA Executive Board retreat in Berlin with CDU and Konrad-Adenauer-Stiftung',
    thumbnail: '/images/reels/reel-berlin-retreat.png',
  },
  {
    id: 'DX5EU3mszC5',
    url: 'https://www.instagram.com/reel/DX5EU3mszC5/',
    tag: 'Woman of Courage Award',
    title: 'IDU Secretary General Tina Mercep honoured with the 2026 Woman of Courage Award',
    thumbnail: '/images/reels/reel-tina-mercep-award.png',
  },
  {
    id: 'DJrOLaIN8ZD',
    url: 'https://www.instagram.com/reel/DJrOLaIN8ZD/',
    tag: 'Continental Action',
    title: 'Centre-right women delegates deliberate on peace, power and prosperity in Windhoek',
    thumbnail: '/images/reels/reel-womens-conference-plenary.png',
  },
];

export default function DuaInMotion() {
  const carouselRef = useRef(null);

  const scroll = direction => {
    if (!carouselRef.current) return;
    const cardWidth = 314; // card width + gap
    const scrollAmount = direction === 'left' ? -cardWidth * 2 : cardWidth * 2;
    carouselRef.current.scrollBy({
      left: scrollAmount,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    });
  };

  return (
    <section className="dua-in-motion" id="dua-in-motion" aria-label="DUA in Motion video reels">
      <div className="container">
        <div className="dim-header">
          <div>
            <p className="eyebrow">DUA IN MOTION</p>
            <h2>DUA in Motion.</h2>
            <p>Conversations, leadership and moments shaping our work across Africa.</p>
          </div>
          <div className="dim-controls">
            <button
              className="dim-nav-btn"
              onClick={() => scroll('left')}
              aria-label="Previous reels"
              type="button"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              className="dim-nav-btn"
              onClick={() => scroll('right')}
              aria-label="Next reels"
              type="button"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="dim-carousel" ref={carouselRef} tabIndex={0} role="region" aria-label="Instagram reels carousel">
          <div className="dim-track">
            {reelsData.map(reel => (
              <a
                key={reel.id}
                href={reel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="dim-card"
                aria-label={`${reel.title} — Watch on Instagram`}
              >
                <img
                  src={reel.thumbnail}
                  alt={reel.title}
                  className="dim-card-thumb"
                  loading="lazy"
                />
                <div className="dim-card-overlay" />
                <div className="dim-play-badge" aria-hidden="true">
                  <Play size={17} fill="currentColor" />
                </div>
                <div className="dim-card-content">
                  <span className="dim-card-tag">{reel.tag}</span>
                  <h3 className="dim-card-title">{reel.title}</h3>
                  <span className="dim-card-link">
                    Watch on Instagram <ArrowUpRight size={14} aria-hidden="true" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="dim-footer">
          <p>Official video reels from the Democracy Union of Africa Secretariat and continental summits.</p>
          <a
            href="https://www.instagram.com/democracyunionofafrica/"
            target="_blank"
            rel="noopener noreferrer"
            className="button gold"
          >
            Follow DUA on Instagram <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
