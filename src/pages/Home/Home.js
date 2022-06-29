import styles from "./Home.module.css";
import { useThemeContext } from "store/ThemeContext";
function Home() {
  const { theme } = useThemeContext();
  return (
    <div className={`${styles.home} ${styles?.[theme]}`}>
      <h1 className={styles.name}>Muhammet Duran</h1>
    </div>
  );
}

export default Home;
