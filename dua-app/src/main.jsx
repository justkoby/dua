import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, ArrowRight, Search, Plus, Minus, Globe2 } from 'lucide-react';
import { commentaries } from './pages/commentaries-content.js';
import { getEngageService } from './pages/engage-content.js';
import { page } from './content.js';
import { getHomepage } from './site-content.js';
import Lines from './Lines.jsx';
import './fonts.css';
import './styles.css';
import './floating-assistants.css';
import DiscoveryDialog from './DiscoveryDialog.jsx';
import Hero from './Hero.jsx';
import PeopleSection from './PeopleSection.jsx';
import { ActivitySection, EvidenceStrip, StoryPage } from './ActivitySections.jsx';
import { getStory } from './activities.js';
import SiteHeader, { Brand } from './SiteHeader.jsx';
import InnerPages from './pages/InnerPages.jsx';
import OpportunitiesSection from './OpportunitySections.jsx';
import { events } from './pages/events-content.js';
import { getOpportunityPathway } from './pages/opportunities-content.js';
import PartnerStrip from './PartnerStrip.jsx';
import { resolvePage, teamGroups } from './pages/routes.js';
import { getMember } from './pages/team-content.js';
import GeminiChatbot from './GeminiChatbot.jsx';
import WhatsAppLauncher from './WhatsAppLauncher.jsx';

const Arrow = () => <ArrowUpRight size={21} strokeWidth={1.5} aria-hidden="true" />;

