import { useState } from "react";
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
      <div className={styles.switch__thumb} />
    </div>
  );
};

export default SwitchToggle;
