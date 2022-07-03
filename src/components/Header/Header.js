import SwitchToggle from "../ui/SwitchToggle/SwitchBtn";
import Navbar from "./Navbar/Navbar";
import styles from "./Header.module.css";

import cn from "classnames";
import { useThemeContext } from "../../store/ThemeContext";
function Header() {
  const { themeToggleHandler, theme } = useThemeContext();
  return (
    <header className={`${styles.header_area} ${styles?.[theme]}`}>
      <div className={cn("container", styles.header_wraper)}>
        <h1 className={styles.title}>M d</h1>
        <Navbar />
        <SwitchToggle themeToggle={themeToggleHandler} />
      </div>
    </header>
  );
}

export default Header;
