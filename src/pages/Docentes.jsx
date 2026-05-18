import { useState, useMemo } from "react";
import { docentes, cursos, apuntes, examenes, carreras, facultades } from "../data/mockData";

const SEMESTRE_ACTIVO = "2026-I";
const AÑO_ACTIVO = 2026;

const CURSOS_ACTIVOS_IDS = new Set(
  examenes
    .filter((e) => e.año === AÑO_ACTIVO && e.semestre === "I")
    .map((e) => e.cursoId)
);

function buildDocenteData(d) {
  const todosCursos   = cursos.filter((c) => c.docenteId === d.id);
  const cursosActivos = todosCursos.filter((c) => CURSOS_ACTIVOS_IDS.has(c.id));
  const cursosPasados = todosCursos.filter((c) => !CURSOS_ACTIVOS_IDS.has(c.id));
  const numApuntes    = apuntes.filter((a) => a.docenteId === d.id).length;
  const numExamenes   = examenes.filter((e) => e.docenteId === d.id).length;
  const totalDescargas = [
    ...apuntes.filter((a) => a.docenteId === d.id),
    ...examenes.filter((e) => e.docenteId === d.id),
  ].reduce((acc, x) => acc + (x.descargas || 0), 0);
  const carrera  = carreras.find((c) => c.id === d.carreraId);
  const facultad = carrera ? facultades.find((f) => f.id === carrera.facultadId) : null;
  return { ...d, todosCursos, cursosActivos, cursosPasados, numApuntes, numExamenes, totalDescargas, carrera, facultad };
}

const ALL_DOCENTES  = docentes.map(buildDocenteData);
const ALL_FACULTADES = facultades;

const SORT_OPTIONS = [
  { value: "rating",    label: "Mejor valorados" },
  { value: "apuntes",   label: "Más apuntes" },
  { value: "examenes",  label: "Más exámenes" },
  { value: "descargas", label: "Más descargas" },
];

