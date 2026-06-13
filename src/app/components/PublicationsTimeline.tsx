import { useEffect, useRef, useState } from 'react';

const publications = [
  { year: 1910, title: '&#x421;&#x430;&#x434;&#x43E;&#x43A; &#x441;&#x443;&#x434;&#x435;&#x439; I', group: '&#x413;&#x438;&#x43B;&#x435;&#x44F;', color: '#E05555', note: '&#x41F;&#x435;&#x440;&#x432;&#x44B;&#x439; &#x430;&#x43B;&#x44C;&#x43C;&#x430;&#x43D;&#x430;&#x445; &#x43D;&#x430; &#x43E;&#x431;&#x43E;&#x440;&#x43E;&#x442;&#x435; &#x2013; &#x43C;&#x430;&#x442;&#x435;&#x440;&#x438;&#x430;&#x43B; &#x43A;&#x430;&#x43A; &#x436;&#x435;&#x441;&#x442;&#x44C;', cover: '/images/covers/sadok_sudey_1.jpg' },
  { year: 1912, title: '&#x41F;&#x43E;&#x449;&#x451;&#x447;&#x438;&#x43D;&#x430; &#x43E;&#x431;&#x449;&#x435;&#x441;&#x442;&#x432;&#x435;&#x43D;&#x43D;&#x43E;&#x43C;&#x443; &#x432;&#x43A;&#x443;&#x441;&#x443;', group: '&#x413;&#x438;&#x43B;&#x435;&#x44F;', color: '#E05555', note: '&#x413;&#x43B;&#x430;&#x432;&#x43D;&#x44B;&#x439; &#x43C;&#x430;&#x43D;&#x438;&#x444;&#x435;&#x441;&#x442; &#x43A;&#x443;&#x431;&#x43E;&#x444;&#x443;&#x442;&#x443;&#x440;&#x438;&#x437;&#x43C;&#x430;. &#xAB;&#x411;&#x440;&#x43E;&#x441;&#x438;&#x442;&#x44C; &#x41F;&#x443;&#x448;&#x43A;&#x438;&#x43D;&#x430;&#x2026;&#xBB;', cover: '/images/covers/poshchechina.jpg' },
  { year: 1912, title: '&#x421;&#x43A;&#x440;&#x438;&#x436;&#x430;&#x43B;&#x438; &#x44D;&#x433;&#x43E;-&#x444;&#x443;&#x442;&#x443;&#x440;&#x438;&#x437;&#x43C;&#x430;', group: '&#x42D;&#x433;&#x43E;-&#x444;&#x443;&#x442;&#x443;&#x440;&#x438;&#x437;&#x43C;', color: '#E8C84A', note: '&#x418;&#x433;&#x43D;&#x430;&#x442;&#x44C;&#x435;&#x432; &#x43E;&#x441;&#x43D;&#x43E;&#x432;&#x44B;&#x432;&#x430;&#x435;&#x442; &#x434;&#x432;&#x438;&#x436;&#x435;&#x43D;&#x438;&#x435;. &#xAB;&#x418;&#x441;&#x43F;&#x43E;&#x432;&#x435;&#x434;&#x443;&#x44F; &#x44D;&#x433;&#x43E;&#x438;&#x437;&#x43C;&#x2026;&#xBB;' },
  { year: 1913, title: '&#x421;&#x430;&#x434;&#x43E;&#x43A; &#x441;&#x443;&#x434;&#x435;&#x439; II', group: '&#x413;&#x438;&#x43B;&#x435;&#x44F;', color: '#E05555', note: '&#x422;&#x435;&#x43A;&#x441;&#x442;&#x44B; &#x425;&#x43B;&#x435;&#x431;&#x43D;&#x438;&#x43A;&#x43E;&#x432;&#x430;, &#x41A;&#x440;&#x443;&#x447;&#x451;&#x43D;&#x44B;&#x445;, &#x411;&#x443;&#x440;&#x43B;&#x44E;&#x43A;&#x43E;&#x432; &#x2013; &#x43A;&#x440;&#x435;&#x449;&#x435;&#x43D;&#x438;&#x435; &#x437;&#x430;&#x443;&#x43C;&#x438;', cover: '/images/covers/sadok_sudey_2.jpg' },
  { year: 1913, title: '&#x412;&#x437;&#x43E;&#x440;&#x432;&#x430;&#x43B;&#x44C;', group: '&#x413;&#x438;&#x43B;&#x435;&#x44F;', color: '#E05555', note: '&#x41A;&#x440;&#x443;&#x447;&#x451;&#x43D;&#x44B;&#x445; &#x438; &#x41C;&#x430;&#x442;&#x44E;&#x448;&#x438;&#x43D;. &#x43B;&#x438;&#x441;&#x442;&#x44B; &#x440;&#x430;&#x437;&#x43D;&#x44B;&#x445; &#x444;&#x43E;&#x440;&#x43C;&#x430;&#x442;&#x43E;&#x432; &#x2013; &#x43A;&#x43D;&#x438;&#x433;&#x430; &#x43A;&#x430;&#x43A; &#x43E;&#x431;&#x44A;&#x435;&#x43A;&#x442;', cover: '/images/covers/troe_1913.jpg' },
  { year: 1913, title: '&#x413;&#x440;&#x43E;&#x43C;&#x43E;&#x43A;&#x438;&#x43F;&#x44F;&#x449;&#x438;&#x439; &#x43A;&#x443;&#x431;&#x43E;&#x43A;', group: '&#x42D;&#x433;&#x43E;-&#x444;&#x443;&#x442;&#x443;&#x440;&#x438;&#x437;&#x43C;', color: '#E8C84A', note: '&#x421;&#x435;&#x432;&#x435;&#x440;&#x44F;&#x43D;&#x438;&#x43D; &#x43F;&#x43E;&#x434; &#x43F;&#x441;&#x435;&#x432;&#x434;&#x43E;&#x43D;&#x438;&#x43C;&#x43E;&#x43C; &#x41A;&#x44C;&#x44E;&#x43B;&#x44C;&#x434;', cover: '/images/covers/gromokipiashiy.jpg' },
  { year: 1914, title: '&#x422;&#x430;&#x43D;&#x433;&#x43E; &#x441; &#x43A;&#x43E;&#x440;&#x43E;&#x432;&#x430;&#x43C;&#x438;', group: '&#x413;&#x438;&#x43B;&#x435;&#x44F;', color: '#E05555', note: '&#x41A;&#x430;&#x43C;&#x435;&#x43D;&#x441;&#x43A;&#x438;&#x439;: &#x440;&#x438;&#x441;&#x443;&#x43D;&#x43A;&#x438; &#x438; &#x441;&#x442;&#x438;&#x445;&#x438;, &#x43B;&#x438;&#x442;&#x43E;&#x433;&#x440;&#x430;&#x444;&#x438;&#x44F;' },
  { year: 1914, title: '&#x410;&#x43D;&#x430;&#x43D;&#x430;&#x441;&#x44B; &#x432; &#x448;&#x430;&#x43C;&#x43F;&#x430;&#x43D;&#x441;&#x43A;&#x43E;&#x43C;', group: '&#x42D;&#x433;&#x43E;-&#x444;&#x443;&#x442;&#x443;&#x440;&#x438;&#x437;&#x43C;', color: '#E8C84A', note: '&#x421;&#x435;&#x432;&#x435;&#x440;&#x44F;&#x43D;&#x438;&#x43D;: &#x44F;&#x440;&#x43A;&#x43E;&#x441;&#x442;&#x44C; &#x438; &#x43F;&#x440;&#x43E;&#x432;&#x43E;&#x43A;&#x430;&#x446;&#x438;&#x44F;', cover: '/images/covers/ananasy.jpg' },
  { year: 1914, title: '&#x41B;&#x438;&#x440;&#x438;&#x43A;&#x430; &#x426;&#x435;&#x43D;&#x442;&#x440;&#x438;&#x444;&#x443;&#x433;&#x438;', group: '&#x426;&#x435;&#x43D;&#x442;&#x440;&#x438;&#x444;&#x443;&#x433;&#x430;', color: '#5B8DD9', note: '&#x41F;&#x430;&#x441;&#x442;&#x435;&#x440;&#x43D;&#x430;&#x43A; &#x438; &#x411;&#x43E;&#x431;&#x440;&#x43E;&#x432;, &#x441;&#x431;&#x43E;&#x440;&#x43D;&#x438;&#x43A; &#x43D;&#x430;&#x43F;&#x440;&#x430;&#x432;&#x43B;&#x435;&#x43D;&#x438;&#x44F;' },
  { year: 1916, title: '&#x41E;&#x431;&#x43B;&#x430;&#x43A;&#x43E; &#x432; &#x448;&#x442;&#x430;&#x43D;&#x430;&#x445;', group: '&#x413;&#x438;&#x43B;&#x435;&#x44F;', color: '#E05555', note: '&#x41C;&#x430;&#x44F;&#x43A;&#x43E;&#x432;&#x441;&#x43A;&#x438;&#x439;: &#x43F;&#x43E;&#x44D;&#x43C;&#x430;-&#x442;&#x440;&#x430;&#x433;&#x435;&#x434;&#x438;&#x44F;', cover: '/images/covers/oblako.jpg' },
  { year: 1922, title: '&#x417;&#x430;&#x43D;&#x433;&#x435;&#x437;&#x438;', group: '&#x413;&#x438;&#x43B;&#x435;&#x44F;', color: '#E05555', note: '&#x425;&#x43B;&#x435;&#x431;&#x43D;&#x438;&#x43A;&#x43E;&#x432;: &#x43F;&#x43E;&#x441;&#x43B;&#x435;&#x434;&#x43D;&#x44F;&#x44F; &#x43A;&#x43D;&#x438;&#x433;&#x430;', cover: '/images/covers/zangezi.jpg' },
];

