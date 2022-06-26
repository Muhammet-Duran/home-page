import { useThemeContext } from "../../store/ThemeContext";
import styles from "./PageArea.module.css";
import cn from "classnames";
function Card({ children }) {
  const { theme } = useThemeContext();
  return (
    <div className={`${styles.page_area} ${styles?.[theme]}`}>
      <div className={cn("container", styles.wrapper)}>
        <main className={styles.page}>{children}</main>
      </div>
    </div>
  );
}

export default Card;
