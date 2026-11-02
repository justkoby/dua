import React, { useEffect, useId, useRef, useState } from 'react';
import { ArrowUpRight, Bot, RotateCcw, Send, Sparkles, Trash2, X, AlertCircle } from 'lucide-react';
import { buildDemoAnswer } from '../api/chat.js';

const STORAGE_KEY = 'dua-gemini-chat-history-v1';

const SUGGESTED_QUESTIONS = [
  'What is the Democracy Union of Africa (DUA)?',
  'Who are DUA’s Chairperson and Executive Leaders?',
  'What are DUA’s latest statements and Windhoek resolutions?',
  'Which political parties are members of DUA?',
  'How can we participate in DUA Forum 2026?',
];

const INITIAL_WELCOME = {
  id: 'welcome',
  role: 'assistant',
  mode: 'system',
  content:
    'Welcome to the Democracy Union of Africa (DUA) Assistant. Ask me about DUA’s mission since 1997, Executive Leadership, Member Parties, our six priorities, official statements, Windhoek 2026 resolutions, or DUA Forum 2026.',
  sources: [
    { label: 'Who We Are', href: '/who-we-are/' },
    { label: 'News & Official Statements', href: '/news/' },
    { label: 'Publications & Resolutions', href: '/policy-briefs/' },
  ],
};

