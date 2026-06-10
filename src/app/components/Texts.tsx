import { useState, useEffect, useRef } from 'react';
import { BookOpen, ExternalLink, Bookmark, BookmarkCheck, ChevronLeft, ChevronRight, Book, Library } from 'lucide-react';
import { texts } from '../data/texts';

/* ─── Author catalogue ─────────────────────────────────── */
const authors = [
  {
    key: 'mayakovsky',
    name: 'Владимир В. Маяковский',
    short: 'В. Маяковский',
    years: '1893–1930',
    tag: 'Кубофутуризм',
    color: '#E05555',
    works: ['Облако в штанах'],
  },
  {
    key: 'khlebnikov',
    name: 'Велимир В. Хлебников',
    short: 'В. Хлебников',
    years: '1885–1922',
    tag: 'Заумь / Кубофутуризм',
    color: '#E05555',
    works: ['Зангези', 'Садок судей II'],
  },
  {
    key: 'severyanin',
    name: 'Игорь И. Северянин',
    short: 'И. Северянин',
    years: '1887–1941',
    tag: 'Эгофутуризм',
    color: '#E8C84A',
    works: ['Громокипящий кубок', 'Ананасы в шампанском'],
  },
  {
    key: 'kruchenykh',
    name: 'Алексей А. Кручёных',
    short: 'А. Кручёных',
    years: '1886–1968',
    tag: 'Заумь',
    color: 'var(--c-text-muted)',
    works: ['Заумная книга', 'Игра в аду'],
  },
];

