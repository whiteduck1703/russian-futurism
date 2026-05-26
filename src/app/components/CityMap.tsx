import { useState } from 'react';

const cities = [
  {
    name: '&#x41C;&#x43E;&#x441;&#x43A;&#x432;&#x430;',
    cx: 62.58, cy: 32.16,
    color: '#E05555',
    photo: 'moscow.png',
    groups: ['&#x413;&#x438;&#x43B;&#x435;&#x44F;', '&#x426;&#x435;&#x43D;&#x442;&#x440;&#x438;&#x444;&#x443;&#x433;&#x430;'],
    years: '1910&#x2013;1922',
    facts: [
      '&#x428;&#x442;&#x430;&#x431;-&#x43A;&#x432;&#x430;&#x440;&#x442;&#x438;&#x440;&#x430; &#x413;&#x438;&#x43B;&#x435;&#x438; &#x2013; &#x43A;&#x430;&#x444;&#x435; «&#x421;&#x442;&#x440;&#x435;&#x43B;&#x44C;&#x446;&#x43E;&#x432;» &#x43D;&#x430; &#x41A;&#x443;&#x437;&#x43D;&#x435;&#x446;&#x43A;&#x43E;&#x43C; &#x43C;&#x43E;&#x441;&#x442;&#x443;',
      '&#x418;&#x437;&#x434;&#x430;&#x43D;&#x438;&#x435; «&#x41F;&#x43E;&#x449;&#x451;&#x447;&#x438;&#x43D;&#x44B; &#x43E;&#x431;&#x449;&#x435;&#x441;&#x442;&#x432;&#x435;&#x43D;&#x43D;&#x43E;&#x43C;&#x443; &#x432;&#x43A;&#x443;&#x441;&#x443;» (1912)',
      '&#x422;&#x443;&#x440;&#x43D;&#x435; &#x43F;&#x43E; 17 &#x433;&#x43E;&#x440;&#x43E;&#x434;&#x430;&#x43C; &#x420;&#x43E;&#x441;&#x441;&#x438;&#x438; (1913&#x2013;1914)',
      '&#x41C;&#x430;&#x44F;&#x43A;&#x43E;&#x432;&#x441;&#x43A;&#x438;&#x439; &#x437;&#x434;&#x435;&#x441;&#x44C; &#x436;&#x438;&#x432;&#x451;&#x442; &#x438; &#x440;&#x430;&#x431;&#x43E;&#x442;&#x430;&#x435;&#x442; &#x432; &#x420;&#x41E;&#x421;&#x422;&#x410; &#x43F;&#x43E;&#x441;&#x43B;&#x435; 1917'
    ]
  },
  {
    name: '&#x41F;&#x435;&#x442;&#x435;&#x440;&#x431;&#x443;&#x440;&#x433;',
    cx: 40.03, cy: 20.43,
    color: '#E8C84A',
    photo: 'petersburg.png',
    groups: ['&#x42D;&#x433;&#x43E;-&#x444;&#x443;&#x442;&#x443;&#x440;&#x438;&#x437;&#x43C;', '&#x413;&#x438;&#x43B;&#x435;&#x44F;'],
    years: '1911&#x2013;1914',
    facts: [
      '&#x418;&#x432;&#x430;&#x43D; &#x418;&#x433;&#x43D;&#x430;&#x442;&#x44C;&#x435;&#x432; &#x43E;&#x441;&#x43D;&#x43E;&#x432;&#x44B;&#x432;&#x430;&#x435;&#x442; &#x44D;&#x433;&#x43E;-&#x444;&#x443;&#x442;&#x443;&#x440;&#x438;&#x437;&#x43C; (1911)',
      '&#x421;&#x435;&#x432;&#x435;&#x440;&#x44F;&#x43D;&#x438;&#x43D; &#x437;&#x434;&#x435;&#x441;&#x44C; &#x43F;&#x440;&#x43E;&#x432;&#x43E;&#x434;&#x438;&#x442; «&#x43F;&#x43E;&#x44D;&#x437;&#x43E;&#x43A;&#x43E;&#x43D;&#x446;&#x435;&#x440;&#x442;&#x44B;»',
      '&#x412;&#x438;&#x437;&#x438;&#x442; &#x41C;&#x430;&#x440;&#x438;&#x43D;&#x435;&#x442;&#x442;&#x438; &#x432; &#x44F;&#x43D;&#x432;&#x430;&#x440;&#x435; 1914',
      '&#x413;&#x43D;&#x435;&#x434;&#x43E;&#x432; &#x447;&#x438;&#x442;&#x430;&#x435;&#x442; «&#x41F;&#x43E;&#x44D;&#x43C;&#x443; &#x43A;&#x43E;&#x43D;&#x446;&#x430;» &#x436;&#x435;&#x441;&#x442;&#x43E;&#x43C; &#x2013; &#x432;&#x43F;&#x435;&#x440;&#x432;&#x44B;&#x435; &#x437;&#x434;&#x435;&#x441;&#x44C;'
    ]
  },
  {
    name: '&#x425;&#x430;&#x440;&#x44C;&#x43A;&#x43E;&#x432;',
    cx: 58.3, cy: 48.33,
    color: '#E09B55',
    photo: 'kharkiv.jpg',
    groups: ['&#x413;&#x438;&#x43B;&#x435;&#x44F;'],
    years: '1907&#x2013;1910',
    facts: [
      '&#x411;&#x443;&#x440;&#x43B;&#x44E;&#x43A;&#x438; &#x436;&#x438;&#x432;&#x443;&#x442; &#x438; &#x440;&#x430;&#x431;&#x43E;&#x442;&#x430;&#x44E;&#x442; &#x437;&#x434;&#x435;&#x441;&#x44C; &#x434;&#x43E; 1910 &#x433;&#x43E;&#x434;&#x430;',
      '&#x414;&#x430;&#x432;&#x438;&#x434; &#x411;&#x443;&#x440;&#x43B;&#x44E;&#x43A; &#x443;&#x447;&#x438;&#x442;&#x441;&#x44F; &#x432; &#x425;&#x430;&#x440;&#x44C;&#x43A;&#x43E;&#x432;&#x441;&#x43A;&#x43E;&#x43C; &#x443;&#x43D;&#x438;&#x432;&#x435;&#x440;&#x441;&#x438;&#x442;&#x435;&#x442;&#x435;',
      '&#x417;&#x434;&#x435;&#x441;&#x44C; &#x437;&#x430;&#x440;&#x43E;&#x436;&#x434;&#x430;&#x435;&#x442;&#x441;&#x44F; &#x438;&#x434;&#x435;&#x44F; &#x43A;&#x43D;&#x438;&#x433;&#x438; &#x43D;&#x430; &#x43E;&#x431;&#x43E;&#x44F;&#x445;'
    ]
  },
  {
    name: '&#x41E;&#x434;&#x435;&#x441;&#x441;&#x430;',
    cx: 41.29, cy: 58.19,
    labelDx: 0, labelDy: -4, labelAnchor: 'middle' as const,
    color: '#9BA3C2',
    photo: 'odessa.png',
    groups: ['&#x413;&#x438;&#x43B;&#x435;&#x44F;'],
    years: '1909&#x2013;1913',
    facts: [
      '&#x411;&#x443;&#x440;&#x43B;&#x44E;&#x43A;&#x43E;&#x432; &#x440;&#x430;&#x43D;&#x43D;&#x438;&#x439; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434; &#x442;&#x432;&#x43E;&#x440;&#x447;&#x435;&#x441;&#x442;&#x432;&#x430;',
      '&#x413;&#x43E;&#x440;&#x43E;&#x434; &#x43A;&#x430;&#x43A; &#x442;&#x43E;&#x447;&#x43A;&#x430; &#x432;&#x445;&#x43E;&#x434;&#x430; &#x432; &#x44E;&#x436;&#x43D;&#x43E;&#x440;&#x443;&#x441;&#x441;&#x43A;&#x438;&#x439; &#x430;&#x432;&#x430;&#x43D;&#x433;&#x430;&#x440;&#x434',
      '&#x417;&#x434;&#x435;&#x441;&#x44C; &#x448;&#x43B;&#x430;&#x444;&#x443;&#x435;&#x442;&#x441;&#x44F; «&#x421;&#x430;&#x434;&#x43E;&#x43A; &#x441;&#x443;&#x434;&#x435;&#x439; I»'
    ]
  },
  {
    name: '&#x422;&#x438;&#x444;&#x43B;&#x438;&#x441;',
    cx: 84.85, cy: 71.63,
    labelDx: 0, labelDy: -4, labelAnchor: 'middle' as const,
    color: '#50B87A',
    photo: 'tiflis.png',
    groups: ['&#x413;&#x438;&#x43B;&#x435;&#x44F;'],
    years: '1916&#x2013;1921',
    facts: [
      '&#x425;&#x43B;&#x435;&#x431;&#x43D;&#x438;&#x43A;&#x43E;&#x432; &#x436;&#x438;&#x432;&#x451;&#x442; &#x438; &#x440;&#x430;&#x431;&#x43E;&#x442;&#x430;&#x435;&#x442; &#x437;&#x434;&#x435;&#x441;&#x44C; 1916&#x2013;1921',
      '&#x413;&#x440;&#x443;&#x43F;&#x43F;&#x430; «41&#xB0;» &#x2013; &#x43F;&#x43E;&#x437;&#x434;&#x43D;&#x438;&#x439; &#x444;&#x443;&#x442;&#x443;&#x440;&#x438;&#x437;&#x43C;',
      '&#x418;&#x43B;&#x44C;&#x44F; &#x417;&#x434;&#x430;&#x43D;&#x435;&#x432;&#x438;&#x447; &#x43E;&#x440;&#x433;&#x430;&#x43D;&#x438;&#x437;&#x443;&#x435;&#x442; «&#x424;&#x430;&#x43D;&#x442;&#x430;&#x441;&#x442;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x43A;&#x430;&#x431;&#x430;&#x447;&#x43E;&#x43A;»',
      '&#x417;&#x434;&#x435;&#x441;&#x44C; &#x43D;&#x430;&#x43F;&#x438;&#x441;&#x430;&#x43D; «&#x417;&#x430;&#x43D;&#x433;&#x435;&#x437;&#x438;»'
    ]
  }
];

