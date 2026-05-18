export function Card({ children, style = {}, hover = true, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-lg)",
        padding: 20,
        transition: hover ? "all 0.2s" : "none",
        cursor: onClick ? "pointer" : "default",
        ...style,
      }}
      onMouseEnter={hover && onClick ? (e) => {
        e.currentTarget.style.borderColor = "var(--border-light)";
        e.currentTarget.style.transform = "translateY(-2px)";
      } : undefined}
      onMouseLeave={hover && onClick ? (e) => {
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.transform = "none";
      } : undefined}
    >
      {children}
    </div>
  );
}