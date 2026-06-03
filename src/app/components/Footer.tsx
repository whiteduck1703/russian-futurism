import { useEffect, useRef } from 'react';

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

  return (
    <footer ref={ref} className="py-16 px-6" style={{ backgroundColor: 'var(--c-bg)', borderTop: '2px solid var(--c-border)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 max-w-xl mx-auto text-center">
          <h4
            className="text-[16px] mb-4"
            style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--c-text)' }}
          >
            О проекте
          </h4>
          <p
            className="text-[14px] leading-[1.7]"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--c-text-muted)' }}
          >
            Некоммерческий образовательный ресурс о русском литературном авангарде 1910–1930-х годов. Сравнительный анализ трёх групп: «Гилея», «Эго-футуристы», «Центрифуга» – три разных ответа на один вопрос о судьбе слова.
          </p>
        </div>

        <div
          className="pt-6 text-center text-[13px]"
          style={{ fontFamily: 'var(--font-body)', color: 'var(--c-text-muted)', borderTop: '1px solid var(--c-border)' }}
        >
          © 2026 Все исторические материалы в общественном достоянии.
        </div>
      </div>
    </footer>
  );
}
