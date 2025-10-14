import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type PairItem = { alt: string; before: string; after: string };
type SingleItem = { alt: string; src: string };
type Item = PairItem | SingleItem;

function useSlidesPerView() {
  const [spv, setSpv] = useState(3);
  useEffect(() => {
    const onResize = () => {
      const w = window.innerWidth;
      if (w < 768) setSpv(1);        // mobile
      else if (w < 1024) setSpv(2);  // tablet
      else setSpv(3);                // desktop
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return spv;
}

const isPair = (item: Item): item is PairItem => "before" in item && "after" in item;

export function ResultadosReais({ itens }: { itens: Item[] }) {
  const visible = useSlidesPerView();
  const total = itens.length;
  const [idx, setIdx] = useState(0);

  // medir viewport do carrossel
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const [vpWidth, setVpWidth] = useState(0);
  useEffect(() => {
    const update = () => setVpWidth(viewportRef.current?.clientWidth || 0);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, total - visible);
  useEffect(() => { if (idx > maxIndex) setIdx(0); }, [visible, total, maxIndex, idx]);

  // autoplay
  useEffect(() => {
    if (total <= visible) return;
    const t = setInterval(() => setIdx(p => (p >= maxIndex ? 0 : p + 1)), 3500);
    return () => clearInterval(t);
  }, [total, visible, maxIndex]);

  // largura exata da coluna (1 por vez no mobile; 2/3 no tablet/desktop)
  const slidePx = vpWidth > 0
    ? (visible === 1 ? vpWidth : vpWidth / visible)
    : 0;

  const translate = idx * (slidePx || 0);

  const next = () => setIdx(p => (p >= maxIndex ? 0 : p + 1));
  const prev = () => setIdx(p => (p <= 0 ? maxIndex : p - 1));

  // swipe
  const startX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => { startX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (startX.current == null) return;
    const dx = e.changedTouches[0].clientX - startX.current;
    if (Math.abs(dx) > 40) (dx < 0 ? next() : prev());
    startX.current = null;
  };

  return (
    <div className="relative max-w-6xl mx-auto">
      <div
        ref={viewportRef}
        className="overflow-hidden rounded-2xl"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* TRACK EM GRID HORIZONTAL (sem wrap). No mobile, sem gaps para centralizar perfeito */}
        <div
          className={`grid grid-flow-col transition-transform duration-700 ease-in-out will-change-transform ${visible === 1 ? 'gap-0' : 'gap-4'}`}
          style={{
            gridAutoColumns: slidePx ? `${Math.round(slidePx)}px` : "100%",
            transform: `translateX(-${translate}px)`,
          }}
        >
          {itens.map((item, i) => {
            // aspect dinâmico: par (duas fotos 4:5 lado a lado) => 8/5; imagem única => 4/5
            const aspect = isPair(item)
              ? (visible === 1 ? "8 / 5" : "4 / 5")   // no desktop, manter mais alto como na LP original
              : (visible === 2 ? "5 / 6" : "4 / 5");

            return (
              <div key={i} className="box-border">
                {/* SLIDE sem fundo: a imagem ocupa 100% da área */}
                <div
                  className="relative w-full overflow-hidden rounded-2xl"
                  style={{ aspectRatio: aspect }}
                >
                  {isPair(item) ? (
                    <div className="absolute inset-0 flex">
                      <div className="basis-1/2 min-w-0 h-full">
                        <img
                          src={item.before}
                          alt={`Antes - ${item.alt}`}
                          className="block w-full h-full object-cover select-none"
                          draggable={false}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div className="basis-1/2 min-w-0 h-full">
                        <img
                          src={item.after}
                          alt={`Depois - ${item.alt}`}
                          className="block w-full h-full object-cover select-none"
                          draggable={false}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      {/* divisor sutil (opcional)
                      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-px h-full bg-white/40" /> */}
                    </div>
                  ) : (
                    <img
                      src={(item as SingleItem).src}
                      alt={item.alt}
                      className="absolute inset-0 block w-full h-full object-cover select-none"
                      draggable={false}
                      loading="lazy"
                      decoding="async"
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {total > visible && (
        <>
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm hover:bg-white/40 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 text-white hover:text-white/90 opacity-60 hover:opacity-100"
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm hover:bg-white/40 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 text-white hover:text-white/90 opacity-60 hover:opacity-100"
            aria-label="Próxima imagem"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}
    </div>
  );
}