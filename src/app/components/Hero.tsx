import { ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      {/* Тёмная тема */}
      <img
        src="/images/bg/bg-hero-dark.png"
        alt=""
        aria-hidden="true"
        className="hero-bg-for-dark"
      />
      {/* Светлая тема */}
      <img
        src="/images/bg/bg-hero-light.png"
        alt=""
        aria-hidden="true"
        className="hero-bg-for-light"
      />

      {/* Спейсер — пропорциональный: контент всегда ниже линии фона */}
      <div style={{ flex: '0 0 44vh' }} />

      <div className="relative z-10 w-full max-w-4xl mx-auto text-center px-6 pb-16">
        {/* Main headline */}
        <h1
          className="mb-4"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 900,
            fontSize: 'clamp(56px, 12vw, 96px)',
            lineHeight: 1.1,
            color: 'var(--c-text)'
          }}
        >
          РУССКИЙ<br />
          ФУТУРИЗМ
        </h1>

        {/* Subheadline */}
        <p
          className="text-[28px] mb-10"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 900, color: 'var(--c-text)' }}
        >
          Три лица авангарда
        </p>

        {/* Body paragraph */}
        <p
          className="max-w-[560px] mx-auto text-[18px] leading-[1.7] mb-12"
          style={{ fontFamily: 'var(--font-body)', color: 'var(--c-text-muted)' }}
        >
          Движение, которое перевернуло русскую поэзию. Не одна группа &#x2013; три.
          &laquo;Гилея&raquo;, &laquo;Эго-футуристы&raquo; и &laquo;Центрифуга&raquo; строили разные миры
          из одного и того же материала &#x2013; русского слова.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-16">
          <button
            onClick={() => scrollTo('timeline')}
            className="px-8 py-4 rounded-md transition-all hover:scale-105"
            style={{ fontFamily: 'var(--font-body)', fontWeight: 600, backgroundColor: '#6C76F0', color: 'var(--c-bg)' }}
          >
            Начать путешествие
          </button>
          <button
            onClick={() => scrollTo('comparison')}
            className="px-8 py-4 rounded-md border-2 transition-all"
            style={{ fontFamily: 'var(--font-body)', fontWeight: 600, borderColor: '#6C76F0', color: '#6C76F0' }}
          >
            К сравнению групп
          </button>
        </div>

        {/* Stats bar */}
        <div
          className="flex flex-wrap gap-6 justify-center items-center text-[13px] tracking-[0.1em]"
          style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}
        >
          <div>3 группы</div>
          <div style={{ color: 'var(--c-text-muted)' }}>&#xB7;</div>
          <div>1910&#x2013;1930 гг.</div>
          <div style={{ color: 'var(--c-text-muted)' }}>&#xB7;</div>
          <div>12 манифестов</div>
          <div style={{ color: 'var(--c-text-muted)' }}>&#xB7;</div>
          <div>15 лет эпохи</div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => scrollTo('timeline')}
      >
        <ChevronDown size={32} style={{ color: '#6C76F0' }} />
      </motion.div>
    </section>
  );
}
