import { useState } from 'react';

// Символы для подсветки по вкладкам (нижний регистр)
const highlightSets: Record<string, Set<string>> = {
  sound:  new Set(['д', 'б', 'щ', 'л', 'р']),  // резкие согласные
  rhythm: new Set(['ы', 'у', 'е']),              // ударные гласные
  image:  new Set(['щ', 'у', 'б']),              // шипящие + тёмные
  theory: new Set(['д', 'б', 'щ', 'л', 'р', 'ы', 'у', 'е']), // все фонемы
};

const poemLines = ['Дыр бул щыл', 'убещщур'];

function HighlightedPoem({ layerId, color }: { layerId: string; color: string }) {
  const highlights = highlightSets[layerId] ?? new Set();
  return (
    <div
      className="text-[52px] leading-[1.5] tracking-widest"
      style={{ fontFamily: 'var(--font-display)', transition: 'color 0.4s ease' }}
    >
      {poemLines.map((line, li) => (
        <div key={li}>
          {line.split('').map((ch, ci) => {
            const isHL = highlights.has(ch.toLowerCase());
            return (
              <span
                key={ci}
                style={{
                  fontWeight: isHL ? 700 : 400,
                  color: isHL ? color : 'var(--c-text-muted)',
                  transition: 'color 0.35s ease, font-weight 0.2s ease'
                }}
              >
                {ch}
              </span>
            );
          })}
        </div>
      ))}
    </div>
  );
}

