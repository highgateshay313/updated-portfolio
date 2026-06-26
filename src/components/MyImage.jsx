import styles from "./myImage.module.css";
import ProfileImage from "../assets/portfolio-cleanup-2.png";

export default function MyImage({ className }) {
  console.log(styles);
  return (
    <div className={`${styles.myImage_container} ${className || ""}`}>
      <section className={styles.myImage_section}>
        <div
          className={styles.myImage_div}
          style={{ backgroundImage: `url(${ProfileImage})` }}></div>
      </section>
    </div>
  );
}
