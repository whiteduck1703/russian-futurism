import { useState, useEffect } from 'react';
import { useLang } from '../LangContext';

const sectionKeys = [
  { id: 'timeline',     key: 'nav.timeline' },
  { id: 'citymap',      key: 'nav.citymap' },
  { id: 'comparison',   key: 'nav.comparison' },
  { id: 'poets',        key: 'nav.poets' },
  { id: 'language-lab', key: 'nav.languagelab' },
  { id: 'manifestos',   key: 'nav.manifestos' },
  { id: 'conflicts',    key: 'nav.conflicts' },
  { id: 'graph',        key: 'nav.graph' },
  { id: 'glossary',     key: 'nav.glossary' },
  { id: 'quiz',         key: 'nav.quiz' },
  { id: 'quotes',       key: 'nav.quotes' },
  { id: 'gallery',      key: 'nav.gallery' },
  { id: 'texts',        key: 'nav.texts' },
];

export function NavBar() {
  const { lang, setLang, t } = useLang();
  const [active, setActive] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('futurism-theme');
    if (saved === 'light') {
      setIsDark(false);
      document.documentElement.classList.add('light-theme');
    }
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('light-theme', !next);
    localStorage.setItem('futurism-theme', next ? 'dark' : 'light');
  };

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 80);
      let found: string | null = null;
      for (const s of sectionKeys) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= 120) found = s.id;
      }
      setActive(found);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!active) return;
    const el = document.getElementById('nav-' + active);
    if (el) el.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
  }, [active]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  if (!visible) return null;

  const css = `
    @keyframes navSlideDown { from { opacity:0; transform:translateY(-100%); } to { opacity:1; transform:translateY(0); } }
    .nav-bar { animation: navSlideDown 0.3s cubic-bezier(0.22,1,0.36,1) both; }
    .nav-link {
      background: none; border: none; cursor: pointer;
      font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase;
      padding: 4px 8px; border-radius: 4px;
      transition: color 0.2s, background 0.2s;
      white-space: nowrap; flex-shrink: 0;
      color: var(--c-text-muted);
      font-family: var(--font-body);
      line-height: 1;
    }
    .nav-link:hover { color: var(--c-text); background: rgba(108,118,240,0.1); }
    .nav-link.nav-active { color: #6C76F0; font-weight: 600; }
    .nav-links-wrap {
      display: flex; align-items: center; gap: 2px;
      flex: 1; min-width: 0;
      overflow-x: auto; overflow-y: hidden;
      -webkit-overflow-scrolling: touch;
      overscroll-behavior-x: contain;
      scrollbar-width: none;
      justify-content: flex-start;
      scroll-padding: 0 16px;
    }
    .nav-links-wrap::-webkit-scrollbar { display: none; height: 0; }
    @media (min-width: 1024px) { .nav-links-wrap { justify-content: center; } }
    .theme-icon-btn { background:none; border:none; cursor:pointer; font-size:16px; line-height:1; padding:4px; opacity:0.8; transition:opacity 0.2s, transform 0.2s; display:flex; align-items:center; border-radius:4px; flex-shrink:0; }
    .theme-icon-btn:hover { opacity:1; transform:scale(1.2); }
    .lang-toggle-btn {
      background: none; border: 1px solid var(--c-border); cursor: pointer;
      font-size: 10px; font-weight: 700; letter-spacing: 0.1em;
      padding: 3px 7px; border-radius: 4px;
      transition: all 0.2s; flex-shrink: 0;
      color: var(--c-text-muted);
      font-family: var(--font-body);
      line-height: 1.4;
    }
    .lang-toggle-btn.lang-active { background: #6C76F0; color: #fff; border-color: #6C76F0; }
    .lang-toggle-btn:not(.lang-active):hover { border-color: #6C76F0; color: #6C76F0; }
  `;

  return (
    <>
      <style>{css}</style>

      <nav
        className="nav-bar fixed top-0 left-0 right-0 z-50 flex items-center px-3 h-11"
        style={{
          backgroundColor: 'var(--c-nav-bg)',
          backdropFilter: 'blur(14px)',
          borderBottom: '1px solid var(--c-border)',
          gap: '6px',
        }}
      >
        <div className="nav-links-wrap">
          {sectionKeys.map(s => (
            <button
              key={s.id}
              id={'nav-' + s.id}
              onClick={() => scrollTo(s.id)}
              className={`nav-link${active === s.id ? ' nav-active' : ''}`}
            >
              {t(s.key)}
            </button>
          ))}
        </div>

        <div className="flex items-center" style={{ flexShrink: 0, gap: '4px' }}>
          <button
            className={`lang-toggle-btn${lang === 'ru' ? ' lang-active' : ''}`}
            onClick={() => setLang('ru')}
          >
            RU
          </button>
          <button
            className={`lang-toggle-btn${lang === 'en' ? ' lang-active' : ''}`}
            onClick={() => setLang('en')}
          >
            EN
          </button>
          <button className="theme-icon-btn" onClick={toggleTheme} title={isDark ? t('theme.light') : t('theme.dark')}>
            {isDark ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>

      <button
        onClick={scrollTop}
        className="fixed bottom-6 right-6 z-50 w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
        style={{
          backgroundColor: '#6C76F0',
          color: '#EEF0FF',
          border: 'none',
          cursor: 'pointer',
          fontSize: '15px',
          boxShadow: '0 4px 14px #6C76F050',
        }}
        title="Наверх"
      >
        ↑
      </button>
    </>
  );
}
