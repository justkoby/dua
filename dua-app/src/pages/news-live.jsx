import React, { useEffect, useState } from 'react';
import { ArrowUpRight, ArrowRight, ArrowLeft, Download, Search } from 'lucide-react';
import { Header, NewsImage, NewsCard } from './NewsEventsPages.jsx';
import { filterNews, displayDate, newsCategories } from './news-events-model.js';
import { activities, storyUrl } from '../activities.js';
import { usePublished, useArticle } from './use-published.js';
import './commentary-article.css';

function asNews(item) {
  const date = String(item.publishedOn || item.publishedAt || '').slice(0, 10);
  return {
    id: String(item.id || item.slug),
    slug: item.slug,
    title: item.title,
    summary: item.summary,
    category: item.category || 'Statements & Resolutions',
    location: item.dateline || item.location || 'ACCRA, GHANA',
    publishedOn: date,
    image: item.image,
    imageFit: item.imageFit || 'cover',
    documentUrl: item.documentUrl || null,
    url: `/news/${item.slug}/`,
  };
}

export function NewsPage() {
  const published = usePublished('news');
  const rows = published.items.map(asNews).filter(item => item.publishedOn);
  const categories = newsCategories;
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState(() => {
    const param = new URLSearchParams(window.location.search).get('category');
    return categories.includes(param) ? param : 'All Updates';
  });

  const results = filterNews({ query, category, items: rows });
  const featured = !query.trim() && category === 'All Updates' ? results[0] : null;
  const cards = results.filter(item => item.id !== featured?.id);

  return (
    <div className="fa-inner-page news-events-page">
      <Header
        page="news"
        title="News & Statements"
        description="Official statements from the DUA Chairperson, press releases, adopted Windhoek 2026 Country Resolutions (.docx), and continental programme updates."
      />
      {featured && (
        <section className="container ne-feature">
          <a href={featured.url}>
            <NewsImage item={featured} />
            <div>
              <p className="eyebrow">LATEST RELEASE / {featured.category}</p>
              <time dateTime={featured.publishedOn}>Published {displayDate(featured.publishedOn)}</time>
              <h2>{featured.title}</h2>
              <p>{featured.summary}</p>
              <span className="text-link">
                {featured.documentUrl ? 'Read & download resolution' : 'Read full statement'} <ArrowUpRight size={19} aria-hidden="true" />
              </span>
            </div>
          </a>
        </section>
      )}
      <section className="container ne-archive" id="news-archive">
        <div className="ne-archive-heading">
          <h2>{featured ? 'More from the Democracy Union of Africa.' : 'Statements & Publications archive.'}</h2>
          <label className="ne-search">
            <Search size={18} aria-hidden="true" />
            <span className="ne-sr">Search news</span>
            <input
              type="search"
              placeholder="Search by country, leader or resolution"
              maxLength={200}
              value={query}
              onChange={event => setQuery(event.target.value)}
            />
          </label>
        </div>
        <div className="ne-filters" role="group" aria-label="Filter news">
          {categories.map(value => (
            <button key={value} aria-pressed={category === value} onClick={() => setCategory(value)}>
              {value}
            </button>
          ))}
        </div>
        <p className="ne-result-count" role="status">
          {cards.length} {cards.length === 1 ? 'release' : 'releases'}
          {query.trim() ? ` matching “${query.trim()}”` : ''}
        </p>
        {cards.length ? (
          <div className="ne-news-grid">
            {cards.map(item => (
              <NewsCard item={item} key={item.id} />
            ))}
          </div>
        ) : (
          <div className="ne-empty">
            <Search size={28} aria-hidden="true" />
            <h3>No matching releases.</h3>
            <p>Try another keyword or category.</p>
            <button
              className="button gold"
              onClick={() => {
                setQuery('');
                setCategory('All news');
              }}
            >
              Reset search <ArrowRight size={17} aria-hidden="true" />
            </button>
          </div>
        )}
      </section>
      <section className="ne-programme-updates">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">HIGHLIGHTS &amp; RESOLUTIONS</p>
              <h2>Continental action in focus.</h2>
            </div>
            <a className="text-link" href="/policy-briefs/">
              Browse Publications &amp; Resolutions (.docx) <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
          <div className="ne-programme-grid">
            {activities.slice(0, 3).map(item => (
              <a href={storyUrl(item.id)} key={item.id}>
                <p className="eyebrow">{item.type}</p>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <span className="text-link">
                  {item.cta} <ArrowUpRight size={16} aria-hidden="true" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export function NewsArticle({ slug }) {
  const article = useArticle('news', slug);
  const archive = usePublished('news');

  useEffect(() => {
    if (article.item?.title) document.title = `${article.item.title} — Democracy Union of Africa (DUA)`;
  }, [article.item]);

  if (!article.item) {
    return (
      <div className="fa-inner-page news-events-page">
        <Header page="news" title="News & Statements" description="This statement or resolution is not available." />
        <div className="container ne-empty" role="alert">
          <h3>This statement could not be found.</h3>
          <p>{article.error || 'Please browse all published statements and resolutions in the DUA archive.'}</p>
          <a className="button gold" href="/news/">
            Back to News &amp; Statements
          </a>
        </div>
      </div>
    );
  }

  const item = article.item;
  const date = String(item.publishedOn || item.publishedAt || '').slice(0, 10);

  const sorted = (archive.items || [])
    .map(asNews)
    .filter(n => n.publishedOn)
    .sort((a, b) => Date.parse(b.publishedOn) - Date.parse(a.publishedOn));

  const currentIndex = sorted.findIndex(other => String(other.id) === String(item.id) || other.slug === item.slug);
  const nextArticle = currentIndex > 0 ? sorted[currentIndex - 1] : null;
  const prevArticle = currentIndex >= 0 && currentIndex < sorted.length - 1 ? sorted[currentIndex + 1] : null;

  const related = sorted
    .filter(other => String(other.id) !== String(item.id) && other.slug !== item.slug)
    .slice(0, 3);

  return (
    <article className="fa-inner-page news-events-page">
      <section className="ne-event-hero">
        <div className="container">
          <a className="ne-back" href="/news/">
            <ArrowLeft size={15} aria-hidden="true" /> Back to News &amp; Statements
          </a>
          <div className="ne-event-hero-grid">
            <div>
              <p className="eyebrow">
                {item.category || 'Official Statement'} / {item.dateline || 'ACCRA, GHANA'}
              </p>
              <h1>{item.title}</h1>
              <p>{item.summary}</p>
              {item.spokesperson && (
                <p>
                  Issued by: <strong>{item.spokesperson}</strong>
                </p>
              )}
              {date && <time dateTime={date}>{displayDate(date)}</time>}
              {item.documentUrl && (
                <div style={{ marginTop: '1.5rem' }}>
                  <a className="button gold" href={item.documentUrl} download>
                    Download Official Resolution (.docx) <Download size={18} aria-hidden="true" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="container ne-event-body">
        {item.image && (
          <figure>
            <img src={item.image} alt={item.imageAlt || item.title} fetchPriority="high" />
            <figcaption>{item.dateline} · Democracy Union of Africa</figcaption>
          </figure>
        )}
        <div>
          <div className="article-prose" dangerouslySetInnerHTML={{ __html: item.html || '' }} />
          {item.documentUrl && (
            <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--line)' }}>
              <a className="button gold" href={item.documentUrl} download>
                Download Original Word Document (.docx) <Download size={17} aria-hidden="true" />
              </a>
            </div>
          )}
        </div>
      </section>
      {(prevArticle || nextArticle) && (
        <nav className="container article-nav" aria-label="Article pagination">
          <div className="article-nav-prev">
            {prevArticle && (
              <a href={prevArticle.url} className="article-nav-card">
                <span className="article-nav-direction">
                  <ArrowLeft size={14} aria-hidden="true" /> Previous release
                </span>
                <strong className="article-nav-title">{prevArticle.title}</strong>
              </a>
            )}
          </div>
          <div className="article-nav-next">
            {nextArticle && (
              <a href={nextArticle.url} className="article-nav-card">
                <span className="article-nav-direction">
                  Next release <ArrowRight size={14} aria-hidden="true" />
                </span>
                <strong className="article-nav-title">{nextArticle.title}</strong>
              </a>
            )}
          </div>
        </nav>
      )}
      {related.length > 0 && (
        <section className="container article-related-section">
          <div className="article-related-header">
            <div>
              <p className="eyebrow">CONTINUE EXPLORING</p>
              <h2>More from the Democracy Union of Africa.</h2>
            </div>
            <a href="/news/" className="text-link">
              View all releases <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
          <div className="ne-news-grid">
            {related.map(card => (
              <NewsCard item={card} key={card.id} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
