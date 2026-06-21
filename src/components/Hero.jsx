import styles from "./hero.module.css";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";

export default function Hero({ className }) {
  return (
    <section className={`${styles.hero_container} ${className || ""}`}>
      <div className={styles.hero_div}>
        <h1 className={styles.hero_title}>Crafting interfaces</h1>
        <span className={styles.hero_span}>that works.</span>
        <p className={styles.hero_para1}>
          Frontend development and design rooted in clarity -
        </p>
        <p className={styles.hero_para2}>
          building experiences that feel effortless to use.
        </p>
        <div className={styles.hero_btn_div}>
          <button className={styles.hero_btn}>VIEW MY WORK</button>
          <button className={styles.hero_btn}>GET IN TOUCH</button>
        </div>
        <div className={styles.hero_icon_div}>
          <FaFacebook className={styles.hero_icon} />
          <FaLinkedin className={styles.hero_icon} />
          <FaGithubSquare className={styles.hero_icon} />
          <FaDiscord className={styles.hero_icon} />
        </div>
      </div>
    </section>
  );
}
