import { useEffect, useRef, useState } from "react";
import { estadisticas, apuntes, examenes, cursos, carreras } from "../data/mockData";

const TIPO_ICON = { Resumen: "📄", Mapa: "🗺️", Guía: "📘", Apunte: "📝", Esquema: "📊", Código: "💻" };

const COLABORACIONES = [
  { nombre: "Alianza del Pacífico",              abrev: "A. Pacífico",    icono: "🌏", color: "#4f46e5" },
  { nombre: "Alianza Universitaria SAP",          abrev: "SAP Univ.",      icono: "💼", color: "#0070d2" },
  { nombre: "Arzobispado de Huancayo",            abrev: "Arzobispado",    icono: "⛪", color: "#7c3aed" },
  { nombre: "Asociación Don Bosco",               abrev: "Don Bosco",      icono: "🎓", color: "#059669" },
  { nombre: "Caja Huancayo",                      abrev: "CMAC HYO",       icono: "🏦", color: "#d97706" },
  { nombre: "Cámara de Comercio de Huancayo",     abrev: "CCH",            icono: "🏛️", color: "#0284c7" },
  { nombre: "Centro Digital Continental",         abrev: "CDC",            icono: "💻", color: "#7c3aed" },
  { nombre: "Electrocentro S.A.",                 abrev: "Electrocentro",  icono: "⚡", color: "#f59e0b" },
  { nombre: "Hospital Daniel Alcides Carrión",    abrev: "H. D.A.C.",      icono: "🏥", color: "#dc2626" },
  { nombre: "Hospital El Carmen",                 abrev: "H. El Carmen",   icono: "🏥", color: "#db2777" },
  { nombre: "IEEE",                               abrev: "IEEE",           icono: "⚙️", color: "#00629b" },
  { nombre: "Minera Chinalco",                    abrev: "Chinalco",       icono: "⛏️", color: "#374151" },
  { nombre: "Project Management Institute",       abrev: "PMI",            icono: "📊", color: "#0c7c59" },
  { nombre: "Red Asistencial Junín – EsSalud",    abrev: "EsSalud",        icono: "🩺", color: "#2563eb" },
  { nombre: "Red de Salud Valle del Mantaro",     abrev: "R. Mantaro",     icono: "🌿", color: "#16a34a" },
  { nombre: "Universidad de British Columbia",    abrev: "UBC",            icono: "🍁", color: "#c41230" },
  { nombre: "Universidad de la Costa",            abrev: "U. Costa",       icono: "🇨🇴", color: "#0057a8" },
  { nombre: "Univ. Tecnológica de Guangdong",     abrev: "UTG China",      icono: "🇨🇳", color: "#de2910" },
];

/* ─── Tiny hook: intersection observer for scroll-reveal ─── */
function useReveal() {
  const ref = useRef(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); obs.disconnect(); } }, { threshold: 0.12 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, on];
}

/* ─── Horizontal drag-scroll slider ─── */
function Slider({ children, gap = 16 }) {
  const trackRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - trackRef.current.offsetLeft;
    scrollLeft.current = trackRef.current.scrollLeft;
    trackRef.current.style.cursor = "grabbing";
    trackRef.current.style.userSelect = "none";
  };
  const onMouseUp = () => {
    isDragging.current = false;
    if (trackRef.current) {
      trackRef.current.style.cursor = "grab";
      trackRef.current.style.userSelect = "";
    }
  };
  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.4;
    trackRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div style={{ position: "relative" }}>
      <div
        ref={trackRef}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseUp}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        style={{
          display: "flex",
          gap,
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          cursor: "grab",
          paddingBottom: 8,
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {children}
      </div>
      <div style={{ position:"absolute", top:0, left:0, width:32, height:"100%", background:"linear-gradient(to right, var(--bg-page,#0f0f13), transparent)", pointerEvents:"none" }} />
      <div style={{ position:"absolute", top:0, right:0, width:48, height:"100%", background:"linear-gradient(to left, var(--bg-page,#0f0f13), transparent)", pointerEvents:"none" }} />
    </div>
  );
}

