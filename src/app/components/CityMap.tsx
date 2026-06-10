import { useState } from 'react';

const cities = [
  {
    name: 'Москва',
    cx: 62.58, cy: 32.16,
    color: '#E05555',
    photo: 'moscow.png',
    groups: ['Гилея', 'Центрифуга'],
    years: '1910–1922',
    facts: [
      'Штаб-квартира Гилеи – кафе «Стрельцов» на Кузнецком мосту',
      'Издание «Пощёчины общественному вкусу» (1912)',
      'Турне по 17 городам России (1913–1914)',
      'В. Маяковский здесь живёт и работает в РОСТА после 1917'
    ]
  },
  {
    name: 'Петербург',
    cx: 40.03, cy: 20.43,
    color: '#E8C84A',
    photo: 'petersburg.png',
    groups: ['Эго-футуризм', 'Гилея'],
    years: '1911–1914',
    facts: [
      'Иван Игнатьев основывает эго-футуризм (1911)',
      'И. Северянин здесь проводит «поэзоконцерты»',
      'Визит Ф. Маринетти в январе 1914',
      'В. Гнедов читает «Поэму конца» жестом – впервые здесь'
    ]
  },
  {
    name: 'Харьков',
    cx: 58.3, cy: 48.33,
    color: '#E09B55',
    photo: 'kharkiv.jpg',
    groups: ['Гилея'],
    years: '1907–1910',
    facts: [
      'Бурлюки живут и работают здесь до 1910 года',
      'Давид Бурлюк учится в Харьковском университете',
      'Здесь зарождается идея книги на обоях'
    ]
  },
  {
    name: 'Одесса',
    cx: 41.29, cy: 58.19,
    labelDx: 0, labelDy: -4, labelAnchor: 'middle' as const,
    color: '#9BA3C2',
    photo: 'odessa.png',
    groups: ['Гилея'],
    years: '1909–1913',
    facts: [
      'Бурлюков ранний период творчества',
      'Город как точка входа в южнорусский авангард',
      'Здесь шлафуется «Садок судей I»'
    ]
  },
  {
    name: 'Тифлис',
    cx: 84.85, cy: 71.63,
    labelDx: 0, labelDy: -4, labelAnchor: 'middle' as const,
    color: '#50B87A',
    photo: 'tiflis.png',
    groups: ['Гилея'],
    years: '1916–1921',
    facts: [
      'В. Хлебников живёт и работает здесь 1916–1921',
      'Группа «41°» – поздний футуризм',
      'Илья Зданевич организует «Фантастический кабачок»',
      'Здесь написан «Зангези»'
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

              {/* Граница – реальный векторный контур (Natural Earth 110m) */}
              {/* Непрозрачная подложка – перекрывает фоновое изображение */}
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

                  {/* Фоновый кружок – маскирует пунктир под точкой */}
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
                      ✕
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
                        <span style={{ color: cities[active].color, flexShrink: 0 }}>–</span>
                        <span dangerouslySetInnerHTML={{ __html: fact }} />
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Фото справа – крупное */}
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
