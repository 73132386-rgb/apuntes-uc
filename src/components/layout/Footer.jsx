import { estadisticas } from "../../data/mockData";

const FOOTER_LINKS = {
  Plataforma: [
    { label: "Inicio", key: "home" },
    { label: "Cursos", key: "cursos" },
    { label: "Apuntes", key: "apuntes" },
    { label: "Exámenes", key: "examenes" },
    { label: "Docentes", key: "docentes" },
  ],

  Planes: [
    { label: "Plan Gratuito", key: "planes" },
    { label: "Plan Premium", key: "planes" },
    { label: "Plan Pro Anual", key: "planes" },
  ],

  Universidad: [
    {
      label: "UC Huancayo",
      href: "https://ucontinental.edu.pe/campus-huancayo/",
    },
    {
      label: "Conecta UC",
      href: "https://conecta.continental.edu.pe/",
    },
    {
      label: "Repositorio UC",
      href: "https://repositorio.continental.edu.pe/",
    },
    {
      label: "Fab Lab Continental",
      href: "https://ucontinental.edu.pe/",
    },
  ],

  Soporte: [
    { label: "Contacto", href: "#" },
    { label: "Reportar error", href: "#" },
    { label: "Privacidad", href: "#" },
    { label: "Términos de uso", href: "#" },
  ],
};

const STATS = [
  { value: "2,840+", label: "Apuntes compartidos" },
  { value: "1,560+", label: "Exámenes disponibles" },
  { value: "8,900+", label: "Estudiantes activos" },
  { value: "5★", label: "QS Stars Aprendizaje Online" },
];

const SOCIALS = [
  { label: "TikTok", icon: "🎵", href: "#" },
  { label: "Instagram", icon: "📸", href: "#" },
  { label: "Facebook", icon: "👥", href: "#" },
  { label: "WhatsApp", icon: "💬", href: "#" },
];

