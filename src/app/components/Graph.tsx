import { useState, useEffect } from 'react';
import { Network } from 'lucide-react';

const nodes = [
  { id: 'mayakovsky', name: 'Маяковский', x: 28, y: 28, color: '#E05555', group: 'Гилея' },
  { id: 'khlebnikov', name: 'Хлебников', x: 50, y: 18, color: '#E05555', group: 'Гилея' },
  { id: 'kruchenykh', name: 'Крученых', x: 38, y: 42, color: '#E05555', group: 'Гилея' },
  { id: 'burliuk', name: 'Бурлюк', x: 18, y: 48, color: '#E05555', group: 'Гилея' },
  { id: 'kamensky', name: 'Каменский', x: 20, y: 30, color: '#E05555', group: 'Гилея' },
  { id: 'severyanin', name: 'Северянин', x: 72, y: 28, color: '#E8C84A', group: 'Эго-футуризм' },
  { id: 'ignatiev', name: 'Игнатьев', x: 82, y: 40, color: '#E8C84A', group: 'Эго-футуризм' },
  { id: 'gnedov', name: 'Гнедов', x: 78, y: 55, color: '#E8C84A', group: 'Эго-футуризм' },
  { id: 'pasternak', name: 'Пастернак', x: 32, y: 72, color: '#50B87A', group: 'Центрифуга' },
  { id: 'bobrov', name: 'Бобров', x: 46, y: 80, color: '#50B87A', group: 'Центрифуга' },
  { id: 'aseev', name: 'Асеев', x: 56, y: 70, color: '#50B87A', group: 'Центрифуга' },
  { id: 'livshits', name: 'Лившиц', x: 12, y: 62, color: '#E05555', group: 'Гилея' }
];

const edges = [
  // Внутри Гилеи
  { from: 'mayakovsky', to: 'burliuk', type: 'solid' },
  { from: 'mayakovsky', to: 'khlebnikov', type: 'solid' },
  { from: 'mayakovsky', to: 'kruchenykh', type: 'solid' },
  { from: 'khlebnikov', to: 'kruchenykh', type: 'solid' },
  { from: 'burliuk', to: 'kamensky', type: 'solid' },
  { from: 'burliuk', to: 'livshits', type: 'solid' },
  // Внутри Эго
  { from: 'severyanin', to: 'ignatiev', type: 'solid' },
  { from: 'ignatiev', to: 'gnedov', type: 'solid' },
  // Внутри Центрифуги
  { from: 'pasternak', to: 'bobrov', type: 'solid' },
  { from: 'pasternak', to: 'aseev', type: 'solid' },
  { from: 'bobrov', to: 'aseev', type: 'solid' },
  // Между группами (пунктир)
  { from: 'mayakovsky', to: 'pasternak', type: 'dashed', color: '#E05555' },
  { from: 'mayakovsky', to: 'aseev', type: 'dashed', color: '#E05555' },
  { from: 'khlebnikov', to: 'pasternak', type: 'dashed', color: '#50B87A' },
];

