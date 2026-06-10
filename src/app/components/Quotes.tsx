import { useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';

const quotes = [
  {
    text: 'Бросить Пушкина, Достоевского, Толстого и проч. с Парохода Современности.',
    author: 'Д. Бурлюк, А. Крученых, В. Маяковский, В. Хлебников',
    source: '«Пощёчина общественному вкусу», 1912',
    color: '#E05555'
  },
  {
    text: 'Мы, исповедуя Эгоизм, непреложной истиной считаем &#x2013; интуицию и эгоизм.',
    author: 'И. Игнатьев',
    source: '«Скрижали Эго-Футуризма», 1912',
    color: '#E8C84A'
  },
  {
    text: 'Слово &#x2013; живой организм, раскрывающийся по скрытым законам смыслорождения.',
    author: 'Божидар (Б. П. Гордеев)',
    source: '«Грамота о слове как таковом», 1914',
    color: '#50B87A'
  },
  {
    text: 'Ф. Маринетти назвал нас псевдофутуристами. Это оскорбление обернулось точным диагнозом &#x2013; русский футуризм действительно был обращён к мифу и архаике.',
    author: 'Бенедикт Б. Лившиц',
    source: '«Полутораглазый стрелец»',
    color: 'var(--c-text-muted)'
  },
  {
    text: '«Поэма конца» &#x2013; чистый жест без слов. В. Гнедов выходил на сцену, делал жест рукой &#x2013; и уходил. Тишина и жест были текстом.',
    author: 'о Василиске Гнедове, 1913',
    source: '',
    color: '#E8C84A'
  },
  {
    text: 'Только мы &#x2013; лицо нашего Времени. Рог времени трубит нами в словесном искусстве.',
    author: 'Коллективный манифест',
    source: '«Пощёчина общественному вкусу», 1912',
    color: '#E05555'
  },
  {
    text: 'Нам стоять на глыбе слова «мы» среди моря свиста и негодования.',
    author: 'Гилея',
    source: '1912',
    color: '#E05555'
  }
];

function QuoteCard({ quote, index }: { quote: typeof quotes[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(28px)';
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const delay = (index % 2) * 120;
            setTimeout(() => {
              el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
              el.style.opacity = '1';
              el.style.transform = 'translateY(0)';
            }, delay);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className="p-8 rounded-lg border-l-4"
      style={{ backgroundColor: 'var(--c-surface)', borderColor: quote.color }}
    >
      <Quote size={32} style={{ color: quote.color, opacity: 0.3, marginBottom: '16px' }} />
      <p
        className="text-[20px] leading-[1.7] mb-6"
        style={{ fontFamily: 'var(--font-quote)', fontStyle: 'italic', color: 'var(--c-text)' }}
        dangerouslySetInnerHTML={{ __html: quote.text }}
      />
      <div
        className="text-[14px] mb-1"
        style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: quote.color }}
      >
        &#x2013; {quote.author}
      </div>
      {quote.source && (
        <div
          className="text-[13px]"
          style={{ fontFamily: 'var(--font-body)', color: 'var(--c-text-muted)' }}
          dangerouslySetInnerHTML={{ __html: quote.source }}
        />
      )}
    </div>
  );
}

export function Quotes() {
  return (
    <section id="quotes" className="py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Mesh gradient background – тёмная тема */}
      <div className="absolute inset-0 pointer-events-none quotes-mesh-dark" style={{ zIndex: 0 }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 60% 50% at 20% 30%, #16164A 0%, transparent 70%), radial-gradient(ellipse 50% 60% at 80% 70%, #1A1A40 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 55% 10%, #10103A 0%, transparent 65%)',
          animation: 'meshShift 18s ease-in-out infinite alternate'
        }}/>
      </div>
      {/* Mesh gradient background – светлая тема */}
      <div className="absolute inset-0 pointer-events-none quotes-mesh-light" style={{ zIndex: 0 }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 55% 45% at 18% 28%, #E0555544 0%, transparent 70%), radial-gradient(ellipse 45% 55% at 82% 72%, #E8C84A35 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 58% 8%, #50B87A35 0%, transparent 65%)'
        }}/>
      </div>
      <style>{`
        @keyframes meshShift {
          from { opacity: 0.85; transform: scale(1); }
          to   { opacity: 1;    transform: scale(1.04); }
        }
        .quotes-mesh-dark  { display: block; }
        .quotes-mesh-light { display: none;  }
        html.light-theme .quotes-mesh-dark  { display: none;  }
        html.light-theme .quotes-mesh-light { display: block; }
      `}</style>
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="mb-20 text-center">
          <div
            className="text-[11px] tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: 'var(--font-body)', color: '#6C76F0' }}
          >
            СЛОВО
          </div>
          <h2
            className="text-[52px] mb-4"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}
          >
            Лента цитат
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {quotes.map((quote, index) => (
            <QuoteCard key={index} quote={quote} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
