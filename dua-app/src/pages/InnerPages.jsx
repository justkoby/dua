import React, { useEffect, useState } from 'react';
import { ArrowUpRight, ArrowLeft, ArrowRight, ArrowDown, Mail, MapPin, Phone } from 'lucide-react';
import CommentaryArticle from './CommentaryArticle.jsx';
import { aboutContent } from './about-content.js';
import { teamMembers, additionalTeamMembers, getMember } from './team-content.js';
import { teamGroups, personUrl } from './routes.js';
import { page } from '../content.js';
import { EngagePage, EngageServicePage, ContactPage, CareersPage } from './EngagePages.jsx';
import { EventsPage, EventDetailPage } from './NewsEventsPages.jsx';
import { NewsPage, NewsArticle } from './news-live.jsx';
import { OpportunitiesPage, OpportunityDetailPage } from './OpportunitiesPages.jsx';
import CommentariesPage from './CommentariesPage.jsx';
import { PartnersPage, PolicyBriefsPage } from './PartnersPolicyPages.jsx';
import YduaPage from './YduaPage.jsx';
import { duaPriorities, duaMemberParties } from '../dua-data.js';
import './inner-pages.css';

const Arrow = () => <ArrowUpRight size={19} aria-hidden="true" />;

export function InnerHero({ eyebrow, title, description, image, alt, compact = false }) {
  return (
    <section className={`fa-inner-hero ${compact ? 'fa-inner-hero--compact' : ''}`}>
      <div className="container">
        <a className="fa-breadcrumb" href="/">
          Home <span>/</span> {eyebrow}
        </a>
        <div className="fa-inner-hero-copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1>
            {title.map((line, i) => (
              <span key={line}>{i === title.length - 1 ? <em>{line}</em> : line}</span>
            ))}
          </h1>
          <p>{description}</p>
          <a href="#page-content" className="fa-scroll-cue">
            <ArrowDown size={17} />
            Discover more
          </a>
        </div>
      </div>
      {image && (
        <div className="fa-inner-hero-photo">
          <img src={image} alt={alt} fetchPriority="high" />
        </div>
      )}
    </section>
  );
}