const nodeInfo: Record<string, {
  name: string; dates: string; group: string; color: string; bio: string; works: string[];
}> = {
  mayakovsky: {
    name: 'Владимир Маяковский',
    dates: '1893–1930',
    group: 'Гилея',
    color: '#E05555',
    bio: 'Главный голос русского кубофутуризма. Поэт-трибун, превративший стихотворение в ораторский жест – каждое слово рассчитано на удар. После 1917-го работал в РОСТА и ЛЕФе, дошёл до трагического разрыва между поэзией и пропагандой. Застрелился в 1930 году.',
    works: ['«Нате!» (1913)', '«Облако в штанах» (1915)', '«Флейта-позвоночник» (1916)', '«Мистерия-буфф» (1918)', '«Про это» (1923)']
  },
  khlebnikov: {
    name: 'Велимир Хлебников',
    dates: '1885–1922',
    group: 'Гилея',
    color: '#E05555',
    bio: 'Самый радикальный теоретик русского авангарда. Создал концепцию «корнесловия» – раскрытия скрытой математики языка через неологизмы из исконных корней. Провозгласил себя «Председателем Земного Шара». Умер в 37 лет в безвестности.',
    works: ['«Заклятие смехом» (1908)', '«Бобэоби пелись губы» (1908–1909)', '«Ладомир» (1920)', '«Зангези» (1922)', '«Доски судьбы» (1922)']
  },
  kruchenykh: {
    name: 'Алексей Крученых',
    dates: '1886–1968',
    group: 'Гилея',
    color: '#E05555',
    bio: 'Создатель зауми – языка, освобождённого от смысла. Его «Дыр бул щыл» (1913) – самый радикальный текст русского авангарда. Прожил дольше всех участников движения; в поздние годы стал хранителем архивов авангарда.',
    works: ['«Дыр бул щыл» (1913)', '«Игра в аду» (1912)', '«Слово как таковое» (1913)', '«Взорваль» (1913)', '«500 новых острот Пушкина» (1924)']
  },
  burliuk: {
    name: 'Давид Бурлюк',
    dates: '1882–1967',
    group: 'Гилея',
    color: '#E05555',
    bio: '«Отец русского футуризма» – организатор, продюсер и идеолог движения. Открыл Маяковского, финансировал издания, устраивал турне. После 1920 года жил в США, где пропагандировал русский авангард по-английски.',
    works: ['«Садок судей I» (1910, ред.)', '«Садок судей II» (1913, ред.)', '«Пощёчина общественному вкусу» (1912, ред.)', '«Молоко кобылиц» (1914)', 'Журнал «Color and Rhyme» (1930–1966)']
  },
  kamensky: {
    name: 'Василий Каменский',
    dates: '1884–1961',
    group: 'Гилея',
    color: '#E05555',
    bio: 'Поэт и авиатор, разбившийся на аэроплане в 1910 году. «Железобетонные поэмы» из «Танго с коровами» – попытка перенести конструктивную форму архитектуры в поэзию. Один из главных участников турне 1913–1914 годов.',
    works: ['«Танго с коровами» (1914)', '«Звучаль веснеянки» (1916)', '«Стенька Разин» (1919)']
  },
  severyanin: {
    name: 'Игорь Северянин',
    dates: '1887–1941',
    group: 'Эго-футуризм',
    color: '#E8C84A',
    bio: 'Самый популярный поэт России 1910-х. В 1918 году избран «Королём поэтов» выше Маяковского. Его эго-футуризм – рафинированная красота, а не бунт. После эмиграции в Эстонию писал ностальгически, умер в оккупированном Таллине.',
    works: ['«Громокипящий кубок» (1913)', '«Ананасы в шампанском» (1915)', '«Миррэлия» (1922)', '«Классические розы» (1931)', '«Медальоны» (1934)']
  },
  ignatiev: {
    name: 'Иван Игнатьев',
    dates: '1892–1914',
    group: 'Эго-футуризм',
    color: '#E8C84A',
    bio: 'Главный теоретик и организатор эго-футуризма. Основал «Академию Эго-Поэзии», редактировал альманахи. Покончил с собой в 21 год – в ночь собственной свадьбы. Его смерть стала концом организованного эго-футуризма.',
    works: ['«Орлы над пропастью» (1912, ред.)', '«Эго-футуризм» (1913)', '«Интуитивные краски» (1913)', '«Засахаре кры» (1913, ред.)']
  },
  gnedov: {
    name: 'Василиск Гнедов',
    dates: '1890–1978',
    group: 'Эго-футуризм',
    color: '#E8C84A',
    bio: 'Автор «Поэмы конца» (1913) – пустой страницы, которую «читали» жестом. Предвосхитил «4\'33"» Кейджа на 40 лет. Прожил до 1978 года, но после 1910-х почти не публиковался. Его открытие переоткрыли в 1970-е.',
    works: ['«Смерть искусству» (1913)', '«Поэма конца» (1913)', '«Гостинец сентиментам» (1913)']
  },
  pasternak: {
    name: 'Борис Пастернак',
    dates: '1890–1960',
    group: 'Центрифуга',
    color: '#50B87A',
    bio: '«Свидетель, а не пророк». Раннее творчество – в «Центрифуге». Личная дружба с Маяковским несмотря на принципиальные расхождения. «Доктор Живаго» принёс Нобелевскую премию (1958), от которой пришлось отказаться.',
    works: ['«Близнец в тучах» (1914)', '«Поверх барьеров» (1917)', '«Сестра моя – жизнь» (1922)', '«Доктор Живаго» (1957)']
  },
  bobrov: {
    name: 'Сергей Бобров',
    dates: '1889–1971',
    group: 'Центрифуга',
    color: '#50B87A',
    bio: 'Основатель издательства «Центрифуга» и главный теоретик группы. Математик по образованию. Его концепция «внутреннего склонения слова» – слово развивается по собственным законам, независимо от авторского замысла. Прожил дольше всех участников и оставил важные мемуары об эпохе.',
    works: ['«Вертоградари над лозами» (1913)', '«Лирическая тема» (1914)', '«Алмазные леса» (1917)', '«Мальчик» (1920)']
  },
  aseev: {
    name: 'Николай Асеев',
    dates: '1889–1963',
    group: 'Центрифуга',
    color: '#50B87A',
    bio: 'Связующее звено между «Центрифугой» и послереволюционным ЛЕФом. Дружба с Маяковским определила путь в советскую литературу. Поэма «Маяковский начинается» (1940) – Сталинская премия. Один из немногих, сохранивших экспериментальную форму.',
    works: ['«Ночная флейта» (1914)', '«Оксана» (1916)', '«Бомба» (1921)', '«Маяковский начинается» (1940)', '«Лад» (1961)']
  },
  livshits: {
    name: 'Бенедикт Лившиц',
    dates: '1887–1938',
    group: 'Гилея',
    color: '#E05555',
    bio: 'Участник «Гилеи» и лучший её летописец. Его мемуары «Полутораглазый стрелец» (1933) – незаменимый источник о раннем кубофутуризме. Арестован в 1937 году и расстрелян – одна из жертв Большого террора среди деятелей авангарда.',
    works: ['«Флейта Марсия» (1911)', '«Полутораглазый стрелец» (мемуары, 1933)', '«Картвельские оды» (переводы, 1935)']
  }
};

