import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Lang = 'ru' | 'en';

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const LangContext = createContext<LangCtx>({
  lang: 'ru',
  setLang: () => {},
  t: (k) => k,
});

export function useLang() {
  return useContext(LangContext);
}

/* ── translations ───────────────────────────────────────────── */
const translations: Record<Lang, Record<string, string>> = {
  ru: {
    /* NavBar */
    'nav.timeline':    'О движении',
    'nav.citymap':     'География',
    'nav.comparison':  'Сравнение',
    'nav.poets':       'Поэты',
    'nav.languagelab': 'Лаборатория',
    'nav.manifestos':  'Манифесты',
    'nav.conflicts':   'Полемика',
    'nav.graph':       'Граф',
    'nav.glossary':    'Словарь',
    'nav.quiz':        'Тест',
    'nav.quotes':      'Цитаты',
    'nav.gallery':     'Галерея',
    'nav.texts':       'Читальный зал',

    /* Hero */
    'hero.title':    'РУССКИЙ\nФУТУРИЗМ',
    'hero.sub':      'Три лица авангарда',
    'hero.body':     'Движение, которое перевернуло русскую поэзию. Не одна группа — три. «Гилея», «Эго-футуристы» и «Центрифуга» строили разные миры из одного и того же материала — русского слова.',
    'hero.cta1':     'Начать путешествие',
    'hero.cta2':     'К сравнению групп',
    'hero.stat1':    '3 группы',
    'hero.stat2':    '1910–1930 гг.',
    'hero.stat3':    '12 манифестов',
    'hero.stat4':    '20 лет эпохи',

    /* Section headings */
    'section.timeline.tag':          'Хронология',
    'section.timeline.title':        'История движения',
    'section.timeline.subtitle':     'Ключевые события русского футуризма',
    'section.citymap.tag':           'География',
    'section.citymap.title':         'Города движения',
    'section.comparison.tag':        'Сравнение',
    'section.comparison.title':      'Три группы',
    'section.poets.tag':             'Персоналии',
    'section.poets.title':           'Поэты',
    'section.poets.subtitle':        'Голоса русского авангарда',
    'section.languagelab.tag':       'Языковая лаборатория',
    'section.languagelab.title':     'Эксперименты со словом',
    'section.manifestos.tag':        'Тексты',
    'section.manifestos.title':      'Манифесты',
    'section.manifestos.subtitle':   'Программные тексты русского футуризма',
    'section.conflicts.tag':         'Полемика',
    'section.conflicts.title':       'Конфликты и разрывы',
    'section.graph.tag':             'Взаимосвязи',
    'section.graph.title':           'Граф связей',
    'section.graph.subtitle':        'Как поэты были связаны между собой',
    'section.glossary.tag':          'Словарь',
    'section.glossary.title':        'Термины авангарда',
    'section.quiz.tag':              'Тест',
    'section.quiz.title':            'Какой ты футурист?',
    'section.quiz.subtitle':         '5 вопросов · 1 минута',
    'section.quotes.tag':            'Слово',
    'section.quotes.title':          'Лента цитат',
    'section.gallery.tag':           'Коллекция',
    'section.gallery.title':         'Галерея',
    'section.gallery.subtitle':      'Книги и альманахи русского футуризма',
    'section.texts.tag':             'Читальный зал',
    'section.texts.title':           'Первоисточники',

    /* Footer */
    'footer.title':   'РУССКИЙ ФУТУРИЗМ',
    'footer.tagline': 'Образовательный проект о русском авангарде',
    'footer.copy':    '© 2025 Русский футуризм. Материалы в общественном достоянии.',

    /* Common */
    'btn.load-more':    'Загрузить ещё',
    'btn.reset':        'Сбросить',
    'theme.dark':       'Тёмная тема',
    'theme.light':      'Светлая тема',
    'label.primary-sources': 'Первоисточники',
    'label.research':   'Исследования',
    'label.all':        'Все',
  },

  en: {
    /* NavBar */
    'nav.timeline':    'Timeline',
    'nav.citymap':     'Geography',
    'nav.comparison':  'Comparison',
    'nav.poets':       'Poets',
    'nav.languagelab': 'Language Lab',
    'nav.manifestos':  'Manifestos',
    'nav.conflicts':   'Conflicts',
    'nav.graph':       'Network',
    'nav.glossary':    'Glossary',
    'nav.quiz':        'Quiz',
    'nav.quotes':      'Quotes',
    'nav.gallery':     'Gallery',
    'nav.texts':       'Reading Room',

    /* Hero */
    'hero.title':    'RUSSIAN\nFUTURISM',
    'hero.sub':      'Three faces of the avant-garde',
    'hero.body':     'The movement that upended Russian poetry. Not one group — three. "Hylaea", the "Ego-Futurists", and "Centrifuge" each built different worlds from the same material — the Russian word.',
    'hero.cta1':     'Begin the Journey',
    'hero.cta2':     'Compare the Groups',
    'hero.stat1':    '3 groups',
    'hero.stat2':    '1910–1930',
    'hero.stat3':    '12 manifestos',
    'hero.stat4':    '20 years of the era',

    /* Section headings */
    'section.timeline.tag':          'Timeline',
    'section.timeline.title':        'History of the Movement',
    'section.timeline.subtitle':     'Key events of Russian Futurism',
    'section.citymap.tag':           'Geography',
    'section.citymap.title':         'Cities of the Movement',
    'section.comparison.tag':        'Comparison',
    'section.comparison.title':      'Three Groups',
    'section.poets.tag':             'Figures',
    'section.poets.title':           'Poets',
    'section.poets.subtitle':        'Voices of the Russian Avant-Garde',
    'section.languagelab.tag':       'Language Laboratory',
    'section.languagelab.title':     'Experiments with the Word',
    'section.manifestos.tag':        'Texts',
    'section.manifestos.title':      'Manifestos',
    'section.manifestos.subtitle':   'Programme texts of Russian Futurism',
    'section.conflicts.tag':         'Polemics',
    'section.conflicts.title':       'Conflicts & Ruptures',
    'section.graph.tag':             'Connections',
    'section.graph.title':           'Network Graph',
    'section.graph.subtitle':        'How the poets were connected',
    'section.glossary.tag':          'Glossary',
    'section.glossary.title':        'Terms of the Avant-Garde',
    'section.quiz.tag':              'Quiz',
    'section.quiz.title':            'Which Futurist Are You?',
    'section.quiz.subtitle':         '5 questions · 1 minute',
    'section.quotes.tag':            'The Word',
    'section.quotes.title':          'Quote Feed',
    'section.gallery.tag':           'Collection',
    'section.gallery.title':         'Gallery',
    'section.gallery.subtitle':      'Books and almanacs of Russian Futurism',
    'section.texts.tag':             'Reading Room',
    'section.texts.title':           'Primary Sources',

    /* Footer */
    'footer.title':   'RUSSIAN FUTURISM',
    'footer.tagline': 'An educational project on the Russian avant-garde',
    'footer.copy':    '© 2025 Russian Futurism. Materials are in the public domain.',

    /* Common */
    'btn.load-more':    'Load More',
    'btn.reset':        'Reset',
    'theme.dark':       'Dark theme',
    'theme.light':      'Light theme',
    'label.primary-sources': 'Primary Sources',
    'label.research':   'Research',
    'label.all':        'All',
  },
};

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    return (localStorage.getItem('futurism-lang') as Lang) || 'ru';
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem('futurism-lang', l);
  };

  const t = (key: string): string => {
    return translations[lang][key] ?? translations['ru'][key] ?? key;
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = lang === 'en'
      ? 'Russian Futurism — 1910–1930'
      : 'Русский футуризм — 1910–1930';
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}
