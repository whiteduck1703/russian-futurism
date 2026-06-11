import { useState, useEffect } from 'react';

const sections = [
  { id: 'timeline',     label: 'О движении' },
  { id: 'citymap',      label: 'География' },
  { id: 'comparison',   label: 'Сравнение' },
  { id: 'poets',        label: 'Поэты' },
  { id: 'language-lab', label: 'Лаборатория' },
  { id: 'poem-analysis', label: 'Слово' },
  { id: 'manifestos',   label: 'Манифесты' },
  { id: 'conflicts',    label: 'Полемика' },
  { id: 'graph',        label: 'Граф' },
  { id: 'glossary',     label: 'Словарь' },
  { id: 'quiz',         label: 'Тест' },
  { id: 'quotes',       label: 'Цитаты' },
  { id: 'gallery',      label: 'Галерея' },
  { id: 'texts',        label: 'Читальный зал' },
];

export function NavBar() {
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
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= 120) found = s.id;
      }
      setActive(found);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Keep the active link visible inside the horizontally scrollable bar
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

  return (
    <>
      <style>{`
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
        /* Horizontally scrollable / swipeable links */
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
        @media (min-width: 1024px) {
          /* On wide screens the links fit, so center them */
          .nav-links-wrap { justify-content: center; }
        }
        .theme-icon-btn { background:none; border:none; cursor:pointer; font-size:16px; line-height:1; padding:4px; opacity:0.8; transition:opacity 0.2s, transform 0.2s; display:flex; align-items:center; border-radius:4px; flex-shrink:0; }
        .theme-icon-btn:hover { opacity:1; transform:scale(1.2); }
      `}</style>

      <nav
        className="nav-bar fixed top-0 left-0 right-0 z-50 flex items-center px-3 h-11"
        style={{
          backgroundColor: 'var(--c-nav-bg)',
          backdropFilter: 'blur(14px)',
          borderBottom: '1px solid var(--c-border)',
          gap: '6px',
        }}
      >
        {/* Scrollable / swipeable links – shown on all screen sizes */}
        <div className="nav-links-wrap">
          {sections.map(s => (
            <button
              key={s.id}
              id={'nav-' + s.id}
              onClick={() => scrollTo(s.id)}
              className={`nav-link${active === s.id ? ' nav-active' : ''}`}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Theme toggle – always visible */}
        <div className="flex items-center" style={{ flexShrink: 0 }}>
          <button className="theme-icon-btn" onClick={toggleTheme} title={isDark ? 'Светлая тема' : 'Тёмная тема'}>
            {isDark ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>

      {/* Back to top */}
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
