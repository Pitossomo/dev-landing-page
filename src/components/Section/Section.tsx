import styles from "./Section.module.css";

const Section = () => (
  <section className={styles.section}>
    <h1 className={styles.title}>
      Economize mais e aproveite também as incríveis promoções em todo nosso
      site!
    </h1>
    <div className={styles.row}>
      <div className={styles.column}>
        <div className={styles.content}>
          <p>Saia na frente</p>
          <p>
            Nosso estoque acaba rapidamente, por isso aproveite a oportunidade
            de pagar menos
          </p>
        </div>
        <div className={styles.content}>
          <p>Todo o site com ofertas incríveis</p>
          <p>Estamos com promoções imperdíveis. Pegue seu cupom e corre lá</p>
        </div>
      </div>
      <div className={styles.column}>
        <div className={styles.content}>
          <p>Promoções por tempo limitado</p>
          <p>
            A promoção acaba em 15 das e você pode economizar até 50% usando seu
            cupom de desconto.
          </p>
        </div>
        <div className={styles.content}>
          <p>Sua chance de economizar</p>
          <p>
            Esta é a chance que você estava esperando para comprar e por um
            precinho bem menor
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Section;