function App() {
  const [navState, setNavState] = useState(() => ({
    pathname: window.location.pathname,
    search: window.location.search,
    hash: window.location.hash,
  }));

  useEffect(() => {
    const syncNav = () => {
      setNavState({
        pathname: window.location.pathname,
        search: window.location.search,
        hash: window.location.hash,
      });
    };
    const onDocClick = e => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const anchor = e.target.closest?.('a[href]');
      if (!anchor) return;
      if (anchor.hasAttribute('download') || (anchor.target && anchor.target !== '_self')) return;
      const rawHref = anchor.getAttribute('href');
      if (!rawHref || rawHref.startsWith('mailto:') || rawHref.startsWith('tel:') || rawHref.startsWith('javascript:')) return;
      if (rawHref.startsWith('#')) return;
      let url;
      try {
        url = new URL(anchor.href, window.location.origin);
      } catch {
        return;
      }
      if (url.origin !== window.location.origin) return;
      if (/\.(docx|pdf|zip|png|jpe?g|webp|mp4)$/i.test(url.pathname)) return;
      e.preventDefault();
      const nextUrl = `${url.pathname}${url.search}${url.hash}`;
      const currUrl = `${window.location.pathname}${window.location.search}${window.location.hash}`;
      if (nextUrl !== currUrl) {
        window.history.pushState({}, '', nextUrl);
        syncNav();
      }
      setMenu(false);
      setSearch(false);
      if (!url.hash) {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    };
    window.addEventListener('popstate', syncNav);
    document.addEventListener('click', onDocClick);
    return () => {
      window.removeEventListener('popstate', syncNav);
      document.removeEventListener('click', onDocClick);
    };
  }, []);

  const currentPage = resolvePage(navState.pathname);
  const currentStory = getStory(new URLSearchParams(navState.search).get('story'));
  const locationKey = `${navState.pathname}${navState.search}${navState.hash}`;

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    const frame = requestAnimationFrame(() => {
      try {
        document.getElementById(decodeURIComponent(hash))?.scrollIntoView({ behavior: 'instant', block: 'start' });
      } catch {
        // ignore invalid hash selector
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [locationKey]);

  useEffect(() => {
    document.title = currentPage
      ? `${
          currentPage.type === 'engage'
            ? 'Engage with DUA'
            : currentPage.type === 'engage-service'
            ? getEngageService(currentPage.id)?.title ?? 'Engage'
            : currentPage.type === 'contact'
            ? 'Contact the Secretariat'
            : currentPage.type === 'careers'
            ? 'Secretariat & Fellowships'
            : currentPage.type === 'news'
            ? 'News & Official Statements'
            : currentPage.type === 'events'
            ? 'Events & DUA Forum'
            : currentPage.type === 'event'
            ? events.find(e => e.id === currentPage.id)?.title ?? 'Events'
            : currentPage.type === 'opportunities'
            ? 'Pathways & Network'
            : currentPage.type === 'opportunity'
            ? getOpportunityPathway(currentPage.id)?.title ?? 'Pathways'
            : currentPage.type === 'news-article'
            ? 'Official Statement'
            : currentPage.type === 'commentary'
            ? commentaries.find(item => item.id === currentPage.id || item.slug === currentPage.slug)?.title ?? 'Commentary'
            : currentPage.type === 'commentaries'
            ? 'Commentaries & Features'
            : currentPage.type === 'partners'
            ? 'Global Network & Partners'
            : currentPage.type === 'policy'
            ? 'Publications & Resolutions'
            : currentPage.type === 'priorities'
            ? 'Our Priorities'
            : currentPage.type === 'members'
            ? 'Member Parties Directory'
            : currentPage.type === 'about'
            ? 'Who We Are'
            : currentPage.type === 'profile'
            ? getMember(currentPage.id)?.name ?? 'Leadership'
            : teamGroups.find(g => g.id === currentPage.group)?.label ?? 'Leadership'
        } — Democracy Union of Africa (DUA)`
      : currentStory
      ? `${currentStory.title} — Democracy Union of Africa (DUA)`
      : 'Democracy Union of Africa (DUA) — Advancing Democracy, Freedom and Prosperity Across Africa';
  }, [currentPage, currentStory]);

  const [scrolled, setScrolled] = useState(() => window.scrollY > 32);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);
  const [active, setActive] = useState(0);
  const [pastHero, setPastHero] = useState(() => Boolean(currentStory || currentPage));
  const searchTrigger = useRef(null);
  const returnFocus = useRef(null);
  const menuTrigger = useRef(null);
  const homeLink = useRef(null);
  const pendingFocus = useRef(null);

  useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape' && menu) {
        setMenu(false);
        menuTrigger.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menu]);

  useEffect(() => {
    const hero = document.querySelector('.hero-slider');
    if (!hero) {
      setPastHero(true);
      return;
    }
    let frame;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const layer = document.querySelector('.content-layer');
        const header = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 96;
        setPastHero(layer ? layer.getBoundingClientRect().top <= header : hero.getBoundingClientRect().bottom <= header);
      });
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [currentStory, currentPage]);

  useEffect(() => {
    if (search) return;
    const target = pendingFocus.current;
    if (!target) return;
    pendingFocus.current = null;
    const node = target.isConnected ? target : searchTrigger.current;
    node?.focus({ preventScroll: true });
  }, [search, pastHero, menu]);

  const closeSearch = () => {
    pendingFocus.current = returnFocus.current;
    setSearch(false);
  };
  const scrollToStart = () => {
    window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    homeLink.current?.focus({ preventScroll: true });
  };
  const openDiscovery = trigger => {
    returnFocus.current = trigger;
    setMenu(false);
    setSearch(true);
  };

  const c = getHomepage();

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader
        scrolled={scrolled}
        solid={Boolean(currentStory || currentPage)}
        menu={menu}
        setMenu={setMenu}
        menuTrigger={menuTrigger}
        searchTrigger={searchTrigger}
        homeLink={homeLink}
        onSearch={openDiscovery}
      />
      <main id="main">
        {currentPage ? (
          <InnerPages route={currentPage} />
        ) : currentStory ? (
          <StoryPage story={currentStory} />
        ) : (
          <>
            <Hero />
            <div className="content-layer">
              <section className="discovery-band" id="discovery">
                <div className="container discovery-band-inner">
                  <div>
                    <span className="eyebrow">{c.discovery.eyebrow}</span>
                    <p>{c.discovery.text}</p>
                  </div>
                  <button className="discovery-entry" onClick={e => openDiscovery(e.currentTarget)}>
                    <Search size={20} />
                    <span>{c.discovery.button}</span>
                    <ArrowRight size={20} />
                  </button>
                </div>
              </section>

              <section className="intro section-pad container" id="about">
                <div>
                  <p className="eyebrow">{c.about.eyebrow}</p>
                  <h2>
                    <Lines lines={c.about.heading} />
                  </h2>
                </div>
                <div className="intro-copy">
                  <p className="lead">{c.about.lead}</p>
                  {c.about.paragraphs.map((text, i) => (
                    <p key={i}>{text}</p>
                  ))}
                  <a className="text-link" href={c.about.cta.href}>
                    {c.about.cta.label} <Arrow />
                  </a>
                </div>
              </section>

              <section className="about-evidence container">
                <figure>
                  <img src={c.convening.image.src} alt={c.convening.alt} loading="lazy" />
                  <figcaption>{c.convening.caption}</figcaption>
                </figure>
                <div>
                  <p className="eyebrow">{c.convening.eyebrow}</p>
                  <h3>
                    <Lines lines={c.convening.heading} />
                  </h3>
                  <p>{c.convening.text}</p>
                  <a className="text-link" href={c.convening.cta.href}>
                    {c.convening.cta.label} <Arrow />
                  </a>
                </div>
              </section>

              <EvidenceStrip />
              <ActivitySection content={c.activity} />
              <PeopleSection content={c.people} />

              <section className="focus-section section-pad" id="focus">
                <div className="container">
                  <div className="section-heading">
                    <div>
                      <p className="eyebrow">{c.focus.eyebrow}</p>
                      <h2>
                        <Lines lines={c.focus.heading} />
                      </h2>
                    </div>
                    <p>
                      {c.focus.intro[0]}
                      <br className="desktop-break" /> {c.focus.intro[1]}
                    </p>
                  </div>
                  <div className="focus-grid">
                    {c.focus.cards.map((f, i) => (
                      <a href={f.href} className="focus-card" key={i}>
                        <div className="card-top">
                          <span>0{i + 1}</span>
                          <Arrow />
                        </div>
                        <h3>{f.title}</h3>
                        <h4>{f.line}</h4>
                        <p>{f.text}</p>
                        <span className="card-bottom">
                          EXPLORE {f.title.toUpperCase()} <ArrowRight size={17} />
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </section>

              <section className="engagement">
                <div className="engagement-photo">
                  <img src={c.engagement.image.src} alt={c.engagement.alt} loading="lazy" width="1280" height="960" />
                </div>
                <div className="engagement-copy">
                  <p className="eyebrow">{c.engagement.eyebrow}</p>
                  <h2>
                    <Lines lines={c.engagement.heading} />
                  </h2>
                  <p>{c.engagement.text}</p>
                  <a className="text-link" href={c.engagement.cta.href}>
                    {c.engagement.cta.label} <Arrow />
                  </a>
                </div>
              </section>

              <section className="research section-pad container" id="research">
                <div className="section-heading">
                  <div>
                    <p className="eyebrow">{c.research.eyebrow}</p>
                    <h2>
                      <Lines lines={c.research.heading} />
                    </h2>
                  </div>
                  <a className="text-link" href={c.research.cta.href}>
                    {c.research.cta.label} <Arrow />
                  </a>
                </div>
                <div className="research-grid">
                  <a className="research-feature" href="/policy-briefs/">
                    <div className="research-art evidence-art" aria-hidden="true">
                      <span className="art-label">DEMOCRACY UNION OF AFRICA / RESOLUTIONS</span>
                      <strong>03</strong>
                      <span className="evidence-art-label">WINDHOEK 2026 RESOLUTIONS · DOCX</span>
                      <span className="art-note">TANZANIA (R6) · CÔTE D’IVOIRE · UGANDA</span>
                    </div>
                    <div className="research-description">
                      <span className="eyebrow">OFFICIAL PUBLICATIONS</span>
                      <h3>
                        Read and download the
                        <br />
                        2026 Windhoek Resolutions.
                      </h3>
                      <span className="text-link">
                        Open Publications &amp; Resolutions <Arrow />
                      </span>
                    </div>
                  </a>
                  <div className="research-list">
                    {c.research.items.map((item, i) => (
                      <a href={item.href} key={i}>
                        <span className="eyebrow">{item.eyebrow}</span>
                        <h3>
                          <Lines lines={item.heading} />
                        </h3>
                        <p>{item.text}</p>
                        <span className="text-link">
                          {item.cta} <Arrow />
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </section>

              <section className="programmes section-pad" id="programmes">
                <div className="container programmes-layout">
                  <div className="programme-intro">
                    <p className="eyebrow">{c.programmes.eyebrow}</p>
                    <h2>
                      <Lines lines={c.programmes.heading} />
                      <br />
                      <em>{c.programmes.emphasis}</em>
                    </h2>
                    <p>{c.programmes.text}</p>
                    <a className="text-link" href={c.programmes.cta.href}>
                      {c.programmes.cta.label} <Arrow />
                    </a>
                  </div>
                  <div className="programme-accordion">
                    {c.programmes.items.map((p, i) => (
                      <div className={'programme-item ' + (active === i ? 'is-open' : '')} key={i}>
                        <h3>
                          <button
                            aria-expanded={active === i}
                            aria-controls={'programme-' + i}
                            onClick={() => setActive(active === i ? -1 : i)}
                          >
                            <span className="programme-number">0{i + 1}</span>
                            <span>{p.title}</span>
                            {active === i ? <Minus size={20} /> : <Plus size={20} />}
                          </button>
                        </h3>
                        <div id={'programme-' + i} hidden={active !== i} className="programme-body">
                          <p>{p.description}</p>
                          <a className="text-link" href={p.url}>
                            Discover initiative <Arrow />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <OpportunitiesSection content={c.opportunities} />
              <PartnerStrip content={c.partners} />

              <section className="connect section-pad" id="connect">
                <div className="container">
                  <p className="eyebrow">{c.connect.eyebrow}</p>
                  <div className="connect-row">
                    <h2>
                      <Lines lines={c.connect.heading} />
                      <br />
                      <em>{c.connect.emphasis}</em>
                    </h2>
                    <a className="connect-arrow" href={c.connect.arrowHref} aria-label={c.connect.arrowLabel}>
                      <ArrowUpRight strokeWidth={1} />
                    </a>
                  </div>
                  <div className="connect-bottom">
                    <p>
                      <Lines lines={c.connect.text} />
                    </p>
                    <a className="button light" href={c.connect.cta.href}>
                      {c.connect.cta.label} <Arrow />
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </>
        )}
      </main>
      <footer>
        <div className="container">
          <div className="footer-top">
            <div>
              <Brand />
              <p>
                Advancing democracy, freedom
                <br />
                and prosperity across Africa.
              </p>
              <p style={{ fontSize: '13px', opacity: 0.78, marginTop: '10px' }}>
                DUA Secretariat · Accra, Ghana
                <br />
                +233 24 196 7709 · info@democratunionofafrica.org
              </p>
            </div>
            <div className="footer-links">
              <span className="eyebrow">THE UNION</span>
              <a href="/who-we-are/">Who we are</a>
              <a href="/priorities/">Our 6 Priorities</a>
              <a href="/member-parties/">Member Parties</a>
              <a href="/leadership/">Leadership</a>
              <a href="/partners/">Global Network (IDU &amp; KAS)</a>
            </div>
            <div className="footer-links">
              <span className="eyebrow">NEWS, PUBLICATIONS &amp; FORUMS</span>
              <a href="/news/">News &amp; Statements</a>
              <a href="/policy-briefs/">Publications &amp; Resolutions (.docx)</a>
              <a href="/blog/">Commentaries &amp; Features</a>
              <a href="/events/dua-forum-2026/">DUA Forum 2026</a>
              <a href={page('contact')}>Contact Secretariat</a>
            </div>
            <div className="footer-note">
              <Globe2 size={25} strokeWidth={1} />
              <p>
                African regional union of the
                <br />
                International Democracy Union.
              </p>
              <button type="button" className="text-link back-to-top" onClick={scrollToStart}>
                Back to top <Arrow />
              </button>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Democracy Union of Africa (DUA). All rights reserved.</span>
            <span>Democracy · Freedom · Enterprise</span>
          </div>
        </div>
      </footer>

      {!search && !menu && (
        <div className="dua-floating-dock" aria-label="Quick contact and AI assistant">
          <WhatsAppLauncher />
          <GeminiChatbot />
        </div>
      )}

      {search && <DiscoveryDialog close={closeSearch} />}
    </>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