// ─── Página principal ────────────────────────────────────────────
export default function Docentes({ navigate }) {
  const [search, setSearch]       = useState("");
  const [facultadF, setFacultad]  = useState("all");
  const [soloActivos, setActivos] = useState(false);
  const [sortBy, setSortBy]       = useState("rating");
  const [viewMode, setViewMode]   = useState("grid");
  const [modal, setModal]         = useState(null);

  const filtered = useMemo(() => {
    let list = ALL_DOCENTES.filter((d) => {
      const q = search.toLowerCase();
      const matchSearch =
        d.nombre.toLowerCase().includes(q) ||
        d.area.toLowerCase().includes(q) ||
        d.todosCursos.some((c) => c.nombre.toLowerCase().includes(q));
      const matchFac    = facultadF === "all" || String(d.facultad?.id) === facultadF;
      const matchActivo = !soloActivos || d.cursosActivos.length > 0;
      return matchSearch && matchFac && matchActivo;
    });

    return [...list].sort((a, b) => {
      if (sortBy === "rating")    return b.rating - a.rating;
      if (sortBy === "apuntes")   return b.numApuntes - a.numApuntes;
      if (sortBy === "examenes")  return b.numExamenes - a.numExamenes;
      if (sortBy === "descargas") return b.totalDescargas - a.totalDescargas;
      return 0;
    });
  }, [search, facultadF, soloActivos, sortBy]);

  const stats = useMemo(() => ({
    total:   ALL_DOCENTES.length,
    activos: ALL_DOCENTES.filter((d) => d.cursosActivos.length > 0).length,
    facs:    ALL_FACULTADES.length,
  }), []);

  const hasFilter = search || facultadF !== "all" || soloActivos;
  const reset = () => { setSearch(""); setFacultad("all"); setActivos(false); };

  return (
    <>
      <style>{`
        /* ── Animaciones ── */
        .doc-page { animation: doc-in 0.35s ease both; }
        @keyframes doc-in { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:none} }
        @keyframes doc-card-in { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:none} }
        @keyframes blink-dot { 0%,100%{opacity:1} 50%{opacity:0.3} }

        /* ── Header ── */
        .doc-header {
          display:flex; align-items:flex-start; justify-content:space-between;
          gap:16px; margin-bottom:28px; flex-wrap:wrap;
        }
        .doc-title {
          font-family:var(--font-display); font-weight:900;
          font-size:clamp(1.6rem,4vw,2.1rem);
          color:var(--text-primary); margin-bottom:4px; letter-spacing:-0.03em;
        }
        .doc-sub { font-size:0.875rem; color:var(--text-muted); }

        /* ── Stats bar ── */
        .doc-stats-bar { display:flex; gap:10px; flex-wrap:wrap; margin-bottom:24px; }
        .doc-stat-chip {
          display:flex; align-items:center; gap:6px;
          background:var(--bg-card); border:1px solid var(--border);
          border-radius:100px; padding:6px 14px;
          font-size:0.76rem; font-weight:600; color:var(--text-secondary);
        }
        .doc-stat-chip span { font-weight:800; color:var(--text-primary); }
        .doc-stat-chip.green { color:var(--emerald); }
        .doc-stat-chip.green span { color:var(--emerald); }

        /* ── Filtros wrap ── */
        .doc-filters-wrap {
          background:var(--bg-card); border:1px solid var(--border);
          border-radius:16px; padding:16px 18px; margin-bottom:20px;
          display:flex; flex-direction:column; gap:12px;
        }
        .doc-filters-row { display:flex; gap:10px; flex-wrap:wrap; align-items:center; }
        .doc-search-wrap { position:relative; flex:2; min-width:200px; }
        .doc-search-icon { position:absolute; left:12px; top:50%; transform:translateY(-50%); pointer-events:none; font-size:0.9rem; }
        .doc-search {
          width:100%; background:var(--bg-elevated); border:1px solid var(--border);
          border-radius:10px; padding:9px 14px 9px 36px;
          color:var(--text-primary); font-size:0.875rem; font-family:var(--font-body);
          outline:none; transition:border-color 0.18s;
        }
        .doc-search:focus { border-color:rgba(99,102,241,0.5); }
        .doc-search::placeholder { color:var(--text-muted); }
        .doc-select {
          background:var(--bg-elevated); border:1px solid var(--border);
          border-radius:10px; padding:9px 14px; flex:1; min-width:140px;
          color:var(--text-secondary); font-size:0.84rem; font-family:var(--font-body);
          outline:none; cursor:pointer; transition:border-color 0.18s;
        }
        .doc-select.active { border-color:rgba(99,102,241,0.5); color:var(--indigo-light); background:var(--indigo-dim); }
        .doc-toggle {
          display:flex; align-items:center; gap:7px;
          background:var(--bg-elevated); border:1px solid var(--border);
          border-radius:10px; padding:9px 14px;
          font-size:0.8rem; font-weight:600; color:var(--text-secondary);
          cursor:pointer; font-family:var(--font-body); white-space:nowrap;
          transition:all 0.15s; user-select:none;
        }
        .doc-toggle.on { background:rgba(22,163,74,0.1); border-color:rgba(22,163,74,0.35); color:#16a34a; }
        .doc-toggle-dot { width:8px; height:8px; border-radius:50%; background:#16a34a; animation:blink-dot 1.8s infinite; }
        .doc-reset {
          background:rgba(239,68,68,0.08); border:1px solid rgba(239,68,68,0.25);
          border-radius:10px; padding:9px 14px;
          color:#ef4444; font-size:0.8rem; font-weight:600;
          font-family:var(--font-body); cursor:pointer; white-space:nowrap;
        }
        .doc-reset:hover { background:rgba(239,68,68,0.14); }

        /* Facultad chips */
        .doc-fac-row { display:flex; gap:7px; flex-wrap:wrap; }
        .doc-fac-btn {
          display:flex; align-items:center; gap:5px;
          background:var(--bg-elevated); border:1px solid var(--border);
          border-radius:9px; padding:5px 12px;
          font-size:0.76rem; font-weight:600; color:var(--text-muted);
          cursor:pointer; font-family:var(--font-body); transition:all 0.15s; white-space:nowrap;
        }
        .doc-fac-btn.active { color:#fff; border-color:transparent; }
        .doc-fac-btn:hover:not(.active) { background:var(--bg-card); color:var(--text-secondary); }

        /* ── Toolbar ── */
        .doc-toolbar { display:flex; align-items:center; gap:10px; margin-bottom:20px; flex-wrap:wrap; }
        .doc-result-count { font-size:0.82rem; color:var(--text-muted); flex:1; }
        .doc-result-count strong { color:var(--text-secondary); }
        .doc-sort-select {
          background:var(--bg-card); border:1px solid var(--border);
          border-radius:9px; padding:6px 12px;
          color:var(--text-secondary); font-size:0.8rem; font-family:var(--font-body);
          outline:none; cursor:pointer;
        }
        .doc-view-btns { display:flex; gap:4px; }
        .doc-view-btn {
          background:var(--bg-card); border:1px solid var(--border);
          border-radius:8px; padding:6px 10px; cursor:pointer;
          font-size:0.85rem; transition:all 0.15s; color:var(--text-muted);
        }
        .doc-view-btn.active { background:var(--indigo-dim); border-color:rgba(99,102,241,0.35); color:var(--indigo-light); }

        /* ── Grid ── */
        .doc-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(300px,1fr)); gap:20px; }

        /* ── Lista ── */
        .doc-list { display:flex; flex-direction:column; gap:10px; }
        .doc-list-row {
          display:flex; align-items:center; gap:16px;
          background:var(--bg-card); border:1px solid var(--border);
          border-radius:14px; padding:16px 18px; cursor:pointer;
          transition:all 0.18s; animation:doc-card-in 0.25s ease both;
        }
        .doc-list-row:hover { border-color:rgba(99,102,241,0.35); transform:translateX(3px); }
        .doc-list-avatar {
          width:48px; height:48px; border-radius:50%;
          display:flex; align-items:center; justify-content:center;
          font-size:1rem; font-weight:800; color:#fff; flex-shrink:0;
          box-shadow:0 4px 12px rgba(0,0,0,0.25);
        }
        .doc-list-main { flex:1; min-width:0; }
        .doc-list-name { font-family:var(--font-display); font-weight:700; font-size:0.9rem; color:var(--text-primary); margin-bottom:3px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
        .doc-list-area { font-size:0.76rem; color:var(--text-muted); white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
        .doc-list-right { display:flex; align-items:center; gap:10px; flex-shrink:0; }
        .doc-list-stats { display:flex; gap:12px; font-size:0.78rem; color:var(--text-muted); }

        /* ── Card ── */
        .doc-card {
          background:var(--bg-card); border:1px solid var(--border);
          border-radius:18px; overflow:hidden;
          transition:all 0.22s; display:flex; flex-direction:column;
          cursor:pointer; animation:doc-card-in 0.3s ease both;
          position:relative;
        }
        .doc-card:hover { border-color:rgba(99,102,241,0.35); transform:translateY(-4px); box-shadow:0 12px 32px rgba(0,0,0,0.25); }

        /* Strip de color top */
        .doc-card-strip { height:5px; width:100%; flex-shrink:0; }

        /* Header de la card */
        .doc-card-head { padding:18px 18px 0; display:flex; align-items:flex-start; justify-content:space-between; gap:10px; margin-bottom:14px; }
        .doc-avatar {
          width:52px; height:52px; border-radius:50%;
          display:flex; align-items:center; justify-content:center;
          font-size:1rem; font-weight:800; color:#fff; flex-shrink:0;
          box-shadow:0 4px 14px rgba(0,0,0,0.3);
        }
        .doc-head-right { display:flex; flex-direction:column; align-items:flex-end; gap:5px; }
        .doc-rating {
          background:var(--amber-dim); border:1px solid rgba(245,158,11,0.3);
          border-radius:100px; padding:4px 11px;
          font-size:0.78rem; font-weight:700; color:var(--amber); white-space:nowrap;
        }
        .doc-activo-badge {
          font-size:0.67rem; font-weight:700; border-radius:100px; padding:3px 9px; white-space:nowrap;
        }
        .doc-activo-badge.on { background:rgba(22,163,74,0.12); border:1px solid rgba(22,163,74,0.3); color:#16a34a; }
        .doc-activo-badge.off { background:var(--bg-elevated); border:1px solid var(--border); color:var(--text-muted); }

        /* Info del docente */
        .doc-card-info { padding:0 18px 14px; }
        .doc-nombre { font-family:var(--font-display); font-weight:700; font-size:0.97rem; line-height:1.3; color:var(--text-primary); margin:0 0 3px; }
        .doc-area { font-size:0.78rem; color:var(--text-muted); margin:0 0 8px; }
        .doc-fac-tag {
          display:inline-flex; align-items:center; gap:5px;
          font-size:0.7rem; font-weight:600; padding:3px 10px;
          border-radius:100px; margin-bottom:14px;
        }

        /* Stats strip */
        .doc-stats-strip {
          display:flex; margin:0 18px 14px;
          background:var(--bg-elevated); border:1px solid var(--border);
          border-radius:11px; overflow:hidden;
        }
        .doc-ss { flex:1; display:flex; flex-direction:column; align-items:center; padding:9px 4px; gap:1px; }
        .doc-ss + .doc-ss { border-left:1px solid var(--border); }
        .doc-ss-num { font-family:var(--font-display); font-weight:800; font-size:1rem; color:var(--text-primary); line-height:1; }
        .doc-ss-lbl { font-size:0.62rem; font-weight:600; text-transform:uppercase; letter-spacing:0.06em; color:var(--text-muted); }

        /* Cursos section */
        .doc-cursos-wrap { padding:0 18px; flex:1; }
        .doc-cursos-label {
          display:flex; align-items:center; gap:7px;
          font-size:0.65rem; font-weight:800; text-transform:uppercase;
          letter-spacing:0.1em; color:var(--text-muted); margin-bottom:7px;
        }
        .doc-activo-dot { width:7px; height:7px; border-radius:50%; background:#16a34a; animation:blink-dot 1.8s infinite; flex-shrink:0; }
        .doc-cursos-list { display:flex; flex-direction:column; gap:5px; margin-bottom:10px; }
        .doc-curso-row {
          display:flex; align-items:center; gap:8px;
          padding:7px 10px; border-radius:9px;
          background:var(--bg-elevated); border:1px solid var(--border);
          transition:border-color 0.13s;
        }
        .doc-curso-row:hover { border-color:rgba(99,102,241,0.3); }
        .doc-curso-dot { width:7px; height:7px; border-radius:50%; flex-shrink:0; }
        .doc-curso-info { flex:1; min-width:0; }
        .doc-curso-nombre { font-size:0.81rem; font-weight:600; color:var(--text-primary); white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
        .doc-curso-meta { font-size:0.69rem; color:var(--text-muted); margin-top:1px; }
        .doc-curso-cr { font-size:0.67rem; font-weight:700; color:var(--text-muted); background:var(--bg-card); border:1px solid var(--border); border-radius:5px; padding:2px 6px; flex-shrink:0; }

        .doc-pasados-btn {
          background:none; border:none; cursor:pointer;
          color:var(--text-muted); font-size:0.74rem; font-family:var(--font-body);
          padding:3px 0; margin-bottom:7px;
          display:flex; align-items:center; gap:5px; transition:color 0.13s;
        }
        .doc-pasados-btn:hover { color:var(--text-secondary); }

        /* Footer de la card */
        .doc-card-footer { display:flex; gap:7px; padding:14px 18px 18px; margin-top:auto; }
        .doc-action-btn {
          flex:1; background:var(--bg-elevated); border:1px solid var(--border);
          border-radius:9px; padding:8px 6px;
          font-size:0.77rem; font-weight:600; color:var(--text-secondary);
          cursor:pointer; font-family:var(--font-body); transition:all 0.15s; text-align:center;
        }
        .doc-action-btn:hover { background:var(--indigo-dim); color:var(--indigo-light); border-color:rgba(99,102,241,0.3); }

        /* ── Badges genéricos ── */
        .d-badge { display:inline-block; padding:3px 10px; border-radius:100px; font-size:0.68rem; font-weight:700; }
        .d-badge-indigo { background:var(--indigo-dim); color:var(--indigo-light); border:1px solid rgba(99,102,241,0.3); }
        .d-badge-green  { background:rgba(22,163,74,0.1); color:#16a34a; border:1px solid rgba(22,163,74,0.3); }
        .d-badge-muted  { background:var(--bg-elevated); color:var(--text-muted); border:1px solid var(--border); }

        /* ── Modal ── */
        .doc-modal-head { display:flex; align-items:center; gap:14px; margin-bottom:16px; }
        .doc-modal-avatar { width:60px; height:60px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:1.15rem; font-weight:800; color:#fff; flex-shrink:0; box-shadow:0 4px 18px rgba(0,0,0,0.3); }
        .doc-modal-name { font-family:var(--font-display); font-weight:800; font-size:1.05rem; color:var(--text-primary); margin-bottom:3px; }
        .doc-modal-area { font-size:0.82rem; color:var(--text-muted); margin-bottom:6px; }
        .doc-modal-badges { display:flex; gap:6px; flex-wrap:wrap; }
        .doc-modal-section-label { font-size:0.65rem; font-weight:800; letter-spacing:0.1em; text-transform:uppercase; color:var(--text-muted); margin-bottom:8px; }
        .doc-modal-stats { display:grid; grid-template-columns:repeat(4,1fr); gap:8px; margin-bottom:18px; }
        .doc-modal-stat { background:var(--bg-elevated); border:1px solid var(--border); border-radius:11px; padding:10px 8px; text-align:center; }
        .doc-modal-stat-num { font-family:var(--font-display); font-weight:800; font-size:1.1rem; color:var(--text-primary); }
        .doc-modal-stat-lbl { font-size:0.65rem; color:var(--text-muted); font-weight:600; text-transform:uppercase; letter-spacing:0.06em; margin-top:2px; }
        .doc-modal-cursos { display:flex; flex-direction:column; gap:6px; margin-bottom:18px; }
        .doc-modal-cta { display:flex; gap:8px; }
        .doc-modal-btn {
          flex:1; border-radius:11px; padding:12px;
          font-family:var(--font-display); font-weight:700; font-size:0.9rem;
          cursor:pointer; transition:all 0.2s; text-align:center; border:none;
        }
        .doc-modal-btn-primary { background:linear-gradient(135deg,var(--indigo),#7c3aed); color:#fff; box-shadow:0 4px 14px rgba(99,102,241,0.3); }
        .doc-modal-btn-primary:hover { transform:translateY(-1px); box-shadow:0 6px 20px rgba(99,102,241,0.4); }
        .doc-modal-btn-secondary { background:var(--bg-elevated); border:1px solid var(--border) !important; color:var(--text-secondary); }
        .doc-modal-btn-secondary:hover { background:var(--bg-card); color:var(--text-primary); }

        /* ── Modal overlay simple ── */
        .doc-modal-backdrop {
          position:fixed; inset:0; background:rgba(0,0,0,0.6);
          backdrop-filter:blur(4px); z-index:500;
          display:flex; align-items:center; justify-content:center; padding:16px;
          animation:modal-bg-in 0.18s ease;
        }
        @keyframes modal-bg-in { from{opacity:0} to{opacity:1} }
        .doc-modal-box {
          background:var(--bg-card); border:1px solid var(--border);
          border-radius:20px; width:100%; max-width:520px;
          max-height:90vh; overflow-y:auto;
          padding:24px; position:relative;
          animation:modal-box-in 0.22s ease;
          scrollbar-width:thin; scrollbar-color:var(--border) transparent;
        }
        @keyframes modal-box-in { from{opacity:0;transform:translateY(-12px) scale(0.98)} to{opacity:1;transform:none} }
        .doc-modal-close {
          position:absolute; top:16px; right:16px;
          background:var(--bg-elevated); border:1px solid var(--border);
          border-radius:8px; width:30px; height:30px;
          display:flex; align-items:center; justify-content:center;
          cursor:pointer; color:var(--text-muted); font-size:0.9rem; transition:all 0.13s;
        }
        .doc-modal-close:hover { background:var(--bg-card); color:var(--text-primary); }

        /* ── Empty ── */
        .doc-empty { text-align:center; padding:80px 24px; color:var(--text-muted); display:flex; flex-direction:column; gap:12px; align-items:center; }

        /* ── Responsive ── */
        @media(max-width:700px){
          .doc-grid { grid-template-columns:1fr; }
          .doc-modal-stats { grid-template-columns:repeat(2,1fr); }
        }
        @media(max-width:480px){
          .doc-stats-bar { display:none; }
          .doc-list-stats { display:none; }
          .doc-modal-cta { flex-direction:column; }
        }
      `}</style>

      <div className="doc-page page-container">

        {/* Header */}
        <div className="doc-header">
          <div>
            <h1 className="doc-title">Docentes UC</h1>
            <p className="doc-sub">Materiales y exámenes organizados por profesor — {SEMESTRE_ACTIVO}</p>
          </div>
        </div>

        {/* Stats bar */}
        <div className="doc-stats-bar">
          <div className="doc-stat-chip">👨‍🏫 <span>{stats.total}</span> docentes</div>
          <div className="doc-stat-chip">🏫 <span>{stats.facs}</span> facultades</div>
          <div className="doc-stat-chip green">
            <span className="doc-activo-dot" style={{ width:8, height:8, borderRadius:"50%", background:"#16a34a", display:"inline-block", animation:"blink-dot 1.8s infinite" }} />
            <span>{stats.activos}</span> activos en {SEMESTRE_ACTIVO}
          </div>
        </div>

        {/* Filtros */}
        <div className="doc-filters-wrap">
          <div className="doc-filters-row">
            <div className="doc-search-wrap">
              <span className="doc-search-icon">🔍</span>
              <input
                className="doc-search"
                placeholder="Buscar por nombre, área o curso..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <button className={`doc-toggle${soloActivos ? " on" : ""}`} onClick={() => setActivos((v) => !v)}>
              {soloActivos && <span className="doc-toggle-dot" />}
              {soloActivos ? "Solo activos" : "Todos los docentes"}
            </button>
            {hasFilter && <button className="doc-reset" onClick={reset}>✕ Limpiar</button>}
          </div>

          {/* Facultad chips */}
          <div className="doc-fac-row">
            <button
              className={`doc-fac-btn${facultadF === "all" ? " active" : ""}`}
              style={facultadF === "all" ? { background:"var(--indigo-dim)", color:"var(--indigo-light)", borderColor:"rgba(99,102,241,0.4)" } : {}}
              onClick={() => setFacultad("all")}
            >
              Todas
            </button>
            {ALL_FACULTADES.map((f) => (
              <button
                key={f.id}
                className={`doc-fac-btn${facultadF === String(f.id) ? " active" : ""}`}
                style={facultadF === String(f.id) ? { background: f.color } : {}}
                onClick={() => setFacultad(String(f.id))}
              >
                {f.icono} {f.nombre.replace("Facultad de ", "").replace("Facultad ", "")}
              </button>
            ))}
          </div>
        </div>

        {/* Toolbar */}
        <div className="doc-toolbar">
          <span className="doc-result-count">
            <strong>{filtered.length}</strong> docente{filtered.length !== 1 ? "s" : ""} encontrado{filtered.length !== 1 ? "s" : ""}
          </span>
          <select className="doc-sort-select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            {SORT_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
          <div className="doc-view-btns">
            <button className={`doc-view-btn${viewMode === "grid" ? " active" : ""}`} onClick={() => setViewMode("grid")}>⊞</button>
            <button className={`doc-view-btn${viewMode === "list" ? " active" : ""}`} onClick={() => setViewMode("list")}>☰</button>
          </div>
        </div>

        {/* Contenido */}
        {filtered.length === 0 ? (
          <div className="doc-empty">
            <span style={{ fontSize:"2.5rem" }}>👨‍🏫</span>
            <p style={{ fontWeight:700, color:"var(--text-secondary)" }}>Sin resultados</p>
            <p>Prueba con otro nombre o quita los filtros</p>
            {hasFilter && <button className="doc-reset" onClick={reset}>✕ Limpiar filtros</button>}
          </div>
        ) : viewMode === "grid" ? (
          <div className="doc-grid">
            {filtered.map((d, i) => (
              <DocenteCard key={d.id} docente={d} delay={Math.min(i * 0.03, 0.3)} onOpen={() => setModal(d)} navigate={navigate} />
            ))}
          </div>
        ) : (
          <div className="doc-list">
            {filtered.map((d, i) => {
              const color = d.carrera?.color ?? "#4f46e5";
              return (
                <div
                  key={d.id}
                  className="doc-list-row"
                  style={{ animationDelay:`${Math.min(i*0.03,0.3)}s` }}
                  onClick={() => setModal(d)}
                >
                  <div className="doc-list-avatar" style={{ background:`linear-gradient(135deg,${color}cc,${color})` }}>
                    {d.iniciales}
                  </div>
                  <div className="doc-list-main">
                    <div className="doc-list-name">{d.nombre}</div>
                    <div className="doc-list-area">{d.area}</div>
                  </div>
                  <div className="doc-list-right">
                    {d.cursosActivos.length > 0 && (
                      <span className="d-badge d-badge-green">● Activo</span>
                    )}
                    {d.facultad && (
                      <span className="d-badge" style={{ background:`${d.facultad.color}18`, color:d.facultad.color, border:`1px solid ${d.facultad.color}35` }}>
                        {d.facultad.icono}
                      </span>
                    )}
                    <div className="doc-list-stats">
                      <span>⭐ {d.rating}</span>
                      <span>📝 {d.numApuntes}</span>
                      <span>📋 {d.numExamenes}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Modal de detalle */}
      {modal && (
        <DocenteModal
          docente={modal}
          onClose={() => setModal(null)}
          navigate={navigate}
        />
      )}
    </>
  );
}

// ─── Card ────────────────────────────────────────────────────────
function DocenteCard({ docente: d, delay, onOpen, navigate }) {
  const [showPasados, setShowPasados] = useState(false);
  const color     = d.carrera?.color ?? "#4f46e5";
  const hayActivos = d.cursosActivos.length > 0;
  const hayPasados = d.cursosPasados.length > 0;

  return (
    <div className="doc-card" style={{ animationDelay:`${delay}s` }} onClick={onOpen}>
      <div className="doc-card-strip" style={{ background: color }} />

      <div className="doc-card-head">
        <div className="doc-avatar" style={{ background:`linear-gradient(135deg,${color}cc,${color})` }}>
          {d.iniciales}
        </div>
        <div className="doc-head-right">
          <span className="doc-rating">⭐ {d.rating}</span>
          <span className={`doc-activo-badge ${hayActivos ? "on" : "off"}`}>
            {hayActivos ? "● Activo 2026-I" : "Sin cursos activos"}
          </span>
        </div>
      </div>

      <div className="doc-card-info">
        <h3 className="doc-nombre">{d.nombre}</h3>
        <p className="doc-area">{d.area}</p>
        {d.facultad && (
          <span className="doc-fac-tag" style={{ background:`${d.facultad.color}18`, color:d.facultad.color, border:`1px solid ${d.facultad.color}30` }}>
            {d.facultad.icono} {d.facultad.nombre.replace("Facultad de ","").replace("Facultad ","")}
          </span>
        )}
      </div>

      {/* Stats */}
      <div className="doc-stats-strip">
        <div className="doc-ss"><span className="doc-ss-num">{d.numApuntes}</span><span className="doc-ss-lbl">Apuntes</span></div>
        <div className="doc-ss"><span className="doc-ss-num">{d.numExamenes}</span><span className="doc-ss-lbl">Exámenes</span></div>
        <div className="doc-ss"><span className="doc-ss-num">{d.todosCursos.length}</span><span className="doc-ss-lbl">Cursos</span></div>
        <div className="doc-ss"><span className="doc-ss-num">{d.totalDescargas > 999 ? `${(d.totalDescargas/1000).toFixed(1)}k` : d.totalDescargas}</span><span className="doc-ss-lbl">Descargas</span></div>
      </div>

      {/* Cursos */}
      <div className="doc-cursos-wrap">
        {hayActivos && (
          <>
            <div className="doc-cursos-label">
              <span className="doc-activo-dot" />
              Cursos activos {SEMESTRE_ACTIVO}
            </div>
            <div className="doc-cursos-list">
              {d.cursosActivos.slice(0, 2).map((c) => <CursoRow key={c.id} curso={c} />)}
              {d.cursosActivos.length > 2 && (
                <div style={{ fontSize:"0.72rem", color:"var(--text-muted)", padding:"3px 10px" }}>
                  +{d.cursosActivos.length - 2} curso{d.cursosActivos.length - 2 > 1 ? "s" : ""} más
                </div>
              )}
            </div>
          </>
        )}

        {hayPasados && (
          <>
            <button
              className="doc-pasados-btn"
              onClick={(e) => { e.stopPropagation(); setShowPasados((v) => !v); }}
            >
              {showPasados ? "▾" : "▸"} {d.cursosPasados.length} curso{d.cursosPasados.length > 1 ? "s" : ""} anterior{d.cursosPasados.length > 1 ? "es" : ""}
            </button>
            {showPasados && (
              <div className="doc-cursos-list" style={{ opacity:0.6 }}>
                {d.cursosPasados.slice(0, 3).map((c) => <CursoRow key={c.id} curso={c} />)}
              </div>
            )}
          </>
        )}

        {!hayActivos && !hayPasados && (
          <p style={{ fontSize:"0.76rem", color:"var(--text-muted)", paddingBottom:10 }}>Sin cursos registrados.</p>
        )}
      </div>

      {/* Footer */}
      <div className="doc-card-footer" onClick={(e) => e.stopPropagation()}>
        <button className="doc-action-btn" onClick={() => navigate("apuntes")}>📝 Apuntes</button>
        <button className="doc-action-btn" onClick={() => navigate("examenes")}>📋 Exámenes</button>
        <button
          className="doc-action-btn"
          style={{ flex:"0 0 auto", padding:"8px 10px" }}
          onClick={onOpen}
        >
          👤 Ver perfil
        </button>
      </div>
    </div>
  );
}

// ─── Fila de curso ───────────────────────────────────────────────
function CursoRow({ curso }) {
  const carrera = carreras.find((c) => c.id === curso.carreraId);
  return (
    <div className="doc-curso-row">
      <div className="doc-curso-dot" style={{ background: curso.color }} />
      <div className="doc-curso-info">
        <div className="doc-curso-nombre">{curso.nombre}</div>
        <div className="doc-curso-meta">
          {curso.codigo} · Ciclo {curso.ciclo}
          {carrera ? ` · ${carrera.nombre.split(" ").slice(0, 2).join(" ")}` : ""}
        </div>
      </div>
      <span className="doc-curso-cr">{curso.creditos} cr.</span>
    </div>
  );
}

// ─── Modal de detalle ────────────────────────────────────────────
function DocenteModal({ docente: d, onClose, navigate }) {
  const color = d.carrera?.color ?? "#4f46e5";
  return (
    <div className="doc-modal-backdrop" onClick={onClose}>
      <div className="doc-modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="doc-modal-close" onClick={onClose}>✕</button>

        {/* Head */}
        <div className="doc-modal-head">
          <div className="doc-modal-avatar" style={{ background:`linear-gradient(135deg,${color}cc,${color})` }}>
            {d.iniciales}
          </div>
          <div style={{ flex:1, minWidth:0 }}>
            <div className="doc-modal-name">{d.nombre}</div>
            <div className="doc-modal-area">{d.area}</div>
            <div className="doc-modal-badges">
              <span className="d-badge d-badge-indigo">⭐ {d.rating} / 5.0</span>
              {d.cursosActivos.length > 0 && <span className="d-badge d-badge-green">● Activo {SEMESTRE_ACTIVO}</span>}
              {d.facultad && (
                <span className="d-badge" style={{ background:`${d.facultad.color}18`, color:d.facultad.color, border:`1px solid ${d.facultad.color}35` }}>
                  {d.facultad.icono} {d.facultad.nombre.replace("Facultad de ","").replace("Facultad ","")}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="doc-modal-section-label">Estadísticas</div>
        <div className="doc-modal-stats">
          <div className="doc-modal-stat">
            <div className="doc-modal-stat-num">{d.numApuntes}</div>
            <div className="doc-modal-stat-lbl">Apuntes</div>
          </div>
          <div className="doc-modal-stat">
            <div className="doc-modal-stat-num">{d.numExamenes}</div>
            <div className="doc-modal-stat-lbl">Exámenes</div>
          </div>
          <div className="doc-modal-stat">
            <div className="doc-modal-stat-num">{d.todosCursos.length}</div>
            <div className="doc-modal-stat-lbl">Cursos</div>
          </div>
          <div className="doc-modal-stat">
            <div className="doc-modal-stat-num">{d.totalDescargas > 999 ? `${(d.totalDescargas/1000).toFixed(1)}k` : d.totalDescargas}</div>
            <div className="doc-modal-stat-lbl">Descargas</div>
          </div>
        </div>

        {/* Todos los cursos */}
        {d.todosCursos.length > 0 && (
          <>
            <div className="doc-modal-section-label" style={{ marginBottom:8 }}>
              Todos los cursos ({d.todosCursos.length})
            </div>
            <div className="doc-modal-cursos">
              {d.cursosActivos.length > 0 && (
                <>
                  <div style={{ fontSize:"0.68rem", fontWeight:700, color:"#16a34a", textTransform:"uppercase", letterSpacing:"0.08em", marginBottom:4 }}>
                    ● Activos {SEMESTRE_ACTIVO}
                  </div>
                  {d.cursosActivos.map((c) => <CursoRow key={c.id} curso={c} />)}
                </>
              )}
              {d.cursosPasados.length > 0 && (
                <>
                  <div style={{ fontSize:"0.68rem", fontWeight:700, color:"var(--text-muted)", textTransform:"uppercase", letterSpacing:"0.08em", margin:"8px 0 4px" }}>
                    Anteriores
                  </div>
                  <div style={{ opacity:0.7, display:"flex", flexDirection:"column", gap:5 }}>
                    {d.cursosPasados.map((c) => <CursoRow key={c.id} curso={c} />)}
                  </div>
                </>
              )}
            </div>
          </>
        )}

        {/* Acciones */}
        <div className="doc-modal-cta">
          <button className="doc-modal-btn doc-modal-btn-primary" onClick={() => { onClose(); navigate("apuntes"); }}>
            📝 Ver apuntes
          </button>
          <button className="doc-modal-btn doc-modal-btn-secondary" onClick={() => { onClose(); navigate("examenes"); }}>
            📋 Ver exámenes
          </button>
        </div>
      </div>
    </div>
  );
}