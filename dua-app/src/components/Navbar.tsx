import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { Collapse } from 'bootstrap'

const priorities = [
  { hash: 'democracy-electoral-integrity', label: 'Democracy & Electoral Integrity' },
  { hash: 'economic-freedom', label: 'Economic Freedom' },
  { hash: 'youth-political-leadership', label: 'Youth Political Leadership' },
  { hash: 'women-in-governance', label: 'Women in Governance' },
  { hash: 'regional-cooperation', label: 'Regional Cooperation' },
  { hash: 'peace-accountable-governance', label: 'Peace & Accountable Governance' },
]

const navItems = [
  { to: '/about', label: 'About' },
  { to: '/priorities', label: 'Our Priorities', dropdown: true },
  { to: '/members', label: 'Member Parties' },
  { to: '/leadership', label: 'Leadership' },
  { to: '/events', label: 'Events' },
  { to: '/media', label: 'News & Resources' },
  { to: '/global-network', label: 'Global Network' },
  { to: '/contact', label: 'Contact' },
]

const languages = ['English', 'Français', 'Português', 'العربية']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [prioritiesOpen, setPrioritiesOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [lang, setLang] = useState('English')
  const [searchOpen, setSearchOpen] = useState(false)
  const [term, setTerm] = useState('')
  const collapseRef = useRef<HTMLDivElement>(null)
  const prioritiesRef = useRef<HTMLLIElement>(null)
  const langRef = useRef<HTMLDivElement>(null)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      if (window.scrollY > 50 && collapseRef.current?.classList.contains('show')) {
        Collapse.getInstance(collapseRef.current)?.hide()
      }
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menus & mobile nav on route change
  useEffect(() => {
    setPrioritiesOpen(false)
    setLangOpen(false)
    setSearchOpen(false)
    if (collapseRef.current?.classList.contains('show')) {
      Collapse.getInstance(collapseRef.current)?.hide()
    }
  }, [location.pathname, location.search])

  // Close dropdowns on outside click
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (prioritiesRef.current && !prioritiesRef.current.contains(e.target as Node)) setPrioritiesOpen(false)
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false)
    }
    document.addEventListener('click', onDocClick)
    return () => document.removeEventListener('click', onDocClick)
  }, [])

  const submitSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const q = term.trim()
    if (q) {
      navigate(`/media?q=${encodeURIComponent(q)}`)
      setSearchOpen(false)
      setTerm('')
    }
  }

  return (
    <header className="site-header">
      {/* Language tab */}
      <div className="lang-tab-bar">
        <div className="container d-flex justify-content-end">
          <div className="lang-dropdown" ref={langRef}>
            <button
              type="button"
              className="lang-toggle"
              onClick={(e) => { e.stopPropagation(); setLangOpen((o) => !o) }}
              aria-expanded={langOpen}
            >
              <i className="bi bi-globe2 me-1"></i> {lang}
            </button>
            {langOpen && (
              <ul className="lang-menu">
                {languages.map((l) => (
                  <li key={l}>
                    <button
                      type="button"
                      className={`lang-option ${l === lang ? 'active' : ''}`}
                      onClick={() => { setLang(l); setLangOpen(false) }}
                    >
                      {l}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Top level: logo + mission + (mobile hamburger) */}
      <div className="header-top">
        <div className="container d-flex justify-content-between align-items-center">
          <Link className="header-brand d-flex align-items-center" to="/">
            <img src="/images/logo.png" alt="Democracy Union of Africa" className="header-logo" />
          </Link>
          <div className="d-flex align-items-center gap-3">
            <div className="header-mission text-end d-none d-lg-block">
              <p className="mission-main">Advancing democracy, freedom and prosperity across Africa</p>
              <p className="mission-sub">DUA is the African regional union of the International Democracy Union.</p>
            </div>
            <button
              className="navbar-toggler header-toggler d-lg-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation level */}
      <nav className={`navbar navbar-expand-lg navbar-dark header-nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarNav" ref={collapseRef}>
            <ul className="navbar-nav mx-auto">
              {navItems.map((item) =>
                item.dropdown ? (
                  <li className="nav-item dropdown" key={item.to} ref={prioritiesRef}>
                    <NavLink
                      className="nav-link"
                      to={item.to}
                      onClick={(e) => { e.stopPropagation(); setPrioritiesOpen((o) => !o) }}
                    >
                      {item.label} <i className="bi bi-chevron-down ms-1 small"></i>
                    </NavLink>
                    {prioritiesOpen && (
                      <ul className="priorities-menu">
                        {priorities.map((p) => (
                          <li key={p.hash}>
                            <Link to={`/priorities#${p.hash}`}>{p.label}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li className="nav-item" key={item.to}>
                    <NavLink className="nav-link" to={item.to}>
                      {item.label}
                    </NavLink>
                  </li>
                )
              )}
            </ul>
            <div className="d-flex align-items-center gap-2">
              {searchOpen && (
                <form className="nav-search-form" onSubmit={submitSearch}>
                  <input
                    type="search"
                    className="form-control form-control-sm"
                    placeholder="Search news & statements"
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                    autoFocus
                  />
                </form>
              )}
              <button
                type="button"
                className="nav-search-btn"
                aria-label="Search"
                onClick={() => setSearchOpen((o) => !o)}
              >
                <i className="bi bi-search"></i>
              </button>
              <Link to="/register" className="btn btn-forum">DUA Forum 2026</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
