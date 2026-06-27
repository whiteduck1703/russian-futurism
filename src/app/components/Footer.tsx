import { useEffect, useRef } from 'react';
import { useLang } from '../LangContext';

export function Footer() {
  const { lang } = useLang();
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

  const content = {
    ru: {
      heading: 'О проекте',
      body: 'Некоммерческий образовательный ресурс о русском литературном авангарде 1910–1930-х годов. Сравнительный анализ трёх групп: «Гилея», «Эго-футуристы», «Центрифуга» – три разных ответа на один вопрос о судьбе слова.',
      copy: '© 2026 Все исторические материалы в общественном достоянии.',
    },
    en: {
      heading: 'About',
      body: 'A non-commercial educational resource on the Russian literary avant-garde of the 1910s–1930s. A comparative analysis of three groups: "Hylaea", "Ego-Futurists", "Centrifuge" — three different answers to one question about the fate of the word.',
      copy: '© 2026 All historical materials are in the public domain.',
    },
  };

  const c = content[lang];

  return (
    <footer ref={ref} className="py-16 px-6" style={{ backgroundColor: 'var(--c-bg)', borderTop: '2px solid var(--c-border)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 max-w-xl">
          <h4 className="text-[16px] mb-4" style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--c-text)' }}>
            {c.heading}
          </h4>
          <p className="text-[14px] leading-[1.7]" style={{ fontFamily: 'var(--font-body)', color: 'var(--c-text-muted)' }}>
            {c.body}
          </p>
        </div>
        <div className="pt-6 text-center text-[13px]" style={{ fontFamily: 'var(--font-body)', color: 'var(--c-text-muted)', borderTop: '1px solid var(--c-border)' }}>
          {c.copy}
        </div>
      </div>
    </footer>
  );
}
