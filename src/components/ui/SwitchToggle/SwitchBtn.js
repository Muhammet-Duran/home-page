import { useState } from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import styles from "./SwitchToggle.module.css";
const SwitchToggle = ({ themeToggle }) => {
  const [switchOn, setSwitchOn] = useState(false);

  const switchToggleHandler = () => {
    setSwitchOn((p) => !p);
    themeToggle();
  };

  return (
    <div
      className={`${styles.switch} ${switchOn ? styles.switch_right : ""}`}
      onClick={switchToggleHandler}
    >
      <span className={styles.icon_moon}>
        <BsFillMoonFill size={14} />
      </span>
      <span className={styles.icon_sun}>
        <BsFillSunFill size={14} />
      </span>
      <div className={styles.switch__thumb} />
    </div>
  );
};

export default SwitchToggle;