export default function GeminiChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(() => {
    try {
      const saved = window.sessionStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {
      // ignore storage errors
    }
    return [INITIAL_WELCOME];
  });
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorState, setErrorState] = useState(null); // { message, retryQuestion }
  const [connectionMode, setConnectionMode] = useState('checking'); // 'checking' | 'live' | 'demo'

  const titleId = useId();
  const inputRef = useRef(null);
  const launcherRef = useRef(null);
  const listEndRef = useRef(null);

  useEffect(() => {
    try {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch {
      // ignore storage errors
    }
  }, [messages]);

  useEffect(() => {
    if (!open) return undefined;
    const timer = window.setTimeout(() => inputRef.current?.focus(), 40);
    const onKeyDown = event => {
      if (event.key === 'Escape') {
        event.stopPropagation();
        setOpen(false);
        launcherRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    if (open) {
      listEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [messages, loading, errorState, open]);

  const sendQuestion = async questionText => {
    const trimmed = String(questionText || '').trim();
    if (!trimmed || loading) return;

    const userMsg = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: trimmed,
    };

    const updatedHistory = [...messages, userMsg];
    setMessages(updatedHistory);
    setInput('');
    setLoading(true);
    setErrorState(null);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: trimmed,
          messages: updatedHistory
            .filter(m => m.id !== 'welcome')
            .map(m => ({ role: m.role, content: m.content })),
        }),
      });

      const contentType = response.headers.get('content-type') || '';
      if (!contentType.includes('application/json')) {
        // Static hosting fallback when /api/chat serverless endpoint is not mounted:
        // Explicitly respond in Demo Mode using approved DUA site content (never faking live Gemini).
        const demoPayload = buildDemoAnswer(trimmed);
        setConnectionMode('demo');
        setMessages(current => [
          ...current,
          {
            id: `assistant-${Date.now()}`,
            role: 'assistant',
            mode: 'demo',
            content: demoPayload.reply,
            sources: demoPayload.sources,
            disclaimer: demoPayload.disclaimer,
          },
        ]);
        setLoading(false);
        return;
      }

      const data = await response.json();
      if (!response.ok || data.error) {
        throw new Error(data.error || 'Unable to complete the request right now.');
      }

      const mode = data.mode === 'live' ? 'live' : 'demo';
      setConnectionMode(mode);
      setMessages(current => [
        ...current,
        {
          id: `assistant-${Date.now()}`,
          role: 'assistant',
          mode,
          content: data.reply,
          sources: data.sources || [],
          disclaimer: data.disclaimer,
        },
      ]);
    } catch (err) {
      setErrorState({
        message: err?.message || 'The assistant encountered a connection issue. Please retry.',
        retryQuestion: trimmed,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    sendQuestion(input);
  };

  const clearHistory = () => {
    setMessages([INITIAL_WELCOME]);
    setErrorState(null);
    try {
      window.sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  return (
    <div className="dua-gemini-root">
      {open && (
        <section
          className="dua-gemini-window"
          role="dialog"
          aria-modal="false"
          aria-labelledby={titleId}
        >
          <header className="dua-gemini-header">
            <div className="dua-gemini-brand">
              <span className="dua-gemini-avatar" aria-hidden="true">
                <Sparkles size={16} />
              </span>
              <div>
                <h2 id={titleId}>DUA Gemini Assistant</h2>
                <span className={`dua-gemini-badge ${connectionMode === 'live' ? 'is-live' : 'is-demo'}`}>
                  {connectionMode === 'live'
                    ? 'Live Gemini API'
                    : 'Demo Mode · Official DUA Site Content'}
                </span>
              </div>
            </div>
            <div className="dua-gemini-header-actions">
              {messages.length > 1 && (
                <button
                  type="button"
                  className="dua-gemini-icon-btn"
                  onClick={clearHistory}
                  aria-label="Clear conversation history"
                  title="Clear conversation"
                >
                  <Trash2 size={15} aria-hidden="true" />
                </button>
              )}
              <button
                type="button"
                className="dua-gemini-icon-btn"
                onClick={() => {
                  setOpen(false);
                  launcherRef.current?.focus();
                }}
                aria-label="Close DUA Gemini Assistant"
              >
                <X size={18} aria-hidden="true" />
              </button>
            </div>
          </header>

          <div className="dua-gemini-disclaimer-bar">
            Generated answers summarize approved DUA website content and are distinct from formal DUA Executive statements.
          </div>

          <div className="dua-gemini-messages" role="log" aria-live="polite">
            {messages.map(msg => (
              <article
                key={msg.id}
                className={`dua-gemini-msg dua-gemini-msg--${msg.role}`}
              >
                <div className="dua-gemini-msg-meta">
                  <span>
                    {msg.role === 'user'
                      ? 'You'
                      : msg.mode === 'live'
                      ? 'Gemini AI · DUA Assistant'
                      : msg.mode === 'demo'
                      ? 'DUA Assistant (Demo Mode)'
                      : 'DUA Assistant'}
                  </span>
                </div>
                <div className="dua-gemini-msg-bubble">
                  <p>{msg.content}</p>
                  {msg.sources?.length > 0 && (
                    <div className="dua-gemini-sources">
                      <span>Official DUA pages:</span>
                      <div className="dua-gemini-source-links">
                        {msg.sources.map(src => (
                          <a key={src.href} href={src.href} onClick={() => setOpen(false)}>
                            {src.label} <ArrowUpRight size={13} aria-hidden="true" />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                  {msg.disclaimer && (
                    <p className="dua-gemini-msg-note">{msg.disclaimer}</p>
                  )}
                </div>
              </article>
            ))}

            {messages.length === 1 && !loading && (
              <div className="dua-gemini-suggestions" aria-label="Suggested questions">
                <p className="eyebrow">SUGGESTED QUESTIONS</p>
                <div className="dua-gemini-suggestion-list">
                  {SUGGESTED_QUESTIONS.map(q => (
                    <button
                      key={q}
                      type="button"
                      onClick={() => sendQuestion(q)}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {loading && (
              <div className="dua-gemini-loading" role="status">
                <Bot size={16} aria-hidden="true" />
                <span>Consulting DUA knowledge base…</span>
              </div>
            )}

            {errorState && (
              <div className="dua-gemini-error" role="alert">
                <div className="dua-gemini-error-text">
                  <AlertCircle size={16} aria-hidden="true" />
                  <span>{errorState.message}</span>
                </div>
                <button
                  type="button"
                  className="dua-gemini-retry-btn"
                  onClick={() => sendQuestion(errorState.retryQuestion)}
                >
                  <RotateCcw size={14} aria-hidden="true" /> Retry
                </button>
              </div>
            )}

            <div ref={listEndRef} />
          </div>

          <form className="dua-gemini-input-bar" onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Ask about DUA leadership, statements, priorities..."
              aria-label="Ask the DUA Gemini Assistant a question"
              maxLength={400}
              disabled={loading}
            />
            <button
              type="submit"
              className="dua-gemini-send-btn"
              disabled={!input.trim() || loading}
              aria-label="Send question"
            >
              <Send size={16} aria-hidden="true" />
            </button>
          </form>
        </section>
      )}

      <button
        ref={launcherRef}
        type="button"
        className={`dua-gemini-launcher ${open ? 'is-open' : ''}`}
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
        aria-label={open ? 'Close DUA Gemini AI Assistant' : 'Open DUA Gemini AI Assistant'}
      >
        <Sparkles size={18} aria-hidden="true" />
        <span>Ask DUA AI</span>
      </button>
    </div>
  );
}