export function ClosingCTA() {
  return (
    <section className="fa-closing">
      <div className="container">
        <p className="eyebrow">BUILDING A BRIGHTER FUTURE FOR AFRICA TOGETHER</p>
        <div>
          <h2>
            Shared democratic values.
            <br />
            <em>Continental solidarity.</em>
          </h2>
          <a className="button gold" href={page('contact')}>
            Contact the DUA Secretariat <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}

export function AboutPage() {
  return (
    <div className="fa-inner-page">
      <InnerHero {...aboutContent.hero} />
      <nav className="fa-section-nav" aria-label="About this page">
        <div className="container">
          {[
            ['who-we-are', 'Who we are'],
            ['mission', 'Mission & vision'],
            ['priorities', 'Six strategic pillars'],
            ['chairperson-message', 'Chairperson’s message'],
            ['approach', 'Core work'],
            ['values', 'Our values'],
            ['our-people', 'Leadership'],
          ].map(([id, label]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </div>
      </nav>
      <div id="page-content">
        <section id="who-we-are" className="fa-editorial container">
          <div>
            <p className="eyebrow">01 / WHO WE ARE</p>
            <h2>
              Africa’s centre-right union.
              <br />
              Founded in 1997.
            </h2>
          </div>
          <div>
            <p className="fa-lead">{aboutContent.introduction[0]}</p>
            {aboutContent.introduction.slice(1).map(p => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </section>

        <section id="mission" className="fa-mission">
          <div className="container fa-image-text">
            <figure>
              <img
                src="/images/4.webp"
                alt="Delegates at the Democracy Union of Africa Annual Forum"
                loading="lazy"
              />
              <figcaption>Continental Convening · Democracy Union of Africa</figcaption>
            </figure>
            <div>
              <p className="eyebrow">02 / OUR MISSION</p>
              <h2>
                Defending democracy
                <br />
                and free enterprise.
              </h2>
              {aboutContent.mission.map(p => (
                <p key={p}>{p}</p>
              ))}
              <a className="text-link" href="/priorities/">
                Explore our 6 strategic priorities <Arrow />
              </a>
            </div>
          </div>
        </section>

        <section className="fa-vision">
          <div className="container">
            <p className="eyebrow">OUR VISION</p>
            <p className="fa-vision-statement">
              {aboutContent.vision
                .split(/(accountable governance|free enterprise|constitutional liberty)/)
                .map((part, i) =>
                  ['accountable governance', 'free enterprise', 'constitutional liberty'].includes(part) ? (
                    <span key={i}>{part}</span>
                  ) : (
                    part
                  )
                )}
            </p>
          </div>
        </section>

        <section id="priorities" className="focus-section section-pad" style={{ background: '#f5f9fc' }}>
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">03 / STRATEGIC PILLARS</p>
                <h2>
                  Six strategic pillars.
                  <br />
                  One democratic union.
                </h2>
              </div>
              <p>
                From constitutionalism and electoral integrity
                <br className="desktop-break" /> to free enterprise and youth empowerment.
              </p>
            </div>
            <div className="focus-grid">
              {duaPriorities.map((f, i) => (
                <a href={`/priorities/#${f.id}`} className="focus-card" key={f.id}>
                  <div className="card-top">
                    <span>{f.number}</span>
                    <Arrow />
                  </div>
                  <h3>{f.title}</h3>
                  <h4>{f.tag}</h4>
                  <p>{f.summary}</p>
                  <span className="card-bottom">
                    EXPLORE {f.shortTitle.toUpperCase()} <ArrowRight size={17} />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="chairperson-message" className="fa-mission" style={{ background: '#fff' }}>
          <div className="container fa-image-text">
            <figure>
              <img
                src="/images/Pic 2.webp"
                alt="Md Louisa Atta-Agyemang, Chairperson of the Democracy Union of Africa"
                loading="lazy"
              />
              <figcaption>Md Louisa Atta-Agyemang · Chairperson, Democracy Union of Africa</figcaption>
            </figure>
            <div>
              <p className="eyebrow">CHAIRPERSON’S MESSAGE</p>
              <h2>
                A new generation of
                <br />
                centre-right leadership.
              </h2>
              <p>
                “Across our continent, citizens are demanding accountable governance, credible elections, and economies that reward enterprise and hard work. Since 1997, the Democracy Union of Africa has stood as the home of political parties that believe in constitutional rule, individual liberty, and free enterprise.”
              </p>
              <p>
                “As Chairperson, my commitment is to ensure that DUA is a decisive voice whenever democratic norms are threatened, and a practical training ground that equips our member parties—especially our youth and women—to win elections and govern with integrity.”
              </p>
              <a className="text-link" href="/people/louisa-atta-agyemang/">
                Read Chairperson’s full biography <Arrow />
              </a>
            </div>
          </div>
        </section>

        <section id="approach" className="fa-approach container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">03 / OUR CORE WORK</p>
              <h2>
                Principles in practice.
                <br />
                Solidarity in action.
              </h2>
            </div>
            <p>
              How DUA advances democracy
              <br />
              across the continent.
            </p>
          </div>
          <div className="fa-approach-list">
            {[
              {
                title: 'Strategic Priorities & Policy',
                text: 'Six core pillars: Electoral Integrity, Economic Freedom, Youth & Women’s Leadership, Regional Cooperation, and Peace.',
                href: '/priorities/',
              },
              {
                title: 'Official Statements & Resolutions',
                text: 'Windhoek 2026 Country Resolutions (.docx) and Chairperson declarations defending democracy and human rights.',
                href: '/policy-briefs/',
              },
              {
                title: 'DUA Annual Forum & Masterclasses',
                text: 'Flagship continental forums (Accra 2024, Nairobi 2025, Forum 2026) and the CT Group Campaign Masterclass Series.',
                href: '/events/',
              },
            ].map((item, i) => (
              <a href={item.href} key={item.title}>
                <span className="fa-row-number">0{i + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <Arrow />
              </a>
            ))}
          </div>
        </section>

        <section id="values" className="fa-values">
          <div className="container fa-values-layout">
            <div>
              <p className="eyebrow">04 / OUR VALUES</p>
              <h2>
                What we believe.
                <br />
                What unites us.
              </h2>
              <p>
                Foundational centre-right principles
                <br />
                shared by all DUA member parties.
              </p>
            </div>
            <div>
              {aboutContent.values.map((value, i) => (
                <div className="fa-value-row" key={value.title}>
                  <span>0{i + 1}</span>
                  <div>
                    <h3>{value.title}</h3>
                    <p>{value.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="our-people" className="fa-people-teaser container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">05 / LEADERSHIP & NETWORK</p>
              <h2>
                Continental representation.
                <br />
                One shared mandate.
              </h2>
            </div>
            <a className="text-link" href="/leadership/">
              Meet all DUA leaders <Arrow />
            </a>
          </div>
          <div className="fa-teaser-grid">
            {teamGroups.map((group, i) => (
              <a key={group.id} href={group.path}>
                <span className="eyebrow">
                  0{i + 1} / {group.label}
                </span>
                <h3>
                  {
                    {
                      executive: 'Continental executive direction.',
                      council: 'Regional representation across Africa.',
                      secretariat: 'Coordination in Accra.',
                    }[group.id]
                  }
                </h3>
                <p>{group.description}</p>
                <span className="text-link">
                  Explore {group.label.toLowerCase()} <Arrow />
                </span>
              </a>
            ))}
          </div>
        </section>
      </div>
      <ClosingCTA />
    </div>
  );
}

export function PrioritiesPage() {
  return (
    <div className="fa-inner-page">
      <InnerHero
        eyebrow="OUR PRIORITIES"
        title={['Six pillars for a', 'freer, stronger Africa.']}
        description="The Democracy Union of Africa coordinates policy dialogue, inter-party solidarity, and capacity-building programmes across six foundational centre-right priorities."
        image="/images/3.webp"
        alt="Delegates at the Democracy Union of Africa Forum"
      />
      <nav className="fa-section-nav" aria-label="Priorities navigation">
        <div className="container">
          {duaPriorities.map(p => (
            <a key={p.id} href={`#${p.id}`}>
              {p.number} · {p.shortTitle}
            </a>
          ))}
        </div>
      </nav>
      <div id="page-content">
        {duaPriorities.map((priority, idx) => (
          <section
            key={priority.id}
            id={priority.id}
            className={idx % 2 === 0 ? 'fa-mission' : 'fa-values'}
          >
            <div className="container fa-image-text">
              <figure>
                <img src={priority.image} alt={priority.title} loading="lazy" />
                <figcaption>
                  Pillar {priority.number} · {priority.tag}
                </figcaption>
              </figure>
              <div>
                <p className="eyebrow">
                  {priority.number} / {priority.tag}
                </p>
                <h2>{priority.title}</h2>
                <p>{priority.description}</p>
                <div style={{ marginTop: '1.5rem', display: 'grid', gap: '0.75rem' }}>
                  {priority.pillars.map((point, pIdx) => (
                    <div
                      key={point}
                      style={{
                        padding: '0.9rem 1.15rem',
                        background: 'rgba(7, 30, 48, 0.04)',
                        borderLeft: '3px solid var(--gold)',
                        fontWeight: 500,
                      }}
                    >
                      <strong>0{pIdx + 1} · </strong>
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
      <ClosingCTA />
    </div>
  );
}

export function MembersPage() {
  const regions = ['All Regions', 'West Africa', 'East Africa', 'Southern Africa', 'Central Africa', 'North Africa'];
  const [selectedRegion, setSelectedRegion] = useState('All Regions');

  const filtered =
    selectedRegion === 'All Regions'
      ? duaMemberParties
      : duaMemberParties.filter(m => m.region === selectedRegion);

  return (
    <div className="fa-inner-page">
      <InnerHero
        eyebrow="MEMBER PARTIES"
        title={['Over 25 sister parties', 'across Africa.']}
        description="From Ghana, Ivory Coast, and Cabo Verde to Kenya, Tanzania, Uganda, Angola, Namibia, South Africa, and Morocco, DUA unites governing and opposition centre-right parties."
        image="/images/coorperation.png"
        alt="Democracy Union of Africa Member Parties"
      />
      <nav className="fa-section-nav fa-team-nav" aria-label="Filter by region">
        <div className="container">
          {regions.map(region => (
            <a
              key={region}
              href="#page-content"
              aria-current={selectedRegion === region ? 'page' : undefined}
              onClick={e => {
                e.preventDefault();
                setSelectedRegion(region);
              }}
            >
              {region}
            </a>
          ))}
        </div>
      </nav>
      <div id="page-content">
        <section className="container fa-team-directory" style={{ paddingTop: '60px' }}>
          <div className="fa-team-intro">
            <p className="eyebrow">CONTINENTAL DIRECTORY · {selectedRegion.toUpperCase()}</p>
            <h2>Member &amp; Affiliate Parties</h2>
            <p>
              Showing {filtered.length} published member {filtered.length === 1 ? 'party' : 'parties'} in {selectedRegion}.
            </p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
              gap: '24px',
              marginTop: '36px',
            }}
          >
            {filtered.map(member => (
              <article
                key={member.id}
                style={{
                  background: '#ffffff',
                  border: '1px solid var(--line)',
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '18px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <img
                    src={member.flag}
                    alt={`${member.country} flag`}
                    loading="lazy"
                    style={{
                      width: '60px',
                      height: '40px',
                      objectFit: 'cover',
                      border: '1px solid rgba(7, 30, 48, 0.16)',
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <p className="eyebrow" style={{ marginBottom: '4px', fontSize: '10px' }}>
                      {member.region}
                    </p>
                    <h3 style={{ fontSize: '22px', margin: 0 }}>{member.country}</h3>
                  </div>
                </div>
                <div>
                  <p style={{ fontWeight: 700, color: 'var(--navy)', margin: '0 0 6px', fontSize: '16px' }}>
                    {member.party}
                  </p>
                  <p style={{ margin: 0, fontSize: '14px', color: '#56646c' }}>{member.fullName}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
      <ClosingCTA />
    </div>
  );
}

export function PersonCard({ member }) {
  return (
    <a className="fa-person-card" href={personUrl(member.id)}>
      <div className="fa-person-photo">
        <img src={member.image} alt={member.name} loading="lazy" />
        <span className="fa-person-arrow">
          <Arrow />
        </span>
      </div>
      <div className="fa-person-meta">
        <p className="eyebrow">{member.role}</p>
        <h3>{member.name}</h3>
        <p>{member.intro}</p>
        <span className="text-link">
          Read biography <Arrow />
        </span>
      </div>
    </a>
  );
}

export function TeamPage({ groupId = 'all' }) {
  const [selectedGroup, setSelectedGroup] = useState(groupId || 'all');

  useEffect(() => {
    setSelectedGroup(groupId || 'all');
  }, [groupId]);

  const shownMembers =
    selectedGroup === 'all' || selectedGroup === 'secretariat'
      ? teamMembers
      : teamMembers.filter(p => p.group === selectedGroup);

  return (
    <div className="fa-inner-page">
      <InnerHero
        eyebrow="OUR LEADERSHIP"
        title={['Elected leaders across', 'five African regions.']}
        description="Meet the Chairperson, Secretary General, Deputy Chairperson, Treasurer, and Regional Vice-Chairs guiding the Democracy Union of Africa."
        compact
      />
      <nav className="fa-section-nav fa-team-nav" aria-label="Leadership groups">
        <div className="container">
          <a
            href="/leadership/"
            aria-current={selectedGroup === 'all' ? 'page' : undefined}
            onClick={e => {
              e.preventDefault();
              setSelectedGroup('all');
            }}
          >
            All Leadership (9)
          </a>
          {teamGroups.map(g => (
            <a
              key={g.id}
              href={g.path}
              aria-current={g.id === selectedGroup ? 'page' : undefined}
              onClick={e => {
                e.preventDefault();
                setSelectedGroup(g.id);
              }}
            >
              {g.label}
            </a>
          ))}
        </div>
      </nav>
      <div id="page-content">
        <section className="container fa-team-directory">
          <div className="fa-team-intro">
            <p className="eyebrow">EXECUTIVE COMMITTEE &amp; VICE-CHAIRS</p>
            <h2>
              {selectedGroup === 'all'
                ? 'Executive Officers & Regional Vice-Chairs'
                : teamGroups.find(g => g.id === selectedGroup)?.label || 'Leadership'}
            </h2>
            <p>
              {selectedGroup === 'all'
                ? 'Elected at the DUA General Assembly in Accra to represent sister centre-right parties across West, East, Southern, Central, and North Africa.'
                : teamGroups.find(g => g.id === selectedGroup)?.description}
            </p>
          </div>
          <div className="fa-team-grid">
            {shownMembers.map(member => (
              <PersonCard key={member.id} member={member} />
            ))}
          </div>
          <div className="fa-additional-team" id="vice-chairs">
            <p className="eyebrow">SECRETARIAT &amp; AFFILIATED ORGANS</p>
            <div>
              {additionalTeamMembers.map(member => (
                <article key={member.name}>
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
      <ClosingCTA />
    </div>
  );
}

export function ProfilePage({ id }) {
  const member = getMember(id);
  if (!member) {
    return (
      <section className="fa-profile-missing container">
        <p className="eyebrow">OUR LEADERSHIP</p>
        <h1>Profile unavailable.</h1>
        <a className="text-link" href="/leadership/">
          Meet all DUA leaders <Arrow />
        </a>
      </section>
    );
  }
  const group = teamGroups.find(g => g.id === member.group) || teamGroups[0];
  return (
    <div className="fa-inner-page">
      <section className="fa-profile-hero">
        <div className="container">
          <a className="fa-breadcrumb" href="/leadership/">
            <ArrowLeft size={15} />
            All DUA Leadership
          </a>
          <div className="fa-profile-heading">
            <div>
              <p className="eyebrow">{member.role}</p>
              <h1>{member.name}</h1>
              <p className="fa-profile-intro">{member.intro}</p>
              <div className="fa-profile-contacts">
                {member.location && (
                  <span>
                    <MapPin size={16} />
                    {member.location}
                  </span>
                )}
                {member.email && (
                  <a href={`mailto:${member.email}`}>
                    <Mail size={16} />
                    {member.email}
                  </a>
                )}
                {member.phone && (
                  <a href={`tel:${member.phone}`}>
                    <Phone size={16} />
                    {member.phone}
                  </a>
                )}
                {member.contactUrl && (
                  <a href={member.contactUrl}>
                    Contact Secretariat <Arrow />
                  </a>
                )}
              </div>
            </div>
            <img className="fa-profile-portrait" src={member.image} alt={member.name} fetchPriority="high" />
          </div>
        </div>
      </section>
      <section className="container fa-biography">
        <aside>
          <p className="eyebrow">BACKGROUND &amp; MANDATE</p>
          <h2>Biography</h2>
          <a className="text-link" href="/leadership/">
            Back to {group.label.toLowerCase()} <Arrow />
          </a>
        </aside>
        <div>
          {member.bio.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>
      <section className="container fa-profile-related">
        <div className="section-heading">
          <h2>Meet more of DUA’s leadership.</h2>
          <a className="text-link" href="/leadership/">
            All leaders <Arrow />
          </a>
        </div>
        <div className="fa-team-grid">
          {teamMembers
            .filter(m => m.id !== id)
            .slice(0, 3)
            .map(m => (
              <PersonCard key={m.id} member={m} />
            ))}
        </div>
      </section>
      <ClosingCTA />
    </div>
  );
}

export default function InnerPages({ route }) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
    const nodes = [
      ...document.querySelectorAll(
        '.fa-editorial,.fa-image-text,.fa-vision-statement,.fa-approach-list,.fa-values-layout,.fa-teaser-grid'
      ),
    ];
    const observer = new IntersectionObserver(
      entries =>
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fa-reveal-visible');
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.08 }
    );
    nodes.forEach(node => {
      node.classList.add('fa-reveal-ready');
      observer.observe(node);
    });
    return () => {
      observer.disconnect();
      nodes.forEach(node => node.classList.remove('fa-reveal-ready', 'fa-reveal-visible'));
    };
  }, [route.type, route.id, route.group]);

  if (route.type === 'engage') return <EngagePage />;
  if (route.type === 'engage-service') return <EngageServicePage id={route.id} />;
  if (route.type === 'contact') return <ContactPage />;
  if (route.type === 'careers') return <CareersPage />;
  if (route.type === 'news') return <NewsPage />;
  if (route.type === 'news-article') return <NewsArticle slug={route.slug} />;
  if (route.type === 'events') return <EventsPage />;
  if (route.type === 'event') return <EventDetailPage id={route.id} />;
  if (route.type === 'opportunities') return <OpportunitiesPage />;
  if (route.type === 'opportunity') return <OpportunityDetailPage id={route.id} />;
  if (route.type === 'commentary') return <CommentaryArticle slug={route.slug} id={route.id} />;
  if (route.type === 'commentaries') return <CommentariesPage />;
  if (route.type === 'partners') return <PartnersPage />;
  if (route.type === 'policy') return <PolicyBriefsPage />;
  if (route.type === 'priorities') return <PrioritiesPage />;
  if (route.type === 'ydua') return <YduaPage />;
  if (route.type === 'members') return <MembersPage />;
  if (route.type === 'about') return <AboutPage />;
  if (route.type === 'team') return <TeamPage groupId={route.group} />;
  return <ProfilePage id={route.id} />;
}
