import React, { useEffect, useRef, useState } from 'react';
import { INTRO_MESSAGES, PORTFOLIO_TOPICS, PRIMARY_TOPIC_IDS, PROMPT_APPS } from './phoneConversation';
import useCopyEmail from '../../hooks/useCopyEmail';

const PhoneHeaderPhone = ({ revealDelayMs = 0, intro = false, paused = false, inactive = false, onOpen, scale = 1, startExploring = false }) => {
  const messagesRef = useRef(null);
  const responseTimerRef = useRef(null);
  const typewriterTimerRef = useRef(null);
  const introTimerRef = useRef(null);
  const [messagesOpen, setMessagesOpen] = useState(revealDelayMs === 0);
  const [history, setHistory] = useState(() => inactive ? INTRO_MESSAGES : []);
  const [introComplete, setIntroComplete] = useState(inactive);
  const [greetingReady, setGreetingReady] = useState(inactive);
  const [started, setStarted] = useState(false);
  const [typing, setTyping] = useState(false);
  const [streaming, setStreaming] = useState(false);
  const [followUps, setFollowUps] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [topicLinks, setTopicLinks] = useState([]);
  const [activeApp, setActiveApp] = useState(null);
  const [previewCycle, setPreviewCycle] = useState(0);
  const { copied: emailCopied, copyEmail } = useCopyEmail();

  const previewTopicIds = ['build', 'experience', 'projects', 'stack', 'availability', 'contact'];
  const visiblePreviewTopics = Array.from({ length: 3 }, (_, offset) => (
    previewTopicIds[(previewCycle + offset) % previewTopicIds.length]
  ));

  useEffect(() => {
    if (revealDelayMs === 0) return undefined;
    const timer = window.setTimeout(() => setMessagesOpen(true), revealDelayMs);
    return () => window.clearTimeout(timer);
  }, [revealDelayMs]);

  useEffect(() => {
    if (startExploring) setMessagesOpen(true);
  }, [startExploring]);

  useEffect(() => {
    if (!messagesOpen) return undefined;
    if (inactive) {
      setHistory(INTRO_MESSAGES);
      setIntroComplete(true);
      return undefined;
    }

    setHistory([]);
    setIntroComplete(false);
    setGreetingReady(false);
    introTimerRef.current = window.setTimeout(() => {
      typeChatMessage(INTRO_MESSAGES[0], () => {
        introTimerRef.current = window.setTimeout(() => {
          typeChatMessage(INTRO_MESSAGES[1], () => {
            setIntroComplete(true);
            introTimerRef.current = window.setTimeout(() => setGreetingReady(true), 900);
          });
        }, 650);
      });
    }, 1300);

    return () => {
      window.clearTimeout(introTimerRef.current);
      window.clearTimeout(typewriterTimerRef.current);
    };
  }, [inactive, messagesOpen]);

  useEffect(() => {
    if (!inactive || !messagesOpen || paused) return undefined;
    const previewTimer = window.setInterval(() => {
      setPreviewCycle((current) => (current + 1) % previewTopicIds.length);
    }, 3200);
    return () => window.clearInterval(previewTimer);
  }, [inactive, messagesOpen, paused, previewTopicIds.length]);

  useEffect(() => {
    const container = messagesRef.current;
    if (!container) return undefined;

    const scrollTimer = window.setTimeout(() => {
      container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
    }, 60);

    return () => window.clearTimeout(scrollTimer);
  }, [history, typing, messagesOpen, followUps, contacts, topicLinks, greetingReady, previewCycle]);

  useEffect(() => () => {
    window.clearTimeout(responseTimerRef.current);
    window.clearTimeout(typewriterTimerRef.current);
    window.clearTimeout(introTimerRef.current);
  }, []);

  const typeChatMessage = (message, onComplete) => {
    const { text } = message;
    window.clearTimeout(typewriterTimerRef.current);
    setTyping(true);

    if (message.side === 'visitor') {
      setHistory((current) => [...current, message]);
      setStreaming(false);
      setTyping(false);
      onComplete?.();
      return;
    }

    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setHistory((current) => [...current, message]);
      setStreaming(false);
      setTyping(false);
      onComplete?.();
      return;
    }

    setStreaming(true);
    setHistory((current) => [
      ...current,
      { ...message, text: '', fullText: text, isTyping: true },
    ]);

    let characterIndex = 0;
    const typeNextCharacter = () => {
      characterIndex += 1;
      const isComplete = characterIndex >= text.length;

      setHistory((current) => {
        const messageIndex = current.length - 1;
        const currentMessage = current[messageIndex];
        if (!currentMessage?.isTyping) return current;

        const nextHistory = [...current];
        nextHistory[messageIndex] = {
          ...currentMessage,
          text: text.slice(0, characterIndex),
          isTyping: !isComplete,
        };
        return nextHistory;
      });

      if (isComplete) {
        setStreaming(false);
        setTyping(false);
        onComplete?.();
        return;
      }

      typewriterTimerRef.current = window.setTimeout(typeNextCharacter, 14);
    };

    typewriterTimerRef.current = window.setTimeout(typeNextCharacter, 500);
  };

  const askQuestion = (topicId) => {
    if (typing || paused) return;
    const topic = PORTFOLIO_TOPICS[topicId];
    if (!topic) return;

    setFollowUps([]);
    setContacts([]);
    setTopicLinks([]);
    window.clearTimeout(responseTimerRef.current);
    typeChatMessage(
      { side: 'visitor', text: topic.question, icon: topic.icon },
      () => {
        setTyping(true);
        responseTimerRef.current = window.setTimeout(() => {
          typeChatMessage({ side: 'matt', text: topic.answer }, () => {
            setContacts(topic.contacts || []);
            setTopicLinks(topic.topicLinks || []);
            setFollowUps(topic.followUps || PRIMARY_TOPIC_IDS);
          });
        }, 650);
      }
    );
  };

  const startConversation = (initialTopics = PRIMARY_TOPIC_IDS, appId = null) => {
    if (started || typing || paused) return;
    setStarted(true);
    setActiveApp(appId);
    setTopicLinks([]);
    window.clearTimeout(responseTimerRef.current);
    setHistory((current) => [
      ...current,
      { side: 'visitor', text: 'Hey, thanks!', icon: '👋', skipArrival: true },
    ]);
    setTyping(true);
    responseTimerRef.current = window.setTimeout(() => {
      typeChatMessage(
        { side: 'matt', text: 'Great to meet you. Choose a question below to get started.' },
        () => setFollowUps(initialTopics)
      );
    }, 650);
  };

  const startWithQuestion = (topicId) => {
    if (started || typing || paused) return;
    const topic = PORTFOLIO_TOPICS[topicId];
    if (!topic) return;

    setStarted(true);
    setTopicLinks([]);
    window.clearTimeout(responseTimerRef.current);
    setHistory((current) => [
      ...current,
      { side: 'visitor', text: 'Hey, thanks!', icon: '👋', skipArrival: true },
    ]);
    setTyping(true);
    responseTimerRef.current = window.setTimeout(() => {
      typeChatMessage(
        { side: 'visitor', text: topic.question, icon: topic.icon },
        () => {
          setTyping(true);
          responseTimerRef.current = window.setTimeout(() => {
            typeChatMessage({ side: 'matt', text: topic.answer }, () => {
              setContacts(topic.contacts || []);
              setTopicLinks(topic.topicLinks || []);
              setFollowUps(topic.followUps || PRIMARY_TOPIC_IDS);
            });
          }, 650);
        }
      );
    }, 240);
  };

  const resetQuestions = () => {
    window.clearTimeout(responseTimerRef.current);
    setStarted(true);
    setContacts([]);
    setTopicLinks([]);
    setFollowUps([]);
    setActiveApp(null);
    typeChatMessage(
      { side: 'matt', text: 'Back at the main menu. What would you like to explore next?' },
      () => setFollowUps(PRIMARY_TOPIC_IDS)
    );
  };

  const selectPromptApp = (app) => {
    if (typing || paused || inactive) return;

    if (app.id === 'contact') {
      const contactTopic = PORTFOLIO_TOPICS.contact;
      setStarted(true);
      setActiveApp(app.id);
      setContacts([]);
      setTopicLinks([]);
      setFollowUps([]);
      typeChatMessage({ side: 'matt', text: contactTopic.answer }, () => {
        setContacts(contactTopic.contacts || []);
        setFollowUps(contactTopic.followUps || PRIMARY_TOPIC_IDS);
      });
      return;
    }

    if (!started) {
      startConversation(app.topics, app.id);
      return;
    }
    window.clearTimeout(responseTimerRef.current);
    setContacts([]);
    setTopicLinks([]);
    setFollowUps(app.topics);
    setActiveApp(app.id);
  };

  const visibleMessages = history;

  return (
    <div
      className={`flex-shrink-0 relative z-10 ${intro ? 'phone-intro-jiggle' : ''} ${inactive ? 'phone-inactive-launcher' : ''}`}
      aria-label={inactive ? 'Open Matt’s portfolio assistant' : messagesOpen ? 'Interactive portfolio assistant' : 'Phone waking up'}
      data-conversation-paused={paused ? 'true' : 'false'}
      role={inactive ? 'button' : undefined}
      tabIndex={inactive ? 0 : undefined}
      onClick={inactive ? onOpen : undefined}
      onKeyDown={inactive ? (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onOpen?.();
        }
      } : undefined}
      style={{ width: `${240 * scale}px`, height: `${520 * scale}px` }}
    >
      <div
        style={{
          width: '240px', height: '520px', background: '#1c1c1e', borderRadius: '44px',
          border: '2px solid #3a3a3c',
          boxShadow: '0 0 0 1px #000, 0 32px 80px rgba(0,0,0,0.9), 0 0 60px rgba(37,99,235,0.08)',
          display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative',
          transform: `scale(${scale})`, transformOrigin: 'top left',
        }}
      >
        <div style={{ background: '#000', padding: '10px 20px 6px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
          <span style={{ fontSize: '12px', fontWeight: 600, color: '#fff' }}>9:41</span>
          <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
            <svg width="16" height="12" viewBox="0 0 16 12" fill="#fff"><rect x="0" y="3" width="3" height="9" rx="1"/><rect x="4" y="2" width="3" height="10" rx="1"/><rect x="8" y="0" width="3" height="12" rx="1"/><rect x="12" y="0" width="3" height="12" rx="1" opacity=".3"/></svg>
            <svg width="15" height="12" viewBox="0 0 15 12" fill="#fff"><path d="M7.5 2.5C10.2 2.5 12.6 3.7 14.2 5.6L15 4.7C13.1 2.5 10.5 1 7.5 1S1.9 2.5 0 4.7l.8.9C2.4 3.7 4.8 2.5 7.5 2.5z"/><path d="M7.5 5C9.4 5 11.1 5.8 12.3 7.1l.8-.9C11.7 4.7 9.7 3.7 7.5 3.7S3.3 4.7 2.4 6.2l.8.9C4.4 5.8 5.8 5 7.5 5z"/><circle cx="7.5" cy="10" r="1.5"/></svg>
            <svg width="25" height="12" viewBox="0 0 25 12"><rect x="0" y="1" width="21" height="10" rx="2.5" stroke="#fff" strokeWidth="1" fill="none"/><rect x="1.5" y="2.5" width="16" height="7" rx="1.5" fill="#fff"/><rect x="22" y="4" width="2.5" height="4" rx="1.25" fill="#fff" opacity=".4"/></svg>
          </div>
        </div>

        {messagesOpen ? (
          <>
            <div className="phone-messages-reveal" style={{ background: '#1c1c1e', borderBottom: '1px solid #2c2c2e', padding: '8px 14px', display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
              <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'linear-gradient(135deg,#2563eb,#1d4ed8)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 700, color: '#fff' }}>MS</div>
              <div style={{ minWidth: 0, flex: 1 }}>
                <div style={{ fontSize: '12px', fontWeight: 600, color: '#fff' }}>Matt’s Portfolio</div>
                <div style={{ fontSize: '10px', color: inactive ? '#60a5fa' : paused ? '#8e8e93' : '#34c759' }}>{inactive ? '● Tap to open' : paused ? '● Paused' : '● Ready to help'}</div>
              </div>
              {!inactive && (
                <button
                  type="button"
                  onClick={resetQuestions}
                  disabled={!started || typing || paused}
                  aria-label="Return to main menu"
                  title="Main menu"
                  style={{ display: 'grid', width: 28, height: 28, flexShrink: 0, placeItems: 'center', border: '1px solid rgba(148,163,184,.28)', borderRadius: 9, background: started ? 'rgba(37,99,235,.18)' : 'rgba(255,255,255,.035)', color: started ? '#93c5fd' : '#64748b', cursor: !started || typing || paused ? 'default' : 'pointer', opacity: typing || paused ? .55 : 1, transition: 'background 180ms ease,color 180ms ease,border-color 180ms ease' }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m3 11 9-8 9 8" />
                    <path d="M5 10v10h14V10" />
                    <path d="M9 20v-6h6v6" />
                  </svg>
                </button>
              )}
            </div>

            <div ref={messagesRef} className="phone-messages-reveal" style={{ flex: 1, overflowY: 'auto', padding: '10px 9px', display: 'flex', flexDirection: 'column', background: 'linear-gradient(165deg,#020617 0%,#080f1f 52%,#111827 100%)' }}>
              {visibleMessages.map((message, index) => (
                <div key={`${message.side}-${index}`} style={{ display: 'flex', justifyContent: message.side === 'visitor' ? 'flex-end' : 'flex-start', marginTop: index === 0 ? 0 : 5 }}>
                  <div className={`${message.skipArrival ? '' : 'phone-message-arrival'} ${message.fullText ? 'phone-typing-bubble' : ''}`} aria-label={message.isTyping ? message.fullText : undefined} style={{ width: message.side === 'visitor' ? 'max-content' : 'auto', maxWidth: message.side === 'visitor' ? '100%' : '84%', minWidth: 0, padding: message.side === 'visitor' ? '6px 8px' : '6px 9px', fontSize: message.side === 'visitor' ? '11px' : '14px', lineHeight: message.side === 'visitor' ? 1.2 : 1.42, color: '#fff', whiteSpace: message.side === 'visitor' ? 'nowrap' : 'pre-wrap', overflowWrap: message.side === 'visitor' ? 'normal' : 'anywhere', wordBreak: 'normal', hyphens: message.side === 'visitor' ? 'none' : 'auto', background: message.side === 'visitor' ? '#2563eb' : 'linear-gradient(135deg,#065f46 0%,#059669 55%,#22c55e 100%)', boxShadow: message.side === 'visitor' ? 'none' : '0 5px 16px rgba(16,185,129,.18)', borderRadius: message.side === 'visitor' ? '16px 16px 4px 16px' : '16px 16px 16px 4px' }}>
                    {message.icon && <span aria-hidden="true" style={{ display: 'inline-block', marginRight: message.side === 'visitor' ? 4 : 6, fontSize: message.side === 'visitor' ? 13 : 'inherit', fontWeight: 800 }}>{message.icon}</span>}
                    {message.isTyping ? (
                      <span style={{ position: 'relative', display: 'inline-block' }}>
                        <span aria-hidden="true" style={{ visibility: 'hidden' }}>{message.fullText}</span>
                        <span aria-hidden="true" style={{ position: 'absolute', inset: 0, whiteSpace: 'pre-wrap' }}>
                          {message.text}<span className="phone-type-cursor">▌</span>
                        </span>
                      </span>
                    ) : (
                      <span>{message.text}</span>
                    )}
                  </div>
                </div>
              ))}

              {typing && !streaming && (
                <div style={{ display: 'flex', marginTop: 5 }}>
                  <div style={{ display: 'flex', gap: 5, padding: 12, background: '#2c2c2e', borderRadius: '16px 16px 16px 4px' }}>
                    {[0, 0.2, 0.4].map((delay) => <span key={delay} style={{ width: 5, height: 5, borderRadius: '50%', background: '#aaa', animation: 'phoneHeaderDotBounce 1.2s infinite ease-in-out', animationDelay: `${delay}s` }} />)}
                  </div>
                </div>
              )}

              {!typing && greetingReady && introComplete && !started && !paused && !inactive && (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 7, marginTop: 12 }}>
                  <button
                    type="button"
                    onClick={() => startConversation()}
                    className="phone-greeting-arrival"
                    style={{ display: 'flex', alignItems: 'center', gap: 2, maxWidth: '84%', border: '1px solid #2563eb', borderRadius: 16, background: 'linear-gradient(135deg,#2563eb,#1d4ed8)', color: '#fff', padding: '7px 10px', fontSize: 14, fontWeight: 700, cursor: 'pointer', boxShadow: '0 5px 18px rgba(37,99,235,.28)' }}
                  >
                    <span aria-hidden="true">👋</span>
                    <span>Hey, thanks!</span>
                  </button>
                </div>
              )}

              {!typing && greetingReady && !started && !paused && !inactive && (
                <div aria-label="Sample questions" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 5, marginTop: 8 }}>
                  {visiblePreviewTopics.map((topicId, index) => (
                    <button
                      key={topicId}
                      type="button"
                      onClick={() => startWithQuestion(topicId)}
                      className="phone-question-arrival phone-choice-glow"
                      style={{ '--phone-choice-delay': `${index * 260}ms`, '--phone-glow-delay': `${index * 420}ms`, display: 'inline-flex', alignItems: 'center', justifyContent: 'flex-start', alignSelf: 'flex-end', gap: 4, width: 'max-content', maxWidth: '100%', border: '1px solid rgba(96,165,250,.7)', borderRadius: '16px 16px 4px 16px', background: 'linear-gradient(135deg,rgba(37,99,235,.92),rgba(29,78,216,.78))', color: '#fff', padding: '6px 8px', fontSize: 11, fontWeight: 650, lineHeight: 1.2, textAlign: 'left', cursor: 'pointer', boxShadow: '0 4px 14px rgba(37,99,235,.18)', whiteSpace: 'nowrap' }}
                    >
                      <span aria-hidden="true" style={{ flexShrink: 0, fontSize: 13 }}>{PORTFOLIO_TOPICS[topicId].icon}</span>
                      <span style={{ minWidth: 0 }}>{PORTFOLIO_TOPICS[topicId].question}</span>
                    </button>
                  ))}
                  <span className="phone-waiting-dot" role="status" aria-label="Waiting for your question" />
                </div>
              )}

              {!typing && contacts.length > 0 && (
                <div style={{ display: 'grid', gap: 6, marginTop: 9 }}>
                  {contacts.map((contact) => {
                    const ContactElement = contact.type === 'email' ? 'button' : 'a';
                    return (
                    <ContactElement
                      key={contact.type}
                      type={contact.type === 'email' ? 'button' : undefined}
                      href={contact.type === 'email' ? undefined : contact.href}
                      target={contact.type === 'email' ? undefined : '_blank'}
                      rel={contact.type === 'email' ? undefined : 'noreferrer'}
                      onClick={contact.type === 'email' ? copyEmail : undefined}
                      aria-live={contact.type === 'email' ? 'polite' : undefined}
                      aria-label={`${contact.label}: ${contact.detail}`}
                      style={{ display: 'flex', width: '100%', alignItems: 'center', gap: 9, padding: '8px 10px', border: '1px solid rgba(255,255,255,.12)', borderRadius: 12, background: 'linear-gradient(135deg,rgba(255,255,255,.08),rgba(255,255,255,.03))', textDecoration: 'none', textAlign: 'left', fontFamily: 'inherit', cursor: 'pointer' }}
                    >
                      <span style={{ width: 28, height: 28, flexShrink: 0, borderRadius: 8, display: 'grid', placeItems: 'center', color: '#fff', background: contact.type === 'email' ? 'linear-gradient(135deg,#ef4444,#f97316)' : contact.type === 'linkedin' ? 'linear-gradient(135deg,#0a66c2,#38bdf8)' : 'linear-gradient(135deg,#334155,#111827)' }}>
                        {contact.type === 'email' && (
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
                        )}
                        {contact.type === 'linkedin' && (
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M6.5 8.5H3.2V19h3.3V8.5ZM4.85 3.5A1.9 1.9 0 1 0 4.85 7.3a1.9 1.9 0 0 0 0-3.8ZM20.8 13c0-3.2-1.7-4.7-4-4.7-1.85 0-2.68 1-3.15 1.73V8.5h-3.3V19h3.3v-5.2c0-1.37.26-2.7 1.96-2.7 1.67 0 1.69 1.56 1.69 2.8V19h3.3l.2-6Z"/></svg>
                        )}
                        {contact.type === 'github' && (
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.88c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.5 9.5 0 0 1 12 6.82a9.5 9.5 0 0 1 2.5.34c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86V21c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/></svg>
                        )}
                      </span>
                      <span style={{ minWidth: 0, flex: 1 }}>
                        <span style={{ display: 'block', color: '#fff', fontSize: 10, fontWeight: 700 }}>{contact.type === 'email' && emailCopied ? 'Copied!' : contact.label}</span>
                        <span style={{ display: 'block', color: '#8e8e93', fontSize: 8, marginTop: 1 }}>{contact.type === 'email' && emailCopied ? 'Email address copied' : contact.detail}</span>
                      </span>
                      <span aria-hidden="true" style={{ color: emailCopied && contact.type === 'email' ? '#34d399' : '#64748b', fontSize: 13 }}>{contact.type === 'email' && emailCopied ? '✓' : '›'}</span>
                    </ContactElement>
                    );
                  })}
                </div>
              )}

              {!typing && topicLinks.length > 0 && (
                <div aria-label="Related topics" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,minmax(0,1fr))', gap: 6, marginTop: 9 }}>
                  {topicLinks.map((project, index) => (
                    <button
                      key={project.topicId}
                      type="button"
                      onClick={() => askQuestion(project.topicId)}
                      className="phone-question-arrival phone-choice-glow"
                      style={{ '--phone-choice-delay': `${index * 140}ms`, '--phone-glow-delay': `${index * 300}ms`, display: 'flex', minWidth: 0, alignItems: 'center', gap: 6, border: '1px solid rgba(52,211,153,.72)', borderRadius: 11, background: 'linear-gradient(145deg,rgba(6,78,59,.7),rgba(15,23,42,.96))', color: '#fff', padding: '7px 6px', textAlign: 'left', cursor: 'pointer', boxShadow: '0 4px 14px rgba(16,185,129,.2)' }}
                    >
                      <span aria-hidden="true" style={{ flexShrink: 0, fontSize: 14 }}>{project.icon}</span>
                      <span style={{ minWidth: 0, flex: 1 }}>
                        <span style={{ display: 'block', overflow: 'hidden', fontSize: 9, fontWeight: 800, lineHeight: 1.15, textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{project.label}</span>
                        <span style={{ display: 'block', marginTop: 2, color: '#6ee7b7', fontSize: 7, lineHeight: 1.15 }}>{project.detail}</span>
                      </span>
                      <span aria-hidden="true" style={{ flexShrink: 0, color: '#34d399', fontSize: 12 }}>›</span>
                    </button>
                  ))}
                </div>
              )}

              {inactive && (
                <div key={previewCycle} aria-label="Sample questions" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 5, marginTop: 'auto', paddingTop: 10 }}>
                  {visiblePreviewTopics.map((topicId, index) => (
                    <div className="phone-question-arrival phone-choice-glow" key={topicId} style={{ '--phone-choice-delay': `${index * 260}ms`, '--phone-glow-delay': `${index * 420}ms`, display: 'inline-flex', alignItems: 'center', justifyContent: 'flex-start', alignSelf: 'flex-end', gap: 4, width: 'max-content', maxWidth: '100%', border: '1px solid rgba(96,165,250,.55)', borderRadius: '15px 15px 4px 15px', background: 'linear-gradient(135deg,rgba(37,99,235,.78),rgba(29,78,216,.62))', color: '#fff', padding: '6px 8px', fontSize: 10, fontWeight: 650, lineHeight: 1.2, textAlign: 'left', whiteSpace: 'nowrap', boxShadow: '0 4px 12px rgba(37,99,235,.14)' }}>
                      <span aria-hidden="true" style={{ flexShrink: 0, fontSize: 12 }}>{PORTFOLIO_TOPICS[topicId].icon}</span>
                      <span style={{ minWidth: 0 }}>{PORTFOLIO_TOPICS[topicId].question}</span>
                    </div>
                  ))}
                  <span className="phone-waiting-dot" aria-hidden="true" />
                </div>
              )}

              {!typing && followUps.length > 0 && !paused && !inactive && (
                <div
                  aria-label="Suggested questions"
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 5, marginTop: 10, paddingBottom: 4 }}
                >
                  {followUps.map((topicId, index) => (
                    <button
                      key={topicId}
                      type="button"
                      onClick={() => askQuestion(topicId)}
                      className="phone-question-arrival phone-choice-glow"
                      style={{ '--phone-choice-delay': `${index * 260}ms`, '--phone-glow-delay': `${index * 420}ms`, display: 'inline-flex', alignItems: 'center', justifyContent: 'flex-start', alignSelf: 'flex-end', gap: 4, width: 'max-content', maxWidth: '100%', border: '1px solid rgba(96,165,250,.75)', borderRadius: '16px 16px 4px 16px', background: 'linear-gradient(135deg,#2563eb,#1d4ed8)', color: '#fff', padding: '6px 8px', fontSize: 11, fontWeight: 650, lineHeight: 1.2, textAlign: 'left', cursor: 'pointer', boxShadow: '0 4px 14px rgba(37,99,235,.2)', whiteSpace: 'nowrap' }}
                    >
                      <span aria-hidden="true" style={{ flexShrink: 0, fontSize: 14 }}>{PORTFOLIO_TOPICS[topicId].icon}</span>
                      <span style={{ minWidth: 0 }}>{PORTFOLIO_TOPICS[topicId].question}</span>
                    </button>
                  ))}
                  <span className="phone-waiting-dot" role="status" aria-label="Waiting for your question" title="Waiting for your question" />
                </div>
              )}

            </div>
          </>
        ) : <div style={{ flex: 1, background: 'linear-gradient(165deg,#020617 0%,#080f1f 52%,#111827 100%)' }} aria-hidden="true" />}

        {messagesOpen && (
          <nav
            aria-label="Question categories"
            style={{ flexShrink: 0, padding: '7px 9px 6px', background: 'linear-gradient(180deg,rgba(17,24,39,.96),rgba(2,6,23,.98))', borderTop: '1px solid rgba(255,255,255,.08)' }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,minmax(0,1fr))', gap: 5, padding: 5, border: '1px solid rgba(255,255,255,.09)', borderRadius: 16, background: 'rgba(255,255,255,.055)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,.06)' }}>
              {PROMPT_APPS.map((app) => {
                const disabled = typing || paused || inactive;
                const selected = activeApp === app.id;
                return (
                  <button
                    key={app.id}
                    type="button"
                    disabled={disabled}
                    onClick={() => selectPromptApp(app)}
                    aria-pressed={selected}
                    aria-label={`${app.label} questions`}
                    style={{ display: 'flex', minWidth: 0, flexDirection: 'column', alignItems: 'center', gap: 3, border: 0, borderRadius: 11, padding: '4px 2px', color: selected ? '#fff' : '#e2e8f0', background: selected ? 'rgba(255,255,255,.14)' : 'rgba(255,255,255,.025)', opacity: disabled ? 0.72 : 1, cursor: disabled ? 'default' : 'pointer', transform: selected ? 'translateY(-1px)' : 'none', transition: 'background 180ms ease,transform 180ms ease,opacity 180ms ease' }}
                  >
                    <span aria-hidden="true" style={{ display: 'grid', width: 27, height: 27, placeItems: 'center', borderRadius: 8, background: app.gradient, fontSize: 13, boxShadow: selected ? '0 0 13px rgba(255,255,255,.22)' : '0 4px 9px rgba(0,0,0,.25)' }}>
                      {app.icon}
                    </span>
                    <span style={{ maxWidth: '100%', overflow: 'hidden', fontSize: 7, fontWeight: 700, textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {app.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </nav>
        )}

        <div style={{ background: '#111827', display: 'flex', justifyContent: 'center', padding: 7, flexShrink: 0 }}>
          <div style={{ width: 80, height: 4, background: '#444', borderRadius: 4 }} />
        </div>
        {inactive && (
          <div className="phone-launcher-cue" aria-hidden="true">
            <span className="phone-launcher-cue-icon">↗</span>
            <span>Open assistant</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PhoneHeaderPhone;