const layers = [
  {
    id: 'sound',
    label: '&#x417;&#x432;&#x443;&#x43A;',
    sublabel: 'phonetics',
    color: '#E05555',
    content: '&#x42F;&#x434;&#x440;&#x43E; &#x442;&#x435;&#x43A;&#x441;&#x442;&#x430; &#x2013; &#x444;&#x43E;&#x43D;&#x435;&#x43C;&#x44B;, &#x430; &#x43D;&#x435; &#x441;&#x43C;&#x44B;&#x441;&#x43B;&#x44B;. &#x428;&#x435;&#x441;&#x442;&#x44C; &#x441;&#x43B;&#x43E;&#x432; &#x2013; &#x448;&#x435;&#x441;&#x442;&#x44C; &#x437;&#x432;&#x443;&#x43A;&#x43E;&#x432;&#x44B;&#x445; &#x431;&#x43B;&#x43E;&#x43A;&#x43E;&#x432;. &#x414;&#x43E;&#x43C;&#x438;&#x43D;&#x438;&#x440;&#x443;&#x44E;&#x442; &#x440;&#x435;&#x437;&#x43A;&#x438;&#x435; &#x441;&#x43E;&#x433;&#x43B;&#x430;&#x441;&#x43D;&#x44B;&#x435; (&#x434;, &#x431;, &#x449;, &#x43B;, &#x445;) &#x2013; &#x437;&#x432;&#x443;&#x43A;&#x43E;&#x43F;&#x438;&#x441;&#x44C; &#x441;&#x43E;&#x437;&#x434;&#x430;&#x451;&#x442; &#x44D;&#x444;&#x444;&#x435;&#x43A;&#x442; &#x43D;&#x430;&#x43F;&#x440;&#x44F;&#x436;&#x451;&#x43D;&#x43D;&#x43E;&#x441;&#x442;&#x438;, &#x44E;&#x440;&#x43A;&#x43E;&#x441;&#x442;&#x438;, &#x434;&#x440;&#x435;&#x432;&#x43D;&#x43E;&#x441;&#x442;&#x438;. &#x41D;&#x435;&#x442; &#x43D;&#x438; &#x43E;&#x434;&#x43D;&#x43E;&#x433;&#x43E; &#x43E;&#x431;&#x449;&#x435;&#x443;&#x43F;&#x43E;&#x442;&#x440;&#x435;&#x431;&#x438;&#x442;&#x435;&#x43B;&#x44C;&#x43D;&#x43E;&#x433;&#x43E; &#x441;&#x43B;&#x43E;&#x432;&#x430; &#x2013; &#x43D;&#x43E; &#x435;&#x441;&#x442;&#x44C; &#x440;&#x438;&#x442;&#x43C; &#x438; &#x444;&#x43E;&#x43D;&#x435;&#x442;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x430;&#x44F; &#x43B;&#x43E;&#x433;&#x438;&#x43A;&#x430;.',
    annotation: '&#x414;&#x44B;&#x440; &#x2013; &#x443;&#x434;&#x430;&#x440; &#x438;&#x437;&#x43D;&#x443;&#x442;&#x440;&#x438; &#x433;&#x440;&#x443;&#x434;&#x438;. &#x431;&#x443;&#x43B; &#x2013; &#x433;&#x43B;&#x443;&#x445;&#x43E;&#x439; &#x437;&#x432;&#x443;&#x43A;. &#x449;&#x44B;&#x43B; &#x2013; &#x448;&#x435;&#x440;&#x43E;&#x445;&#x43E;&#x432;&#x430;&#x442;&#x43E;&#x441;&#x442;&#x44C;. &#x443;&#x431;&#x435;&#x449;&#x449;&#x443;&#x440; &#x2013; &#x440;&#x430;&#x441;&#x442;&#x451;&#x43A;&#x430;&#x43D;&#x438;&#x435; &#x437;&#x432;&#x443;&#x43A;&#x430;.'
  },
  {
    id: 'rhythm',
    label: '&#x420;&#x438;&#x442;&#x43C;',
    sublabel: 'prosody',
    color: '#E8C84A',
    content: '&#x414;&#x432;&#x430; &#x434;&#x430;&#x43A;&#x442;&#x438;&#x43B;&#x44C;&#x43D;&#x44B;&#x445; &#x441;&#x442;&#x43E;&#x43F;&#x430; &#x432; &#x43A;&#x430;&#x436;&#x434;&#x43E;&#x43C; &#x441;&#x43B;&#x43E;&#x432;&#x435;: &#x414;&#x42B;&#x420; &#x431;&#x443;&#x43B; / &#x429;&#x42B;&#x41B; &#x443;&#x431;&#x435;&#x449; / &#x429;&#x423;&#x420;. &#x41C;&#x435;&#x442;&#x440;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x430;&#x44F; &#x440;&#x435;&#x433;&#x443;&#x43B;&#x44F;&#x440;&#x43D;&#x43E;&#x441;&#x442;&#x44C; &#x441;&#x43E;&#x445;&#x440;&#x430;&#x43D;&#x451;&#x43D;&#x430; &#x2013; &#x43D;&#x435;&#x441;&#x43C;&#x43E;&#x442;&#x440;&#x44F; &#x43D;&#x430; &#x43E;&#x442;&#x441;&#x443;&#x442;&#x441;&#x442;&#x432;&#x438;&#x435; &#x441;&#x43C;&#x44B;&#x441;&#x43B;&#x430;, &#x442;&#x435;&#x43A;&#x441;&#x442; &#x43E;&#x441;&#x442;&#x430;&#x451;&#x442;&#x441;&#x44F; &#x43F;&#x43E;&#x44D;&#x437;&#x438;&#x435;&#x439;. &#x41A;&#x440;&#x443;&#x447;&#x451;&#x43D;&#x44B;&#x445; &#x434;&#x43E;&#x43A;&#x430;&#x437;&#x44B;&#x432;&#x430;&#x43B;: &#x440;&#x438;&#x442;&#x43C; &#x432;&#x43E;&#x437;&#x43D;&#x438;&#x43A;&#x430;&#x435;&#x442; &#x440;&#x430;&#x43D;&#x44C;&#x448;&#x435; &#x441;&#x43C;&#x44B;&#x441;&#x43B;&#x430;, &#x430; &#x43D;&#x435; &#x43F;&#x43E;&#x441;&#x43B;&#x435;.',
    annotation: '&#x421;&#x445;&#x435;&#x43C;&#x430;: — &#x41D;&#x430;&#x43F;&#x440;&#x44F;&#x436;&#x451;&#x43D;&#x43D;&#x44B;&#x439; &#x434;&#x430;&#x43A;&#x442;&#x438;&#x43B;&#x44C;: &#x414;&#x42B;&#x420; | &#x431;&#x443;&#x43B; | &#x449;&#x44B;&#x43B; | &#x443;&#x431;&#x435;&#x449; | &#x449;&#x443;&#x440;'
  },
  {
    id: 'image',
    label: '&#x41E;&#x431;&#x440;&#x430;&#x437;',
    sublabel: 'semantics',
    color: '#50B87A',
    content: '&#x427;&#x438;&#x442;&#x430;&#x442;&#x435;&#x43B;&#x438; &#x43D;&#x430;&#x445;&#x43E;&#x434;&#x438;&#x43B;&#x438; &#x432; &#x437;&#x432;&#x443;&#x43A;&#x430;&#x445; &#x441;&#x43B;&#x43E;&#x432;&#x430; &#x433;&#x43E;&#x43B;&#x43E;&#x441;&#x430; &#x437;&#x432;&#x435;&#x440;&#x435;&#x439;, &#x43A;&#x440;&#x438;&#x43A;, &#x434;&#x440;&#x435;&#x432;&#x43D;&#x435;&#x43D;&#x435;&#x440;&#x443;&#x441;&#x441;&#x43A;&#x438;&#x435; &#x437;&#x430;&#x43A;&#x43B;&#x438;&#x43D;&#x430;&#x43D;&#x438;&#x44F;, &#x44D;&#x43D;&#x435;&#x440;&#x433;&#x438;&#x44E; &#x448;&#x430;&#x43C;&#x430;&#x43D;&#x441;&#x43A;&#x43E;&#x433;&#x43E; &#x44D;&#x43A;&#x441;&#x442;&#x430;&#x437;&#x430;. &#x41A;&#x440;&#x443;&#x447;&#x451;&#x43D;&#x44B;&#x445; &#x43D;&#x430;&#x441;&#x442;&#x430;&#x438;&#x432;&#x430;&#x43B;: &#x44D;&#x442;&#x43E;&#x442; &#x442;&#x435;&#x43A;&#x441;&#x442; &#x2013; «&#x43F;&#x43E;-&#x440;&#x443;&#x441;&#x441;&#x43A;&#x438;». &#x41D;&#x435; &#x442;&#x430;&#x43A; &#x2013; &#x43D;&#x435; &#x43F;&#x43E;-&#x43B;&#x430;&#x442;&#x438;&#x43D;&#x441;&#x43A;&#x438;. &#x422;&#x430;&#x43A; &#x2013; &#x43D;&#x435; &#x43F;&#x43E;-&#x441;&#x43B;&#x430;&#x432;&#x44F;&#x43D;&#x441;&#x43A;&#x438;. &#x41E;&#x441;&#x43E;&#x431;&#x44B;&#x439; &#x44F;&#x437;&#x44B;&#x43A;, &#x440;&#x43E;&#x434;&#x43D;&#x43E;&#x439; &#x43D;&#x438;&#x447;&#x435;&#x43C;&#x443;.',
    annotation: '&#x21;&#x42D;&#x442;&#x43E; &#x43D;&#x435; &#x431;&#x435;&#x441;&#x441;&#x43C;&#x44B;&#x441;&#x43B;&#x438;&#x446;&#x430;. &#x42D;&#x442;&#x43E; &#x434;&#x440;&#x443;&#x433;&#x43E;&#x439; &#x441;&#x43C;&#x44B;&#x441;&#x43B;.'
  },
  {
    id: 'theory',
    label: '&#x422;&#x435;&#x43E;&#x440;&#x438;&#x44F;',
    sublabel: 'Kruchenykh',
    color: 'var(--c-text-muted)',
    content: '&#x41A;&#x440;&#x443;&#x447;&#x451;&#x43D;&#x44B;&#x445; (1913): «&#x42D;&#x442;&#x438; &#x441;&#x442;&#x440;&#x43E;&#x447;&#x43A;&#x438; &#x434;&#x430;&#x44E;&#x442; &#x431;&#x43E;&#x43B;&#x44C;&#x448;&#x435; &#x43D;&#x430;&#x446;&#x438;&#x43E;&#x43D;&#x430;&#x43B;&#x44C;&#x43D;&#x43E&#x440;&#x443;&#x441;&#x441;&#x43A;&#x43E;&#x433;&#x43E;, &#x447;&#x435;&#x43C; &#x432;&#x441;&#x451; &#x43F;&#x443;&#x448;&#x43A;&#x438;&#x43D;&#x441;&#x43A;&#x43E;&#x435; &#x43F;&#x440;&#x435;&#x434;&#x430;&#x43D;&#x438;&#x435;». &#x41F;&#x440;&#x438;&#x43D;&#x446;&#x438;&#x43F;: &#x441;&#x43B;&#x43E;&#x432;&#x43E; &#x2013; &#x444;&#x43E;&#x43D;&#x435;&#x43C;&#x430;. &#x42F;&#x437;&#x44B;&#x43A; &#x2013; &#x437;&#x432;&#x443;&#x43A;. &#x414;&#x43E; &#x42F;&#x43A;&#x43E;&#x431;&#x441;&#x43E;&#x43D;&#x430; &#x43D;&#x438;&#x43A;&#x442;&#x43E; &#x43D;&#x435; &#x434;&#x43E;&#x43A;&#x430;&#x437;&#x44B;&#x432;&#x430;&#x43B;: &#x437;&#x432;&#x443;&#x43A;&#x43E;&#x432;&#x43E;&#x439; &#x43F;&#x43B;&#x430;&#x441;&#x442; &#x43E;&#x431;&#x43B;&#x430;&#x434;&#x430;&#x435;&#x442; &#x441;&#x43E;&#x431;&#x441;&#x442;&#x432;&#x435;&#x43D;&#x43D;&#x43E;&#x439; &#x430;&#x444;&#x444;&#x435;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x43E;&#x441;&#x442;&#x44C;&#x44E; &#x2013; &#x43D;&#x435;&#x437;&#x430;&#x432;&#x438;&#x441;&#x438;&#x43C;&#x43E; &#x43E;&#x442; &#x441;&#x43B;&#x43E;&#x432;&#x430;&#x440;&#x43D;&#x43E;&#x433;&#x43E; &#x437;&#x43D;&#x430;&#x447;&#x435;&#x43D;&#x438;&#x44F;.',
    annotation: '&#x426;&#x438;&#x442;&#x430;&#x442;&#x430; &#x43F;&#x43E;&#x434;&#x43B;&#x438;&#x43D;&#x43D;&#x430;&#x44F;. &#x441;&#x43C;. &#x41A;&#x440;&#x443;&#x447;&#x451;&#x43D;&#x44B;&#x445;, «&#x421;&#x43B;&#x43E;&#x432;&#x43E; &#x43A;&#x430;&#x43A; &#x442;&#x430;&#x43A;&#x43E;&#x432;&#x43E;&#x435;», 1913'
  }
];

