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

  // Restore saved theme on mount
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
      const scrollY = window.scrollY;
      setVisible(scrollY > 80);

      // Find active section
      let found: string | null = null;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= 120) found = s.id;
        }
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
        .theme-toggle { position:relative; width:36px; height:20px; border-radius:10px; border:none; cursor:pointer; transition:background 0.3s; flex-shrink:0; }
        .theme-toggle-knob { position:absolute; top:3px; width:14px; height:14px; border-radius:50%; background:#fff; transition:transform 0.3s, background 0.3s; }
      `}</style>

      {/* Main bar */}
      <nav
        className="nav-bar fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 h-12"
        style={{
          backgroundColor: 'var(--c-nav-bg)',
          backdropFilter: 'blur(12px)',
          borderBottom: '2px solid var(--c-border)',
        }}
      >
        {/* Logo dot -- back to top */}
        <button
          onClick={scrollTop}
          className="flex items-center gap-2 transition-opacity hover:opacity-70"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '13px', color: '#6C76F0', background: 'none', border: 'none', cursor: 'pointer' }}
        >
          <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#6C76F0', display: 'inline-block' }} />
          ФУТУРИЗМ
        </button>

        {/* Desktop nav dots */}
        <div className="hidden md:flex items-center gap-1">
          {sections.map(s => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              title={s.label}
              style={{
                width: active === s.id ? 20 : 6,
                height: 6,
                borderRadius: 3,
                backgroundColor: active === s.id ? '#6C76F0' : 'var(--c-border)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                padding: 0,
              }}
            />
          ))}
        </div>

        {/* Right side: section label + theme toggle */}
        <div className="hidden md:flex items-center gap-3">
          <div
            className="text-[11px] tracking-[0.15em] uppercase"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--c-text-muted)', minWidth: '80px', textAlign: 'right' }}
          >
            {active ? sections.find(s => s.id === active)?.label : ''}
          </div>

          {/* Theme toggle: sun [knob] moon */}
          <span style={{ fontSize: '12px', userSelect: 'none', opacity: isDark ? 0.4 : 1, transition: 'opacity 0.3s' }}>&#9728;&#65039;</span>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            title={isDark ? 'Светлая тема' : 'Тёмная тема'}
            style={{ backgroundColor: isDark ? '#6C76F0' : '#B8BCE8' }}
          >
            <span
              className="theme-toggle-knob"
              style={{
                transform: isDark ? 'translateX(19px)' : 'translateX(3px)',
                background: isDark ? '#EEF0FF' : '#4A56D0',
              }}
            />
          </button>
          <span style={{ fontSize: '12px', userSelect: 'none', opacity: isDark ? 1 : 0.4, transition: 'opacity 0.3s' }}>&#127769;</span>
        </div>

        {/* Mobile: theme toggle + menu button */}
        <div className="md:hidden flex items-center gap-3">
          <span style={{ fontSize: '12px', userSelect: 'none', opacity: isDark ? 0.4 : 1, transition: 'opacity 0.3s' }}>&#9728;&#65039;</span>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            title={isDark ? 'Светлая тема' : 'Тёмная тема'}
            style={{ backgroundColor: isDark ? '#6C76F0' : '#B8BCE8' }}
          >
            <span
              className="theme-toggle-knob"
              style={{
                transform: isDark ? 'translateX(19px)' : 'translateX(3px)',
                background: isDark ? '#EEF0FF' : '#4A56D0',
              }}
            />
          </button>
          <span style={{ fontSize: '12px', userSelect: 'none', opacity: isDark ? 1 : 0.4, transition: 'opacity 0.3s' }}>&#127769;</span>
          <button
            onClick={() => setExpanded(e => !e)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#6C76F0', fontSize: '18px' }}
          >
            {expanded ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {expanded && (
        <div
          className="fixed top-12 left-0 right-0 z-40 md:hidden"
          style={{ backgroundColor: 'var(--c-nav-dropdown)', borderBottom: '2px solid var(--c-border)' }}
        >
          {sections.map(s => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className="w-full text-left px-6 py-3 text-[14px] transition-colors"
              style={{
                fontFamily: 'var(--font-body)',
                color: active === s.id ? '#6C76F0' : 'var(--c-text-muted)',
                backgroundColor: 'transparent',
                border: 'none',
                borderBottom: '2px solid var(--c-border)',
                cursor: 'pointer',
              }}
            >
              {s.label}
            </button>
          ))}
        </div>
      )}

      {/* Back to top button */}
      <button
        onClick={scrollTop}
        className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
        style={{
          backgroundColor: '#6C76F0',
          color: '#EEF0FF',
          border: 'none',
          cursor: 'pointer',
          fontSize: '16px',
          boxShadow: '0 4px 16px #6C76F040',
        }}
        title="Наверх"
      >
        ↑
      </button>
    </>
  );
}
