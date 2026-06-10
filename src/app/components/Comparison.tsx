import { useState } from 'react';

export function Comparison() {
  const [hoveredColumn, setHoveredColumn] = useState<number | null>(null);
  const [focusedRow, setFocusedRow] = useState<number | null>(null);

  const columns = [
    { topBorder: '#E05555', tag: 'КУБОФУТУРИЗМ', name: '«ГИЛЕЯ»', years: '1910 &#x2013; 1915', keyFigure: 'Д. Бурлюк · В. Маяковский · В. Хлебников · А. Кручёных', tagline: 'Деструкция &#x2013; сломать, чтобы построить заново' },
    { topBorder: '#E8C84A', tag: 'ЭГО-ФУТУРИЗМ', name: '«ЭГО-ФУТУРИСТЫ»', years: '1911 &#x2013; 1914', keyFigure: 'И. Северянин · И. Игнатьев · В. Гнедов', tagline: 'Индивидуализация &#x2013; торжество абсолютного Я' },
    { topBorder: '#50B87A', tag: 'СИНТЕТИЧЕСКИЙ ПУТЬ', name: '«ЦЕНТРИФУГА»', years: '1913 &#x2013; 1917', keyFigure: 'Б. Пастернак · С. Бобров · Н. Асеев · Божидар', tagline: 'Рефлексия &#x2013; строить, а не разрушать' }
  ];


  const rows = [
    {
      label: 'К ТРАДИЦИИ',
      values: [
        'Тотальный разрыв. Сбросить Пушкина с Парохода Современности. На практике &#x2013; активное использование архаики и фольклора.',
        'Снобистское безразличие. Знаю традицию лучше вас &#x2013; именно поэтому имею право с ней играть.',
        'Избирательный диалог. Символизм прав насчёт сложности слова, но ошибается в мистике. Брать технику, отбрасывать метафизику.'
      ]
    },
    {
      label: 'ФУНКЦИЯ МАНИФЕСТА',
      values: [
        'Удар. Манифест пробивает стену равнодушия. Не приглашение к диалогу &#x2013; провокация.',
        'Догмат. Торжественное провозглашение новой веры. Исповедуя Эгоизм, непреложной истиной считаем &#x2013; интуицию.',
        'Трактат. Цель &#x2013; понять и объяснить, а не эпатировать. Читатель приглашается к размышлению.'
      ]
    },
    {
      label: 'К СЛОВУ',
      values: [
        'Материал для преобразования. Для А. Кручёных &#x2013; расплавить. Для В. Хлебникова &#x2013; раскрыть тайну. Для В. Маяковского &#x2013; взрывчатое вещество.',
        'Украшение и палитра. Неологизмы И. Северянина &#x2013; не разрушение, а расширение: грезэрка, олилиенен, экстазная.',
        'Живой организм. Внутреннее склонение &#x2013; слово раскрывается по собственным законам, независимо от авторского замысла.'
      ]
    },
    {
      label: 'ЛИРИЧЕСКИЙ ГЕРОЙ',
      values: [
        'Урбанистический бунтарь. Существо, которое страдает от несовместимости с миром и эту несовместимость делает оружием.',
        'Рафинированный эстет. Я, гений Игорь Северянин. Певец электрических, коктейльных, ананасовых радостей. Или &#x2013; радикальное молчание В. Гнедова.',
        'Свидетель, а не пророк. Поэт &#x2013; медиум, через которого говорит жизнь. Слагаются стихи навзрыд &#x2013; процесс происходит сам.'
      ]
    },
    {
      label: 'К МАРИНЕТТИ',
      values: [
        'Демонстрация возможности &#x2013; не образец. Псевдофутуристами назвал нас Ф. Маринетти? Значит, мы &#x2013; подлинно русские. Разрыв после визита 1914 г.',
        'Эклектичное заимствование урбанистической риторики при полном сохранении декадентской эстетики. Ближе к Бодлеру, чем к Ф. Маринетти.',
        'Дистанцирование. Ф. Маринетти говорил о мире. Мы говорим о слове. Это принципиально разные проекты.'
      ]
    },
    {
      label: 'СУДЬБА ПОСЛЕ 1917',
      values: [
        'В. Маяковский &#x2013; РОСТА &#x2013; ЛЕФ &#x2013; трагедия. В. Хлебников умирает в 1922, непризнанным. А. Кручёных на периферии. Д. Бурлюк эмигрирует в США.',
        'И. Северянин эмигрирует в Эстонию, пишет ностальгические стихи. В. Гнедов дожил до 1978 &#x2013; и почти ничего не публиковал. И. Игнатьев погиб в 21 год.',
        'Наиболее долговечное наследие. Б. Пастернак работает до 1960-х. Н. Асеев входит в советскую культуру. Синтез оказывается устойчивее крайности.'
      ]
    }
  ];

  return (
    <section id="comparison" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <div className="text-[11px] tracking-[0.2em] uppercase mb-4" style={{ fontFamily: 'var(--font-body)', color: '#6C76F0' }}>
            СРАВНЕНИЕ
          </div>
          <h2 className="text-[52px] mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>
            Три лица авангарда
          </h2>
          <p className="text-[18px] mb-3" style={{ fontFamily: 'var(--font-body)', color: 'var(--c-text-muted)' }}>
            Одно движение &#x2013; три художественные программы
          </p>
          <p className="text-[13px]" style={{ fontFamily: 'var(--font-body)', color: '#6C76F0' }}>
            Нажмите на строку, чтобы выделить её
          </p>
        </div>

        {/* ── Десктоп: сетка с отдельной колонкой меток ── */}
        <div
          className="hidden lg:grid"
          style={{ gridTemplateColumns: '148px 1fr 1fr 1fr' }}
        >
          {/* Шапка: пустая ячейка + 3 заголовка */}
          <div />
          {columns.map((column, colIndex) => (
            <div
              key={colIndex}
              className="transition-all duration-300 px-1"
              style={{
                opacity: hoveredColumn === null || hoveredColumn === colIndex ? 1 : 0.8,
                transform: hoveredColumn === colIndex ? 'translateY(-4px)' : 'translateY(0)'
              }}
              onMouseEnter={() => setHoveredColumn(colIndex)}
              onMouseLeave={() => setHoveredColumn(null)}
            >
              <div
                className="rounded-t-lg p-5"
                style={{
                  borderTop: `6px solid ${column.topBorder}`,
                  backgroundColor: 'var(--c-surface-alt)',
                  boxShadow: hoveredColumn === colIndex ? `0 0 20px ${column.topBorder}40` : 'none'
                }}
              >
                <div className="text-[11px] tracking-[0.2em] uppercase mb-3" style={{ fontFamily: 'var(--font-body)', color: column.topBorder }}>
                  {column.tag}
                </div>
                <h3 className="text-[28px] mb-2" style={{ fontFamily: 'var(--font-display)', fontWeight: 900 }}
                  dangerouslySetInnerHTML={{ __html: column.name }}
                />
                <div className="text-[13px] mb-3" style={{ fontFamily: 'var(--font-body)', color: 'var(--c-text-muted)' }}
                  dangerouslySetInnerHTML={{ __html: column.years }}
                />
                <div className="text-[12px] mb-4" style={{ fontFamily: 'var(--font-body)', color: 'var(--c-text)' }}>{column.keyFigure}</div>
                <p className="text-[13px] leading-[1.6]" style={{ fontFamily: 'var(--font-quote)', fontStyle: 'italic', color: 'var(--c-text-muted)' }}
                  dangerouslySetInnerHTML={{ __html: column.tagline }}
                />
              </div>
            </div>
          ))}

          {/* Строки данных */}
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} style={{ display: 'contents' }}>
              {/* Ячейка метки – слева от контента */}
              <div
                className="border-t flex items-start cursor-pointer pr-3"
                style={{
                  borderColor: 'var(--c-border)',
                  paddingTop: '22px',
                  paddingBottom: '22px',
                  backgroundColor: focusedRow === rowIndex ? 'var(--c-surface-alt)' : 'transparent',
                }}
                onClick={() => setFocusedRow(focusedRow === rowIndex ? null : rowIndex)}
              >
                <div
                  className="text-[10px] tracking-[0.15em] uppercase leading-[1.5]"
                  style={{ fontFamily: 'var(--font-body)', color: focusedRow === rowIndex ? '#6C76F0' : 'var(--c-text-muted)' }}
                >
                  {row.label}
                </div>
              </div>

              {/* Ячейки контента */}
              {columns.map((column, colIndex) => (
                <div
                  key={colIndex}
className="px-1"
                >
                  <div
                    className="border-t h-full cursor-pointer transition-all duration-200"
                    style={{
                      backgroundColor: focusedRow === rowIndex ? 'var(--c-surface-alt)' : 'var(--c-surface)',
                      borderColor: 'var(--c-border)',
                      borderLeft: focusedRow === rowIndex ? `3px solid ${column.topBorder}` : '3px solid transparent',
                      padding: focusedRow === rowIndex ? '20px 20px 20px 48px' : '20px'
                    }}
                    onClick={() => setFocusedRow(focusedRow === rowIndex ? null : rowIndex)}
                    onMouseEnter={() => setHoveredColumn(colIndex)}
                    onMouseLeave={() => setHoveredColumn(null)}
                  >
                    <p className="text-[14px] leading-[1.7]" style={{ fontFamily: 'var(--font-body)', color: 'var(--c-text)' }}
                      dangerouslySetInnerHTML={{ __html: row.values[colIndex] }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Mobile */}
        <div className="grid grid-cols-1 gap-8 lg:hidden">
          {columns.map((column, colIndex) => (
            <div key={colIndex}>
              <div
                className="rounded-t-lg p-6"
                style={{
                  borderTop: `6px solid ${column.topBorder}`,
                  backgroundColor: 'var(--c-surface-alt)'
                }}
              >
                <div className="text-[11px] tracking-[0.2em] uppercase mb-3" style={{ fontFamily: 'var(--font-body)', color: column.topBorder }}>
                  {column.tag}
                </div>
                <h3 className="text-[32px] mb-2" style={{ fontFamily: 'var(--font-display)', fontWeight: 900 }}
                  dangerouslySetInnerHTML={{ __html: column.name }}
                />
                <div className="text-[14px] mb-3" style={{ fontFamily: 'var(--font-body)', color: 'var(--c-text-muted)' }}
                  dangerouslySetInnerHTML={{ __html: column.years }}
                />
                <div className="text-[13px] mb-4" style={{ fontFamily: 'var(--font-body)', color: 'var(--c-text)' }}>{column.keyFigure}</div>
                <p className="text-[14px] leading-[1.6]" style={{ fontFamily: 'var(--font-quote)', fontStyle: 'italic', color: 'var(--c-text-muted)' }}
                  dangerouslySetInnerHTML={{ __html: column.tagline }}
                />
              </div>
              <div className="space-y-0">
                {rows.map((row, rowIndex) => (
                  <div
                    key={rowIndex}
                    className="border-t cursor-pointer transition-all duration-200"
                    style={{
                      backgroundColor: focusedRow === rowIndex ? 'var(--c-surface-alt)' : 'var(--c-surface)',
                      borderColor: 'var(--c-border)',
                      borderLeft: focusedRow === rowIndex ? `3px solid ${column.topBorder}` : '3px solid transparent',
                      padding: focusedRow === rowIndex ? '24px 24px 24px 56px' : '24px'
                    }}
                    onClick={() => setFocusedRow(focusedRow === rowIndex ? null : rowIndex)}
                  >
                    {colIndex === 0 && (
                      <div
                        className="text-[10px] tracking-[0.15em] uppercase mb-3"
                        style={{ fontFamily: 'var(--font-body)', color: focusedRow === rowIndex ? '#6C76F0' : 'var(--c-text-muted)' }}
                      >
                        {row.label}
                      </div>
                    )}
                    <p className="text-[15px] leading-[1.7]" style={{ fontFamily: 'var(--font-body)', color: 'var(--c-text)' }}
                      dangerouslySetInnerHTML={{ __html: row.values[colIndex] }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
