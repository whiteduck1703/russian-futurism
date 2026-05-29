import { useState, useEffect } from 'react';

const sections = [
  { id: 'timeline',     label: 'О движении' },
  { id: 'citymap',      label: 'География' },
  { id: 'comparison',   label: 'Сравнение' },
  { id: 'poets',        label: 'Поэты' },
  { id: 'language-lab', label: 'Лаборатория' },
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
  const [expanded, setExpanded] = useState(false);
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

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setExpanded(false);
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
          font-size: 10.5px; letter-spacing: 0.08em; text-transform: uppercase;
          padding: 3px 6px; border-radius: 3px;
          transition: color 0.2s, background 0.2s;
          white-space: nowrap; flex-shrink: 0;
          color: var(--c-text-muted);
          font-family: var(--font-body);
          line-height: 1;
        }
        .nav-link:hover { color: var(--c-text); background: rgba(108,118,240,0.1); }
        .nav-link.nav-active { color: #6C76F0; font-weight: 600; }
        .nav-links-wrap { display: flex; align-items: center; flex: 1; justify-content: center; overflow: hidden; min-width: 0; }
        .theme-icon-btn { background:none; border:none; cursor:pointer; font-size:16px; line-height:1; padding:4px; opacity:0.8; transition:opacity 0.2s, transform 0.2s; display:flex; align-items:center; border-radius:4px; flex-shrink:0; }
        .theme-icon-btn:hover { opacity:1; transform:scale(1.2); }
        .mobile-menu-btn { background:none; border:none; cursor:pointer; color:#6C76F0; font-size:18px; padding:4px; }
        .mobile-dropdown button:hover { background: rgba(108,118,240,0.08) !important; }
      `}</style>

      <nav
        className="nav-bar fixed top-0 left-0 right-0 z-50 flex items-center px-4 h-11"
        style={{
          backgroundColor: 'var(--c-nav-bg)',
          backdropFilter: 'blur(14px)',
          borderBottom: '1px solid var(--c-border)',
          gap: '8px',
        }}
      >
        {/* Logo dot only */}
        <button
          onClick={scrollTop}
          title="Наверх"
          className="hover:opacity-70 transition-opacity"
          style={{ background: 'none', border: 'none', cursor: 'pointer', flexShrink: 0, display: 'flex', alignItems: 'center', padding: '4px' }}
        >
          <span style={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: '#6C76F0', display: 'inline-block' }} />
        </button>

        {/* Desktop nav links — centered, no wrap */}
        <div className="nav-links-wrap hidden md:flex">
          {sections.map(s => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={`nav-link${active === s.id ? ' nav-active' : ''}`}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Theme icon */}
        <div className="hidden md:flex items-center" style={{ flexShrink: 0 }}>
          <button className="theme-icon-btn" onClick={toggleTheme} title={isDark ? 'Светлая тема' : 'Тёмная тема'}>
            {isDark ? '☀️' : '🌙'}
          </button>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-2" style={{ marginLeft: 'auto' }}>
          <button className="theme-icon-btn" onClick={toggleTheme} title={isDark ? 'Светлая тема' : 'Тёмная тема'}>
            {isDark ? '☀️' : '🌙'}
          </button>
          <button className="mobile-menu-btn" onClick={() => setExpanded(e => !e)}>
            {expanded ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {expanded && (
        <div
          className="mobile-dropdown fixed top-11 left-0 right-0 z-40 md:hidden"
          style={{ backgroundColor: 'var(--c-nav-dropdown)', borderBottom: '1px solid var(--c-border)', maxHeight: '70vh', overflowY: 'auto' }}
        >
          {sections.map(s => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className="w-full text-left px-5 py-3"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: active === s.id ? '#6C76F0' : 'var(--c-text-muted)',
                backgroundColor: 'transparent',
                border: 'none',
                borderBottom: '1px solid var(--c-border)',
                cursor: 'pointer',
                display: 'block',
              }}
            >
              {s.label}
            </button>
          ))}
        </div>
      )}

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
