import React, { useContext, type FC } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import s from "./navbar.module.scss";
import Button from "../Button/Button";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  const { theme, setTheme, userName } = useContext(ThemeContext);

  const themeTogle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <header className={s.header}>
      <div className={s.themeContainer}>
        <span>Theme </span>
        <Button onClick={themeTogle} name={theme} />
      </div>
      {userName && <p className="name">hello {userName}</p>}
    </header>
  );
};

export default Navbar;