/* ─── Editions catalogue (Лента изданий) ─────────────────── */
const editions = [
  {
    title: 'Садок судей I',
    author: 'Коллективный альманах Гилеи',
    year: '1910',
    group: 'Кубофутуризм',
    color: '#E05555',
    cover: '/images/covers/sadok_sudey_1.jpg',
    note: 'Первый кубофутуристический альманах, напечатанный на обороте обоев – не из экономии, а как художественный жест. Вошли стихи В. Хлебникова, В. Каменского, Д. Бурлюка.',
    availability: 'Скан – Национальная электронная библиотека',
    url: 'https://rusneb.ru/catalog/000202_000043_172/',
  },
  {
    title: 'Пощёчина общественному вкусу',
    author: 'Д. Бурлюк, А. Кручёных, В. Маяковский, В. Хлебников',
    year: '1912',
    group: 'Кубофутуризм',
    color: '#E05555',
    cover: '/images/covers/poshchechina.jpg',
    note: 'Главный манифест русского кубофутуризма. «Бросить Пушкина, Достоевского, Толстого с Парохода Современности». Манифест как таран – без аргументов, только удар.',
    availability: 'Скан – Национальная электронная библиотека',
    url: 'https://rusneb.ru/catalog/000199_000009_003808361/',
  },
  {
    title: 'Игра в аду',
    author: 'Алексей А. Кручёных, Велимир В. Хлебников',
    year: '1912',
    group: 'Кубофутуризм',
    color: '#E05555',
    cover: '/images/covers/igra_v_adu.jpg',
    note: 'Поэма, написанная совместно А. Кручёных и В. Хлебниковым. Одно из первых изданий группы «Гилея». Соединение фольклорных и богоборческих мотивов.',
    availability: 'Скан – Национальная электронная библиотека',
    url: 'https://rusneb.ru/catalog/000200_000018_rc_1924557/',
  },
  {
    title: 'Садок судей II',
    author: 'Коллективный альманах Гилеи',
    year: '1913',
    group: 'Кубофутуризм',
    color: '#E05555',
    cover: '/images/covers/sadok_sudey_2.jpg',
    note: 'Второй альманах – более зрелый. «Заклятие смехом» В. Хлебникова, ранний В. Маяковский, манифест группы. Нестандартный формат, обёрточная бумага.',
    availability: 'Скан – Национальная электронная библиотека',
    url: 'https://rusneb.ru/catalog/000200_000018_rc_1884059/',
  },
  {
    title: 'Трое',
    author: 'В. Хлебников, А. Кручёных, Е. Гуро',
    year: '1913',
    group: 'Кубофутуризм',
    color: '#E05555',
    cover: '/images/covers/troe_1913.jpg',
    note: 'Альманах с обложкой Малевича – один из первых примеров синтеза литературного и изобразительного авангарда. Геометрические формы обложки предвосхищают супрематизм.',
    availability: 'Скан – Национальная электронная библиотека',
    url: 'https://rusneb.ru/catalog/000200_000018_RU_NLR_19V_934270/',
  },
  {
    title: 'Громокипящий кубок',
    author: 'Игорь И. Северянин',
    year: '1913',
    group: 'Эгофутуризм',
    color: '#E8C84A',
    cover: '/images/covers/gromokipiashiy.jpg',
    note: 'Первый и самый знаменитый сборник И. Северянина, выдержавший 10 изданий при жизни автора. «Я, гений Игорь И. Северянин, своей победой упоён» – не ирония, а манифест.',
    availability: 'Стихи – Библиотека Мошкова',
    url: 'http://az.lib.ru/s/sewerjanin_i/',
  },
  {
    title: 'Я!',
    author: 'Владимир В. Маяковский',
    year: '1913',
    group: 'Кубофутуризм',
    color: '#E05555',
    cover: '/images/covers/mayakovsky_ya.jpg',
    note: 'Первый сборник В. Маяковского – четыре стихотворения, тираж 300 экземпляров. Обложка нарисована Давидом Бурлюком. Редчайший первоисточник.',
    availability: 'Скан – Национальная электронная библиотека',
    url: 'https://rusneb.ru/catalog/000199_000009_003805966/',
  },
  {
    title: 'Утиное гнёздышко',
    author: 'А. Кручёных, Розанова',
    year: '1914',
    group: 'Заумь',
    color: 'var(--c-text-muted)',
    cover: '/images/covers/utinoe_gnezdo.jpg',
    note: 'Книга-объект, где текст и изображение неразделимы. Ольга Розанова создала цветные коллажи, А. Кручёных – заумные тексты. Один из лучших примеров книги как тотального произведения.',
    availability: 'Скан – Национальная электронная библиотека',
    url: 'https://rusneb.ru/catalog/000202_000043_155/',
  },
  {
    title: 'Облако в штанах',
    author: 'Владимир В. Маяковский',
    year: '1915',
    group: 'Кубофутуризм',
    color: '#E05555',
    cover: '/images/covers/oblako.jpg',
    note: 'Тетраптих – четыре части, четыре «долой»: вашу любовь, ваше искусство, ваш строй, вашу религию. Лучшее из написанного В. Маяковским как лириком.',
    availability: 'Полный текст – Викитека',
    url: 'https://ru.wikisource.org/wiki/Облако_в_штанах_(В. Маяковский)',
  },
  {
    title: 'Ананасы в шампанском',
    author: 'Игорь И. Северянин',
    year: '1915',
    group: 'Эгофутуризм',
    color: '#E8C84A',
    cover: '/images/covers/ananasy.jpg',
    note: 'Второй сборник И. Северянина – апогей его эстетики. Неологизмы особенно изощрённые: «грезэрка», «олилиенен», «экстазная». Книга, которую сложно воспринимать всерьёз – и которая при этом абсолютно серьёзна.',
    availability: 'Полный текст – Викитека',
    url: 'https://ru.wikisource.org/wiki/Ананасы_в_шампанском_(И. Северянин)',
  },
  {
    title: 'Заумная книга',
    author: 'А. Кручёных, Алягров (Якобсон)',
    year: '1915',
    group: 'Заумь',
    color: 'var(--c-text-muted)',
    cover: '/images/covers/zaumnaya_kniga.jpg',
    note: 'Один из главных документов зауми. «Алягров» – псевдоним молодого Романа Якобсона. Рукописная книга с литографиями Розановой – предельная точка в программе «самовитого слова».',
    availability: 'Скан – Библиотека «Травма»',
    url: 'https://traumlibrary.ru/fx/kruchenih-zaumnaya-gniga.html',
  },
  {
    title: 'Зангези',
    author: 'Велимир В. Хлебников',
    year: '1922',
    group: 'Заумь',
    color: 'var(--c-text-muted)',
    cover: '/images/covers/zangezi.jpg',
    note: '«Сверхповесть» в 20 плоскостях – последнее произведение В. Хлебникова, изданное посмертно. Каждая плоскость написана в отдельном языковом регистре: заумь, птичий язык, звёздный язык.',
    availability: 'Полный текст – Викитека',
    url: 'https://ru.wikisource.org/wiki/Зангези_(В. Хлебников)',
  },
  {
    title: 'Для голоса',
    author: 'Владимир В. Маяковский',
    year: '1923',
    group: 'Кубофутуризм',
    color: '#E05555',
    cover: '/images/covers/dlya_golosa.jpg',
    note: 'Книга-объект, оформленная Эль Лисицким. Алфавитный указатель-«пальчик» на обрезе позволяет открыть нужное стихотворение вслепую. Вершина советского книжного конструктивизма.',
    availability: 'Скан – Национальная электронная библиотека',
    url: 'https://rusneb.ru/catalog/000200_000018_RU_NLR_A1SV_88366/',
  },
];