/* ─── Logo marquee: infinite auto-scroll (forward) ─── */
function LogoMarquee({ items, speed = 0.5 }) {
  const track1Ref = useRef(null);
  const track2Ref = useRef(null);
  const animRef   = useRef(null);
  const posRef    = useRef(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    const step = () => {
      if (!pausedRef.current && track1Ref.current) {
        posRef.current -= speed;
        const w = track1Ref.current.scrollWidth;
        if (Math.abs(posRef.current) >= w) posRef.current = 0;
        [track1Ref, track2Ref].forEach((r) => {
          if (r.current) r.current.style.transform = `translateX(${posRef.current}px)`;
        });
      }
      animRef.current = requestAnimationFrame(step);
    };
    animRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animRef.current);
  }, [speed]);

  return (
    <div
      style={{ overflow: "hidden", position: "relative" }}
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; }}
    >
      <div style={{ display: "flex", gap: 12, width: "max-content", alignItems: "center" }}>
        <div ref={track1Ref} style={{ display: "flex", gap: 12, willChange: "transform", alignItems: "center" }}>
          {items}
        </div>
        <div ref={track2Ref} style={{ display: "flex", gap: 12, willChange: "transform", alignItems: "center" }}>
          {items}
        </div>
      </div>
      {/* fade edges */}
      <div style={{ position:"absolute", top:0, left:0, width:80, height:"100%", background:"linear-gradient(to right, var(--bg-page,#0f0f13), transparent)", pointerEvents:"none", zIndex:2 }} />
      <div style={{ position:"absolute", top:0, right:0, width:80, height:"100%", background:"linear-gradient(to left, var(--bg-page,#0f0f13), transparent)", pointerEvents:"none", zIndex:2 }} />
    </div>
  );
}

