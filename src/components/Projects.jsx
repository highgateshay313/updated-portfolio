import styles from "./projects.module.css";
import popcornButter from "../assets/popcorn-butter-2.png";
import devPulse from "../assets/devPluse-image-2.png";
import whiteWalls from "../assets/whiteWalls-portfolio-2.png";

export default function Projects({ className }) {
  return (
    <section className={`${styles.projects_container} ${className || ""}`}>
      <div className={styles.projects_div}>
        <hr className={styles.projects_divider} />
        <h2 className={styles.project_title}>My Projects</h2>
      </div>
      <div className={styles.projects_items}>
        <figure className={styles.project_card}>
          <img
            className={styles.project_img}
            src={whiteWalls}
            alt="WhiteWalls site image"
          />
          <figcaption className={styles.project_des}>
            <p className={styles.des_title}>REACT . VITE . CSS MODULES</p>
            <p className={styles.project_name}>WhiteWalls Transportation</p>
            <p className={styles.des_para}>
              Luxury ground transport site with a Brutalist Bold dark aesthetic
              and crimson accents
            </p>
            <button className={styles.project_btn}>VISIT SITE</button>
          </figcaption>
        </figure>

        <figure className={styles.project_card}>
          <img
            className={styles.project_img}
            src={devPulse}
            alt="DevPulse Dashboard"
          />
          <figcaption className={styles.project_des}>
            <p className={styles.des_title}>REACT . GITHUB . API . RECHARTS</p>
            <p className={styles.project_name}>DevPulse Dashboard</p>
            <p className={styles.des_para}>
              GitHub activity tracker with live data visualizations and
              contribution analytics
            </p>
            <button className={styles.project_btn}>VISIT SITE</button>
          </figcaption>
        </figure>

        <figure className={styles.project_card}>
          <img
            className={styles.project_img}
            src={popcornButter}
            alt="Popcorn Butter site image"
          />
          <figcaption className={styles.project_des}>
            <p className={styles.des_title}>REACT . AV . INTEGRATION</p>
            <p className={styles.project_name}>Crestron CH5 Interface</p>
            <p className={styles.des_para}>
              Touch panel control UI for enterprise AV system management.
            </p>
            <button className={styles.project_btn}>VISIT SITE</button>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
