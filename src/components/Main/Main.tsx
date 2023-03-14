import styles from "./Main.module.css";
import { Form, Headline } from "../";

const Main = () => (
  <main className={styles.main}>
    <Headline />
    <Form />
  </main>
);

export default Main;
