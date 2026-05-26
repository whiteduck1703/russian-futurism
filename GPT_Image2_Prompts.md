# Промты GPT Image 2 — Фоны для сайта «Русский Футуризм»

> ## Концепция: один фон — две темы
>
> Все фоны генерируются на **светлом кремово-бежевом основании** (#f5f0e8 — имитация бумаги эпохи).  
> В CSS применяется `mix-blend-mode`:
> - **Светлая тема:** `mix-blend-mode: multiply` — белое становится прозрачным, цвета умножаются на фон страницы
> - **Тёмная тема:** `mix-blend-mode: screen` — тёмное исчезает, светлые элементы «светятся» поверх тёмного фона
>
> **Настройки генерации:** размер `1920×1080 px`, формат PNG, **без текста**, геометрия авангарда + фактура бумаги.

---

## CSS-шаблон применения

```css
.section-bg {
  position: absolute;
  inset: 0;
  background-image: url('bg-hero.png');
  background-size: cover;
  background-position: center;
  opacity: 0.55;
  pointer-events: none;
}

/* Светлая тема */
[data-theme="light"] .section-bg {
  mix-blend-mode: multiply;
  opacity: 0.45;
}

/* Тёмная тема */
[data-theme="dark"] .section-bg {
  mix-blend-mode: screen;
  opacity: 0.18;
}
```

---

## 1. Hero — «Русский футуризм»
**Акцент:** фиолетовый + красный, супрематизм Малевича

```
Abstract suprematist texture on warm ivory paper background (#f5f0e8). 
Large bold geometric shapes in the style of Kazimir Malevich: a wide indigo-violet 
rectangle (#6C76F0) at 60% opacity rotated slightly in the upper-left area, 
a solid red square (#E05555) at 55% opacity lower-right. 
One thin black horizontal stripe crossing the middle third. 
Aged paper grain and slight foxing marks. Warm cream base. 
Inspired by early Russian avant-garde art 1913–1920. 
No text. No people. Flat. Ultra-wide 16:9.
```

---

## 2. Timeline — «Хронология 1910–1930»
**Акцент:** охра + коричневый, газетная бумага эпохи

```
Warm parchment paper texture background (#f2ead8). 
Faint vintage newsprint grain across the entire surface. 
Ghost-print of an aged horizontal timeline rule — a thin ochre-brown line crossing 
the center of the canvas. Small circular ink stamp marks scattered at intervals 
suggesting dates. Upper-left corner: a yellowed paper fold shadow. 
Subtle letterpress ink impression texture. Sepia and ochre tones. 
Archival, documentary mood. No readable text. No numbers. Ultra-wide 16:9.
```

---

## 3. CityMap — «Города авангарда»
**Акцент:** стальной синий + бежевый, конструктивизм

```
Warm off-white paper background (#ede8df). 
Faint orthographic city street grid lines in muted steel-blue — 
thin parallel and perpendicular lines at low opacity, like a blueprint or cadastral map. 
A bold constructivist diagonal stripe in muted indigo-blue (#6C76F0 at 40% opacity). 
One small red dot accent. Inspired by early Soviet urban planning diagrams 
and Rodchenko's constructivist compositions. Cool geometry on warm paper. 
No labels. No icons. Ultra-wide 16:9.
```

---

## 4. Comparison — «Три группы»
**Акцент:** три вертикальные зоны — фиолетовый / нейтральный / красный

```
Warm ivory paper base (#f5f0e8). 
Canvas softly divided into three vertical atmospheric zones with very subtle color washes: 
left third — a pale indigo-violet tint (#6C76F0 at 20% opacity), 
center — neutral warm cream, 
right third — a pale crimson wash (#E05555 at 18% opacity). 
Two thin vertical divider lines of muted ink between zones. 
Paper grain texture across the whole surface. 
Balanced, triptych layout. Flat. No text. Ultra-wide 16:9.
```

---

## 5. Poets — «Поэты»
**Акцент:** тёплый кремовый + золото, портретный архив

```
Warm cream paper texture (#f0e8d8). 
Three faint circular vignette shapes arranged horizontally — 
ghosted portrait-sized ovals, barely visible as slightly darker areas on the paper, 
like old photograph mounts on album pages. 
Aged paper foxing and slight yellowing near edges. 
A thin vertical gold-ochre rule line on the right side. 
Warm, intimate, archival mood. Inspired by early 20th century photo albums. 
No faces. No text. Ultra-wide 16:9.
```

---

## 6. LanguageLab — «Лаборатория слова»
**Акцент:** белый + чёрные типографские фрагменты

```
Bright warm white paper (#faf8f2). 
Scattered fragments of deconstructed letterpress type — large angular shapes 
resembling Cyrillic letterform pieces exploded across the surface, 
printed in pale grey ink at very low opacity. 
Like a printer's proof with misregistered type. 
One sharp diagonal smear of indigo-violet ink. 
Inspired by Russian Futurist self-published booklets (zaumniki, 1913–1916). 
Experimental, typographic, clean. No readable words. Ultra-wide 16:9.
```

---

## 7. PoemAnalysis — «Анализ стихотворения»
**Акцент:** светло-синий + кремовый, нотная / линованная бумага

```
Pale warm paper (#eff0e8) with faint horizontal ruled lines like a scholar's notebook — 
very light, barely visible grey lines at regular intervals. 
A ghosted open book silhouette in the center background — just a subtle shadow. 
Thin annotation bracket marks and small ink circle accents scattered sparsely. 
A single narrow indigo-blue vertical margin line on the left. 
Quiet, studious, contemplative mood. Soft paper texture. No text. Ultra-wide 16:9.
```

---

## 8. Manifestos — «Манифесты»
**Акцент:** красный + чёрный, агитационный плакат

```
Off-white rough paper (#f0ebe0) with a bold constructivist composition. 
A large diagonal red rectangle (#E05555 at 65% opacity) slashing from upper-left 
to lower-center — like a revolutionary banner or propaganda stripe. 
One thick black geometric angular shape overlapping it partially. 
Rough letterpress ink texture. Torn paper edge effect on the left side. 
Raw, confrontational, declarative mood. Inspired by El Lissitzky and early 
Soviet agitprop posters. High contrast on warm paper base. No text. Ultra-wide 16:9.
```

---

## 9. Conflicts — «Конфликты и полемика»
**Акцент:** красный vs фиолетовый, столкновение форм

```
Warm ivory paper (#f3ede2). 
Two bold geometric forms colliding at the center of the canvas: 
a crimson-red angular wedge (#E05555 at 60% opacity) pushing in from the left, 
a deep indigo angular form (#6C76F0 at 55% opacity) from the right — 
overlapping with visual tension in the center. 
Crumpled paper texture in the collision zone. 
Diagonal kinetic energy lines. No smooth curves — only sharp angles. 
Inspired by Italian and Russian Futurist dynamism. No text. Ultra-wide 16:9.
```

---

## 10. Graph — «Граф связей»
**Акцент:** бежевый + фиолетовый, созвездие узлов

```
Warm parchment base (#ede8de). 
A delicate constellation network drawn in thin indigo-violet ink (#6C76F0 at 45% opacity): 
small nodes as tiny filled circles connected by gossamer fine lines, 
distributed organically across the canvas. 
Inspired by early information diagram illustrations and 
Russian Formalist structural analysis charts (Tynyanov, Shklovsky). 
Scientific, hand-drawn aesthetic. Some nodes darker than others — 
suggesting importance hierarchy. No labels. No text. Ultra-wide 16:9.
```

---

## 11. Glossary — «Глоссарий»
**Акцент:** охра + светлый, картотечная карточка

```
Cream card-stock paper texture (#f4f0e5). 
Subtle grid pattern of faint lines like an index card — small grid squares 
at very low opacity across the whole surface. 
A ghost-outline of a large filing card rectangle in the center. 
Thin ochre-yellow rule lines at top and bottom. 
Aged ink stain circle in the lower-right corner. 
Reference, encyclopedic, orderly mood. No text. Quiet grain. Ultra-wide 16:9.
```

---

## 12. Quiz — «Викторина»
**Акцент:** зелёный `#50B87A` + кремовый, игровой

```
Light warm paper (#f0f4ee). 
Playful scattered suprematist geometric shapes in emerald green (#50B87A) at 50% opacity: 
circles, triangles, small squares — distributed asymmetrically across the surface. 
One larger circle outline in the center (not filled) suggesting a question target. 
Small dot grid pattern underneath. 
Energetic, gamified, constructivist poster mood. 
Lighter and more dynamic than other sections. No text. No icons. Ultra-wide 16:9.
```

---

## 13. Quotes — «Цитаты»
**Акцент:** кремовый + золото, торжественный, книжный

```
Soft warm cream paper (#f5f1e6). 
A large decorative opening quotation mark shape — oversized, occupying the left third, 
rendered in warm gold-ochre ink at 30% opacity. 
Subtle radial soft-glow effect behind the center. 
Thin ruled lines suggesting book page texture. 
Two thin golden horizontal rule lines across the canvas. 
Velvet-paper texture. Dramatic, literary mood. 
Inspired by symbolist and modernist book design, early 20th century. 
No text. Gentle vignette frame. Ultra-wide 16:9.
```

---

## 14. Gallery — «Галерея»
**Акцент:** нейтральный светлый, музейная стена

```
Clean warm grey-white paper (#eeebe4). 
Subtle regular grid of faint rectangular outlines — 
like exhibition frames mounted on a gallery wall, arranged in rows of three. 
Very soft directional light from above, like museum track lighting. 
Minimalist, curatorial mood. Inspired by El Lissitzky's 
Abstract Cabinet (Hannover, 1927) and constructivist exhibition design. 
No images inside frames. No text. Ultra-wide 16:9.
```

---

## 15. Texts — «Первоисточники»
**Акцент:** потрёпанная бумага, архивный документ

```
Aged parchment paper texture (#ede4cf) with visible grain and slight warping. 
Faded gestural marks across the surface — like handwriting annotations 
visible as ghost impressions. Coffee-stain ring marks in two corners. 
Torn and worn paper edge along one side. 
Foxing spots distributed naturally. 
Archival, documentary, intimate mood. Warm sepia tones. 
No readable text. Film grain. Ultra-wide 16:9.
```

---

## 16. Footer
**Акцент:** нейтральный, минимальный

```
Plain warm off-white paper (#f5f2ec). 
Single thin horizontal line of pale indigo-violet color near the top edge. 
Very subtle paper grain texture — almost imperceptible. 
No shapes. No typography. Extremely minimal. 
Quiet, resolved, closing mood. Ultra-wide 16:9.
```

---

## Итоговая таблица

| # | Раздел | База фона | Акцент-цвет |
|---|---|---|---|
| 1 | Hero | `#f5f0e8` кремовый | Фиолетовый + красный |
| 2 | Timeline | `#f2ead8` пергамент | Охра коричневая |
| 3 | CityMap | `#ede8df` офф-вайт | Стальной синий |
| 4 | Comparison | `#f5f0e8` слоновая кость | Фиолетовый / красный |
| 5 | Poets | `#f0e8d8` тёплый кремовый | Золото охра |
| 6 | LanguageLab | `#faf8f2` почти белый | Чёрный серый |
| 7 | PoemAnalysis | `#eff0e8` светлый | Синий + нейтральный |
| 8 | Manifestos | `#f0ebe0` грубая бумага | Красный + чёрный |
| 9 | Conflicts | `#f3ede2` слоновая кость | Красный vs фиолетовый |
| 10 | Graph | `#ede8de` пергамент | Фиолетовый |
| 11 | Glossary | `#f4f0e5` карточка | Охра |
| 12 | Quiz | `#f0f4ee` светло-зелёный | Зелёный |
| 13 | Quotes | `#f5f1e6` кремовый | Золото |
| 14 | Gallery | `#eeebe4` тёплый серый | Нейтральный |
| 15 | Texts | `#ede4cf` пергамент | Сепия коричневая |
| 16 | Footer | `#f5f2ec` офф-вайт | Фиолетовый тонкий |

---

## Применение в React/CSS

```tsx
// Компонент фона — работает с обеими темами
<div
  className="absolute inset-0 pointer-events-none"
  style={{
    backgroundImage: 'url(/bg/hero.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    // Светлая тема: multiply — белое прозрачно, цвета смешиваются
    // Тёмная тема: screen — тёмное прозрачно, светлое светится
    mixBlendMode: isDark ? 'screen' : 'multiply',
    opacity: isDark ? 0.2 : 0.5,
  }}
/>
```
