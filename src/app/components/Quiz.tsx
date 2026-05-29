import { useState, useRef, useEffect } from 'react';

export function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({ gileya: 0, ego: 0, centrifuga: 0 });
  const [showResult, setShowResult] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [slideOut, setSlideOut] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const questions = [
    {
      question: 'Как ты относишься к классике?',
      options: [
        { text: 'Сбросить Пушкина с парохода! Прошлое тесно.', group: 'gileya' },
        { text: 'Я знаю классику лучше всех – именно поэтому имею право с ней играть.', group: 'ego' },
        { text: 'Классика права насчёт сложности слова, но ошибается в метафизике. Брать технику, отбрасывать мистику.', group: 'centrifuga' }
      ]
    },
    {
      question: 'Как должен вести себя поэт публично?',
      options: [
        { text: 'Выйти в жёлтой кофте, прочитать заумь и устроить скандал.', group: 'gileya' },
        { text: 'Создать торжественный поэзоконцерт, где аудитория – приглашённый гость.', group: 'ego' },
        { text: 'Говорить тихо и точно. Не герой, а медиум.', group: 'centrifuga' }
      ]
    },
    {
      question: 'Для тебя поэтическое слово – это...',
      options: [
        { text: 'Взрывчатое вещество. Или – материал, который можно расплавить.', group: 'gileya' },
        { text: 'Украшение и палитра. Новые жанры, изысканные неологизмы.', group: 'ego' },
        { text: 'Живой организм с собственной логикой, которую нужно открыть.', group: 'centrifuga' }
      ]
    },
    {
      question: 'Как выглядит твой манифест?',
      options: [
        { text: 'Короткие рублёные фразы. Без аргументов. Удар.', group: 'gileya' },
        { text: 'Торжественное провозглашение. Догмат новой веры. Мы – исповедуем.', group: 'ego' },
        { text: 'Философский трактат. Приглашение к размышлению, не к битве.', group: 'centrifuga' }
      ]
    },
    {
      question: 'Что для тебя важнее?',
      options: [
        { text: 'Коллективный бунт. «Нам стоять на глыбе слова МЫ»', group: 'gileya' },
        { text: 'Абсолютное личное Я. Мой гений – моя программа.', group: 'ego' },
        { text: 'Сообщество исследователей. Строить после разрушения.', group: 'centrifuga' }
      ]
    },
    {
      question: 'Что такое неологизм для тебя?',
      options: [
        { text: 'Инструмент разрушения старого языка. Заумный звук – первооснова речи.', group: 'gileya' },
        { text: 'Изысканное украшение. Новое слово должно быть красивым и понятным в контексте.', group: 'ego' },
        { text: 'Результат внутреннего закона. Слово само создаёт себя, если его правильно слышать.', group: 'centrifuga' }
      ]
    },
    {
      question: 'Что ты думаешь о революции 1917 года?',
      options: [
        { text: 'Долгожданный взрыв! Искусство и революция едины. Долой старый мир.', group: 'gileya' },
        { text: 'Катастрофа для личности. Революция растворяет «Я» в коллективе.', group: 'ego' },
        { text: 'Исторический перелом – нужно продолжать работу, не превращая поэзию в агитку.', group: 'centrifuga' }
      ]
    },
    {
      question: 'Как должна выглядеть твоя книга?',
      options: [
        { text: 'На обоях, мешковине, обёрточной бумаге. Материал – часть высказывания.', group: 'gileya' },
        { text: 'Изящно оформленный томик в духе символистской книги, но с новым содержанием.', group: 'ego' },
        { text: 'Скромно и строго. Форма – служанка содержания, а не самоцель.', group: 'centrifuga' }
      ]
    },
    {
      question: 'Твои отношения с Маринетти?',
      options: [
        { text: 'Он показал возможность – но его урбанизм нам чужд. Наш футуризм обращён к мифу.', group: 'gileya' },
        { text: 'Его риторику берём – машины, скорость, электричество. Наполнение – своё.', group: 'ego' },
        { text: 'Маринетти говорит о мире, мы – о слове. Принципиально разные проекты.', group: 'centrifuga' }
      ]
    },
    {
      question: 'Что останется после тебя?',
      options: [
        { text: 'Взрыв. Сломать – значит открыть. После нас придут строители.', group: 'gileya' },
        { text: 'Стихи. Только стихи. Гений бессмертен – не движение.', group: 'ego' },
        { text: 'Синтез. Мы доказали, что после разрушения можно и нужно строить.', group: 'centrifuga' }
      ]
    }
  ];

  const results = {
    gileya: {
      title: 'Ты – Гилеец!',
      text: 'Тебе близок радикальный разрыв, коллективный бунт и слово как взрывчатое вещество. Твои ориентиры – Маяковский, Хлебников, Крученых. Стадия деструкции: сломать, чтобы построить заново.',
      color: '#E05555'
    },
    ego: {
      title: 'Ты – Эго-футурист!',
      text: 'Абсолютное «Я», изысканность и эстетизация современного быта. Твой ориентир – Северянин с его «поэзами» и «громокипящим кубком». Или – Гнедов с его радикальным молчанием.',
      color: '#E8C84A'
    },
    centrifuga: {
      title: 'Ты – Центрифугист!',
      text: 'Синтез и рефлексия. Слово – живой организм. Поэт – свидетель, а не пророк. Твои ориентиры – Пастернак, Бобров, Асеев. Стадия, в которой синтез оказывается устойчивее крайности.',
      color: '#50B87A'
    }
  };

  const handleAnswer = (group: 'gileya' | 'ego' | 'centrifuga') => {
    if (animating) return;
    setAnimating(true);
    setSlideOut(true);
    setTimeout(() => {
      const newScores = { ...scores, [group]: scores[group] + 1 };
      setScores(newScores);
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(q => q + 1);
      } else {
        setShowResult(true);
      }
      setSlideOut(false);
      setAnimating(false);
    }, 320);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScores({ gileya: 0, ego: 0, centrifuga: 0 });
    setShowResult(false);
    setAnimating(false);
    setSlideOut(false);
  };

  const getResult = () => {
    const maxScore = Math.max(scores.gileya, scores.ego, scores.centrifuga);
    if (scores.gileya === maxScore) return 'gileya';
    if (scores.ego === maxScore) return 'ego';
    return 'centrifuga';
  };

  const progress = ((currentQuestion) / questions.length) * 100;

  return (
    <section id="quiz" className="py-24 md:py-32 px-6 relative overflow-hidden" style={{ backgroundColor: 'var(--c-surface)' }}>
      {/* Тёмная тема */}
      <img
        src="/images/bg/bg-quiz-dark.png"
        alt=""
        aria-hidden="true"
        className="quiz-bg-for-dark"
      />
      {/* Светлая тема */}
      <img
        src="/images/bg/bg-quiz-light.png"
        alt=""
        aria-hidden="true"
        className="quiz-bg-for-light"
      />


      <style>{`
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(48px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideOutLeft {
          from { opacity: 1; transform: translateX(0); }
          to   { opacity: 0; transform: translateX(-48px); }
        }
        @keyframes resultPop {
          0%   { opacity: 0; transform: scale(0.92); }
          60%  { transform: scale(1.03); }
          100% { opacity: 1; transform: scale(1); }
        }
        .quiz-slide-in  { animation: slideInRight 0.32s cubic-bezier(0.22,1,0.36,1) both; }
        .quiz-slide-out { animation: slideOutLeft  0.28s cubic-bezier(0.55,0,1,0.45) both; }
        .quiz-result    { animation: resultPop 0.5s cubic-bezier(0.22,1,0.36,1) both; }
      `}</style>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-20 text-center">
          <div className="text-[11px] tracking-[0.2em] uppercase mb-4" style={{ fontFamily: 'var(--font-body)', color: '#6C76F0' }}>
            ТЕСТ
          </div>
          <h2 className="text-[52px] mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>
            Какой ты футурист?
          </h2>
          <p className="text-[18px]" style={{ fontFamily: 'var(--font-body)', color: 'var(--c-text-muted)' }}>
            10 вопросов · определи свою группу
          </p>
        </div>

        {!showResult ? (
          <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--c-bg)' }}>
            {/* Progress bar */}
            <div className="text-[14px] mb-4 text-center" style={{ fontFamily: 'var(--font-body)', color: 'var(--c-text-muted)' }}>
              Вопрос {currentQuestion + 1} из {questions.length}
            </div>
            <div className="w-full h-1 mb-8 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--c-border)' }}>
              <div
                className="h-full rounded-full"
                style={{
                  backgroundColor: '#6C76F0',
                  width: `${progress}%`,
                  transition: 'width 0.4s cubic-bezier(0.22,1,0.36,1)'
                }}
              />
            </div>

            {/* Question card with slide animation */}
            <div
              key={currentQuestion}
              className={slideOut ? 'quiz-slide-out' : 'quiz-slide-in'}
            >
              <h3 className="text-[28px] mb-8 text-center" style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>
                {questions[currentQuestion].question}
              </h3>
              <div className="space-y-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option.group as 'gileya' | 'ego' | 'centrifuga')}
                    disabled={animating}
                    className="w-full p-6 rounded-lg text-left transition-all border-2"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '16px',
                      backgroundColor: 'var(--c-surface)',
                      borderColor: 'var(--c-border)',
                      color: 'var(--c-text)',
                      cursor: animating ? 'default' : 'pointer',
                      animationDelay: `${index * 60}ms`
                    }}
                    onMouseEnter={(e) => {
                      if (!animating) {
                        e.currentTarget.style.borderColor = '#6C76F0';
                        e.currentTarget.style.backgroundColor = 'var(--c-border)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--c-border)';
                      e.currentTarget.style.backgroundColor = 'var(--c-surface)';
                    }}
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div
            className="p-12 rounded-lg text-center quiz-result"
            style={{ backgroundColor: results[getResult()].color }}
          >
            <h3 className="text-[48px] mb-6" style={{ fontFamily: 'var(--font-display)', fontWeight: 900, color: 'var(--c-bg)' }}>
              {results[getResult()].title}
            </h3>
            <p className="text-[18px] leading-[1.7] mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)', color: 'var(--c-bg)' }}>
              {results[getResult()].text}
            </p>
            <button
              onClick={resetQuiz}
              className="px-8 py-4 rounded-md transition-all hover:scale-105"
              style={{ fontFamily: 'var(--font-body)', fontWeight: 600, backgroundColor: 'var(--c-bg)', color: results[getResult()].color }}
            >
              Пройти ещё раз
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
