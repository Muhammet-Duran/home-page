import { ThemeContext } from "./ThemeContext";
import { useState } from "react";

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const themeToggleHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <ThemeContext.Provider value={{ theme, themeToggleHandler }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeContextProvider;
