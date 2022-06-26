import { useThemeContext } from "../../store/ThemeContext";
import styles from "./Footer.module.css";
import cn from "classnames";
function Footer() {
  const { theme } = useThemeContext();
  return (
    <footer className={`${styles.footer} ${styles?.[theme]}`}>
      <div className={cn("container", styles.footer_wrapper)}>
        <p className={styles.mail_link}>m.duranim@gmail.com</p>
      </div>
    </footer>
  );
}

export default Footer;
