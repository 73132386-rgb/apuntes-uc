import { useState, useMemo, useEffect, useCallback } from "react";
import {
  apuntes, cursos, docentes, facultades, carreras,
  ARCHIVO_TIPOS, handleArchivoClick,
} from "../data/mockData";

import { Modal } from "../components/ui/Modal";
import { useAuth } from "../context/AuthContext";
import SubirApunteModal from "../components/modals/SubirApunteModal";

// ─── Constantes ──────────────────────────────────────────────────
const TIPOS = ["Todos", "Resumen", "Guía", "Apunte", "Mapa", "Esquema", "Código"];

const TIPO_ICON = {
  Resumen: "📄",
  Mapa: "🗺️",
  Guía: "📘",
  Apunte: "📝",
  Esquema: "📊",
  Código: "💻",
};

const SORT_OPTIONS = [
  { value: "fecha", label: "Más recientes" },
  { value: "descargas", label: "Más descargados" },
  { value: "likes", label: "Más valorados" },
  { value: "vistas", label: "Más vistos" },
];

// ─── Toast demo ──────────────────────────────────────────────────
function DemoToast({ msg, onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 3000);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <div
      style={{
        position: "fixed",
        bottom: 24,
        left: "50%",
        transform: "translateX(-50%)",
        background: "var(--bg-elevated)",
        border: "1px solid var(--border)",
        borderRadius: 12,
        padding: "11px 20px",
        zIndex: 10000,
        fontSize: "0.82rem",
        color: "var(--text-secondary)",
        fontWeight: 600,
        boxShadow: "0 8px 28px rgba(0,0,0,0.35)",
        display: "flex",
        alignItems: "center",
        gap: 8,
      }}
    >
      <span>🔒</span>
      {msg}
    </div>
  );
}

