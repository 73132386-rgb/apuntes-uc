import { planes } from "../data/mockData";
import { useAuth } from "../context/AuthContext";

export default function Planes({ navigate }) {
  const { user } = useAuth();

  return (
    <div style={styles.wrapper}>
      {/* Bg decoration */}
      <div style={styles.bgGlow} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={styles.pageHeader}>
          <div style={styles.headerTag}>💎 Planes y precios</div>
          <h1 style={styles.title}>
            Elige tu plan y<br />
            <span className="gradient-text">aprueba con ventaja</span>
          </h1>
          <p style={styles.subtitle}>
            Accede al banco completo de exámenes resueltos, apuntes verificados
            y todo el material de la Universidad Continental.
          </p>
        </div>

        {/* Cards */}
        <div style={styles.plansGrid}>
          {planes.map((plan) => (
            <PlanCard key={plan.id} plan={plan} user={user} navigate={navigate} />
          ))}
        </div>

        {/* FAQ */}
        <div style={styles.faq}>
          <h2 style={styles.faqTitle}>Preguntas frecuentes</h2>
          <div style={styles.faqGrid}>
            {[
              { q: "¿Puedo cancelar en cualquier momento?", a: "Sí, el plan mensual se puede cancelar cuando quieras sin penalidad." },
              { q: "¿Los materiales son de la UC?", a: "Todo el contenido es subido por estudiantes y docentes de la Universidad Continental de Huancayo." },
              { q: "¿Cómo gano puntos?", a: "Subiendo apuntes y exámenes verificados. Los puntos te dan desbloqueos especiales." },
              { q: "¿El plan Pro anual incluye todo?", a: "Sí, incluye todo lo de Premium más acceso anticipado, insignias y soporte prioritario." },
            ].map((faq) => (
              <div key={faq.q} style={styles.faqItem}>
                <div style={styles.faqQ}>{faq.q}</div>
                <div style={styles.faqA}>{faq.a}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantee */}
        <div style={styles.guarantee}>
          <span style={{ fontSize: "1.8rem" }}>🛡️</span>
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1rem", marginBottom: 4 }}>
              Garantía de satisfacción de 7 días
            </div>
            <div style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>
              Si no estás satisfecho con tu plan Premium en los primeros 7 días, te devolvemos el dinero sin preguntas.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PlanCard({ plan, user, navigate }) {
  const isCurrent = user?.plan === plan.id;

  return (
    <div style={{
      ...styles.planCard,
      ...(plan.popular ? styles.planCardPopular : {}),
      borderColor: plan.popular ? `${plan.color}55` : "var(--border)",
    }}>
      {plan.popular && (
        <div style={{ ...styles.popularBadge, background: plan.color }}>
          ⚡ Más popular
        </div>
      )}

      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
        <div style={{ ...styles.planIcon, background: `${plan.color}20`, border: `1px solid ${plan.color}40` }}>
          {plan.id === "free" ? "🆓" : plan.id === "premium" ? "⭐" : "🏆"}
        </div>
        <div>
          <div style={styles.planName}>{plan.nombre}</div>
          <div style={styles.planDesc}>{plan.descripcion}</div>
        </div>
      </div>

      <div style={styles.priceRow}>
        {plan.precio === 0 ? (
          <span style={styles.priceFree}>Gratis</span>
        ) : (
          <>
            <span style={styles.currency}>S/.</span>
            <span style={{ ...styles.priceNum, color: plan.color }}>{plan.precio}</span>
            <span style={styles.pricePer}>/{plan.periodo}</span>
          </>
        )}
      </div>

      {plan.id === "pro" && (
        <div style={styles.savingTag}>Ahorras S/. 20 vs mensual 🎉</div>
      )}

      <div style={styles.featureList}>
        {plan.features.map((f) => (
          <div key={f.texto} style={styles.featureItem}>
            <span style={{ ...styles.featureIcon, ...(f.incluido ? styles.featureIconOk : styles.featureIconNo) }}>
              {f.incluido ? "✓" : "✗"}
            </span>
            <span style={{ ...styles.featureText, ...(!f.incluido ? styles.featureTextNo : {}) }}>
              {f.texto}
            </span>
          </div>
        ))}
      </div>

      <button
        onClick={() => navigate(plan.precio === 0 ? "login" : "login")}
        style={{
          ...styles.planBtn,
          background: plan.popular
            ? `linear-gradient(135deg, ${plan.color}, #7c3aed)`
            : plan.id === "pro"
            ? `linear-gradient(135deg, ${plan.color}, #ef4444)`
            : "var(--bg-elevated)",
          color: plan.precio === 0 ? "var(--text-secondary)" : "#fff",
          border: plan.precio === 0 ? "1px solid var(--border)" : "none",
        }}
      >
        {isCurrent ? "✓ Plan actual" : plan.precio === 0 ? "Empezar gratis" : `Obtener ${plan.nombre}`}
      </button>
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: "100vh",
    padding: "60px 0 80px",
    position: "relative",
    overflow: "hidden",
  },
  bgGlow: {
    position: "fixed",
    top: "-20%",
    left: "50%",
    transform: "translateX(-50%)",
    width: "80vw",
    height: "60vh",
    background: "radial-gradient(ellipse, rgba(99,102,241,0.12) 0%, transparent 70%)",
    pointerEvents: "none",
    zIndex: 0,
  },
  pageHeader: {
    textAlign: "center",
    marginBottom: 56,
  },
  headerTag: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "5px 14px",
    borderRadius: 100,
    fontSize: "0.8rem",
    fontWeight: 600,
    background: "var(--indigo-dim)",
    border: "1px solid rgba(99,102,241,0.3)",
    color: "var(--indigo-light)",
    marginBottom: 20,
  },
  title: {
    fontFamily: "var(--font-display)",
    fontSize: "clamp(2rem, 5vw, 3rem)",
    fontWeight: 800,
    lineHeight: 1.15,
    letterSpacing: "-0.02em",
    marginBottom: 16,
  },
  subtitle: {
    color: "var(--text-secondary)",
    fontSize: "1rem",
    maxWidth: 520,
    margin: "0 auto",
    lineHeight: 1.7,
  },
  plansGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 24,
    marginBottom: 64,
    alignItems: "start",
  },
  planCard: {
    background: "var(--bg-card)",
    border: "1px solid",
    borderRadius: 20,
    padding: 28,
    position: "relative",
    display: "flex",
    flexDirection: "column",
    gap: 0,
  },
  planCardPopular: {
    background: "linear-gradient(180deg, rgba(99,102,241,0.06) 0%, var(--bg-card) 100%)",
    boxShadow: "0 0 40px rgba(99,102,241,0.12)",
  },
  popularBadge: {
    position: "absolute",
    top: -14,
    left: "50%",
    transform: "translateX(-50%)",
    borderRadius: 100,
    padding: "4px 18px",
    fontSize: "0.78rem",
    fontWeight: 700,
    color: "#fff",
    whiteSpace: "nowrap",
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
  },
  planIcon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.3rem",
    flexShrink: 0,
  },
  planName: {
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: "1.05rem",
  },
  planDesc: {
    color: "var(--text-muted)",
    fontSize: "0.78rem",
  },
  priceRow: {
    display: "flex",
    alignItems: "baseline",
    gap: 4,
    margin: "20px 0 8px",
  },
  priceFree: {
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: "2rem",
    color: "var(--text-secondary)",
  },
  currency: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "1rem",
    color: "var(--text-secondary)",
  },
  priceNum: {
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: "2.4rem",
    lineHeight: 1,
  },
  pricePer: {
    color: "var(--text-muted)",
    fontSize: "0.85rem",
  },
  savingTag: {
    display: "inline-block",
    background: "rgba(16,185,129,0.12)",
    border: "1px solid rgba(16,185,129,0.3)",
    borderRadius: 100,
    padding: "3px 12px",
    fontSize: "0.75rem",
    fontWeight: 600,
    color: "var(--emerald)",
    marginBottom: 8,
  },
  featureList: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    margin: "20px 0 24px",
    flex: 1,
  },
  featureItem: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  featureIcon: {
    width: 18,
    height: 18,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "0.7rem",
    fontWeight: 700,
    flexShrink: 0,
  },
  featureIconOk: {
    background: "var(--emerald-dim)",
    color: "var(--emerald)",
    border: "1px solid rgba(16,185,129,0.3)",
  },
  featureIconNo: {
    background: "var(--bg-elevated)",
    color: "var(--text-muted)",
    border: "1px solid var(--border)",
  },
  featureText: {
    fontSize: "0.875rem",
    color: "var(--text-secondary)",
  },
  featureTextNo: {
    color: "var(--text-muted)",
    textDecoration: "line-through",
  },
  planBtn: {
    borderRadius: 12,
    padding: "12px",
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "0.9rem",
    cursor: "pointer",
    transition: "all 0.2s",
    textAlign: "center",
  },
  faq: {
    marginBottom: 48,
  },
  faqTitle: {
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: "1.4rem",
    textAlign: "center",
    marginBottom: 32,
  },
  faqGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: 16,
  },
  faqItem: {
    background: "var(--bg-card)",
    border: "1px solid var(--border)",
    borderRadius: 14,
    padding: 20,
  },
  faqQ: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "0.9rem",
    marginBottom: 8,
    color: "var(--text-primary)",
  },
  faqA: {
    color: "var(--text-secondary)",
    fontSize: "0.85rem",
    lineHeight: 1.6,
  },
  guarantee: {
    background: "var(--emerald-dim)",
    border: "1px solid rgba(16,185,129,0.2)",
    borderRadius: 16,
    padding: "24px 32px",
    display: "flex",
    alignItems: "center",
    gap: 20,
  },
};