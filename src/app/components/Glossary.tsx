import { useState } from 'react';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';

const terms = [
  {
    term: 'Заумь',
    transliteration: '',
    group: 'Гилея',
    color: '#E05555',
    definition: 'Поэтический язык, освобождённый от конвенционального смысла: слово существует ради звука и ритма, а не словарного значения. Придуман Алексеем Крученых в 1913 году.',
    example: '«Дыр бул щыл убешщур» – ни одного общеупотребительного слова, но текст имеет ритмическую и фонетическую структуру. Крученых настаивал, что этот текст «по-русски».',
    related: ['Корнесловие', 'Самовитое слово']
  },
  {
    term: 'Будетляне',
    transliteration: '«те, кто будет»',
    group: 'Гилея',
    color: '#E05555',
    definition: 'Хлебниковское название для участников кубофутуристического движения. Не «футуристы» (от латинского futurum), а русское «будущее». Подчёркивало национальный характер движения.',
    example: '«Будетляне наши поиски предваряли бессильными отрицаниями» – из эго-футуристического манифеста. Обе группы использовали термин, но с разным наполнением.',
    related: ['Гилея', 'Корнесловие']
  },
  {
    term: 'Корнесловие',
    transliteration: '',
    group: 'Гилея',
    color: '#E05555',
    definition: 'Хлебниковский метод создания неологизмов из исконных корней. Не произвол – строгая морфология. Слово раскрывает то, что уже заложено в языке, а не уничтожает смысл.',
    example: '«О, рассмейтесь, смехачи! О, засмейтесь, смехачи!» – корень «смех–» развёртывается во все грамматические возможности: глагол, существительное, наречие, причастие.',
    related: ['Заумь', 'Самовитое слово']
  },
  {
    term: 'Самовитое слово',
    transliteration: '«самостоятельное слово»',
    group: 'Гилея',
    color: '#E05555',
    definition: 'Концепция самоценности слова, независимо от его значения. Слово существует не как знак, указывающий на предмет, – слово само по себе и есть предмет. Ключевой термин обоих манифестов «Слово как таковое».',
    example: '«Лилия красива, но слово «лилия» захватано. Поэтому я называю лилию «ьь» – и первоначальная чистота восстановлена» – Крученых.',
    related: ['Заумь', 'Корнесловие']
  },
  {
    term: 'Эгофутуризм',
    transliteration: '',
    group: 'Эго-футуризм',
    color: '#E8C84A',
    definition: 'Петербургское направление, основанное Иваном Игнатьевым в 1911 году. Центральная идея – возвышение абсолютного «Я» над коллективным. Теоретически ближе к символизму, чем к кубофутуризму.',
    example: '«Я, гений Игорь Северянин, своей победой упоён!» – манифест в одной строке. Абсолютное «Я» – не поза, а программа.',
    related: ['Гилея', 'Центрифуга']
  },
  {
    term: 'Трансменталь',
    transliteration: '',
    group: 'Эго-футуризм',
    color: '#E8C84A',
    definition: 'Эго-футуристический эквивалент зауми: состояние сознания, выходящее за пределы рациональной мысли. Если заумь – язык вне смысла, трансменталь – сознание вне логики.',
    example: 'Игнатьев писал о «трансментальной интуиции» как основе творчества – противопоставляя её как гилейскому коллективному бунту, так и символистской рефлексии.',
    related: ['Заумь', 'Эгофутуризм']
  },
  {
    term: 'Сдвиг',
    transliteration: '«смещение»',
    group: 'Центрифуга',
    color: '#50B87A',
    definition: 'Термин «Центрифуги»: перемещение слова или образа в нестандартный контекст, благодаря чему происходит трансформация смысла изнутри. Слово узнаётся – но перестаёт быть прежним.',
    example: '«Февраль. Достать чернил и плакать! / Пока грохочущая слякоть / весною чёрною горит» – Пастернак. «Грохочущая слякоть» – сдвиг: слякоть не должна грохотать.',
    related: ['Самовитое слово', 'Внутреннее склонение']
  },
  {
    term: 'Внутреннее склонение',
    transliteration: '',
    group: 'Центрифуга',
    color: '#50B87A',
    definition: 'Ключевой термин Боброва: слово развивается по собственным законам, независимо от воли автора. Поэт открывает эти законы, а не изобретает их. «Слагаются стихи навзрыд» – не метафора, а описание метода.',
    example: 'Пастернак описывал творческий процесс как нечто, происходящее помимо сознания: «Я их не пишу – они сами пишутся». Это и есть «внутреннее склонение».',
    related: ['Сдвиг', 'Центрифуга']
  },
  {
    term: 'Железобетонные поэмы',
    transliteration: '',
    group: 'Гилея',
    color: '#E05555',
    definition: 'Жанр, придуманный Василием Каменским: текст располагается на странице не линейно, а как визуальный объект. Слова, цифры, знаки образуют конфигурацию, которую нужно рассматривать, а не только читать.',
    example: 'Книга «Танго с коровами» (1914) содержит поэмы, напечатанные на одном листе бумаги в форме геометрических конфигураций – прообраз конкретной поэзии.',
    related: ['Книга как объект', 'Будетляне']
  },
  {
    term: 'Книга как объект',
    transliteration: '',
    group: 'Гилея',
    color: '#E05555',
    definition: 'Концепция футуристической книги как самостоятельного художественного объекта, а не прозрачного медиума для текста. Нестандартные форматы, рукописный текст, необычные материалы.',
    example: '«Садок судей» (1910) напечатан на обороте обоев. «Мирскóнца» (1912) – рукописный текст, перевёрнутый: читать можно с любого конца. «Взорваль» (1913) – листы разных размеров и фактур.',
    related: ['Железобетонные поэмы', 'Докладчество']
  },
  {
    term: 'Докладчество',
    transliteration: '',
    group: 'Все группы',
    color: 'var(--c-text-muted)',
    definition: 'Устные выступления на вечерах – важнейший формат авангарда. Маяковский читал стихи стоя, на трибуне. Северянин устраивал «поэзоконцерты» с музыкальным сопровождением. Гнедов «читал» «Поэму конца» жестом без слов.',
    example: 'Турне гилейцев по 17 городам России в 1913–1914 годах – образцовый пример докладчества как стратегии: чтение как перформанс, поэт как актёр.',
    related: ['Пощёчина', 'Эпатаж']
  },
  {
    term: 'Пощёчина',
    transliteration: '',
    group: 'Гилея',
    color: '#E05555',
    definition: 'Метафора провокации как художественного жеста. «Пощёчина общественному вкусу» – не только название манифеста, но и стратегия: шокировать, вывести из равновесия, разрушить привычное восприятие.',
    example: 'Сама структура манифеста 1912 года – удар без аргументации. Авторы не объясняют, почему Пушкин устарел: они просто «сбрасывают» его – и читатель вынужден реагировать.',
    related: ['Эпатаж', 'Манифест как жанр']
  },
  {
    term: 'Эпатаж',
    transliteration: 'фр. épater',
    group: 'Гилея',
    color: '#E05555',
    definition: 'Сознательная провокация публики: раскрашенные лица, абсурдные декларации, скандалы на лекциях. Эпатаж – не хулиганство, а стратегия: публика, выведенная из равновесия, слышит лучше.',
    example: '«Жёлтая кофта» Маяковского, нарисованные деревянные ложки в петлицах Бурлюка, расписанные лица – всё это работало как реклама задолго до соответствующих маркетинговых теорий.',
    related: ['Пощёчина', 'Докладчество']
  },
  {
    term: 'Манифест как жанр',
    transliteration: '',
    group: 'Все группы',
    color: 'var(--c-text-muted)',
    definition: 'Русский авангард превратил манифест в самостоятельный литературный жанр. Манифест – не программный документ, а перформативный акт: он не описывает позицию, он её создаёт. Читая манифест, ты становишься участником.',
    example: '«Мы приказываем чтить права поэтов» – «Пощёчина». Перформативный глагол «приказываем» создаёт иерархию здесь и сейчас, в момент чтения.',
    related: ['Пощёчина', 'Эпатаж']
  },
  {
    term: 'Авангард',
    transliteration: '«передовой отряд»',
    group: 'Все группы',
    color: 'var(--c-text-muted)',
    definition: 'Военная метафора, применённая к искусству: художники, идущие впереди истории. В русском контексте – специфически связана с революционным ожиданием: искусство опережает реальность, которая должна за ним последовать.',
    example: 'Маяковский: «Горе стране, не имеющей своих будетлян! Горе армии, у которой нет разведчиков!» – авангард как буквальная разведка будущего.',
    related: ['Будетляне', 'Манифест как жанр']
  },
  {
    term: 'ЛЕФ',
    transliteration: 'Левый Фронт Искусств',
    group: 'После 1917',
    color: '#50B87A',
    definition: 'Объединение, основанное Маяковским в 1922 году. Наследник кубофутуризма в советских условиях: искусство как инструмент революции, производственничество, документальность. Существовал до 1929 года.',
    example: 'ЛЕФ издавал одноимённый журнал (1923–1925) и «Новый ЛЕФ» (1927–1928). Среди участников – Брик, Родченко, Кирсанов. Маяковский закрыл организацию сам, разочаровавшись в ней.',
    related: ['Авангард', 'Будетляне']
  },
  {
    term: 'Поэзоконцерт',
    transliteration: '',
    group: 'Эго-футуризм',
    color: '#E8C84A',
    definition: 'Жанр, придуманный Северяниным: поэтический вечер с музыкальным сопровождением, где стихи подаются как романсы или оперные арии. Противоположность гилейским «докладчествам» – не агрессия, а соблазн.',
    example: 'Северянин читал стихи нараспев, с закрытыми глазами, в образе томного гения. Его аудитория приходила не анализировать – переживать. Это изобретение поп-концерта avant la lettre.',
    related: ['Докладчество', 'Эгофутуризм']
  },
  {
    term: 'Лучизм',
    transliteration: '',
    group: 'Визуальный авангард',
    color: 'var(--c-text-muted)',
    definition: 'Живописный метод Михаила Ларионова: изображать не предметы, а световые лучи от них. Художественный аналог зауми – как заумь освобождает слово от значения, лучизм освобождает живопись от предмета.',
    example: 'Картины Ларионова в технике лучизма (1912–1913) – цветные штрихи, пересекающие холст без видимого предмета. Современники не понимали их – как и зауми Крученых.',
    related: ['Заумь', 'Авангард']
  },
  {
    term: 'Неопримитивизм',
    transliteration: '',
    group: 'Визуальный авангард',
    color: 'var(--c-text-muted)',
    definition: 'Обращение к иконе, лубку, вышивке, народной игрушке как противоядию от декадентской рафинированности. У Гончаровой и раннего Ларионова – параллель хлебниковскому поиску исконных корней языка.',
    example: 'Гончарова иллюстрировала «Мирскóнца» и «Игру в аду» Хлебникова и Крученых. Её народные образы и хлебниковская архаическая лексика образовывали единое высказывание.',
    related: ['Корнесловие', 'Книга как объект']
  },
  {
    term: 'Оговорка',
    transliteration: '«оговорка, обмолвка»',
    group: 'Центрифуга',
    color: '#50B87A',
    definition: 'Термин, использованный Пастернаком: поэтический текст – это всегда «оговорка» относительно того, что хотел сказать поэт. Поэзия выражает то, что не вмещается в прямое высказывание.',
    example: '«Февраль. Достать чернил и плакать!» – это не то, что Пастернак «хотел сказать», а то, что сказалось вопреки намерению. Оговорка честнее речи.',
    related: ['Внутреннее склонение', 'Сдвиг']
  }
];

