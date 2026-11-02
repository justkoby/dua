import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowUpRight, Search, X, BookOpen } from 'lucide-react';
import { categories, discover, suggestions } from './discovery.js';
import { page } from './content.js';

export default function DiscoveryDialog({ close }) {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('All');
  const [submitted, setSubmitted] = useState('');
  const [response, setResponse] = useState(null);
  const dialog = useRef(null);
  const input = useRef(null);

  useEffect(() => {
    dialog.current.showModal();
    input.current.focus();
    const before = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = before;
    };
  }, []);

  function run(question = query, category = filter) {
    const text = question.trim();
    setQuery(text);
    setFilter(category);
    setSubmitted(text);
    setResponse({ ...discover(text, category), mode: 'directory', answer: null });
  }

  const shown = response ?? { ...discover('', filter), mode: 'directory', answer: null };

  return (
    <dialog
      ref={dialog}
      aria-labelledby="discovery-title"
      className="search-dialog discovery-dialog"
      onCancel={close}
      onClick={e => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div className="search-inner">
        <div className="search-top">
          <span className="eyebrow">DEMOCRACY UNION OF AFRICA / SEARCH</span>
          <button className="icon-button" aria-label="Close search" onClick={close}>
            <X />
          </button>
        </div>
        <h2 id="discovery-title">
          What would you
          <br />
          like to explore?
        </h2>
        <p className="discovery-description">
          Search official DUA statements, Windhoek resolutions, member parties, leadership, priorities, and events.
        </p>
        <form
          onSubmit={e => {
            e.preventDefault();
            run();
          }}
        >
          <div className="search-input">
            <Search size={21} aria-hidden="true" />
            <input
              ref={input}
              maxLength={500}
              placeholder="Search statements, resolutions, member parties, leadership..."
              aria-label="Search Democracy Union of Africa"
              value={query}
              onChange={e => {
                setQuery(e.target.value);
                run(e.target.value, filter);
              }}
            />
            <button type="submit" className="discovery-submit" disabled={!query.trim()} aria-label="Run search">
              <ArrowRight size={20} />
            </button>
          </div>
        </form>
        {!submitted && (
          <div className="discovery-suggestions">
            {suggestions.map(s => (
              <button key={s} onClick={() => run(s)}>
                {s}
                <ArrowUpRight size={14} />
              </button>
            ))}
          </div>
        )}
        <div className="filters" role="group" aria-label="Filter content">
          {categories.map(c => (
            <button
              key={c}
              className={filter === c ? 'selected' : ''}
              aria-pressed={filter === c}
              onClick={() => {
                setFilter(c);
                run(query, c);
              }}
            >
              {c === 'All'
                ? 'Everything'
                : c === 'Research'
                ? 'Publications & Priorities'
                : c === 'Programme'
                ? 'Initiatives'
                : c === 'Opportunity'
                ? 'Pathways'
                : c === 'Update'
                ? 'Statements & Events'
                : c === 'People'
                ? 'Leadership'
                : c}
            </button>
          ))}
        </div>
        {submitted && (
          <div className="discovery-answer" aria-live="polite">
            <div className="answer-label">
              <BookOpen size={16} />
              <span>DIRECTORY RESULTS</span>
            </div>
            <p>{shown.message}</p>
          </div>
        )}
        <p className="result-count" role="status">
          {shown.results.length} {shown.results.length === 1 ? 'page' : 'pages'}
          {submitted ? ` for “${submitted}”` : ' to explore'}
        </p>
        <div className="search-results">
          {shown.results.map(r => (
            <a key={r.id} href={r.url} onClick={close}>
              <div>
                <span className="eyebrow">{r.type}</span>
                <h3>{r.title}</h3>
                <p>{r.description}</p>
              </div>
              <ArrowUpRight size={20} />
            </a>
          ))}
          {!shown.results.length && (
            <p>
              Try “Tanzania”, “Louisa Atta-Agyemang”, “Windhoek”, or{' '}
              <a className="text-link" href={page('contact')}>
                contact the Secretariat <ArrowUpRight size={14} />
              </a>
              .
            </p>
          )}
        </div>
      </div>
    </dialog>
  );
}
