import { Link } from 'react-router-dom'
import { categoryColors, type NewsItem } from '../data/news'

export function itemLink(item: NewsItem): string {
  if (item.link) return item.link
  if (item.body) return `/news/${item.slug}`
  return '#'
}

/* ─── Horizontal Featured Card ─── */
interface FeaturedProps {
  item: NewsItem
}

export function FeaturedNewsCard({ item }: FeaturedProps) {
  const color = categoryColors[item.category]
  const to = itemLink(item)
  const isExternal = to.startsWith('http')

  return (
    <article className="featured-card">
      <div className="featured-card-img">
        <img src={item.image} alt={item.title} />
      </div>
      <div className="featured-card-body">
        <div className="featured-card-meta">
          <span className="news-category" style={{ backgroundColor: color }}>
            {item.category}
          </span>
          <span className="news-country">{item.country}</span>
          <span className="news-date">{item.date}</span>
        </div>
        <h3 className="featured-card-title">{item.title}</h3>
        <p className="featured-card-summary">{item.summary}</p>
        <div className="featured-card-links">
          {isExternal ? (
            <a href={to} className="text-link primary" target="_blank" rel="noopener noreferrer">
              Read Full Statement <i className="bi bi-arrow-right"></i>
            </a>
          ) : (
            <Link to={to} className="text-link primary">
              Read Full Statement <i className="bi bi-arrow-right"></i>
            </Link>
          )}
          <button type="button" className="text-link subtle" onClick={() => window.print()}>
            Download PDF <i className="bi bi-download"></i>
          </button>
        </div>
      </div>
    </article>
  )
}

// default export for backward compatibility (Media, Article pages)
export default SmallNewsCard

/* ─── Compact Supporting Card (no summary) ─── */
interface SmallProps {
  item: NewsItem
}

export function SmallNewsCard({ item }: SmallProps) {
  const color = categoryColors[item.category]
  const to = itemLink(item)
  const isExternal = to.startsWith('http')

  const linkLabel =
    item.category === 'Press Releases'
      ? 'Read Press Release'
      : item.category === 'Statements'
        ? 'Read Statement'
        : item.category === 'Programme Updates'
          ? 'Read Programme Update'
          : 'Read More'

  return (
    <article className="small-card">
      <div className="small-card-img">
        <img src={item.image} alt={item.title} />
      </div>
      <div className="small-card-body">
        <div className="small-card-meta">
          <span className="news-category" style={{ backgroundColor: color }}>
            {item.category}
          </span>
          <span className="news-country">{item.country}</span>
        </div>
        <h4 className="small-card-title">{item.title}</h4>
        <span className="news-date">{item.date}</span>
        {isExternal ? (
          <a href={to} className="text-link primary" target="_blank" rel="noopener noreferrer">
            {linkLabel} <i className="bi bi-arrow-right"></i>
          </a>
        ) : (
          <Link to={to} className="text-link primary">
            {linkLabel} <i className="bi bi-arrow-right"></i>
          </Link>
        )}
      </div>
    </article>
  )
}