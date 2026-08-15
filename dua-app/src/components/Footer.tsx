import { Link } from 'react-router-dom'
import { useState } from 'react'

const socials = [
  { icon: 'bi-twitter', href: 'https://x.com/dua_africa', label: 'X (Twitter)' },
  { icon: 'bi-facebook', href: 'https://web.facebook.com/profile.php?id=100069232508908', label: 'Facebook' },
  { icon: 'bi-instagram', href: 'https://www.instagram.com/democracyunionofafrica/', label: 'Instagram' },
  { icon: 'bi-linkedin', href: '#', label: 'LinkedIn' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setStatus('success')
    setEmail('')
    setTimeout(() => setStatus('idle'), 4000)
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="row g-5">
          {/* Brand + address */}
          <div className="col-lg-4">
            <Link className="navbar-brand" to="/">
              <img src="/images/logo.png" alt="DUA Logo" style={{ height: '60px' }} />
            </Link>
            <p className="mt-3">
              The Democracy Union of Africa is an alliance of centre-right political parties in
              Africa, affiliated with the International Democracy Union.
            </p>
            <address className="footer-address mb-0">
              <i className="bi bi-geo-alt-fill me-2"></i>DUA Secretariat, Accra, Ghana<br />
              <i className="bi bi-telephone-fill me-2"></i>
              <a href="tel:+233241967709">+233 24 196 7709</a><br />
              <i className="bi bi-envelope-fill me-2"></i>
              <a href="mailto:info@democratunionofafrica.org">info@democratunionofafrica.org</a>
            </address>
          </div>

          {/* Explore */}
          <div className="col-lg-2 col-md-6">
            <h5>Explore</h5>
            <ul className="list-unstyled">
              <li><Link to="/members">Member Parties</Link></li>
              <li><Link to="/leadership">Leadership</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/media">Publications</Link></li>
              <li><Link to="/global-network">Global Network</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-lg-2 col-md-6">
            <h5>Legal</h5>
            <ul className="list-unstyled">
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Use</a></li>
              <li><a href="#cookies">Cookie Policy</a></li>
              <li><a href="#accessibility">Accessibility</a></li>
              <li><a href="#sitemap">Sitemap</a></li>
            </ul>
          </div>

          {/* Newsletter + socials */}
          <div className="col-lg-4">
            <h5>Newsletter</h5>
            <p>Stay informed about DUA programmes, policy statements and events.</p>
            <form onSubmit={handleSubscribe}>
              <label htmlFor="newsletter-email" className="visually-hidden">Email address</label>
              <div className="input-group">
                <input
                  type="email"
                  id="newsletter-email"
                  className="form-control"
                  placeholder="Your email address"
                  aria-label="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{ backgroundColor: 'var(--dark-bg)', borderColor: 'var(--border-color)', color: 'var(--light-text)' }}
                />
                <button className="btn btn-primary" type="submit" style={{ padding: '0.5rem 1rem' }}>
                  Subscribe
                </button>
              </div>
              {status === 'success' && (
                <p className="mt-2 mb-0" style={{ color: '#4caf50', fontSize: '0.875rem' }}>
                  <i className="bi bi-check-circle me-1"></i> Thank you for subscribing!
                </p>
              )}
              {status === 'error' && (
                <p className="mt-2 mb-0" style={{ color: '#f44336', fontSize: '0.875rem' }}>
                  <i className="bi bi-exclamation-circle me-1"></i> Something went wrong. Please try again.
                </p>
              )}
            </form>
            <p className="mt-2 mb-3" style={{ fontSize: '0.8rem', opacity: 0.7 }}>
              We respect your privacy. Unsubscribe anytime.
            </p>
            <div className="footer-socials">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                  <i className={`bi ${s.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container text-center">
          <p className="mb-0">&copy; {currentYear} Democracy Union of Africa. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
