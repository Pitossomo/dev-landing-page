import styles from "./Main.module.css";
import Form from "../Form/Form";
import Headline from "../Headline/Headline";

const Main = () => (
  <main className={styles.main}>
    <Headline />
    <Form />
  </main>
);

export default Main;
