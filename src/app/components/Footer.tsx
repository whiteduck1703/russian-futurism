import { useEffect, useRef } from 'react';


const navLinkIds: Record<string, string> = {
  'О движении': 'timeline',
  'Три лица авангарда': 'comparison',
  'Поэты': 'poets',
  'Лаборатория слова': 'language-lab',
  'Манифесты': 'manifestos',
  'Полемика': 'conflicts',
  'Граф связей': 'graph',
  'Словарь': 'glossary',
  'Квиз': 'quiz',
  'Читальный зал': 'texts',
};
export function Footer() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) el.style.opacity = '1';
    }, { threshold: 0.1 });
    obs.observe(el);
    el.style.opacity = '0';
    el.style.transition = 'opacity 0.8s ease';
    return () => obs.disconnect();
  }, []);

  const navLinks = [
    'О движении',
    'Три лица авангарда',
    'Поэты',
    'Лаборатория слова',
    'Манифесты',
    'Полемика',
    'Граф связей',
    'Словарь',
    'Квиз',
    'Читальный зал'
  ];

  return (
    <footer ref={ref} className="py-20 px-6" style={{ backgroundColor: 'var(--c-bg)', borderTop: '2px solid #1E1E52' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Column 1: Navigation */}
          <div>
            <h4
              className="text-[16px] mb-4"
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                color: 'var(--c-text)'
              }}
            >
              Навигация
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => {
                      const id = navLinkIds[link];
                      const el = id ? document.getElementById(id) : null;
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                      else window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-[14px] transition-all hover:text-[#6C76F0] text-left"
                    style={{ fontFamily: 'var(--font-body)', color: 'var(--c-text-muted)', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: About */}
          <div>
            <h4
              className="text-[16px] mb-4"
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                color: 'var(--c-text)'
              }}
            >
              О проекте
            </h4>
            <p
              className="text-[14px] leading-[1.7]"
              style={{
                fontFamily: 'var(--font-body)',
                color: 'var(--c-text-muted)'
              }}
            >
              Некоммерческий образовательный ресурс о русском литературном авангарде 1910–1930-х годов. Сравнительный анализ трёх групп: «Гилея», «Эго-футуристы», «Центрифуга» – три разных ответа на один вопрос о судьбе слова.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 text-center text-[13px]"
          style={{
            fontFamily: 'var(--font-body)',
            color: 'var(--c-text-muted)',
            borderTop: '2px solid #1E1E52'
          }}
        >
          © 2026 Все исторические материалы в общественном достоянии.
        </div>
      </div>
    </footer>
  );
}
