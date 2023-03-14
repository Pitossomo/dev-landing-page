import styles from "./Form.module.css";
import { Input } from "..";

const Form = () => (
  <form className={styles.form}>
    <h1 className={styles.title}>Cadastre-se e receba seu desconto</h1>
    <Input label="Nome" />
    <Input label="Email" />
    <Input label="Estado" />
    <Input label="Cidade" />
    <Input label="6+11=?" isRequired={false} />
    <button className={styles.button}>Quero meu cupom de 30%</button>
  </form>
);

export default Form;
