import React, { useEffect, useId, useRef, useState } from 'react';
import { ArrowUpRight, RotateCcw, Send, Sparkles, X, AlertCircle } from 'lucide-react';
import { buildDemoAnswer } from '../api/chat.js';

const STORAGE_KEY = 'dua-gemini-chat-history-v2';

const SUGGESTIONS = [
  { label: 'About DUA', query: 'Tell me about the Democracy Union of Africa (DUA)' },
  { label: 'Latest news', query: 'What are DUA’s latest news and official statements?' },
  { label: 'Our leadership', query: 'Who are DUA’s Chairperson and executive leaders?' },
  { label: 'Events', query: 'What are DUA’s recent events, forums, and convenings?' },
];

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
    return [];
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
    const timer = window.setTimeout(() => inputRef.current?.focus(), 50);
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
    if (open && messages.length > 0) {
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
          messages: updatedHistory.map(m => ({ role: m.role, content: m.content })),
        }),
      });

      const contentType = response.headers.get('content-type') || '';
      if (!contentType.includes('application/json')) {
        // Fallback to approved DUA site content in demo mode
        const demoPayload = buildDemoAnswer(trimmed);
        setConnectionMode('demo');
        setMessages(current => [
          ...current,
          {
            id: `assistant-${Date.now()}`,
            role: 'assistant',
            mode: 'demo',
            content: demoPayload.reply,
            sources: demoPayload.sources || [],
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

  const startNewConversation = () => {
    setMessages([]);
    setErrorState(null);
    setInput('');
    try {
      window.sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    inputRef.current?.focus();
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
          {/* Header */}
          <header className="dua-gemini-header">
            <div className="dua-gemini-brand">
              <span className="dua-gemini-avatar" aria-hidden="true">
                <Sparkles size={16} strokeWidth={2} />
              </span>
              <div>
                <div className="dua-gemini-title-row">
                  <h2 id={titleId}>Ask DUA</h2>
                  {connectionMode === 'demo' && (
                    <span className="dua-gemini-demo-tag" title="Operating with approved DUA knowledge base">
                      Demo
                    </span>
                  )}
                </div>
                <p className="dua-gemini-subtitle">Your guide to DUA</p>
              </div>
            </div>

            <div className="dua-gemini-header-actions">
              {messages.length > 0 && (
                <button
                  type="button"
                  className="dua-gemini-icon-btn"
                  onClick={startNewConversation}
                  aria-label="Start a new conversation"
                  title="New conversation"
                >
                  <RotateCcw size={15} aria-hidden="true" />
                </button>
              )}
              <button
                type="button"
                className="dua-gemini-icon-btn"
                onClick={() => {
                  setOpen(false);
                  launcherRef.current?.focus();
                }}
                aria-label="Close Ask DUA"
                title="Close"
              >
                <X size={17} aria-hidden="true" />
              </button>
            </div>
          </header>

          {/* Main Area: Welcome State OR Conversation */}
          <div className="dua-gemini-body">
            {messages.length === 0 ? (
              <div className="dua-gemini-welcome">
                <div className="dua-gemini-welcome-card">
                  <div className="dua-gemini-welcome-icon" aria-hidden="true">
                    <Sparkles size={22} strokeWidth={2} />
                  </div>
                  <h3>Hello there.</h3>
                  <p>
                    Looking for information about DUA? I can help you explore our work, leadership, events and publications.
                  </p>
                </div>

                <div className="dua-gemini-chips-container" aria-label="Suggested topics">
                  <span className="dua-gemini-chips-label">Quick topics</span>
                  <div className="dua-gemini-chips">
                    {SUGGESTIONS.map(s => (
                      <button
                        key={s.label}
                        type="button"
                        className="dua-gemini-chip"
                        onClick={() => sendQuestion(s.query)}
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>
                </div>

                <p className="dua-gemini-disclaimer">
                  AI-generated responses. Verify official statements using linked sources.
                </p>
              </div>
            ) : (
              <div className="dua-gemini-messages" role="log" aria-live="polite">
                {messages.map(msg => (
                  <article
                    key={msg.id}
                    className={`dua-gemini-msg dua-gemini-msg--${msg.role}`}
                  >
                    <div className="dua-gemini-msg-bubble">
                      <p>{msg.content}</p>

                      {msg.role === 'assistant' && msg.sources?.length > 0 && (
                        <div className="dua-gemini-sources">
                          <span className="dua-gemini-sources-title">Verified sources:</span>
                          <div className="dua-gemini-source-links">
                            {msg.sources.map(src => (
                              <a
                                key={src.href}
                                href={src.href}
                                className="dua-gemini-source-pill"
                                onClick={() => setOpen(false)}
                              >
                                <span>{src.label}</span>
                                <ArrowUpRight size={12} aria-hidden="true" />
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </article>
                ))}

                {loading && (
                  <div className="dua-gemini-msg dua-gemini-msg--assistant" role="status">
                    <div className="dua-gemini-msg-bubble dua-gemini-typing-bubble">
                      <div className="dua-gemini-typing-indicator" aria-label="Thinking">
                        <span className="dot" />
                        <span className="dot" />
                        <span className="dot" />
                      </div>
                    </div>
                  </div>
                )}

                {errorState && (
                  <div className="dua-gemini-error" role="alert">
                    <div className="dua-gemini-error-text">
                      <AlertCircle size={15} aria-hidden="true" />
                      <span>{errorState.message}</span>
                    </div>
                    <button
                      type="button"
                      className="dua-gemini-retry-btn"
                      onClick={() => sendQuestion(errorState.retryQuestion)}
                    >
                      <RotateCcw size={12} aria-hidden="true" /> Retry
                    </button>
                  </div>
                )}

                {messages.length > 0 && (
                  <p className="dua-gemini-disclaimer dua-gemini-disclaimer--inline">
                    AI-generated responses. Verify official statements using linked sources.
                  </p>
                )}

                <div ref={listEndRef} />
              </div>
            )}
          </div>

          {/* Fixed Input Form */}
          <form className="dua-gemini-input-bar" onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Ask a question..."
              aria-label="Ask DUA a question"
              maxLength={400}
              disabled={loading}
            />
            <button
              type="submit"
              className="dua-gemini-send-btn"
              disabled={!input.trim() || loading}
              aria-label="Send message"
            >
              <Send size={15} aria-hidden="true" />
            </button>
          </form>
        </section>
      )}

      {/* Floating Launcher Button */}
      <button
        ref={launcherRef}
        type="button"
        className={`dua-gemini-launcher ${open ? 'is-open' : ''}`}
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
        aria-label={open ? 'Close Ask DUA assistant' : 'Open Ask DUA assistant'}
        title={open ? 'Close Ask DUA' : 'Ask DUA'}
      >
        <Sparkles size={20} aria-hidden="true" />
        <span className="sr-only">Ask DUA</span>
      </button>
    </div>
  );
}
