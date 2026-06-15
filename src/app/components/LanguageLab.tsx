import { useState, useEffect, useRef } from 'react';

function KruchenyhPoem({ animKey }: { animKey: number }) {
  const [localVisible, setLocalVisible] = useState(false);
  const text = `Дыр бул щыл\nубешщур\nскум\nвы со бу\nр л эз`;
  const chars = text.split('');

  useEffect(() => {
    setLocalVisible(false);
    const t = setTimeout(() => setLocalVisible(true), 60);
    return () => clearTimeout(t);
  }, [animKey]);

  return (
    <pre
      className="mb-6 whitespace-pre-wrap text-center"
      style={{
        fontFamily: 'var(--font-display)',
        fontSize: '36px',
        fontWeight: 400,
        lineHeight: 1.6,
        color: 'var(--c-text)'
      }}
      aria-label={text}
    >
      {chars.map((ch, i) => (
        <span
          key={i}
          style={{
            display: 'inline-block',
            opacity: localVisible ? 1 : 0,
            transform: localVisible ? 'translateY(0)' : 'translateY(-28px)',
            transition: `opacity 0.35s ease ${i * 0.025}s, transform 0.35s ease ${i * 0.025}s`
          }}
        >
          {ch === '\n' ? <br /> : ch}
        </span>
      ))}
    </pre>
  );
}

function KhlebnikovPoem({ animKey }: { animKey: number }) {
  const [visible, setVisible] = useState(false);
  const lines = [
    'О, рассмейтесь, смехачи!',
    'О, засмейтесь, смехачи!',
    'Что смеются смехами, что смеянствуют смеяльно,',
    'О, засмейтесь усмеяльно!',
  ];

  useEffect(() => {
    setVisible(false);
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, [animKey]);

  const rootColor = '#50B87A';

  const renderLine = (line: string) => {
    const rootPattern = /смех|смей|смеян|смеяльн|усмеяльн|смеянств|смеятьс|смеялс|смеял|смеяльно|смеются|смехами/gi;
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = rootPattern.exec(line)) !== null) {
      if (match.index > lastIndex) {
        parts.push(line.slice(lastIndex, match.index));
      }
      parts.push(
        <span
          key={match.index}
          style={{
            color: rootColor,
            fontWeight: 700,
            textDecoration: 'underline',
            textDecorationColor: `${rootColor}60`,
            textUnderlineOffset: '4px'
          }}
        >
          {match[0]}
        </span>
      );
      lastIndex = match.index + match[0].length;
    }
    if (lastIndex < line.length) {
      parts.push(line.slice(lastIndex));
    }
    return parts;
  };

  return (
    <>
      <pre
        className="mb-4 whitespace-pre-wrap text-center"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '22px',
          fontWeight: 400,
          lineHeight: 1.8,
          color: 'var(--c-text)'
        }}
      >
        {lines.map((l, i) => (
          <span key={i} style={{ display: 'block', opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(16px)', transition: `opacity 0.4s ease ${i * 0.12}s, transform 0.4s ease ${i * 0.12}s` }}>{renderLine(l)}</span>
        ))}
      </pre>
      <div
        className="text-[12px] text-center mb-2"
        style={{ fontFamily: 'var(--font-body)', color: 'var(--c-text-muted)' }}
      >
        <span style={{ color: rootColor }}>█</span> &#x2013; корень «смех-» в 11 формах
      </div>
    </>
  );
}

function MayakovskyPoem() {
  const lines = [
    'Вы смотрите на звёзды?',
    'Да?',
    'Я вам скажу &#x2013;',
    'звёзды дрянь!'
  ];

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="text-center mb-6">
      {lines.map((line, li) => (
        <div
          key={li}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: li === lines.length - 1 ? '42px' : '28px',
            fontWeight: li === lines.length - 1 ? 900 : 400,
            lineHeight: 1.6,
            color: li === lines.length - 1 ? '#E05555' : 'var(--c-text)',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : li % 2 === 0 ? 'translateX(-30px)' : 'translateX(30px)',
            transition: `opacity 0.4s ease ${li * 0.18}s, transform 0.4s ease ${li * 0.18}s`
          }}
          dangerouslySetInnerHTML={{ __html: line }}
        />
      ))}
    </div>
  );
}

