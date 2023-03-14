import styles from "./Input.module.css";

type IInputProps = {
  label: string;
  isRequired?: boolean;
};

const Input = ({ label, isRequired = true }: IInputProps) => (
  <div className={styles.inputWrapper}>
    <label className={styles.label}>
      {label}
      {isRequired ? "*" : ""}
    </label>
    <input className={styles.input} />
  </div>
);

export default Input;