type Pub = typeof publications[0];

export function PublicationsTimeline() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);
  const [coverModal, setCoverModal] = useState<Pub | null>(null);

  useEffect(() => {
    if (!coverModal) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setCoverModal(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [coverModal]);

  const scrollBy = (dx: number) => {
    scrollRef.current?.scrollBy({ left: dx, behavior: 'smooth' });
  };

  const handleCardClick = (pub: Pub, i: number) => {
    if (pub.cover) {
      setCoverModal(pub);
    } else {
      setActive(active === i ? null : i);
    }
  };

  return (
    <>
      <section
        id="publications"
        style={{
          padding: '80px 0',
          background: 'var(--color-bg)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px, 5vw, 48px)',
              fontWeight: 900,
              color: 'var(--color-text)',
              marginBottom: '48px',
              letterSpacing: '-0.02em',
            }}
          >
            &#x41B;&#x435;&#x43D;&#x442;&#x430; &#x438;&#x437;&#x434;&#x430;&#x43D;&#x438;&#x439;
          </h2>

          <div style={{ position: 'relative' }}>
            <button
              onClick={() => scrollBy(-320)}
              style={{
                position: 'absolute', left: -12, top: '50%', transform: 'translateY(-50%)',
                zIndex: 10, width: 36, height: 36, borderRadius: '50%',
                background: 'var(--color-bg)', border: '2px solid var(--color-border)',
                color: 'var(--color-text)', cursor: 'pointer', fontSize: '18px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >&#x2039;</button>

            <button
              onClick={() => scrollBy(320)}
              style={{
                position: 'absolute', right: -12, top: '50%', transform: 'translateY(-50%)',
                zIndex: 10, width: 36, height: 36, borderRadius: '50%',
                background: 'var(--color-bg)', border: '2px solid var(--color-border)',
                color: 'var(--color-text)', cursor: 'pointer', fontSize: '18px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >&#x203A;</button>

            <div
              style={{
                height: '2px',
                background: 'var(--color-border)',
                position: 'absolute',
                top: '50%',
                left: 0,
                right: 0,
                zIndex: 0,
              }}
            />

            <div
              ref={scrollRef}
              style={{
                display: 'flex',
                gap: '16px',
                overflowX: 'auto',
                paddingBottom: '16px',
                paddingTop: '16px',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                position: 'relative',
                zIndex: 1,
              }}
            >
              {publications.map((pub, i) => (
                <div
                  key={i}
                  onPointerDown={(e) => { if (e.pointerType === 'mouse' && e.button === 0) { e.preventDefault(); handleCardClick(pub, i); } }}
                  onClick={() => handleCardClick(pub, i)}
                  style={{
                    flexShrink: 0,
                    width: '160px',
                    background: active === i ? pub.color + '18' : 'var(--color-surface)',
                    border: `2px solid ${active === i ? pub.color : 'var(--color-border)'}`,
                    borderRadius: '10px',
                    padding: '14px 12px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    position: 'relative',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '22px',
                      fontWeight: 900,
                      color: pub.color,
                      marginBottom: '6px',
                    }}
                  >
                    {pub.year}
                  </div>

                  {pub.cover && (
                    <div style={{ marginBottom: '10px', borderRadius: '4px', overflow: 'hidden', height: '140px' }}>
                      <img
                        src={pub.cover}
                        alt=""
                        draggable={false}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', pointerEvents: 'none' }}
                      />
                    </div>
                  )}

                  <div
                    dangerouslySetInnerHTML={{ __html: pub.title }}
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '13px',
                      fontWeight: 700,
                      color: 'var(--color-text)',
                      marginBottom: '4px',
                      lineHeight: 1.3,
                    }}
                  />

                  <div
                    dangerouslySetInnerHTML={{ __html: pub.group }}
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '11px',
                      color: pub.color,
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  />

                  {pub.cover && (
                    <div style={{ marginTop: '8px', fontSize: '11px', color: 'rgba(128,128,128,0.8)', fontFamily: 'var(--font-body)' }}>
                      &#x2197; &#x43E;&#x442;&#x43A;&#x440;&#x44B;&#x442;&#x44C; &#x43E;&#x431;&#x43B;&#x43E;&#x436;&#x43A;&#x443;
                    </div>
                  )}

                  {!pub.cover && active === i && (
                    <div
                      dangerouslySetInnerHTML={{ __html: pub.note }}
                      style={{
                        marginTop: '8px',
                        fontFamily: 'var(--font-body)',
                        fontSize: '11px',
                        color: 'var(--color-text-muted)',
                        lineHeight: 1.5,
                      }}
                    />
                  )}

                  <div
                    style={{
                      position: 'absolute',
                      bottom: -10,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: 10,
                      height: 10,
                      borderRadius: '50%',
                      background: pub.color,
                      border: '2px solid var(--color-bg)',
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {coverModal && (
        <div
          onClick={() => setCoverModal(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            backgroundColor: 'rgba(0,0,0,0.88)',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            padding: '40px 24px',
            overflowY: 'auto',
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '520px',
              width: '100%',
              margin: 'auto',
            }}
          >
            <button
              onClick={() => setCoverModal(null)}
              style={{
                position: 'absolute',
                top: -14,
                right: -14,
                width: 32,
                height: 32,
                borderRadius: '50%',
                backgroundColor: coverModal.color,
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
                fontSize: '18px',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1,
              }}
            >&#x00D7;</button>

            <img
              src={coverModal.cover}
              alt=""
              style={{
                maxWidth: '100%',
                maxHeight: '72vh',
                objectFit: 'contain',
                borderRadius: '6px',
                boxShadow: `0 24px 64px rgba(0,0,0,0.6), 0 0 0 1px ${coverModal.color}30`,
              }}
            />

            <div
              style={{
                marginTop: '24px',
                width: '100%',
                backgroundColor: 'rgba(255,255,255,0.04)',
                borderRadius: '10px',
                padding: '20px 24px',
                borderLeft: `4px solid ${coverModal.color}`,
              }}
            >
              <div
                dangerouslySetInnerHTML={{ __html: coverModal.title }}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '22px',
                  fontWeight: 700,
                  color: '#fff',
                  marginBottom: '8px',
                }}
              />
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '13px',
                  color: coverModal.color,
                  marginBottom: '12px',
                }}
              >
                {coverModal.year}&nbsp;&#xB7;&nbsp;<span dangerouslySetInnerHTML={{ __html: coverModal.group }} />
              </div>
              <div
                dangerouslySetInnerHTML={{ __html: coverModal.note }}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '15px',
                  lineHeight: '1.6',
                  color: 'rgba(255,255,255,0.75)',
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
