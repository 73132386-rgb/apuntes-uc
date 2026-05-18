export function Button({ children, variant = "primary", size = "md", onClick, style = {} }) {
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    borderRadius: 10,
    fontFamily: "var(--font-body)",
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.2s",
    border: "none",
    ...size === "sm" ? { padding: "5px 14px", fontSize: "0.8rem" } : {},
    ...size === "md" ? { padding: "9px 20px", fontSize: "0.875rem" } : {},
    ...size === "lg" ? { padding: "12px 28px", fontSize: "1rem" } : {},
    ...variant === "primary" ? {
      background: "linear-gradient(135deg, var(--indigo), #7c3aed)",
      color: "#fff",
    } : {},
    ...variant === "secondary" ? {
      background: "var(--bg-elevated)",
      border: "1px solid var(--border)",
      color: "var(--text-secondary)",
    } : {},
    ...variant === "amber" ? {
      background: "linear-gradient(135deg, var(--amber), #ef4444)",
      color: "#fff",
    } : {},
    ...variant === "ghost" ? {
      background: "none",
      color: "var(--text-secondary)",
    } : {},
    ...style,
  };

  return <button style={base} onClick={onClick}>{children}</button>;
}