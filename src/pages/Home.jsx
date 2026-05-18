import { useEffect, useState } from "react";
import { estadisticas, apuntes, examenes, cursos } from "../data/mockData";

function tipoIcon(tipo) {
  const map = { Resumen: "📄", Mapa: "🗺️", Guía: "📘", Apunte: "📝", Esquema: "📊", Código: "💻" };
  return map[tipo] || "📄";
}

export default function Home({ navigate }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVisible(true), 60); return () => clearTimeout(t); }, []);

  return (
    <div className={`home-root${visible ? " home-visible" : ""}`}>
      <style>{`
        /* ── tokens ── */
        .home-root { --delay-base: 0.08s; }

        /* ── stagger helpers ── */
        .h-fade { opacity: 0; transform: translateY(18px); transition: opacity 0.55s ease, transform 0.55s ease; }
        .home-visible .h-fade { opacity: 1; transform: none; }
        .home-visible .h-d1 { transition-delay: calc(var(--delay-base) * 1); }
        .home-visible .h-d2 { transition-delay: calc(var(--delay-base) * 2); }
        .home-visible .h-d3 { transition-delay: calc(var(--delay-base) * 3); }
        .home-visible .h-d4 { transition-delay: calc(var(--delay-base) * 4); }
        .home-visible .h-d5 { transition-delay: calc(var(--delay-base) * 5); }
        .home-visible .h-d6 { transition-delay: calc(var(--delay-base) * 6); }
        .home-visible .h-d7 { transition-delay: calc(var(--delay-base) * 7); }
        .home-visible .h-d8 { transition-delay: calc(var(--delay-base) * 8); }

        /* ── hero ── */
        .home-hero {
          position: relative;
          padding: 72px 24px 56px;
          text-align: center;
          overflow: hidden;
        }
        .home-hero-bg {
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 70% 55% at 50% -5%, rgba(99,102,241,0.22) 0%, transparent 70%),
            radial-gradient(ellipse 40% 30% at 80% 60%, rgba(124,58,237,0.08) 0%, transparent 60%);
          pointer-events: none;
        }
        .home-hero-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 80%);
        }
        .home-hero-inner {
          position: relative; z-index: 1;
          max-width: 760px; margin: 0 auto;
        }
        .home-tag {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 5px 16px; border-radius: 100px;
          font-size: 0.78rem; font-weight: 700; letter-spacing: 0.04em;
          background: rgba(99,102,241,0.12);
          border: 1px solid rgba(99,102,241,0.3);
          color: var(--indigo-light);
          margin-bottom: 22px;
        }
        .home-tag-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--indigo-light);
          animation: tag-pulse 2s infinite;
        }
        @keyframes tag-pulse {
          0%,100% { opacity:1; box-shadow: 0 0 0 0 rgba(129,140,248,0.5); }
          50% { opacity:0.7; box-shadow: 0 0 0 5px rgba(129,140,248,0); }
        }
        .home-h1 {
          font-family: var(--font-display);
          font-size: clamp(2rem, 5.5vw, 3.6rem);
          font-weight: 900;
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin-bottom: 20px;
          color: var(--text-primary);
        }
        .home-h1 .grad {
          background: linear-gradient(135deg, #818cf8 0%, #a78bfa 50%, #c084fc 100%);
          -webkit-background-clip: text; background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .home-desc {
          color: var(--text-secondary);
          font-size: clamp(0.95rem, 2vw, 1.08rem);
          max-width: 520px; margin: 0 auto 36px;
          line-height: 1.75;
        }
        .home-cta-row {
          display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;
          margin-bottom: 56px;
        }
        .home-btn-primary {
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
          border: none; border-radius: 12px;
          padding: 13px 28px; color: #fff;
          font-family: var(--font-display); font-weight: 700; font-size: 0.95rem;
          cursor: pointer; transition: all 0.22s;
          box-shadow: 0 4px 20px rgba(99,102,241,0.35);
        }
        .home-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(99,102,241,0.45); }
        .home-btn-secondary {
          background: var(--bg-elevated);
          border: 1px solid var(--border); border-radius: 12px;
          padding: 13px 28px; color: var(--text-primary);
          font-family: var(--font-display); font-weight: 600; font-size: 0.95rem;
          cursor: pointer; transition: all 0.2s;
        }
        .home-btn-secondary:hover { background: var(--bg-card); border-color: rgba(255,255,255,0.2); transform: translateY(-1px); }

        /* ── stats strip ── */
        .home-stats {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 18px;
          overflow: hidden;
        }
        .home-stat {
          display: flex; flex-direction: column; align-items: center;
          gap: 3px; padding: 18px 8px;
          border-right: 1px solid var(--border);
          transition: background 0.15s;
        }
        .home-stat:last-child { border-right: none; }
        .home-stat:hover { background: var(--bg-elevated); }
        .home-stat-icon { font-size: 1.15rem; }
        .home-stat-val {
          font-family: var(--font-display); font-weight: 900;
          font-size: clamp(1.1rem, 2vw, 1.45rem);
          color: var(--text-primary); line-height: 1;
        }
        .home-stat-lbl {
          font-size: 0.65rem; font-weight: 600;
          color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.07em;
        }

        /* ── sections ── */
        .home-section { padding: 64px 24px; max-width: 1320px; margin: 0 auto; }
        .home-section-alt {
          background: var(--bg-card);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          padding: 64px 0;
        }
        .home-section-alt .home-section { padding-top: 0; padding-bottom: 0; }
        .home-sec-head {
          display: flex; align-items: flex-end;
          justify-content: space-between; margin-bottom: 28px;
          gap: 12px; flex-wrap: wrap;
        }
        .home-sec-title {
          font-family: var(--font-display); font-weight: 800;
          font-size: clamp(1.3rem, 3vw, 1.6rem);
          color: var(--text-primary); margin-bottom: 4px; letter-spacing: -0.02em;
        }
        .home-sec-sub { font-size: 0.875rem; color: var(--text-muted); }
        .home-see-all {
          background: none; border: 1px solid var(--border);
          border-radius: 9px; padding: 6px 16px;
          color: var(--indigo-light); font-family: var(--font-body);
          font-weight: 600; font-size: 0.82rem; cursor: pointer;
          transition: all 0.15s; white-space: nowrap;
        }
        .home-see-all:hover { background: var(--indigo-dim); border-color: rgba(99,102,241,0.4); }

        /* ── grids ── */
        .home-grid-3 {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;
        }
        .home-grid-4 {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px;
        }

        /* ── exam card ── */
        .home-exam-card {
          background: var(--bg-card);
          border: 1px solid var(--border); border-radius: 16px;
          padding: 20px; cursor: pointer;
          transition: all 0.22s;
          display: flex; flex-direction: column; gap: 0;
        }
        .home-exam-card:hover {
          border-color: rgba(99,102,241,0.35);
          transform: translateY(-3px);
          box-shadow: 0 10px 28px rgba(0,0,0,0.22);
        }
        .home-exam-top {
          display: flex; align-items: center;
          justify-content: space-between; margin-bottom: 12px; gap: 6px; flex-wrap: wrap;
        }
        .home-tipo-chip {
          padding: 3px 10px; border-radius: 100px;
          font-size: 0.7rem; font-weight: 700;
          letter-spacing: 0.05em; text-transform: uppercase;
        }
        .home-tipo-parcial { background: rgba(99,102,241,0.14); color: var(--indigo-light); }
        .home-tipo-final   { background: rgba(244,63,94,0.1); color: #fb7185; }
        .home-chip-small {
          font-size: 0.68rem; font-weight: 600; border-radius: 100px; padding: 2px 8px;
        }
        .home-chip-premium { background: var(--amber-dim); color: var(--amber); border: 1px solid rgba(245,158,11,0.3); }
        .home-chip-resuelto { background: var(--emerald-dim); color: var(--emerald); border: 1px solid rgba(16,185,129,0.3); }
        .home-exam-title {
          font-family: var(--font-display); font-weight: 700;
          font-size: 0.95rem; line-height: 1.35; margin-bottom: 10px; color: var(--text-primary);
        }
        .home-curso-row {
          display: flex; align-items: center; gap: 7px; margin-bottom: 14px;
        }
        .home-curso-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
        .home-curso-name { font-size: 0.8rem; color: var(--text-secondary); font-weight: 500; }
        .home-curso-code {
          font-size: 0.7rem; color: var(--text-muted);
          background: var(--bg-elevated); border: 1px solid var(--border);
          border-radius: 4px; padding: 1px 6px;
        }
        .home-meta {
          display: flex; gap: 12px; font-size: 0.78rem;
          color: var(--text-muted); margin-top: auto; align-items: center;
        }
        .home-meta-date { margin-left: auto; font-size: 0.72rem; }

        /* ── apunte card ── */
        .home-apunte-card {
          background: var(--bg-card);
          border: 1px solid var(--border); border-radius: 14px;
          padding: 18px; cursor: pointer;
          transition: all 0.2s;
          display: flex; flex-direction: column;
        }
        .home-apunte-card:hover {
          border-color: rgba(99,102,241,0.3);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.18);
        }
        .home-apunte-type-row {
          display: flex; align-items: center; gap: 7px; margin-bottom: 9px;
        }
        .home-apunte-type-lbl {
          font-size: 0.68rem; font-weight: 700; color: var(--text-muted);
          text-transform: uppercase; letter-spacing: 0.07em;
        }
        .home-apunte-title {
          font-family: var(--font-display); font-weight: 700;
          font-size: 0.875rem; line-height: 1.4; margin-bottom: 6px; color: var(--text-primary);
        }
        .home-apunte-curso { font-size: 0.78rem; color: var(--text-secondary); margin-bottom: 12px; }

        /* ── steps ── */
        .home-steps {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px;
        }
        .home-step {
          background: var(--bg-card); border: 1px solid var(--border);
          border-radius: 18px; padding: 28px 22px;
          position: relative; overflow: hidden;
          transition: all 0.22s;
        }
        .home-step:hover { border-color: rgba(99,102,241,0.3); transform: translateY(-2px); }
        .home-step-num {
          font-family: var(--font-display); font-size: 0.68rem; font-weight: 800;
          color: var(--indigo-light); letter-spacing: 0.12em;
          text-transform: uppercase; margin-bottom: 14px;
        }
        .home-step-icon { font-size: 1.9rem; margin-bottom: 14px; display: block; }
        .home-step-title {
          font-family: var(--font-display); font-weight: 800;
          font-size: 0.95rem; margin-bottom: 8px; color: var(--text-primary);
        }
        .home-step-desc { color: var(--text-secondary); font-size: 0.84rem; line-height: 1.65; }
        .home-step-bg-num {
          position: absolute; right: -8px; bottom: -16px;
          font-family: var(--font-display); font-weight: 900;
          font-size: 5rem; color: rgba(99,102,241,0.05);
          pointer-events: none; line-height: 1; user-select: none;
        }

        /* ── cta banner ── */
        .home-cta-banner {
          background: linear-gradient(135deg,
            rgba(99,102,241,0.1) 0%,
            rgba(124,58,237,0.07) 50%,
            rgba(99,102,241,0.04) 100%);
          border-top: 1px solid rgba(99,102,241,0.18);
          border-bottom: 1px solid rgba(99,102,241,0.18);
          padding: 80px 24px;
          text-align: center;
        }
        .home-cta-title {
          font-family: var(--font-display); font-weight: 900;
          font-size: clamp(1.6rem, 4vw, 2.2rem);
          letter-spacing: -0.02em; margin-bottom: 12px;
        }
        .home-cta-sub {
          color: var(--text-secondary); font-size: 1rem;
          max-width: 480px; margin: 0 auto 32px; line-height: 1.7;
        }
        .home-cta-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }

        /* ── social proof ── */
        .home-avatars {
          display: flex; align-items: center; gap: 6px;
          justify-content: center; margin-bottom: 16px;
        }
        .home-av {
          width: 36px; height: 36px; border-radius: 50%;
          border: 2px solid var(--bg-card);
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
          display: flex; align-items: center; justify-content: center;
          font-size: 0.75rem; font-weight: 700; color: #fff;
          margin-left: -8px; flex-shrink: 0;
        }
        .home-av:first-child { margin-left: 0; }
        .home-av-count {
          background: var(--bg-elevated); border: 1px solid var(--border);
          border-radius: 100px; padding: 4px 12px;
          font-size: 0.78rem; font-weight: 600; color: var(--text-secondary);
          margin-left: 6px;
        }

        /* ── responsive ── */
        @media (max-width: 1100px) {
          .home-grid-4 { grid-template-columns: repeat(2, 1fr); }
          .home-steps { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 860px) {
          .home-grid-3 { grid-template-columns: repeat(2, 1fr); }
          .home-stats { grid-template-columns: repeat(3, 1fr); }
          .home-stat:nth-child(3) { border-right: none; }
          .home-stat:nth-child(4) { border-top: 1px solid var(--border); }
          .home-stat:nth-child(5) { border-top: 1px solid var(--border); }
          .home-stat:nth-child(6) { border-top: 1px solid var(--border); border-right: none; }
        }
        @media (max-width: 600px) {
          .home-hero { padding: 52px 16px 44px; }
          .home-grid-3 { grid-template-columns: 1fr; }
          .home-grid-4 { grid-template-columns: 1fr; }
          .home-steps { grid-template-columns: 1fr; }
          .home-stats { grid-template-columns: repeat(2, 1fr); }
          .home-stat:nth-child(2) { border-right: none; }
          .home-stat:nth-child(3) { border-top: 1px solid var(--border); border-right: 1px solid var(--border); }
          .home-section { padding: 44px 16px; }
          .home-cta-banner { padding: 56px 16px; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section className="home-hero">
        <div className="home-hero-bg" />
        <div className="home-hero-grid" />
        <div className="home-hero-inner">
          <div className="h-fade h-d1">
            <div className="home-tag">
              <span className="home-tag-dot" />
              Plataforma académica · Universidad Continental
            </div>
          </div>

          <h1 className="home-h1 h-fade h-d2">
            El conocimiento de<br />
            <span className="grad">toda la UC, en un solo lugar</span>
          </h1>

          <p className="home-desc h-fade h-d3">
            Comparte apuntes, accede a exámenes anteriores y colabora con
            compañeros de todos los ciclos y carreras de la Continental.
          </p>

          <div className="home-cta-row h-fade h-d4">
            <button className="home-btn-primary" onClick={() => navigate("examenes")}>
              Ver exámenes 📋
            </button>
            <button className="home-btn-secondary" onClick={() => navigate("apuntes")}>
              Explorar apuntes →
            </button>
          </div>

          <div className="home-stats h-fade h-d5">
            {[
              { label: "Apuntes",      value: estadisticas.apuntes.toLocaleString(),     icon: "📝" },
              { label: "Exámenes",     value: estadisticas.examenes.toLocaleString(),    icon: "📋" },
              { label: "Estudiantes",  value: estadisticas.estudiantes.toLocaleString(), icon: "👥" },
              { label: "Cursos",       value: estadisticas.cursos.toLocaleString(),      icon: "📚" },
              { label: "Docentes",     value: estadisticas.docentes.toLocaleString(),    icon: "👨‍🏫" },
              { label: "Carreras",     value: estadisticas.carreras.toLocaleString(),    icon: "🏛️" },
            ].map((s) => (
              <div className="home-stat" key={s.label}>
                <span className="home-stat-icon">{s.icon}</span>
                <span className="home-stat-val">{s.value}</span>
                <span className="home-stat-lbl">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXÁMENES RECIENTES ── */}
      <section className="home-section">
        <div className="home-sec-head h-fade h-d6">
          <div>
            <div className="home-sec-title">Exámenes recientes</div>
            <div className="home-sec-sub">Los más descargados esta semana</div>
          </div>
          <button className="home-see-all" onClick={() => navigate("examenes")}>Ver todos →</button>
        </div>
        <div className="home-grid-3">
          {examenes.slice(0, 3).map((ex, i) => {
            const curso = cursos.find((c) => c.id === ex.cursoId);
            return (
              <div key={ex.id} className={`h-fade h-d${Math.min(i + 7, 8)}`}>
                <ExamCard ex={ex} curso={curso} navigate={navigate} />
              </div>
            );
          })}
        </div>
      </section>

      {/* ── APUNTES DESTACADOS ── */}
      <div className="home-section-alt">
        <div className="home-section">
          <div className="home-sec-head">
            <div>
              <div className="home-sec-title">Apuntes destacados</div>
              <div className="home-sec-sub">Material verificado por la comunidad</div>
            </div>
            <button className="home-see-all" onClick={() => navigate("apuntes")}>Ver todos →</button>
          </div>
          <div className="home-grid-4">
            {apuntes.slice(0, 4).map((ap) => {
              const curso = cursos.find((c) => c.id === ap.cursoId);
              return <ApunteCard key={ap.id} ap={ap} curso={curso} />;
            })}
          </div>
        </div>
      </div>

      {/* ── CÓMO FUNCIONA ── */}
      <section className="home-section">
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <div className="home-sec-title">¿Cómo funciona?</div>
          <div className="home-sec-sub" style={{ marginTop: 4 }}>Simple, rápido y colaborativo</div>
        </div>
        <div className="home-steps">
          {[
            { n: "01", icon: "🔍", title: "Busca tu curso",        desc: "Filtra por carrera, ciclo o docente y encuentra exactamente lo que necesitas." },
            { n: "02", icon: "⬇️", title: "Descarga o visualiza", desc: "Accede a apuntes y exámenes al instante. Algunos son gratuitos, otros premium." },
            { n: "03", icon: "📤", title: "Comparte y gana",       desc: "Sube tus propios materiales y acumula puntos para desbloquear beneficios." },
            { n: "04", icon: "🏆", title: "Destácate",             desc: "Asciende en el ranking y obtén acceso a contenido exclusivo de alumnos top." },
          ].map((s) => (
            <div className="home-step" key={s.n}>
              <div className="home-step-num">{s.n}</div>
              <span className="home-step-icon">{s.icon}</span>
              <div className="home-step-title">{s.title}</div>
              <div className="home-step-desc">{s.desc}</div>
              <div className="home-step-bg-num">{s.n}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <div className="home-cta-banner">
        <div className="home-avatars">
          {["B","M","K","A","R"].map((l,i) => (
            <div key={i} className="home-av" style={{ background: `hsl(${220+i*20},70%,55%)` }}>{l}</div>
          ))}
          <span className="home-av-count">+8,900 estudiantes</span>
        </div>
        <h2 className="home-cta-title">¿Listo para aprobar con nota más alta?</h2>
        <p className="home-cta-sub">
          Únete a más de 4,000 estudiantes de la Continental que ya usan ApuntesUC.
        </p>
        <div className="home-cta-btns">
          <button className="home-btn-primary" onClick={() => navigate("login")}>
            Crear cuenta gratis
          </button>
          <button className="home-btn-secondary" onClick={() => navigate("planes")}>
            Ver planes premium
          </button>
        </div>
      </div>
    </div>
  );
}

function ExamCard({ ex, curso, navigate }) {
  return (
    <div className="home-exam-card" onClick={() => navigate("examenes")}>
      <div className="home-exam-top">
        <span className={`home-tipo-chip ${ex.tipo === "Final" ? "home-tipo-final" : "home-tipo-parcial"}`}>
          {ex.tipo}
        </span>
        <div style={{ display: "flex", gap: 5 }}>
          {ex.premium  && <span className="home-chip-small home-chip-premium">⭐ Premium</span>}
          {ex.resuelto && <span className="home-chip-small home-chip-resuelto">✓ Resuelto</span>}
        </div>
      </div>
      <h3 className="home-exam-title">{ex.titulo}</h3>
      {curso && (
        <div className="home-curso-row">
          <span className="home-curso-dot" style={{ background: curso.color }} />
          <span className="home-curso-name">{curso.nombre}</span>
          <span className="home-curso-code">{curso.codigo}</span>
        </div>
      )}
      <div className="home-meta">
        <span>⬇️ {ex.descargas}</span>
        <span>❤️ {ex.likes}</span>
        <span className="home-meta-date">{ex.fecha}</span>
      </div>
    </div>
  );
}

function ApunteCard({ ap, curso }) {
  return (
    <div className="home-apunte-card">
      <div className="home-apunte-type-row">
        <span style={{ fontSize: "1rem" }}>{tipoIcon(ap.tipo)}</span>
        <span className="home-apunte-type-lbl">{ap.tipo}</span>
        {ap.premium && (
          <span className="home-chip-small home-chip-premium" style={{ marginLeft: "auto" }}>⭐</span>
        )}
      </div>
      <div className="home-apunte-title">{ap.titulo}</div>
      {curso && <div className="home-apunte-curso">{curso.nombre}</div>}
      <div className="home-meta" style={{ marginTop: "auto" }}>
        <span>⬇️ {ap.descargas}</span>
        <span>❤️ {ap.likes}</span>
        <span className="home-meta-date">Sem. {ap.semana}</span>
      </div>
    </div>
  );
}