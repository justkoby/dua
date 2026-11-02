import React, { useMemo, useState } from 'react';
import {
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock3,
  MapPin,
  Mail,
  Download,
} from 'lucide-react';
import { events as staticEvents } from './events-content.js';
import { displayDate, eventState, listEvents } from './news-events-model.js';
import { usePublishedEvents, useEvent } from './use-published.js';
import WomensConferencePage from './WomensConferencePage.jsx';
import './news-events.css';

export function Header({ page, title, description }) {
  return (
    <>
      <section className="ne-header">
        <div className="container">
          <nav aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span aria-hidden="true">/</span>
            <span>{title}</span>
          </nav>
          <div className="ne-header-copy">
            <div>
              <p className="eyebrow">DEMOCRACY UNION OF AFRICA</p>
              <h1>
                {title}
                <span>.</span>
              </h1>
            </div>
            <p>{description}</p>
          </div>
        </div>
      </section>
      <nav className="ne-section-nav" aria-label="News, publications and events">
        <div className="container">
          <a href="/news/" aria-current={page === 'news' ? 'page' : undefined}>
            News &amp; Statements
          </a>
          <a href="/policy-briefs/" aria-current={page === 'publications' ? 'page' : undefined}>
            Publications &amp; Resolutions
          </a>
          <a href="/events/" aria-current={page === 'events' ? 'page' : undefined}>
            Events &amp; DUA Forum
          </a>
        </div>
      </nav>
    </>
  );
}

export function NewsImage({ item }) {
  return (
    <div className={`ne-image ${item.imageFit === 'contain' ? 'ne-image--contain' : ''}`}>
      <img src={item.image} alt="" loading="lazy" />
    </div>
  );
}

export function NewsCard({ item }) {
  return (
    <article className="ne-news-card">
      <a href={item.url}>
        <NewsImage item={item} />
        <div>
          <p className="eyebrow">{item.category}</p>
          <time dateTime={item.publishedOn}>Published {displayDate(item.publishedOn)}</time>
          <h3>{item.title}</h3>
          <p>{item.summary}</p>
          <span className="ne-card-action">
            {item.documentUrl ? 'Read & download (.docx)' : 'Read statement'} <ArrowUpRight size={18} aria-hidden="true" />
          </span>
        </div>
      </a>
    </article>
  );
}

function stateBadgeLabel(state) {
  if (state === 'cancelled') return 'Cancelled';
  if (state === 'ongoing') return 'In Progress';
  if (state === 'upcoming') return 'Upcoming';
  if (state === 'unannounced') return '2026 Flagship · Host City TBA';
  return 'Concluded Convening';
}

function EventCard({ item }) {
  const state = eventState(item);
  const rawDate = item.startDate || item.date || '';
  const validDate = /^\d{4}-\d{2}-\d{2}$/.test(rawDate);
  const href = `/events/${encodeURIComponent(item.slug || item.id)}/`;

  return (
    <article className="ne-event-card">
      <a href={href}>
        <div className="ne-event-date">
          {validDate ? (
            <>
              <strong>{rawDate.slice(8)}</strong>
              <span>
                {new Intl.DateTimeFormat('en-GB', { month: 'short', timeZone: 'UTC' }).format(
                  new Date(`${rawDate}T12:00:00Z`)
                )}
              </span>
              <small>{rawDate.slice(0, 4)}</small>
            </>
          ) : (
            <>
              <strong>2026</strong>
              <span>Forum</span>
              <small>TBA</small>
            </>
          )}
        </div>
        <div>
          <div className="ne-event-labels">
            <span className="eyebrow">{item.category || 'DUA Forum'}</span>
            <span className={`ne-event-state ne-event-state--${state}`}>{stateBadgeLabel(state)}</span>
          </div>
          <h3>{item.title}</h3>
          <p>{item.summary}</p>
          <div className="ne-event-meta">
            <span>
              <Clock3 size={14} aria-hidden="true" />
              {item.time || item.dateLabel}
            </span>
            <span>
              <MapPin size={14} aria-hidden="true" />
              {item.location || 'Host city TBA'}
            </span>
          </div>
          <span className="ne-card-action">
            View forum details <ArrowUpRight size={17} aria-hidden="true" />
          </span>
        </div>
      </a>
    </article>
  );
}