export function PoemAnalysis() {
  const [activeLayer, setActiveLayer] = useState(0);

  return (
    <section id="poem-analysis" className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center">
          <div className="text-[11px] tracking-[0.2em] uppercase mb-4" style={{ fontFamily: 'var(--font-body)', color: '#6C76F0' }}>
            РАЗБОР
          </div>
          <h2 className="text-[52px] mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>
            Что это значит?
          </h2>
          <p className="text-[18px] mb-2" style={{ fontFamily: 'var(--font-body)', color: 'var(--c-text-muted)' }}>
            Послойное чтение стихотворения Алексея Крученых
          </p>
        </div>

        {/* Poem display */}
        <div className="rounded-xl mb-12 p-12 text-center relative overflow-hidden" style={{ backgroundColor: 'var(--c-bg)', border: `1px solid ${layers[activeLayer].color}30` }}>
          {/* Colored glow behind poem */}
          <div style={{
            position: 'absolute', inset: 0,
            background: `radial-gradient(ellipse 60% 60% at 50% 50%, ${layers[activeLayer].color}08, transparent 70%)`,
            transition: 'background 0.5s ease',
            pointerEvents: 'none'
          }} />

          <div className="relative z-10">
            <div
              className="text-[13px] tracking-[0.2em] uppercase mb-8"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--c-text-muted)' }}
            >
              &#x410;&#x43B;&#x435;&#x43A;&#x441;&#x435;&#x439; &#x41A;&#x440;&#x443;&#x447;&#x451;&#x43D;&#x44B;&#x445;, 1913
            </div>
            <HighlightedPoem
              layerId={layers[activeLayer].id}
              color={layers[activeLayer].color}
            />
          </div>
        </div>

        {/* Layer selector */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {layers.map((layer, i) => (
            <button
              key={i}
              onClick={() => setActiveLayer(i)}
              className="px-6 py-3 rounded-lg transition-all duration-200"
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '14px',
                backgroundColor: activeLayer === i ? layer.color : 'var(--c-surface)',
                color: activeLayer === i ? 'var(--c-bg)' : 'var(--c-text-muted)',
                border: `1px solid ${activeLayer === i ? layer.color : 'var(--c-border)'}`,
                transform: activeLayer === i ? 'translateY(-2px)' : 'none'
              }}
            >
              <span dangerouslySetInnerHTML={{ __html: layer.label }} />
            </button>
          ))}
        </div>

        {/* Layer content */}
        <div
          key={activeLayer}
          className="rounded-xl p-8"
          style={{
            backgroundColor: 'var(--c-surface)',
            border: `1px solid ${layers[activeLayer].color}40`,
            animation: 'layerIn 0.3s ease both'
          }}
        >
          <style>{`@keyframes layerIn { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }`}</style>
          <div
            className="text-[11px] tracking-[0.15em] uppercase mb-4"
            style={{ fontFamily: 'var(--font-body)', color: layers[activeLayer].color }}
            dangerouslySetInnerHTML={{ __html: layers[activeLayer].label }}
          />
          <p
            className="text-[17px] leading-[1.75] mb-6"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--c-text)' }}
            dangerouslySetInnerHTML={{ __html: layers[activeLayer].content }}
          />
          <blockquote
            className="border-l-2 pl-4 italic text-[15px]"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--c-text-muted)', borderColor: layers[activeLayer].color }}
            dangerouslySetInnerHTML={{ __html: layers[activeLayer].annotation }}
          />
        </div>
      </div>
    </section>
  );
}
