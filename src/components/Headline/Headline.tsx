import styles from "./Headline.module.css";

const Headline = () => (
  <div className={styles.headline}>
    <div className={styles.content}>
      <h1 className={styles.title}>Cupom de desconto</h1>
      <p className={styles.subtitle}>
        Vamos te presentear com um CUPOM de 30% 😍
      </p>
      <p className={styles.text}>
        Cadastre-se no formulário ao lado para receber seu conteúdo
      </p>
    </div>
  </div>
);

export default Headline;
