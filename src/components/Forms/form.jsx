import styles from "./form.module.css";
import Label from "./../Labels/label";
import Input from "./../Inputs/input";

function FormField({ label, id, ...inputProps }) {
  return (
    <div className={styles.field}>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} {...inputProps} />
    </div>
  );
}

export default FormField;