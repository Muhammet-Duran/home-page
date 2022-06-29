import { useState } from "react";
import { useThemeContext } from "../../../store/ThemeContext";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
const linksArray = [
  { id: 0, label: "home", to: "/", isActive: true },
  {
    id: 1,
    label: "about",
    to: "/about",
    isActive: false,
  },
  {
    id: 2,
    label: " projects",
    to: "/projects",
    isActive: false,
  },
];

function Navbar() {
  const { theme } = useThemeContext();
  const [navList, setNavList] = useState(linksArray);

  const isActiveHandler = (id) => {
    const arr = [...navList];
    const inxOfActive = arr.find((item) => item.isActive === true).id; //active olan idsi
    arr[inxOfActive].isActive = false; //önceden active olan false olsun
    arr[id].isActive = true;
    setNavList(arr);
  };

  return (
    <div className={`${styles.link_list} ${styles?.[theme]}`}>
      {navList?.map(({ id, to, isActive, label }) => (
        <Link
          key={id}
          className={`${styles.link} ${isActive && styles.active}`}
          to={to}
          onClick={() => isActiveHandler(id)}
        >
          <span>{label}</span>
        </Link>
      ))}
    </div>
  );
}

export default Navbar;
