import React, { useContext, type FC } from "react";
import s from "./userbar.module.scss";
import { ThemeContext } from "../../context/ThemeContext";
import Button from "../Button/Button";

interface UserBarProps {}

const UserBar: FC<UserBarProps> = () => {
  const { userName, setUserName } = useContext(ThemeContext);

  const logOut = () => {
    setUserName("");
  };

  return (
    <div className={s.container}>
      <p className={s.name}>Hello {userName}</p>
      <Button name="Log Out" onClick={logOut} />
    </div>
  );
};

export default UserBar;