export function EventsPage() {
  const [view, setView] = useState('upcoming');
  const { items: allEvents } = usePublishedEvents();

  const upcoming = useMemo(
    () => [
      ...listEvents(allEvents, 'upcoming'),
      ...allEvents.filter(item => eventState(item) === 'unannounced'),
    ],
    [allEvents]
  );
  const past = useMemo(() => listEvents(allEvents, 'past'), [allEvents]);
  const visible = view === 'past' ? past : upcoming;

  return (
    <div className="fa-inner-page news-events-page">
      <Header
        page="events"
        title="Events & DUA Forum"
        description="DUA’s flagship Annual Forum, continental campaign masterclasses, and statutory gatherings uniting centre-right political parties across Africa."
      />
      <section className="container ne-events">
        <div className="ne-events-heading">
          <div>
            <p className="eyebrow">THE CONTINENTAL CALENDAR</p>
            <h2>
              Where Africa’s democratic
              <br />
              leaders convene.
            </h2>
          </div>
          <div className="ne-filters" role="group" aria-label="Event schedule">
            <button aria-pressed={view === 'upcoming'} onClick={() => setView('upcoming')}>
              DUA Forum 2026
            </button>
            <button aria-pressed={view === 'past'} onClick={() => setView('past')}>
              Past Forums &amp; Programmes
            </button>
          </div>
        </div>
        {visible.length ? (
          <div className="ne-event-list">
            {visible.map(item => (
              <EventCard key={item.slug || item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="ne-event-empty">
            <CalendarDays size={35} strokeWidth={1.3} aria-hidden="true" />
            <div>
              <h3>No upcoming events listed in this filter.</h3>
              <p>Contact the DUA Secretariat in Accra regarding upcoming forums and regional meetings.</p>
              <a className="text-link" href="mailto:info@democratunionofafrica.org?subject=DUA%20Events%20Enquiry">
                Email the Secretariat <Mail size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        )}
        {view === 'upcoming' && past.length > 0 && (
          <div className="ne-past-preview">
            <div className="ne-archive-heading">
              <h2>Recent Forums &amp; Programmes (2024–2026)</h2>
              <button className="text-link" onClick={() => setView('past')}>
                View full archive <ArrowRight size={17} aria-hidden="true" />
              </button>
            </div>
            <div className="ne-event-list">
              {past.map(item => (
                <EventCard key={item.slug || item.id} item={item} />
              ))}
            </div>
          </div>
        )}
        <p className="ne-schedule-note">
          Past forums (including Nairobi 2025 and Accra 2024) have concluded; registration for those editions is closed. For DUA Forum 2026 accreditation, contact the DUA Secretariat.
        </p>
      </section>
      <section className="ne-contact">
        <div className="container">
          <h2>
            Prepare your delegation
            <br />
            for DUA Forum 2026.
          </h2>
          <div>
            <p>Register delegation or observer interest with the DUA Secretariat in Accra.</p>
            <a className="button gold" href="/contact/?topic=forum-2026#enquiry">
              Register Interest <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export function EventDetailPage({ id }) {
  if (id === 'womens-conference-2026' || id === 'dua-womens-conference-2026') {
    return <WomensConferencePage />;
  }
  const { item: foundItem } = useEvent(id);
  const item = foundItem || staticEvents[0];
  if (!item) return <EventsPage />;

  const state = eventState(item);
  const isPast = state === 'past';

  return (
    <div className="fa-inner-page news-events-page">
      <section className="ne-event-hero">
        <div className="container">
          <a className="ne-back" href="/events/">
            <ArrowLeft size={15} aria-hidden="true" />
            All Events &amp; Forums
          </a>
          <div className="ne-event-hero-grid">
            <div>
              <p className="eyebrow">
                {item.category} / {isPast ? 'CONCLUDED CONVENING' : '2026 FLAGSHIP CONVENING'}
              </p>
              <h1>{item.title}</h1>
              <p>{item.summary}</p>
            </div>
            <aside>
              <p className="eyebrow">FORUM DETAILS</p>
              <p>
                <CalendarDays size={18} aria-hidden="true" />
                {item.dateLabel || displayDate(item.startDate)}
              </p>
              <p>
                <Clock3 size={18} aria-hidden="true" />
                {item.time || item.format}
              </p>
              <p>
                <MapPin size={18} aria-hidden="true" />
                {item.location}
              </p>

              {isPast ? (
                <div className="ne-registration-note">
                  This forum has concluded. Registration for this past edition is closed.
                </div>
              ) : (
                <>
                  <div className="ne-registration-note" style={{ marginBottom: '12px' }}>
                    Host city and dates will be announced by the DUA Secretariat. Register your delegation’s interest below.
                  </div>
                  <div style={{ margin: '14px 0' }}>
                    <a className="button gold" href="/contact/?topic=forum-2026#enquiry">
                      Register Delegation Interest <ArrowUpRight size={17} aria-hidden="true" />
                    </a>
                  </div>
                </>
              )}

              <a
                className="text-link"
                href={`mailto:info@democratunionofafrica.org?subject=${encodeURIComponent(item.registrationEmailSubject || 'Enquiry: ' + item.title)}`}
              >
                Email DUA Secretariat <Mail size={16} aria-hidden="true" />
              </a>
            </aside>
          </div>
        </div>
      </section>

      <section className="container ne-event-body">
        {item.image && (
          <figure>
            <img src={item.image} alt={item.imageAlt || item.title} loading="lazy" />
            <figcaption>{item.location} · Democracy Union of Africa</figcaption>
          </figure>
        )}
        <div>
          <p className="eyebrow">ABOUT THE CONVENING</p>
          <h2>
            Strengthening democratic
            <br />
            cooperation across Africa.
          </h2>
          <p>{item.summary}</p>
          <p>{item.registrationNote}</p>

          {Array.isArray(item.highlights) && item.highlights.length > 0 && (
            <div style={{ marginTop: 28 }}>
              <p className="eyebrow">KEY HIGHLIGHTS &amp; THEMES</p>
              <div style={{ display: 'grid', gap: 10, marginTop: 12 }}>
                {item.highlights.map((point, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '12px 16px',
                      borderRadius: 6,
                      border: '1px solid rgba(7, 30, 48, 0.12)',
                      background: '#fff',
                    }}
                  >
                    <strong>0{idx + 1} · </strong>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {Array.isArray(item.agenda) && item.agenda.length > 0 && (
            <div style={{ marginTop: 28 }}>
              <p className="eyebrow">PROGRAMME STRUCTURE</p>
              <div style={{ display: 'grid', gap: 10, marginTop: 12 }}>
                {item.agenda.map((ag, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '14px 16px',
                      borderRadius: 6,
                      border: '1px solid rgba(7, 30, 48, 0.12)',
                      background: '#fff',
                      display: 'grid',
                      gridTemplateColumns: ag.day ? '110px 1fr' : '1fr',
                      gap: 12,
                    }}
                  >
                    {ag.day && <strong style={{ color: 'var(--navy)' }}>{ag.day}</strong>}
                    <div>
                      <strong style={{ display: 'block', color: 'var(--navy)' }}>{ag.title}</strong>
                      {ag.detail && <p style={{ margin: '6px 0 0', fontSize: 14 }}>{ag.detail}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <p className="ne-source-note" style={{ marginTop: 28 }}>
            Published by the Democracy Union of Africa (DUA) Secretariat, Accra, Ghana. For accreditation or partnership enquiries, email info@democratunionofafrica.org.
          </p>
          <a className="text-link" href="/events/">
            Back to all events <ArrowRight size={17} aria-hidden="true" />
          </a>
        </div>
      </section>
    </div>
  );
}
