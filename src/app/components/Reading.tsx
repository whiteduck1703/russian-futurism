import { useState } from 'react';
import { BookOpen, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

const editions = [
  {
    title: 'Садок судей I',
    author: 'Коллективный альманах Гилеи',
    year: '1910',
    group: 'Кубофутуризм',
    color: '#E05555',
    cover: '/images/covers/sadok_sudey_1.jpg',
    note: 'Первый кубофутуристический альманах, напечатанный на обороте обоев &#x2013; не из экономии, а как художественный жест. Вошли стихи Хлебникова, Каменского, Бурлюка. Материальность книги стала частью высказывания.',
    availability: 'Скан &#x2013; Национальная электронная библиотека',
    url: 'https://rusneb.ru/catalog/000202_000043_172/'
  },
  {
    title: 'Пощёчина общественному вкусу',
    author: 'Бурлюк, Крученых, Маяковский, Хлебников',
    year: '1912',
    group: 'Кубофутуризм',
    color: '#E05555',
    cover: '/images/covers/poshchechina.jpg',
    note: 'Главный манифест русского кубофутуризма. «Бросить Пушкина, Достоевского, Толстого с Парохода Современности». Манифест как таран &#x2013; без аргументов, только удар. Цель была достигнута: скандал, насмешки, цитирование.',
    availability: 'Полный текст манифеста &#x2013; Викитека',
    url: 'https://ru.wikisource.org/wiki/%D0%9F%D0%BE%D1%89%D1%91%D1%87%D0%B8%D0%BD%D0%B0_%D0%BE%D0%B1%D1%89%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%BC%D1%83_%D0%B2%D0%BA%D1%83%D1%81%D1%83'
  },
  {
    title: 'Садок судей II',
    author: 'Коллективный альманах Гилеи',
    year: '1913',
    group: 'Кубофутуризм',
    color: '#E05555',
    cover: '/images/covers/sadok_sudey_2.jpg',
    note: 'Второй альманах &#x2013; более зрелый. Здесь опубликованы ранние стихи Маяковского, «Заклятие смехом» Хлебникова и манифест группы. Нестандартный формат, обёрточная бумага.',
    availability: 'Скан &#x2013; Национальная электронная библиотека',
    url: 'https://rusneb.ru/catalog/000200_000018_rc_1884059/'
  },
  {
    title: 'Трое',
    author: 'Хлебников, Крученых, Гуро',
    year: '1913',
    group: 'Кубофутуризм',
    color: '#E05555',
    cover: '/images/covers/troe_1913.jpg',
    note: 'Альманах с обложкой Малевича &#x2013; один из первых примеров синтеза литературного и изобразительного авангарда. Геометрические формы обложки предвосхищают супрематизм.',
    availability: 'Скан &#x2013; Национальная электронная библиотека',
    url: 'https://rusneb.ru/catalog/000200_000018_RU_NLR_19V_934270/'
  },
  {
    title: 'Я!',
    author: 'Владимир Маяковский',
    year: '1913',
    group: 'Кубофутуризм',
    color: '#E05555',
    cover: '/images/covers/mayakovsky_ya.jpg',
    note: 'Первый сборник Маяковского &#x2013; четыре стихотворения, изданные тиражом 300 экземпляров. Обложка нарисована Давидом Бурлюком. Редчайший первоисточник.',
    availability: 'Скан &#x2013; Национальная электронная библиотека',
    url: 'https://rusneb.ru/catalog/000199_000009_003805966/'
  },
  {
    title: 'Облако в штанах',
    author: 'Владимир Маяковский',
    year: '1915',
    group: 'Кубофутуризм',
    color: '#E05555',
    cover: '/images/covers/oblako.jpg',
    note: 'Тетраптих &#x2013; четыре части, четыре «долой»: вашу любовь, ваше искусство, ваш строй, вашу религию. Лучшее из того, что Маяковский написал как лирик. Аудиозапись в исполнении автора сохранилась.',
    availability: 'Полный текст &#x2013; Викитека',
    url: 'https://ru.wikisource.org/wiki/%D0%9E%D0%B1%D0%BB%D0%B0%D0%BA%D0%BE_%D0%B2_%D1%88%D1%82%D0%B0%D0%BD%D0%B0%D1%85_(%D0%9C%D0%B0%D1%8F%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9)'
  },
  {
    title: 'Для голоса',
    author: 'Владимир Маяковский',
    year: '1923',
    group: 'Кубофутуризм',
    color: '#E05555',
    cover: '/images/covers/dlya_golosa.jpg',
    note: 'Книга-объект, оформленная Эль Лисицким. Алфавитный указатель-«пальчик» на обрезе позволяет открыть нужное стихотворение вслепую. Вершина советского книжного конструктивизма.',
    availability: 'Скан &#x2013; Национальная электронная библиотека',
    url: 'https://rusneb.ru/catalog/000200_000018_RU_NLR_A1SV_88366/'
  },
  {
    title: 'Игра в аду',
    author: 'Алексей Крученых, Велимир Хлебников',
    year: '1912',
    group: 'Кубофутуризм',
    color: '#E05555',
    cover: '/images/covers/igra_v_adu.jpg',
    note: 'Поэма, написанная совместно Крученых и Хлебниковым. Одно из первых изданий группы «Гилея». Соединение фольклорных и богоборческих мотивов.',
    availability: 'Скан &#x2013; Национальная электронная библиотека',
    url: 'https://rusneb.ru/catalog/000200_000018_rc_1924557/'
  },
  {
    title: 'Заумная книга',
    author: 'Крученых, Алягров (Якобсон)',
    year: '1915',
    group: 'Заумь',
    color: 'var(--c-text-muted)',
    cover: '/images/covers/zaumnaya_kniga.jpg',
    note: 'Один из главных документов зауми. «Алягров» &#x2013; псевдоним молодого Романа Якобсона. Рукописная книга с литографиями Розановой &#x2013; предельная точка в программе «самовитого слова».',
    availability: 'Скан &#x2013; Библиотека русской и советской классики',
    url: 'https://traumlibrary.ru/fx/kruchenih-zaumnaya-gniga.html'
  },
  {
    title: 'Утиное гнёздышко',
    author: 'Крученых, Розанова',
    year: '1914',
    group: 'Заумь',
    color: 'var(--c-text-muted)',
    cover: '/images/covers/utinoe_gnezdo.jpg',
    note: 'Книга-объект, где текст и изображение неразделимы. Ольга Розанова создала цветные коллажи, Крученых &#x2013; зауминые тексты. Один из лучших примеров книги как тотального произведения.',
    availability: 'Каталог &#x2013; Национальная электронная библиотека',
    url: 'https://rusneb.ru/catalog/000202_000043_155/'
  },
  {
    title: 'Зангези',
    author: 'Велимир Хлебников',
    year: '1922',
    group: 'Заумь',
    color: 'var(--c-text-muted)',
    cover: '/images/covers/zangezi.jpg',
    note: '«Сверхповесть» в 20 плоскостях &#x2013; последнее произведение Хлебникова, изданное посмертно. Каждая плоскость написана в отдельном языковом регистре: заумь, птичий язык, звёздный язык.',
    availability: 'Полный текст &#x2013; Викитека',
    url: 'https://ru.wikisource.org/wiki/%D0%97%D0%B0%D0%BD%D0%B3%D0%B5%D0%B7%D0%B8_(%D0%A5%D0%BB%D0%B5%D0%B1%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2)'
  },
  {
    title: 'Ананасы в шампанском',
    author: 'Игорь Северянин',
    year: '1915',
    group: 'Эгофутуризм',
    color: '#E8C84A',
    cover: '/images/covers/ananasy.jpg',
    note: 'Второй сборник Северянина &#x2013; апогей его эстетики. Неологизмы особенно изощрённые: «грезэрка», «олилиенен», «экстазная». Книга, которую сложно воспринимать всерьёз &#x2013; и которая при этом абсолютно серьёзна.',
    availability: 'Полный текст &#x2013; Викитека',
    url: 'https://ru.wikisource.org/wiki/%D0%90%D0%BD%D0%B0%D0%BD%D0%B0%D1%81%D1%8B_%D0%B2_%D1%88%D0%B0%D0%BC%D0%BF%D0%B0%D0%BD%D1%81%D0%BA%D0%BE%D0%BC_(%D0%A1%D0%B5%D0%B2%D0%B5%D1%80%D1%8F%D0%BD%D0%B8%D0%BD)'
  },
  {
    title: 'Громокипящий кубок',
    author: 'Игорь Северянин',
    year: '1913',
    group: 'Эгофутуризм',
    color: '#E8C84A',
    cover: '/images/covers/gromokipiashiy.jpg',
    note: 'Первый и самый знаменитый сборник Северянина, выдержавший 10 изданий при жизни автора. «Я, гений Игорь Северянин, своей победой упоён» &#x2013; не ирония, а манифест. Книга, которая сделала поэзию модой.',
    availability: 'Полный текст &#x2013; Библиотека Мошкова (az.lib.ru)',
    url: 'http://az.lib.ru/s/sewerjanin_i/'
  },
];

const research = [
  {
    title: 'История русского футуризма',
    author: 'Владимир Марков',
    year: '1968',
    color: 'var(--c-text-muted)',
    note: 'Фундаментальное исследование, по сей день остающееся стандартным академическим текстом. Марков &#x2013; первый, кто систематически описал все три группы и их взаимоотношения. Написано по-английски, переведено на русский. Незаменимо как отправная точка.',
    availability: 'Русский перевод &#x2013; «Прогресс-Традиция», 2002',
    url: ''
  },
  {
    title: 'О теории прозы',
    author: 'Виктор Шкловский',
    year: '1925',
    color: 'var(--c-text-muted)',
    note: 'Шкловский &#x2013; один из создателей русского формализма и участник футуристической среды. «Искусство как приём» &#x2013; ключевой текст о том, как деформация делает вещи видимыми снова.',
    availability: 'Текст онлайн &#x2013; philologos.narod.ru',
    url: 'https://philologos.narod.ru/shklovsky/prose1983.htm'
  },
  {
    title: 'Новейшая русская поэзия',
    author: 'Роман Якобсон',
    year: '1921',
    color: 'var(--c-text-muted)',
    note: 'Первый научный анализ кубофутуристической поэтики, написанный участником событий. Якобсон использует структурный подход для описания того, что было современностью. Ключевой текст для понимания Хлебникова.',
    availability: 'Текст онлайн &#x2013; philologos.narod.ru',
    url: 'https://philologos.narod.ru/classics/jakobson-nrp.htm'
  },
  {
    title: 'Архаисты и новаторы',
    author: 'Юрий Тынянов',
    year: '1929',
    color: 'var(--c-text-muted)',
    note: 'Тынянов описал механизм смены литературных эпох: как «вчерашние бунтари» становятся классикой. Незаменим для понимания того, почему футуризм стал каноном, хотя строился как антиканон.',
    availability: 'Переиздание &#x2013; URSS, 2019',
    url: ''
  },
  {
    title: 'Полутораглазый стрелец',
    author: 'Бенедикт Лившиц',
    year: '1933',
    color: 'var(--c-text-muted)',
    note: 'Мемуары участника «Гилеи» &#x2013; незаменимый источник о раннем кубофутуризме. Живые портреты Хлебникова, Маяковского, Бурлюка, написанные изнутри. Умный и ироничный свидетель, умевший отделить легенду от факта.',
    availability: 'Текст онлайн &#x2013; az.lib.ru',
    url: 'http://az.lib.ru/l/liwshic_b_k/text_0080.shtml'
  },
  {
    title: 'Поэтическая культура Маяковского',
    author: 'Н. Харджиев, В. Тренин',
    year: '1970',
    color: 'var(--c-text-muted)',
    note: 'Академическое исследование поэтики Маяковского с привлечением архивных материалов. Один из немногих советских текстов, сохранивших научную объективность в разговоре об официальном поэте.',
    availability: 'Доступно в крупных библиотеках',
    url: ''
  },
  {
    title: 'Велимир Хлебников',
    author: 'Р. Дуганов',
    year: '1990',
    color: 'var(--c-text-muted)',
    note: 'Философские и эстетические искания «Председателя Земного Шара». Дуганов предложил целостную концепцию хлебниковского творчества, убедительно связав поэтику с математикой и утопией.',
    availability: '«Наука», 1990 &#x2013; Национальная электронная библиотека',
    url: 'https://rusneb.ru/catalog/000199_000009_003423053/'
  },
  {
    title: 'Русская живопись. Пробуждение памяти',
    author: 'Дмитрий Сарабьянов',
    year: '1998',
    color: 'var(--c-text-muted)',
    note: 'Панорама русского изобразительного авангарда: Малевич, Гончарова, Ларионов, Татлин. Связи с литературным футуризмом рассматриваются как системообразующие, а не маргинальные.',
    availability: '«Искусство», 1998',
    url: ''
  },
];

const onlineResources = [
  {
    title: 'Арзамас',
    url: 'https://arzamas.academy',
    color: '#E05555',
    description: 'Лучший русскоязычный образовательный ресурс по истории культуры. Курс «Русский авангард» (6 лекций) ведут специалисты МГУ и РГГУ. Отдельные курсы о Маяковском, Хлебникове, символизме. Все материалы бесплатны.',
    tag: 'Образование'
  },
  {
    title: 'Библиотека Максима Мошкова (lib.ru)',
    url: 'https://az.lib.ru',
    color: '#50B87A',
    description: 'Один из старейших и крупнейших русскоязычных текстовых архивов. Раздел «Антология» содержит тексты Хлебникова, Крученых, Северянина, Маяковского, Шкловского, Якобсона и других участников движения. Бесплатный доступ без регистрации.',
    tag: 'Тексты'
  },
  {
    title: 'Национальная электронная библиотека',
    url: 'https://rusneb.ru',
    color: '#E8C84A',
    description: 'Крупнейшее собрание оцифрованных российских изданий. Содержит редкие сборники русского авангарда, альманахи футуристов и периодику начала XX века. Бесплатный доступ после регистрации.',
    tag: 'Библиотека'
  },
  {
    title: 'Третьяковская галерея',
    url: 'https://www.tretyakovgallery.ru',
    color: '#E05555',
    description: 'Крупнейшее собрание произведений русского авангарда. Онлайн-коллекция позволяет просматривать работы Малевича, Гончаровой, Ларионова в высоком разрешении. Залы 6&#x2013;10 на Крымском валу.',
    tag: 'Музей'
  },
  {
    title: 'Русский музей',
    url: 'https://rusmuseum.ru',
    color: '#50B87A',
    description: 'Петербургское собрание авангарда: Матюшин, Филонов, Петров-Водкин. Виртуальные туры и онлайн-лекции доступны на сайте бесплатно. Корпус Бенуа, залы 76&#x2013;104.',
    tag: 'Музей'
  },
  {
    title: 'Викитека',
    url: 'https://ru.wikisource.org',
    color: 'var(--c-text-muted)',
    description: 'Русскоязычный раздел Викитеки содержит полные тексты Маяковского, Хлебникова, Северянина, Крученых и других поэтов авангарда. Свободный доступ, верифицированные тексты.',
    tag: 'Тексты'
  },
];

const editionFilters = ['Все', 'Кубофутуризм', 'Эгофутуризм', 'Заумь'];

export function Reading() {
  const [activeFilter, setActiveFilter] = useState('Все');
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const filteredEditions = editions.filter(
    (e) => activeFilter === 'Все' || e.group === activeFilter
  );

  return (
    <section id="reading" className="py-24 md:py-32 px-6 relative" style={{ backgroundColor: 'var(--c-surface)' }}>
      {/* Linen weave texture */}
      <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.06 }}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="linen" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="6" y2="0" stroke="var(--c-text)" strokeWidth="0.8"/>
              <line x1="0" y1="3" x2="6" y2="3" stroke="var(--c-text)" strokeWidth="0.4"/>
              <line x1="0" y1="0" x2="0" y2="6" stroke="var(--c-text)" strokeWidth="0.8"/>
              <line x1="3" y1="0" x2="3" y2="6" stroke="var(--c-text)" strokeWidth="0.4"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#linen)"/>
        </svg>
      </div>
      <div className="max-w-7xl mx-auto">

        <div className="mb-12 text-center">
          <div className="text-[11px] tracking-[0.2em] uppercase mb-4" style={{ fontFamily: 'var(--font-body)', color: '#6C76F0' }}>
            БИБЛИОТЕКА
          </div>
          <h2 className="text-[52px] mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>
            Читальный зал
          </h2>
          <p className="text-[18px]" style={{ fontFamily: 'var(--font-body)', color: 'var(--c-text-muted)' }}>
            Первоисточники, исследования и актуальные ресурсы
          </p>
        </div>

        {/* Раздел: Издания */}
        <div>
          <h3 className="text-[22px] mb-8 text-center" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--c-text)' }}>
            Издания
          </h3>
          <div className="flex flex-wrap gap-3 justify-center mb-10">
              {editionFilters.map((f) => (
                <button
                  key={f}
                  onClick={() => { setActiveFilter(f); setExpandedCard(null); }}
                  className="px-5 py-1.5 rounded-full border transition-all text-[13px]"
                  style={{
                    fontFamily: 'var(--font-body)', fontWeight: 500,
                    borderColor: activeFilter === f ? 'var(--c-text)' : 'var(--c-border)',
                    backgroundColor: activeFilter === f ? 'var(--c-border)' : 'transparent',
                    color: activeFilter === f ? 'var(--c-text)' : 'var(--c-text-muted)'
                  }}
                >
                  {f}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
              {filteredEditions.map((book, i) => {
                const isOpen = expandedCard === i;
                return (
                  <div key={i} className="flex flex-col">
                    <div
                      className="group relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300"
                      style={{
                        backgroundColor: 'var(--c-bg)',
                        boxShadow: isOpen ? '0 0 0 2px ' + book.color : '0 4px 6px rgba(0,0,0,0.15)',
                        transform: isOpen ? 'scale(1.02)' : 'scale(1)'
                      }}
                      onClick={() => setExpandedCard(isOpen ? null : i)}
                    >
                      <div className="absolute top-2 left-2 z-10 px-2 py-0.5 rounded text-[10px]"
                        style={{ fontFamily: 'var(--font-body)', fontWeight: 600, backgroundColor: book.color, color: 'var(--c-bg)' }}>
                        {book.year}
                      </div>
                      <div className="aspect-[3/4] relative">
                        {book.cover ? (
                          <img src={book.cover} alt={book.title} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center"
                            style={{ background: 'linear-gradient(135deg, ' + book.color + '25, #0D0D24)' }}>
                            <BookOpen size={48} style={{ color: book.color, opacity: 0.35 }} />
                          </div>
                        )}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"
                          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 50%)' }}>
                          <div className="p-3 w-full">
                            <div className="flex items-center gap-1 text-[11px]"
                              style={{ fontFamily: 'var(--font-body)', color: book.color }}>
                              {isOpen ? <><ChevronUp size={12} /> Свернуть</> : <><ChevronDown size={12} /> Подробнее</>}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="p-3">
                        <h3 className="text-[13px] leading-[1.4] mb-1"
                          style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--c-text)' }}>
                          {book.title}
                        </h3>
                        <p className="text-[11px] leading-[1.4]"
                          style={{ fontFamily: 'var(--font-body)', color: 'var(--c-text-muted)' }}>
                          {book.author}
                        </p>
                      </div>
                    </div>
                    {isOpen && (
                      <div className="mt-2 p-4 rounded-lg"
                        style={{ backgroundColor: 'var(--c-bg)', border: '1px solid ' + book.color + '40' }}>
                        <p className="text-[13px] leading-[1.7] mb-3"
                          style={{ fontFamily: 'var(--font-body)', color: 'var(--c-text-muted)' }}
                          dangerouslySetInnerHTML={{ __html: book.note }}
                        />
                        <div className="pt-3" style={{ borderTop: '2px solid #1E1E52' }}>
                          {book.url ? (
                            <a href={book.url} target="_blank" rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-[12px] hover:opacity-80 transition-opacity"
                              style={{ fontFamily: 'var(--font-body)', color: book.color, textDecoration: 'none' }}>
                              <ExternalLink size={11} />
                              <span dangerouslySetInnerHTML={{ __html: book.availability }} />
                            </a>
                          ) : (
                            <span className="text-[12px]" style={{ fontFamily: 'var(--font-body)', color: book.color }}
                              dangerouslySetInnerHTML={{ __html: book.availability }} />
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
        </div>

        {/* Раздел: Исследования */}
        <div className="mt-16">
          <h3 className="text-[22px] mb-8 text-center" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--c-text)' }}>
            Исследования
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {research.map((book, i) => (
              <div key={i} className="p-6 rounded-lg" style={{ backgroundColor: 'var(--c-bg)' }}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-16 rounded flex items-center justify-center flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, ' + book.color + '30, #0D0D24)' }}>
                    <BookOpen size={20} style={{ color: book.color, opacity: 0.6 }} />
                  </div>
                  <div>
                    <div className="inline-block px-2 py-0.5 rounded text-[11px] mb-2"
                      style={{ fontFamily: 'var(--font-body)', fontWeight: 600, backgroundColor: 'var(--c-border)', color: 'var(--c-text-muted)' }}>
                      {book.year}
                    </div>
                    <h3 className="text-[17px] mb-1" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--c-text)' }}>
                      {book.title}
                    </h3>
                    <div className="text-[13px]" style={{ fontFamily: 'var(--font-body)', color: 'var(--c-text-muted)' }}>
                      {book.author}
                    </div>
                  </div>
                </div>
                <p className="text-[14px] leading-[1.7] mb-3" style={{ fontFamily: 'var(--font-body)', color: 'var(--c-text-muted)' }}
                  dangerouslySetInnerHTML={{ __html: book.note }}
                />
                <div className="pt-3" style={{ borderTop: '2px solid #1E1E52' }}>
                  {book.url ? (
                    <a href={book.url} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[12px] hover:opacity-80 transition-opacity"
                      style={{ fontFamily: 'var(--font-body)', color: '#50B87A', textDecoration: 'none' }}>
                      <ExternalLink size={11} />
                      <span dangerouslySetInnerHTML={{ __html: book.availability }} />
                    </a>
                  ) : (
                    <span className="text-[12px]" style={{ fontFamily: 'var(--font-body)', color: '#50B87A' }}
                      dangerouslySetInnerHTML={{ __html: book.availability }} />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Раздел: Онлайн-ресурсы */}
        <div className="mt-16">
          <h3 className="text-[22px] mb-8 text-center" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--c-text)' }}>
            Онлайн-ресурсы
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {onlineResources.map((res, i) => (
              <a key={i} href={res.url} target="_blank" rel="noopener noreferrer"
                className="block p-6 rounded-lg transition-all hover:scale-[1.02]"
                style={{ backgroundColor: 'var(--c-bg)', textDecoration: 'none' }}>
                <div className="flex items-start justify-between mb-3">
                  <span className="inline-block px-2 py-0.5 rounded text-[11px]"
                    style={{ fontFamily: 'var(--font-body)', fontWeight: 600, backgroundColor: res.color, color: 'var(--c-bg)' }}>
                    {res.tag}
                  </span>
                  <ExternalLink size={14} style={{ color: 'var(--c-text-muted)', flexShrink: 0 }} />
                </div>
                <h3 className="text-[18px] mb-1" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--c-text)' }}>
                  {res.title}
                </h3>
                <div className="text-[12px] mb-3" style={{ fontFamily: 'var(--font-body)', color: res.color }}>
                  {res.url.replace('https://', '').replace('http://', '')}
                </div>
                <p className="text-[14px] leading-[1.7]" style={{ fontFamily: 'var(--font-body)', color: 'var(--c-text-muted)' }}
                  dangerouslySetInnerHTML={{ __html: res.description }}
                />
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
                                                                                                                                                                       
