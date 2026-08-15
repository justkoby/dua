import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import useScrollAnimation from '../hooks/useScrollAnimation'
import NewsCard from '../components/NewsCard'
import { newsItems, filterCategories } from '../data/news'

export default function Media() {
  const scrollRef = useScrollAnimation()
  const [searchParams] = useSearchParams()
  const query = (searchParams.get('q') || '').toLowerCase()
  const [active, setActive] = useState<'All' | (typeof filterCategories)[number]>('All')

  const filtered = newsItems.filter((item) => {
    const matchesCategory = active === 'All' || item.category === active
    const matchesQuery =
      !query ||
      item.title.toLowerCase().includes(query) ||
      item.summary.toLowerCase().includes(query) ||
      item.country.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query)
    return matchesCategory && matchesQuery
  })

  return (
    <div ref={scrollRef}>
      <PageHeader
        title="News & Media"
        subtitle="The official source for DUA statements, press releases, news, speeches and events."
      />

      <section className="media-archive-section fade-in-section">
        <div className="container">
          {/* Filter tabs */}
          <div className="news-filters" role="tablist">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`filter-btn ${active === cat ? 'active' : ''}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {query && (
            <p className="search-note">
              Showing results for <strong>&ldquo;{query}&rdquo;</strong> &mdash; {filtered.length} found
            </p>
          )}

          {filtered.length === 0 ? (
            <p className="text-center py-5">No items match your selection.</p>
          ) : (
            <div className="row g-4">
              {filtered.map((item) => (
                <div className="col-md-6 col-lg-4" key={item.slug}>
                  <NewsCard item={item} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
