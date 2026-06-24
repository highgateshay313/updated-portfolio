import styles from "./myImage.module.css";

export default function MyImage({ className }) {
  return (
    <section className={`${styles.myImage_container} ${className || ""}`}>
      <div className={styles.myImage_div}>test</div>
    </section>
  );
}
