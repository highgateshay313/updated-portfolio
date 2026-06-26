import styles from "./myImage.module.css";

export default function MyImage({ className }) {
  return (
    <div className={`${styles.myImage_container} ${className || ""}`}>
      <section className={styles.myImage_section}>
        <div className={styles.myImage_div}></div>
      </section>
    </div>
  );
}
