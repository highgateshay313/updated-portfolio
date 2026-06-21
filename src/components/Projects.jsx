import styles from "./projects.module.css";

export default function Projects({ className }) {
  return (
    <section className={`${styles.projects_container} ${className || ""}`}>
      <div className={styles.projects_div}>
        <hr className={styles.projects_divider} />
        <h2 className={styles.project_title}>Selected work</h2>
      </div>
      <div className={styles.projects_items}>
        <div className={`${styles.projects_item} ${styles.popcorn_butter}`}>
          <p className={styles.para1}>Created With React</p>
          <p className={styles.para2}>Popcorn Butter</p>
        </div>
        <div className={`${styles.projects_item} ${styles.dev_pulse}`}>
          <p className={styles.para1}>Crated With React</p>
          <p className={styles.para2}>Dev Pulse</p>
        </div>
        <div className={`${styles.projects_item} ${styles.whitewalls}`}>
          <p className={styles.para1}>Created With React + Grid</p>
          <p className={styles.para2}>WhiteWalls Transportation</p>
        </div>
      </div>
      <div className={styles.projects_experties_div}>
        <hr className={styles.projects_divider} />
        <h1>What I Do</h1>
        <div className={styles.projects_experties}>
          <div className={styles.project_experties_item}>
            <p>Frontend Development</p>
            <p>React apps with Vite, clean archieture, strong performance</p>
          </div>
          <div className={styles.project_experties_item}>
            <p>UI/UX Design</p>
            <p>
              Figma prototypes and design stystems that go straight to
              production
            </p>
          </div>
          <div className={styles.projects_experties_item}>
            <p>React Development</p>
            <p>
              Create quality React projects using State, React Router, and
              Context
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
