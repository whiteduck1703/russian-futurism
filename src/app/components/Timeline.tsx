import { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const events = [
  {
    year: '1909',
    color: '#50B87A',
    title: 'Манифест Ф. Маринетти в России',
    text: 'Перевод итальянского «Манифеста футуризма» публикуется в русской прессе. Русские авангардисты воспримут его как демонстрацию возможности – возможности искусства как скандала.',
    detail: 'Ф. Маринетти опубликовал свой «Манифест футуризма» в парижском «Фигаро» в феврале 1909 года. Русский перевод появился практически немедленно. Реакция была неоднозначной: одни увидели в нём образец для подражания, другие – угрозу. В. Хлебников и гилейцы позднее настаивали на принципиальном отличии русского футуризма от итальянского: там – машина и скорость, здесь – слово и его тайна.'
  },
  {
    year: '1910',
    color: '#E05555',
    title: '«Садок судей I» и рождение «Гилеи»',
    text: 'Первый кубофутуристический альманах. Костяк группы – Д. Бурлюк, В. Хлебников, В. Каменский – собрался в имении Чернянка. Название «Гилея» – от греческого названия земли скифов.',
    detail: 'Альманах «Садок судей» был напечатан на обороте обоев – не из экономии, а как художественный жест: материальность книги стала частью высказывания. В сборник вошли стихи В. Хлебникова, В. Каменского, Д. Бурлюка и других. Имение Чернянка в Таврической губернии принадлежало семье Бурлюков – именно там в 1908–1910 годах складывалось ядро будущей «Гилеи». Название, предложенное В. Хлебниковым, отсылало к скифскому происхождению авангарда.'
  },
  {
    year: '1912',
    color: '#E05555',
    title: '«Пощёчина общественному вкусу»',
    text: 'Главный манифест русского футуризма. «Бросить Пушкина, Достоевского, Толстого и проч. с Парохода Современности». Манифест как таран – без аргументов, только удар.',
    detail: 'Манифест вышел в декабре 1912 года в одноимённом альманахе. Подписали четверо: Д. Бурлюк, А. Кручёных, В. Маяковский, В. Хлебников. Ключевые требования: право на произвольные неологизмы, «непреодолимую ненависть к существовавшему языку», право «стоять на глыбе слова "мы" среди моря свиста и негодования». Реакция прессы была именно такой, какой и хотели авторы: скандал, насмешки, цитирование. Цель была достигнута.'
  },
  {
    year: '1912',
    color: '#E8C84A',
    title: 'Академия Эго-Поэзии',
    text: 'И. Игнатьев основывает «Академию Эго-Поэзии (Вселенский Футуризм)». Против коллективного «Мы» гилейцев – абсолютное личное «Я».',
    detail: 'Петербургский эго-футуризм развивался параллельно московскому кубофутуризму, но принципиально иначе. Если «Гилея» строила коллективный бунт («нам стоять на глыбе слова МЫ»), И. Игнатьев и И. Северянин возвышали абсолютную личность. «Академия» издавала альманахи, проводила вечера; И. Северянин уже в 1912 году собирал полные залы.'
  },
  {
    year: '1913',
    color: '#E05555',
    title: 'Турне и «Победа над Солнцем»',
    text: 'Гастроли по 17 городам России: Харьков, Одесса, Симферополь. Скандал как реклама, провокация как стратегия. Премьера оперы с декорациями Малевича.',
    detail: 'Турне Д. Бурлюка, В. Маяковского и В. Каменского по 17 городам в конце 1913 – начале 1914 года было тщательно спланированной провокацией. Жёлтые кофты, нарисованные на лицах иероглифы, деревянные ложки в петлицах – всё это работало как реклама задолго до соответствующих маркетинговых теорий. Декабрьская премьера оперы «Победа над Солнцем» (либретто А. Кручёных, музыка Матюшина) с декорациями Малевича стала первым опытом тотального авангардного спектакля.'
  },
  {
    year: '1913',
    color: '#50B87A',
    title: 'Рождение «Центрифуги»',
    text: 'Московское издательство становится третьей силой футуризма. С. Бобров, Б. Пастернак, Н. Асеев – «третий путь»: не бунт, не эстетизм, но исследование.',
    detail: 'Издательство «Центрифуга» основал С. Бобров в 1913 году. Первоначально оно выпускало книги молодых поэтов без определённой программы, но постепенно сформировало собственную эстетику: «внутреннее склонение слова», синтез традиции и эксперимента. Б. Пастернак публиковался здесь с самого начала; «Центрифуга» стала для него основной литературной площадкой вплоть до 1917 года.'
  },
  {
    year: '1914',
    color: '#E8C84A',
    title: 'Визит Ф. Маринетти и разрывы',
    text: 'Ф. Маринетти называет русских «псевдофутуристами». И. Северянин выходит из «Академии». Самоубийство Ивана Игнатьева в 21 год.',
    detail: 'Визит Ф. Маринетти в Россию в январе – феврале 1914 года обнажил противоречия внутри движения. Гилейцы бойкотировали его выступления, демонстративно расклеивая листовки «долой Ф. Маринетти». И. Северянин, напротив, принял итальянца – и именно в этот момент окончательно разошёлся с И. Игнатьевым. В январе 1914 года И. Игнатьев перерезал себе горло бритвой в ночь свадьбы. Ему было 21.'
  },
  {
    year: '1915',
    color: '#E05555',
    title: '«Облако в штанах»',
    text: 'Тетраптих В. Маяковского – вершина поэтического кубофутуризма. Четыре «долой»: вашу любовь, ваше искусство, ваш строй, вашу религию.',
    detail: '«Облако в штанах» – поэма в четырёх частях, каждая из которых начинается с «долой». В. Маяковский называл её «катехизисом сегодняшнего искусства». Написана в 1914–1915 годах, прошла цензуру в изуродованном виде (часть строф пришлось изъять). Это самая личная и одновременно самая ораторская вещь В. Маяковского – редкое для него сочетание. Именно здесь конфликт между трибуном и лириком выражен с наибольшей силой.'
  },
  {
    year: '1917',
    color: '#50B87A',
    title: 'Революция и трансформация',
    text: 'В. Маяковский уходит в советскую агитацию. Б. Пастернак продолжает лирику. Три группы распадаются – их наследие остаётся.',
    detail: 'Революция 1917 года по-разному отозвалась в судьбах участников авангарда. В. Маяковский принял её восторженно и немедленно включился в агитацию. Б. Пастернак писал «Сестру мою – жизнь» – книгу, где революция присутствует как атмосфера, а не как тема. В. Хлебников странствовал по фронтам Гражданской войны. «Центрифуга» как организация прекратила существование; «Гилея» распалась ещё раньше. Но поэты продолжали работать.'
  },
  {
    year: '1922',
    color: 'var(--c-text-muted)',
    title: 'Конец эпохи',
    text: '«Зангези» В. Хлебникова – последний великий текст движения. В. Хлебников умирает. Футуризм растворяется в ЛЕФе и советской культуре.',
    detail: '1922 год – рубеж. В мае умер В. Хлебников, так и не дождавшийся широкого признания. Посмертно вышел «Зангези» – «сверхповесть» в 20 плоскостях, итоговый текст всего его проекта. В том же году В. Маяковский основал ЛЕФ – попытку институализировать авангард в советских условиях. Но что-то уже ушло: движение превратилось в организацию, бунт – в программу. Эпоха кончилась.'
  }
];

export function Timeline() {
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null);
  const [visibleEvents, setVisibleEvents] = useState<Set<number>>(new Set());
  const eventRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lastNudgeTime = useRef<number>(0);
  const sectionRef = useRef<HTMLElement>(null);
  const hasAutoPlayedRef = useRef(false);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    eventRefs.current.forEach((ref, index) => {
      if (!ref) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setVisibleEvents(prev => {
                if (prev.has(index)) return prev;
                const next = new Set(prev);
                next.add(index);
                return next;
              });
              // Nudge to partially reveal next block
              if (index < events.length - 1) {
                setTimeout(() => {
                  const now = Date.now();
                  if (now - lastNudgeTime.current < 800) return;
                  const nextRef = eventRefs.current[index + 1];
                  if (nextRef) {
                    const rect = nextRef.getBoundingClientRect();
                    if (rect.top > window.innerHeight * 0.72) {
                      lastNudgeTime.current = now;
                      window.scrollBy({ top: 160, behavior: 'smooth' });
                    }
                  }
                }, 1500);
              }
              observer.disconnect();
            }
          });
        },
        { threshold: 0.45 }
      );
      observer.observe(ref);
      observers.push(observer);
    });

    return () => observers.forEach(obs => obs.disconnect());
  }, []);

  // Каскадное появление всех событий при входе секции в viewport
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !hasAutoPlayedRef.current) {
            hasAutoPlayedRef.current = true;
            events.forEach((_, index) => {
              setTimeout(() => {
                setVisibleEvents(prev => {
                  if (prev.has(index)) return prev;
                  const next = new Set(prev);
                  next.add(index);
                  return next;
                });
              }, index * 180);
            });
          } else if (!entry.isIntersecting) {
            hasAutoPlayedRef.current = false;
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="timeline" ref={sectionRef} className="py-24 md:py-32 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="mb-20 text-center">
          <div className="text-[11px] tracking-[0.2em] uppercase mb-4" style={{ fontFamily: 'var(--font-body)', color: '#6C76F0' }}>
            ХРОНОЛОГИЯ
          </div>
          <h2 className="text-[52px] mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>
            О движении
          </h2>
          <p className="text-[18px]" style={{ fontFamily: 'var(--font-body)', color: 'var(--c-text-muted)' }}>
            Ключевые события 1909–1930 гг.
          </p>
        </div>

        <div className="relative">
          <div
            className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 hidden md:block"
            style={{ backgroundColor: 'var(--c-border)' }}
          />

          <div className="space-y-12">
            {events.map((event, index) => (
              <div
                key={index}
                ref={el => { eventRefs.current[index] = el; }}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{
                  opacity: visibleEvents.has(index) ? 1 : 0,
                  transform: visibleEvents.has(index) ? 'translateY(0)' : 'translateY(36px)',
                  transition: 'opacity 0.65s ease, transform 0.65s ease'
                }}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                  <div
                    className="p-6 rounded-lg cursor-pointer transition-all"
                    style={{
                      backgroundColor: 'var(--c-surface)',
                      boxShadow: expandedEvent === index ? `0 0 0 1px ${event.color}40` : 'none'
                    }}
                    onClick={() => setExpandedEvent(expandedEvent === index ? null : index)}
                  >
                    <h3 className="text-[19px] mb-2" style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>
                      {event.title}
                    </h3>
                    <p className="text-[15px] leading-[1.7] mb-3" style={{ fontFamily: 'var(--font-body)', color: 'var(--c-text-muted)' }}
                      dangerouslySetInnerHTML={{ __html: event.text }}
                    />
                    <div
                      className={`flex items-center gap-1 text-[12px] ${index % 2 === 0 ? 'md:justify-end' : ''}`}
                      style={{ fontFamily: 'var(--font-body)', color: event.color }}
                    >
                      {expandedEvent === index ? (
                        <ChevronUp size={14} />
                      ) : (
                        <ChevronDown size={14} />
                      )}
                    </div>
                    {expandedEvent === index && (
                      <div
                        className="mt-4 pt-4 text-[14px] leading-[1.8]"
                        style={{ fontFamily: 'var(--font-body)', color: 'var(--c-text)', borderTop: `1px solid ${event.color}30` }}
                        dangerouslySetInnerHTML={{ __html: event.detail }}
                      />
                    )}
                  </div>
                </div>

                <div
                  className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full items-center justify-center text-[13px] font-bold z-10"
                  style={{ backgroundColor: event.color, color: 'var(--c-bg)', fontFamily: 'var(--font-body)' }}
                >
                  {event.year}
                </div>

                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
