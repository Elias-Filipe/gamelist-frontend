import styles from "./input.module.css";

function Input({ type = "text", value, onChange, placeholder, id, ...props }) {
  return (
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={styles.input}
      {...props}
    />
  );
}

export default Input;