export function LanguageLab() {
  const [activeTab, setActiveTab] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const hasTriggeredRef = useRef(false);

  // Trigger animation when section enters viewport
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !hasTriggeredRef.current) {
            hasTriggeredRef.current = true;
            setAnimKey(k => k + 1);
          } else if (!entry.isIntersecting) {
            hasTriggeredRef.current = false;
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const tabs = [
    {
      title: 'А. КРУЧЁНЫХ &#x2013; ЗАУМЬ',
      author: 'Алексей Кручёных, 1913',
      annotationTitle: 'Заумь: материал, а не язык',
      annotationText: 'Слово, освобождённое от смысла. Кручёных утверждал, что в этом тексте «больше русского национального, чем во всей поэзии Пушкина» &#x2013; он апеллирует к дорефлексивным, звуковым пластам сознания. Для Кручёных слово &#x2013; материал, который можно расплавить. Вопрос о том, является ли заумь разрушением языка или его первооснованием, остаётся открытым.'
    },
    {
      title: 'В. ХЛЕБНИКОВ &#x2013; КОРНЕСЛОВИЕ',
      author: 'Велимир Хлебников, «Заклятие смехом», 1908',
      annotationTitle: 'Корнесловие: тайна, а не разрушение',
      annotationText: 'Хлебников создаёт неологизмы из корня «смех-», раскрывая то, что уже было заложено в языке. Слова морфологически правильны, но их концентрация такова, что семантика трансформируется &#x2013; смысл не уничтожен, а углублён. Для Хлебникова слово &#x2013; тайна, которую нужно раскрыть. Он создавал неологизмы как «корнесловие» &#x2013; развитие языковой возможности, а не произвол.'
    },
    {
      title: 'В. МАЯКОВСКИЙ &#x2013; ВЗРЫВ СЛОВА',
      author: 'Владимир Маяковский, из ранней лирики',
      annotationTitle: 'Слово как взрывчатое вещество',
      annotationText: 'Маяковский практически никогда не обращался к зауми. Его языковая деформация &#x2013; это всегда деформация узнаваемого слова, помещённого в такой контекст, что привычное значение взрывается. Слово сохраняет форму, чтобы взрыв был сильнее. Маяковский &#x2013; демократ: его поэзия рассчитана на массу, на улицу. Форма &#x2013; трибуна, не лаборатория.'
    }
  ];

  const handleTabChange = (idx: number) => {
    setActiveTab(idx);
    setAnimKey(k => k + 1);
  };

  const tabColors = ['#E05555', '#50B87A', '#E05555'];

  return (
    <section id="language-lab" ref={sectionRef} className="py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Wave oscillogram – sound of zaum */}
      <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.07 }}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <style>{`
              @keyframes wave1 { 0%,100%{d:path("M0,50 C150,20 300,80 450,50 C600,20 750,80 900,50 C1050,20 1200,80 1440,50 L1440,52 C1200,82 1050,22 900,52 C750,82 600,22 450,52 C300,82 150,22 0,52 Z")} 50%{d:path("M0,50 C150,80 300,20 450,50 C600,80 750,20 900,50 C1050,80 1200,20 1440,50 L1440,52 C1200,22 1050,82 900,52 C750,22 600,82 450,52 C300,22 150,82 0,52 Z")} }
              @keyframes wave2 { 0%,100%{d:path("M0,70 C200,40 400,100 600,70 C800,40 1000,100 1200,70 C1300,55 1380,60 1440,70 L1440,72 C1380,62 1300,57 1200,72 C1000,102 800,42 600,72 C400,102 200,42 0,72 Z")} 50%{d:path("M0,70 C200,100 400,40 600,70 C800,100 1000,40 1200,70 C1300,85 1380,80 1440,70 L1440,72 C1380,82 1300,87 1200,72 C1000,42 800,102 600,72 C400,42 200,102 0,72 Z")} }
            `}</style>
          </defs>
          <path fill="#50B87A" style={{ animation: 'wave1 8s ease-in-out infinite' }} d="M0,50 C150,20 300,80 450,50 C600,20 750,80 900,50 C1050,20 1200,80 1440,50 L1440,52 C1200,82 1050,22 900,52 C750,82 600,22 450,52 C300,82 150,22 0,52 Z"/>
          <path fill="#E05555" style={{ animation: 'wave2 12s ease-in-out infinite' }} d="M0,70 C200,40 400,100 600,70 C800,40 1000,100 1200,70 C1300,55 1380,60 1440,70 L1440,72 C1380,62 1300,57 1200,72 C1000,102 800,42 600,72 C400,102 200,42 0,72 Z"/>
        </svg>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <div
            className="text-[11px] tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: 'var(--font-body)', color: '#6C76F0' }}
          >
            РАБОТА СО СЛОВОМ
          </div>
          <h2
            className="text-[52px] mb-4"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}
          >
            Лаборатория языка
          </h2>
          <p
            className="text-[18px]"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--c-text-muted)' }}
          >
            Три стратегии работы с поэтическим словом
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => handleTabChange(index)}
              className="px-6 py-3 rounded-md transition-all"
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '14px',
                backgroundColor: activeTab === index ? tabColors[index] : 'transparent',
                color: activeTab === index ? 'var(--c-bg)' : 'var(--c-text)',
                borderBottom: activeTab === index ? `3px solid ${tabColors[index]}` : '3px solid transparent'
              }}
              dangerouslySetInnerHTML={{ __html: tab.title }}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div
            className="flex flex-col items-center justify-center p-8 rounded-lg"
            style={{ backgroundColor: 'var(--c-surface)' }}
          >
            <div className="w-full" key={animKey}>
              {activeTab === 0 && <KruchenyhPoem animKey={animKey} />}
              {activeTab === 1 && <KhlebnikovPoem animKey={animKey} />}
              {activeTab === 2 && <MayakovskyPoem />}
            </div>
            <div
              className="text-[14px]"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--c-text-muted)', fontStyle: 'italic' }}
            >
              {tabs[activeTab].author}
            </div>
          </div>

          <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--c-surface)' }}>
            <h3
              className="text-[24px] mb-4"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--c-text)' }}
            >
              {tabs[activeTab].annotationTitle}
            </h3>
            <p
              className="text-[16px] leading-[1.7]"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--c-text-muted)' }}
              dangerouslySetInnerHTML={{ __html: tabs[activeTab].annotationText }}
            />
          </div>
        </div>

        <div className="mt-16 p-8 rounded-lg" style={{ backgroundColor: 'var(--c-surface)' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {tabs.map((tab, index) => (
              <div
                key={index}
                className="cursor-pointer transition-all duration-200"
                style={{ opacity: activeTab === index ? 1 : 0.5, transform: activeTab === index ? 'scale(1.03)' : 'scale(1)' }}
                onClick={() => handleTabChange(index)}
              >
                <div className="text-[20px] mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: tabColors[index] }}>
                  {index === 0 ? 'А. КРУЧЁНЫХ' : index === 1 ? 'В. ХЛЕБНИКОВ' : 'В. МАЯКОВСКИЙ'}
                </div>
                <div className="text-[15px] leading-[1.6]" style={{ fontFamily: 'var(--font-body)', color: 'var(--c-text-muted)' }}>
                  {tab.annotationTitle}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
