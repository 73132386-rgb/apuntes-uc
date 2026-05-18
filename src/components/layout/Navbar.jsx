import { useState, useEffect, useRef } from "react";
import { useAuth } from "../../context/AuthContext";

const NAV_LINKS = [
  { key: "home",     label: "Inicio",   icon: "🏠" },
  { key: "cursos",   label: "Cursos",   icon: "📖" },
  { key: "apuntes",  label: "Apuntes",  icon: "📝" },
  { key: "examenes", label: "Exámenes", icon: "📋" },
  { key: "docentes", label: "Docentes", icon: "👨‍🏫" },
  { key: "planes",   label: "Planes",   icon: "⭐", highlight: true },
];

// Icono de paneles verticales — abre/cierra sidebar lateral
function PanelIcon({ open }) {
  return (
    <span className="panel-icon" aria-hidden="true">
      <span className={`pi-bar ${open ? "pi-tall" : "pi-short"}`} />
      <span className={`pi-bar ${open ? "pi-short" : "pi-tall"}`} />
      <span className={`pi-bar ${open ? "pi-tall" : "pi-short"}`} />
    </span>
  );
}

// Icono grilla 3×3 de puntos — abre el drawer de navegación mobile
function DotsGridIcon() {
  return (
    <span className="dots-grid" aria-hidden="true">
      {[...Array(9)].map((_, i) => <span key={i} className="dot" />)}
    </span>
  );
}

