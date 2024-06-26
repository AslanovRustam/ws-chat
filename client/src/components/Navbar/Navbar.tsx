import React, { useContext, type FC } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import s from "./navbar.module.scss";
import Button from "../Button/Button";
import UserBar from "../UserBar/UserBar";
import Text from "../Text/Text";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  const { theme, setTheme, userName } = useContext(ThemeContext);

  const themeTogle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <header className={`${s.header} ${s[theme]}`}>
      <div className={s.themeContainer}>
        <Text text="Theme" />
        <Button onClick={themeTogle} name={theme} />
      </div>
      {userName && <UserBar />}
    </header>
  );
};

export default Navbar;
