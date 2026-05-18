import { useState, useMemo, useCallback } from "react";
import {
  examenes, cursos, docentes, facultades, carreras,
  ARCHIVO_TIPOS, handleArchivoClick,
} from "../data/mockData";
import { Modal } from "../components/ui/Modal";
import { useAuth } from "../context/AuthContext";

// ─── Constantes ──────────────────────────────────────────────────
const SORT_OPTIONS = [
  { value:"fecha",     label:"Más recientes" },
  { value:"descargas", label:"Más descargados" },
  { value:"likes",     label:"Más valorados" },
  { value:"vistas",    label:"Más vistos" },
];

// ─── Fila de archivo (reutilizable) ─────────────────────────────
function ArchivoRow({ archivo }) {
  const info    = ARCHIVO_TIPOS[archivo.tipo] || ARCHIVO_TIPOS.pdf;
  const detalle = archivo.paginas      ? `${archivo.paginas} págs.`
                : archivo.diapositivas ? `${archivo.diapositivas} slides`
                : archivo.hojas        ? `${archivo.hojas} hojas`
                : archivo.archivos     ? `${archivo.archivos} archivos`
                : archivo.dimensiones ?? "";
  const tieneUrl = !!archivo.url;

  return (
    <div style={{
      display:"flex", alignItems:"center", gap:10,
      background:"var(--bg-elevated)", border:"1px solid var(--border)",
      borderRadius:11, padding:"9px 13px",
    }}>
      {archivo.tipo === "imagen" && archivo.url ? (
        <img src={archivo.url} alt={archivo.nombre}
          style={{ width:34, height:34, borderRadius:8, objectFit:"cover", flexShrink:0, border:`1px solid ${info.border}` }}
          loading="lazy" />
      ) : (
        <span style={{
          width:34, height:34, borderRadius:8, flexShrink:0,
          background:info.bg, border:`1px solid ${info.border}`,
          display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1rem",
        }}>{info.icon}</span>
      )}
      <div style={{ flex:1, minWidth:0 }}>
        <div style={{ fontSize:"0.8rem", fontWeight:600, color:"var(--text-primary)", whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis" }}>
          {archivo.nombre}
        </div>
        <div style={{ fontSize:"0.7rem", color:"var(--text-muted)", marginTop:1 }}>
          {info.label} · {archivo.tamaño}{detalle ? ` · ${detalle}` : ""}
        </div>
      </div>
      <button
        onClick={() => handleArchivoClick(archivo)}
        style={{
          flexShrink:0,
          background: tieneUrl ? "var(--indigo-dim)" : "var(--bg-card)",
          border:`1px solid ${tieneUrl ? "rgba(99,102,241,0.35)" : "var(--border)"}`,
          borderRadius:7, padding:"4px 10px",
          color: tieneUrl ? "var(--indigo-light)" : "var(--text-muted)",
          fontSize:"0.7rem", fontWeight:700,
          cursor: tieneUrl ? "pointer" : "not-allowed",
          fontFamily:"var(--font-body)", opacity: tieneUrl ? 1 : 0.5, whiteSpace:"nowrap",
        }}
      >
        {tieneUrl ? "📄 Abrir" : "🔒 Demo"}
      </button>
    </div>
  );
}

// ─── Página principal ────────────────────────────────────────────
export default function Examenes({ navigate }) {
  const { user } = useAuth();

  const [search, setSearch]               = useState("");
  const [tipoFilter, setTipoFilter]       = useState("all");
  const [facultadFilter, setFacultad]     = useState("all");
  const [carreraFilter, setCarrera]       = useState("all");
  const [cicloFilter, setCiclo]           = useState("all");
  const [semestreFilter, setSemestre]     = useState("all");
  const [soloResueltos, setSoloResueltos] = useState(false);
  const [soloGratis, setSoloGratis]       = useState(false);
  const [sortBy, setSortBy]               = useState("fecha");
  const [modalExamen, setModalExamen]     = useState(null);
  const [viewMode, setViewMode]           = useState("table"); // table | cards

  // Semestres disponibles
  const semestres = useMemo(
    () => [...new Set(examenes.map(e => `${e.año}-${e.semestre}`))].sort((a,b) => b.localeCompare(a)),
    []
  );

  // Carreras filtradas por facultad
  const carrerasFiltradas = useMemo(() =>
    facultadFilter === "all"
      ? carreras
      : carreras.filter(c => c.facultadId === Number(facultadFilter)),
  [facultadFilter]);

  // Ciclos disponibles
  const ciclosDisponibles = useMemo(() => {
    const set = new Set(cursos.map(c => c.ciclo));
    return [...set].sort((a,b) => a-b);
  }, []);

  // Filtrado + ordenado
  const filtered = useMemo(() => {
    let list = examenes.filter(e => {
      const curso    = cursos.find(c => c.id === e.cursoId);
      const carrera  = curso ? carreras.find(c => c.id === curso.carreraId) : null;

      const matchSearch   = e.titulo.toLowerCase().includes(search.toLowerCase())
                         || e.temas?.some(t => t.toLowerCase().includes(search.toLowerCase()))
                         || (curso?.nombre.toLowerCase().includes(search.toLowerCase()));
      const matchTipo     = tipoFilter === "all" || e.tipo === tipoFilter;
      const matchFacultad = facultadFilter === "all" || (carrera && carrera.facultadId === Number(facultadFilter));
      const matchCarrera  = carreraFilter === "all" || (curso && String(curso.carreraId) === carreraFilter);
      const matchCiclo    = cicloFilter === "all" || (curso && String(curso.ciclo) === cicloFilter);
      const matchSem      = semestreFilter === "all" || `${e.año}-${e.semestre}` === semestreFilter;
      const matchResuelto = !soloResueltos || e.resuelto;
      const matchGratis   = !soloGratis || !e.premium;

      return matchSearch && matchTipo && matchFacultad && matchCarrera && matchCiclo && matchSem && matchResuelto && matchGratis;
    });

    list = [...list].sort((a,b) => {
      if (sortBy === "fecha")     return b.fecha.localeCompare(a.fecha);
      if (sortBy === "descargas") return b.descargas - a.descargas;
      if (sortBy === "likes")     return b.likes - a.likes;
      if (sortBy === "vistas")    return (b.vistas||0) - (a.vistas||0);
      return 0;
    });
    return list;
  }, [search, tipoFilter, facultadFilter, carreraFilter, cicloFilter, semestreFilter, soloResueltos, soloGratis, sortBy]);

  const stats = useMemo(() => ({
    total:     examenes.length,
    parciales: examenes.filter(e => e.tipo==="Parcial").length,
    finales:   examenes.filter(e => e.tipo==="Final").length,
    resueltos: examenes.filter(e => e.resuelto).length,
    premium:   examenes.filter(e => e.premium).length,
  }), []);

  const hasFilter = search || tipoFilter!=="all" || facultadFilter!=="all" || carreraFilter!=="all"
    || cicloFilter!=="all" || semestreFilter!=="all" || soloResueltos || soloGratis;

  const reset = useCallback(() => {
    setSearch(""); setTipoFilter("all"); setFacultad("all"); setCarrera("all");
    setCiclo("all"); setSemestre("all"); setSoloResueltos(false); setSoloGratis(false);
  }, []);

  // Modal data
  const modalCurso   = modalExamen ? cursos.find(c => c.id === modalExamen.cursoId) : null;
  const modalCarrera = modalCurso  ? carreras.find(c => c.id === modalCurso.carreraId) : null;
  const modalFac     = modalCarrera ? facultades.find(f => f.id === modalCarrera.facultadId) : null;
  const modalDocente = modalExamen ? docentes.find(d => d.id === modalExamen.docenteId) : null;
  const locked       = modalExamen?.premium && !user;

  return (
    <>
      <style>{`
        /* ── Animaciones ── */
        .ex-page { animation:ex-in 0.35s ease both; }
        @keyframes ex-in { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:none} }
        @keyframes ex-card-in { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:none} }

        /* ── Header ── */
        .ex-header {
          display:flex; align-items:flex-start; justify-content:space-between;
          gap:16px; margin-bottom:28px; flex-wrap:wrap;
        }
        .ex-title {
          font-family:var(--font-display); font-weight:900;
          font-size:clamp(1.6rem,4vw,2.1rem);
          color:var(--text-primary); margin-bottom:4px; letter-spacing:-0.03em;
        }
        .ex-sub { font-size:0.875rem; color:var(--text-muted); }

        /* ── Stats bar ── */
        .ex-stats-bar { display:flex; gap:10px; flex-wrap:wrap; margin-bottom:24px; }
        .ex-stat-chip {
          display:flex; align-items:center; gap:6px;
          background:var(--bg-card); border:1px solid var(--border);
          border-radius:100px; padding:6px 14px;
          font-size:0.76rem; font-weight:600; color:var(--text-secondary);
        }
        .ex-stat-chip span { font-weight:800; color:var(--text-primary); }

        /* ── Filtros ── */
        .ex-filters-wrap {
          background:var(--bg-card); border:1px solid var(--border);
          border-radius:16px; padding:16px 18px; margin-bottom:20px;
          display:flex; flex-direction:column; gap:12px;
        }
        .ex-filters-row { display:flex; gap:10px; flex-wrap:wrap; align-items:center; }
        .ex-search-wrap { position:relative; flex:2; min-width:200px; }
        .ex-search-icon { position:absolute; left:12px; top:50%; transform:translateY(-50%); pointer-events:none; font-size:0.9rem; }
        .ex-search {
          width:100%; background:var(--bg-elevated); border:1px solid var(--border);
          border-radius:10px; padding:9px 14px 9px 36px;
          color:var(--text-primary); font-size:0.875rem; font-family:var(--font-body);
          outline:none; transition:border-color 0.18s;
        }
        .ex-search:focus { border-color:rgba(99,102,241,0.5); }
        .ex-search::placeholder { color:var(--text-muted); }
        .ex-select {
          background:var(--bg-elevated); border:1px solid var(--border);
          border-radius:10px; padding:9px 14px; flex:1; min-width:130px;
          color:var(--text-secondary); font-size:0.84rem; font-family:var(--font-body);
          outline:none; cursor:pointer; transition:border-color 0.18s;
        }
        .ex-select.active { border-color:rgba(99,102,241,0.5); color:var(--indigo-light); background:var(--indigo-dim); }
        .ex-toggle {
          display:flex; align-items:center; gap:7px;
          background:var(--bg-elevated); border:1px solid var(--border);
          border-radius:10px; padding:9px 14px;
          font-size:0.8rem; font-weight:600; color:var(--text-secondary);
          cursor:pointer; font-family:var(--font-body); white-space:nowrap;
          transition:all 0.15s; user-select:none;
        }
        .ex-toggle.on { background:rgba(16,185,129,0.1); border-color:rgba(16,185,129,0.35); color:var(--emerald); }
        .ex-reset {
          background:rgba(239,68,68,0.08); border:1px solid rgba(239,68,68,0.25);
          border-radius:10px; padding:9px 14px;
          color:#ef4444; font-size:0.8rem; font-weight:600;
          font-family:var(--font-body); cursor:pointer; white-space:nowrap; transition:all 0.15s;
        }
        .ex-reset:hover { background:rgba(239,68,68,0.14); }

        /* Facultad chips */
        .ex-fac-row { display:flex; gap:7px; flex-wrap:wrap; }
        .ex-fac-btn {
          display:flex; align-items:center; gap:5px;
          background:var(--bg-elevated); border:1px solid var(--border);
          border-radius:9px; padding:5px 12px;
          font-size:0.76rem; font-weight:600; color:var(--text-muted);
          cursor:pointer; font-family:var(--font-body); transition:all 0.15s; white-space:nowrap;
        }
        .ex-fac-btn.active { color:#fff; border-color:transparent; }
        .ex-fac-btn:hover:not(.active) { background:var(--bg-card); color:var(--text-secondary); }

        /* ── Tipo tabs ── */
        .ex-tipo-tabs { display:flex; gap:7px; margin-bottom:20px; }
        .ex-tipo-tab {
          background:var(--bg-card); border:1px solid var(--border);
          border-radius:100px; padding:6px 16px;
          font-size:0.8rem; font-weight:600; color:var(--text-muted);
          cursor:pointer; font-family:var(--font-body); transition:all 0.15s;
          display:flex; align-items:center; gap:6px;
        }
        .ex-tipo-tab:hover { background:var(--bg-elevated); color:var(--text-secondary); }
        .ex-tipo-tab.all.active { background:var(--indigo-dim); border-color:rgba(99,102,241,0.4); color:var(--indigo-light); }
        .ex-tipo-tab.parcial.active { background:rgba(99,102,241,0.14); border-color:rgba(99,102,241,0.4); color:var(--indigo-light); }
        .ex-tipo-tab.final.active   { background:rgba(244,63,94,0.12); border-color:rgba(244,63,94,0.4); color:#fb7185; }
        .ex-tab-count { background:var(--bg-elevated); border-radius:100px; padding:1px 7px; font-size:0.68rem; }
        .ex-tipo-tab.active .ex-tab-count { background:rgba(255,255,255,0.12); }

        /* ── Toolbar ── */
        .ex-toolbar { display:flex; align-items:center; gap:10px; margin-bottom:16px; flex-wrap:wrap; }
        .ex-result-count { font-size:0.82rem; color:var(--text-muted); flex:1; }
        .ex-result-count strong { color:var(--text-secondary); }
        .ex-sort-select {
          background:var(--bg-card); border:1px solid var(--border);
          border-radius:9px; padding:6px 12px;
          color:var(--text-secondary); font-size:0.8rem; font-family:var(--font-body); outline:none; cursor:pointer;
        }
        .ex-view-btns { display:flex; gap:4px; }
        .ex-view-btn {
          background:var(--bg-card); border:1px solid var(--border);
          border-radius:8px; padding:6px 10px; cursor:pointer;
          font-size:0.85rem; transition:all 0.15s; color:var(--text-muted);
        }
        .ex-view-btn.active { background:var(--indigo-dim); border-color:rgba(99,102,241,0.35); color:var(--indigo-light); }

        /* ── Badges ── */
        .ex-badge {
          display:inline-block; padding:3px 10px; border-radius:100px;
          font-size:0.68rem; font-weight:700; letter-spacing:0.04em; text-transform:uppercase;
        }
        .ex-badge-parcial { background:rgba(99,102,241,0.14); color:var(--indigo-light); }
        .ex-badge-final   { background:rgba(244,63,94,0.12); color:#fb7185; }
        .ex-badge-ok      { background:var(--emerald-dim); color:var(--emerald); border:1px solid rgba(16,185,129,0.3); }
        .ex-badge-no      { background:var(--bg-elevated); color:var(--text-muted); border:1px solid var(--border); }
        .ex-badge-premium { background:var(--amber-dim); color:var(--amber); border:1px solid rgba(245,158,11,0.3); }

        /* ── Table (desktop) ── */
        .ex-table { background:var(--bg-card); border:1px solid var(--border); border-radius:18px; overflow:hidden; }
        .ex-thead {
          display:flex; gap:10px; padding:11px 20px;
          background:var(--bg-elevated); border-bottom:1px solid var(--border);
          font-size:0.67rem; font-weight:800; letter-spacing:0.09em; text-transform:uppercase; color:var(--text-muted);
        }
        .ex-row {
          display:flex; gap:10px; padding:13px 20px;
          border-bottom:1px solid var(--border); align-items:center;
          transition:background 0.15s; cursor:pointer;
        }
        .ex-row:last-child { border-bottom:none; }
        .ex-row:hover { background:var(--bg-elevated); }
        .ex-col-main { flex:3; display:flex; flex-direction:column; gap:4px; min-width:0; }
        .ex-col-1    { flex:1; text-align:center; }
        .ex-col-sm   { flex:0.8; text-align:center; font-size:0.78rem; color:var(--text-muted); }
        .ex-col-dl   { flex:0.7; text-align:right; font-size:0.78rem; color:var(--text-muted); }
        .ex-col-act  { flex:0.8; text-align:right; }
        .ex-row-title {
          font-family:var(--font-display); font-weight:700;
          font-size:0.875rem; color:var(--text-primary);
          white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
        }
        .ex-row-meta { display:flex; align-items:center; gap:6px; font-size:0.74rem; color:var(--text-muted); }
        .ex-row-dot  { width:7px; height:7px; border-radius:50%; flex-shrink:0; }
        .ex-row-fac  { font-size:0.68rem; font-weight:700; }
        .ex-view-btn-sm {
          background:var(--indigo-dim); border:1px solid rgba(99,102,241,0.3);
          border-radius:8px; padding:5px 12px;
          color:var(--indigo-light); font-size:0.76rem; font-weight:700;
          cursor:pointer; font-family:var(--font-body); transition:all 0.15s; white-space:nowrap;
        }
        .ex-view-btn-sm:hover { background:rgba(99,102,241,0.25); }
        .ex-view-btn-sm.premium { background:var(--amber-dim); border-color:rgba(245,158,11,0.3); color:var(--amber); }

        /* ── Cards mobile ── */
        .ex-cards { display:none; flex-direction:column; gap:12px; }
        .ex-card {
          background:var(--bg-card); border:1px solid var(--border);
          border-radius:16px; overflow:hidden; cursor:pointer;
          transition:all 0.2s; animation:ex-card-in 0.25s ease both;
          display:flex; flex-direction:column;
        }
        .ex-card:hover { border-color:rgba(99,102,241,0.35); transform:translateY(-2px); box-shadow:0 8px 24px rgba(0,0,0,0.18); }
        .ex-card-img { width:100%; height:90px; object-fit:cover; display:block; flex-shrink:0; }
        .ex-card-body { padding:14px 16px 16px; display:flex; flex-direction:column; gap:9px; }
        .ex-card-top { display:flex; gap:6px; flex-wrap:wrap; align-items:center; }
        .ex-card-title { font-family:var(--font-display); font-weight:700; font-size:0.9rem; color:var(--text-primary); line-height:1.35; }
        .ex-card-meta { display:flex; align-items:center; gap:6px; font-size:0.75rem; color:var(--text-muted); }
        .ex-card-footer { display:flex; align-items:center; justify-content:space-between; gap:8px; }
        .ex-card-stats { display:flex; gap:10px; font-size:0.78rem; color:var(--text-muted); }
        .ex-card-temas { display:flex; gap:5px; flex-wrap:wrap; }
        .ex-card-tema {
          background:var(--bg-elevated); border:1px solid var(--border);
          border-radius:100px; padding:2px 8px; font-size:0.65rem; color:var(--text-muted);
        }

        /* ── Empty ── */
        .ex-empty { text-align:center; padding:72px 24px; color:var(--text-muted); display:flex; flex-direction:column; gap:12px; align-items:center; }

        /* ── Modal ── */
        .ex-modal-preview { width:100%; height:140px; object-fit:cover; border-radius:12px; margin-bottom:4px; display:block; }
        .ex-modal-chips { display:flex; gap:7px; flex-wrap:wrap; }
        .ex-modal-chip { padding:4px 12px; border-radius:100px; font-size:0.78rem; font-weight:600; }
        .ex-modal-section { margin-bottom:16px; }
        .ex-modal-section-label { font-size:0.65rem; font-weight:800; letter-spacing:0.1em; text-transform:uppercase; color:var(--text-muted); margin-bottom:8px; }
        .ex-modal-meta-grid { display:grid; grid-template-columns:1fr 1fr; gap:8px; }
        .ex-modal-meta-item { background:var(--bg-elevated); border:1px solid var(--border); border-radius:11px; padding:10px 12px; }
        .ex-modal-meta-label { font-size:0.66rem; color:var(--text-muted); font-weight:700; text-transform:uppercase; letter-spacing:0.06em; margin-bottom:3px; }
        .ex-modal-meta-value { font-size:0.84rem; font-weight:600; color:var(--text-primary); }
        .ex-modal-temas { display:flex; gap:6px; flex-wrap:wrap; }
        .ex-modal-tema { background:var(--bg-elevated); border:1px solid var(--border); border-radius:100px; padding:3px 10px; font-size:0.74rem; color:var(--text-secondary); font-weight:500; }
        .ex-modal-desc { font-size:0.875rem; color:var(--text-secondary); line-height:1.65; background:var(--bg-elevated); border-radius:12px; padding:12px 14px; border:1px solid var(--border); }
        .ex-modal-stats-row { display:flex; gap:14px; padding:12px 0; border-top:1px solid var(--border); border-bottom:1px solid var(--border); font-size:0.84rem; color:var(--text-muted); flex-wrap:wrap; }
        .ex-archivos-list { display:flex; flex-direction:column; gap:8px; }

        .ex-dl-btn {
          width:100%; background:linear-gradient(135deg,var(--indigo),#7c3aed);
          border:none; border-radius:12px; padding:13px;
          color:#fff; font-family:var(--font-display); font-weight:700;
          font-size:0.95rem; cursor:pointer; transition:all 0.2s;
          box-shadow:0 4px 16px rgba(99,102,241,0.3);
        }
        .ex-dl-btn:hover { transform:translateY(-1px); box-shadow:0 6px 22px rgba(99,102,241,0.4); }
        .ex-premium-wall {
          background:var(--amber-dim); border:1px solid rgba(245,158,11,0.25);
          border-radius:14px; padding:22px; text-align:center;
          display:flex; flex-direction:column; gap:10px; align-items:center;
          font-size:0.875rem; color:var(--amber);
        }
        .ex-premium-cta {
          background:linear-gradient(135deg,var(--amber),#ef4444);
          border:none; border-radius:9px; padding:9px 22px;
          color:#fff; font-weight:700; font-size:0.875rem;
          cursor:pointer; font-family:var(--font-body);
        }
        .ex-info-row { font-size:0.875rem; color:var(--text-secondary); display:flex; align-items:center; gap:8px; }
        .ex-info-label { font-weight:700; color:var(--text-primary); min-width:90px; }

        /* ── Responsive ── */
        @media(max-width:780px){
          .ex-table { display:none; }
          .ex-cards { display:flex; }
          .ex-view-btns { display:none; }
        }
        @media(max-width:500px){
          .ex-stats-bar { display:none; }
          .ex-modal-meta-grid { grid-template-columns:1fr; }
          .ex-tipo-tabs { flex-wrap:wrap; }
        }
      `}</style>

      <div className="ex-page page-container">

        {/* Header */}
        <div className="ex-header">
          <div>
            <h1 className="ex-title">Exámenes</h1>
            <p className="ex-sub">Banco de parciales y finales de la Universidad Continental</p>
          </div>
        </div>

        {/* Stats bar */}
        <div className="ex-stats-bar">
          <div className="ex-stat-chip">📋 <span>{stats.total}</span> exámenes</div>
          <div className="ex-stat-chip">📝 <span>{stats.parciales}</span> parciales</div>
          <div className="ex-stat-chip">📋 <span>{stats.finales}</span> finales</div>
          <div className="ex-stat-chip" style={{color:"var(--emerald)"}}>✓ <span style={{color:"var(--emerald)"}}>{stats.resueltos}</span> resueltos</div>
          <div className="ex-stat-chip" style={{color:"var(--amber)"}}>⭐ <span style={{color:"var(--amber)"}}>{stats.premium}</span> premium</div>
        </div>

        {/* Filtros */}
        <div className="ex-filters-wrap">
          {/* Fila 1 */}
          <div className="ex-filters-row">
            <div className="ex-search-wrap">
              <span className="ex-search-icon">🔍</span>
              <input
                className="ex-search"
                placeholder="Buscar por título, tema, curso..."
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
            <select
              className={`ex-select${carreraFilter !== "all" ? " active" : ""}`}
              value={carreraFilter}
              onChange={e => setCarrera(e.target.value)}
            >
              <option value="all">Todas las carreras</option>
              {carrerasFiltradas.map(c => <option key={c.id} value={String(c.id)}>{c.nombre}</option>)}
            </select>
            <select
              className={`ex-select${cicloFilter !== "all" ? " active" : ""}`}
              value={cicloFilter}
              onChange={e => setCiclo(e.target.value)}
            >
              <option value="all">Todos los ciclos</option>
              {ciclosDisponibles.map(c => <option key={c} value={String(c)}>Ciclo {c}</option>)}
            </select>
            <select
              className={`ex-select${semestreFilter !== "all" ? " active" : ""}`}
              value={semestreFilter}
              onChange={e => setSemestre(e.target.value)}
            >
              <option value="all">Todos los semestres</option>
              {semestres.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>

          {/* Fila 2: toggles */}
          <div className="ex-filters-row">
            <button className={`ex-toggle${soloResueltos ? " on" : ""}`} onClick={() => setSoloResueltos(v=>!v)}>
              {soloResueltos ? "✓" : "○"} Con solución
            </button>
            <button className={`ex-toggle${soloGratis ? " on" : ""}`} onClick={() => setSoloGratis(v=>!v)}>
              {soloGratis ? "✓" : "○"} Solo gratis
            </button>
            {hasFilter && <button className="ex-reset" onClick={reset}>✕ Limpiar filtros</button>}
          </div>

          {/* Fila 3: Facultades */}
          <div className="ex-fac-row">
            <button
              className={`ex-fac-btn${facultadFilter === "all" ? " active" : ""}`}
              style={facultadFilter==="all" ? { background:"var(--indigo-dim)", color:"var(--indigo-light)", borderColor:"rgba(99,102,241,0.4)" } : {}}
              onClick={() => { setFacultad("all"); setCarrera("all"); }}
            >
              Todas
            </button>
            {facultades.map(f => (
              <button
                key={f.id}
                className={`ex-fac-btn${facultadFilter===String(f.id) ? " active" : ""}`}
                style={facultadFilter===String(f.id) ? { background:f.color } : {}}
                onClick={() => { setFacultad(String(f.id)); setCarrera("all"); }}
              >
                {f.icono} {f.nombre.replace("Facultad de ","").replace("Facultad ","")}
              </button>
            ))}
          </div>
        </div>

        {/* Tipo tabs */}
        <div className="ex-tipo-tabs">
          {[
            { value:"all", label:"Todos", cls:"all", count:examenes.length },
            { value:"Parcial", label:"📝 Parciales", cls:"parcial", count:stats.parciales },
            { value:"Final",   label:"📋 Finales",   cls:"final",   count:stats.finales   },
          ].map(t => (
            <button
              key={t.value}
              className={`ex-tipo-tab ${t.cls}${tipoFilter===t.value ? " active" : ""}`}
              onClick={() => setTipoFilter(t.value)}
            >
              {t.label}
              <span className="ex-tab-count">{t.count}</span>
            </button>
          ))}
        </div>

        {/* Toolbar */}
        <div className="ex-toolbar">
          <span className="ex-result-count">
            <strong>{filtered.length}</strong> examen{filtered.length!==1?"es":""} encontrado{filtered.length!==1?"s":""}
          </span>
          <select className="ex-sort-select" value={sortBy} onChange={e => setSortBy(e.target.value)}>
            {SORT_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
          <div className="ex-view-btns">
            <button className={`ex-view-btn${viewMode==="table"?" active":""}`} onClick={() => setViewMode("table")}>☰</button>
            <button className={`ex-view-btn${viewMode==="cards"?" active":""}`} onClick={() => setViewMode("cards")}>⊞</button>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="ex-empty">
            <span style={{fontSize:"2.5rem"}}>📭</span>
            <p style={{fontWeight:700,color:"var(--text-secondary)"}}>Sin resultados</p>
            <p>Prueba con otros filtros o términos</p>
            {hasFilter && <button className="ex-reset" onClick={reset}>✕ Limpiar filtros</button>}
          </div>
        ) : (
          <>
            {/* Desktop Table */}
            <div className="ex-table" style={{ display: viewMode==="cards" ? "none" : undefined }}>
              <div className="ex-thead">
                <span style={{flex:3}}>Examen</span>
                <span style={{flex:1,textAlign:"center"}}>Tipo</span>
                <span style={{flex:0.8,textAlign:"center"}}>Semestre</span>
                <span style={{flex:1,textAlign:"center"}}>Estado</span>
                <span style={{flex:0.7,textAlign:"right"}}>⬇️</span>
                <span style={{flex:0.8,textAlign:"right"}}>Acción</span>
              </div>
              {filtered.map(ex => {
                const curso    = cursos.find(c => c.id === ex.cursoId);
                const docente  = docentes.find(d => d.id === ex.docenteId);
                const carrera  = curso ? carreras.find(c => c.id === curso.carreraId) : null;
                const facultad = carrera ? facultades.find(f => f.id === carrera.facultadId) : null;
                return (
                  <div className="ex-row" key={ex.id} onClick={() => setModalExamen(ex)}>
                    <div className="ex-col-main">
                      <span className="ex-row-title">{ex.titulo}</span>
                      <div className="ex-row-meta">
                        {curso && <>
                          <span className="ex-row-dot" style={{background:curso.color}} />
                          {curso.nombre}
                        </>}
                        {facultad && (
                          <span className="ex-row-fac" style={{color:facultad.color}}>{facultad.icono}</span>
                        )}
                        {docente && ` · ${docente.nombre.split(" ")[0]} ${docente.nombre.split(" ")[1]}`}
                      </div>
                    </div>
                    <div className="ex-col-1">
                      <span className={`ex-badge ${ex.tipo==="Final" ? "ex-badge-final" : "ex-badge-parcial"}`}>{ex.tipo}</span>
                    </div>
                    <div className="ex-col-sm">{ex.año}-{ex.semestre}</div>
                    <div className="ex-col-1">
                      <span className={`ex-badge ${ex.resuelto ? "ex-badge-ok" : "ex-badge-no"}`}>
                        {ex.resuelto ? "✓ Resuelto" : "Sin resolver"}
                      </span>
                    </div>
                    <div className="ex-col-dl">{ex.descargas.toLocaleString()}</div>
                    <div className="ex-col-act">
                      <button className={`ex-view-btn-sm${ex.premium ? " premium" : ""}`}>
                        {ex.premium ? "🔒 PRO" : "⬇️ Ver"}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Cards (mobile siempre, desktop cuando viewMode=cards) */}
            <div className="ex-cards" style={{ display: viewMode==="cards" ? "flex" : undefined }}>
              {filtered.map((ex, i) => {
                const curso   = cursos.find(c => c.id === ex.cursoId);
                return (
                  <div
                    key={ex.id}
                    className="ex-card"
                    style={{ animationDelay:`${Math.min(i*0.04,0.3)}s` }}
                    onClick={() => setModalExamen(ex)}
                  >
                    {ex.previewImg && (
                      <img src={ex.previewImg} alt={ex.titulo} className="ex-card-img" loading="lazy" />
                    )}
                    <div className="ex-card-body">
                      <div className="ex-card-top">
                        <span className={`ex-badge ${ex.tipo==="Final" ? "ex-badge-final" : "ex-badge-parcial"}`}>{ex.tipo}</span>
                        <span className={`ex-badge ${ex.resuelto ? "ex-badge-ok" : "ex-badge-no"}`}>{ex.resuelto ? "✓ Resuelto" : "Sin resolver"}</span>
                        {ex.premium && <span className="ex-badge ex-badge-premium">⭐ PRO</span>}
                      </div>
                      <div className="ex-card-title">{ex.titulo}</div>
                      {curso && (
                        <div className="ex-card-meta">
                          <span className="ex-row-dot" style={{background:curso.color}} />
                          {curso.nombre} · {ex.año}-{ex.semestre}
                        </div>
                      )}
                      {ex.temas?.length > 0 && (
                        <div className="ex-card-temas">
                          {ex.temas.slice(0,3).map(t => <span key={t} className="ex-card-tema">{t}</span>)}
                          {ex.temas.length>3 && <span className="ex-card-tema" style={{color:"var(--indigo-light)"}}>+{ex.temas.length-3}</span>}
                        </div>
                      )}
                      <div className="ex-card-footer">
                        <div className="ex-card-stats">
                          <span>⬇️ {ex.descargas.toLocaleString()}</span>
                          <span>❤️ {ex.likes}</span>
                          <span>📎 {ex.archivos?.length||0}</span>
                        </div>
                        <button className={`ex-view-btn-sm${ex.premium ? " premium" : ""}`}>
                          {ex.premium ? "🔒 PRO" : "⬇️ Ver"}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {/* Modal */}
        <Modal open={!!modalExamen} onClose={() => setModalExamen(null)} title={modalExamen?.titulo}>
          {modalExamen && (
            <div style={{display:"flex", flexDirection:"column", gap:16}}>

              {/* Preview img */}
              {modalExamen.previewImg && (
                <img src={modalExamen.previewImg} alt={modalExamen.titulo} className="ex-modal-preview" loading="lazy" />
              )}

              {/* Badges */}
              <div className="ex-modal-chips">
                <span className={`ex-badge ${modalExamen.tipo==="Final" ? "ex-badge-final" : "ex-badge-parcial"}`} style={{fontSize:"0.8rem",padding:"4px 12px"}}>
                  {modalExamen.tipo}
                </span>
                {modalExamen.resuelto && <span className="ex-badge ex-badge-ok" style={{fontSize:"0.8rem",padding:"4px 12px"}}>✓ Con solución</span>}
                {modalExamen.premium  && <span className="ex-badge ex-badge-premium" style={{fontSize:"0.8rem",padding:"4px 12px"}}>⭐ Premium</span>}
                {modalFac && (
                  <span className="ex-modal-chip" style={{background:`${modalFac.color}18`,color:modalFac.color,border:`1px solid ${modalFac.color}35`}}>
                    {modalFac.icono} {modalFac.nombre.replace("Facultad de ","").replace("Facultad ","")}
                  </span>
                )}
              </div>

              {/* Stats */}
              <div className="ex-modal-stats-row">
                <span>⬇️ <strong style={{color:"var(--text-secondary)"}}>{modalExamen.descargas.toLocaleString()}</strong></span>
                <span>❤️ <strong style={{color:"var(--text-secondary)"}}>{modalExamen.likes}</strong></span>
                <span>👁️ <strong style={{color:"var(--text-secondary)"}}>{(modalExamen.vistas||0).toLocaleString()}</strong></span>
                <span style={{marginLeft:"auto",fontSize:"0.76rem",color:"var(--text-muted)"}}>{modalExamen.fecha}</span>
              </div>

              {/* Descripción */}
              {modalExamen.descripcion && (
                <div className="ex-modal-section">
                  <div className="ex-modal-section-label">Descripción</div>
                  <div className="ex-modal-desc">{modalExamen.descripcion}</div>
                </div>
              )}

              {/* Info */}
              <div className="ex-modal-section">
                <div className="ex-modal-section-label">Información del examen</div>
                <div className="ex-modal-meta-grid">
                  {modalCurso && (
                    <div className="ex-modal-meta-item">
                      <div className="ex-modal-meta-label">Curso</div>
                      <div className="ex-modal-meta-value" style={{fontSize:"0.78rem"}}>{modalCurso.nombre}</div>
                    </div>
                  )}
                  {modalCarrera && (
                    <div className="ex-modal-meta-item">
                      <div className="ex-modal-meta-label">Carrera</div>
                      <div className="ex-modal-meta-value" style={{fontSize:"0.78rem"}}>{modalCarrera.nombre}</div>
                    </div>
                  )}
                  {modalDocente && (
                    <div className="ex-modal-meta-item">
                      <div className="ex-modal-meta-label">Docente</div>
                      <div className="ex-modal-meta-value" style={{fontSize:"0.78rem"}}>{modalDocente.nombre.split(" ").slice(0,3).join(" ")}</div>
                    </div>
                  )}
                  <div className="ex-modal-meta-item">
                    <div className="ex-modal-meta-label">Año / Semestre</div>
                    <div className="ex-modal-meta-value">{modalExamen.año} – {modalExamen.semestre}</div>
                  </div>
                  {modalExamen.duracion && (
                    <div className="ex-modal-meta-item">
                      <div className="ex-modal-meta-label">Duración</div>
                      <div className="ex-modal-meta-value">{modalExamen.duracion}</div>
                    </div>
                  )}
                  {modalExamen.preguntas && (
                    <div className="ex-modal-meta-item">
                      <div className="ex-modal-meta-label">Preguntas / Puntaje</div>
                      <div className="ex-modal-meta-value">{modalExamen.preguntas} preg. · {modalExamen.puntaje_total} pts</div>
                    </div>
                  )}
                  {modalCurso && (
                    <div className="ex-modal-meta-item">
                      <div className="ex-modal-meta-label">Código / Ciclo</div>
                      <div className="ex-modal-meta-value">{modalCurso.codigo} · Ciclo {modalCurso.ciclo}</div>
                    </div>
                  )}
                </div>
              </div>

              {/* Temas */}
              {modalExamen.temas?.length > 0 && (
                <div className="ex-modal-section">
                  <div className="ex-modal-section-label">Temas evaluados</div>
                  <div className="ex-modal-temas">
                    {modalExamen.temas.map(t => <span key={t} className="ex-modal-tema">{t}</span>)}
                  </div>
                </div>
              )}

              {/* Archivos */}
              {modalExamen.archivos?.length > 0 && (
                <div className="ex-modal-section">
                  <div className="ex-modal-section-label">
                    Archivos · {modalExamen.archivos.length} {modalExamen.archivos.length===1?"archivo":"archivos"}
                    {modalExamen.resuelto && " (incluye solución)"}
                  </div>
                  <div className="ex-archivos-list">
                    {modalExamen.archivos.map((a,i) => <ArchivoRow key={i} archivo={a} />)}
                  </div>
                </div>
              )}

              {/* CTA */}
              {locked ? (
                <div className="ex-premium-wall">
                  <span style={{fontSize:"1.6rem"}}>🔒</span>
                  <p style={{fontWeight:700}}>Examen resuelto exclusivo para Premium</p>
                  <p style={{fontSize:"0.82rem",color:"var(--text-muted)"}}>Accede a todos los exámenes resueltos por S/. 5/mes</p>
                  <button className="ex-premium-cta" onClick={() => { setModalExamen(null); navigate("planes"); }}>
                    Ver planes →
                  </button>
                </div>
              ) : (
                <button
                  className="ex-dl-btn"
                  onClick={() => {
                    const primerPdf = modalExamen.archivos?.find(a => a.url && a.tipo==="pdf");
                    if (primerPdf) window.open(primerPdf.url,"_blank","noopener");
                  }}
                >
                  ⬇️ Descargar examen{modalExamen.archivos?.length > 1 ? ` (${modalExamen.archivos.length} archivos)` : ""}
                </button>
              )}
            </div>
          )}
        </Modal>
      </div>
    </>
  );
}