// ─── Archivo Row ─────────────────────────────────────────────────
function ArchivoRow({ archivo }) {
  const info = ARCHIVO_TIPOS[archivo.tipo] || ARCHIVO_TIPOS.pdf;

  const detalle = archivo.paginas
    ? `${archivo.paginas} págs.`
    : archivo.diapositivas
    ? `${archivo.diapositivas} slides`
    : archivo.hojas
    ? `${archivo.hojas} hojas`
    : archivo.archivos
    ? `${archivo.archivos} archivos`
    : archivo.dimensiones ?? "";

  const tieneUrl = !!archivo.url;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        background: "var(--bg-elevated)",
        border: "1px solid var(--border)",
        borderRadius: 11,
        padding: "9px 13px",
      }}
    >
      <span
        style={{
          width: 34,
          height: 34,
          borderRadius: 8,
          flexShrink: 0,
          background: info.bg,
          border: `1px solid ${info.border}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1rem",
        }}
      >
        {info.icon}
      </span>

      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            fontSize: "0.8rem",
            fontWeight: 600,
            color: "var(--text-primary)",
          }}
        >
          {archivo.nombre}
        </div>

        <div
          style={{
            fontSize: "0.7rem",
            color: "var(--text-muted)",
            marginTop: 1,
          }}
        >
          {info.label} · {archivo.tamaño}
          {detalle ? ` · ${detalle}` : ""}
        </div>
      </div>

      <button
        onClick={() => handleArchivoClick(archivo)}
        style={{
          flexShrink: 0,
          background: tieneUrl ? "var(--indigo-dim)" : "var(--bg-card)",
          border: `1px solid ${
            tieneUrl
              ? "rgba(99,102,241,0.35)"
              : "var(--border)"
          }`,
          borderRadius: 7,
          padding: "4px 10px",
          color: tieneUrl
            ? "var(--indigo-light)"
            : "var(--text-muted)",
          fontSize: "0.7rem",
          fontWeight: 700,
          cursor: tieneUrl ? "pointer" : "not-allowed",
        }}
      >
        {tieneUrl ? "📄 Abrir" : "🔒 Demo"}
      </button>
    </div>
  );
}

// ─── Card de apunte ──────────────────────────────────────────────
function ApunteCard({ ap, curso, docente, onOpen, delay }) {
  const facultad = curso ? facultades.find(f => f.id === carreras.find(c => c.id === curso.carreraId)?.facultadId) : null;

  return (
    <div
      className="ap-card"
      style={{ animationDelay:`${delay}s` }}
      onClick={onOpen}
    >
      {ap.previewImg && (
        <div className="ap-card-img-wrap">
          <img src={ap.previewImg} alt={ap.titulo} className="ap-card-img" loading="lazy" />
          <div className="ap-card-img-overlay" />
          {/* Ciclo badge sobre imagen */}
          {curso && (
            <span className="ap-card-ciclo-badge">Ciclo {curso.ciclo}</span>
          )}
          {ap.premium && (
            <span className="ap-card-premium-img-badge">⭐ PRO</span>
          )}
        </div>
      )}

      <div className="ap-card-body">
        <div className="ap-card-top">
          <div style={{ display:"flex", alignItems:"center", gap:5 }}>
            <span style={{ fontSize:"0.88rem" }}>{TIPO_ICON[ap.tipo] || "📄"}</span>
            <span className="ap-tipo-lbl">{ap.tipo}</span>
          </div>
          {facultad && (
            <span className="ap-fac-chip" style={{ background:`${facultad.color}18`, color:facultad.color, borderColor:`${facultad.color}35` }}>
              {facultad.icono}
            </span>
          )}
        </div>

        <h3 className="ap-titulo">{ap.titulo}</h3>

        {curso && (
          <div className="ap-curso-row">
            <span className="ap-curso-dot" style={{ background:curso.color }} />
            <span className="ap-curso-name">{curso.nombre}</span>
          </div>
        )}

        {docente && (
          <div className="ap-docente-row">
            <span className="ap-doc-av">{docente.iniciales}</span>
            <span className="ap-doc-name">{docente.nombre.split(" ").slice(0,3).join(" ")}</span>
          </div>
        )}

        {ap.temas?.length > 0 && (
          <div className="ap-temas-preview">
            {ap.temas.slice(0,2).map(t => (
              <span key={t} className="ap-tema-mini">{t}</span>
            ))}
            {ap.temas.length > 2 && (
              <span className="ap-tema-mini ap-tema-more">+{ap.temas.length-2}</span>
            )}
          </div>
        )}

        <div className="ap-meta">
          <span>⬇️ {ap.descargas.toLocaleString()}</span>
          <span>❤️ {ap.likes}</span>
          {ap.archivos?.length > 0 && <span>📎 {ap.archivos.length}</span>}
          <span className="ap-meta-date">{ap.fecha}</span>
        </div>
      </div>

      {ap.premium && (
        <div className="ap-lock-overlay">
          <span style={{ fontSize:"1.4rem", marginBottom:4 }}>🔒</span>
          <span className="ap-lock-text">Solo Premium</span>
        </div>
      )}
    </div>
  );
}

// ─── Página principal ────────────────────────────────────────────
export default function Apuntes({ navigate }) {
  const { user } = useAuth();

  const [openModal, setOpenModal] = useState(false);
  const [search, setSearch]             = useState("");
  const [tipoFilter, setTipoFilter]     = useState("Todos");
  const [facultadFilter, setFacultad]   = useState("all");
  const [carreraFilter, setCarrera]     = useState("all");
  const [cicloFilter, setCiclo]         = useState("all");
  const [soloGratis, setSoloGratis]     = useState(false);
  const [sortBy, setSortBy]             = useState("fecha");
  const [modalApunte, setModalApunte]   = useState(null);
  const [toast, setToast]               = useState(null);
  const [viewMode, setViewMode]         = useState("grid"); // grid | list

  // Escuchar evento demo-no-url
  useEffect(() => {
    const h = e => setToast(e.detail.nombre);
    window.addEventListener("demo-no-url", h);
    return () => window.removeEventListener("demo-no-url", h);
  }, []);

  // Carreras filtradas por facultad seleccionada
  const carrerasFiltradas = useMemo(() =>
    facultadFilter === "all"
      ? carreras
      : carreras.filter(c => c.facultadId === Number(facultadFilter)),
  [facultadFilter]);

  // Ciclos disponibles en los cursos del mockData
  const ciclosDisponibles = useMemo(() => {
    const set = new Set(cursos.map(c => c.ciclo));
    return [...set].sort((a,b) => a-b);
  }, []);

  // Filtrado + ordenado
  const filtered = useMemo(() => {
    let list = apuntes.filter(a => {
      const curso = cursos.find(c => c.id === a.cursoId);
      const carrera = curso ? carreras.find(c => c.id === curso.carreraId) : null;

      const matchSearch   = a.titulo.toLowerCase().includes(search.toLowerCase())
                         || a.temas?.some(t => t.toLowerCase().includes(search.toLowerCase()))
                         || (curso?.nombre.toLowerCase().includes(search.toLowerCase()));
      const matchTipo     = tipoFilter === "Todos" || a.tipo === tipoFilter;
      const matchFacultad = facultadFilter === "all" || (carrera && carrera.facultadId === Number(facultadFilter));
      const matchCarrera  = carreraFilter === "all" || (curso && String(curso.carreraId) === carreraFilter);
      const matchCiclo    = cicloFilter === "all" || (curso && String(curso.ciclo) === cicloFilter);
      const matchGratis   = !soloGratis || !a.premium;

      return matchSearch && matchTipo && matchFacultad && matchCarrera && matchCiclo && matchGratis;
    });

    // Ordenar
    list = [...list].sort((a,b) => {
      if (sortBy === "fecha")     return b.fecha.localeCompare(a.fecha);
      if (sortBy === "descargas") return b.descargas - a.descargas;
      if (sortBy === "likes")     return b.likes - a.likes;
      if (sortBy === "vistas")    return (b.vistas||0) - (a.vistas||0);
      return 0;
    });
    return list;
  }, [search, tipoFilter, facultadFilter, carreraFilter, cicloFilter, soloGratis, sortBy]);

  const countByTipo = useMemo(() => {
    const m = {};
    TIPOS.forEach(t => { m[t] = t === "Todos" ? apuntes.length : apuntes.filter(a => a.tipo === t).length; });
    return m;
  }, []);

  const hasFilter = search || tipoFilter !== "Todos" || facultadFilter !== "all" || carreraFilter !== "all" || cicloFilter !== "all" || soloGratis;
  const reset = useCallback(() => {
    setSearch(""); setTipoFilter("Todos"); setFacultad("all");
    setCarrera("all"); setCiclo("all"); setSoloGratis(false);
  }, []);

  const modalCurso   = modalApunte ? cursos.find(c => c.id === modalApunte.cursoId) : null;
  const modalCarrera = modalCurso  ? carreras.find(c => c.id === modalCurso.carreraId) : null;
  const modalFac     = modalCarrera ? facultades.find(f => f.id === modalCarrera.facultadId) : null;
  const modalDocente = modalApunte ? docentes.find(d => d.id === modalApunte.docenteId) : null;
  const locked       = modalApunte?.premium && !user;

  return (
    <>
      <style>{`
        /* ── Animaciones ── */
        .ap-page { animation: ap-in 0.35s ease both; }
        @keyframes ap-in { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:none} }
        @keyframes ap-card-in { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:none} }

        /* ── Header ── */
        .ap-header {
          display:flex; align-items:flex-start; justify-content:space-between;
          gap:16px; margin-bottom:28px; flex-wrap:wrap;
        }
        .ap-title {
          font-family:var(--font-display); font-weight:900;
          font-size:clamp(1.6rem,4vw,2.1rem);
          color:var(--text-primary); margin-bottom:4px; letter-spacing:-0.03em;
        }
        .ap-sub { font-size:0.875rem; color:var(--text-muted); }
        .ap-header-actions { display:flex; gap:8px; flex-wrap:wrap; align-self:flex-start; }
        .ap-upload-btn {
          background:linear-gradient(135deg,#059669,#10b981);
          border:none; border-radius:11px; padding:10px 20px;
          color:#fff; font-family:var(--font-display); font-weight:700;
          font-size:0.875rem; cursor:pointer; transition:all 0.2s;
          box-shadow:0 4px 14px rgba(5,150,105,0.3); white-space:nowrap;
        }
        .ap-upload-btn:hover { transform:translateY(-2px); box-shadow:0 6px 20px rgba(5,150,105,0.4); }

        /* ── Stats bar ── */
        .ap-stats-bar {
          display:flex; gap:10px; flex-wrap:wrap; margin-bottom:24px;
        }
        .ap-stat-chip {
          display:flex; align-items:center; gap:6px;
          background:var(--bg-card); border:1px solid var(--border);
          border-radius:100px; padding:6px 14px;
          font-size:0.76rem; font-weight:600; color:var(--text-secondary);
        }
        .ap-stat-chip span { font-weight:800; color:var(--text-primary); }

        /* ── Filtros ── */
        .ap-filters-wrap {
          background:var(--bg-card); border:1px solid var(--border);
          border-radius:16px; padding:16px 18px; margin-bottom:20px;
          display:flex; flex-direction:column; gap:12px;
        }
        .ap-filters-row { display:flex; gap:10px; flex-wrap:wrap; align-items:center; }
        .ap-search-wrap { position:relative; flex:2; min-width:200px; }
        .ap-search-icon { position:absolute; left:12px; top:50%; transform:translateY(-50%); pointer-events:none; font-size:0.9rem; }
        .ap-search {
          width:100%; background:var(--bg-elevated); border:1px solid var(--border);
          border-radius:10px; padding:9px 14px 9px 36px;
          color:var(--text-primary); font-size:0.875rem; font-family:var(--font-body);
          outline:none; transition:border-color 0.18s;
        }
        .ap-search:focus { border-color:rgba(99,102,241,0.5); }
        .ap-search::placeholder { color:var(--text-muted); }
        .ap-select {
          background:var(--bg-elevated); border:1px solid var(--border);
          border-radius:10px; padding:9px 14px; flex:1; min-width:130px;
          color:var(--text-secondary); font-size:0.84rem; font-family:var(--font-body);
          outline:none; cursor:pointer; transition:border-color 0.18s;
        }
        .ap-select.active { border-color:rgba(99,102,241,0.5); color:var(--indigo-light); background:var(--indigo-dim); }
        .ap-toggle {
          display:flex; align-items:center; gap:7px;
          background:var(--bg-elevated); border:1px solid var(--border);
          border-radius:10px; padding:9px 14px;
          font-size:0.8rem; font-weight:600; color:var(--text-secondary);
          cursor:pointer; font-family:var(--font-body); white-space:nowrap;
          transition:all 0.15s; user-select:none;
        }
        .ap-toggle.on { background:rgba(16,185,129,0.1); border-color:rgba(16,185,129,0.35); color:var(--emerald); }
        .ap-reset {
          background:rgba(239,68,68,0.08); border:1px solid rgba(239,68,68,0.25);
          border-radius:10px; padding:9px 14px;
          color:#ef4444; font-size:0.8rem; font-weight:600;
          font-family:var(--font-body); cursor:pointer; white-space:nowrap; transition:all 0.15s;
        }
        .ap-reset:hover { background:rgba(239,68,68,0.14); }

        /* ── Facultad chips ── */
        .ap-fac-row { display:flex; gap:7px; flex-wrap:wrap; }
        .ap-fac-btn {
          display:flex; align-items:center; gap:5px;
          background:var(--bg-elevated); border:1px solid var(--border);
          border-radius:9px; padding:5px 12px;
          font-size:0.76rem; font-weight:600; color:var(--text-muted);
          cursor:pointer; font-family:var(--font-body); transition:all 0.15s; white-space:nowrap;
        }
        .ap-fac-btn.active { color:#fff; border-color:transparent; }
        .ap-fac-btn:hover:not(.active) { background:var(--bg-card); color:var(--text-secondary); }

        /* ── Tipo pills ── */
        .ap-pills { display:flex; gap:7px; flex-wrap:wrap; margin-bottom:20px; }
        .ap-pill {
          background:var(--bg-card); border:1px solid var(--border);
          border-radius:100px; padding:5px 14px;
          font-size:0.78rem; font-weight:500; color:var(--text-muted);
          cursor:pointer; font-family:var(--font-body); transition:all 0.15s;
          display:flex; align-items:center; gap:5px;
        }
        .ap-pill:hover { background:var(--bg-elevated); color:var(--text-secondary); }
        .ap-pill.active { background:var(--indigo-dim); border-color:rgba(99,102,241,0.4); color:var(--indigo-light); }
        .ap-pill-count {
          background:rgba(99,102,241,0.15); color:var(--indigo-light);
          border-radius:100px; padding:1px 6px; font-size:0.68rem; font-weight:700;
        }
        .ap-pill:not(.active) .ap-pill-count { background:var(--bg-elevated); color:var(--text-muted); }

        /* ── Result / toolbar ── */
        .ap-toolbar {
          display:flex; align-items:center; gap:10px; margin-bottom:20px; flex-wrap:wrap;
        }
        .ap-result-count { font-size:0.82rem; color:var(--text-muted); flex:1; }
        .ap-result-count strong { color:var(--text-secondary); }
        .ap-sort-select {
          background:var(--bg-card); border:1px solid var(--border);
          border-radius:9px; padding:6px 12px;
          color:var(--text-secondary); font-size:0.8rem; font-family:var(--font-body);
          outline:none; cursor:pointer;
        }
        .ap-view-btns { display:flex; gap:4px; }
        .ap-view-btn {
          background:var(--bg-card); border:1px solid var(--border);
          border-radius:8px; padding:6px 10px; cursor:pointer;
          font-size:0.85rem; transition:all 0.15s; color:var(--text-muted);
        }
        .ap-view-btn.active { background:var(--indigo-dim); border-color:rgba(99,102,241,0.35); color:var(--indigo-light); }

        /* ── Grid ── */
        .ap-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(268px,1fr)); gap:18px; }

        /* ── List ── */
        .ap-list { display:flex; flex-direction:column; gap:10px; }
        .ap-list-row {
          display:flex; gap:14px; align-items:center;
          background:var(--bg-card); border:1px solid var(--border);
          border-radius:14px; padding:14px 18px; cursor:pointer;
          transition:all 0.18s; animation:ap-card-in 0.25s ease both;
        }
        .ap-list-row:hover { border-color:rgba(99,102,241,0.35); transform:translateX(3px); }
        .ap-list-thumb { width:48px; height:48px; border-radius:10px; object-fit:cover; flex-shrink:0; }
        .ap-list-thumb-placeholder { width:48px; height:48px; border-radius:10px; flex-shrink:0; background:var(--bg-elevated); border:1px solid var(--border); display:flex; align-items:center; justify-content:center; font-size:1.4rem; }
        .ap-list-main { flex:1; min-width:0; }
        .ap-list-title { font-family:var(--font-display); font-weight:700; font-size:0.9rem; color:var(--text-primary); margin-bottom:4px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
        .ap-list-sub { font-size:0.75rem; color:var(--text-muted); display:flex; align-items:center; gap:6px; }
        .ap-list-dot { width:6px; height:6px; border-radius:50%; flex-shrink:0; }
        .ap-list-stats { display:flex; gap:12px; font-size:0.78rem; color:var(--text-muted); flex-shrink:0; }
        .ap-list-badge { display:flex; gap:6px; flex-shrink:0; }

        /* ── Card ── */
        .ap-card {
          background:var(--bg-card); border:1px solid var(--border);
          border-radius:16px; cursor:pointer;
          transition:all 0.22s; position:relative; overflow:hidden;
          display:flex; flex-direction:column;
          animation:ap-card-in 0.3s ease both;
        }
        .ap-card:hover { border-color:rgba(99,102,241,0.35); transform:translateY(-3px); box-shadow:0 10px 28px rgba(0,0,0,0.2); }
        .ap-card-img-wrap { overflow:hidden; border-radius:14px 14px 0 0; flex-shrink:0; position:relative; }
        .ap-card-img { width:100%; height:118px; object-fit:cover; border-radius:14px 14px 0 0; display:block; transition:transform 0.3s ease; }
        .ap-card:hover .ap-card-img { transform:scale(1.05); }
        .ap-card-img-overlay { position:absolute; inset:0; background:linear-gradient(to bottom,transparent 40%,rgba(10,10,15,0.65) 100%); pointer-events:none; }
        .ap-card-ciclo-badge {
          position:absolute; bottom:8px; left:10px;
          background:rgba(0,0,0,0.55); backdrop-filter:blur(6px);
          border:1px solid rgba(255,255,255,0.12);
          border-radius:100px; padding:2px 9px;
          font-size:0.68rem; font-weight:700; color:rgba(255,255,255,0.85);
        }
        .ap-card-premium-img-badge {
          position:absolute; top:8px; right:8px;
          background:rgba(245,158,11,0.85); backdrop-filter:blur(6px);
          border-radius:100px; padding:2px 9px;
          font-size:0.68rem; font-weight:800; color:#fff;
        }
        .ap-card-body { padding:14px 16px 16px; display:flex; flex-direction:column; flex:1; }
        .ap-card-top { display:flex; align-items:center; justify-content:space-between; margin-bottom:9px; }
        .ap-tipo-lbl { font-size:0.68rem; font-weight:800; color:var(--text-muted); text-transform:uppercase; letter-spacing:0.07em; }
        .ap-fac-chip {
          font-size:0.72rem; font-weight:700; border-radius:7px; padding:2px 8px;
          border:1px solid; white-space:nowrap;
        }
        .ap-titulo { font-family:var(--font-display); font-weight:700; font-size:0.9rem; line-height:1.4; margin-bottom:9px; color:var(--text-primary); }
        .ap-curso-row { display:flex; align-items:center; gap:7px; margin-bottom:7px; }
        .ap-curso-dot { width:7px; height:7px; border-radius:50%; flex-shrink:0; }
        .ap-curso-name { font-size:0.76rem; color:var(--text-secondary); font-weight:500; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
        .ap-docente-row { display:flex; align-items:center; gap:6px; margin-bottom:9px; }
        .ap-doc-av {
          width:20px; height:20px; border-radius:50%;
          background:linear-gradient(135deg,#4f46e5,#7c3aed);
          display:inline-flex; align-items:center; justify-content:center;
          font-size:0.56rem; font-weight:800; color:#fff; flex-shrink:0;
        }
        .ap-doc-name { font-size:0.74rem; color:var(--text-muted); white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
        .ap-temas-preview { display:flex; gap:5px; flex-wrap:wrap; margin-bottom:10px; }
        .ap-tema-mini {
          background:var(--bg-elevated); border:1px solid var(--border);
          border-radius:100px; padding:2px 8px;
          font-size:0.66rem; color:var(--text-muted); font-weight:500;
        }
        .ap-tema-more { background:var(--indigo-dim); color:var(--indigo-light); border-color:rgba(99,102,241,0.3); }
        .ap-meta {
          display:flex; gap:10px; font-size:0.76rem;
          color:var(--text-muted); margin-top:auto; align-items:center;
        }
        .ap-meta-date { margin-left:auto; font-size:0.68rem; }
        .ap-lock-overlay {
          position:absolute; inset:0;
          background:linear-gradient(to top,rgba(10,10,15,0.92) 0%,rgba(10,10,15,0.5) 55%,transparent 100%);
          display:flex; flex-direction:column; align-items:center; justify-content:flex-end;
          padding:16px; opacity:0; transition:opacity 0.2s; pointer-events:none;
        }
        .ap-card:hover .ap-lock-overlay { opacity:1; }
        .ap-lock-text { font-size:0.8rem; font-weight:700; color:#fff; text-align:center; }

        /* ── Empty ── */
        .ap-empty { text-align:center; padding:80px 24px; color:var(--text-muted); display:flex; flex-direction:column; gap:12px; align-items:center; }

        /* ── Modal ── */
        .ap-modal-preview { width:100%; height:155px; object-fit:cover; border-radius:12px; margin-bottom:4px; display:block; }
        .ap-modal-chips { display:flex; gap:7px; flex-wrap:wrap; }
        .ap-modal-chip { padding:4px 12px; border-radius:100px; font-size:0.78rem; font-weight:600; }
        .ap-modal-desc { font-size:0.875rem; color:var(--text-secondary); line-height:1.65; background:var(--bg-elevated); border-radius:12px; padding:12px 14px; border:1px solid var(--border); }
        .ap-modal-section { margin-bottom:16px; }
        .ap-modal-section-label { font-size:0.65rem; font-weight:800; letter-spacing:0.1em; text-transform:uppercase; color:var(--text-muted); margin-bottom:8px; }
        .ap-modal-meta-grid { display:grid; grid-template-columns:1fr 1fr; gap:8px; }
        .ap-modal-meta-item { background:var(--bg-elevated); border:1px solid var(--border); border-radius:11px; padding:10px 12px; }
        .ap-modal-meta-label { font-size:0.66rem; color:var(--text-muted); font-weight:700; text-transform:uppercase; letter-spacing:0.06em; margin-bottom:3px; }
        .ap-modal-meta-value { font-size:0.84rem; font-weight:600; color:var(--text-primary); }
        .ap-temas-list { display:flex; gap:6px; flex-wrap:wrap; }
        .ap-tema-chip { background:var(--bg-elevated); border:1px solid var(--border); border-radius:100px; padding:3px 10px; font-size:0.74rem; color:var(--text-secondary); font-weight:500; }
        .ap-archivos-list { display:flex; flex-direction:column; gap:8px; }
        .ap-stats-row { display:flex; gap:14px; padding:12px 0; border-top:1px solid var(--border); border-bottom:1px solid var(--border); font-size:0.84rem; color:var(--text-muted); flex-wrap:wrap; }
        .ap-dl-btn {
          width:100%; background:linear-gradient(135deg,var(--indigo),#7c3aed);
          border:none; border-radius:12px; padding:13px;
          color:#fff; font-family:var(--font-display); font-weight:700;
          font-size:0.95rem; cursor:pointer; transition:all 0.2s;
          box-shadow:0 4px 16px rgba(99,102,241,0.3);
        }
        .ap-dl-btn:hover { transform:translateY(-1px); box-shadow:0 6px 22px rgba(99,102,241,0.4); }
        .ap-premium-wall {
          background:var(--amber-dim); border:1px solid rgba(245,158,11,0.25);
          border-radius:14px; padding:22px; text-align:center;
          display:flex; flex-direction:column; gap:10px; align-items:center;
          font-size:0.875rem; color:var(--amber);
        }
        .ap-premium-cta {
          background:linear-gradient(135deg,var(--amber),#ef4444);
          border:none; border-radius:9px; padding:9px 22px;
          color:#fff; font-weight:700; font-size:0.875rem;
          cursor:pointer; font-family:var(--font-body);
        }

        /* ── Responsive ── */
        @media(max-width:700px){
          .ap-grid { grid-template-columns:1fr 1fr; }
          .ap-filters-row { gap:7px; }
          .ap-modal-meta-grid { grid-template-columns:1fr; }
        }
        @media(max-width:480px){
          .ap-grid { grid-template-columns:1fr; }
          .ap-stats-bar { display:none; }
          .ap-list-stats { display:none; }
        }
      `}</style>

      {toast && <DemoToast msg={toast} onDone={() => setToast(null)} />}

      <div className="ap-page page-container">

        {/* Header */}
        <div className="ap-header">
          <div>
            <h1 className="ap-title">Apuntes</h1>
            <p className="ap-sub">Material compartido por estudiantes y docentes de la UC</p>
          </div>
          <div className="ap-header-actions">
            <button className="ap-upload-btn" onClick={() => navigate("planes")}>
              ⬆️ Subir apunte
            </button>
          </div>
        </div>

        {/* Stats bar */}
        <div className="ap-stats-bar">
          <div className="ap-stat-chip">📚 <span>{apuntes.length}</span> apuntes</div>
          <div className="ap-stat-chip">🏫 <span>{facultades.length}</span> facultades</div>
          <div className="ap-stat-chip">🎓 <span>{carreras.length}</span> carreras</div>
          <div className="ap-stat-chip" style={{ color:"var(--emerald)" }}>
            ✓ <span style={{ color:"var(--emerald)" }}>{apuntes.filter(a=>!a.premium).length}</span> gratis
          </div>
          <div className="ap-stat-chip" style={{ color:"var(--amber)" }}>
            ⭐ <span style={{ color:"var(--amber)" }}>{apuntes.filter(a=>a.premium).length}</span> premium
          </div>
        </div>

        {/* Filtros */}
        <div className="ap-filters-wrap">
          {/* Fila 1: búsqueda + selects */}
          <div className="ap-filters-row">
            <div className="ap-search-wrap">
              <span className="ap-search-icon">🔍</span>
              <input
                className="ap-search"
                placeholder="Buscar por título, tema, curso..."
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
            <select
              className={`ap-select${carreraFilter !== "all" ? " active" : ""}`}
              value={carreraFilter}
              onChange={e => setCarrera(e.target.value)}
            >
              <option value="all">Todas las carreras</option>
              {carrerasFiltradas.map(c => (
                <option key={c.id} value={String(c.id)}>{c.nombre}</option>
              ))}
            </select>
            <select
              className={`ap-select${cicloFilter !== "all" ? " active" : ""}`}
              value={cicloFilter}
              onChange={e => setCiclo(e.target.value)}
            >
              <option value="all">Todos los ciclos</option>
              {ciclosDisponibles.map(c => (
                <option key={c} value={String(c)}>Ciclo {c}</option>
              ))}
            </select>
            <button className={`ap-toggle${soloGratis ? " on" : ""}`} onClick={() => setSoloGratis(v=>!v)}>
              {soloGratis ? "✓" : "○"} Solo gratis
            </button>
            {hasFilter && <button className="ap-reset" onClick={reset}>✕ Limpiar</button>}
          </div>

          {/* Fila 2: Facultades */}
          <div className="ap-fac-row">
            <button
              className={`ap-fac-btn${facultadFilter === "all" ? " active" : ""}`}
              style={facultadFilter === "all" ? { background:"var(--indigo-dim)", color:"var(--indigo-light)", borderColor:"rgba(99,102,241,0.4)" } : {}}
              onClick={() => { setFacultad("all"); setCarrera("all"); }}
            >
              Todas
            </button>
            {facultades.map(f => (
              <button
                key={f.id}
                className={`ap-fac-btn${facultadFilter === String(f.id) ? " active" : ""}`}
                style={facultadFilter === String(f.id) ? { background:f.color } : {}}
                onClick={() => { setFacultad(String(f.id)); setCarrera("all"); }}
              >
                {f.icono} {f.nombre.replace("Facultad de ", "").replace("Facultad ", "")}
              </button>
            ))}
          </div>
        </div>

        {/* Tipo pills */}
        <div className="ap-pills">
          {TIPOS.map(t => (
            <button
              key={t}
              className={`ap-pill${tipoFilter === t ? " active" : ""}`}
              onClick={() => setTipoFilter(t)}
            >
              {t !== "Todos" && TIPO_ICON[t]} {t}
              <span className="ap-pill-count">{countByTipo[t]}</span>
            </button>
          ))}
        </div>

        {/* Toolbar */}
        <div className="ap-toolbar">
          <span className="ap-result-count">
            <strong>{filtered.length}</strong> apunte{filtered.length !== 1 ? "s" : ""} encontrado{filtered.length !== 1 ? "s" : ""}
          </span>
          <select className="ap-sort-select" value={sortBy} onChange={e => setSortBy(e.target.value)}>
            {SORT_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
          <div className="ap-view-btns">
            <button className={`ap-view-btn${viewMode==="grid"?" active":""}`} onClick={() => setViewMode("grid")}>⊞</button>
            <button className={`ap-view-btn${viewMode==="list"?" active":""}`} onClick={() => setViewMode("list")}>☰</button>
          </div>
        </div>

        {/* Contenido */}
        {filtered.length === 0 ? (
          <div className="ap-empty">
            <span style={{ fontSize:"2.5rem" }}>📭</span>
            <p style={{ fontWeight:700, color:"var(--text-secondary)" }}>Sin resultados</p>
            <p>Prueba con otros filtros o términos de búsqueda</p>
            {hasFilter && <button className="ap-reset" onClick={reset}>✕ Limpiar filtros</button>}
          </div>
        ) : viewMode === "grid" ? (
          <div className="ap-grid">
            {filtered.map((ap, i) => {
              const curso   = cursos.find(c => c.id === ap.cursoId);
              const docente = docentes.find(d => d.id === ap.docenteId);
              return (
                <ApunteCard
                  key={ap.id}
                  ap={ap}
                  curso={curso}
                  docente={docente}
                  onOpen={() => setModalApunte(ap)}
                  delay={Math.min(i * 0.03, 0.3)}
                />
              );
            })}
          </div>
        ) : (
          /* Vista lista */
          <div className="ap-list">
            {filtered.map((ap, i) => {
              const curso   = cursos.find(c => c.id === ap.cursoId);
              const docente = docentes.find(d => d.id === ap.docenteId);
              return (
                <div
                  key={ap.id}
                  className="ap-list-row"
                  style={{ animationDelay:`${Math.min(i*0.03,0.3)}s` }}
                  onClick={() => setModalApunte(ap)}
                >
                  {ap.previewImg
                    ? <img src={ap.previewImg} alt={ap.titulo} className="ap-list-thumb" loading="lazy" />
                    : <div className="ap-list-thumb-placeholder">{TIPO_ICON[ap.tipo]||"📄"}</div>
                  }
                  <div className="ap-list-main">
                    <div className="ap-list-title">{ap.titulo}</div>
                    <div className="ap-list-sub">
                      {curso && <>
                        <span className="ap-list-dot" style={{ background:curso.color }} />
                        {curso.nombre}
                        {docente && ` · ${docente.nombre.split(" ").slice(0,3).join(" ")}`}
                      </>}
                    </div>
                  </div>
                  <div className="ap-list-badge">
                    <span style={{
                      fontSize:"0.68rem", fontWeight:700, borderRadius:100, padding:"3px 9px",
                      background:"var(--indigo-dim)", color:"var(--indigo-light)", border:"1px solid rgba(99,102,241,0.3)",
                    }}>{TIPO_ICON[ap.tipo]} {ap.tipo}</span>
                    {ap.premium && <span style={{
                      fontSize:"0.68rem", fontWeight:700, borderRadius:100, padding:"3px 9px",
                      background:"var(--amber-dim)", color:"var(--amber)", border:"1px solid rgba(245,158,11,0.3)",
                    }}>⭐ PRO</span>}
                  </div>
                  <div className="ap-list-stats">
                    <span>⬇️ {ap.descargas.toLocaleString()}</span>
                    <span>❤️ {ap.likes}</span>
                    <span>📎 {ap.archivos?.length || 0}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Modal */}
        <Modal open={!!modalApunte} onClose={() => setModalApunte(null)} title={modalApunte?.titulo}>
          {modalApunte && (
            <div style={{ display:"flex", flexDirection:"column", gap:16 }}>

              {modalApunte.previewImg && (
                <img src={modalApunte.previewImg} alt={modalApunte.titulo} className="ap-modal-preview" loading="lazy" />
              )}

              {/* Badges */}
              <div className="ap-modal-chips">
                <span className="ap-modal-chip" style={{ background:"var(--indigo-dim)", color:"var(--indigo-light)", border:"1px solid rgba(99,102,241,0.3)" }}>
                  {TIPO_ICON[modalApunte.tipo]} {modalApunte.tipo}
                </span>
                {modalApunte.premium && (
                  <span className="ap-modal-chip" style={{ background:"var(--amber-dim)", color:"var(--amber)", border:"1px solid rgba(245,158,11,0.3)" }}>⭐ Premium</span>
                )}
                {modalFac && (
                  <span className="ap-modal-chip" style={{ background:`${modalFac.color}18`, color:modalFac.color, border:`1px solid ${modalFac.color}35` }}>
                    {modalFac.icono} {modalFac.nombre.replace("Facultad de ","").replace("Facultad ","")}
                  </span>
                )}
                {modalCurso && (
                  <span className="ap-modal-chip" style={{ background:`${modalCurso.color}18`, color:modalCurso.color, border:`1px solid ${modalCurso.color}40` }}>
                    {modalCurso.codigo}
                  </span>
                )}
              </div>

              {/* Stats */}
              <div className="ap-stats-row">
                <span>⬇️ <strong style={{color:"var(--text-secondary)"}}>{modalApunte.descargas.toLocaleString()}</strong></span>
                <span>❤️ <strong style={{color:"var(--text-secondary)"}}>{modalApunte.likes}</strong></span>
                <span>👁️ <strong style={{color:"var(--text-secondary)"}}>{(modalApunte.vistas||0).toLocaleString()}</strong></span>
                <span style={{ marginLeft:"auto", fontSize:"0.76rem", color:"var(--text-muted)" }}>Semana {modalApunte.semana} · {modalApunte.fecha}</span>
              </div>

              {/* Descripción */}
              {modalApunte.descripcion && (
                <div className="ap-modal-section">
                  <div className="ap-modal-section-label">Descripción</div>
                  <div className="ap-modal-desc">{modalApunte.descripcion}</div>
                </div>
              )}

              {/* Info */}
              <div className="ap-modal-section">
                <div className="ap-modal-section-label">Información</div>
                <div className="ap-modal-meta-grid">
                  {modalCurso && (
                    <div className="ap-modal-meta-item">
                      <div className="ap-modal-meta-label">Curso</div>
                      <div className="ap-modal-meta-value" style={{fontSize:"0.78rem"}}>{modalCurso.nombre}</div>
                    </div>
                  )}
                  {modalCarrera && (
                    <div className="ap-modal-meta-item">
                      <div className="ap-modal-meta-label">Carrera</div>
                      <div className="ap-modal-meta-value" style={{fontSize:"0.78rem"}}>{modalCarrera.nombre}</div>
                    </div>
                  )}
                  {modalDocente && (
                    <div className="ap-modal-meta-item">
                      <div className="ap-modal-meta-label">Docente</div>
                      <div className="ap-modal-meta-value" style={{fontSize:"0.78rem"}}>{modalDocente.nombre.split(" ").slice(0,3).join(" ")}</div>
                    </div>
                  )}
                  {modalCurso && (
                    <div className="ap-modal-meta-item">
                      <div className="ap-modal-meta-label">Ciclo / Créditos</div>
                      <div className="ap-modal-meta-value">Ciclo {modalCurso.ciclo} · {modalCurso.creditos} cr.</div>
                    </div>
                  )}
                </div>
              </div>

              {/* Temas */}
              {modalApunte.temas?.length > 0 && (
                <div className="ap-modal-section">
                  <div className="ap-modal-section-label">Temas cubiertos</div>
                  <div className="ap-temas-list">
                    {modalApunte.temas.map(t => <span key={t} className="ap-tema-chip">{t}</span>)}
                  </div>
                </div>
              )}

              {/* Archivos */}
              {modalApunte.archivos?.length > 0 && (
                <div className="ap-modal-section">
                  <div className="ap-modal-section-label">
                    Archivos adjuntos · {modalApunte.archivos.length} {modalApunte.archivos.length===1?"archivo":"archivos"}
                  </div>
                  <div className="ap-archivos-list">
                    {modalApunte.archivos.map((a,i) => <ArchivoRow key={i} archivo={a} />)}
                  </div>
                </div>
              )}

              {/* CTA */}
              {locked ? (
                <div className="ap-premium-wall">
                  <span style={{fontSize:"1.6rem"}}>🔒</span>
                  <p style={{fontWeight:700}}>Contenido exclusivo para Premium</p>
                  <p style={{fontSize:"0.82rem",color:"var(--text-muted)"}}>Accede a este y todos los apuntes premium por S/. 5/mes</p>
                  <button className="ap-premium-cta" onClick={() => { setModalApunte(null); navigate("planes"); }}>
                    Ver planes →
                  </button>
                </div>
              ) : (
                <button
                  className="ap-dl-btn"
                  onClick={() => {
                    const primerPdf = modalApunte.archivos?.find(a => a.url && a.tipo==="pdf");
                    if (primerPdf) window.open(primerPdf.url,"_blank","noopener");
                    else setToast(modalApunte.titulo);
                  }}
                >
                  ⬇️ Descargar {modalApunte.archivos?.length > 1 ? `(${modalApunte.archivos.length} archivos)` : "apunte"}
                </button>
              )}
            </div>
          )}
        </Modal>
      </div>
    </>
  );
}