import styles from "./experties.module.css";
import { FaCode } from "react-icons/fa";
import { FaPaintbrush } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";

export default function Experties({ className }) {
  return (
    <section className={`${styles.experties_container}`}>
      <div className={styles.projects_experties_div}>
        <hr className={styles.projects_divider} />
        <h2 className={styles.experties_title}>My Experties</h2>
        <div className={styles.projects_experties}>
          <div className={`${styles.project_experties_item} ${styles.item_1}`}>
            <FaCode className={styles.experties_icon} />
            <p className={styles.item_title}>Frontend Development</p>
            <p className={styles.item_des}>
              React apps with Vite, clean archieture, strong performance
            </p>
          </div>
          <div className={`${styles.project_experties_item} ${styles.item_2}`}>
            <FaPaintbrush className={styles.experties_icon} />
            <p className={styles.item_title}>UI/UX Design</p>
            <p className={styles.item_des}>
              Figma prototypes and design stystems that go straight to
              production
            </p>
          </div>
          <div className={`${styles.project_experties_item} ${styles.item_3}`}>
            <FaReact className={styles.experties_icon} />
            <p className={styles.item_title}>React Development</p>
            <p className={styles.item_des}>
              Create quality React projects using State, React Router, and
              Context
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
