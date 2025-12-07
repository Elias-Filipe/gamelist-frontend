import styles from "./input.module.css";

function Input({ label, type = "text", value, onChange, placeholder, id, className, ...props }) {
  return (

    <div className={styles.inputGroup}>
      <label htmlFor={id} className={styles.inputLabel}>
        {label}
      </label>

      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={styles.input}
        {...props}
      />
    </div>
  );
}

export default Input;