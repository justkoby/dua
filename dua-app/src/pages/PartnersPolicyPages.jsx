import React, { useState } from 'react';
import { ArrowUpRight, ArrowDown, BookOpen, Download, Minus, ExternalLink } from 'lucide-react';
import { partners } from '../partners.js';
import { policyBriefs } from './policy-content.js';
import { page } from '../content.js';
import '../partners-policy.css';

const Arrow = () => <ArrowUpRight size={19} aria-hidden="true" />;

function PageHeading({ label, title, accent, description, children }) {
  return (
    <section className="publication-hero">
      <div className="container">
        <a className="fa-breadcrumb" href="/">
          Home <span>/</span> {label}
        </a>
        <div className="publication-hero-grid">
          <div>
            <p className="eyebrow">{label}</p>
            <h1>
              {title}
              <br />
              <em>{accent}</em>
            </h1>
          </div>
          <div>
            <p>{description}</p>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

export function PartnersPage() {
  return (
    <div className="fa-inner-page partners-page">
      <PageHeading
        label="GLOBAL NETWORK & PARTNERS"
        title="Continental solidarity."
        accent="Global democratic alliance."
        description="As the African regional union of the International Democracy Union (IDU), DUA works alongside global centre-right unions and political foundations to strengthen multiparty democracy across Africa."
      >
        <a className="text-link" href="#partner-network">
          Meet our partner network <ArrowDown size={18} />
        </a>
      </PageHeading>
      <section className="container partner-directory" id="partner-network">
        <div className="section-heading">
          <div>
            <p className="eyebrow">OUR GLOBAL NETWORK</p>
            <h2>
              Working across borders.
              <br />
              Defending shared values.
            </h2>
          </div>
          <p>
            International unions, youth and women’s networks,
            <br />
            and political foundation partners of DUA.
          </p>
        </div>
        <div className="partner-directory-grid">
          {partners.map((partner, i) => (
            <article className={`partner-directory-card partner-directory-card--${partner.id}`} id={partner.id} key={partner.id}>
              <span className="partner-index">0{i + 1}</span>
              <div className="partner-logo-stage">
                <img src={partner.logo} alt={`${partner.name} logo`} loading="lazy" />
              </div>
              <div>
                <h3>{partner.name}</h3>
                {partner.caption && <p>{partner.caption}</p>}
                {partner.url && (
                  <p style={{ marginTop: '0.75rem' }}>
                    <a className="text-link" href={partner.url} target="_blank" rel="noopener noreferrer">
                      Visit official website <ExternalLink size={15} aria-hidden="true" />
                    </a>
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="partner-invitation">
        <div className="container">
          <p className="eyebrow">STRATEGIC COLLABORATION</p>
          <div>
            <h2>
              Partner with the
              <br />
              Democracy Union of Africa.
            </h2>
            <div>
              <p>Connect with the DUA Secretariat in Accra to collaborate on forums, election observation, or training programmes.</p>
              <a className="button gold" href={page('partner-with-us')}>
                Explore a partnership <Arrow />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function BriefArticle({ brief, index }) {
  const [open, setOpen] = useState(false);
  const readerId = `reader-${brief.issue}`;
  return (
    <article className={`brief-article ${index === 0 ? 'brief-article--featured' : ''}`} id={`brief-${brief.issue}`}>
      <div className="brief-card">
        <div className="brief-cover-stage">
          <span className="eyebrow">
            {index === 0 ? 'FEATURED RESOLUTION' : 'ADOPTED RESOLUTION'} / {brief.issue}
          </span>
          <img src={brief.coverImage} alt={brief.title} loading="lazy" width="480" height="660" style={{ objectFit: 'cover' }} />
          <span className="brief-cover-caption">DEMOCRACY UNION OF AFRICA / OFFICIAL PUBLICATIONS</span>
        </div>
        <div className="brief-card-copy">
          <div className="brief-meta">
            <span>{brief.topic}</span>
            <time dateTime={brief.datetime}>{brief.date}</time>
          </div>
          <h2>{brief.title}</h2>
          <p className="brief-summary">{brief.summary}</p>
          <div className="brief-takeaways">
            <p className="eyebrow">KEY PROVISIONS</p>
            <ul>
              {brief.takeaways.map(text => (
                <li key={text}>{text}</li>
              ))}
            </ul>
          </div>
          <p className="brief-details">
            Reference {brief.issue} <span>·</span> Adopted in Windhoek, Namibia <span>·</span> Official DOCX Document
          </p>
          <div className="brief-actions">
            <button className="button gold" aria-expanded={open} aria-controls={readerId} onClick={() => setOpen(v => !v)}>
              {open ? 'Close full text' : 'Read full resolution'} {open ? <Minus size={18} /> : <BookOpen size={18} />}
            </button>
            <a className="text-link" href={brief.documentUrl} download={brief.downloadName}>
              Download Official Document (.docx) <Download size={17} />
            </a>
            <a className="text-link" href={`/news/${brief.slug}/`}>
              Open article view <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </div>
      {open && (
        <div className="brief-reader-slot" id={readerId}>
          <p className="brief-source-note">{brief.note}</p>
          <div className="brief-reader">
            <div className="reader-heading">
              <div>
                <span className="eyebrow">OFFICIAL FULL TEXT</span>
                <h4>
                  {brief.issue} · {brief.title}
                </h4>
              </div>
              <a className="text-link light" href={brief.documentUrl} download={brief.downloadName}>
                Download .docx <Download size={16} />
              </a>
            </div>
            <div className="reader-viewport" style={{ padding: '2rem', background: '#fff', color: '#071e30', maxHeight: '520px', overflowY: 'auto' }}>
              <div className="reader-text" style={{ maxWidth: '72ch', margin: '0 auto', lineHeight: 1.7 }}>
                {brief.fullText.map((paragraph, pIndex) => (
                  <p key={pIndex} style={{ marginBottom: '1.1rem', whiteSpace: 'pre-line' }}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}

export function PolicyBriefsPage() {
  return (
    <div className="fa-inner-page policy-page">
      <PageHeading
        label="PUBLICATIONS & RESOLUTIONS"
        title="Principled positions."
        accent="Official DUA resolutions."
        description="Explore official resolutions and publications adopted by the Democracy Union of Africa, addressing democratic governance, human rights, electoral integrity, and regional security across the continent."
      >
        <a className="text-link" href="#brief-library">
          Browse publications & resolutions <ArrowDown size={18} />
        </a>
      </PageHeading>
      <section className="container brief-library" id="brief-library">
        <div className="brief-library-heading">
          <h2>Adopted Resolutions & Publications</h2>
          <span>{String(policyBriefs.length).padStart(2, '0')} documents</span>
        </div>
        {policyBriefs.map((brief, index) => (
          <BriefArticle key={brief.id} brief={brief} index={index} />
        ))}
      </section>
      <section className="policy-contact container">
        <p className="eyebrow">SECRETARIAT ARCHIVE & ENQUIRIES</p>
        <h2>Need certified copies or press accreditation?</h2>
        <a className="text-link" href="mailto:info@democratunionofafrica.org">
          Contact the DUA Secretariat <Arrow />
        </a>
      </section>
    </div>
  );
}

