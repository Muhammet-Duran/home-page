import styles from "./Home.module.css";
import { Icon } from "Icons";
import { useThemeContext } from "store/ThemeContext";
function Home() {
  const { theme } = useThemeContext();
  return (
    <div className={`${styles.home} ${styles?.[theme]}`}>
      <h1 className={styles.name}>Muhammet Duran</h1>

      <div className={styles.description}>
        <h2 className={styles.about_title}>Hello, 👋</h2>
        <p className={styles.about_text}>
          A <span>Front-End Web Developer</span> passionate about creating
          interactive applications and experiences on the web.
        </p>
      </div>

      <ul className={styles.social_list}>
        <li className={styles.social_item}>
          <a
            href="https://github.com/Muhammet-Duran"
            target="_blank"
            rel="noreferrer"
            className={styles.social_link}
          >
            <Icon size={32} name="github" />
          </a>
        </li>
        <li className={styles.social_item}>
          <a
            href="https://twitter.com/Muhamme62632950"
            target="_blank"
            rel="noreferrer"
            className={styles.social_link}
          >
            <Icon size={32} name="twitter" />
          </a>
        </li>
        <li className={styles.social_item}>
          <a
            href="https://www.linkedin.com/in/muhammet-duran-687191202/"
            target="_blank"
            rel="noreferrer"
            className={styles.social_link}
          >
            <Icon className={styles.icon} size={32} name="linkedin" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Home;
