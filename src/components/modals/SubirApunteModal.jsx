import { useState } from "react";
import { Modal } from "../ui/Modal";

const TIPOS = [
  "Resumen",
  "Examen Parcial",
  "Examen Final",
  "Práctica",
  "Diapositivas",
  "Laboratorio",
];

const CICLOS = [
  "1er Ciclo",
  "2do Ciclo",
  "3er Ciclo",
  "4to Ciclo",
  "5to Ciclo",
  "6to Ciclo",
  "7mo Ciclo",
  "8vo Ciclo",
  "9no Ciclo",
  "10mo Ciclo",
];

export default function SubirApunteModal({
  open,
  onClose,
}) {
  const [titulo, setTitulo] = useState("");
  const [curso, setCurso] = useState("");
  const [tipo, setTipo] = useState("");
  const [ciclo, setCiclo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [archivo, setArchivo] = useState(null);
  const [subiendo, setSubiendo] = useState(false);

  const handleFile = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setArchivo(file);
  };

  const handleSubmit = () => {
    if (!titulo || !curso || !archivo) return;

    setSubiendo(true);

    setTimeout(() => {
      setSubiendo(false);

      alert("Apunte subido correctamente 🚀");

      onClose();
    }, 2200);
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Subir nuevo apunte"
      size="lg"
    >
      <div style={styles.wrapper}>

        {/* Upload */}

        <label style={styles.uploadBox}>

          <input
            type="file"
            hidden
            accept=".pdf,.doc,.docx,.ppt,.pptx"
            onChange={handleFile}
          />

          <div style={styles.uploadIcon}>
            📄
          </div>

          <div style={styles.uploadTitle}>
            Arrastra tu archivo aquí
          </div>

          <div style={styles.uploadSubtitle}>
            PDF, DOCX, PPTX — máximo 25MB
          </div>

          {archivo && (
            <div style={styles.filePreview}>
              ✅ {archivo.name}
            </div>
          )}

        </label>

        {/* Form */}

        <div style={styles.grid}>

          <div style={styles.field}>
            <label style={styles.label}>
              Título
            </label>

            <input
              style={styles.input}
              placeholder="Ej: Resumen Semana 4"
              value={titulo}
              onChange={(e) =>
                setTitulo(e.target.value)
              }
            />
          </div>

          <div style={styles.field}>
            <label style={styles.label}>
              Curso
            </label>

            <input
              style={styles.input}
              placeholder="Ej: Matemática II"
              value={curso}
              onChange={(e) =>
                setCurso(e.target.value)
              }
            />
          </div>

          <div style={styles.field}>
            <label style={styles.label}>
              Tipo de material
            </label>

            <select
              style={styles.input}
              value={tipo}
              onChange={(e) =>
                setTipo(e.target.value)
              }
            >
              <option value="">
                Seleccionar
              </option>

              {TIPOS.map((t) => (
                <option key={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div style={styles.field}>
            <label style={styles.label}>
              Ciclo
            </label>

            <select
              style={styles.input}
              value={ciclo}
              onChange={(e) =>
                setCiclo(e.target.value)
              }
            >
              <option value="">
                Seleccionar
              </option>

              {CICLOS.map((c) => (
                <option key={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

        </div>

        {/* Description */}

        <div style={styles.field}>
          <label style={styles.label}>
            Descripción
          </label>

          <textarea
            style={styles.textarea}
            rows={5}
            placeholder="Describe brevemente el contenido del apunte..."
            value={descripcion}
            onChange={(e) =>
              setDescripcion(e.target.value)
            }
          />
        </div>

        {/* Footer */}

        <div style={styles.footer}>

          <button
            style={styles.cancelBtn}
            onClick={onClose}
          >
            Cancelar
          </button>

          <button
            style={{
              ...styles.submitBtn,
              ...(subiendo
                ? styles.submitLoading
                : {}),
            }}
            onClick={handleSubmit}
            disabled={subiendo}
          >
            {subiendo
              ? "Subiendo..."
              : "Publicar Apunte 🚀"}
          </button>

        </div>

      </div>
    </Modal>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    gap: 24,
  },

  uploadBox: {
    border:
      "2px dashed rgba(255,255,255,0.12)",

    borderRadius: 20,

    padding: "42px 24px",

    textAlign: "center",

    cursor: "pointer",

    background:
      "rgba(255,255,255,0.02)",

    transition: "all .2s ease",
  },

  uploadIcon: {
    fontSize: "2.6rem",
    marginBottom: 12,
  },

  uploadTitle: {
    fontWeight: 800,
    fontSize: "1rem",

    marginBottom: 6,
  },

  uploadSubtitle: {
    color: "var(--text-muted)",
    fontSize: ".85rem",
  },

  filePreview: {
    marginTop: 18,

    background:
      "rgba(99,102,241,0.12)",

    border:
      "1px solid rgba(99,102,241,0.22)",

    padding: "10px 14px",

    borderRadius: 12,

    fontSize: ".82rem",

    color: "var(--text-secondary)",
  },

  grid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(220px, 1fr))",

    gap: 18,
  },

  field: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },

  label: {
    fontSize: ".82rem",
    fontWeight: 700,

    color: "var(--text-secondary)",
  },

  input: {
    background:
      "rgba(255,255,255,0.04)",

    border:
      "1px solid rgba(255,255,255,0.08)",

    borderRadius: 14,

    padding: "12px 14px",

    color: "var(--text-primary)",

    fontSize: ".9rem",

    outline: "none",
  },

  textarea: {
    background:
      "rgba(255,255,255,0.04)",

    border:
      "1px solid rgba(255,255,255,0.08)",

    borderRadius: 14,

    padding: "14px",

    color: "var(--text-primary)",

    resize: "vertical",

    fontFamily: "var(--font-body)",

    outline: "none",
  },

  footer: {
    display: "flex",
    justifyContent: "flex-end",
    gap: 12,

    marginTop: 8,
  },

  cancelBtn: {
    background: "transparent",

    border:
      "1px solid rgba(255,255,255,0.1)",

    borderRadius: 14,

    padding: "12px 18px",

    color: "var(--text-secondary)",

    cursor: "pointer",
  },

  submitBtn: {
    background:
      "linear-gradient(135deg, var(--indigo), #7c3aed)",

    border: "none",

    borderRadius: 14,

    padding: "12px 20px",

    color: "#fff",

    fontWeight: 800,

    cursor: "pointer",

    boxShadow:
      "0 10px 24px rgba(99,102,241,.28)",
  },

  submitLoading: {
    opacity: 0.7,
    cursor: "not-allowed",
  },
};