export default function Navbar({
  page,
  navigate,
  sidebarOpen,
  setSidebarOpen,
  showSidebar, // prop desde App: true cuando la página tiene sidebar
}) {
  const { user, logout } = useAuth();
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const [scrolled, setScrolled]           = useState(false);
  const [userMenuOpen, setUserMenuOpen]   = useState(false);
  const [panelTooltip, setPanelTooltip]   = useState(false);
  const userMenuRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  // Cerrar drawer de nav al cambiar de página
  const handleNav = (key) => {
    navigate(key);
    setNavDrawerOpen(false);
    setUserMenuOpen(false);
  };

  const toggleSidebar = () => setSidebarOpen((v) => !v);

  return (
    <>
      <style>{`
        /* ════════════════════════════════
           HEADER BASE
        ════════════════════════════════ */
        .nav-header {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 200;
          background: rgba(10, 10, 18, 0.93);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border);
          transition: box-shadow 0.25s ease;
        }
        .nav-header.scrolled {
          box-shadow: 0 4px 32px rgba(0,0,0,0.45);
        }
        .nav-inner {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 20px;
          height: 64px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        /* ════════════════════════════════
           BOTÓN PANEL — abre/cierra sidebar lateral
           Visible en TODAS las resoluciones cuando
           showSidebar=true (páginas con sidebar).
           Usa icono de barras verticales (≠ hamburguesa).
        ════════════════════════════════ */
        .nav-panel-btn {
          display: none; /* oculto si no tiene clase show-panel */
          align-items: center;
          justify-content: center;
          width: 38px; height: 38px;
          background: var(--bg-elevated);
          border: 1px solid var(--border);
          border-radius: 10px;
          color: var(--text-secondary);
          cursor: pointer;
          flex-shrink: 0;
          transition: all 0.15s;
          position: relative;
        }
        /* Activo cuando la página tiene sidebar — en TODOS los breakpoints */
        .nav-panel-btn.show-panel {
          display: flex;
        }
        .nav-panel-btn:hover {
          background: var(--bg-card);
          color: var(--text-primary);
          border-color: rgba(255,255,255,0.18);
        }
        /* Resaltado sutil cuando el sidebar está abierto */
        .nav-panel-btn.panel-active {
          background: var(--indigo-dim);
          border-color: rgba(99,102,241,0.3);
          color: var(--indigo-light);
        }

        /* Icono de barras verticales */
        .panel-icon {
          display: flex;
          align-items: flex-end;
          gap: 3px;
          height: 18px;
        }
        .pi-bar {
          width: 3px;
          border-radius: 2px;
          background: currentColor;
          transition: height 0.22s ease;
        }
        .pi-tall  { height: 14px; }
        .pi-short { height: 9px; }

        /* Tooltip del botón panel */
        .panel-tooltip {
          position: absolute;
          top: calc(100% + 8px);
          left: 50%;
          transform: translateX(-50%);
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 7px;
          padding: 4px 10px;
          font-size: 0.72rem;
          color: var(--text-secondary);
          white-space: nowrap;
          pointer-events: none;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          z-index: 300;
        }
        /* Flecha del tooltip */
        .panel-tooltip::before {
          content: '';
          position: absolute;
          bottom: 100%; left: 50%;
          transform: translateX(-50%);
          border: 5px solid transparent;
          border-bottom-color: var(--border);
        }

        /* ════════════════════════════════
           LOGO
        ════════════════════════════════ */
        .nav-logo-btn {
          display: flex;
          align-items: center;
          gap: 9px;
          background: none;
          border: none;
          cursor: pointer;
          flex-shrink: 0;
          padding: 0;
        }
        .nav-logo-icon {
          width: 34px; height: 34px;
          background: linear-gradient(135deg, var(--indigo) 0%, #7c3aed 100%);
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1rem;
          box-shadow: 0 0 16px rgba(99,102,241,0.35);
          flex-shrink: 0;
        }
        .nav-logo-text {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 1.1rem;
          color: var(--text-primary);
          letter-spacing: -0.02em;
          white-space: nowrap;
        }
        .nav-logo-text span { color: var(--indigo-light); }
        .nav-badge {
          font-size: 0.6rem;
          font-weight: 700;
          background: rgba(99,102,241,0.12);
          color: var(--indigo-light);
          border: 1px solid rgba(99,102,241,0.28);
          border-radius: 100px;
          padding: 2px 9px;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          white-space: nowrap;
        }

        /* ════════════════════════════════
           LINKS DESKTOP
        ════════════════════════════════ */
        .nav-links {
          display: flex;
          align-items: center;
          gap: 2px;
          flex: 1;
          justify-content: center;
        }
        .nav-link {
          display: flex;
          align-items: center;
          gap: 6px;
          background: none;
          border: none;
          cursor: pointer;
          color: var(--text-secondary);
          font-size: 0.875rem;
          font-weight: 500;
          padding: 7px 13px;
          border-radius: 9px;
          transition: all 0.15s;
          font-family: var(--font-body);
          white-space: nowrap;
          position: relative;
        }
        .nav-link:hover { color: var(--text-primary); background: var(--bg-elevated); }
        .nav-link.active {
          color: var(--text-primary);
          background: var(--bg-elevated);
          font-weight: 600;
        }
        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -1px; left: 20%; right: 20%;
          height: 2px;
          background: var(--indigo-light);
          border-radius: 2px;
        }
        .nav-link-highlight {
          background: linear-gradient(135deg, rgba(99,102,241,0.15), rgba(124,58,237,0.15));
          border: 1px solid rgba(99,102,241,0.25);
          color: var(--indigo-light) !important;
        }
        .nav-link-highlight:hover {
          background: linear-gradient(135deg, rgba(99,102,241,0.25), rgba(124,58,237,0.25)) !important;
          border-color: rgba(99,102,241,0.45);
        }
        .nav-pro-dot {
          width: 6px; height: 6px;
          background: linear-gradient(135deg, #f59e0b, #ef4444);
          border-radius: 50%;
          animation: pulse-dot 2s infinite;
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.6; transform: scale(1.4); }
        }

        /* ════════════════════════════════
           AUTH DESKTOP
        ════════════════════════════════ */
        .nav-auth {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
        }
        .nav-btn-secondary {
          background: none;
          border: 1px solid var(--border);
          border-radius: 9px;
          padding: 7px 16px;
          color: var(--text-secondary);
          font-size: 0.85rem;
          cursor: pointer;
          font-family: var(--font-body);
          transition: all 0.15s;
          white-space: nowrap;
        }
        .nav-btn-secondary:hover {
          background: var(--bg-elevated);
          color: var(--text-primary);
          border-color: rgba(255,255,255,0.2);
        }
        .nav-btn-primary {
          background: linear-gradient(135deg, var(--indigo), #7c3aed);
          border: none;
          border-radius: 9px;
          padding: 7px 16px;
          color: #fff;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          font-family: var(--font-body);
          transition: all 0.2s;
          white-space: nowrap;
          box-shadow: 0 0 16px rgba(99,102,241,0.3);
        }
        .nav-btn-primary:hover {
          opacity: 0.9;
          transform: translateY(-1px);
          box-shadow: 0 4px 20px rgba(99,102,241,0.4);
        }

        /* ════════════════════════════════
           USER MENU DESKTOP
        ════════════════════════════════ */
        .nav-user-wrap { position: relative; }
        .nav-user-chip {
          display: flex;
          align-items: center;
          gap: 8px;
          background: var(--bg-elevated);
          border: 1px solid var(--border);
          border-radius: 100px;
          padding: 4px 12px 4px 4px;
          cursor: pointer;
          transition: all 0.15s;
          user-select: none;
        }
        .nav-user-chip:hover {
          border-color: rgba(99,102,241,0.4);
          background: var(--bg-card);
        }
        .nav-user-avatar {
          width: 28px; height: 28px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--indigo), #7c3aed);
          display: flex; align-items: center; justify-content: center;
          font-size: 0.8rem;
          font-weight: 700;
          color: #fff;
          flex-shrink: 0;
        }
        .nav-user-name {
          font-size: 0.84rem;
          color: var(--text-secondary);
          font-weight: 500;
          max-width: 90px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .nav-user-chevron {
          font-size: 0.65rem;
          color: var(--text-muted);
          margin-left: 2px;
          transition: transform 0.2s;
        }
        .nav-user-chevron.open { transform: rotate(180deg); }
        .nav-user-dropdown {
          position: absolute;
          top: calc(100% + 8px);
          right: 0;
          min-width: 200px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 8px;
          box-shadow: 0 16px 40px rgba(0,0,0,0.4);
          animation: dropdown-in 0.15s ease;
          z-index: 300;
        }
        @keyframes dropdown-in {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .nav-user-info {
          padding: 8px 12px 12px;
          border-bottom: 1px solid var(--border);
          margin-bottom: 6px;
        }
        .nav-user-info-name {
          font-weight: 700; font-size: 0.9rem;
          color: var(--text-primary); margin-bottom: 2px;
        }
        .nav-user-info-meta { font-size: 0.75rem; color: var(--text-muted); }
        .nav-user-info-plan {
          display: inline-block;
          margin-top: 6px;
          font-size: 0.7rem; font-weight: 600;
          background: rgba(99,102,241,0.12);
          color: var(--indigo-light);
          border: 1px solid rgba(99,102,241,0.25);
          border-radius: 100px;
          padding: 2px 9px;
        }
        .nav-dropdown-item {
          display: flex;
          align-items: center;
          gap: 9px;
          width: 100%;
          background: none;
          border: none;
          cursor: pointer;
          color: var(--text-secondary);
          font-size: 0.85rem;
          font-family: var(--font-body);
          padding: 8px 12px;
          border-radius: 9px;
          transition: all 0.12s;
          text-align: left;
        }
        .nav-dropdown-item:hover { background: var(--bg-elevated); color: var(--text-primary); }
        .nav-dropdown-item.danger { color: #ef4444; }
        .nav-dropdown-item.danger:hover { background: rgba(239,68,68,0.08); color: #ef4444; }
        .nav-dropdown-sep { height: 1px; background: var(--border); margin: 6px 0; }

        /* ════════════════════════════════
           BOTÓN MENÚ MOBILE
           Grilla de 9 puntos — abre el drawer de navegación.
           Visible solo en mobile/tablet (≤900px).
           DISTINTO al botón de panel (barras verticales).
        ════════════════════════════════ */
        .nav-mobile-toggle {
          display: none;
          align-items: center;
          justify-content: center;
          width: 38px; height: 38px;
          background: var(--bg-elevated);
          border: 1px solid var(--border);
          border-radius: 10px;
          color: var(--text-secondary);
          cursor: pointer;
          flex-shrink: 0;
          transition: all 0.15s;
          /* No margin-left:auto para que conviva con el botón de panel */
        }
        .nav-mobile-toggle:hover { background: var(--bg-card); color: var(--text-primary); }

        /* Grilla 3×3 */
        .dots-grid {
          display: grid;
          grid-template-columns: repeat(3, 5px);
          gap: 3px;
        }
        .dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: currentColor;
        }
        .nav-mobile-toggle .close-x {
          display: none;
          font-size: 1rem;
          line-height: 1;
        }
        .nav-mobile-toggle.open .dots-grid { display: none; }
        .nav-mobile-toggle.open .close-x   { display: block; }

        /* ════════════════════════════════
           DRAWER MOBILE — links de navegación
        ════════════════════════════════ */
        .nav-mobile-drawer {
          display: none;
          flex-direction: column;
          border-top: 1px solid var(--border);
          background: var(--bg-card);
          max-height: calc(100vh - 64px);
          overflow-y: auto;
        }
        .nav-mobile-drawer.open {
          display: flex;
          animation: drawer-in 0.2s ease;
        }
        @keyframes drawer-in {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .nav-mobile-links {
          padding: 10px 14px;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .nav-mobile-link {
          display: flex;
          align-items: center;
          gap: 12px;
          background: none;
          border: none;
          cursor: pointer;
          color: var(--text-secondary);
          font-size: 0.95rem;
          font-family: var(--font-body);
          padding: 10px 12px;
          border-radius: 11px;
          transition: all 0.15s;
          text-align: left;
          width: 100%;
          font-weight: 500;
        }
        .nav-mobile-link:hover { background: var(--bg-elevated); color: var(--text-primary); }
        .nav-mobile-link.active {
          background: var(--indigo-dim);
          color: var(--indigo-light);
          font-weight: 600;
        }
        .nav-mobile-link.highlight { color: var(--indigo-light); }

        /* Chip/pastilla del ícono en el drawer */
        .nav-mobile-link-icon {
          width: 34px; height: 34px;
          border-radius: 9px;
          background: var(--bg-elevated);
          border: 1px solid var(--border);
          display: flex; align-items: center; justify-content: center;
          font-size: 1.05rem;
          flex-shrink: 0;
          transition: background 0.15s, border-color 0.15s;
        }
        .nav-mobile-link.active .nav-mobile-link-icon {
          background: var(--indigo-dim);
          border-color: rgba(99,102,241,0.3);
        }
        .nav-mobile-link.highlight .nav-mobile-link-icon {
          background: rgba(99,102,241,0.1);
          border-color: rgba(99,102,241,0.25);
        }

        /* Auth mobile */
        .nav-mobile-auth {
          padding: 10px 14px 18px;
          border-top: 1px solid var(--border);
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .nav-mobile-user-card {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 13px;
          background: var(--bg-elevated);
          border-radius: 12px;
          margin-bottom: 2px;
        }
        .nav-mobile-avatar {
          width: 38px; height: 38px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--indigo), #7c3aed);
          display: flex; align-items: center; justify-content: center;
          font-size: 1rem; font-weight: 700; color: #fff;
          flex-shrink: 0;
        }
        .nav-mobile-user-info { flex: 1; min-width: 0; }
        .nav-mobile-user-name { font-weight: 700; font-size: 0.9rem; color: var(--text-primary); }
        .nav-mobile-user-meta { font-size: 0.75rem; color: var(--text-muted); }
        .nav-mobile-points {
          font-size: 0.75rem; font-weight: 600;
          color: var(--amber);
          background: var(--amber-dim);
          border: 1px solid rgba(245,158,11,0.2);
          border-radius: 100px;
          padding: 3px 9px;
          white-space: nowrap;
        }
        .nav-mobile-btn-primary {
          display: block; width: 100%;
          background: linear-gradient(135deg, var(--indigo), #7c3aed);
          border: none; border-radius: 11px;
          padding: 12px; color: #fff;
          font-size: 0.9rem; font-weight: 600;
          cursor: pointer; font-family: var(--font-body); text-align: center;
        }
        .nav-mobile-btn-secondary {
          display: block; width: 100%;
          background: none;
          border: 1px solid var(--border); border-radius: 11px;
          padding: 11px; color: var(--text-secondary);
          font-size: 0.9rem;
          cursor: pointer; font-family: var(--font-body); text-align: center;
        }
        .nav-mobile-logout {
          display: flex; align-items: center; justify-content: center; gap: 8px;
          width: 100%;
          background: rgba(239,68,68,0.08);
          border: 1px solid rgba(239,68,68,0.2); border-radius: 11px;
          padding: 11px; color: #ef4444;
          font-size: 0.9rem;
          cursor: pointer; font-family: var(--font-body);
        }

        /* ════════════════════════════════
           RESPONSIVE
        ════════════════════════════════ */
        @media (max-width: 900px) {
          /* Ocultar links y auth de desktop */
          .nav-links  { display: none; }
          .nav-auth   { display: none; }
          .nav-badge  { display: none; }
          /* Mostrar toggle de nav mobile */
          .nav-mobile-toggle { display: flex; }
          /* El botón de panel ya es visible si show-panel está activo —
             En mobile queda a la izquierda del logo, visible para abrir el sidebar */
        }
        @media (max-width: 480px) {
          .nav-inner { padding: 0 14px; gap: 8px; }
          .nav-logo-text { font-size: 1rem; }
        }
      `}</style>

      <header className={`nav-header${scrolled ? " scrolled" : ""}`}>
        <div className="nav-inner">

          {/*
            ── BOTÓN PANEL (barras verticales) ──
            Abre/cierra el sidebar lateral.
            Visible en TODOS los breakpoints cuando showSidebar=true.
            En desktop está a la izquierda del logo.
            En mobile/tablet también, junto al logo.
          */}
          <button
            className={[
              "nav-panel-btn",
              showSidebar ? "show-panel" : "",
              showSidebar && sidebarOpen ? "panel-active" : "",
            ].join(" ").trim()}
            onClick={toggleSidebar}
            onMouseEnter={() => setPanelTooltip(true)}
            onMouseLeave={() => setPanelTooltip(false)}
            aria-label={sidebarOpen ? "Ocultar panel lateral" : "Mostrar panel lateral"}
          >
            <PanelIcon open={sidebarOpen} />
            {panelTooltip && (
              <span className="panel-tooltip">
                {sidebarOpen ? "Ocultar panel" : "Mostrar panel"}
              </span>
            )}
          </button>

          {/* Logo */}
          <button className="nav-logo-btn" onClick={() => handleNav("home")}>
            <div className="nav-logo-icon">📚</div>
            <span className="nav-logo-text">
              Apuntes<span>UC</span>
            </span>
          </button>
          <span className="nav-badge">Continental</span>

          {/* Links desktop (ocultos en ≤900px) */}
          <nav className="nav-links" aria-label="Navegación principal">
            {NAV_LINKS.map((l) => (
              <button
                key={l.key}
                onClick={() => handleNav(l.key)}
                className={[
                  "nav-link",
                  page === l.key ? "active" : "",
                  l.highlight ? "nav-link-highlight" : "",
                ].join(" ").trim()}
              >
                {l.key === "planes" && <span className="nav-pro-dot" />}
                {l.label}
              </button>
            ))}
          </nav>

          {/* Auth desktop */}
          <div className="nav-auth">
            {user ? (
              <div className="nav-user-wrap" ref={userMenuRef}>
                <div
                  className="nav-user-chip"
                  onClick={() => setUserMenuOpen((v) => !v)}
                  role="button"
                  tabIndex={0}
                  aria-expanded={userMenuOpen}
                >
                  <div className="nav-user-avatar">{user.nombre[0]}</div>
                  <span className="nav-user-name">{user.nombre}</span>
                  <span className={`nav-user-chevron${userMenuOpen ? " open" : ""}`}>▼</span>
                </div>
                {userMenuOpen && (
                  <div className="nav-user-dropdown">
                    <div className="nav-user-info">
                      <div className="nav-user-info-name">{user.nombre} {user.apellido}</div>
                      <div className="nav-user-info-meta">{user.carrera}</div>
                      <div className="nav-user-info-meta">
                        Ciclo {user.ciclo} · {user.descargas}/{user.descargasMax} descargas
                      </div>
                      <span className="nav-user-info-plan">
                        {user.plan === "free"
                          ? "Plan Gratuito"
                          : user.plan === "premium"
                          ? "⭐ Premium"
                          : "🏆 Pro"}
                      </span>
                    </div>
                    <button className="nav-dropdown-item" onClick={() => handleNav("planes")}>
                      ⭐ Mejorar plan
                    </button>
                    <div className="nav-dropdown-sep" />
                    <button
                      className="nav-dropdown-item danger"
                      onClick={() => { logout(); setUserMenuOpen(false); }}
                    >
                      ← Cerrar sesión
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <button className="nav-btn-secondary" onClick={() => handleNav("login")}>
                  Ingresar
                </button>
                <button className="nav-btn-primary" onClick={() => handleNav("planes")}>
                  Empezar gratis
                </button>
              </>
            )}
          </div>

          {/*
            ── BOTÓN MENÚ MOBILE (grilla de 9 puntos) ──
            Distinto al botón de panel (barras verticales).
            Abre el drawer de navegación (links de nav + auth).
            Visible solo en ≤900px. Siempre está al final del nav-inner.
          */}
          <button
            className={`nav-mobile-toggle${navDrawerOpen ? " open" : ""}`}
            onClick={() => setNavDrawerOpen((v) => !v)}
            aria-label={navDrawerOpen ? "Cerrar menú" : "Abrir menú de navegación"}
            aria-expanded={navDrawerOpen}
          >
            <DotsGridIcon />
            <span className="close-x">✕</span>
          </button>
        </div>

        {/* ── DRAWER MOBILE ── */}
        <div className={`nav-mobile-drawer${navDrawerOpen ? " open" : ""}`}>
          <div className="nav-mobile-links">
            {NAV_LINKS.map((l) => (
              <button
                key={l.key}
                onClick={() => handleNav(l.key)}
                className={[
                  "nav-mobile-link",
                  page === l.key ? "active" : "",
                  l.highlight ? "highlight" : "",
                ].join(" ").trim()}
              >
                <span className="nav-mobile-link-icon">{l.icon}</span>
                {l.label}
                {l.highlight && (
                  <span style={{
                    marginLeft: "auto",
                    fontSize: "0.68rem",
                    color: "var(--indigo-light)",
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                  }}>
                    POPULAR
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="nav-mobile-auth">
            {user ? (
              <>
                <div className="nav-mobile-user-card">
                  <div className="nav-mobile-avatar">{user.nombre[0]}</div>
                  <div className="nav-mobile-user-info">
                    <div className="nav-mobile-user-name">{user.nombre} {user.apellido}</div>
                    <div className="nav-mobile-user-meta">
                      Ciclo {user.ciclo} · {user.carrera.split(" ").slice(0, 2).join(" ")}
                    </div>
                  </div>
                  <span className="nav-mobile-points">⭐ {user.puntos}</span>
                </div>
                {user.plan === "free" && (
                  <button className="nav-mobile-btn-primary" onClick={() => handleNav("planes")}>
                    ⚡ Mejorar a Premium — S/. 5/mes
                  </button>
                )}
                <button
                  className="nav-mobile-logout"
                  onClick={() => { logout(); setNavDrawerOpen(false); }}
                >
                  ← Cerrar sesión
                </button>
              </>
            ) : (
              <>
                <button className="nav-mobile-btn-primary" onClick={() => handleNav("planes")}>
                  Empezar gratis
                </button>
                <button className="nav-mobile-btn-secondary" onClick={() => handleNav("login")}>
                  Ya tengo cuenta
                </button>
              </>
            )}
          </div>
        </div>
      </header>
    </>
  );
}