/* ─── Bookmarks ─────────────────────────────────────────── */
const BOOKMARK_KEY = 'futurism_bookmarks';

function getBookmarks(): string[] {
  try {
    return JSON.parse(localStorage.getItem(BOOKMARK_KEY) || '[]');
  } catch {
    return [];
  }
}

function saveBookmarks(bm: string[]) {
  try {
    localStorage.setItem(BOOKMARK_KEY, JSON.stringify(bm));
  } catch {
    // ignore
  }
}

function bmId(work: string, section: number) {
  return `${work}::${section}`;
}

/* ─── Component ─────────────────────────────────────────── */
export function Texts() {
  const [activeAuthorKey, setActiveAuthorKey] = useState('mayakovsky');
  const [activeWork, setActiveWork] = useState('Облако в штанах');
  const [activeSectionIdx, setActiveSectionIdx] = useState(0);
  const [fontSize, setFontSize] = useState(16);
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [showBookmarks, setShowBookmarks] = useState(false);
  const [showCatalog, setShowCatalog] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setBookmarks(getBookmarks());
  }, []);

  const handleAuthorChange = (key: string) => {
    const author = authors.find(a => a.key === key)!;
    setActiveAuthorKey(key);
    setActiveWork(author.works[0]);
    setActiveSectionIdx(0);
    setShowBookmarks(false);
    setShowCatalog(false);
  };

  const handleWorkChange = (work: string) => {
    setActiveWork(work);
    setActiveSectionIdx(0);
  };

  useEffect(() => {
    contentRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSectionIdx, activeWork]);

  const currentAuthor = authors.find(a => a.key === activeAuthorKey)!;
  const entry = texts[activeWork];
  const sections = entry?.sections ?? [];
  const section = sections[activeSectionIdx];
  const currentBmId = bmId(activeWork, activeSectionIdx);
  const isBookmarked = bookmarks.includes(currentBmId);

  const toggleBookmark = () => {
    const next = isBookmarked
      ? bookmarks.filter(b => b !== currentBmId)
      : [...bookmarks, currentBmId];
    setBookmarks(next);
    saveBookmarks(next);
  };

  const jumpToBookmark = (id: string) => {
    const [work, secStr] = id.split('::');
    const sec = parseInt(secStr, 10);
    const author = authors.find(a => a.works.includes(work));
    if (!author) return;
    setActiveAuthorKey(author.key);
    setActiveWork(work);
    setActiveSectionIdx(sec);
    setShowBookmarks(false);
    setShowCatalog(false);
  };

  const renderContent = (text: string) => {
    return text.split('\n\n').map((block, i) => (
      <p
        key={i}
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: `${fontSize}px`,
          lineHeight: '1.9',
          color: 'var(--c-text)',
          marginBottom: '1.5em',
          whiteSpace: 'pre-line',
        }}
      >
        {block}
      </p>
    ));
  };

  /* ── Group editions by movement ─────────────────────────── */
  const groups = [
    { label: 'Кубофутуризм', color: '#E05555' },
    { label: 'Эгофутуризм',  color: '#E8C84A' },
    { label: 'Заумь',        color: 'var(--c-text-muted)' },
  ];

  return (
    <section
      id="texts"
      className="py-24 md:py-32 px-6"
      style={{ backgroundColor: 'var(--c-bg)' }}
    >
      <div className="max-w-7xl mx-auto">

        {/* ── Header ──────────────────────────────────────── */}
        <div className="mb-12 text-center">
          <div
            className="text-[11px] tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: 'var(--font-body)', color: '#6C76F0' }}
          >
            БИБЛИОТЕКА
          </div>
          <h2
            className="text-[52px] mb-4"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}
          >
            Читальный зал
          </h2>
          <p
            className="text-[18px]"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--c-text-muted)' }}
          >
            Тексты и издания русского футуризма
          </p>
        </div>

        {/* ── Top tabs row ────────────────────────────────── */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">

          {/* Author tabs */}
          {authors.map(author => (
            <button
              key={author.key}
              onClick={() => handleAuthorChange(author.key)}
              className="px-5 py-2 rounded-full border-2 transition-all"
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '14px',
                borderColor:
                  !showCatalog && activeAuthorKey === author.key
                    ? author.color
                    : 'var(--c-border)',
                backgroundColor:
                  !showCatalog && activeAuthorKey === author.key
                    ? author.color
                    : 'transparent',
                color:
                  !showCatalog && activeAuthorKey === author.key
                    ? 'var(--c-bg)'
                    : 'var(--c-text)',
              }}
            >
              {author.short}
              <span className="ml-2 text-[11px] opacity-60" style={{ fontWeight: 400 }}>
                {author.years}
              </span>
            </button>
          ))}

          {/* Divider */}
          <span
            className="self-center text-[18px]"
            style={{ color: 'var(--c-border)' }}
          >
            |
          </span>

          {/* Лента изданий tab */}
          <button
            onClick={() => { setShowCatalog(s => !s); setShowBookmarks(false); }}
            className="px-5 py-2 rounded-full border-2 transition-all flex items-center gap-2"
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: '14px',
              borderColor: showCatalog ? 'var(--c-text-muted)' : 'var(--c-border)',
              backgroundColor: showCatalog ? 'var(--c-text-muted)' : 'transparent',
              color: showCatalog ? 'var(--c-bg)' : 'var(--c-text)',
            }}
          >
            <Library size={14} />
            Лента изданий
          </button>

          {/* Bookmarks tab */}
          {!showCatalog && (
            <button
              onClick={() => setShowBookmarks(s => !s)}
              className="px-5 py-2 rounded-full border-2 transition-all flex items-center gap-2"
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '14px',
                borderColor: showBookmarks ? '#E05555' : 'var(--c-border)',
                backgroundColor: showBookmarks ? '#E05555' : 'transparent',
                color: showBookmarks ? 'var(--c-bg)' : 'var(--c-text)',
              }}
            >
              <BookmarkCheck size={14} />
              Закладки
              {bookmarks.length > 0 && (
                <span
                  className="ml-1 w-5 h-5 rounded-full text-[11px] flex items-center justify-center"
                  style={{ backgroundColor: '#E8C84A', color: '#fff' }}
                >
                  {bookmarks.length}
                </span>
              )}
            </button>
          )}
        </div>

        {/* ── CATALOG VIEW ────────────────────────────────── */}
        {showCatalog && (
          <div>
            {groups.map(group => {
              const groupEditions = editions.filter(e => e.group === group.label);
              if (groupEditions.length === 0) return null;
              return (
                <div key={group.label} className="mb-14">
                  {/* Group heading */}
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="w-2 h-8 rounded-full"
                      style={{ backgroundColor: group.color }}
                    />
                    <h3
                      className="text-[22px] font-semibold"
                      style={{ fontFamily: 'var(--font-display)', color: group.color }}
                    >
                      {group.label}
                    </h3>
                    <div
                      className="flex-1 h-px"
                      style={{ backgroundColor: 'var(--c-border)' }}
                    />
                    <span
                      className="text-[12px] tracking-wider"
                      style={{ fontFamily: 'var(--font-body)', color: '#2E2E6A' }}
                    >
                      {groupEditions.length} {groupEditions.length === 1 ? 'издание' : groupEditions.length < 5 ? 'издания' : 'изданий'}
                    </span>
                  </div>

                  {/* Cards grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {groupEditions.map(edition => (
                      <div
                        key={edition.title}
                        className="rounded-xl overflow-hidden flex flex-col transition-all hover:translate-y-[-2px]"
                        style={{
                          backgroundColor: 'var(--c-surface)',
                          border: '2px solid #1E1E52',
                        }}
                      >
                        {/* Cover */}
                        <div
                          className="relative overflow-hidden"
                          style={{ height: '200px' }}
                        >
                          <img
                            src={edition.cover}
                            alt={edition.title}
                            className="w-full h-full object-cover"
                            style={{ objectPosition: 'top center' }}
                          />
                          <div
                            className="absolute inset-0"
                            style={{
                              background:
                                'linear-gradient(to top, rgba(13,28,18,0.9) 0%, transparent 50%)',
                            }}
                          />
                          {/* Year badge */}
                          <div
                            className="absolute top-3 right-3 px-2 py-1 rounded text-[11px] font-bold"
                            style={{
                              backgroundColor: 'rgba(13,28,18,0.85)',
                              color: group.color,
                              fontFamily: 'var(--font-body)',
                              backdropFilter: 'blur(4px)',
                            }}
                          >
                            {edition.year}
                          </div>
                        </div>

                        {/* Card body */}
                        <div className="p-4 flex flex-col flex-1">
                          <h4
                            className="text-[15px] font-semibold leading-tight mb-1"
                            style={{ fontFamily: 'var(--font-display)', color: 'var(--c-text)' }}
                          >
                            {edition.title}
                          </h4>
                          <p
                            className="text-[12px] mb-3"
                            style={{ fontFamily: 'var(--font-body)', color: 'var(--c-text-muted)' }}
                          >
                            {edition.author}
                          </p>
                          <p
                            className="text-[13px] leading-relaxed flex-1"
                            style={{
                              fontFamily: 'var(--font-body)',
                              color: '#C8CAEE',
                              display: '-webkit-box',
                              WebkitLineClamp: 3,
                              WebkitBoxOrient: 'vertical',
                              overflow: 'hidden',
                            }}
                          >
                            {edition.note}
                          </p>

                          {/* Footer */}
                          <div
                            className="flex items-center justify-between mt-4 pt-3"
                            style={{ borderTop: '2px solid #1E1E52' }}
                          >
                            <span
                              className="text-[11px]"
                              style={{ fontFamily: 'var(--font-body)', color: '#2E2E6A' }}
                            >
                              {edition.availability}
                            </span>
                            <a
                              href={edition.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 transition-all hover:opacity-70"
                              style={{ color: group.color }}
                              title="Открыть источник"
                            >
                              <ExternalLink size={14} />
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ── READER VIEW ─────────────────────────────────── */}
        {!showCatalog && (
          <>
            {/* Bookmarks panel */}
            {showBookmarks && (
              <div
                className="mb-8 rounded-xl p-6"
                style={{ backgroundColor: 'var(--c-surface)', border: '2px solid #1E1E52' }}
              >
                <h3
                  className="text-[14px] tracking-[0.12em] uppercase mb-4"
                  style={{ fontFamily: 'var(--font-body)', color: '#E05555' }}
                >
                  Сохранённые закладки
                </h3>
                {bookmarks.length === 0 ? (
                  <p
                    className="text-[14px]"
                    style={{ fontFamily: 'var(--font-body)', color: 'var(--c-text-muted)' }}
                  >
                    Нет сохранённых закладок. Нажмите <BookmarkCheck size={13} className="inline mx-1" /> во время чтения, чтобы сохранить место.
                  </p>
                ) : (
                  <div className="flex flex-wrap gap-3">
                    {bookmarks.map(id => {
                      const [work, secStr] = id.split('::');
                      const sec = parseInt(secStr, 10);
                      const e = texts[work];
                      const sectionTitle = e?.sections[sec]?.title ?? '';
                      return (
                        <button
                          key={id}
                          onClick={() => jumpToBookmark(id)}
                          className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all hover:opacity-80"
                          style={{
                            backgroundColor: 'var(--c-bg)',
                            border: '2px solid #1E1E52',
                            fontFamily: 'var(--font-body)',
                            fontSize: '13px',
                            color: 'var(--c-text)',
                          }}
                        >
                          <Bookmark size={12} style={{ color: '#E05555' }} />
                          <span style={{ color: 'var(--c-text-muted)' }}>{work}</span>
                          <span>·</span>
                          <span>{sectionTitle}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

            {/* Main reader layout */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Left: works list */}
              <div className="lg:col-span-1">
                <div
                  className="rounded-xl overflow-hidden"
                  style={{ backgroundColor: 'var(--c-surface)', border: '2px solid #1E1E52' }}
                >
                  {/* Author info header */}
                  <div className="p-5" style={{ borderBottom: '2px solid #1E1E52' }}>
                    <div
                      className="text-[11px] tracking-[0.15em] uppercase mb-1"
                      style={{ fontFamily: 'var(--font-body)', color: currentAuthor.color }}
                    >
                      {currentAuthor.tag}
                    </div>
                    <div
                      className="text-[15px] font-semibold"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {currentAuthor.name}
                    </div>
                    <div
                      className="text-[13px]"
                      style={{ fontFamily: 'var(--font-body)', color: 'var(--c-text-muted)' }}
                    >
                      {currentAuthor.years}
                    </div>
                  </div>

                  {/* Works list */}
                  <div className="p-2">
                    {currentAuthor.works.map(work => {
                      const workEntry = texts[work];
                      const isExcerpt = workEntry?.type === 'excerpt';
                      const isActive = activeWork === work;
                      return (
                        <button
                          key={work}
                          onClick={() => handleWorkChange(work)}
                          className="w-full text-left px-4 py-3 rounded-lg transition-all flex items-start gap-3"
                          style={{
                            backgroundColor: isActive ? 'var(--c-bg)' : 'transparent',
                            borderLeft: isActive
                              ? `3px solid ${currentAuthor.color}`
                              : '3px solid transparent',
                          }}
                        >
                          <Book
                            size={15}
                            className="mt-0.5 flex-shrink-0"
                            style={{ color: isActive ? currentAuthor.color : 'var(--c-text-muted)' }}
                          />
                          <div>
                            <div
                              className="text-[14px]"
                              style={{
                                fontFamily: 'var(--font-display)',
                                color: isActive ? 'var(--c-text)' : 'var(--c-text-muted)',
                                fontWeight: isActive ? 600 : 400,
                              }}
                            >
                              {work}
                            </div>
                            {isExcerpt && (
                              <span
                                className="text-[10px] px-2 py-0.5 rounded-full mt-1 inline-block"
                                style={{
                                  backgroundColor: '#16164A',
                                  color: 'var(--c-text-muted)',
                                  fontFamily: 'var(--font-body)',
                                }}
                              >
                                отрывок
                              </span>
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right: reader */}
              <div className="lg:col-span-3">
                {entry ? (
                  <div
                    className="rounded-xl overflow-hidden"
                    style={{ backgroundColor: 'var(--c-surface)', border: '2px solid #1E1E52' }}
                  >
                    {/* Reader toolbar */}
                    <div
                      className="flex items-center justify-between px-6 py-4"
                      style={{ borderBottom: '2px solid #1E1E52' }}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <BookOpen size={18} style={{ color: currentAuthor.color, flexShrink: 0 }} />
                        <span
                          className="text-[16px] font-semibold truncate"
                          style={{ fontFamily: 'var(--font-display)' }}
                        >
                          {activeWork}
                        </span>
                        {entry.type === 'excerpt' && (
                          <span
                            className="text-[11px] px-3 py-1 rounded-full flex-shrink-0"
                            style={{
                              backgroundColor: '#16164A',
                              color: 'var(--c-text-muted)',
                              fontFamily: 'var(--font-body)',
                              border: '2px solid #282868',
                            }}
                          >
                            отрывок
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2 flex-shrink-0">
                        <button
                          onClick={() => setFontSize(s => Math.max(13, s - 1))}
                          className="w-8 h-8 rounded flex items-center justify-center transition-all hover:opacity-80"
                          style={{
                            backgroundColor: 'var(--c-bg)',
                            fontFamily: 'var(--font-body)',
                            fontSize: '12px',
                            color: 'var(--c-text-muted)',
                          }}
                          title="Уменьшить шрифт"
                        >
                          A−
                        </button>
                        <button
                          onClick={() => setFontSize(s => Math.min(24, s + 1))}
                          className="w-8 h-8 rounded flex items-center justify-center transition-all hover:opacity-80"
                          style={{
                            backgroundColor: 'var(--c-bg)',
                            fontFamily: 'var(--font-body)',
                            fontSize: '14px',
                            color: 'var(--c-text-muted)',
                          }}
                          title="Увеличить шрифт"
                        >
                          A+
                        </button>
                        <button
                          onClick={toggleBookmark}
                          className="w-8 h-8 rounded flex items-center justify-center transition-all hover:opacity-80"
                          style={{ backgroundColor: 'var(--c-bg)' }}
                          title={isBookmarked ? 'Убрать закладку' : 'Добавить закладку'}
                        >
                          {isBookmarked ? (
                            <BookmarkCheck size={16} style={{ color: '#E05555' }} />
                          ) : (
                            <Bookmark size={16} style={{ color: 'var(--c-text-muted)' }} />
                          )}
                        </button>
                        {entry.externalUrl && (
                          <a
                            href={entry.externalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded flex items-center justify-center transition-all hover:opacity-80"
                            style={{ backgroundColor: 'var(--c-bg)' }}
                            title="Открыть источник"
                          >
                            <ExternalLink size={16} style={{ color: 'var(--c-text-muted)' }} />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Sections nav */}
                    {sections.length > 1 && (
                      <div
                        className="flex gap-1 px-6 py-3 overflow-x-auto"
                        style={{ borderBottom: '2px solid #1E1E52' }}
                      >
                        {sections.map((sec, i) => (
                          <button
                            key={i}
                            onClick={() => setActiveSectionIdx(i)}
                            className="flex-shrink-0 px-4 py-1.5 rounded-full text-[12px] transition-all"
                            style={{
                              fontFamily: 'var(--font-body)',
                              backgroundColor:
                                activeSectionIdx === i ? currentAuthor.color : 'var(--c-bg)',
                              color: activeSectionIdx === i ? 'var(--c-bg)' : 'var(--c-text-muted)',
                              fontWeight: activeSectionIdx === i ? 600 : 400,
                            }}
                          >
                            {sec.title}
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Excerpt notice */}
                    {entry.type === 'excerpt' && (
                      <div
                        className="mx-6 mt-5 px-5 py-4 rounded-lg flex items-start gap-3"
                        style={{ backgroundColor: '#16164A', border: '2px solid #282868' }}
                      >
                        <ExternalLink
                          size={16}
                          className="mt-0.5 flex-shrink-0"
                          style={{ color: 'var(--c-text-muted)' }}
                        />
                        <div>
                          <p
                            className="text-[13px] mb-2"
                            style={{ fontFamily: 'var(--font-body)', color: 'var(--c-text-muted)' }}
                          >
                            {entry.pdNote}
                          </p>
                          {entry.externalUrl && (
                            <a
                              href={entry.externalUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-[13px] transition-all hover:opacity-80"
                              style={{
                                fontFamily: 'var(--font-body)',
                                color: '#E05555',
                                fontWeight: 600,
                              }}
                            >
                              Читать полный текст →
                            </a>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Content */}
                    <div
                      ref={contentRef}
                      className="px-6 md:px-10 py-8"
                      style={{ maxHeight: '640px', overflowY: 'auto' }}
                    >
                      {section && (
                        <h3
                          className="text-[22px] mb-6"
                          style={{
                            fontFamily: 'var(--font-display)',
                            fontWeight: 700,
                            color: currentAuthor.color,
                          }}
                        >
                          {section.title}
                        </h3>
                      )}
                      {section && renderContent(section.content)}
                      {entry.type === 'full' && (
                        <p
                          className="mt-8 pt-6 text-[12px]"
                          style={{
                            fontFamily: 'var(--font-body)',
                            color: '#2E2E6A',
                            borderTop: '2px solid #1E1E52',
                          }}
                        >
                          {entry.pdNote}
                        </p>
                      )}
                    </div>

                    {/* Prev / Next */}
                    {sections.length > 1 && (
                      <div
                        className="flex items-center justify-between px-6 py-4"
                        style={{ borderTop: '2px solid #1E1E52' }}
                      >
                        <button
                          onClick={() => setActiveSectionIdx(i => Math.max(0, i - 1))}
                          className="flex items-center gap-2 px-4 py-2 text-[11px] tracking-widest uppercase transition-opacity disabled:opacity-30"
                          style={{ color: 'var(--c-text-muted)', fontFamily: 'var(--font-body)' }}
                        >
                          <ChevronLeft size={14} />
                          Назад
                        </button>
                        <span className="text-[11px]" style={{ color: '#2E2E6A', fontFamily: 'var(--font-body)' }}>
                          {activeSectionIdx + 1} / {sections.length}
                        </span>
                        <button
                          onClick={() => setActiveSectionIdx(i => Math.min(sections.length - 1, i + 1))}
                          disabled={activeSectionIdx === sections.length - 1}
                          className="flex items-center gap-2 px-4 py-2 text-[11px] tracking-widest uppercase transition-opacity disabled:opacity-30"
                          style={{ color: 'var(--c-text-muted)', fontFamily: 'var(--font-body)' }}
                        >
                          Вперёд
                          <ChevronRight size={14} />
                        </button>
                      </div>
                    )}
                  </div>
                ) : null}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
