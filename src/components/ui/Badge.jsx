export function Badge({ children, color = "default" }) {
  const colors = {
    default: { bg: "var(--bg-elevated)", border: "var(--border)", text: "var(--text-secondary)" },
    indigo: { bg: "var(--indigo-dim)", border: "rgba(99,102,241,0.3)", text: "var(--indigo-light)" },
    amber: { bg: "var(--amber-dim)", border: "rgba(245,158,11,0.3)", text: "var(--amber)" },
    emerald: { bg: "var(--emerald-dim)", border: "rgba(16,185,129,0.3)", text: "var(--emerald)" },
    rose: { bg: "var(--rose-dim)", border: "rgba(244,63,94,0.3)", text: "var(--rose)" },
  };

  const c = colors[color] || colors.default;

  return (
    <span style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      padding: "2px 9px",
      borderRadius: 100,
      fontSize: "0.72rem",
      fontWeight: 600,
      background: c.bg,
      border: `1px solid ${c.border}`,
      color: c.text,
    }}>
      {children}
    </span>
  );
}