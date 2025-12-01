import styles from "./button.module.css";

export default function Button({
  children,
  onClick,
  size = "medium",
  variant = "primary",
  className = "",
  disabled = false,
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${styles.button}
        ${styles[size]}
        ${variant !== "primary" ? styles[variant] : ""}
        ${className}
      `}
    >
      {children}
    </button>
  );
}
