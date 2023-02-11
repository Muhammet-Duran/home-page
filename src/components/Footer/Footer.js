import { useThemeContext } from "../../store/ThemeContext";
import styles from "./Footer.module.css";
import cn from "classnames";
function Footer() {
  const { theme } = useThemeContext();
  return (
    <footer className={`${styles.footer} ${styles?.[theme]}`}>
      <div className={cn("container", styles.footer_wrapper)}>
        <a href="mailto:mhmmtduran01@gmail.com"className={styles.mail_link}>mhmmtduran01@gmail.com</a>
      </div>
    </footer>
  );
}

export default Footer;
