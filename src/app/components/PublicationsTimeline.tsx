import { useRef, useState } from 'react';

const publications = [
  { year: 1910, title: '&#x421;&#x430;&#x434;&#x43E;&#x43A; &#x441;&#x443;&#x434;&#x435;&#x439; I', group: '&#x413;&#x438;&#x43B;&#x435;&#x44F;', color: '#E05555', note: '&#x41F;&#x435;&#x440;&#x432;&#x44B;&#x439; &#x430;&#x43B;&#x44C;&#x43C;&#x430;&#x43D;&#x430;&#x445; &#x43D;&#x430; &#x43E;&#x431;&#x43E;&#x440;&#x43E;&#x442;&#x435; &#x43E;&#x431;&#x43E;&#x435;&#x432; &#x2013; &#x43C;&#x430;&#x442;&#x435;&#x440;&#x438;&#x430;&#x43B; &#x43A;&#x430;&#x43A; &#x436;&#x435;&#x441;&#x442;' },
  { year: 1912, title: '&#x41F;&#x43E;&#x449;&#x451;&#x447;&#x438;&#x43D;&#x430; &#x43E;&#x431;&#x449;&#x435;&#x441;&#x442;&#x432;&#x435;&#x43D;&#x43D;&#x43E;&#x43C;&#x443; &#x432;&#x43A;&#x443;&#x441;&#x443;', group: '&#x413;&#x438;&#x43B;&#x435;&#x44F;', color: '#E05555', note: '&#x413;&#x43B;&#x430;&#x432;&#x43D;&#x44B;&#x439; &#x43C;&#x430;&#x43D;&#x438;&#x444;&#x435;&#x441;&#x442; &#x43A;&#x443;&#x431;&#x43E;&#x444;&#x443;&#x442;&#x443;&#x440;&#x438;&#x437;&#x43C;&#x430;. «&#x411;&#x440;&#x43E;&#x441;&#x438;&#x442;&#x44C; &#x41F;&#x443;&#x448;&#x43A;&#x438;&#x43D;&#x430;&#x2026;»' },
  { year: 1912, title: '&#x421;&#x43A;&#x440;&#x438;&#x436;&#x430;&#x43B;&#x438; &#x44D;&#x433;&#x43E;-&#x444;&#x443;&#x442;&#x443;&#x440;&#x438;&#x437;&#x43C;&#x430;', group: '&#x42D;&#x433;&#x43E;-&#x444;&#x443;&#x442;&#x443;&#x440;&#x438;&#x437;&#x43C;', color: '#E8C84A', note: '&#x418;&#x433;&#x43D;&#x430;&#x442;&#x44C;&#x435;&#x432; &#x43E;&#x441;&#x43D;&#x43E;&#x432;&#x44B;&#x432;&#x430;&#x435;&#x442; &#x434;&#x432;&#x438;&#x436;&#x435;&#x43D;&#x438;&#x435;. «&#x418;&#x441;&#x43F;&#x43E;&#x432;&#x435;&#x434;&#x443;&#x44F; &#x44D;&#x433;&#x43E;&#x438;&#x437;&#x43C;&#x2026;»' },
  { year: 1913, title: '&#x421;&#x430;&#x434;&#x43E;&#x43A; &#x441;&#x443;&#x434;&#x435;&#x439; II', group: '&#x413;&#x438;&#x43B;&#x435;&#x44F;', color: '#E05555', note: '&#x422;&#x435;&#x43A;&#x441;&#x442;&#x44B; &#x425;&#x43B;&#x435;&#x431;&#x43D;&#x438;&#x43A;&#x43E;&#x432;&#x430;, &#x41A;&#x440;&#x443;&#x447;&#x435;&#x43D;&#x44B;&#x445;, &#x411;&#x443;&#x440;&#x43B;&#x44E;&#x43A;&#x43E;&#x432; &#x2013; &#x43A;&#x440;&#x435;&#x449;&#x435;&#x43D;&#x438;&#x435; &#x437;&#x430;&#x443;&#x43C;&#x438;' },
  { year: 1913, title: '&#x412;&#x437;&#x43E;&#x440;&#x432;&#x430;&#x43B;&#x44C;', group: '&#x413;&#x438;&#x43B;&#x435;&#x44F;', color: '#E05555', note: '&#x41A;&#x440;&#x443;&#x447;&#x435;&#x43D;&#x44B;&#x445; &#x438; &#x41C;&#x430;&#x442;&#x44E;&#x448;&#x438;&#x43D;. &#x43B;&#x438;&#x441;&#x442;&#x44B; &#x440;&#x430;&#x437;&#x43D;&#x44B;&#x445; &#x444;&#x43E;&#x440;&#x43C;&#x430;&#x442;&#x43E;&#x432; &#x2013; &#x43A;&#x43D;&#x438;&#x433;&#x430; &#x43A;&#x430;&#x43A; &#x43E;&#x431;&#x44A;&#x435;&#x43A;&#x442' },
  { year: 1913, title: '&#x413;&#x440;&#x43E;&#x43C;&#x43E;&#x43A;&#x438;&#x43F;&#x44F;&#x449;&#x438;&#x439; &#x43A;&#x443;&#x431;&#x43E;&#x43A;', group: '&#x42D;&#x433;&#x43E;-&#x444;&#x443;&#x442;&#x443;&#x440;&#x438;&#x437;&#x43C;', color: '#E8C84A', note: '&#x421;&#x435;&#x432;&#x435;&#x440;&#x44F;&#x43D;&#x438;&#x43D;. 10 &#x438;&#x437;&#x434;&#x430;&#x43D;&#x438;&#x439; &#x43F;&#x440;&#x438; &#x436;&#x438;&#x437;&#x43D;&#x438; &#x430;&#x432;&#x442;&#x43E;&#x440;&#x430;. «&#x42F;, &#x433;&#x435;&#x43D;&#x438;&#x439; &#x418;&#x433;&#x43E;&#x440;&#x44C; &#x421;&#x435;&#x432;&#x435;&#x440;&#x44F;&#x43D;&#x438;&#x43D;&#x2026;»' },
  { year: 1914, title: '&#x422;&#x430;&#x43D;&#x433;&#x43E; &#x441; &#x43A;&#x43E;&#x440;&#x43E;&#x432;&#x430;&#x43C;&#x438;', group: '&#x413;&#x438;&#x43B;&#x435;&#x44F;', color: '#E05555', note: '&#x41A;&#x430;&#x43C;&#x435;&#x43D;&#x441;&#x43A;&#x438;&#x439;. &#x416;&#x435;&#x43B;&#x435;&#x437;&#x43E;&#x431;&#x435;&#x442;&#x43E;&#x43D;&#x43D;&#x44B;&#x435; &#x43F;&#x43E;&#x44D;&#x43C;&#x44B; &#x2013; &#x43F;&#x440;&#x43E;&#x43E;&#x431;&#x440;&#x430;&#x437; &#x43A;&#x43E;&#x43D;&#x43A;&#x440;&#x435;&#x442;&#x43D;&#x43E;&#x439; &#x43F;&#x43E;&#x44D;&#x437;&#x438;&#x438;' },
  { year: 1914, title: '&#x410;&#x43D;&#x430;&#x43D;&#x430;&#x441;&#x44B; &#x432; &#x448;&#x430;&#x43C;&#x43F;&#x430;&#x43D;&#x441;&#x43A;&#x43E;&#x43C;', group: '&#x42D;&#x433;&#x43E;-&#x444;&#x443;&#x442;&#x443;&#x440;&#x438;&#x437;&#x43C;', color: '#E8C84A', note: '&#x421;&#x435;&#x432;&#x435;&#x440;&#x44F;&#x43D;&#x438;&#x43D;. &#x41D;&#x435;&#x43E;&#x43B;&#x43E;&#x433;&#x438;&#x437;&#x43C;&#x44B; &#x43D;&#x430; &#x432;&#x435;&#x440;&#x448;&#x438;&#x43D;&#x435;: «&#x433;&#x440;&#x435;&#x437;&#x44D;&#x440;&#x43A;&#x430;», «&#x44D;&#x43A;&#x441;&#x442;&#x430;&#x437;&#x43D;&#x430;&#x44F;»' },
  { year: 1914, title: '&#x41B;&#x438;&#x440;&#x438;&#x43A;&#x430; &#x426;&#x435;&#x43D;&#x442;&#x440;&#x438;&#x444;&#x443;&#x433;&#x438;', group: '&#x426;&#x435;&#x43D;&#x442;&#x440;&#x438;&#x444;&#x443;&#x433;&#x430;', color: '#50B87A', note: '&#x41F;&#x430;&#x441;&#x442;&#x435;&#x440;&#x43D;&#x430;&#x43A;, &#x411;&#x43E;&#x431;&#x440;&#x43E;&#x432;, &#x410;&#x441;&#x435;&#x435;&#x432; &#x2013; &#x432;&#x43D;&#x443;&#x442;&#x440;&#x435;&#x43D;&#x43D;&#x435;&#x435; &#x441;&#x43A;&#x43B;&#x43E;&#x43D;&#x435;&#x43D;&#x438;&#x435; &#x441;&#x43B;&#x43E;&#x432;&#x430;' },
  { year: 1916, title: '&#x41E;&#x431;&#x43B;&#x430;&#x43A;&#x43E; &#x432; &#x448;&#x442;&#x430;&#x43D;&#x430;&#x445;', group: '&#x413;&#x438;&#x43B;&#x435;&#x44F;', color: '#E05555', note: '&#x41C;&#x430;&#x44F;&#x43A;&#x43E;&#x432;&#x441;&#x43A;&#x438;&#x439;. «&#x42F; &#x434;&#x443;&#x43C;&#x430;&#x43B;, &#x442;&#x44B; &#x431;&#x43E;&#x433;&#x2026;» 700+ &#x441;&#x442;&#x440;&#x43E;&#x43A; &#x430;&#x433;&#x43E;&#x43D;&#x438;&#x438; &#x438; &#x43B;&#x438;&#x440;&#x438;&#x43A;&#x438;' },
  { year: 1922, title: '&#x417;&#x430;&#x43D;&#x433;&#x435;&#x437;&#x438;', group: '&#x413;&#x438;&#x43B;&#x435;&#x44F;', color: '#E05555', note: '&#x425;&#x43B;&#x435;&#x431;&#x43D;&#x438;&#x43A;&#x43E;&#x432;. &#x421;&#x432;&#x435;&#x440;&#x445;&#x43F;&#x43E;&#x432;&#x435;&#x441;&#x442;&#x44C; &#x432; 20 &#x43F;&#x43B;&#x430;&#x441;&#x43A;&#x43E;&#x441;&#x442;&#x44F;&#x445;. &#x41F;&#x43E;&#x441;&#x43B;&#x435;&#x434;&#x43D;&#x44F;&#x44F; &#x43A;&#x440;&#x443;&#x43F;&#x43D;&#x430;&#x44F; &#x440;&#x430;&#x431;&#x43E;&#x442;&#x430;' },
];

