import { useEffect } from "react";
import { estadisticas } from "../../data/mockData";
import { useAuth } from "../../context/AuthContext";

const NAV_ITEMS = [
  { key: "home",     icon: "🏠", label: "Inicio" },
  { key: "cursos",   icon: "📖", label: "Todos los cursos" },
  { key: "apuntes",  icon: "📝", label: "Apuntes" },
  { key: "examenes", icon: "📋", label: "Exámenes" },
  { key: "docentes", icon: "👨‍🏫", label: "Docentes" },
];

const FEATURED_CARRERAS = [
  { id: 1,  nombre: "Ing. Sistemas",      color: "#0891b2", emoji: "💻" },
  { id: 11, nombre: "Adm. Negocios Dig.", color: "#4f46e5", emoji: "💼" },
  { id: 19, nombre: "Medicina Humana",    color: "#16a34a", emoji: "🩺" },
  { id: 18, nombre: "Derecho",            color: "#d97706", emoji: "⚖️" },
  { id: 2,  nombre: "Ing. Industrial",    color: "#0e7490", emoji: "⚙️" },
  { id: 16, nombre: "Contabilidad",       color: "#dc2626", emoji: "📊" },
  { id: 22, nombre: "Psicología",         color: "#0f766e", emoji: "🧠" },
  { id: 3,  nombre: "Ing. Civil",         color: "#155e75", emoji: "🏗️" },
];

