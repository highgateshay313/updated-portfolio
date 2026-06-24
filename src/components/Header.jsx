import styles from "./header.module.css";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosCloseCircle } from "react-icons/io";

export default function Header({ className }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["Work", "Services", "Contact"];

  function handleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <section className={`${styles.header_container} ${className || ""}`}>
      <p className={styles.header_name}>Shay Highgate</p>

      <nav className={styles.nav_list}>
        <ul className={styles.nav_items}>
          {navItems.map((item) => (
            <li key={item} className={styles.nav_item}>
              {item}
            </li>
          ))}
        </ul>
      </nav>

      <button className={styles.header_btn}>Get in touch</button>

      {!menuOpen && (
        <div className={styles.hamburger} onClick={handleMenu}>
          <GiHamburgerMenu className={styles.hamburger_icon} />
        </div>
      )}

      {menuOpen && (
        <div className={styles.mobile_menu}>
          <button className={styles.hamburger} onClick={handleMenu}>
            <IoIosCloseCircle className={styles.close_icon} />
          </button>
          <ul className={styles.mobile_nav_items}>
            {navItems.map((item) => (
              <li key={item} className={styles.mobile_nav_item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
