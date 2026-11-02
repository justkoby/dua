import React from 'react';
import Lines from './Lines.jsx';
import { ArrowUpRight, ArrowLeft, MapPin, Download } from 'lucide-react';
import { activities, edwsMetrics, storyUrl } from './activities.js';

export function SourcePhoto({ photo, className = '', priority = false }) {
  const original = photo.panel && photo.panel < 1;
  return (
    <div className={`source-photo ${className}`} style={{ '--photo-position': photo.position ?? 'center' }}>
      {original ? (
        <div className="source-panel" style={{ width: `${100 / photo.panel}%` }}>
          <img
            src={photo.src}
            alt={photo.alt}
            loading={priority ? 'eager' : 'lazy'}
            fetchPriority={priority ? 'high' : undefined}
          />
        </div>
      ) : (
        <img
          src={photo.src}
          alt={photo.alt}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : undefined}
        />
      )}
    </div>
  );
}

export function EvidenceStrip() {
  return (
    <section className="evidence-strip">
      <div className="container">
        <div className="evidence-heading">
          <span className="eyebrow">DEMOCRACY UNION OF AFRICA · CONTINENTAL FOOTPRINT</span>
          <p>Uniting centre-right political parties across Africa since 1997.</p>
        </div>
        <div className="evidence-metrics">
          {edwsMetrics.map(m => (
            <div key={m.label}>
              <strong>{m.value}</strong>
              <span>{m.label}</span>
            </div>
          ))}
        </div>
        <div className="evidence-note">
          <p>
            Official African regional union of the International Democracy Union (IDU) · Permanent Secretariat in Accra, Ghana.
          </p>
          <a href="/member-parties/">
            Explore Member Parties <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}

export function ActivitySection({ content }) {
  const pick = (id, fallback) => activities.find(s => s.id === id) ?? activities.find(s => s.id === fallback) ?? activities[0];
  const lead = pick(content.lead, 'tundu-lissu');
  const cards = content.cards.map((id, i) =>
    pick(id, ['resolution-tanzania-r6', 'angola-50-years', 'ct-masterclass-2026'][i])
  );
  return (
    <section id="activity" className="activity-section section-pad container">
      <div className="section-heading">
        <div>
          <p className="eyebrow">{content.eyebrow}</p>
          <h2>
            <Lines lines={content.heading} />
          </h2>
        </div>
        <p>
          {content.intro[0]}
          <br className="desktop-break" /> {content.intro[1]}
        </p>
      </div>
      <a className="activity-lead" href={storyUrl(lead.id)}>
        <SourcePhoto photo={{ ...lead.photo, panel: 1, position: 'center 25%' }} />
        <div className="activity-lead-copy">
          <span className="eyebrow">{lead.category}</span>
          <h3>{lead.title}</h3>
          <p>{lead.summary}</p>
          <span className="activity-location">
            <MapPin size={14} />
            {lead.location} · {lead.displayDate}
          </span>
          <span className="text-link">
            Read official statement <ArrowUpRight size={18} />
          </span>
        </div>
      </a>
      <div className="activity-grid">
        {cards.map(story => (
          <a className="activity-card" href={storyUrl(story.id)} key={story.id}>
            <SourcePhoto photo={story.photo} />
            <div className="activity-card-copy">
              <span className="eyebrow">
                {story.category} / {story.displayDate}
              </span>
              <h3>{story.title}</h3>
              <p>{story.summary}</p>
              <span className="activity-card-link">
                {story.documentUrl ? 'Read & download (.docx)' : 'Read release'} <ArrowUpRight size={17} />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export function StoryPage({ story }) {
  return (
    <article className="story-page">
      <div className="container">
        <a className="text-link story-back" href="/news/">
          <ArrowLeft size={16} />
          Back to News &amp; Statements
        </a>
        <div className="story-heading">
          <p className="eyebrow">{story.category}</p>
          <h1>{story.title}</h1>
          <p className="story-deck">{story.summary}</p>
          <div className="story-meta">
            <time dateTime={story.date}>{story.displayDate}</time>
            <span>{story.location}</span>
          </div>
          {story.documentUrl && (
            <div style={{ marginTop: '1.25rem' }}>
              <a className="button gold" href={story.documentUrl} download>
                Download Official Resolution (.docx) <Download size={18} />
              </a>
            </div>
          )}
        </div>
        <figure>
          <SourcePhoto photo={story.photo} priority />
          <figcaption>{story.imageCaption}</figcaption>
        </figure>
        <div className="story-body">
          {story.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
          {story.related && (
            <a className="text-link" href={story.related}>
              Explore more releases <ArrowUpRight size={16} />
            </a>
          )}
          <aside className="story-source">
            <span className="eyebrow">OFFICIAL RELEASE</span>
            <p>
              Issued by the Democracy Union of Africa (DUA) Secretariat, Accra, Ghana.
            </p>
            <a className="text-link" href="/news/">
              All statements &amp; resolutions <ArrowUpRight size={14} />
            </a>
          </aside>
        </div>
        <div className="story-next">
          <p className="eyebrow">CONTINUE EXPLORING</p>
          {activities
            .filter(s => s.id !== story.id)
            .slice(0, 3)
            .map(s => (
              <a href={storyUrl(s.id)} key={s.id}>
                <span>{s.title}</span>
                <ArrowUpRight size={19} />
              </a>
            ))}
        </div>
      </div>
    </article>
  );
}
