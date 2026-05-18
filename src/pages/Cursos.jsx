import { useState, useMemo } from "react";
import { cursos, docentes, carreras, facultades } from "../data/mockData";
import { Badge } from "../components/ui/Badge";

export default function Cursos({ navigate }) {
  const [search, setSearch]               = useState("");
  const [carreraFilter, setCarreraFilter] = useState("all");
  const [cicloFilter, setCicloFilter]     = useState("all");
  const [facultadFilter, setFacultadFilter] = useState("all");

  const carrerasDisp = useMemo(() => {
    if (facultadFilter === "all")
      return [...new Set(cursos.map((c) => c.carreraId))]
        .map((id) => carreras.find((c) => c.id === id))
        .filter(Boolean);
    return carreras.filter((c) => String(c.facultadId) === facultadFilter);
  }, [facultadFilter]);

  const filtered = useMemo(() =>
    cursos.filter((c) => {
      const q = search.toLowerCase();
      const matchSearch  = c.nombre.toLowerCase().includes(q) || c.codigo.toLowerCase().includes(q);
      const matchCarrera = carreraFilter === "all" || String(c.carreraId) === carreraFilter;
      const matchCiclo   = cicloFilter   === "all" || String(c.ciclo)    === cicloFilter;
      const matchFac     = facultadFilter === "all" || (() => {
        const car = carreras.find((cr) => cr.id === c.carreraId);
        return car ? String(car.facultadId) === facultadFilter : false;
      })();
      return matchSearch && matchCarrera && matchCiclo && matchFac;
    }),
  [search, carreraFilter, cicloFilter, facultadFilter]);

  const resetFilters = () => {
    setSearch(""); setCarreraFilter("all"); setCicloFilter("all"); setFacultadFilter("all");
  };
  const hasFilter = search || carreraFilter !== "all" || cicloFilter !== "all" || facultadFilter !== "all";

  return (
    <>
      <style>{`
        .cur-page { animation: cur-up 0.35s ease both; }
        @keyframes cur-up { from { opacity:0; transform:translateY(14px); } to { opacity:1; transform:none; } }

        .cur-header {
          display: flex; align-items: flex-start;
          justify-content: space-between; gap: 16px;
          margin-bottom: 28px; flex-wrap: wrap;
        }
        .cur-title {
          font-family: var(--font-display); font-weight: 900;
          font-size: clamp(1.5rem, 4vw, 2rem);
          color: var(--text-primary); margin-bottom: 4px; letter-spacing: -0.02em;
        }
        .cur-sub { font-size: 0.875rem; color: var(--text-muted); }
        .cur-count {
          background: var(--bg-elevated); border: 1px solid var(--border);
          border-radius: 100px; padding: 6px 16px;
          font-size: 0.82rem; font-weight: 600; color: var(--text-secondary);
          white-space: nowrap; align-self: flex-start; margin-top: 6px;
        }
        .cur-count span { color: var(--indigo-light); font-weight: 800; }

        .cur-filters { display: flex; gap: 10px; margin-bottom: 16px; flex-wrap: wrap; }
        .cur-search-wrap { position: relative; flex: 1; min-width: 200px; }
        .cur-search-icon { position: absolute; left: 12px; top: 50%; transform: translateY(-50%); font-size: 0.9rem; pointer-events: none; }
        .cur-search {
          width: 100%; background: var(--bg-card); border: 1px solid var(--border);
          border-radius: 11px; padding: 10px 14px 10px 36px;
          color: var(--text-primary); font-size: 0.875rem; font-family: var(--font-body);
          outline: none; transition: border-color 0.18s;
        }
        .cur-search:focus { border-color: rgba(99,102,241,0.5); }
        .cur-search::placeholder { color: var(--text-muted); }
        .cur-select {
          background: var(--bg-card); border: 1px solid var(--border);
          border-radius: 11px; padding: 10px 14px;
          color: var(--text-secondary); font-size: 0.875rem; font-family: var(--font-body);
          outline: none; cursor: pointer; transition: border-color 0.18s;
        }
        .cur-select:focus { border-color: rgba(99,102,241,0.5); }
        .cur-select.active { border-color: rgba(99,102,241,0.5); color: var(--indigo-light); background: var(--indigo-dim); }
        .cur-reset {
          background: rgba(239,68,68,0.08); border: 1px solid rgba(239,68,68,0.25);
          border-radius: 11px; padding: 10px 14px;
          color: #ef4444; font-size: 0.82rem; font-weight: 600;
          font-family: var(--font-body); cursor: pointer; white-space: nowrap; transition: all 0.15s;
        }
        .cur-reset:hover { background: rgba(239,68,68,0.14); }

        .cur-chips { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 28px; }
        .cur-chip {
          background: var(--bg-card); border: 1px solid var(--border);
          border-radius: 100px; padding: 5px 14px;
          font-size: 0.78rem; font-weight: 500; color: var(--text-muted);
          cursor: pointer; font-family: var(--font-body); transition: all 0.15s; white-space: nowrap;
          display: flex; align-items: center; gap: 6px;
        }
        .cur-chip:hover { background: var(--bg-elevated); color: var(--text-secondary); }
        .cur-chip.active { background: var(--indigo-dim); border-color: rgba(99,102,241,0.4); color: var(--indigo-light); }
        .cur-chip-dot { width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; }

        .cur-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(288px, 1fr)); gap: 20px; }

        .cur-card {
          background: var(--bg-card); border: 1px solid var(--border);
          border-radius: 16px; padding: 20px;
          cursor: pointer; transition: all 0.22s;
          display: flex; flex-direction: column;
          border-top: 3px solid transparent;
          position: relative; overflow: hidden;
          animation: cur-card-in 0.3s ease both;
        }
        @keyframes cur-card-in {
          from { opacity:0; transform:scale(0.97) translateY(8px); }
          to   { opacity:1; transform:none; }
        }
        .cur-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,0.22); }
        .cur-card-top { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 14px; }
        .cur-code {
          font-size: 0.7rem; font-weight: 800; letter-spacing: 0.07em;
          border-radius: 7px; padding: 3px 9px; font-family: var(--font-display);
        }
        .cur-creds {
          font-size: 0.72rem; font-weight: 700;
          background: var(--bg-elevated); border: 1px solid var(--border);
          border-radius: 100px; padding: 2px 9px; color: var(--text-muted);
        }
        .cur-nombre {
          font-family: var(--font-display); font-weight: 800;
          font-size: 0.98rem; line-height: 1.3; margin-bottom: 6px; color: var(--text-primary);
        }
        .cur-carrera { color: var(--text-muted); font-size: 0.78rem; margin-bottom: 14px; }
        .cur-meta { display: flex; align-items: center; gap: 8px; margin-bottom: 16px; flex-wrap: wrap; }
        .cur-ciclo {
          background: var(--bg-elevated); border: 1px solid var(--border);
          border-radius: 100px; padding: 2px 10px;
          font-size: 0.7rem; font-weight: 700; color: var(--text-secondary);
        }
        .cur-docente { display: flex; align-items: center; gap: 6px; font-size: 0.76rem; color: var(--text-muted); }
        .cur-doc-av {
          width: 20px; height: 20px; border-radius: 50%;
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
          display: inline-flex; align-items: center; justify-content: center;
          font-size: 0.58rem; font-weight: 800; color: #fff; flex-shrink: 0;
        }
        .cur-actions { display: flex; gap: 8px; margin-top: auto; }
        .cur-action-btn {
          flex: 1; background: var(--bg-elevated); border: 1px solid var(--border);
          border-radius: 9px; padding: 8px 4px;
          font-size: 0.76rem; font-weight: 600; color: var(--text-secondary);
          cursor: pointer; font-family: var(--font-body); transition: all 0.15s; text-align: center;
        }
        .cur-action-btn:hover { background: var(--indigo-dim); color: var(--indigo-light); border-color: rgba(99,102,241,0.35); }

        .cur-empty {
          text-align: center; padding: 80px 24px; color: var(--text-muted);
          display: flex; flex-direction: column; gap: 12px; align-items: center;
        }
        .cur-empty-icon { font-size: 3rem; }
        .cur-empty-title { font-size: 1.05rem; font-weight: 700; color: var(--text-secondary); }

        @media (max-width: 640px) {
          .cur-filters { gap: 8px; }
          .cur-select { flex: 1; min-width: 0; }
          .cur-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="cur-page page-container">
        <div className="cur-header">
          <div>
            <h1 className="cur-title">Cursos</h1>
            <p className="cur-sub">{cursos.length} cursos disponibles en la plataforma</p>
          </div>
          <span className="cur-count"><span>{filtered.length}</span> resultados</span>
        </div>

        <div className="cur-filters">
          <div className="cur-search-wrap">
            <span className="cur-search-icon">🔍</span>
            <input
              className="cur-search"
              placeholder="Buscar curso o código..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <select
            className={`cur-select${facultadFilter !== "all" ? " active" : ""}`}
            value={facultadFilter}
            onChange={(e) => { setFacultadFilter(e.target.value); setCarreraFilter("all"); }}
          >
            <option value="all">Todas las facultades</option>
            {facultades.map((f) => (
              <option key={f.id} value={String(f.id)}>{f.icono} {f.nombre}</option>
            ))}
          </select>
          <select
            className={`cur-select${carreraFilter !== "all" ? " active" : ""}`}
            value={carreraFilter}
            onChange={(e) => setCarreraFilter(e.target.value)}
          >
            <option value="all">Todas las carreras</option>
            {carrerasDisp.map((c) => (
              <option key={c.id} value={String(c.id)}>{c.nombre}</option>
            ))}
          </select>
          <select
            className={`cur-select${cicloFilter !== "all" ? " active" : ""}`}
            value={cicloFilter}
            onChange={(e) => setCicloFilter(e.target.value)}
          >
            <option value="all">Todos los ciclos</option>
            {[1,2,3,4,5,6,7,8,9,10].map((n) => (
              <option key={n} value={n}>Ciclo {n}</option>
            ))}
          </select>
          {hasFilter && (
            <button className="cur-reset" onClick={resetFilters}>✕ Limpiar</button>
          )}
        </div>

        <div className="cur-chips">
          <button
            className={`cur-chip${carreraFilter === "all" ? " active" : ""}`}
            onClick={() => setCarreraFilter("all")}
          >
            Todas
          </button>
          {carrerasDisp.slice(0, 8).map((car) => (
            <button
              key={car.id}
              className={`cur-chip${carreraFilter === String(car.id) ? " active" : ""}`}
              onClick={() => setCarreraFilter(String(car.id))}
            >
              <span className="cur-chip-dot" style={{ background: car.color }} />
              {car.codigo}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="cur-empty">
            <div className="cur-empty-icon">🔍</div>
            <div className="cur-empty-title">No encontramos cursos con esos filtros</div>
            <div>Prueba cambiando la búsqueda o los filtros</div>
            <button className="cur-reset" onClick={resetFilters} style={{ marginTop: 8 }}>
              ✕ Limpiar filtros
            </button>
          </div>
        ) : (
          <div className="cur-grid">
            {filtered.map((curso, i) => {
              const docente = docentes.find((d) => d.id === curso.docenteId);
              const carrera = carreras.find((c) => c.id === curso.carreraId);
              return (
                <CursoCard
                  key={curso.id}
                  curso={curso}
                  docente={docente}
                  carrera={carrera}
                  navigate={navigate}
                  delay={Math.min(i * 0.03, 0.24)}
                />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

function CursoCard({ curso, docente, carrera, navigate, delay }) {
  return (
    <div
      className="cur-card"
      style={{ borderTopColor: curso.color, animationDelay: `${delay}s` }}
      onClick={() => navigate("examenes", { carreraId: String(curso.carreraId) })}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${curso.color}55`;
        e.currentTarget.style.borderTopColor = curso.color;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.borderTopColor = curso.color;
      }}
    >
      <div className="cur-card-top">
        <span
          className="cur-code"
          style={{ background: `${curso.color}20`, color: curso.color, border: `1px solid ${curso.color}40` }}
        >
          {curso.codigo}
        </span>
        <span className="cur-creds">{curso.creditos} cr.</span>
      </div>

      <h3 className="cur-nombre">{curso.nombre}</h3>
      <p className="cur-carrera">{carrera?.nombre ?? "—"}</p>

      <div className="cur-meta">
        <span className="cur-ciclo">Ciclo {curso.ciclo}</span>
        {docente && (
          <span className="cur-docente">
            <span className="cur-doc-av">{docente.iniciales}</span>
            {docente.nombre.split(" ").slice(1, 3).join(" ")}
          </span>
        )}
      </div>

      <div className="cur-actions">
        <button
          className="cur-action-btn"
          onClick={(e) => {
            e.stopPropagation();
            navigate("apuntes", { carreraId: String(curso.carreraId) });
          }}
        >
          📝 Apuntes
        </button>
        <button
          className="cur-action-btn"
          onClick={(e) => {
            e.stopPropagation();
            navigate("examenes", { carreraId: String(curso.carreraId) });
          }}
        >
          📋 Exámenes
        </button>
      </div>
    </div>
  );
}