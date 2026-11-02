import React from 'react';
import { ArrowUpRight, ArrowDown, ArrowLeft, Mail, Plus, Check, ArrowRight } from 'lucide-react';
import { opportunityPathways, getOpportunityPathway, enquiryHref, opportunityFaqs } from './opportunities-content.js';
import { PathwayCard, PathwayIcon } from '../OpportunitySections.jsx';
import './opportunities.css';

function OpportunityCrumb({ title }) {
  return (
    <nav className="opportunity-breadcrumb" aria-label="Breadcrumb">
      <a href="/">Home</a>
      <span aria-hidden="true">/</span>
      {title ? (
        <>
          <a href="/opportunities/">Pathways & Network</a>
          <span aria-hidden="true">/</span>
          <span>{title}</span>
        </>
      ) : (
        <span>Pathways & Network</span>
      )}
    </nav>
  );
}

function Questions() {
  return (
    <section className="container opportunity-questions" id="questions">
      <div>
        <p className="eyebrow">FREQUENTLY ASKED QUESTIONS</p>
        <h2>
          Working with the
          <br />
          Union.
        </h2>
        <p>
          Practical answers on party membership,
          <br />
          forums and youth programmes.
        </p>
      </div>
      <div className="opportunity-faq-list">
        {opportunityFaqs.map(item => (
          <details key={item.question}>
            <summary>
              {item.question}
              <Plus size={19} aria-hidden="true" />
            </summary>
            <div>
              <p>{item.answer}</p>
              {item.href && (
                <a className="text-link" href={item.href}>
                  {item.linkLabel}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              )}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

export function OpportunitiesPage() {
  return (
    <div className="fa-inner-page opportunities-page">
      <section className="opportunity-hub-hero">
        <div className="container">
          <OpportunityCrumb />
          <div className="opportunity-hub-heading">
            <div>
              <p className="eyebrow">CONNECT · COLLABORATE · LEAD</p>
              <h1>
                Strengthen the alliance.
                <br />
                <em>Advance democracy.</em>
              </h1>
              <p>
                Explore pathways for political parties, youth and women’s networks, campaign teams, and international partners within the Democracy Union of Africa.
              </p>
              <a className="text-link" href="#pathways">
                Explore the pathways <ArrowDown size={17} aria-hidden="true" />
              </a>
            </div>
            <div className="opportunity-visual" aria-hidden="true">
              <span className="opportunity-visual-label">CONTINENTAL COOPERATION</span>
              <div className="opportunity-orbit">
                <span>Parties</span>
                <span>Youth</span>
                <span>Forums</span>
                <div className="opportunity-orbit-core">
                  <img src="/images/logo-circle.png" alt="" />
                  <strong>
                    DUA
                    <br />
                    Africa
                  </strong>
                </div>
              </div>
              <span className="opportunity-visual-note">AFRICAN REGIONAL UNION OF THE IDU</span>
            </div>
          </div>
        </div>
      </section>
      <section className="container opportunity-pathways" id="pathways">
        <div className="section-heading">
          <div>
            <p className="eyebrow">ENGAGEMENT PATHWAYS</p>
            <h2>
              Many countries.
              <br />
              One democratic purpose.
            </h2>
          </div>
          <p>
            Discover how member parties and partners
            <br />
            collaborate through DUA.
          </p>
        </div>
        <div className="pathway-grid">
          {opportunityPathways.map((item, index) => (
            <PathwayCard key={item.id} item={item} index={index} />
          ))}
        </div>
        <div className="opportunity-current-note">
          <span className="opportunity-status-label">
            <span />
            SECRETARIAT COORDINATION
          </span>
          <div>
            <h3>Connect with the DUA Secretariat in Accra.</h3>
            <p>
              For official accreditation to DUA Forum 2026, party affiliation enquiries, or the 2026 Campaign Masterclass Series, contact the Secretariat directly.
            </p>
          </div>
          <a className="text-link" href="mailto:info@democratunionofafrica.org?subject=DUA%20Secretariat%20Enquiry">
            Email the Secretariat <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </section>
      <Questions />
      <section className="opportunity-explore">
        <div className="container">
          <div>
            <p className="eyebrow">EXPLORE FURTHER</p>
            <h2>
              Learn more about
              <br />
              our union.
            </h2>
          </div>
          <div>
            <a href="/member-parties/">
              <span>Browse Member Parties Directory</span>
              <ArrowUpRight size={21} aria-hidden="true" />
            </a>
            <a href="/policy-briefs/">
              <span>Explore Publications & Resolutions</span>
              <ArrowUpRight size={21} aria-hidden="true" />
            </a>
            <a href="/events/dua-forum-2026/">
              <span>Explore DUA Forum 2026</span>
              <ArrowUpRight size={21} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export function OpportunityDetailPage({ id }) {
  const item = getOpportunityPathway(id);
  if (!item) return <OpportunitiesPage />;
  return (
    <div className="fa-inner-page opportunities-page">
      <section className={`opportunity-detail-hero opportunity-detail-hero--${item.icon}`}>
        <div className="container">
          <OpportunityCrumb title={item.shortTitle ?? item.title} />
          <div className="opportunity-detail-heading">
            <div>
              <p className="eyebrow">{item.label}</p>
              <h1>
                {item.titleLines.map(line => (
                  <span key={line}>{line}</span>
                ))}
              </h1>
              <p>{item.summary}</p>
              <a className="text-link" href="#opportunity-overview">
                Discover the pathway <ArrowDown size={17} aria-hidden="true" />
              </a>
            </div>
            <aside className="opportunity-status-card" aria-label="Current information">
              <div className="opportunity-status-card-top">
                <PathwayIcon name={item.icon} size={33} />
                <span className="eyebrow">SECRETARIAT STATUS</span>
              </div>
              <h2>{item.status}</h2>
              <p>{item.statusDetail}</p>
              <a className="button gold" href={enquiryHref(item)}>
                {item.enquiryLabel}
                <Mail size={18} aria-hidden="true" />
              </a>
              <p className="opportunity-email-note">Opens an email to info@democratunionofafrica.org.</p>
            </aside>
          </div>
        </div>
      </section>
      <nav className="fa-section-nav opportunity-section-nav" aria-label="On this page">
        <div className="container">
          <a href="#opportunity-overview">Overview</a>
          <a href="#pathway-focus">Focus areas</a>
          <a href="#next-step">Your next step</a>
          <a href="#other-pathways">Other pathways</a>
        </div>
      </nav>
      <section className="container opportunity-overview" id="opportunity-overview">
        <div>
          <p className="eyebrow">THE PATHWAY</p>
          <h2>
            {item.tagline[0]}
            <br />
            {item.tagline[1]}
          </h2>
        </div>
        <div>
          <p className="opportunity-overview-lead">{item.overview}</p>
          <div className="opportunity-audience">
            <span className="eyebrow">WHO IT BRINGS TOGETHER</span>
            <p>{item.audience}</p>
          </div>
          <a className="text-link" href={item.related.href}>
            {item.related.label}
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </section>
      <section className="opportunity-focus" id="pathway-focus">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">EXPLORE THE FOCUS</p>
              <h2>
                Where principles
                <br />
                and action meet.
              </h2>
            </div>
            <p>Explore the core pillars of this pathway.</p>
          </div>
          <div className="opportunity-theme-grid">
            {item.themes.map((theme, index) => (
              <article key={theme.title}>
                <div>
                  <PathwayIcon name={theme.icon} size={27} />
                  <span>0{index + 1}</span>
                </div>
                <h3>{theme.title}</h3>
                <p>{theme.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="container opportunity-next-step" id="next-step">
        <div>
          <p className="eyebrow">YOUR NEXT STEP</p>
          <h2>
            Connect with the
            <br />
            DUA Secretariat.
          </h2>
          <p>
            Reach out to the Secretariat in Accra regarding {item.shortTitle?.toLowerCase() ?? item.title.toLowerCase()} for current accreditation or participation details.
          </p>
          <a className="button gold" href={enquiryHref(item)}>
            {item.enquiryLabel}
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <p className="opportunity-email-address">info@democratunionofafrica.org</p>
        </div>
        <aside className="opportunity-checklist">
          <h3>{item.futureHeading}</h3>
          <p>Key elements coordinated by the DUA Secretariat:</p>
          <ul>
            {item.futureDetails.map(text => (
              <li key={text}>
                <Check size={16} aria-hidden="true" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
          <p className="opportunity-checklist-note">Contact the Secretariat for official accreditation guidelines.</p>
        </aside>
      </section>
      <section className="container opportunity-related" id="other-pathways">
        <div className="section-heading">
          <div>
            <p className="eyebrow">KEEP EXPLORING</p>
            <h2>Other ways to engage with DUA.</h2>
          </div>
          <a className="text-link" href="/opportunities/">
            All pathways
            <ArrowRight size={17} aria-hidden="true" />
          </a>
        </div>
        <div className="pathway-grid pathway-grid--related">
          {opportunityPathways
            .filter(other => other.id !== item.id)
            .map((other, index) => (
              <PathwayCard key={other.id} item={other} index={index} compact />
            ))}
        </div>
        <a className="opportunity-back" href="/opportunities/">
          <ArrowLeft size={15} aria-hidden="true" />
          Back to pathways
        </a>
      </section>
    </div>
  );
}