export default function Footer({
  navigate,
  sidebarOpen,
  showSidebar,
}) {
  return (
    <>
      <style>{`
        .footer {
          position: relative;
          z-index: 1;

          isolation: isolate;

          background: var(--bg-card);
          border-top: 1px solid var(--border);

          margin-top: auto;

          /* ✅ IMPORTANTE */
          margin-left: 0;

          overflow: hidden;

          transition:
            margin-left 0.28s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* ✅ EMPUJA FOOTER */
        .footer.footer-sidebar-open {
          margin-left: 256px;
        }

        /* ─────────────────────────────
           Stats
        ───────────────────────────── */

        .footer-stats {
          border-bottom: 1px solid var(--border);
          padding: 32px 24px;
        }

        .footer-stats-inner {
          max-width: 1320px;

          margin: 0 auto;

          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }

        .footer-stat {
          text-align: center;

          padding: 0 16px;

          border-right: 1px solid var(--border);
        }

        .footer-stat:last-child {
          border-right: none;
        }

        .footer-stat-value {
          font-family: var(--font-display);
          font-size: 1.6rem;
          font-weight: 800;

          color: var(--text-primary);

          margin-bottom: 4px;
        }

        .footer-stat-label {
          font-size: 0.78rem;

          color: var(--text-muted);
        }

        /* ─────────────────────────────
           Main
        ───────────────────────────── */

        .footer-main {
          max-width: 1320px;

          margin: 0 auto;

          padding: 48px 24px 32px;

          display: grid;
          grid-template-columns: 320px 1fr;

          gap: 64px;
        }

        /* ─────────────────────────────
           Brand
        ───────────────────────────── */

        .footer-logo-btn {
          display: flex;
          align-items: center;
          gap: 10px;

          background: none;
          border: none;

          cursor: pointer;

          padding: 0;

          margin-bottom: 18px;
        }

        .footer-logo-icon {
          width: 38px;
          height: 38px;

          border-radius: 12px;

          background:
            linear-gradient(
              135deg,
              var(--indigo),
              #7c3aed
            );

          display: flex;
          align-items: center;
          justify-content: center;

          font-size: 1.1rem;

          box-shadow:
            0 0 16px rgba(99,102,241,0.35);
        }

        .footer-logo-text {
          font-family: var(--font-display);
          font-size: 1.15rem;
          font-weight: 800;

          color: var(--text-primary);
        }

        .footer-logo-text span {
          color: var(--indigo-light);
        }

        .footer-tagline {
          font-size: 0.88rem;
          line-height: 1.7;

          color: var(--text-muted);

          margin-bottom: 22px;
        }

        /* ─────────────────────────────
           Socials
        ───────────────────────────── */

        .footer-socials {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;

          margin-bottom: 24px;
        }

        .footer-social {
          display: flex;
          align-items: center;
          gap: 6px;

          padding: 7px 12px;

          border-radius: 10px;
          border: 1px solid var(--border);

          text-decoration: none;

          color: var(--text-secondary);

          font-size: 0.8rem;

          transition: all 0.15s ease;
        }

        .footer-social:hover {
          background: var(--bg-elevated);

          color: var(--text-primary);

          border-color:
            rgba(255,255,255,0.16);
        }

        /* ─────────────────────────────
           Badge
        ───────────────────────────── */

        .footer-uc-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;

          padding: 8px 12px;

          border-radius: 10px;

          background: var(--bg-elevated);

          border: 1px solid var(--border);

          color: var(--text-muted);

          font-size: 0.76rem;

          line-height: 1.5;
        }

        .footer-uc-dot {
          width: 8px;
          height: 8px;

          border-radius: 50%;

          background: #16a34a;

          animation: footer-blink 2s infinite;
        }

        @keyframes footer-blink {
          0%,100% { opacity: 1; }
          50% { opacity: .4; }
        }

        /* ─────────────────────────────
           Links
        ───────────────────────────── */

        .footer-links {
          display: grid;

          grid-template-columns:
            repeat(4, minmax(0,1fr));

          gap: 32px;

          min-width: 0;
        }

        .footer-col {
          min-width: 0;
        }

        .footer-col-title {
          font-size: 0.74rem;
          font-weight: 800;

          letter-spacing: 0.1em;
          text-transform: uppercase;

          color: var(--text-muted);

          margin-bottom: 14px;
        }

        .footer-link-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-link {
          background: none;
          border: none;

          padding: 0;

          text-align: left;

          text-decoration: none;

          color: var(--text-secondary);

          font-size: 0.88rem;
          line-height: 1.45;

          cursor: pointer;

          transition: color .15s ease;

          font-family: var(--font-body);

          word-break: break-word;
        }

        .footer-link:hover {
          color: var(--text-primary);
        }

        /* ─────────────────────────────
           Bottom
        ───────────────────────────── */

        .footer-bottom {
          max-width: 1320px;

          margin: 0 auto;

          padding: 18px 24px;

          border-top: 1px solid var(--border);

          display: flex;
          justify-content: space-between;
          align-items: center;

          gap: 12px;

          flex-wrap: wrap;
        }

        .footer-bottom-left {
          display: flex;
          align-items: center;
          gap: 16px;

          flex-wrap: wrap;
        }

        .footer-copyright {
          font-size: 0.8rem;

          color: var(--text-secondary);
        }

        .footer-legal-links {
          display: flex;
          gap: 12px;

          flex-wrap: wrap;
        }

        .footer-legal-link {
          background: none;
          border: none;

          padding: 0;

          cursor: pointer;

          font-size: 0.78rem;

          color: var(--text-muted);

          transition: color .15s ease;
        }

        .footer-legal-link:hover {
          color: var(--text-secondary);
        }

        .footer-made-with {
          font-size: 0.8rem;

          color: var(--text-muted);

          white-space: nowrap;
        }

        /* ─────────────────────────────
           Responsive
        ───────────────────────────── */

        @media (max-width: 1100px) {

          .footer-main {
            grid-template-columns: 1fr;
            gap: 42px;
          }

          .footer-links {
            grid-template-columns: repeat(2, 1fr);
          }

          .footer-stats-inner {
            grid-template-columns: repeat(2, 1fr);
          }

          .footer-stat {
            border-right: none;
            border-bottom: 1px solid var(--border);

            padding: 20px 12px;
          }

          .footer-stat:nth-child(odd) {
            border-right: 1px solid var(--border);
          }

          .footer-stat:nth-child(3),
          .footer-stat:nth-child(4) {
            border-bottom: none;
          }
        }

        @media (max-width: 900px) {

          /* ✅ MOBILE */
          .footer.footer-sidebar-open {
            margin-left: 0;
          }
        }

        @media (max-width: 680px) {

          .footer-stats {
            padding: 22px 16px;
          }

          .footer-main {
            padding: 32px 16px 26px;
          }

          .footer-bottom {
            padding: 16px;
          }

          .footer-links {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .footer-bottom-left {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }

          .footer-legal-links {
            display: none;
          }
        }

        @media (max-width: 480px) {

          .footer-stat-value {
            font-size: 1.3rem;
          }

          .footer-social {
            padding: 6px 10px;
          }

          .footer-made-with {
            white-space: normal;
          }
        }
      `}</style>

      <footer
        className={`footer ${
          showSidebar && sidebarOpen
            ? "footer-sidebar-open"
            : ""
        }`}
      >

        {/* Stats */}

        <div className="footer-stats">
          <div className="footer-stats-inner">

            {STATS.map((s) => (
              <div
                className="footer-stat"
                key={s.label}
              >
                <div className="footer-stat-value">
                  {s.value}
                </div>

                <div className="footer-stat-label">
                  {s.label}
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* Main */}

        <div className="footer-main">

          {/* Brand */}

          <div>

            <button
              className="footer-logo-btn"
              onClick={() => navigate("home")}
            >
              <div className="footer-logo-icon">
                📚
              </div>

              <div className="footer-logo-text">
                Apuntes<span>UC</span>
              </div>
            </button>

            <p className="footer-tagline">
              La plataforma académica de la Universidad Continental.
              Comparte apuntes, accede a exámenes pasados y aprende junto a miles de estudiantes.
            </p>

            <div className="footer-socials">

              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="footer-social"
                >
                  <span>{s.icon}</span>
                  {s.label}
                </a>
              ))}

            </div>

            <div className="footer-uc-badge">
              <div className="footer-uc-dot" />
              Sede Huancayo · Av. San Carlos 1980
            </div>

          </div>

          {/* Links */}

          <div className="footer-links">

            {Object.entries(FOOTER_LINKS).map(([section, links]) => (

              <div
                className="footer-col"
                key={section}
              >

                <div className="footer-col-title">
                  {section}
                </div>

                <div className="footer-link-list">

                  {links.map((link) =>
                    link.key ? (
                      <button
                        key={link.label}
                        className="footer-link"
                        onClick={() => navigate(link.key)}
                      >
                        {link.label}
                      </button>
                    ) : (
                      <a
                        key={link.label}
                        href={link.href}
                        className="footer-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label} ↗
                      </a>
                    )
                  )}

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* Bottom */}

        <div className="footer-bottom">

          <div className="footer-bottom-left">

            <div className="footer-copyright">
              © 2026 ApuntesUC · Proyecto estudiantil
            </div>

            <div className="footer-legal-links">

              <button className="footer-legal-link">
                Términos
              </button>

              <button className="footer-legal-link">
                Privacidad
              </button>

              <button className="footer-legal-link">
                Cookies
              </button>

            </div>

          </div>

          <div className="footer-made-with">
            Hecho por estudiantes 💜
          </div>

        </div>

      </footer>
    </>
  );
}