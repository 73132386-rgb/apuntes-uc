import { useEffect } from "react";
import { createPortal } from "react-dom";

export function Modal({ open, onClose, title, children, size = "md" }) {
  // Bloquear scroll del body cuando el modal está abierto
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Cerrar con Escape
  useEffect(() => {
    if (!open) return;
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  if (!open) return null;

  const maxWidth = size === "lg" ? 680 : size === "sm" ? 400 : 540;

  // ✅ createPortal escapa cualquier stacking context del Sidebar/Navbar
  // El modal se renderiza directamente en document.body, por lo que
  // position:fixed funciona correctamente sin importar transforms padres.
  return createPortal(
    <>
      <style>{`
        @keyframes modal-overlay-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes modal-slide-up {
          from { opacity: 0; transform: translateY(24px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0)    scale(1); }
        }

        /* ── Overlay ── */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.78);
          backdrop-filter: blur(7px);
          -webkit-backdrop-filter: blur(7px);
          /* z-index muy alto para superar Navbar (normalmente ~100) y Sidebar */
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px 16px;
          animation: modal-overlay-in 0.18s ease;
          /* Permitir que el overlay mismo no scrollee */
          overflow: hidden;
        }

        /* ── Caja del modal ── */
        .modal-box {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 22px;
          width: 100%;
          /* flex column para que header/footer sean fijos y body scrollee */
          display: flex;
          flex-direction: column;
          /* Altura máxima: viewport menos padding del overlay */
          max-height: calc(100vh - 48px);
          animation: modal-slide-up 0.24s cubic-bezier(0.34, 1.4, 0.64, 1);
          box-shadow:
            0 32px 80px rgba(0, 0, 0, 0.55),
            0 0 0 1px rgba(255, 255, 255, 0.05);
          /* Evitar que el box crezca más allá del viewport */
          overflow: hidden;
        }

        /* ── Header (fijo, no scrollea) ── */
        .modal-header {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 22px 24px 18px;
          border-bottom: 1px solid var(--border);
          flex-shrink: 0;
        }
        .modal-title-wrap { flex: 1; min-width: 0; }
        .modal-title {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 1.05rem;
          color: var(--text-primary);
          line-height: 1.35;
          margin: 0;
          /* Título largo: wrappea en lugar de desbordarse */
          word-break: break-word;
        }

        /* ── Botón cerrar ── */
        .modal-close {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          min-width: 32px;   /* evitar que se comprima */
          background: var(--bg-elevated);
          border: 1px solid var(--border);
          border-radius: 9px;
          cursor: pointer;
          color: var(--text-muted);
          font-size: 0.85rem;
          flex-shrink: 0;
          transition: all 0.15s;
          margin-top: 1px;
        }
        .modal-close:hover {
          background: var(--bg-card);
          color: var(--text-primary);
          border-color: rgba(255, 255, 255, 0.2);
        }

        /* ── Body (el único que scrollea) ── */
        .modal-body {
          padding: 22px 24px 24px;
          overflow-y: auto;   /* ✅ solo el body scrollea */
          flex: 1;            /* ocupa todo el espacio restante */
          /* scrollbar fina y elegante */
          scrollbar-width: thin;
          scrollbar-color: var(--border) transparent;
          /* Mínima altura para que no colapse */
          min-height: 0;
        }
        .modal-body::-webkit-scrollbar        { width: 4px; }
        .modal-body::-webkit-scrollbar-track  { background: transparent; }
        .modal-body::-webkit-scrollbar-thumb  { background: var(--border); border-radius: 4px; }

        /* ── Footer opcional ── */
        .modal-footer {
          padding: 16px 24px;
          border-top: 1px solid var(--border);
          flex-shrink: 0;
        }

        /* ── Mobile: sheet desde abajo ── */
        @media (max-width: 520px) {
          .modal-overlay {
            align-items: flex-end;
            padding: 0;
          }
          .modal-box {
            border-radius: 22px 22px 0 0;
            max-height: 90vh;
            /* En mobile la animación viene desde abajo */
            animation: modal-slide-mobile 0.28s cubic-bezier(0.34, 1.2, 0.64, 1);
          }
          @keyframes modal-slide-mobile {
            from { opacity: 0; transform: translateY(40px); }
            to   { opacity: 1; transform: translateY(0); }
          }
        }
      `}</style>

      {/* Overlay: click fuera cierra */}
      <div className="modal-overlay" onMouseDown={onClose}>
        <div
          className="modal-box"
          style={{ maxWidth }}
          onMouseDown={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="modal-header">
            <div className="modal-title-wrap">
              <h3 className="modal-title">{title}</h3>
            </div>
            <button
              className="modal-close"
              onClick={onClose}
              aria-label="Cerrar modal"
            >
              ✕
            </button>
          </div>

          {/* Body scrolleable */}
          <div className="modal-body">
            {children}
          </div>
        </div>
      </div>
    </>,
    document.body   // ✅ se inyecta directamente en <body>, fuera de cualquier stacking context
  );
}