import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { interns } from './people.js';
import Lines from './Lines.jsx';

export default function PeopleSection({ content }) {
  const cards = useRef([]);
  const [highlight, setHighlight] = useState(interns[0]?.id);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top - window.innerHeight * 0.3) -
              Math.abs(b.boundingClientRect.top - window.innerHeight * 0.3)
          );
        if (visible[0]) setHighlight(visible[0].target.dataset.person);
      },
      { rootMargin: '-15% 0px -35% 0px', threshold: 0 }
    );
    cards.current.forEach(c => c && observer.observe(c));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="people-section" id="people">
      <div className="container people-layout">
        <div className="people-intro">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2>
            <Lines lines={content.heading} />
            <br />
            <em>{content.emphasis}</em>
          </h2>
          <p>{content.text}</p>
          <a className="button gold" href={content.cta.href}>
            {content.cta.label} <ArrowUpRight size={19} />
          </a>
          <span className="people-scroll">
            <ArrowDown size={16} />
            {content.scrollHint}
          </span>
        </div>
        <div className="people-cards">
          {interns
            .filter(p => p.published)
            .map((p, i) => (
              <article
                ref={el => (cards.current[i] = el)}
                data-person={p.id}
                key={p.id}
                className={`person-card ${highlight === p.id ? 'is-highlighted' : ''}`}
              >
                <a href={p.href || `/people/${p.id}/`} style={{ display: 'block', color: 'inherit' }}>
                  <div className="person-portrait">
                    <img
                      src={p.portrait.src}
                      alt={p.name}
                      loading="lazy"
                      style={{
                        position: 'static',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: '50% 18%',
                        transform: 'none',
                      }}
                    />
                  </div>
                  <div className="person-copy">
                    <p className="eyebrow">{p.country}</p>
                    <h3>{p.name}</h3>
                    <p>{p.role}</p>
                  </div>
                </a>
              </article>
            ))}
        </div>
      </div>
    </section>
  );
}