const groupColors: Record<string, string> = {
  'Гилея': '#E05555',
  'Эго-футуризм': '#E8C84A',
  'Центрифуга': '#50B87A',
  'Все группы': 'var(--c-text-muted)',
  'Визуальный авангард': 'var(--c-text-muted)',
  'После 1917': '#50B87A'
};

function FadeDef({ text, color }: { text: string; color: string }) {
  return (
    <div>
      <div className="text-[11px] tracking-[0.12em] uppercase mb-2" style={{ fontFamily: 'var(--font-body)', color }}>
        Определение
      </div>
      <p className="text-[15px] leading-[1.75]" style={{ fontFamily: 'var(--font-body)', color: 'var(--c-text)', animation: 'glossaryFadeIn 0.4s ease both' }}>
        {text}
      </p>
    </div>
  );
}

export function Glossary() {
  const [search, setSearch] = useState('');
  const [expanded, setExpanded] = useState<string | null>(null);
  const [filterGroup, setFilterGroup] = useState<string | null>(null);

  const groups = Array.from(new Set(terms.map(t => t.group)));

  const filtered = terms.filter(t => {
    const matchSearch = search.length < 2 ||
      t.term.toLowerCase().includes(search.toLowerCase()) ||
      t.definition.toLowerCase().includes(search.toLowerCase());
    const matchGroup = !filterGroup || t.group === filterGroup;
    return matchSearch && matchGroup;
  });

  return (
    <section id="glossary" className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="mb-16 text-center">
          <div className="text-[11px] tracking-[0.2em] uppercase mb-4" style={{ fontFamily: 'var(--font-body)', color: '#6C76F0' }}>
            ТЕРМИНЫ
          </div>
          <h2 className="text-[52px] mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>
            Словарь авангарда
          </h2>
          <p className="text-[18px] mb-8" style={{ fontFamily: 'var(--font-body)', color: 'var(--c-text-muted)' }}>
            {terms.length} ключевых понятий русского футуризма
          </p>

          {/* Search */}
          <div className="relative mb-6 max-w-md mx-auto">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: 'var(--c-text-muted)' }} />
            <input
              type="text"
              placeholder="Поиск по термину или определению..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg text-[14px] outline-none"
              style={{
                fontFamily: 'var(--font-body)',
                backgroundColor: 'var(--c-surface)',
                color: 'var(--c-text)',
                border: '2px solid #1E1E52'
              }}
            />
          </div>

          {/* Group filter */}
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setFilterGroup(null)}
              className="px-4 py-1.5 rounded-full text-[12px] border transition-all"
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                borderColor: !filterGroup ? '#6C76F0' : 'var(--c-border)',
                backgroundColor: !filterGroup ? '#6C76F0' : 'transparent',
                color: !filterGroup ? 'var(--c-bg)' : 'var(--c-text)'
              }}
            >
              Все
            </button>
            {groups.map(g => (
              <button
                key={g}
                onClick={() => setFilterGroup(filterGroup === g ? null : g)}
                className="px-4 py-1.5 rounded-full text-[12px] border transition-all"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  borderColor: filterGroup === g ? groupColors[g] : 'var(--c-border)',
                  backgroundColor: filterGroup === g ? groupColors[g] : 'transparent',
                  color: filterGroup === g ? 'var(--c-bg)' : 'var(--c-text)'
                }}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        {/* Terms list */}
        <div className="space-y-3">
          {filtered.length === 0 && (
            <div className="text-center py-12" style={{ fontFamily: 'var(--font-body)', color: 'var(--c-text-muted)' }}>
              Ничего не найдено. Попробуйте другой запрос.
            </div>
          )}
          {filtered.map((t) => {
            const isOpen = expanded === t.term;
            return (
              <div
                key={t.term}
                className="rounded-lg overflow-hidden"
                style={{ backgroundColor: 'var(--c-surface)' }}
              >
                {/* Term header */}
                <button
                  className="w-full flex items-center justify-between p-5 text-left"
                  onClick={() => setExpanded(isOpen ? null : t.term)}
                >
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    <span
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: t.color }}
                    />
                    <div className="min-w-0">
                      <span className="text-[18px]" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--c-text)' }}>
                        {t.term}
                      </span>
                      {t.transliteration && (
                        <span className="ml-3 text-[13px]" style={{ fontFamily: 'var(--font-body)', color: 'var(--c-text-muted)', fontStyle: 'italic' }}>
                          {t.transliteration}
                        </span>
                      )}
                    </div>
                    <span
                      className="hidden md:inline-block px-2 py-0.5 rounded text-[11px] ml-2 flex-shrink-0"
                      style={{ fontFamily: 'var(--font-body)', fontWeight: 600, backgroundColor: `${t.color}20`, color: t.color }}
                    >
                      {t.group}
                    </span>
                  </div>
                  <div style={{ color: 'var(--c-text-muted)', flexShrink: 0, marginLeft: '12px' }}>
                    {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                </button>

                {/* Expanded content */}
                {isOpen && (
                  <div className="px-5 pb-6" style={{ borderTop: '2px solid #1E1E52' }}>
                    <style>{`@keyframes glossaryFadeIn { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }`}</style>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-5">
                      <FadeDef text={t.definition} color={t.color} key={t.term} />
                      <div>
                        <div className="text-[11px] tracking-[0.12em] uppercase mb-2" style={{ fontFamily: 'var(--font-body)', color: 'var(--c-text-muted)' }}>
                          Пример
                        </div>
                        <p className="text-[14px] leading-[1.7]" style={{ fontFamily: 'var(--font-body)', color: 'var(--c-text-muted)' }}>
                          {t.example}
                        </p>
                        {t.related.length > 0 && (
                          <div className="mt-4">
                            <div className="text-[11px] tracking-[0.12em] uppercase mb-2" style={{ fontFamily: 'var(--font-body)', color: 'var(--c-text-muted)' }}>
                              Связанные термины
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {t.related.map(r => (
                                <button
                                  key={r}
                                  onClick={(e) => { e.stopPropagation(); setSearch(r); setExpanded(r); }}
                                  className="px-3 py-1 rounded-full text-[12px] transition-all hover:opacity-80"
                                  style={{ fontFamily: 'var(--font-body)', backgroundColor: 'var(--c-bg)', color: t.color, border: `1px solid ${t.color}40` }}
                                >
                                  {r}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center text-[13px]" style={{ fontFamily: 'var(--font-body)', color: 'var(--c-border)' }}>
          Показано {filtered.length} из {terms.length} терминов
        </div>
      </div>
    </section>
  );
}
