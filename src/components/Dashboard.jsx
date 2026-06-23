import styles from "./dashboard.module.css";
import Header from "./Header";
import Hero from "./Hero";
import MyImage from "./MyImage";
import Projects from "./Projects";
import Experties from "./Experties";
import Footer from "./Footer";

export default function Dashboard({ className }) {
  return (
    <div className={`${styles.dashboard_container}`}>
      <div className={styles.header_container}>
        <Header />
      </div>
      <div className={styles.hero_container}>
        <Hero />
      </div>
      <div className={styles.myImage_container}>
        <MyImage />
      </div>
      <div className={styles.projects_container}>
        <Projects />
      </div>
      <div className={styles.experties_container}>
        <Experties />
      </div>
      <div className={styles.footer_container}>
        <Footer />
      </div>
    </div>
  );
}