// ✅ Nuevo prop `show`: cuando es false el sidebar-wrap colapsa a width:0
// sin desmontarse, preservando el estado y la transición CSS.
export default function Sidebar({ page, navigate, open, onClose, show }) {
  const { user } = useAuth();

  // Bloquear scroll del body solo en mobile/tablet cuando el drawer está abierto
  useEffect(() => {
    const isMobile = window.innerWidth <= 900;
    document.body.style.overflow = (isMobile && show && open) ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open, show]);

  const handleNav = (key) => {
    navigate(key);
    onClose();
  };

  // El sidebar está "activo" (visible y expandido) solo cuando show && open
  const active = show && open;

  return (
    <>
      <style>{`
        /* ════════════════════════════════════════════════
           SIDEBAR WRAPPER
           En desktop: ocupa espacio real en el layout flex.
           Anima su width para empujar/jalar el contenido.
           En mobile/tablet: width siempre 0, el aside
           flota como drawer encima del contenido.

           Cuando show=false (página sin sidebar), el wrapper
           colapsa a width:0 igual que cuando está cerrado.
        ════════════════════════════════════════════════ */
        .sidebar-wrap {
          width: 256px;
          flex-shrink: 0;
          position: relative;
          transition: width 0.28s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .sidebar-wrap.sb-closed {
          width: 0;
        }

        /* ════════════════════════════════════════════════
           OVERLAY — visible en mobile/tablet cuando abierto
        ════════════════════════════════════════════════ */
        .sidebar-overlay {
          display: none; /* se activa por media query */
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.65);
          z-index: 149;
          backdrop-filter: blur(2px);
          animation: overlay-in 0.2s ease;
        }
        @keyframes overlay-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        /* ════════════════════════════════════════════════
           ASIDE — siempre fixed, siempre 256px de ancho.
           En desktop se muestra/oculta con opacity+visibility.
           En mobile/tablet se desliza con translateX.
        ════════════════════════════════════════════════ */
        .sidebar {
          position: fixed;
          top: 64px;
          left: 0;
          bottom: 0;
          width: 256px;
          background: var(--bg-card);
          border-right: 1px solid var(--border);
          overflow-y: auto;
          overflow-x: hidden;
          padding: 16px 0 100px;
          z-index: 150;
          display: flex;
          flex-direction: column;
          scrollbar-width: thin;
          scrollbar-color: var(--border) transparent;
          /* Desktop: transición suave de visibilidad */
          transition:
            transform  0.28s cubic-bezier(0.4, 0, 0.2, 1),
            opacity    0.28s cubic-bezier(0.4, 0, 0.2, 1),
            visibility 0.28s;
        }
        .sidebar::-webkit-scrollbar { width: 4px; }
        .sidebar::-webkit-scrollbar-track { background: transparent; }
        .sidebar::-webkit-scrollbar-thumb { background: var(--border); border-radius: 4px; }

        /* Desktop abierto y visible */
        .sidebar {
          transform: translateX(0);
          opacity: 1;
          visibility: visible;
        }
        /* Desktop cerrado (wrapper width:0) — el aside se oculta visualmente */
        .sidebar-wrap.sb-closed .sidebar {
          opacity: 0;
          visibility: hidden;
        }

        /* ─── User card ─── */
        .sb-user-card {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 14px 16px;
          margin: 0 10px 8px;
          background: var(--bg-elevated);
          border: 1px solid var(--border);
          border-radius: 14px;
          cursor: pointer;
          transition: all 0.15s;
          text-align: left;
          width: calc(100% - 20px);
        }
        .sb-user-card:hover {
          border-color: rgba(99,102,241,0.35);
          background: rgba(99,102,241,0.05);
        }
        .sb-user-avatar {
          width: 36px; height: 36px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--indigo), #7c3aed);
          display: flex; align-items: center; justify-content: center;
          font-weight: 700; font-size: 0.95rem; color: #fff;
          flex-shrink: 0;
          box-shadow: 0 0 12px rgba(99,102,241,0.3);
        }
        .sb-user-info { flex: 1; min-width: 0; }
        .sb-user-name {
          font-weight: 700; font-size: 0.85rem;
          color: var(--text-primary);
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }
        .sb-user-meta {
          font-size: 0.72rem; color: var(--text-muted); margin-top: 1px;
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }
        .sb-points-badge {
          font-size: 0.7rem; font-weight: 700;
          color: var(--amber);
          background: var(--amber-dim);
          border: 1px solid rgba(245,158,11,0.2);
          border-radius: 100px;
          padding: 3px 8px;
          flex-shrink: 0;
        }

        /* ─── Downloads bar ─── */
        .sb-downloads {
          margin: 0 10px 16px;
          padding: 10px 14px;
          background: var(--bg-elevated);
          border: 1px solid var(--border);
          border-radius: 12px;
        }
        .sb-downloads-label {
          display: flex; justify-content: space-between; align-items: center;
          margin-bottom: 6px;
        }
        .sb-downloads-text { font-size: 0.72rem; color: var(--text-muted); }
        .sb-downloads-count { font-size: 0.72rem; font-weight: 700; color: var(--text-secondary); }
        .sb-progress-track {
          height: 5px; background: var(--bg-card);
          border-radius: 100px; overflow: hidden;
        }
        .sb-progress-fill {
          height: 100%; border-radius: 100px;
          background: linear-gradient(90deg, var(--indigo), #7c3aed);
          transition: width 0.4s ease;
        }

        /* ─── Section label ─── */
        .sb-section { padding: 8px 10px 4px; }
        .sb-section-label {
          font-size: 0.65rem; font-weight: 800;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: var(--text-muted); padding: 0 8px; margin-bottom: 4px;
        }

        /* ─── Nav items ─── */
        .sb-nav-item {
          display: flex; align-items: center; gap: 10px;
          width: 100%; padding: 9px 12px; border-radius: 10px;
          background: none; border: none; cursor: pointer;
          color: var(--text-secondary); font-size: 0.875rem; font-weight: 500;
          text-align: left; transition: all 0.14s; font-family: var(--font-body);
        }
        .sb-nav-item:hover { background: var(--bg-elevated); color: var(--text-primary); }
        .sb-nav-item.active {
          background: var(--indigo-dim); color: var(--indigo-light); font-weight: 600;
        }
        .sb-nav-icon { font-size: 1rem; width: 22px; text-align: center; flex-shrink: 0; }

        /* ─── Divider ─── */
        .sb-divider { height: 1px; background: var(--border); margin: 10px 16px; }

        /* ─── Stats ─── */
        .sb-stats {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 6px; padding: 0 10px; margin-bottom: 6px;
        }
        .sb-stat {
          background: var(--bg-elevated); border: 1px solid var(--border);
          border-radius: 10px; padding: 8px 10px; text-align: center;
        }
        .sb-stat-value {
          font-size: 0.95rem; font-weight: 800; color: var(--text-primary);
          font-family: var(--font-display); line-height: 1;
        }
        .sb-stat-label { font-size: 0.65rem; color: var(--text-muted); margin-top: 2px; }

        /* ─── Carreras ─── */
        .sb-carreras-grid { display: flex; flex-direction: column; gap: 2px; }
        .sb-carrera-item {
          display: flex; align-items: center; gap: 9px;
          background: none; border: none; cursor: pointer;
          color: var(--text-muted); font-size: 0.8rem; text-align: left;
          padding: 6px 12px; border-radius: 9px;
          font-family: var(--font-body); transition: all 0.14s; width: 100%;
        }
        .sb-carrera-item:hover { background: var(--bg-elevated); color: var(--text-primary); }
        .sb-carrera-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
        .sb-carrera-name {
          flex: 1; min-width: 0;
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }

        /* ─── Upgrade ─── */
        .sb-upgrade {
          margin: auto 10px 0;
          padding: 16px 14px;
          background: linear-gradient(135deg, rgba(99,102,241,0.12), rgba(124,58,237,0.12));
          border: 1px solid rgba(99,102,241,0.22);
          border-radius: 14px;
          display: flex; flex-direction: column; gap: 10px;
        }
        .sb-upgrade-title {
          font-weight: 700; font-size: 0.88rem; color: var(--text-primary);
          display: flex; align-items: center; gap: 7px;
        }
        .sb-upgrade-desc {
          font-size: 0.75rem; color: var(--text-secondary);
          line-height: 1.5; margin-top: -4px;
        }
        .sb-upgrade-btn {
          background: linear-gradient(135deg, var(--indigo), #7c3aed);
          border: none; border-radius: 9px; padding: 9px 14px;
          color: #fff; font-size: 0.82rem; font-weight: 700;
          cursor: pointer; font-family: var(--font-body); text-align: center;
          box-shadow: 0 4px 14px rgba(99,102,241,0.3); transition: all 0.15s;
        }
        .sb-upgrade-btn:hover { opacity: 0.9; transform: translateY(-1px); }

        /* ════════════════════════════════════════════════
           MOBILE / TABLET (≤900px)
           El wrapper siempre tiene width:0 — no empuja nada.
           El aside se desliza desde la izquierda como drawer.
           El overlay se muestra cuando está abierto.
        ════════════════════════════════════════════════ */
        @media (max-width: 900px) {
          /* Wrapper siempre width:0 — no ocupa espacio en el layout */
          .sidebar-wrap,
          .sidebar-wrap.sb-closed {
            width: 0 !important;
            transition: none;
          }

          /* Overlay visible */
          .sidebar-overlay { display: block; }

          /* Aside: cerrado por defecto (fuera de pantalla por la izquierda) */
          .sidebar,
          .sidebar-wrap.sb-closed .sidebar {
            transform: translateX(-256px);
            opacity: 1;           /* siempre opaco, solo se desplaza */
            visibility: visible;  /* siempre accesible para la animación */
          }

          /* Aside abierto: se desliza dentro */
          .sidebar.sb-drawer-open {
            transform: translateX(0);
            box-shadow: 8px 0 40px rgba(0,0,0,0.5);
          }
        }

        @media (max-width: 480px) {
          .sidebar { width: 280px; }
          .sidebar,
          .sidebar-wrap.sb-closed .sidebar { transform: translateX(-280px); }
        }
      `}</style>

      {/* Overlay — solo en mobile/tablet, solo cuando show && open */}
      {active && (
        <div
          className="sidebar-overlay"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/*
        ✅ sidebar-wrap colapsa a width:0 cuando !active (cerrado O página sin sidebar).
        Esto evita que ocupe espacio en el layout flex cuando no corresponde.
      */}
      <div className={`sidebar-wrap${!active ? " sb-closed" : ""}`}>
        <aside
          className={`sidebar${active ? " sb-drawer-open" : ""}`}
          aria-label="Menú lateral"
          aria-hidden={!active}
        >
          {/* User card / login prompt */}
          {user ? (
            <>
              <div className="sb-user-card" onClick={() => handleNav("planes")}>
                <div className="sb-user-avatar">{user.nombre[0]}</div>
                <div className="sb-user-info">
                  <div className="sb-user-name">{user.nombre} {user.apellido}</div>
                  <div className="sb-user-meta">
                    {user.carrera.split(" ").slice(0, 3).join(" ")} · Ciclo {user.ciclo}
                  </div>
                </div>
                <div className="sb-points-badge">⭐ {user.puntos}</div>
              </div>
              <div className="sb-downloads">
                <div className="sb-downloads-label">
                  <span className="sb-downloads-text">Descargas del mes</span>
                  <span className="sb-downloads-count">{user.descargas}/{user.descargasMax}</span>
                </div>
                <div className="sb-progress-track">
                  <div
                    className="sb-progress-fill"
                    style={{ width: `${(user.descargas / user.descargasMax) * 100}%` }}
                  />
                </div>
              </div>
            </>
          ) : (
            <div style={{ padding: "14px 10px 8px" }}>
              <button
                onClick={() => handleNav("login")}
                style={{
                  width: "100%", padding: "11px",
                  background: "var(--bg-elevated)",
                  border: "1px dashed rgba(99,102,241,0.3)",
                  borderRadius: "12px",
                  color: "var(--indigo-light)",
                  fontSize: "0.85rem", fontWeight: 600,
                  cursor: "pointer", fontFamily: "var(--font-body)",
                }}
              >
                → Inicia sesión para guardar tu progreso
              </button>
            </div>
          )}

          {/* Navegación */}
          <div className="sb-section">
            <div className="sb-section-label">Navegación</div>
            {NAV_ITEMS.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNav(item.key)}
                className={`sb-nav-item${page === item.key ? " active" : ""}`}
              >
                <span className="sb-nav-icon">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          <div className="sb-divider" />

          {/* Estadísticas */}
          <div className="sb-section">
            <div className="sb-section-label">Comunidad UC</div>
          </div>
          <div className="sb-stats">
            <div className="sb-stat">
              <div className="sb-stat-value">{estadisticas.apuntes.toLocaleString()}</div>
              <div className="sb-stat-label">Apuntes</div>
            </div>
            <div className="sb-stat">
              <div className="sb-stat-value">{estadisticas.examenes.toLocaleString()}</div>
              <div className="sb-stat-label">Exámenes</div>
            </div>
            <div className="sb-stat">
              <div className="sb-stat-value">{estadisticas.estudiantes.toLocaleString()}</div>
              <div className="sb-stat-label">Estudiantes</div>
            </div>
            <div className="sb-stat">
              <div className="sb-stat-value">{estadisticas.carreras}</div>
              <div className="sb-stat-label">Carreras</div>
            </div>
          </div>

          <div className="sb-divider" />

          {/* Carreras populares */}
          <div className="sb-section">
            <div className="sb-section-label">Carreras populares</div>
            <div className="sb-carreras-grid">
              {FEATURED_CARRERAS.map((c) => (
                <button
                  key={c.id}
                  onClick={() => handleNav("cursos")}
                  className="sb-carrera-item"
                  title={c.nombre}
                >
                  <div className="sb-carrera-dot" style={{ background: c.color }} />
                  <span style={{ marginRight: 2 }}>{c.emoji}</span>
                  <span className="sb-carrera-name">{c.nombre}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Upgrade banner */}
          {(!user || user?.plan === "free") && (
            <div className="sb-upgrade">
              <div className="sb-upgrade-title">
                <span>⚡</span> Pasa a Premium
              </div>
              <div className="sb-upgrade-desc">
                Exámenes resueltos, apuntes premium y descargas ilimitadas por solo S/. 5/mes.
              </div>
              <button className="sb-upgrade-btn" onClick={() => handleNav("planes")}>
                Ver planes →
              </button>
            </div>
          )}
        </aside>
      </div>
    </>
  );
}