/* ─── Logo marquee: infinite auto-scroll (reverse) ─── */
function LogoMarqueeReverse({ items, speed = 0.45 }) {
  const track1Ref = useRef(null);
  const track2Ref = useRef(null);
  const animRef   = useRef(null);
  const posRef    = useRef(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    const step = () => {
      if (!pausedRef.current && track1Ref.current) {
        posRef.current += speed;
        const w = track1Ref.current.scrollWidth;
        if (posRef.current >= w) posRef.current = 0;
        if (track1Ref.current) track1Ref.current.style.transform = `translateX(${posRef.current - w}px)`;
        if (track2Ref.current) track2Ref.current.style.transform = `translateX(${posRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(step);
    };
    animRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animRef.current);
  }, [speed]);

  return (
    <div
      style={{ overflow: "hidden", position: "relative" }}
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; }}
    >
      <div style={{ display: "flex", gap: 12, width: "max-content", alignItems: "center" }}>
        <div ref={track1Ref} style={{ display: "flex", gap: 12, willChange: "transform", alignItems: "center" }}>
          {items}
        </div>
        <div ref={track2Ref} style={{ display: "flex", gap: 12, willChange: "transform", alignItems: "center" }}>
          {items}
        </div>
      </div>
      <div style={{ position:"absolute", top:0, left:0, width:80, height:"100%", background:"linear-gradient(to right, var(--bg-page,#0f0f13), transparent)", pointerEvents:"none", zIndex:2 }} />
      <div style={{ position:"absolute", top:0, right:0, width:80, height:"100%", background:"linear-gradient(to left, var(--bg-page,#0f0f13), transparent)", pointerEvents:"none", zIndex:2 }} />
    </div>
  );
}

/* ─── Single logo chip ─── */
function LogoChip({ c }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      title={c.nombre}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "10px 18px",
        borderRadius: 100,
        background: hov ? `${c.color}18` : "var(--bg-card)",
        border: `1px solid ${hov ? c.color + "55" : "var(--border)"}`,
        transition: "all .22s cubic-bezier(.4,0,.2,1)",
        transform: hov ? "translateY(-2px)" : "none",
        boxShadow: hov ? `0 6px 20px ${c.color}22` : "none",
        cursor: "default",
        userSelect: "none",
        flexShrink: 0,
        whiteSpace: "nowrap",
      }}
    >
      {/* icon bubble */}
      <span
        style={{
          width: 30,
          height: 30,
          borderRadius: "50%",
          background: `${c.color}22`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1rem",
          flexShrink: 0,
          border: `1px solid ${c.color}33`,
        }}
      >
        {c.icono}
      </span>
      {/* short name */}
      <span
        style={{
          fontSize: ".78rem",
          fontWeight: 700,
          color: hov ? "var(--text-primary)" : "var(--text-secondary)",
          letterSpacing: ".01em",
          transition: "color .18s",
        }}
      >
        {c.abrev}
      </span>
    </div>
  );
}

export default function Home({ navigate }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVisible(true), 60); return () => clearTimeout(t); }, []);

  const [r1, v1] = useReveal();
  const [r2, v2] = useReveal();
  const [r3, v3] = useReveal();
  const [r4, v4] = useReveal();
  const [r5, v5] = useReveal();

  const topExamenes = [...examenes].sort((a, b) => b.descargas - a.descargas).slice(0, 8);
  const topApuntes  = [...apuntes].sort((a, b) => b.likes - a.likes).slice(0, 6);

  /* split into two rows */
  const row1 = COLABORACIONES.slice(0, Math.ceil(COLABORACIONES.length / 2));
  const row2 = COLABORACIONES.slice(Math.ceil(COLABORACIONES.length / 2));

  const chips1 = row1.map((c, i) => <LogoChip key={i} c={c} />);
  const chips2 = row2.map((c, i) => <LogoChip key={i} c={c} />);

  return (
    <div className={`hr${visible ? " hr-on" : ""}`}>
      <style>{`
        /* ── root & tokens ── */
        .hr { --d: 0.07s; }
        .hr-fade { opacity:0; transform:translateY(20px); transition:opacity .6s ease,transform .6s ease; }
        .hr-on .hr-fade { opacity:1; transform:none; }
        .hr-on .d1{transition-delay:calc(var(--d)*1)}
        .hr-on .d2{transition-delay:calc(var(--d)*2)}
        .hr-on .d3{transition-delay:calc(var(--d)*3)}
        .hr-on .d4{transition-delay:calc(var(--d)*4)}
        .hr-on .d5{transition-delay:calc(var(--d)*5)}
        .hr-on .d6{transition-delay:calc(var(--d)*6)}
        .hr-reveal { opacity:0; transform:translateY(24px); transition:opacity .55s ease,transform .55s ease; }
        .hr-reveal.visible { opacity:1; transform:none; }

        /* ── hero ── */
        .hr-hero {
          position:relative; min-height:92vh;
          display:flex; align-items:center; justify-content:center;
          padding:100px 24px 80px; overflow:hidden; text-align:center;
        }
        .hr-hero-bg {
          position:absolute; inset:0; pointer-events:none;
          background:
            radial-gradient(ellipse 80% 60% at 50% -10%, rgba(99,102,241,.28) 0%, transparent 65%),
            radial-gradient(ellipse 45% 35% at 85% 70%, rgba(124,58,237,.1) 0%, transparent 55%),
            radial-gradient(ellipse 30% 25% at 10% 80%, rgba(16,185,129,.06) 0%, transparent 50%);
        }
        .hr-grid {
          position:absolute; inset:0; pointer-events:none;
          background-image:
            linear-gradient(rgba(99,102,241,.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,.035) 1px, transparent 1px);
          background-size:56px 56px;
          mask-image:radial-gradient(ellipse 85% 75% at 50% 40%, black 25%, transparent 75%);
        }
        .hr-orb {
          position:absolute; border-radius:50%; filter:blur(80px); pointer-events:none; opacity:.18;
        }
        .hr-orb-1 { width:500px; height:500px; top:-120px; left:50%; transform:translateX(-50%); background:radial-gradient(circle, #6366f1 0%, transparent 70%); }
        .hr-orb-2 { width:280px; height:280px; bottom:80px; right:8%; background:radial-gradient(circle, #7c3aed 0%, transparent 70%); }
        .hr-orb-3 { width:200px; height:200px; bottom:120px; left:5%; background:radial-gradient(circle, #10b981 0%, transparent 70%); opacity:.1; }

        .hr-inner { position:relative; z-index:1; max-width:820px; margin:0 auto; }

        .hr-badge {
          display:inline-flex; align-items:center; gap:8px;
          padding:6px 18px; border-radius:100px;
          font-size:.76rem; font-weight:700; letter-spacing:.05em;
          background:rgba(99,102,241,.12); border:1px solid rgba(99,102,241,.3);
          color:var(--indigo-light); margin-bottom:28px;
        }
        .hr-badge-dot {
          width:7px; height:7px; border-radius:50%; background:var(--indigo-light);
          animation:pulse-dot 2.2s ease infinite;
        }
        @keyframes pulse-dot { 0%,100%{opacity:1;box-shadow:0 0 0 0 rgba(129,140,248,.55)} 50%{opacity:.7;box-shadow:0 0 0 6px rgba(129,140,248,0)} }

        .hr-h1 {
          font-family:var(--font-display); font-weight:900;
          font-size:clamp(2.2rem,6vw,4rem); line-height:1.08; letter-spacing:-.035em;
          color:var(--text-primary); margin-bottom:22px;
        }
        .hr-h1 .accent {
          background:linear-gradient(128deg,#818cf8 0%,#a78bfa 45%,#c084fc 100%);
          -webkit-background-clip:text; background-clip:text;
          -webkit-text-fill-color:transparent;
        }

        .hr-sub {
          color:var(--text-secondary);
          font-size:clamp(1rem,2.2vw,1.12rem);
          max-width:560px; margin:0 auto 40px; line-height:1.8;
        }

        .hr-cta {
          display:flex; gap:12px; justify-content:center; flex-wrap:wrap; margin-bottom:64px;
        }
        .btn-prim {
          background:linear-gradient(135deg,#4f46e5,#7c3aed);
          border:none; border-radius:14px; padding:14px 32px;
          color:#fff; font-family:var(--font-display); font-weight:700; font-size:.96rem;
          cursor:pointer; transition:all .22s;
          box-shadow:0 4px 24px rgba(99,102,241,.38);
          display:flex; align-items:center; gap:8px;
        }
        .btn-prim:hover { transform:translateY(-3px); box-shadow:0 10px 32px rgba(99,102,241,.5); }
        .btn-sec {
          background:var(--bg-elevated); border:1px solid var(--border);
          border-radius:14px; padding:14px 32px;
          color:var(--text-primary); font-family:var(--font-display); font-weight:600; font-size:.96rem;
          cursor:pointer; transition:all .2s; display:flex; align-items:center; gap:8px;
        }
        .btn-sec:hover { background:var(--bg-card); border-color:rgba(255,255,255,.22); transform:translateY(-2px); }

        /* ── stats ── */
        .hr-stats {
          display:grid; grid-template-columns:repeat(6,1fr);
          background:var(--bg-card); border:1px solid var(--border);
          border-radius:20px; overflow:hidden;
          box-shadow:0 8px 40px rgba(0,0,0,.18);
        }
        .hr-stat {
          display:flex; flex-direction:column; align-items:center;
          gap:4px; padding:20px 6px;
          border-right:1px solid var(--border); transition:background .18s;
          cursor:default;
        }
        .hr-stat:last-child { border-right:none; }
        .hr-stat:hover { background:var(--bg-elevated); }
        .hr-stat-ico { font-size:1.2rem; }
        .hr-stat-val {
          font-family:var(--font-display); font-weight:900;
          font-size:clamp(1.1rem,2vw,1.5rem); color:var(--text-primary); line-height:1;
        }
        .hr-stat-lbl {
          font-size:.62rem; font-weight:700; color:var(--text-muted);
          text-transform:uppercase; letter-spacing:.08em;
        }

        /* ── section shell ── */
        .hr-section { padding:80px 24px; max-width:1380px; margin:0 auto; }
        .hr-section-dark {
          background:var(--bg-card);
          border-top:1px solid var(--border); border-bottom:1px solid var(--border);
        }
        .hr-section-dark .hr-section { padding-top:72px; padding-bottom:72px; }

        .hr-sec-head {
          display:flex; align-items:flex-end; justify-content:space-between;
          gap:12px; margin-bottom:32px; flex-wrap:wrap;
        }
        .hr-sec-title {
          font-family:var(--font-display); font-weight:800;
          font-size:clamp(1.3rem,3vw,1.75rem);
          color:var(--text-primary); margin-bottom:4px; letter-spacing:-.025em;
        }
        .hr-sec-sub { font-size:.875rem; color:var(--text-muted); }
        .hr-see-all {
          background:none; border:1px solid var(--border); border-radius:10px;
          padding:7px 18px; color:var(--indigo-light);
          font-family:var(--font-body); font-weight:600; font-size:.82rem;
          cursor:pointer; transition:all .15s; white-space:nowrap;
        }
        .hr-see-all:hover { background:var(--indigo-dim); border-color:rgba(99,102,241,.4); }

        /* ── exam slider cards ── */
        .exam-slide {
          flex:0 0 300px; scroll-snap-align:start;
          background:var(--bg-card); border:1px solid var(--border);
          border-radius:18px; padding:20px;
          cursor:pointer; transition:all .22s;
          display:flex; flex-direction:column;
          border-top:3px solid transparent;
        }
        .exam-slide:hover {
          transform:translateY(-4px);
          box-shadow:0 14px 36px rgba(0,0,0,.28);
        }
        .exam-top { display:flex; align-items:center; justify-content:space-between; margin-bottom:14px; gap:6px; flex-wrap:wrap; }
        .chip-tipo {
          padding:3px 11px; border-radius:100px;
          font-size:.68rem; font-weight:800; letter-spacing:.06em; text-transform:uppercase;
        }
        .chip-parcial { background:rgba(99,102,241,.15); color:var(--indigo-light); }
        .chip-final   { background:rgba(244,63,94,.12); color:#fb7185; }
        .chip-small {
          font-size:.65rem; font-weight:700; border-radius:100px; padding:2px 8px;
        }
        .chip-ok      { background:var(--emerald-dim); color:var(--emerald); border:1px solid rgba(16,185,129,.3); }
        .chip-premium { background:var(--amber-dim); color:var(--amber); border:1px solid rgba(245,158,11,.3); }
        .exam-title {
          font-family:var(--font-display); font-weight:700;
          font-size:.93rem; line-height:1.38; margin-bottom:12px; color:var(--text-primary);
          display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden;
        }
        .exam-curso {
          display:flex; align-items:center; gap:8px; margin-bottom:14px;
        }
        .dot { width:8px; height:8px; border-radius:50%; flex-shrink:0; }
        .exam-curso-name { font-size:.8rem; color:var(--text-secondary); font-weight:500; min-width:0; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
        .exam-meta {
          display:flex; gap:12px; font-size:.76rem; color:var(--text-muted);
          margin-top:auto; padding-top:14px; border-top:1px solid var(--border);
          align-items:center;
        }
        .exam-date { margin-left:auto; font-size:.7rem; }

        /* ── apuntes grid ── */
        .ap-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; }
        .ap-card {
          background:var(--bg-card); border:1px solid var(--border);
          border-radius:16px; padding:20px; cursor:pointer;
          transition:all .2s; display:flex; flex-direction:column;
        }
        .ap-card:hover { border-color:rgba(99,102,241,.3); transform:translateY(-3px); box-shadow:0 8px 24px rgba(0,0,0,.2); }
        .ap-type-row { display:flex; align-items:center; gap:7px; margin-bottom:10px; }
        .ap-type-lbl { font-size:.67rem; font-weight:800; color:var(--text-muted); text-transform:uppercase; letter-spacing:.08em; }
        .ap-title { font-family:var(--font-display); font-weight:700; font-size:.9rem; line-height:1.4; margin-bottom:6px; color:var(--text-primary); }
        .ap-curso { font-size:.78rem; color:var(--text-secondary); margin-bottom:12px; }
        .ap-meta { display:flex; gap:12px; font-size:.76rem; color:var(--text-muted); margin-top:auto; }

        /* ── carreras slider ── */
        .car-slide {
          flex:0 0 200px; scroll-snap-align:start;
          background:var(--bg-card); border:1px solid var(--border);
          border-radius:16px; padding:20px 16px;
          cursor:pointer; transition:all .22s; text-align:center;
          display:flex; flex-direction:column; align-items:center; gap:10px;
        }
        .car-slide:hover { transform:translateY(-4px); box-shadow:0 10px 28px rgba(0,0,0,.22); }
        .car-ico { font-size:1.8rem; }
        .car-name { font-family:var(--font-display); font-weight:700; font-size:.8rem; color:var(--text-primary); line-height:1.3; }
        .car-fac { font-size:.65rem; color:var(--text-muted); font-weight:600; }
        .car-bar { width:100%; height:3px; border-radius:2px; margin-top:4px; }

        /* ── colaboraciones ── */
        .colab-section {
          padding:64px 0 72px;
          border-top:1px solid var(--border); border-bottom:1px solid var(--border);
          overflow:hidden;
        }
        .colab-header { max-width:1380px; margin:0 auto 32px; padding:0 24px; }
        .colab-count-badge {
          display:inline-flex; align-items:center; gap:6px;
          background:rgba(99,102,241,.1); border:1px solid rgba(99,102,241,.25);
          border-radius:100px; padding:4px 14px;
          font-size:.75rem; font-weight:700; color:var(--indigo-light);
        }
        .colab-marquee-row { padding:6px 0; }

        /* ── divider line between rows ── */
        .colab-divider {
          width:100%; height:1px;
          background:linear-gradient(90deg,transparent,var(--border),transparent);
          margin:10px 0;
        }

        /* ── steps ── */
        .hr-steps { display:grid; grid-template-columns:repeat(4,1fr); gap:20px; }
        .hr-step {
          background:var(--bg-card); border:1px solid var(--border);
          border-radius:20px; padding:28px 22px;
          position:relative; overflow:hidden; transition:all .22s;
        }
        .hr-step:hover { border-color:rgba(99,102,241,.3); transform:translateY(-3px); box-shadow:0 10px 28px rgba(0,0,0,.2); }
        .hr-step-n {
          font-family:var(--font-display); font-size:.67rem; font-weight:800;
          color:var(--indigo-light); letter-spacing:.12em; text-transform:uppercase; margin-bottom:14px;
        }
        .hr-step-ico { font-size:2rem; margin-bottom:14px; display:block; }
        .hr-step-title { font-family:var(--font-display); font-weight:800; font-size:.95rem; margin-bottom:8px; color:var(--text-primary); }
        .hr-step-desc { color:var(--text-secondary); font-size:.84rem; line-height:1.7; }
        .hr-step-ghost {
          position:absolute; right:-6px; bottom:-14px;
          font-family:var(--font-display); font-weight:900; font-size:5.5rem;
          color:rgba(99,102,241,.05); pointer-events:none; line-height:1; user-select:none;
        }

        /* ── cta banner ── */
        .hr-banner {
          background:linear-gradient(135deg,rgba(99,102,241,.12) 0%,rgba(124,58,237,.08) 50%,rgba(99,102,241,.04) 100%);
          border-top:1px solid rgba(99,102,241,.18); border-bottom:1px solid rgba(99,102,241,.18);
          padding:96px 24px; text-align:center;
        }
        .hr-banner-title {
          font-family:var(--font-display); font-weight:900;
          font-size:clamp(1.7rem,4vw,2.4rem); letter-spacing:-.025em; margin-bottom:14px;
          color:var(--text-primary);
        }
        .hr-banner-sub {
          color:var(--text-secondary); font-size:1rem;
          max-width:500px; margin:0 auto 36px; line-height:1.75;
        }
        .hr-banner-btns { display:flex; gap:12px; justify-content:center; flex-wrap:wrap; }

        .hr-avs { display:flex; align-items:center; justify-content:center; gap:6px; margin-bottom:20px; }
        .hr-av {
          width:38px; height:38px; border-radius:50%;
          border:2.5px solid var(--bg-card);
          display:flex; align-items:center; justify-content:center;
          font-size:.72rem; font-weight:800; color:#fff;
          margin-left:-10px; flex-shrink:0;
        }
        .hr-av:first-child { margin-left:0; }
        .hr-av-ct {
          background:var(--bg-elevated); border:1px solid var(--border);
          border-radius:100px; padding:4px 14px;
          font-size:.78rem; font-weight:600; color:var(--text-secondary);
          margin-left:8px;
        }

        /* ── responsive ── */
        @media(max-width:1100px) {
          .hr-stats { grid-template-columns:repeat(3,1fr); }
          .hr-stat:nth-child(3){ border-right:none; }
          .hr-stat:nth-child(4){ border-top:1px solid var(--border); }
          .hr-steps { grid-template-columns:repeat(2,1fr); }
          .ap-grid { grid-template-columns:repeat(2,1fr); }
        }
        @media(max-width:720px) {
          .hr-hero { min-height:auto; padding:88px 18px 60px; }
          .hr-stats { grid-template-columns:repeat(2,1fr); }
          .hr-stat:nth-child(2){ border-right:none; }
          .hr-stat:nth-child(3){ border-top:1px solid var(--border); border-right:1px solid var(--border); }
          .hr-stat:nth-child(5){ border-right:none; }
          .hr-section { padding:56px 16px; }
          .hr-steps { grid-template-columns:1fr; }
          .ap-grid { grid-template-columns:1fr; }
          .exam-slide { flex:0 0 268px; }
          .car-slide { flex:0 0 156px; }
          .hr-banner { padding:64px 16px; }
        }
        @media(max-width:480px) {
          .hr-stats { grid-template-columns:repeat(3,1fr); }
          .hr-stat { padding:14px 4px; }
          .hr-stat-val { font-size:1.05rem; }
          .hr-stat-lbl { font-size:.55rem; }
          .hr-stat:nth-child(3){ border-right:1px solid var(--border); }
          .hr-stat:nth-child(4){ border-top:1px solid var(--border); border-right:none; }
          .hr-stat:nth-child(5){ border-top:1px solid var(--border); border-right:1px solid var(--border); }
          .hr-stat:nth-child(6){ border-top:1px solid var(--border); }
        }
      `}</style>

      {/* ══ HERO ══ */}
      <section className="hr-hero">
        <div className="hr-hero-bg" />
        <div className="hr-grid" />
        <div className="hr-orb hr-orb-1" />
        <div className="hr-orb hr-orb-2" />
        <div className="hr-orb hr-orb-3" />

        <div className="hr-inner">
          <div className="hr-fade hr-on d1" style={{ transitionDelay:".07s" }}>
            <div className="hr-badge">
              <span className="hr-badge-dot" />
              Plataforma académica · Universidad Continental
            </div>
          </div>

          <h1 className="hr-h1 hr-fade d2">
            El conocimiento de<br />
            <span className="accent">toda la UC, en un solo lugar</span>
          </h1>

          <p className="hr-sub hr-fade d3">
            Accede a apuntes, exámenes anteriores y materiales de todos los
            ciclos y carreras. Compartido por estudiantes, para estudiantes.
          </p>

          <div className="hr-cta hr-fade d4">
            <button className="btn-prim" onClick={() => navigate("examenes")}>
              📋 Ver exámenes
            </button>
            <button className="btn-sec" onClick={() => navigate("apuntes")}>
              📝 Explorar apuntes →
            </button>
          </div>

          <div className="hr-stats hr-fade d5">
            {[
              { lbl:"Apuntes",     val:estadisticas.apuntes.toLocaleString(),     ico:"📝" },
              { lbl:"Exámenes",    val:estadisticas.examenes.toLocaleString(),    ico:"📋" },
              { lbl:"Estudiantes", val:estadisticas.estudiantes.toLocaleString(), ico:"👥" },
              { lbl:"Cursos",      val:estadisticas.cursos.toLocaleString(),      ico:"📚" },
              { lbl:"Docentes",    val:estadisticas.docentes.toLocaleString(),    ico:"👨‍🏫" },
              { lbl:"Carreras",    val:estadisticas.carreras.toLocaleString(),    ico:"🏛️" },
            ].map((s) => (
              <div className="hr-stat" key={s.lbl}>
                <span className="hr-stat-ico">{s.ico}</span>
                <span className="hr-stat-val">{s.val}</span>
                <span className="hr-stat-lbl">{s.lbl}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ EXÁMENES — slider ══ */}
      <section className="hr-section" ref={r1}>
        <div className={`hr-reveal${v1 ? " visible" : ""}`}>
          <div className="hr-sec-head">
            <div>
              <div className="hr-sec-title">Exámenes recientes</div>
              <div className="hr-sec-sub">Los más descargados — arrastra para ver más</div>
            </div>
            <button className="hr-see-all" onClick={() => navigate("examenes")}>Ver todos →</button>
          </div>
          <Slider gap={16}>
            {topExamenes.map((ex) => {
              const curso = cursos.find((c) => c.id === ex.cursoId);
              return (
                <div
                  key={ex.id}
                  className="exam-slide"
                  style={{ borderTopColor: curso?.color || "transparent" }}
                  onClick={() => navigate("examenes", { cursoId: String(ex.cursoId) })}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${curso?.color || "#6366f1"}55`; e.currentTarget.style.borderTopColor = curso?.color || "#6366f1"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.borderTopColor = curso?.color || "transparent"; }}
                >
                  <div className="exam-top">
                    <span className={`chip-tipo ${ex.tipo === "Final" ? "chip-final" : "chip-parcial"}`}>{ex.tipo}</span>
                    <div style={{ display:"flex", gap:5 }}>
                      {ex.resuelto && <span className="chip-small chip-ok">✓</span>}
                      {ex.premium  && <span className="chip-small chip-premium">⭐</span>}
                    </div>
                  </div>
                  <div className="exam-title">{ex.titulo}</div>
                  {curso && (
                    <div className="exam-curso">
                      <span className="dot" style={{ background: curso.color }} />
                      <span className="exam-curso-name">{curso.nombre}</span>
                    </div>
                  )}
                  <div className="exam-meta">
                    <span>⬇️ {ex.descargas.toLocaleString()}</span>
                    <span>❤️ {ex.likes}</span>
                    <span className="exam-date">{ex.año}-{ex.semestre}</span>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>

      {/* ══ APUNTES ══ */}
      <div className="hr-section-dark" ref={r2}>
        <div className="hr-section">
          <div className={`hr-reveal${v2 ? " visible" : ""}`}>
            <div className="hr-sec-head">
              <div>
                <div className="hr-sec-title">Apuntes destacados</div>
                <div className="hr-sec-sub">Material verificado por la comunidad</div>
              </div>
              <button className="hr-see-all" onClick={() => navigate("apuntes")}>Ver todos →</button>
            </div>
            <div className="ap-grid">
              {topApuntes.map((ap) => {
                const curso = cursos.find((c) => c.id === ap.cursoId);
                return (
                  <div
                    key={ap.id}
                    className="ap-card"
                    onClick={() => navigate("apuntes", { cursoId: String(ap.cursoId), tipo: ap.tipo })}
                  >
                    <div className="ap-type-row">
                      <span style={{ fontSize:"1rem" }}>{TIPO_ICON[ap.tipo] || "📄"}</span>
                      <span className="ap-type-lbl">{ap.tipo}</span>
                      {ap.premium && <span className="chip-small chip-premium" style={{ marginLeft:"auto" }}>⭐ PRO</span>}
                    </div>
                    <div className="ap-title">{ap.titulo}</div>
                    {curso && <div className="ap-curso">{curso.nombre}</div>}
                    <div className="ap-meta">
                      <span>⬇️ {ap.descargas.toLocaleString()}</span>
                      <span>❤️ {ap.likes}</span>
                      <span style={{ marginLeft:"auto", fontSize:".7rem" }}>Sem. {ap.semana}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ══ CARRERAS — slider ══ */}
      <section className="hr-section" ref={r3}>
        <div className={`hr-reveal${v3 ? " visible" : ""}`}>
          <div className="hr-sec-head">
            <div>
              <div className="hr-sec-title">Explora por carrera</div>
              <div className="hr-sec-sub">Encuentra material específico para tu programa</div>
            </div>
            <button className="hr-see-all" onClick={() => navigate("cursos")}>Ver cursos →</button>
          </div>
          <Slider gap={14}>
            {carreras.map((car) => (
              <div
                key={car.id}
                className="car-slide"
                onClick={() => navigate("examenes", { carreraId: String(car.id) })}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${car.color}60`; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; }}
              >
                <span className="car-ico">{car.icono || "🎓"}</span>
                <div className="car-name">{car.nombre}</div>
                <div className="car-bar" style={{ background: `linear-gradient(90deg, ${car.color}, ${car.color}44)` }} />
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* ══ COLABORACIONES — logo marquee ══ */}
      <div className="colab-section" ref={r4}>
        <div className={`hr-reveal${v4 ? " visible" : ""}`}>

          {/* header */}
          <div className="colab-header">
            <div className="hr-sec-head" style={{ marginBottom: 0 }}>
              <div>
                <div className="hr-sec-title">Alianzas y colaboraciones</div>
                <div className="hr-sec-sub">Instituciones que impulsan la UC sede Huancayo</div>
              </div>
              <div className="colab-count-badge">
                🤝 {COLABORACIONES.length} alianzas
              </div>
            </div>
          </div>

          {/* Row 1 — forward */}
          <div className="colab-marquee-row">
            <LogoMarquee items={chips1} speed={0.5} />
          </div>

          <div className="colab-divider" />

          {/* Row 2 — reverse */}
          <div className="colab-marquee-row">
            <LogoMarqueeReverse items={chips2} speed={0.42} />
          </div>

        </div>
      </div>

      {/* ══ CÓMO FUNCIONA ══ */}
      <div className="hr-section-dark">
        <div className="hr-section">
          <div style={{ textAlign:"center", marginBottom:44 }}>
            <div className="hr-sec-title">¿Cómo funciona?</div>
            <div className="hr-sec-sub" style={{ marginTop:4 }}>Simple, rápido y colaborativo</div>
          </div>
          <div className="hr-steps">
            {[
              { n:"01", ico:"🔍", title:"Busca tu curso",       desc:"Filtra por carrera, ciclo o docente y encuentra exactamente lo que necesitas." },
              { n:"02", ico:"⬇️", title:"Descarga al instante", desc:"Accede a apuntes y exámenes. Algunos son gratuitos, otros requieren cuenta premium." },
              { n:"03", ico:"📤", title:"Comparte y gana",      desc:"Sube tus propios materiales, acumula puntos y desbloquea contenido exclusivo." },
              { n:"04", ico:"🏆", title:"Destácate",            desc:"Asciende en el ranking y obtén beneficios para los estudiantes más activos." },
            ].map((s) => (
              <div className="hr-step" key={s.n}>
                <div className="hr-step-n">{s.n}</div>
                <span className="hr-step-ico">{s.ico}</span>
                <div className="hr-step-title">{s.title}</div>
                <div className="hr-step-desc">{s.desc}</div>
                <div className="hr-step-ghost">{s.n}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══ CTA BANNER ══ */}
      <div className="hr-banner" ref={r5}>
        <div className={`hr-reveal${v5 ? " visible" : ""}`}>
          <div className="hr-avs">
            {[["B","#4f46e5"],["M","#7c3aed"],["K","#0d9488"],["A","#d97706"],["R","#e11d48"]].map(([l, bg], i) => (
              <div key={i} className="hr-av" style={{ background: bg }}>{l}</div>
            ))}
            <span className="hr-av-ct">+8,900 estudiantes</span>
          </div>
          <h2 className="hr-banner-title">¿Listo para aprobar con nota más alta?</h2>
          <p className="hr-banner-sub">
            Únete a más de 4,000 estudiantes de la Continental que ya usan ApuntesUC.
          </p>
          <div className="hr-banner-btns">
            <button className="btn-prim" onClick={() => navigate("login")}>
              🚀 Iniciar Sesión
            </button>
            <button className="btn-sec" onClick={() => navigate("planes")}>
              ⭐ Ver planes premium
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}