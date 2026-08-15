import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { newsItems, categoryColors } from '../data/news'
import NewsCard from '../components/NewsCard'

export default function Article() {
  const { slug } = useParams()
  const [copied, setCopied] = useState(false)
  const item = newsItems.find((n) => n.slug === slug)

  if (!item || !item.body) {
    return (
      <section className="article-section">
        <div className="container text-center">
          <h1>Statement not found</h1>
          <Link to="/media" className="btn btn-primary mt-3">Back to News & Media</Link>
        </div>
      </section>
    )
  }

  const color = categoryColors[item.category]
  const url = typeof window !== 'undefined' ? window.location.href : ''
  const shareText = encodeURIComponent(item.title)
  const shareUrl = encodeURIComponent(url)

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  const related = newsItems.filter((n) => n.slug !== item.slug).slice(0, 3)

  return (
    <div>
      <article className="article-section">
        <div className="container">
          <div className="article-header">
            <span className="news-category" style={{ backgroundColor: color }}>{item.category}</span>
            <p className="article-dateline">{item.date} | Accra, Ghana</p>
            <h1 className="article-title">{item.title}</h1>
            <p className="article-country"><i className="bi bi-geo-alt me-1"></i>{item.country}</p>
          </div>

          <div className="article-featured-img" style={{ backgroundImage: `url('${item.image}')` }}></div>

          <div className="article-body">
            {item.body.map((block, i) => {
              if (block.type === 'h2') return <h2 key={i}>{block.text}</h2>
              if (block.type === 'quote') return <blockquote key={i}>{block.text}</blockquote>
              if (block.type === 'ul')
                return (
                  <ul key={i}>
                    {block.items?.map((li, j) => <li key={j}>{li}</li>)}
                  </ul>
                )
              return <p key={i}>{block.text}</p>
            })}
          </div>

          {/* Media contact */}
          <div className="article-contact">
            <h3>Media Contact</h3>
            <p className="mb-0">
              {item.spokesperson}<br />
              Democracy Union of Africa<br />
              Accra, Ghana<br />
              <a href="mailto:info@democratunionofafrica.org">info@democratunionofafrica.org</a><br />
              <a href="tel:+233241967709">+233 24 196 7709</a>
            </p>
          </div>

          {/* Actions */}
          <div className="article-actions">
            <button type="button" className="btn btn-primary" onClick={() => window.print()}>
              <i className="bi bi-download me-1"></i> Download PDF
            </button>
            <a
              className="btn btn-outline-light"
              href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-twitter me-1"></i> Share on X
            </a>
            <a
              className="btn btn-outline-light"
              href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-facebook me-1"></i> Share on Facebook
            </a>
            <a
              className="btn btn-outline-light"
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-linkedin me-1"></i> Share on LinkedIn
            </a>
            <button type="button" className="btn btn-outline-light" onClick={copyLink}>
              <i className="bi bi-link-45deg me-1"></i> {copied ? 'Copied!' : 'Copy Link'}
            </button>
          </div>
        </div>
      </article>

      <section className="related-section">
        <div className="container">
          <h2 className="section-title mb-4">Related Statements</h2>
          <div className="row g-4">
            {related.map((r) => (
              <div className="col-md-4" key={r.slug}>
                <NewsCard item={r} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
