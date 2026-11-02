import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight, ArrowDown, Handshake, Sprout, Mic2, Mail, Phone, MapPin, Copy, ArrowLeft } from 'lucide-react';
import {
  engageServices,
  engageTopics,
  contactDepartments,
  getEngageService,
  createEnquiryDraft,
  draftErrors,
} from './engage-content.js';
import HostedEnquiry from '../CmsForm.jsx';
import './engage.css';

const icons = { partnership: Handshake, sponsorship: Sprout, speaker: Mic2 };

function ServiceIcon({ id, size = 28 }) {
  const Icon = icons[id] ?? Mail;
  return <Icon size={size} strokeWidth={1.4} aria-hidden="true" />;
}

function EngageHero({ title, description, eyebrow = 'ENGAGE WITH DUA', children }) {
  return (
    <section className="engage-hero">
      <div className="container">
        <nav aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span aria-hidden="true">/</span>
          <a href="/engage/">Engage</a>
          {title !== 'Work with the Union.' && (
            <>
              <span aria-hidden="true">/</span>
              <span>{title}</span>
            </>
          )}
        </nav>
        <div className="engage-hero-grid">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h1>{title}</h1>
            <p>{description}</p>
            {children}
          </div>
          <div className="engage-hero-symbol" aria-hidden="true">
            <span>DEMOCRACY · FREEDOM · ENTERPRISE</span>
            <img src="/images/logo-circle.png" alt="" />
            <span>ACCRA SECRETARIAT · AFRICA</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCards({ exclude }) {
  return (
    <div className="engage-service-grid">
      {engageServices
        .filter(item => item.id !== exclude)
        .map(item => (
          <article key={item.id}>
            <a href={item.path}>
              <ServiceIcon id={item.id} />
              <p className="eyebrow">{item.label}</p>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <span>
                Explore this route <ArrowUpRight size={18} aria-hidden="true" />
              </span>
            </a>
          </article>
        ))}
    </div>
  );
}

export function EngagePage() {
  return (
    <div className="fa-inner-page engage-page">
      <EngageHero
        title="Work with the Union."
        description="Connect your political party, foundation, or institution with the Democracy Union of Africa. Explore ways to collaborate on forums, capacity building, and continental advocacy."
      >
        <a className="text-link" href="#ways-to-engage">
          Explore ways to connect <ArrowDown size={17} aria-hidden="true" />
        </a>
      </EngageHero>
      <section className="container engage-routes" id="ways-to-engage">
        <div className="section-heading">
          <div>
            <p className="eyebrow">SHARED DEMOCRATIC VALUES</p>
            <h2>
              Different ways
              <br />
              to collaborate.
            </h2>
          </div>
          <p>
            Institutional partnerships, forum support
            <br />
            and diplomatic engagement.
          </p>
        </div>
        <ServiceCards />
        <div className="engage-secondary">
          <a href="/member-parties/">
            <Handshake size={22} aria-hidden="true" />
            <div>
              <h3>Member Parties Directory</h3>
              <p>Explore our network of over 25 sister political parties across Africa.</p>
            </div>
            <ArrowUpRight size={20} aria-hidden="true" />
          </a>
          <a href="/contact/">
            <Mail size={22} aria-hidden="true" />
            <div>
              <h3>Contact the DUA Secretariat</h3>
              <p>Reach our headquarters in Accra, Ghana (+233 24 196 7709).</p>
            </div>
            <ArrowUpRight size={20} aria-hidden="true" />
          </a>
        </div>
      </section>
      <section className="engage-context">
        <div className="container">
          <figure>
            <img src="/images/dua-conference-01.jpg" alt="Delegates at the Democracy Union of Africa Annual Forum" loading="lazy" />
            <figcaption>Continental Convening · Democracy Union of Africa</figcaption>
          </figure>
          <div>
            <p className="eyebrow">GET TO KNOW OUR UNION</p>
            <h2>
              Building a freer, more
              <br />
              prosperous Africa.
            </h2>
            <p>Explore the leadership, member parties, and strategic priorities driving the Democracy Union of Africa since 1997.</p>
            <a className="text-link" href="/who-we-are/">
              About DUA <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export function EngageServicePage({ id }) {
  const item = getEngageService(id);
  if (!item) return <EngagePage />;
  return (
    <div className="fa-inner-page engage-page">
      <EngageHero title={item.title} description={item.summary} eyebrow={item.label}>
        <a className="button gold" href={`/contact/?topic=${item.id}#enquiry`}>
          {item.cta}
          <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </EngageHero>
      <section className="container engage-intro">
        <div>
          <p className="eyebrow">{item.label}</p>
          <h2>
            {item.heading[0]}
            <br />
            {item.heading[1]}
          </h2>
        </div>
        <div>
          <p>{item.body}</p>
          <a className="text-link" href={item.related.href}>
            {item.related.label}
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </section>
      <section className="engage-focus">
        <div className="container">
          <p className="eyebrow">WHERE WE CAN CONNECT</p>
          <div className="engage-focus-grid">
            {item.focus.map((focus, index) => (
              <article key={focus.title}>
                <span>0{index + 1}</span>
                <h3>{focus.title}</h3>
                <p>{focus.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="container engage-brief">
        <div>
          <p className="eyebrow">START THE CONVERSATION</p>
          <h2>
            Share your proposal
            <br />
            with the Secretariat.
          </h2>
          <p>
            {id === 'speaker'
              ? 'Share an initial brief so the DUA Secretariat can discuss speaker availability, format, and protocol.'
              : id === 'sponsorship'
              ? 'Share your institutional focus so we can align with upcoming DUA Forum sessions or regional training programmes.'
              : 'Share a proposal or area of interest so our team in Accra can explore how our priorities align.'}
          </p>
          <a className="button gold" href={`/contact/?topic=${item.id}#enquiry`}>
            {item.cta}
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
        <aside>
          <h3>Helpful details to include</h3>
          <ol>
            {item.brief.map(text => (
              <li key={text}>{text}</li>
            ))}
          </ol>
          <p>All enquiries are reviewed by the DUA Secretariat in Accra, Ghana.</p>
        </aside>
      </section>
      <section className="container engage-other">
        <div className="section-heading">
          <h2>Other ways to connect.</h2>
          <a className="text-link" href="/engage/">
            All Engage routes <ArrowRight size={17} aria-hidden="true" />
          </a>
        </div>
        <ServiceCards exclude={id} />
      </section>
    </div>
  );
}

function EnquiryComposer() {
  const [topic, setTopic] = useState(() => {
    const value = new URLSearchParams(window.location.search).get('topic');
    return engageTopics.some(item => item.id === value) ? value : 'general';
  });
  const [values, setValues] = useState({ name: '', email: '', organisation: '', message: '' });
  const [errors, setErrors] = useState({});
  const [copyStatus, setCopyStatus] = useState('');

  const update = event => {
    setValues(current => ({ ...current, [event.target.name]: event.target.value }));
    setErrors(current => ({ ...current, [event.target.name]: null }));
    setCopyStatus('');
  };

  const check = () => {
    const found = draftErrors(values);
    setErrors(found);
    return !Object.keys(found).length;
  };

  return (
    <section className="container engage-enquiry" id="enquiry">
      <div>
        <p className="eyebrow">DIRECT ENQUIRY</p>
        <h2>
          Send a message to
          <br />
          the DUA Secretariat.
        </h2>
        <p>Prepare your message below to open it in your email client, or contact the Secretariat directly by email, phone, or WhatsApp.</p>
        <div style={{ display: 'grid', gap: '0.65rem', marginTop: '1.25rem' }}>
          <a className="text-link" href="mailto:info@democratunionofafrica.org">
            info@democratunionofafrica.org <Mail size={17} aria-hidden="true" />
          </a>
          <a className="text-link" href="tel:+233241967709">
            +233 24 196 7709 <Phone size={17} aria-hidden="true" />
          </a>
          <span className="text-link" style={{ pointerEvents: 'none', opacity: 0.85 }}>
            DUA Secretariat, Accra, Ghana <MapPin size={17} aria-hidden="true" />
          </span>
        </div>
      </div>
      <form
        onSubmit={event => {
          event.preventDefault();
          if (check()) window.location.href = createEnquiryDraft(topic, values).href;
        }}
      >
        <div className="engage-form-row">
          <label>
            Your name
            <input
              aria-label="Your name"
              required
              name="name"
              autoComplete="name"
              maxLength={120}
              value={values.name}
              onChange={update}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'enquiry-name-error' : undefined}
            />
            {errors.name && (
              <span id="enquiry-name-error" className="engage-field-error">
                {errors.name}
              </span>
            )}
          </label>
          <label>
            Email address
            <input
              aria-label="Email address"
              required
              type="email"
              name="email"
              autoComplete="email"
              maxLength={254}
              value={values.email}
              onChange={update}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'enquiry-email-error' : undefined}
            />
            {errors.email && (
              <span id="enquiry-email-error" className="engage-field-error">
                {errors.email}
              </span>
            )}
          </label>
        </div>
        <div className="engage-form-row">
          <label>
            Political Party / Organisation <span>(optional)</span>
            <input name="organisation" autoComplete="organization" maxLength={160} value={values.organisation} onChange={update} />
          </label>
          <label>
            Enquiry topic
            <select
              value={topic}
              onChange={event => {
                setTopic(event.target.value);
                setCopyStatus('');
              }}
            >
              {engageTopics.map(item => (
                <option key={item.id} value={item.id}>
                  {item.label}
                </option>
              ))}
            </select>
          </label>
        </div>
        <label>
          Your message
          <textarea
            aria-label="Your message"
            required
            name="message"
            rows={6}
            maxLength={1200}
            value={values.message}
            onChange={update}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'enquiry-message-error' : undefined}
          />
          {errors.message && (
            <span id="enquiry-message-error" className="engage-field-error">
              {errors.message}
            </span>
          )}
        </label>
        <p className="engage-draft-note">To: info@democratunionofafrica.org · Opens an email draft in your mail application.</p>
        <div className="engage-form-actions">
          <button className="button gold" type="submit">
            Open email draft <ArrowUpRight size={18} aria-hidden="true" />
          </button>
          <button
            className="engage-copy"
            type="button"
            onClick={async () => {
              if (!check()) return;
              try {
                const draft = createEnquiryDraft(topic, values);
                await navigator.clipboard.writeText(`${draft.subject}\n\n${draft.body}`);
                setCopyStatus('Enquiry copied. You can paste it into an email to info@democratunionofafrica.org.');
              } catch {
                setCopyStatus('Copy is unavailable here. Use the email draft button instead.');
              }
            }}
          >
            Copy enquiry <Copy size={16} aria-hidden="true" />
          </button>
        </div>
        <p className="engage-copy-status" role="status">
          {copyStatus}
        </p>
      </form>
    </section>
  );
}

export function ContactPage() {
  return (
    <div className="fa-inner-page engage-page">
      <EngageHero
        title="Contact the DUA Secretariat."
        description="Reach the Democracy Union of Africa Secretariat in Accra, Ghana for inter-party correspondence, DUA Forum 2026 enquiries, partnership proposals, or press requests."
        eyebrow="CONTACT · ACCRA, GHANA"
      >
        <a className="text-link" href="#enquiry">
          Prepare an enquiry <ArrowDown size={17} aria-hidden="true" />
        </a>
      </EngageHero>
      <section className="container engage-contacts">
        <div className="section-heading">
          <div>
            <p className="eyebrow">SECRETARIAT & DESKS</p>
            <h2>
              Direct lines of
              <br />
              communication.
            </h2>
          </div>
          <p>
            DUA Secretariat · Accra, Ghana
            <br />
            +233 24 196 7709
          </p>
        </div>
        <div>
          {contactDepartments.map(department => (
            <article key={department.title}>
              <Mail size={22} strokeWidth={1.4} aria-hidden="true" />
              <h3>{department.title}</h3>
              <p>{department.description}</p>
              {department.emails.map(email => (
                <a key={email} href={`mailto:${email}`}>
                  {email}
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              ))}
              {department.phone && (
                <a href="tel:+233241967709">
                  {department.phone}
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              )}
            </article>
          ))}
        </div>
      </section>
      <HostedEnquiry fallback={<EnquiryComposer />} />
    </div>
  );
}

export function CareersPage() {
  return (
    <div className="fa-inner-page engage-page">
      <EngageHero
        title="Secretariat Roles & Fellowships"
        description="Explore ways to contribute to the Democracy Union of Africa’s Secretariat, research fellowships, and YDUA youth leadership programmes."
      >
        <a className="text-link" href="#vacancies">
          View current information <ArrowDown size={17} aria-hidden="true" />
        </a>
      </EngageHero>
      <section className="container engage-careers" id="vacancies">
        <p className="eyebrow">SECRETARIAT & FELLOWSHIPS</p>
        <h2>Current Secretariat Notices.</h2>
        <div className="engage-vacancy-empty">
          <Mail size={30} strokeWidth={1.3} aria-hidden="true" />
          <div>
            <h3>No open Secretariat vacancies listed at this time.</h3>
            <p>
              For enquiries regarding YDUA Youth Leadership Fellowships, research contributions, or Secretariat internships in Accra, please contact the DUA Secretariat.
            </p>
            <a className="text-link" href="/contact/?topic=general#enquiry">
              Contact the Secretariat <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="engage-career-paths">
          <a href="/member-parties/">
            <h3>Member Parties Network</h3>
            <p>Explore our 25+ member parties across Africa.</p>
            <ArrowUpRight size={20} aria-hidden="true" />
          </a>
          <a href="/remote-internship-programme-rip/">
            <h3>YDUA & Youth Leadership</h3>
            <p>Explore the youth political leadership pathway.</p>
            <ArrowUpRight size={20} aria-hidden="true" />
          </a>
        </div>
        <a className="engage-back" href="/engage/">
          <ArrowLeft size={15} aria-hidden="true" />
          Back to Engage
        </a>
      </section>
    </div>
  );
}