function getNode(id: string) {
  return nodes.find(n => n.id === id)!;
}

function edgeLength(from: { x: number; y: number }, to: { x: number; y: number }) {
  return Math.sqrt((to.x - from.x) ** 2 + (to.y - from.y) ** 2);
}

export function Graph() {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [filterGroup, setFilterGroup] = useState<string | null>(null);
  const [edgesVisible, setEdgesVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setEdgesVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  const visibleNodes = filterGroup ? nodes.filter(n => n.group === filterGroup) : nodes;
  const visibleIds = new Set(visibleNodes.map(n => n.id));

  const info = selectedNode ? nodeInfo[selectedNode] : null;

  return (
    <section id="graph" className="py-24 md:py-32 px-6">
      <style>{`
        @keyframes nodePulse { 0%,100%{transform:scale(1);opacity:0.5} 50%{transform:scale(1.15);opacity:0.8} }
      `}</style>
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-16 text-center">
          <div className="text-[11px] tracking-[0.2em] uppercase mb-4" style={{ fontFamily: 'var(--font-body)', color: '#6C76F0' }}>
            ВЗАИМОСВЯЗИ
          </div>
          <h2 className="text-[52px] mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>
            Граф связей
          </h2>
          <p className="text-[18px] mb-8" style={{ fontFamily: 'var(--font-body)', color: 'var(--c-text-muted)' }}>
            Как поэты, группы и события были связаны между собой
          </p>

          {/* Group filter */}
          <div className="flex flex-wrap gap-3 justify-center">
            {[null, 'Гилея', 'Эго-футуризм', 'Центрифуга'].map((g) => (
              <button
                key={g ?? 'all'}
                onClick={() => { setFilterGroup(g); setSelectedNode(null); }}
                className="px-5 py-2 rounded-full border-2 text-[13px] transition-all"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  borderColor: filterGroup === g ? (g === 'Гилея' ? '#E05555' : g === 'Эго-футуризм' ? '#E8C84A' : g === 'Центрифуга' ? '#50B87A' : '#6C76F0') : 'var(--c-border)',
                  backgroundColor: filterGroup === g ? (g === 'Гилея' ? '#E05555' : g === 'Эго-футуризм' ? '#E8C84A' : g === 'Центрифуга' ? '#50B87A' : '#6C76F0') : 'transparent',
                  color: filterGroup === g ? 'var(--c-bg)' : 'var(--c-text)'
                }}
              >
                {g ?? 'Все группы'}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Graph canvas */}
          <div className="lg:col-span-2 p-6 rounded-lg relative" style={{ backgroundColor: 'var(--c-surface)', minHeight: '480px' }}>
            <svg className="w-full h-full" viewBox="0 0 100 100" style={{ minHeight: '400px' }}>
              <defs>
                {/* Subtle dot-grid background pattern */}
                <pattern id="dotgrid" x="0" y="0" width="5" height="5" patternUnits="userSpaceOnUse">
                  <circle cx="2.5" cy="2.5" r="0.18" fill="var(--c-border)" />
                </pattern>
              </defs>

              {/* Background pattern */}
              <rect width="100" height="100" fill="url(#dotgrid)" />

              {/* Group halos */}
              {(!filterGroup || filterGroup === 'Гилея') && (
                <ellipse cx="30" cy="37" rx="22" ry="22" fill="#E05555" opacity="0.04" />
              )}
              {(!filterGroup || filterGroup === 'Эго-футуризм') && (
                <ellipse cx="77" cy="41" rx="14" ry="16" fill="#E8C84A" opacity="0.05" />
              )}
              {(!filterGroup || filterGroup === 'Центрифуга') && (
                <ellipse cx="45" cy="74" rx="16" ry="10" fill="#50B87A" opacity="0.05" />
              )}

              {/* Edges with draw-in animation */}
              {edges.map((edge, i) => {
                const from = getNode(edge.from);
                const to = getNode(edge.to);
                if (!visibleIds.has(edge.from) || !visibleIds.has(edge.to)) return null;
                const edgeColor = edge.color ?? '#242464';
                const len = edgeLength(from, to);
                const delay = i * 0.12;
                return (
                  <line
                    key={i}
                    x1={from.x} y1={from.y}
                    x2={to.x} y2={to.y}
                    stroke={edgeColor}
                    strokeWidth={edge.type === 'dashed' ? '0.3' : '0.25'}
                    strokeDasharray={edge.type === 'dashed' ? `1,1` : `${len} ${len}`}
                    strokeDashoffset={edgesVisible ? 0 : len}
                    opacity={0.7}
                    style={{ transition: `stroke-dashoffset 0.6s ease ${delay}s` }}
                  />
                );
              })}

              {/* Nodes */}
              {visibleNodes.map((node) => (
                <g
                  key={node.id}
                  onClick={() => setSelectedNode(selectedNode === node.id ? null : node.id)}
                  className="cursor-pointer"
                >
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={selectedNode === node.id ? '4' : '2.5'}
                    fill={node.color}
                    opacity={selectedNode && selectedNode !== node.id ? 0.4 : 1}
                    style={{ transition: 'all 0.2s' }}
                  />
                  <text
                    x={node.x}
                    y={node.y - 4}
                    textAnchor="middle"
                    fill="var(--c-text)"
                    stroke="var(--c-surface)"
                    strokeWidth="0.9"
                    strokeLinejoin="round"
                    paintOrder="stroke"
                    fontSize="2.8"
                    fontWeight={600}
                    fontFamily="var(--font-body)"
                    opacity={selectedNode && selectedNode !== node.id ? 0.4 : 1}
                  >
                    {node.name}
                  </text>
                </g>
              ))}
            </svg>

            {/* Legend */}
            <div className="absolute bottom-4 left-4 flex gap-4 text-[11px]" style={{ fontFamily: 'var(--font-body)' }}>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#E05555' }} />
                <span style={{ color: 'var(--c-text-muted)' }}>Кубофутуризм</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#E8C84A' }} />
                <span style={{ color: 'var(--c-text-muted)' }}>Эго-футуризм</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#50B87A' }} />
                <span style={{ color: 'var(--c-text-muted)' }}>Центрифуга</span>
              </div>
            </div>
            <div className="absolute bottom-4 right-4 flex gap-4 text-[11px]" style={{ fontFamily: 'var(--font-body)', color: 'var(--c-text-muted)' }}>
              <div className="flex items-center gap-2">
                <svg width="20" height="6"><line x1="0" y1="3" x2="20" y2="3" stroke="#303070" strokeWidth="1.5" /></svg>
                внутри группы
              </div>
              <div className="flex items-center gap-2">
                <svg width="20" height="6"><line x1="0" y1="3" x2="20" y2="3" stroke="#E05555" strokeWidth="1.5" strokeDasharray="3,2" /></svg>
                между группами
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {info ? (
              <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--c-surface)' }}>
                <h3 className="text-[22px] mb-1" style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>
                  {info.name}
                </h3>
                <div className="text-[13px] mb-3" style={{ fontFamily: 'var(--font-body)', color: 'var(--c-text-muted)' }}>
                  {info.dates}
                </div>
                <div
                  className="inline-block px-3 py-1 rounded-full text-[12px] mb-4"
                  style={{ fontFamily: 'var(--font-body)', fontWeight: 600, backgroundColor: info.color, color: 'var(--c-bg)' }}
                >
                  {info.group}
                </div>
                <p className="text-[14px] leading-[1.75] mb-5" style={{ fontFamily: 'var(--font-body)', color: 'var(--c-text)' }}>
                  {info.bio}
                </p>
                <div className="text-[12px] mb-3" style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: info.color }}>
                  Ключевые работы:
                </div>
                <ul className="space-y-2">
                  {info.works.map((work, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span style={{ color: info.color, flexShrink: 0 }}>·</span>
                      <span className="text-[13px]" style={{ fontFamily: 'var(--font-body)', color: 'var(--c-text-muted)' }}>{work}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="p-6 rounded-lg flex flex-col items-center justify-center text-center" style={{ backgroundColor: 'var(--c-surface)', minHeight: '300px' }}>
                <Network size={40} style={{ color: 'var(--c-text-muted)', marginBottom: '16px' }} />
                <p className="text-[14px] mb-2" style={{ fontFamily: 'var(--font-body)', color: 'var(--c-text-muted)' }}>
                  Нажмите на узел, чтобы узнать больше о поэте
                </p>
                <p className="text-[12px]" style={{ fontFamily: 'var(--font-body)', color: 'var(--c-border)' }}>
                  На графе {nodes.length} поэтов из трёх групп
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
