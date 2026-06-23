import styles from "./footer.module.css";

export default function Footer({ className }) {
  return (
    <section className={`${styles.footer_container} ${className || ""}`}>
      <hr />
      <div className={styles.footer_div}>
        <div className={styles.footer_content}>
          <p className={styles.footer_para_1}>LET'S WORK TOGETHER</p>
          <h1 className={styles.footer_title}>
            Ready to start <br />
            something <span className={styles.footer_span}>great?</span>
          </h1>
          <p className={styles.footer_para_2}>
            Whether you need a React developer, a UI/UX designer, or someone who
            understands both the screen and the system behind it - let's talk.
          </p>
          <button className={styles.footer_btn}>SEND ME A MESSAGE</button>
        </div>
      </div>
    </section>
  );
}
