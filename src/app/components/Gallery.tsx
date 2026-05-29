import { useState } from 'react';

const paintings = [
  {
    title: 'Точильщик (Принцип сверкания)',
    artist: 'Казимир Малевич',
    year: '1913',
    movement: 'Кубофутуризм',
    color: '#E05555',
    museum: 'Yale University Art Gallery',
    img: '/images/paintings/tochilshchik.jpg',
    description: 'Малевич разбивает единое движение на серию моментов – как слово разбивается на звуки в зауми. Хлебников и Крученых делали с языком то же самое. Картина написана в год, когда Малевич оформлял книги Гилеи.',
  },
  {
    title: 'Велосипедистка',
    artist: 'Наталья Гончарова',
    year: '1913',
    movement: 'Кубофутуризм',
    color: '#E05555',
    museum: 'Русский музей, Санкт-Петербург',
    img: '/images/paintings/velosipedistka.jpg',
    description: 'Городское движение, скорость, механика – главные темы футуризма. Гончарова иллюстрировала книги Крученых и была в орбите Гилеи. Множество наложенных кадров движения предвосхищают монтажное мышление кино.',
  },
  {
    title: 'Стекло',
    artist: 'Михаил Ларионов',
    year: '1912',
    movement: 'Кубофутуризм',
    color: '#E05555',
    museum: 'Музей современного искусства (MoMA), Нью-Йорк',
    img: '/images/paintings/steklo.jpg',
    description: 'Ларионов показывает предмет как систему отражений. Форма распадается – как слово в зауми. Создатель лучизма, Ларионов был союзником и выставочным партнёром кубофутуристов.',
  },
  {
    title: 'Авиатор',
    artist: 'Казимир Малевич',
    year: '1914',
    movement: 'Кубофутуризм',
    color: '#E05555',
    museum: 'Русский музей, Санкт-Петербург',
    img: '/images/paintings/aviator.jpg',
    description: 'Авиатор – типичный герой футуризма: человек скорости, технологии, будущего. Тот же год, что Трагедия Маяковского. Фрагменты карт, игральных карт, газет – коллажная логика, родная и поэтам-гилейцам.',
  },
  {
    title: 'Корова и скрипка',
    artist: 'Казимир Малевич',
    year: '1913',
    movement: 'Кубофутуризм',
    color: '#E05555',
    museum: 'Русский музей, Санкт-Петербург',
    img: '/images/paintings/korova_skripka.jpg',
    description: 'Алогизм в живописи – точный аналог алогизма в поэзии Крученых. Малевич сталкивает несовместимые предметы по той же логике, по которой Крученых сталкивал несовместимые слова. Дыр бул щыл и Корова и скрипка – одна стратегия.',
  },
  {
    title: 'Кубизм',
    artist: 'Надежда Удальцова',
    year: '1914',
    movement: 'Кубофутуризм',
    color: '#E05555',
    museum: 'Государственная Третьяковская галерея, Москва',
    img: '/images/paintings/udaltsova_cubism.jpg',
    description: 'Удальцова применяет французский кубизм к русскому материалу – множественный ракурс, деконструкция пространства. Участница выставок Бубновый валет и 0,10. Деструкция формы в живописи и поэзии шли в ногу.',
  },
  {
    title: 'Велосипедистка',
    artist: 'Ольга Розанова',
    year: '1915',
    movement: 'Кубофутуризм',
    color: '#E05555',
    museum: 'Частная коллекция',
    img: '/images/paintings/rozanova_cyclist.jpg',
    description: 'Тема велосипедиста – классический сюжет футуризма: скорость, механика, ритм. Розанова разлагает движение на множество перекрывающихся моментов. Год спустя она создаст иллюстрации к Заумной книге Крученых.',
  },
  {
    title: 'Черный квадрат',
    artist: 'Казимир Малевич',
    year: '1915',
    movement: 'Супрематизм',
    color: '#8890C8',
    museum: 'Государственная Третьяковская галерея, Москва',
    img: '/images/paintings/chernyi_kvadrat.jpg',
    description: 'Радикальный жест обнуления – как Поэма конца Гнедова (1913): пустая страница как текст. Малевич и Гнедов независимо пришли к одному выводу: за пределом формы начинается подлинное. Кубофутуризм прошёл, супрематизм – следующий шаг.',
  },
  {
    title: 'Беспредметная композиция',
    artist: 'Ольга Розанова',
    year: '1916',
    movement: 'Супрематизм',
    color: '#8890C8',
    museum: 'Региональный художественный музей, Краснодар',
    img: '/images/paintings/rozanova_suprematism.jpg',
    description: 'Розанова – ближайший соавтор Крученых: она создавала образы для его заумных книг. Переход от книжной графики к беспредметной живописи параллелен переходу Крученых от кубофутуризма к зауми. Цвет освобождается от предмета – как звук освобождается от слова.',
  },
  {
    title: 'Супрематизм (Supremus No. 58)',
    artist: 'Казимир Малевич',
    year: '1916',
    movement: 'Супрематизм',
    color: '#8890C8',
    museum: 'Краснодарский краевой художественный музей',
    img: '/images/paintings/supremus_58.jpg',
    description: 'Геометрия, освобождённая от предметного мира. Так же, как заумь освободила звук от словарного смысла. Супрематизм – логическое завершение той же программы, что и кубофутуризм: очищение до первоначал.',
  },
  {
    title: 'Живописная архитектоника',
    artist: 'Любовь Попова',
    year: '1918',
    movement: 'Супрематизм',
    color: '#8890C8',
    museum: 'Государственный Русский музей, Санкт-Петербург',
    img: '/images/paintings/popova_architectonic_1918.jpg',
    description: 'Попова переводит плоскости Малевича в архитектоническое мышление. Цвет и форма – строительные элементы, а не украшение. Она иллюстрировала книги Крученых и входила в орбиту Гилеи: её путь от кубофутуризма к супрематизму – модель всего движения.',
  },
  {
    title: 'Белое на белом',
    artist: 'Казимир Малевич',
    year: '1918',
    movement: 'Супрематизм',
    color: '#8890C8',
    museum: 'Музей современного искусства (MoMA), Нью-Йорк',
    img: '/images/paintings/beloe_na_belom.jpg',
    description: 'Форма растворяется в фоне. Предел редукции: молчание в живописи. Перекликается с Поэмой конца Гнедова – тишиной в поэзии. Оба произведения ставят один вопрос: что остаётся, когда убрано всё лишнее?',
  },
  {
    title: 'Красный лучизм',
    artist: 'Михаил Ларионов',
    year: '1913',
    movement: 'Лучизм',
    color: '#E8C84A',
    museum: 'Museo Thyssen-Bornemisza, Мадрид',
    img: '/images/paintings/krasnyi_luchizm.jpg',
    description: 'Лучизм – живописный аналог зауми: изображается не предмет, а лучи, исходящие от него. Восприятие важнее вещи. В тот же год Крученых публикует Дыр бул щыл – звуки важнее слов. Обе стратегии атакуют одно и то же.',
  },
  {
    title: 'Кошки (лучистое восприятие)',
    artist: 'Наталья Гончарова',
    year: '1913',
    movement: 'Лучизм',
    color: '#E8C84A',
    museum: 'Музей Гуггенхайма, Нью-Йорк',
    img: '/images/paintings/koshki.jpg',
    description: 'Гончарова, партнёр Ларионова, переводит лучизм на язык живой природы. Энергия движения, а не форма. Параллель с хлебниковским корнесловием: не слово, а скрытая в нём сила.',
  },
  {
    title: 'Клином красным бей белых',
    artist: 'Эль Лисицкий',
    year: '1919',
    movement: 'Конструктивизм',
    color: '#50B87A',
    museum: 'Коллекция Ван Абберхейма, Эйндховен',
    img: '/images/paintings/klinom_krasnym.jpg',
    description: 'Лисицкий создал дизайн книги Для голоса (1923) по стихам Маяковского – один из главных памятников визуального авангарда. Конструктивизм наследует кубофутуризму: слово как форма, форма как действие.',
  },
  {
    title: 'Черное на черном',
    artist: 'Александр Родченко',
    year: '1918',
    movement: 'Конструктивизм',
    color: '#50B87A',
    museum: 'Музей современного искусства (MoMA), Нью-Йорк',
    img: '/images/paintings/chernoe_na_chernom.jpg',
    description: 'Родченко ответил на Белое на белом Малевича – диалог внутри авангарда. Его конструктивизм стал визуальным языком советского плаката, книжного дизайна, фотографии. Без кубофутуризма Гилеи не было бы конструктивистской эстетики.',
  },
];

