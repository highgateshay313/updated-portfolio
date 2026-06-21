import styles from "./header.module.css";

export default function Header({ className }) {
  return (
    <section className={`${styles.header_container} ${className || ""}`}>
      <p className={styles.header_name}>Shay Highgate</p>
      <nav className={styles.nav_list}>
        <ul className={styles.nav_items}>
          <li className={styles.nav_item}>Work</li>
          <li className={styles.nav_item}>Services</li>
          <li className={styles.nav_item}>Contact</li>
        </ul>
      </nav>
      <button className={styles.header_btn}>Get in touch</button>
    </section>
  );
}
