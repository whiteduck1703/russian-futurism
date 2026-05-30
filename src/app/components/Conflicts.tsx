import { useState, useEffect } from 'react';

export function Conflicts() {
  const [votes, setVotes] = useState<Record<string, 'left' | 'right' | null>>({});
  const [voteCounts, setVoteCounts] = useState<Record<string, { left: number; right: number }>>({});
  const [flash, setFlash] = useState<Record<string, 'left' | 'right' | null>>({});

  const handleVote = (conflictIndex: number, side: 'left' | 'right') => {
    const key = String(conflictIndex);
    const prev = votes[key];
    if (prev === side) {
      setVotes(v => ({ ...v, [key]: null }));
      setVoteCounts(c => {
        const cur = c[key] || { left: 0, right: 0 };
        return { ...c, [key]: { ...cur, [side]: Math.max(0, cur[side] - 1) } };
      });
    } else {
      setVotes(v => ({ ...v, [key]: side }));
      setVoteCounts(c => {
        const cur = c[key] || { left: 0, right: 0 };
        const next = { ...cur, [side]: cur[side] + 1 };
        if (prev) next[prev] = Math.max(0, next[prev] - 1);
        return { ...c, [key]: next };
      });
      setFlash(f => ({ ...f, [key]: side }));
      setTimeout(() => setFlash(f => ({ ...f, [key]: null })), 600);
    }
  };

  const conflicts = [
    {
      title: '1914: Псевдофутуристы',
      context: 'Визит Ф. Маринетти в Петербург, январь 1914',
      quoteLeft: 'Русские &#x2013; псевдофутуристы. Их заумь &#x2013; это локальная версия моего слова на свободе, не более.',
      authorLeft: 'Ф. Маринетти',
      quoteRight: 'Заумь &#x2013; принципиально новое явление, не производное от итальянского образца. Русский футуризм обращён к мифу и архаике &#x2013; того, чего у Ф. Маринетти нет и быть не может.',
      authorRight: 'Б. Лившиц',
      outcome: 'Итог: гилейцы с особой настойчивостью начали настаивать на самостоятельности своего пути',
      voteLabel: 'Кто прав?',
      colorLeft: 'var(--c-text-muted)',
      colorRight: '#E05555'
    },
    {
      title: '1913&#x2013;1914: Слово как материал или украшение?',
      context: 'Олимпиада футуризма &#x2013; совместные гастроли конкурентов',
      quoteLeft: 'И. Северянин превращает слово в драгоценность &#x2013; для нас это буржуазный эстетизм. Слово &#x2013; это не украшение, это взрывчатка.',
      authorLeft: 'В. Маяковский',
      quoteRight: 'Гилейцы &#x2013; варвары без образования. Я знаю традицию лучше вас и именно поэтому имею право с ней играть.',
      authorRight: 'И. Северянин',
      outcome: 'Итог: публика 1918 года на поэзоконцерте в Политехническом избрала королём поэтов Северянина, обойдя Маяковского',
      voteLabel: 'Чья позиция убедительнее?',
      colorLeft: '#E05555',
      colorRight: '#E8C84A'
    },
    {
      title: 'Слишком груба против слишком осторожна',
      context: 'Взаимная полемика 1913&#x2013;1916',
      quoteLeft: '«Центрифуга» &#x2013; академизм под маской авангарда. Они говорят об исследовании, когда нужен взрыв.',
      authorLeft: '«Гилея»',
      quoteRight: '«Гилея» разрушила &#x2013; хорошо. Но разрушение не может быть вечной программой. Теперь задача &#x2013; строить.',
      authorRight: 'С. Бобров',
      outcome: 'Итог: Б. Пастернак и В. Маяковский сохранили личную дружбу &#x2013; взаимное притяжение двух принципиально разных художников',
      voteLabel: 'Какой путь правильнее?',
      colorLeft: '#E05555',
      colorRight: '#50B87A'
    }
  ];

  return (
    <section id="conflicts" className="py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Тёмная тема */}
      <img src="/images/bg/bg-conflicts-dark.png" alt="" aria-hidden="true" className="conflicts-bg-for-dark" />
      {/* Светлая тема */}
      <img src="/images/bg/bg-conflicts-light.png" alt="" aria-hidden="true" className="conflicts-bg-for-light" />

      <style>{`@keyframes flashFade { from { opacity: 0.18; } to { opacity: 0; } }`}</style>
      {/* Lubok ornament pattern */}
      <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.045 }}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="lubok" x="0" y="0" width="64" height="64" patternUnits="userSpaceOnUse">
              <rect x="2" y="2" width="60" height="60" fill="none" stroke="#E05555" strokeWidth="0.5"/>
              <polygon points="32,4 60,32 32,60 4,32" fill="none" stroke="#E05555" strokeWidth="0.5"/>
              <circle cx="32" cy="32" r="6" fill="none" stroke="#E05555" strokeWidth="0.5"/>
              <line x1="32" y1="4" x2="32" y2="26" stroke="#E05555" strokeWidth="0.5"/>
              <line x1="32" y1="38" x2="32" y2="60" stroke="#E05555" strokeWidth="0.5"/>
              <line x1="4" y1="32" x2="26" y2="32" stroke="#E05555" strokeWidth="0.5"/>
              <line x1="38" y1="32" x2="60" y2="32" stroke="#E05555" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#lubok)"/>
        </svg>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20 text-center">
          <div className="text-[11px] tracking-[0.2em] uppercase mb-4" style={{ fontFamily: 'var(--font-body)', color: '#6C76F0' }}>
            ВНУТРЕННИЕ КОНФЛИКТЫ
          </div>
          <h2 className="text-[52px] mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>
            Поле битвы
          </h2>
          <p className="text-[18px]" style={{ fontFamily: 'var(--font-body)', color: 'var(--c-text-muted)' }}>
            Как группы боролись за право называться подлинным искусством
          </p>
        </div>

        <div className="space-y-12">
          {conflicts.map((conflict, index) => {
            const vote = votes[String(index)];
            return (
              <div key={index} className="p-8 rounded-lg" style={{ backgroundColor: 'var(--c-surface-alt)', border: '2px solid #1E1E52' }}>
                <h3 className="text-[28px] mb-2" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#6C76F0' }}
                  dangerouslySetInnerHTML={{ __html: conflict.title }}
                />
                <p className="text-[14px] mb-8" style={{ fontFamily: 'var(--font-body)', color: 'var(--c-text-muted)' }}
                  dangerouslySetInnerHTML={{ __html: conflict.context }}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                  <div
                    className="p-6 rounded-lg border-l-4 transition-all duration-300 relative overflow-hidden"
                    style={{
                      backgroundColor: 'var(--c-bg)',
                      borderColor: conflict.colorLeft,
                      opacity: vote === 'right' ? 0.55 : 1,
                      transform: vote === 'left' ? 'scale(1.01)' : 'scale(1)'
                    }}
                  >
                    {flash[String(index)] === 'left' && (
                      <div style={{ position: 'absolute', inset: 0, backgroundColor: conflict.colorLeft, opacity: 0.18, pointerEvents: 'none', animation: 'flashFade 0.6s ease-out both' }} />
                    )}
                    <p className="text-[16px] leading-[1.7] mb-3" style={{ fontFamily: 'var(--font-quote)', fontStyle: 'italic', color: 'var(--c-text)' }}
                      dangerouslySetInnerHTML={{ __html: conflict.quoteLeft }}
                    />
                    <div className="text-[14px]" style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: conflict.colorLeft }}>
                      &#x2013; {conflict.authorLeft}
                    </div>
                  </div>

                  <div
                    className="p-6 rounded-lg border-l-4 transition-all duration-300 relative overflow-hidden"
                    style={{
                      backgroundColor: 'var(--c-bg)',
                      borderColor: conflict.colorRight,
                      opacity: vote === 'left' ? 0.55 : 1,
                      transform: vote === 'right' ? 'scale(1.01)' : 'scale(1)'
                    }}
                  >
                    {flash[String(index)] === 'right' && (
                      <div style={{ position: 'absolute', inset: 0, backgroundColor: conflict.colorRight, opacity: 0.18, pointerEvents: 'none', animation: 'flashFade 0.6s ease-out both' }} />
                    )}
                    <p className="text-[16px] leading-[1.7] mb-3" style={{ fontFamily: 'var(--font-quote)', fontStyle: 'italic', color: 'var(--c-text)' }}
                      dangerouslySetInnerHTML={{ __html: conflict.quoteRight }}
                    />
                    <div className="text-[14px]" style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: conflict.colorRight }}>
                      &#x2013; {conflict.authorRight}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
                  <button
                    onClick={() => handleVote(index, 'left')}
                    className="px-4 py-2 rounded border transition-all duration-200 text-[13px]"
                    style={{
                      fontFamily: 'var(--font-body)', fontWeight: 600,
                      borderColor: vote === 'left' ? conflict.colorLeft : 'var(--c-border)',
                      color: vote === 'left' ? conflict.colorLeft : 'var(--c-text-muted)',
                      backgroundColor: vote === 'left' ? conflict.colorLeft + '18' : 'transparent'
                    }}
                  >
                    {conflict.authorLeft}
                  </button>
                  <button
                    onClick={() => handleVote(index, 'right')}
                    className="px-4 py-2 rounded border transition-all duration-200 text-[13px]"
                    style={{
                      fontFamily: 'var(--font-body)', fontWeight: 600,
                      borderColor: vote === 'right' ? conflict.colorRight : 'var(--c-border)',
                      color: vote === 'right' ? conflict.colorRight : 'var(--c-text-muted)',
                      backgroundColor: vote === 'right' ? conflict.colorRight + '18' : 'transparent'
                    }}
                  >
                    {conflict.authorRight}
                  </button>
                </div>

                {vote && (
                  <p className="text-[14px] text-center" style={{ fontFamily: 'var(--font-body)', color: 'var(--c-text-muted)', fontStyle: 'italic' }}
                    dangerouslySetInnerHTML={{ __html: conflict.outcome }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