const filters = ['Все', 'Кубофутуризм', 'Супрематизм', 'Лучизм', 'Конструктивизм'];

const movementColors: Record<string, string> = {
  'Кубофутуризм': '#E05555',
  'Супрематизм': '#8890C8',
  'Лучизм': '#E8C84A',
  'Конструктивизм': '#50B87A',
};

export function Gallery() {
  const [activeFilter, setActiveFilter] = useState('Все');
  const [selected, setSelected] = useState<number | null>(null);

  const filtered = paintings.filter(p =>
    activeFilter === 'Все' || p.movement === activeFilter
  );

  const selectedPainting = selected !== null ? paintings[selected] : null;

  return (
    <section id="gallery" className="py-24 md:py-32 px-6" style={{ backgroundColor: 'var(--c-surface)' }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16 text-center">
          <div className="text-[11px] tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: 'var(--font-body)', color: '#6C76F0' }}>
            ВИЗУАЛЬНЫЙ АВАНГАРД
          </div>
          <h2 className="text-[52px] mb-4"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--c-text)' }}>
            Галерея авангарда
          </h2>
          <p className="text-[18px] mb-10 max-w-xl mx-auto"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--c-text-muted)' }}>
            Живопись, которая делала то же, что поэзия – только красками
          </p>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map(f => (
              <button key={f} onClick={() => setActiveFilter(f)}
                className="px-5 py-2 rounded-full transition-all text-[13px]"
                style={{
                  fontFamily: 'var(--font-body)', fontWeight: 600,
                  border: '2px solid ' + (activeFilter === f ? (movementColors[f] || '#6C76F0') : 'var(--c-border)'),
                  backgroundColor: activeFilter === f ? (movementColors[f] || '#6C76F0') : 'transparent',
                  color: activeFilter === f ? 'var(--c-bg)' : 'var(--c-text)',
                }}>
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((p, i) => {
            const globalIdx = paintings.indexOf(p);
            return (
              <div key={p.title}
                className="group relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 hover:scale-[1.02]"
                style={{
                  backgroundColor: 'var(--c-bg)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  animationDelay: i * 60 + 'ms',
                }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 24px ' + p.color + '50'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)'; }}
                onClick={() => setSelected(globalIdx)}
              >
                {/* Image */}
                <div className="aspect-[3/4] relative overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, ' + p.color + '18, var(--c-surface-alt))' }}>
                  <img
                    src={p.img}
                    alt={p.title + ' – ' + p.artist}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={e => {
                      const el = e.currentTarget;
                      el.style.display = 'none';
                      const fallback = el.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  {/* Geometric fallback */}
                  <div className="absolute inset-0 items-center justify-center" style={{ display: 'none' }}>
                    <svg width="80" height="80" viewBox="0 0 80 80">
                      <rect x="10" y="10" width="60" height="60" fill={p.color} opacity="0.15" />
                      <rect x="25" y="25" width="30" height="30" fill={p.color} opacity="0.4" />
                      <circle cx="40" cy="40" r="8" fill={p.color} opacity="0.7" />
                    </svg>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.92) 50%, transparent)' }}>
                  <div className="text-[15px] mb-1" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#EEF0FF' }}>
                    {p.title}
                  </div>
                  <div className="text-[12px] mb-1" style={{ fontFamily: 'var(--font-body)', color: '#8890C8' }}>
                    {p.artist} · {p.year}
                  </div>
                  <div className="text-[11px]" style={{ fontFamily: 'var(--font-body)', color: p.color }}>
                    {p.museum}
                  </div>
                </div>

                {/* Movement tag */}
                <div className="absolute top-3 left-3 px-2 py-1 rounded text-[10px]"
                  style={{ fontFamily: 'var(--font-body)', fontWeight: 700, backgroundColor: p.color, color: '#0D0D24' }}>
                  {p.movement}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selectedPainting && (
        <div
          className="fixed inset-0 z-50 flex items-start md:items-center justify-center p-4 md:p-6 overflow-y-auto"
          style={{ backgroundColor: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }}
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-w-4xl w-full rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 my-auto"
            style={{ backgroundColor: 'var(--c-surface)', border: '2px solid ' + selectedPainting.color }}
            onClick={e => e.stopPropagation()}
          >
            {/* Image panel — limited height on mobile */}
            <div className="relative overflow-hidden" style={{ height: 'min(45vw, 240px)', minHeight: '180px', background: 'linear-gradient(135deg, ' + selectedPainting.color + '18, var(--c-surface-alt))' }}>
              <img
                src={selectedPainting.img}
                alt={selectedPainting.title}
                className="w-full h-full object-contain"
                onError={e => { e.currentTarget.style.opacity = '0'; }}
              />
            </div>

            {/* Info panel — always scrollable */}
            <div className="p-6 md:p-8 flex flex-col justify-between overflow-y-auto" style={{ maxHeight: '60vh', minHeight: 0 }}>
              <div>
                <div className="inline-block px-3 py-1 rounded-full text-[11px] mb-4"
                  style={{ fontFamily: 'var(--font-body)', fontWeight: 700, backgroundColor: selectedPainting.color, color: '#0D0D24' }}>
                  {selectedPainting.movement}
                </div>
                <h2 className="text-[28px] mb-2" style={{ fontFamily: 'var(--font-display)', fontWeight: 900, color: 'var(--c-text)' }}>
                  {selectedPainting.title}
                </h2>
                <div className="text-[15px] mb-1" style={{ fontFamily: 'var(--font-body)', color: selectedPainting.color, fontWeight: 600 }}>
                  {selectedPainting.artist}
                </div>
                <div className="text-[13px] mb-6" style={{ fontFamily: 'var(--font-body)', color: 'var(--c-text-muted)' }}>
                  {selectedPainting.year} · {selectedPainting.museum}
                </div>
                <div className="text-[11px] tracking-[0.15em] uppercase mb-3"
                  style={{ fontFamily: 'var(--font-body)', color: selectedPainting.color }}>
                  Связь с футуризмом
                </div>
                <p className="text-[15px] leading-[1.75]" style={{ fontFamily: 'var(--font-body)', color: 'var(--c-text-muted)' }}>
                  {selectedPainting.description}
                </p>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="mt-8 px-6 py-3 rounded-lg text-[14px] transition-all hover:opacity-80"
                style={{ fontFamily: 'var(--font-body)', fontWeight: 600, backgroundColor: selectedPainting.color, color: '#0D0D24', border: 'none', cursor: 'pointer' }}>
                Закрыть
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