export function PublicationsTimeline() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);

  const scrollBy = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 280, behavior: 'smooth' });
  };

  return (
    <section id="publications" className="py-24 md:py-32 px-6" style={{ backgroundColor: 'var(--c-surface)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <div className="text-[11px] tracking-[0.2em] uppercase mb-4" style={{ fontFamily: 'var(--font-body)', color: '#6C76F0' }}>
            ХРОНОЛОГИЯ
          </div>
          <h2 className="text-[52px] mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>
            Лента изданий
          </h2>
          <p className="text-[18px]" style={{ fontFamily: 'var(--font-body)', color: 'var(--c-text-muted)' }}>
            1910&#x2013;1922 &#xB7; ключевые публикации авангарда
          </p>
        </div>

        {/* Horizontal scrolling timeline */}
        <div className="relative">
          {/* Scroll buttons */}
          <button
            onClick={() => scrollBy(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full"
            style={{ backgroundColor: 'var(--c-bg)', border: '2px solid #1E1E52', color: '#E05555', fontSize: '18px' }}
          >
            &#x2039;
          </button>
          <button
            onClick={() => scrollBy(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full"
            style={{ backgroundColor: 'var(--c-bg)', border: '2px solid #1E1E52', color: '#E05555', fontSize: '18px' }}
          >
            &#x203A;
          </button>

          {/* Timeline line */}
          <div style={{ height: '2px', backgroundColor: 'var(--c-border)', margin: '0 48px 0 48px', position: 'relative' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, #E0555520, #E0555560, #E0555520)' }} />
          </div>

          {/* Scrollable cards */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 pt-6 px-12"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <style>{`.pub-scroll::-webkit-scrollbar{display:none}`}</style>
            {publications.map((pub, i) => (
              <div
                key={i}
                onClick={() => setActive(active === i ? null : i)}
                className="flex-shrink-0 rounded-lg p-6 cursor-pointer transition-all duration-250"
                style={{
                  width: '240px',
                  backgroundColor: active === i ? 'var(--c-bg)' : 'var(--c-bg)',
                  border: `1px solid ${active === i ? pub.color + '80' : 'var(--c-border)'}`,
                  transform: active === i ? 'translateY(-8px)' : 'translateY(0)',
                  boxShadow: active === i ? `0 8px 32px ${pub.color}20` : 'none'
                }}
              >
                {/* Year badge */}
                <div
                  className="inline-block px-3 py-1 rounded-full text-[12px] mb-4"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 700,
                    backgroundColor: pub.color + '20',
                    color: pub.color
                  }}
                >
                  {pub.year}
                </div>

                {/* Title */}
                <h4
                  className="text-[15px] leading-[1.4] mb-3"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--c-text)' }}
                  dangerouslySetInnerHTML={{ __html: pub.title }}
                />

                {/* Group tag */}
                <div
                  className="text-[11px] uppercase tracking-[0.1em] mb-3"
                  style={{ fontFamily: 'var(--font-body)', color: pub.color }}
                  dangerouslySetInnerHTML={{ __html: pub.group }}
                />

                {/* Note – shown when active */}
                {active === i && (
                  <p
                    className="text-[13px] leading-[1.65]"
                    style={{ fontFamily: 'var(--font-body)', color: 'var(--c-text-muted)', animation: 'fadeSlideIn 0.25s ease both' }}
                    dangerouslySetInnerHTML={{ __html: pub.note }}
                  />
                )}

                {/* Top indicator dot */}
                <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: pub.color, position: 'absolute', top: -4, left: '50%', transform: 'translateX(-50%)', opacity: active === i ? 1 : 0.4 }} />
              </div>
            ))}
          </div>
        </div>

        <style>{`@keyframes fadeSlideIn { from {opacity:0;transform:translateY(8px)} to {opacity:1;transform:translateY(0)} }`}</style>
      </div>
    </section>
  );
}