export function CityMap() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      id="citymap"
      className="py-24 md:py-32 px-6 relative"
      style={{ backgroundColor: 'var(--c-bg)' }}
    >

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Заголовок */}
        <div className="mb-16 text-center">
          <div className="text-[11px] tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: 'var(--font-body)', color: '#6C76F0' }}>
            ГЕОГРАФИЯ
          </div>
          <h2 className="text-[52px] mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>
            Карта движения
          </h2>
          <p className="text-[18px]" style={{ fontFamily: 'var(--font-body)', color: 'var(--c-text-muted)' }}>
            Города, где рождался русский авангард
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[42%_58%] gap-8 items-start">
          {/* SVG Карта */}
          <div className="relative">
            <svg viewBox="-4 -3 118 90" className="w-full">

              {/* Граница — реальный векторный контур (Natural Earth 110m) */}
              {/* Непрозрачная подложка — перекрывает фоновое изображение */}
              <path
                d="M 37.83,61.53 L 29.56,53.58 L 14.62,52.74 L 20.62,46.34 L 18.94,37.33 L 7.13,35.89 L 12.09,33.75 L 13.06,27.51 L 20.9,28.59 L 18.49,22.53 L 36.33,20.17 L 12.26,18.22 L 12.92,11.29 L 24.85,5.9 L 19.13,-0.81 L 73.21,-0.69 L 64.95,3.4 L 48.89,1.63 L 60.72,9.44 L 61.22,5.81 L 68.69,7.56 L 76.41,2.07 L 82.14,3.21 L 81.74,-0.81 L 110.09,-0.81 L 110.09,44.08 L 93.26,47.04 L 89.91,52.82 L 98.05,58.42 L 90.58,63.45 L 102.04,75.67 L 97.37,81.1 L 94.83,77.56 L 86.8,79.55 L 59.67,61.66 L 67.23,56.0 L 54.38,58.78 L 58.62,62.03 L 51.05,64.14 L 44.23,57.56 L 37.83,61.53 Z"
                fill="var(--c-bg)"
                stroke="none"
              />
              <path
                d="M 37.83,61.53 L 29.56,53.58 L 14.62,52.74 L 20.62,46.34 L 18.94,37.33 L 7.13,35.89 L 12.09,33.75 L 13.06,27.51 L 20.9,28.59 L 18.49,22.53 L 36.33,20.17 L 12.26,18.22 L 12.92,11.29 L 24.85,5.9 L 19.13,-0.81 L 73.21,-0.69 L 64.95,3.4 L 48.89,1.63 L 60.72,9.44 L 61.22,5.81 L 68.69,7.56 L 76.41,2.07 L 82.14,3.21 L 81.74,-0.81 L 110.09,-0.81 L 110.09,44.08 L 93.26,47.04 L 89.91,52.82 L 98.05,58.42 L 90.58,63.45 L 102.04,75.67 L 97.37,81.1 L 94.83,77.56 L 86.8,79.55 L 59.67,61.66 L 67.23,56.0 L 54.38,58.78 L 58.62,62.03 L 51.05,64.14 L 44.23,57.56 L 37.83,61.53 Z"
                fill="#6C76F0"
                fillOpacity="0.07"
                stroke="#6C76F0"
                strokeOpacity="0.6"
                strokeWidth="0.5"
                strokeDasharray="3 2"
              />

              {/* Точки городов */}
              {cities.map((city, i) => (
                <g
                  key={i}
                  style={{ cursor: 'pointer' }}
                  onClick={() => setActive(active === i ? null : i)}
                >
                  {/* Пульсирующий ореол при активном состоянии */}
                  {active === i && (
                    <circle cx={city.cx} cy={city.cy} r="5.5" fill={city.color} opacity="0.12" />
                  )}

                  {/* Фоновый кружок — маскирует пунктир под точкой */}
                  <circle cx={city.cx} cy={city.cy} r="3.8" fill="var(--c-bg)" />

                  <circle
                    cx={city.cx} cy={city.cy}
                    r={active === i ? 3.2 : 2.2}
                    fill={city.color}
                    style={{ transition: 'all 0.25s ease' }}
                  />

                  <text
                    x={city.cx + (city.labelDx ?? 3.5)}
                    y={city.cy + (city.labelDy ?? 1)}
                    textAnchor={city.labelAnchor ?? 'start'}
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '3.5px',
                      fill: active === i ? city.color : 'var(--c-text-muted)',
                      transition: 'fill 0.2s',
                      pointerEvents: 'none'
                    }}
                    dangerouslySetInnerHTML={{ __html: city.name }}
                  />
                </g>
              ))}
            </svg>
            <p className="text-center text-[12px] mt-2"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--c-border)' }}>
              Нажмите на город
            </p>
          </div>

          {/* Информационная панель */}
          <div>
            {active === null ? (
              <div className="space-y-3">
                {cities.map((city, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className="w-full text-left px-4 py-3 rounded-lg transition-all"
                    style={{
                      backgroundColor: 'var(--c-surface)',
                      border: '2px solid var(--c-border)',
                      fontFamily: 'var(--font-body)'
                    }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = city.color + '60')}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--c-border)')}
                  >
                    <div className="flex items-center gap-3">
                      {/* Миниатюра */}
                      <div style={{
                        width: 44, height: 36,
                        borderRadius: 4,
                        overflow: 'hidden',
                        border: `1.5px solid ${city.color}50`,
                        flexShrink: 0
                      }}>
                        <img
                          src={`/images/cities/${city.photo}`}
                          alt=""
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </div>
                      <span
                        style={{ fontSize: '16px', fontWeight: 700, color: 'var(--c-text)' }}
                        dangerouslySetInnerHTML={{ __html: city.name }}
                      />
                      <span
                        style={{ fontSize: '13px', color: 'var(--c-text-muted)', marginLeft: 'auto' }}
                        dangerouslySetInnerHTML={{ __html: city.years }}
                      />
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div
                className="rounded-lg overflow-hidden"
                style={{
                  backgroundColor: 'var(--c-surface)',
                  border: `1px solid ${cities[active].color}40`,
                  animation: 'fadeSlideIn 0.3s ease both',
                  display: 'flex',
                  minHeight: 380
                }}
              >
                <style>{`@keyframes fadeSlideIn { from { opacity:0; transform:translateX(16px);} to { opacity:1; transform:translateX(0);} }`}</style>

                {/* Текст слева */}
                <div className="p-6" style={{ flex: '0 0 48%', minWidth: 0, display: 'flex', flexDirection: 'column' }}>
                  <div className="flex items-start justify-between mb-2">
                    <h3
                      className="text-[28px]"
                      style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: cities[active].color }}
                      dangerouslySetInnerHTML={{ __html: cities[active].name }}
                    />
                    <button
                      onClick={() => setActive(null)}
                      style={{ color: 'var(--c-text-muted)', fontSize: '18px', lineHeight: 1, background: 'none', border: 'none', cursor: 'pointer', flexShrink: 0, marginLeft: 8 }}
                    >
                      &#x2715;
                    </button>
                  </div>
                  <div
                    className="text-[12px] mb-3"
                    style={{ fontFamily: 'var(--font-body)', color: 'var(--c-text-muted)' }}
                    dangerouslySetInnerHTML={{ __html: cities[active].years }}
                  />
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cities[active].groups.map(g => (
                      <span
                        key={g}
                        className="px-2 py-0.5 rounded text-[11px]"
                        style={{
                          backgroundColor: cities[active].color + '20',
                          color: cities[active].color,
                          fontFamily: 'var(--font-body)',
                          fontWeight: 600
                        }}
                        dangerouslySetInnerHTML={{ __html: g }}
                      />
                    ))}
                  </div>
                  <ul className="space-y-2">
                    {cities[active].facts.map((fact, fi) => (
                      <li
                        key={fi}
                        className="flex gap-2 text-[13px] leading-[1.6]"
                        style={{ fontFamily: 'var(--font-body)', color: 'var(--c-text)' }}
                      >
                        <span style={{ color: cities[active].color, flexShrink: 0 }}>&#x2014;</span>
                        <span dangerouslySetInnerHTML={{ __html: fact }} />
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Фото справа — крупное */}
                <div style={{ flex: '0 0 52%', overflow: 'hidden' }}>
                  <img
                    src={`/images/cities/${cities[active].photo}`}
                    alt=""
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
