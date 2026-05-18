import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Login({ navigate }) {
  const { login, isLoading } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (!email || !password) return;

    // ✅ Solo correos institucionales
    if (!email.endsWith("@continental.edu.pe")) {
      alert("Usa tu correo institucional de la Universidad Continental.");
      return;
    }

    login(email, password);

    setTimeout(() => {
      navigate("home");
    }, 1000);
  };

  return (
    <div style={styles.wrapper}>

      <div style={styles.bgGlow} />

      <div style={styles.card}>

        {/* Logo */}

        <div style={styles.logo}>
          <div style={styles.logoIcon}>
            📚
          </div>

          <span style={styles.logoText}>
            Apuntes<span style={{ color: "var(--indigo-light)" }}>UC</span>
          </span>
        </div>

        {/* Header */}

        <h2 style={styles.title}>
          Inicia sesión con tu cuenta UC
        </h2>

        <p style={styles.subtitle}>
          Plataforma académica exclusiva para estudiantes
          de la Universidad Continental.
        </p>

        {/* Form */}

        <div style={styles.form}>

          <div style={styles.fieldGroup}>
            <label style={styles.label}>
              Correo institucional
            </label>

            <input
              style={styles.input}
              type="email"
              placeholder="tu.nombre@continental.edu.pe"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div style={styles.fieldGroup}>
            <label style={styles.label}>
              Contraseña
            </label>

            <input
              style={styles.input}
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div style={styles.forgotWrap}>
            <button style={styles.forgotBtn}>
              ¿Olvidaste tu contraseña?
            </button>
          </div>

          <button
            style={{
              ...styles.submitBtn,
              ...(isLoading
                ? styles.submitLoading
                : {}),
            }}
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading
              ? "Ingresando..."
              : "Ingresar a ApuntesUC →"}
          </button>

        </div>

        {/* Divider */}

        <div style={styles.divider}>

          <span style={styles.dividerLine} />

          <span style={styles.dividerText}>
            o continúa con
          </span>

          <span style={styles.dividerLine} />

        </div>

        {/* Google */}

        <button style={styles.googleBtn}>
          <span>🔵</span>
          Google Institucional
        </button>

        {/* Info */}

        <div style={styles.infoBox}>
          <div style={styles.infoTitle}>
            Acceso exclusivo UC
          </div>

          <div style={styles.infoText}>
            Solo estudiantes con correo institucional
            <strong> @continental.edu.pe </strong>
            pueden acceder a la plataforma.
          </div>
        </div>

        {/* Demo */}

        <div style={styles.demoHint}>
          💡 <strong>Demo:</strong> Usa cualquier correo
          institucional y contraseña para explorar la plataforma.
        </div>

      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: "calc(100vh - 64px)",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    padding: "48px 24px",

    position: "relative",

    overflow: "hidden",
  },

  bgGlow: {
    position: "fixed",

    top: "10%",
    left: "50%",

    transform: "translateX(-50%)",

    width: "700px",
    height: "500px",

    background:
      "radial-gradient(ellipse, rgba(99,102,241,0.14) 0%, transparent 70%)",

    pointerEvents: "none",
  },

  card: {
    position: "relative",
    zIndex: 1,

    width: "100%",
    maxWidth: 460,

    background: "rgba(17,24,39,0.82)",

    backdropFilter: "blur(20px)",

    border: "1px solid rgba(255,255,255,0.08)",

    borderRadius: 28,

    padding: "40px",

    boxShadow:
      "0 20px 60px rgba(0,0,0,0.45)",

    animation: "fadeUp 0.4s ease",
  },

  logo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    gap: 12,

    marginBottom: 26,
  },

  logoIcon: {
    width: 44,
    height: 44,

    borderRadius: 14,

    background:
      "linear-gradient(135deg, var(--indigo), #7c3aed)",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    fontSize: "1.15rem",

    boxShadow:
      "0 10px 24px rgba(99,102,241,0.35)",
  },

  logoText: {
    fontFamily: "var(--font-display)",
    fontWeight: 800,

    fontSize: "1.3rem",

    color: "var(--text-primary)",
  },

  title: {
    fontFamily: "var(--font-display)",
    fontWeight: 800,

    fontSize: "1.65rem",

    textAlign: "center",

    marginBottom: 10,

    lineHeight: 1.2,
  },

  subtitle: {
    color: "var(--text-muted)",

    fontSize: "0.92rem",

    textAlign: "center",

    lineHeight: 1.6,

    marginBottom: 30,
  },

  form: {
    display: "flex",
    flexDirection: "column",

    gap: 18,
  },

  fieldGroup: {
    display: "flex",
    flexDirection: "column",

    gap: 8,
  },

  label: {
    fontSize: "0.82rem",
    fontWeight: 700,

    color: "var(--text-secondary)",

    letterSpacing: "0.02em",
  },

  input: {
    width: "100%",

    background: "rgba(255,255,255,0.04)",

    border: "1px solid rgba(255,255,255,0.08)",

    borderRadius: 14,

    padding: "13px 15px",

    color: "var(--text-primary)",

    fontSize: "0.92rem",

    outline: "none",

    transition: "all 0.2s ease",

    fontFamily: "var(--font-body)",
  },

  forgotWrap: {
    display: "flex",
    justifyContent: "flex-end",
  },

  forgotBtn: {
    background: "none",
    border: "none",

    padding: 0,

    cursor: "pointer",

    fontSize: "0.8rem",

    color: "var(--indigo-light)",

    fontWeight: 600,
  },

  submitBtn: {
    marginTop: 6,

    background:
      "linear-gradient(135deg, var(--indigo), #7c3aed)",

    border: "none",

    borderRadius: 16,

    padding: "14px",

    color: "#fff",

    fontSize: "0.95rem",
    fontWeight: 800,

    fontFamily: "var(--font-display)",

    cursor: "pointer",

    transition: "all 0.2s ease",

    boxShadow:
      "0 10px 30px rgba(99,102,241,0.35)",
  },

  submitLoading: {
    opacity: 0.7,
    cursor: "not-allowed",
  },

  divider: {
    display: "flex",
    alignItems: "center",

    gap: 12,

    margin: "28px 0 20px",
  },

  dividerLine: {
    flex: 1,
    height: 1,

    background: "var(--border)",
  },

  dividerText: {
    fontSize: "0.78rem",

    color: "var(--text-muted)",

    whiteSpace: "nowrap",
  },

  googleBtn: {
    width: "100%",

    background: "rgba(255,255,255,0.04)",

    border: "1px solid rgba(255,255,255,0.08)",

    borderRadius: 14,

    padding: "13px",

    color: "var(--text-secondary)",

    fontSize: "0.9rem",
    fontWeight: 700,

    cursor: "pointer",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    gap: 10,

    transition: "all 0.2s ease",

    marginBottom: 24,
  },

  infoBox: {
    background:
      "rgba(99,102,241,0.08)",

    border:
      "1px solid rgba(99,102,241,0.16)",

    borderRadius: 16,

    padding: "16px 18px",

    marginBottom: 18,
  },

  infoTitle: {
    fontSize: "0.82rem",
    fontWeight: 800,

    color: "var(--text-primary)",

    marginBottom: 6,
  },

  infoText: {
    fontSize: "0.8rem",

    lineHeight: 1.6,

    color: "var(--text-secondary)",
  },

  demoHint: {
    background: "var(--bg-elevated)",

    border: "1px solid var(--border)",

    borderRadius: 14,

    padding: "12px 14px",

    fontSize: "0.78rem",

    color: "var(--text-secondary)",

    lineHeight: 1.6,
  },
};